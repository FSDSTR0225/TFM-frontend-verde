import React, { useContext, useState, useEffect } from "react";
import "./UserFavorites.css";
import AuthContext from "../../contexts/AuthContext";
import Grid from "@mui/material/Grid";

import PropertyCard from "../PropertyCard/PropertyCard";
import PaginatioinUI from "../PaginatioinUI/PaginatioinUI";

import { MoonLoader } from "react-spinners";
import NotFoundItem from "../../components/NotFoundItem/NotFoundItem";

export default function UserFavorites() {
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="UserProperties">
      <div className="UserProperties__container">
        {loading ? (
          <div className="loadingWrapper">
            <MoonLoader size="90px" color="#01796f" loading={loading} /> Is
            Loading...
          </div>
        ) : paginatedCart.length === 0 ? (
          <NotFoundItem
            errorTitle={"Could Not Find Any Item ! "}
            errorText={"Sorry we did not find your selected property"}
          />
        ) : (
          <>
            <Grid container spacing={2}>
              {paginatedCart.map((item) => (
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
            <PaginatioinUI
              allproperties={authContext.userFavorites}
              setPaginatedCart={setPaginatedCart}
              PropNumberInEachPage={6}
            />
          </>
        )}
      </div>
    </div>
  );
  // return (
  //   <div className="UserProperties">
  //     <div className="UserProperties__container">
  //       {loading ? (
  //         <div className="loadingWrapper">
  //           <MoonLoader size="90px" color="#01796f" loading={loading} /> Is
  //           Loading...
  //         </div>
  //       ) : (
  //         <>
  //           <Grid container spacing={2}>
  //             {paginatedCart.length ? (
  //               paginatedCart.map((item) => (
  //                 <Grid size={{ xs: 12, md: 12, lg: 6 }} key={item._id}>
  //                   <PropertyCard
  //                     item={item}
  //                     addNoteHandler={addNoteHandler}
  //                     addFavoriteHandler={addFavoriteHandler}
  //                     deleteFavoriteHandler={deleteFavoriteHandler}
  //                   />
  //                 </Grid>
  //               ))
  //             ) : (
  //               <NotFoundItem
  //                 errorTitle={"Could Not Find Any Item ! "}
  //                 errorText={"Sorry we did not find your selected property"}
  //               />
  //             )}
  //           </Grid>
  //           <PaginatioinUI
  //             allproperties={authContext.userFavorites}
  //             setPaginatedCart={setPaginatedCart}
  //             PropNumberInEachPage={6}
  //           />
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );
}
