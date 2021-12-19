import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';

import {
  GITHUB_ID,
  GITHUB_SECRET,
  TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET,
  NEXT_AUTH_SECRET
} from '@/constants/secrets';

export default NextAuth({
  secret: NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    }),
    TwitterProvider({
      clientId: TWITTER_CLIENT_ID,
      clientSecret: TWITTER_CLIENT_SECRET
    })
  ],
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: NEXT_AUTH_SECRET
  }
});
