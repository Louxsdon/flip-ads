import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function NavLink({ href, children }) {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a className={`nav-link ${asPath === href ? "active-link" : ""}`}>
        {children}
      </a>
    </Link>
  );
}
