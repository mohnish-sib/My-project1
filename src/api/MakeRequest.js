import { useCallback, useState } from "react";

export default function useGetCardDetails() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (setDetails, setItemId) => {
    setIsLoading(true);

    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    const ourData = data.products.map((item) => {
      return {
        id: item.id,
        title: item.title,
        brand: item.brand,
        amount: item.price,
        img: item.thumbnail,
      };
    });

    setItemId(ourData.length + 1);
    setDetails(ourData);

    setIsLoading(false);
  }, []);

  return { isLoading, fetchData };
}
