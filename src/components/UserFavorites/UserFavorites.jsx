import React, { useContext } from "react";
import "./UserFavorites.css";
import AuthContext from "../../contexts/AuthContext";
// import swal from "sweetalert";

import PropertyCard from "../PropertyCard/PropertyCard";

export default function UserFavorites() {
  const authContext = useContext(AuthContext);

  function addNoteHandler() {
    console.log("hi");
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
    <div className="UserProperties">
      <div className="UserProperties__container">
        {authContext.userFavorites.map((item) => (
          <PropertyCard
            key={item._id}
            item={item}
            addNoteHandler={addNoteHandler}
            addFavoriteHandler={addFavoriteHandler}
            deleteFavoriteHandler={deleteFavoriteHandler}
          />
        ))}
      </div>
    </div>
  );
}
