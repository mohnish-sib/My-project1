import { useCallback, useEffect, useState } from "react";
import FormComp from "./form";
import styles from "../App.module.css";
import ShowForm from "./showFormBTN";
import CardList from "./cardList";

function Main() {
  const [details, setDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    // console.log(isLoading);     // here also state is not changing immediately, but it is working down there! how????

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
    setDetails(ourData);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [searchedData, setSearchedData] = useState(details);

  const [showFrom, setShowFrom] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearchedData(
      details.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [details, searchInput]);

  return (
    <div className={styles.mainConatiner}>
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
          details={details}
          setShowFrom={setShowFrom}
        />
      )}
      <CardList
        isLoading={isLoading}
        searchedData={searchedData}
        setDetails={setDetails}
      />
    </div>
  );
}

export default Main;
