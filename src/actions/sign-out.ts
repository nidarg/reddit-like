'use server';

import { redirect } from 'next/navigation';

import * as auth from '@/auth';
// export async function signOut() {
//   return auth.signOut();
// }
export async function signOut() {
 
  redirect('api/auth/signout');
}
