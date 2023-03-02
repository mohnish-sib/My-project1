import { useCallback, useState } from "react";

export default function useGetCardDetails() {
  const [isLoading, setIsLoading] = useState(false);
  console.log("rendering", isLoading);
  const fetchData = async () => {
    setIsLoading(true);

    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    const ourData = data.products.map((item) => {
      const { id, title, brand, price: amount, thumbnail: img } = item;
      return {
        id,
        title,
        brand,
        amount,
        img,
      };
    });
    console.log("jdjs", ourData);
    setIsLoading(false);

    return ourData;
  };
  

  return { isLoading, fetchData };
}

