import { useCallback, useEffect, useState } from "react";
import FormComp from "./form";
import ShowForm from "./showFormBTN";
import CardList from "./cardList";
import useGetCardDetails from "../api/MakeRequest";

function Main() {
  const [details, setDetails] = useState([]);

  const [itemId, setItemId] = useState(0);

  const { isLoading, fetchData } = useGetCardDetails();

  useEffect(() => {
    fetchData(setDetails, setItemId);
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
