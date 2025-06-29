import React, { useContext, useState } from "react";
import "./UserFavorites.css";
import AuthContext from "../../contexts/AuthContext";
import Grid from "@mui/material/Grid";

import PropertyCard from "../PropertyCard/PropertyCard";
import PaginatioinUI from "../PaginatioinUI/PaginatioinUI";

export default function UserFavorites() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [paginatedCart, setPaginatedCart] = useState([]);

  const authContext = useContext(AuthContext);

  function addNoteHandler() {
    console.log("hi");
  }
  function addFavoriteHandler(itemId) {
    fetch(`${apiUrl}/users/favorite/${authContext.userInfos._id}`, {
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
    fetch(`${apiUrl}/users/favorite/${authContext.userInfos._id}`, {
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
          {paginatedCart.map((item) => (
            <Grid
              size={{ xs: 12, md: 12, lg: 6 }}
              key={item._id}
              
            >
              <PropertyCard
                item={item}
                addNoteHandler={addNoteHandler}
                addFavoriteHandler={addFavoriteHandler}
                deleteFavoriteHandler={deleteFavoriteHandler}
              />
            </Grid>
          ))}
        </Grid>

        <PaginatioinUI
          allproperties={authContext.userFavorites}
          setPaginatedCart={setPaginatedCart}
          PropNumberInEachPage={6}
        />
      </div>
    </div>
  );
}
