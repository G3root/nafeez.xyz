import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      sub: string;
      name: string;
      email: string;
      image: string;
    };
  }
}
