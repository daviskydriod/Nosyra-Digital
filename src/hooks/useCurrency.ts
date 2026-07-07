// src/hooks/useCurrency.ts
import { useState } from "react";

export type Currency = "USD" | "NGN";

export const useCurrency = (initial: Currency = "USD") => {
  const [currency, setCurrency] = useState<Currency>(initial);

  const format = (usd: number | null, ngn: number | null): string => {
    if (usd === null || ngn === null) return "Custom Quote";
    if (currency === "USD") return `$${usd.toLocaleString()}`;
    return `₦${ngn.toLocaleString()}`;
  };

  const toggle = () => setCurrency((c) => (c === "USD" ? "NGN" : "USD"));

  return { currency, setCurrency, toggle, format };
};
