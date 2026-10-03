import { forwardRef } from "react";
import { NavLink as RouterNavLink, type NavLinkProps } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName: _pendingClassName, ...props }, ref) => (
    <RouterNavLink ref={ref} className={cn(className)} activeClassName={activeClassName} {...props} />
  ),
);

NavLink.displayName = "NavLink";
export { NavLink };
