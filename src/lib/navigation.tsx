"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { usePathname, useRouter, useParams as useNextParams } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { forwardRef, useEffect } from "react";

export { usePathname } from "next/navigation";

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  replace?: boolean;
  scroll?: boolean;
  children?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, replace, scroll, children, ...props }, ref) {
  const linkProps: NextLinkProps = { href: to, ...(replace !== undefined ? { replace } : {}), ...(scroll !== undefined ? { scroll } : {}) };
  return <NextLink ref={ref} {...linkProps} {...props}>{children}</NextLink>;
});

export function useLocation() {
  return { pathname: usePathname() };
}

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to === -1) router.back();
      return;
    }
    options?.replace ? router.replace(to) : router.push(to);
  };
}

export function useParams<T extends Record<string, string | string[] | undefined> = Record<string, string | string[] | undefined>>() {
  return useNextParams() as T;
}

export function Navigate({ to, replace = false }: { to: string; replace?: boolean }) {
  const router = useRouter();
  useEffect(() => {
    replace ? router.replace(to) : router.push(to);
  }, [replace, router, to]);
  return null;
}

export interface NavLinkProps extends LinkProps {
  activeClassName?: string;
  pendingClassName?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink({ className, activeClassName, to, ...props }, ref) {
  const pathname = usePathname();
  const isActive = pathname === to || (to !== "/" && pathname.startsWith(`${to}/`));
  return <Link ref={ref} to={to} className={`${className ?? ""} ${isActive ? activeClassName ?? "" : ""}`.trim()} {...props} />;
});
