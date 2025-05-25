import React, { useEffect, useState } from "react";
import "./TopSearchFilter.css";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export default function TopSearchFilter({
  propertyArr,
  setFilteredArr,
}) {
  const [bedrooms, setBedrooms] = useState("all");
  const [bathrooms, setBathrooms] = useState("all");
  const [lowPrice, setLowPrice] = useState("No Limit");
  const [highPrice, setHighPrice] = useState("No Limit");
  const [pets, setPets] = useState("No Limit");
  const [minors, setMinors] = useState("No Limit");
  const [couples, setCouples] = useState("No Limit");

  useEffect(() => {
    handleFiltering();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bedrooms, bathrooms, lowPrice, highPrice, pets, minors, couples]);

  async function handleFiltering() {
    let result = await propertyArr.filter((item) => {
      return (
        (bedrooms !== "all"
          ? Number(item.bedrooms) === Number(bedrooms)
          : true) &&
        (bathrooms !== "all"
          ? Number(item.bathrooms) === Number(bathrooms)
          : true) &&
        (lowPrice !== "No Limit"
          ? Number(item.price) > Number(lowPrice)
          : true) &&
        (highPrice !== "No Limit"
          ? Number(item.price) < Number(highPrice)
          : true) &&
        (pets !== "No Limit" ? String(item.pets) === String(pets) : true) &&
        (minors !== "No Limit"
          ? String(item.minors) === String(minors)
          : true) &&
        (couples !== "No Limit"
          ? String(item.couples) === String(couples)
          : true)
      );
    });
    setFilteredArr(result);
  }
  return (
    <div className="TopSearchFilter">
      <div className="TopSearchFilter__container">
        <div className="TopSearchFilter__item">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-Bedrooms">Bedrooms</InputLabel>
            <Select
              labelId="select-Bedrooms"
              id="select-Bedrooms"
              name="select-Bedrooms"
              value={bedrooms}
              label="Bedrooms"
              onChange={(e) => {
                setBedrooms(e.target.value);
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="1">One</MenuItem>
              <MenuItem value="2">Two</MenuItem>
              <MenuItem value="3">Threa</MenuItem>
              <MenuItem value="4">Four</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="TopSearchFilter__item">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-bathrooms">Bathrooms</InputLabel>
            <Select
              labelId="select-bathrooms"
              id="select-bathrooms"
              name="select-bathrooms"
              value={bathrooms}
              label="Bathrooms"
              onChange={(e) => {
                setBathrooms(e.target.value);
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="1">One</MenuItem>
              <MenuItem value="2">Two</MenuItem>
              <MenuItem value="3">Threa</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="TopSearchFilter__item">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-lowPrice">LowPrice</InputLabel>
            <Select
              labelId="select-lowPrice"
              id="select-lowPrice"
              name="select-lowPrice"
              value={lowPrice}
              label="LowPrice"
              onChange={(e) => {
                setLowPrice(e.target.value);
              }}
            >
              <MenuItem value="No Limit">No Limit</MenuItem>
              <MenuItem value="300">300</MenuItem>
              <MenuItem value="600">600</MenuItem>
              <MenuItem value="900">900</MenuItem>
              <MenuItem value="1200">1200</MenuItem>
              <MenuItem value="1500">1500</MenuItem>
              <MenuItem value="1800">1800</MenuItem>
              <MenuItem value="2100">2100</MenuItem>
              <MenuItem value="2400">2400</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="TopSearchFilter__item">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-highPrice">HighPrice</InputLabel>
            <Select
              labelId="select-highPrice"
              id="select-highPrice"
              name="select-highPrice"
              value={highPrice}
              label="HighPrice"
              onChange={(e) => {
                setHighPrice(e.target.value);
              }}
            >
              <MenuItem value="No Limit">No Limit</MenuItem>
              <MenuItem value="300">300</MenuItem>
              <MenuItem value="600">600</MenuItem>
              <MenuItem value="900">900</MenuItem>
              <MenuItem value="1200">1200</MenuItem>
              <MenuItem value="1500">1500</MenuItem>
              <MenuItem value="1800">1800</MenuItem>
              <MenuItem value="2100">2100</MenuItem>
              <MenuItem value="2400">2400</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="TopSearchFilter__item">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-pets">Pets</InputLabel>
            <Select
              labelId="select-pets"
              id="select-pets"
              name="select-pets"
              value={pets}
              label="Pets"
              onChange={(e) => {
                setPets(e.target.value);
              }}
            >
              <MenuItem value="No Limit">No Limit</MenuItem>
              <MenuItem value="true">YES</MenuItem>
              <MenuItem value="false">NO</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="TopSearchFilter__item">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-minors">Minors</InputLabel>
            <Select
              labelId="select-minors"
              id="select-minors"
              name="select-minors"
              value={minors}
              label="minors"
              onChange={(e) => {
                setMinors(e.target.value);
              }}
            >
              <MenuItem value="No Limit">No Limit</MenuItem>
              <MenuItem value="true">YES</MenuItem>
              <MenuItem value="false">NO</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="TopSearchFilter__item">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-couples">Couples</InputLabel>
            <Select
              labelId="select-couples"
              id="select-couples"
              name="select-couples"
              value={couples}
              label="couples"
              onChange={(e) => {
                setCouples(e.target.value);
              }}
            >
              <MenuItem value="No Limit">No Limit</MenuItem>
              <MenuItem value="true">YES</MenuItem>
              <MenuItem value="false">NO</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
