import React, { useEffect, useState } from "react";
import "./UserProperties.css";
import Swal from "sweetalert2";

import PropertyCard from "../PropertyCard/PropertyCard";

export default function UserProperties({ currentUser }) {
  const url = `http://localhost:4000/properties/owner/${currentUser._id}`;

  const [allproperties, setAllproperties] = useState([]);

  useEffect(() => {
    getUserProperties();
  }, [getUserProperties]);

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
    const url = `http://localhost:4000/properties/${propId}`;
    await fetch(url, {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getUserProperties() {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllproperties(data);
      });
  }

  return (
    <div className="UserProperties">
      <div className="UserProperties__container">
        {allproperties.map((item) => (
          <PropertyCard
            key={item._id}
            item={item}
            deletePropertyHandler={deletePropertyHandler}
            getUserProperties={getUserProperties}
          />
        ))}
      </div>
    </div>
  );
}
