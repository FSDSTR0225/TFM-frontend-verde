import React, { useEffect, useState } from "react";
import "./TopMain.css";
import { FaSearch } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { useNavigate } from "react-router";
import PolyDrawer from "../MapSearch/PolyDrawer/PolyDrawer";
import Swal from "sweetalert2";

export default function TopMain() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [contractCat, setContractCat] = useState("");
  const [contractsCatItems, setContractsCatItems] = useState([]);

  const [typeCat, setTypeCat] = useState("Apartment");
  const [typeCatItems, setTypeCatItems] = useState([]);

  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("Madrid");

  const [isShowMap, setIsShowMap] = useState(false);
  const [polyArray, setPolyArray] = useState([]);
  const [mapCenter, setMapCenter] = useState([40.416775, -3.70379]);

  const Proviences = [
    { id: 1, name: "Madrid" },
    { id: 2, name: "Barcelona" },
    { id: 31, name: "Valencia" },
    // { id: 4, name: "Almería" },
    // { id: 5, name: "Asturias" },
    // { id: 6, name: "Ávila" },
    // { id: 7, name: "Baleares" },
    // { id: 8, name: "Álava" },
    // { id: 9, name: "Burgos" },
    { id: 10, name: "Cádiz" },
    // { id: 11, name: "Cantabria" },
    { id: 12, name: "Castellón" },
    // { id: 13, name: "Ciudad Real" },
    { id: 15, name: "Granada" },
    // { id: 16, name: "Guadalajara" },
    // { id: 17, name: "Huelva" },
    // { id: 18, name: "La Rioja" },
    { id: 19, name: "Las Palmas" },
    { id: 20, name: "León" },
    // { id: 21, name: "A Coruña" },
    { id: 22, name: "Málaga" },
    // { id: 23, name: "Murcia" },
    // { id: 24, name: "Palencia" },
    // { id: 25, name: "Pontevedra" },
    { id: 26, name: "Salamanca" },
    // { id: 27, name: "Segovia" },
    { id: 28, name: "Sevilla" },
    // { id: 29, name: "Soria" },
    // { id: 30, name: "Toledo" },
    // { id: 31, name: "Alicante" },
    { id: 32, name: "Valladolid" },
    // { id: 33, name: "Vizcaya" },
    { id: 34, name: "Zaragoza" },
  ];

  useEffect(() => {
    getcontractCatItems();
    getTypeCatItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCityList(province);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [province]);

  const getcontractCatItems = async () => {
    await fetch(`${apiUrl}/contractCategory`)
      .then((res) => res.json())
      .then((data) => setContractsCatItems(data));
  };

  const getTypeCatItems = async () => {
    await fetch(`${apiUrl}/typeCategory`)
      .then((res) => res.json())
      .then((data) => setTypeCatItems(data));
  };

  const getCityList = async (province) => {
    await fetch(`${apiUrl}/cities/province/${province}`)
      .then((res) => res.json())
      .then((data) => setCityList(data));
  };

  function setContractCatHandler(event) {
    setContractCat(event.target.value);
    document.querySelectorAll(".TopMain__contractCatBtn").forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  }

  function setTypeCatHAndler(event) {
    setTypeCat(event.target.value);
    console.log(typeCat);
  }

  const handleSearch = async () => {
    !city || !contractCat || !typeCat
      ? Swal.fire({
          icon: "error",
          title: "Please, Select All Items",
          text: "there is some unselected item!",
        })
      : navigate(`/searchproperty/${city}/${typeCat}/${contractCat}`, {
          state: { data: polyArray },
        });
  };
  const handleMap = async () => {
    !city || !contractCat || !typeCat
      ? Swal.fire({
          icon: "error",
          title: "Please, Select All Items",
          text: "there is some unselected item!",
        })
      : setIsShowMap(true);
  };

  return (
    <div className="TopMain__container">
      <div className="TopMain__itemWrapper">
        <div className="TopMain__item">
          {contractsCatItems.map((item) => (
            <button
              key={item._id}
              className="TopMain__contractCatBtn"
              value={item.name}
              onClick={(e) => {
                setContractCatHandler(e);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="TopMain__item">
          <select
            className="TopMain__settypeCat"
            onChange={(e) => setTypeCatHAndler(e)}
          >
            {typeCatItems.map((item) => (
              <option key={item._id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="TopMain__itemWrapper">
        <div className="TopMain__item">
          <select
            className="TopMain__settypeCat"
            onChange={(e) => {
              setProvince(e.target.value);
              setCity("");
            }}
          >
            {Proviences.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="TopMain__item">
          <select
            id="citySelector"
            className="TopMain__settypeCat"
            onChange={(e) => {
              setCity(e.target.value);
              cityList.map((city) => {
                if (city.name === e.target.value) {
                  if (city.location[0]) {
                    setMapCenter(JSON.parse(city.location[0]));
                  }
                }
              });
            }}
          >
            <option value="">Poblacion</option>
            {cityList.map((item) => (
              <option key={item._id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="TopMain__item">
        <button className="Topmain__searchBtn" onClick={handleSearch}>
          <FaSearch className="Topmain__searchIcon" />
          Search
        </button>
        <button className="Topmain__searchBtn" onClick={handleMap}>
          <LuMapPinned className="Topmain__searchIcon" />
          Map
        </button>
      </div>
      {isShowMap && (
        <PolyDrawer
          setIsShowMap={setIsShowMap}
          handleSearch={handleSearch}
          setPolyArray={setPolyArray}
          mapCenter={mapCenter}
          city={city}
          typeCat={typeCat}
          contractCat={contractCat}
        />
      )}
    </div>
  );
}
