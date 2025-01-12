'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials,logout } from '@/lib/features/auth/auth.reducers';

export function SessionSync() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user?.token) {
      dispatch(setCredentials({ token: session.user.token }));
    } else {
      dispatch(logout());
    }
  }, [session, dispatch]);

  return null;
}