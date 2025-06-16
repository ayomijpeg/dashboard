// auth.config.ts (or wherever you're defining this)
import type { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async signIn({ user, account, profile }) {
      return true;
    },
  },
  providers: [], // Add your auth providers here (e.g., GoogleProvider, CredentialsProvider)
};
