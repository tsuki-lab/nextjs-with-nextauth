import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
} satisfies NextAuthOptions;
