import React, { useContext, useEffect, useState } from "react";
import "./SearchProp.css";
import TopSearchFilter from "../../components/TopSearchFilter/TopSearchFilter";
import { useParams } from "react-router";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import AuthContext from "../../contexts/AuthContext";
import NotFoundItem from "../../components/NotFoundItem/NotFoundItem";
import TopMain from "../../components/TopMain/TopMain";

export default function SearchProp() {
  const authContext = useContext(AuthContext);
  const params = useParams();
  const [propertyArr, setPropertyArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedContract, setSelectedContract] = useState("");

  useEffect(() => {
    setSelectedCity(params.city);
    setSelectedType(params.type);
    setSelectedContract(params.contract);
  }, [params, params.city]);

  useEffect(() => {
    selectedCity &&
      selectedType &&
      selectedContract &&
      fetch(
        `http://localhost:4000/properties/search/${selectedCity}/${selectedContract}/${selectedType}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPropertyArr(data.properties);
          setFilteredArr(data.properties);
        });
  }, [selectedCity, selectedContract, selectedType]);

  function addNoteHandler(itemId) {
    console.log(itemId);
  }

  function addFavoriteHandler(itemId) {
    fetch(`http://localhost:4000/users/favorite/${authContext.userInfos._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: itemId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  function deleteFavoriteHandler(itemId) {
    fetch(`http://localhost:4000/users/favorite/${authContext.userInfos._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: itemId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="SearchProps">
      <TopMain />
      <TopSearchFilter
        propertyArr={propertyArr}
        filteredArr={filteredArr}
        setFilteredArr={setFilteredArr}
      />
      <div className="propertyCardWrapper">
        {filteredArr.length ? (
          filteredArr.map((item) => (
            <PropertyCard
              item={item}
              key={item._id}
              addNoteHandler={addNoteHandler}
              addFavoriteHandler={addFavoriteHandler}
              deleteFavoriteHandler={deleteFavoriteHandler}
            />
          ))
        ) : (
          <NotFoundItem
            errorTitle={"Could Not Find Any Item ! "}
            errorText={"Sorry we did not find your selected property"}
          />
        )}
      </div>
    </div>
  );
}
