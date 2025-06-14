import React, { useContext } from "react";
import "./UserFavorites.css";
import AuthContext from "../../contexts/AuthContext";
import Grid from "@mui/material/Grid";

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
        authContext.updateUserInfos({ userFavorites: data.favorites });
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
        authContext.updateUserInfos({ userFavorites: data.favorites });
      });
  }

  return (
    <div className="UserProperties">
      <div className="UserProperties__container">
        <Grid container spacing={2}>
          {authContext.userFavorites.map((item) => (
            <Grid size={{ xs: 12, md: 12, lg: 6 }} key={item._id}>
              <PropertyCard
                item={item}
                addNoteHandler={addNoteHandler}
                addFavoriteHandler={addFavoriteHandler}
                deleteFavoriteHandler={deleteFavoriteHandler}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
