import { useCallback, useEffect, useState } from "react";
import Card from "./card/Card";
import FormComp from "./form/Form";
import "../App.css";
import ShowForm from "./showFormBTN/ShowForm";

function Main() {
  const [details, setDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(() => {
    // setIsLoading(true);
    // console.log(isLoading)  // state is not updating immediately
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const ourData = data.products.map((item) => {
          return {
            id: item.id,
            title: item.title,
            info: item.brand,
            // category:item.category,
            amount: item.price,
            img: item.thumbnail,
          };
        });
        setDetails(ourData);
      });
    // setIsLoading(false);
  },[]);

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
          details={details}
          setShowFrom={setShowFrom}
        />
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="cards-container">
          {searchedData.map((child, idx) => (
            <Card
              key={child.id}
              title={child.title}
              amount={child.amount}
              info={child.info}
              setDetails={setDetails}
              id={child.id}
              img={child.img}
            />
          ))}
        </div>
      )}

      {/* <img
        width="25%"
        src="https://www.oyorooms.com/blog/wp-content/uploads/2019/06/7-Major-Mountain-Ranges-in-India-that-are-worth-seeing.jpg"
        loading="lazy"
        alt="my img"
      ></img> */}
    </>
  );
}

export default Main;
