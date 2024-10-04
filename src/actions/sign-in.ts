'use server';

import { redirect } from 'next/navigation';

// import * as auth from '@/auth';
// export async function googleSignIn() {
//   return auth.signIn('google');
// }
// export async function githubSignIn() {
//   return auth.signIn('github');
// }

export async function signIn() {
  redirect('api/auth/signin');
}
