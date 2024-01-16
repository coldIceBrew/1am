import { DefaultUser } from "next-auth";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: DefaultUser & { id: string };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid: string;
  }
}
