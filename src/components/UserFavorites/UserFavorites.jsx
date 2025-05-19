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
  function addFavoriteHandler() {
    console.log("hi");
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
          />
        ))}
      </div>
    </div>
  );
}
