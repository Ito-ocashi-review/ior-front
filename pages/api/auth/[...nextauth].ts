import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  site: process.env.SITE_URL || 'http://localhost:3000',
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGO_URI || 'mongodb://mongo:27017/ito-ocashi-review',

  jwt: true,
  sessionMaxAge: 30 * 24 * 60 * 60 * 1000, // Expire sessions after 30 days of being idle
  sessionUpdateAge: 24 * 60 * 60 * 1000, // Update session expiry only if session was updated more recently than the last 24 hours
};

export default (req, res) => NextAuth(req, res, options);
