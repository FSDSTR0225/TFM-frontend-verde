import React, { useEffect, useState } from "react";
import "./UserProperties.css";
import swal from "sweetalert";

import PropertyCard from "../PropertyCard/PropertyCard";

export default function UserProperties({ currentUser }) {
  const url = `http://localhost:4000/properties/owner/${currentUser._id}`;

  const [allproperties, setAllproperties] = useState([]);

  useEffect(() => {
    getUserProperties();
  }, []);


  function deletePropertyHandler(propId) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: ["Cancel", "Yes, Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        sendDeleteToServer(propId);
        swal(" Your property has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your property is safe!");
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
