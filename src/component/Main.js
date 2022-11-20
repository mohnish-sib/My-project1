import { useCallback, useEffect, useState } from "react";
import FormComp from "./form";
import ShowForm from "./showFormBTN";
import CardList from "./cardList";

function Main() {
  const [details, setDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [itemId, setItemId] = useState(0);

  const fetchData = useCallback(async () => {
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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [searchedData, setSearchedData] = useState(details);

  const [showFrom, setShowFrom] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const filterData = useCallback(() => {
    setSearchedData(
      details.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, details]);

  useEffect(() => {
    filterData();
  }, [searchInput, details, filterData]);

  return (
    <>
      <div className="sib-typo_heading-xl">Welcome!</div>
      {!showFrom ? (
        <ShowForm
          setShowFrom={setShowFrom}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      ) : (
        <FormComp
          setDetails={setDetails}
          itemId={itemId}
          setItemId={setItemId}
          setShowFrom={setShowFrom}
        />
      )}
      <CardList
        isLoading={isLoading}
        searchedData={searchedData}
        setDetails={setDetails}
      />
    </>
  );
}

export default Main;
