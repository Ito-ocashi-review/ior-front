import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGO_URI || 'mongodb://mongo:27017/ior-back',

  sessionMaxAge: 30 * 24 * 60 * 60 * 1000, // Expire sessions after 30 days of being idle
  sessionUpdateAge: 24 * 60 * 60 * 1000, // Update session expiry only if session was updated more recently than the last 24 hours
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req: any, res: any) => NextAuth(req, res, options);
