import { useState, useEffect } from "react";

export function useCurrency() {
  const [currency, setCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.currency) {
          setCurrency(data.currency);
        }
      } catch (error) {
        console.error("Failed to fetch currency:", error);
        try {
          const localeCurrency = new Intl.NumberFormat().resolvedOptions().currency;
          if (localeCurrency) setCurrency(localeCurrency);
        } catch (e) {
          setCurrency("USD");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrency();
  }, []);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return { currency, isLoading, formatAmount };
}
