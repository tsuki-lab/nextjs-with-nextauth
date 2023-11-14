"use client";
import { signOut } from "next-auth/react";

export const SignOut = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} onClick={() => signOut()}>
      {children}
    </button>
  );
};
