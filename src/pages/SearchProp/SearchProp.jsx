import React, { useContext, useEffect, useState } from "react";
import "./SearchProp.css";
import TopSearchFilter from "../../components/TopSearchFilter/TopSearchFilter";
import { useParams } from "react-router";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import AuthContext from "../../contexts/AuthContext";

export default function SearchProp() {
  const authContext = useContext(AuthContext);
  const params = useParams();
  const [propertyArr, setPropertyArr] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setSelectedCity(params.city);
  }, [params.city]);

  useEffect(() => {
    selectedCity &&
      fetch(`http://localhost:4000/properties/city/${selectedCity}`)
        .then((res) => res.json())
        .then((data) => setPropertyArr(data.properties));
  }, [selectedCity]);

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
    <div className="TopSearchFilter">
      <TopSearchFilter />
      <div className="propertyCardWrapper">
        {propertyArr
          ? propertyArr.map((item) => (
              <PropertyCard
                item={item}
                key={item._id}
                addNoteHandler={addNoteHandler}
                addFavoriteHandler={addFavoriteHandler}
                deleteFavoriteHandler={deleteFavoriteHandler}
              />
            ))
          : null}
      </div>
    </div>
  );
}
