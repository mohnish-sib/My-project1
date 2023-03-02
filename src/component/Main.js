import { useCallback, useEffect, useState } from "react";
import FormComp from "./form";
import ShowForm from "./showFormBTN";
import CardList from "./cardList";
import useGetCardDetails from "../api/MakeRequest";

function Main() {
  const [details, setDetails] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [searchedData, setSearchedData] = useState(details);

  const { isLoading, fetchData } = useGetCardDetails();
  console.log("12342",isLoading)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const fechedData = await fetchData();
  //  console.log(fechedData);
    setItemId(fechedData.length + 1);
    setDetails(fechedData);
  }


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

