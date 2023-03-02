import { useCallback, useEffect, useState } from "react";
import FormComp from "./form";
import ShowForm from "./showFormBTN";
import CardList from "./cardList";
import useGetCardDetails from "../api/MakeRequest";
import styles from "./card/Card.module.css";

var colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

function Main() {
  const [details, setDetails] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [searchedData, setSearchedData] = useState(details);

  const { isLoading, fetchData } = useGetCardDetails();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const fechedData = await fetchData();
    //  console.log(fechedData);
    setItemId(fechedData.length + 1);
    setDetails(fechedData);
  };

  const [showFrom, setShowFrom] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isDisco, setIsDisco] = useState(false);
  const [discoColor, setDiscoColor] = useState("white");

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

  useEffect(() => {
    if (isDisco) {
      const interval = setInterval(() => {
        const idx = Math.floor(Math.random() * 48);
        setDiscoColor(colorArray[idx]);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isDisco]);

  return (
    <div
      className={styles.App}
      style={{
        backgroundColor: discoColor,
      }}
    >
      <div
        className={
          isDisco
            ? `sib-typo_heading-xl ${styles.cardDisco}`
            : `sib-typo_heading-xl`
        }
      >
        Welcome!
      </div>
      {!showFrom ? (
        <ShowForm
          setShowFrom={setShowFrom}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setIsDisco={setIsDisco}
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
        isDisco={isDisco}
      />
    </div>
  );
}

export default Main;
