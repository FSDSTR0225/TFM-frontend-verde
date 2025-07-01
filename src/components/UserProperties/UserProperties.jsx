import React, { useEffect, useState } from "react";
import "./UserProperties.css";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";

import PropertyCard from "../PropertyCard/PropertyCard";
import PaginatioinUI from "../PaginatioinUI/PaginatioinUI";

import { MoonLoader } from "react-spinners";

export default function UserProperties({ currentUser }) {
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;

  const [allproperties, setAllproperties] = useState([]);
  const [paginatedCart, setPaginatedCart] = useState([]);

  const PropNumberInEachPage = 6;

  useEffect(() => {
    getUserProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUserProperties() {
    await fetch(`${apiUrl}/properties/owner/${currentUser._id}`)
      .then((response) => response.json())
      .then((data) => {
        setAllproperties(data);
      })
      .then(setLoading(false));
  }

  function deletePropertyHandler(propId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4fc074",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        sendDeleteToServer(propId);
        Swal.fire({
          title: "Deleted!",
          text: "Item has been deleted.",
          icon: "success",
        });
      }
    });
  }
  const sendDeleteToServer = async (propId) => {
    await fetch(`${apiUrl}/properties/${propId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok === true) {
          console.log("error in response", res.msg);
        }
        getUserProperties();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="UserProperties">
      {loading ? (
        <div className="loadingWrapper">
          <MoonLoader size="90px" color="#01796f" loading={loading} /> Is
          Loading...
        </div>
      ) : (
        <>
          <Grid container spacing={2}>
            {paginatedCart
              ? paginatedCart.map((item) => (
                  <Grid size={{ xs: 12, md: 12, lg: 6 }} key={item._id}>
                    <PropertyCard
                      item={item}
                      deletePropertyHandler={deletePropertyHandler}
                      getUserProperties={getUserProperties}
                    />
                  </Grid>
                ))
              : null}
          </Grid>
          <PaginatioinUI
            allproperties={allproperties}
            setPaginatedCart={setPaginatedCart}
            PropNumberInEachPage={PropNumberInEachPage}
          />
        </>
      )}
    </div>
  );
}
