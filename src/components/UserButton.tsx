import avatarPlaceholder from '@/assets/images/avatar_placeholder.png';
import { LogOut, LogIn } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import * as actions from '@/actions';

// interface UserButtonProps {
//   user: User;
// }

export default function UserButton() {
  const session = useSession();
  const user = session.data?.user;

  if (session.status === 'loading') {
    return null;
  } else if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='icon' className='flex-none rounded-full'>
            <Image
              src={user.image || avatarPlaceholder}
              alt='User profile picture'
              width={50}
              height={50}
              className='aspect-square rounded-full bg-background object-cover'
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>{user.name || 'User'}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <form action={actions.signOut}>
              <Button variant='destructive' type='submit'>
                <LogOut className='mr-2 h-4 w-4' /> Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return (
      <form action={actions.signIn}>
        <Button variant='outline' type='submit'>
          <LogIn className='mr-2 h-4 w-4' /> Sign In
        </Button>
      </form>
    );
  }
}
