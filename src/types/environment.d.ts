namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    DATABASE_URL: string;
    SHADOW_DATABASE_URL: string;
    NEXT_AUTH_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    TWITTER_CLIENT_ID: string;
    TWITTER_CLIENT_SECRET: string;
    NEXTAUTH_URL: string;
    VERCEL_URL: string;
  }
}
