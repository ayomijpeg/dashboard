// app/lib/actions/signout.ts
'use server';

import { signOut } from '../../app/auth'; // or use 'next-auth/react' if that’s what you're using

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
