


import Link from 'next/link';
import UserButton from './UserButton';

import Search from './Search';

export default function Navbar() {
  

  return (
    <header className='sticky top-0 bg-gray-700 px-3 shadow-sm'>
      <nav className='mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3'>
        <Link href='/' className='font-bold text-white'>
          tellMe
        </Link>
        <Search />
        <UserButton/>
      </nav>
    </header>
  );
}
