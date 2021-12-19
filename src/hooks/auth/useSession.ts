import useSWR from 'swr';
import { fetcher } from '@/lib/utils';

import { Session } from 'next-auth';

export function useSession() {
  const { data: session, error } = useSWR<Session>(
    '/api/auth/session',
    fetcher
  );
  let data = null;
  if (session && Object.keys(session).length) {
    data = session;
  }
  return { data, isLoading: !error && !data, isError: error };
}
