import React, { useState, useContext } from "react";
import "./NewProperty.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ModalMaterial from "./../../components/ModalMaterial/ModalMaterial";
import { Button, Select, MenuItem, InputLabel } from "@mui/material";
import AuthContext from "../../contexts/AuthContext";

export default function NewProperty() {
  const authContext = useContext(AuthContext);

  const [bedrooms, setbedrooms] = useState("1");
  const [bathrooms, setbathrooms] = useState("1");
  const [couples, setcouples] = useState("true");
  const [pets, setpets] = useState("true");
  const [minors, setminors] = useState("true");
  const [duration, setduration] = useState("3 Months");
  const [contractCategory, setContractCategory] = useState("BUY");
  const [typeCategory, setTypeCategory] = useState("Apartment");
  const [city, setCity] = useState("Madrid");

  const [isShowModal, setIsShowModal] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(true);

  const modalText = {
    success: "Now your property is registered!",
    fail: "Property register Fail. Please try again Later",
  };
  const url = "http://localhost:4000/properties";
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formDatas) => {
    let propertyData = {
      title: formDatas.title,
      desc: formDatas.desc,
      price: formDatas.price,
      location: formDatas.location,
      duration: formDatas.duration,
      bedrooms: formDatas.bedrooms,
      bathrooms: formDatas.bathrooms,
      couples: formDatas.couples,
      pets: formDatas.pets,
      minors: formDatas.minors,
      owner: authContext.userInfos._id,
      contractCategory: formDatas.contractCategory,
      typeCategory: formDatas.typeCategory,
      image: formDatas.image,
      city: formDatas.city,
    };
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(propertyData),
    })
      .then((resposnse) => {
        if (resposnse.status === 201) {
          setIsModalSuccess(true);
        } else {
          setIsModalSuccess(false);
        }
        setIsShowModal(true);
        console.log(resposnse);
        console.log(propertyData);
      })
      .catch((err) => {
        console.log(err);
        setIsModalSuccess(false);
        setIsShowModal(true);
      });
  };

  return (
    <div className="Property">
      <div className="Property__wrapper">
        <div className="PropertyForm__Container">
          <div className="PropertyForm__Title">Crerate your new property</div>
          <form className="PropertyForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="PropertyForm__right">
              <TextField
                type="text"
                className="PropertyForm__input"
                {...register("title", {
                  required: true,
                  // maxLength: 20,
                  minLength: 6,
                })}
                aria-invalid={errors.title ? "true" : "false"}
                error={errors.title}
                // id="standard-error-helper-text"
                label="Title"
                defaultValue=""
                helperText={errors.title ? "Please enter valid title!" : null}
                // color=""
                variant="standard"
              />
              <TextField
                className="PropertyForm__input"
                type="text"
                {...register("desc", {
                  required: true,
                  // maxLength: 35,
                  minLength: 10,
                })}
                aria-invalid={errors.desc ? "true" : "false"}
                error={errors.desc}
                // id="standard-error-helper-text"
                label="Description"
                defaultValue=""
                // color=""
                helperText={errors.desc ? "Please enter valid desc!" : null}
                variant="standard"
              />
              <TextField
                className="PropertyForm__input"
                type="file"
                name="file"
                {...register("image", {
                  required: true,
                  minLength: 10,
                })}
                aria-invalid={errors.image ? "true" : "false"}
                error={errors.image}
                // id="standard-error-helper-text"
                label="image"
                defaultValue=""
                // color=""
                helperText={errors.image ? "Please enter valid image!" : null}
                variant="standard"
              />

              <div className="inputHolder">
                <InputLabel id="select-Bedrooms">Bedrooms</InputLabel>
                <Select
                  {...register("bedrooms", {
                    required: true,
                  })}
                  labelId="select-Bedrooms"
                  id="demo-simple-select"
                  value={bedrooms}
                  label="Bedrooms"
                  onChange={(e) => setbedrooms(e.target.value)}
                >
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Threa</MenuItem>
                  <MenuItem value="4">Four</MenuItem>
                </Select>
              </div>
              <div className="inputHolder">
                <InputLabel id="select-bathrooms">bathrooms</InputLabel>
                <Select
                  {...register("bathrooms", {
                    required: true,
                  })}
                  labelId="select-bathrooms"
                  id="demo-simple-select"
                  value={bathrooms}
                  label="bathrooms"
                  onChange={(e) => setbathrooms(e.target.value)}
                >
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                </Select>
              </div>
              <div className="inputHolder">
                <InputLabel id="select-pets">PETS</InputLabel>
                <Select
                  {...register("pets", {
                    required: true,
                  })}
                  labelId="select-pets"
                  id="demo-simple-select"
                  value={pets}
                  label="pets"
                  onChange={(e) => setpets(e.target.value)}
                >
                  <MenuItem value="true">YES</MenuItem>
                  <MenuItem value="false">NO</MenuItem>
                </Select>
              </div>
              <div className="inputHolder">
                <InputLabel id="select-couples">COUPLES</InputLabel>
                <Select
                  {...register("couples", {
                    required: true,
                  })}
                  labelId="select-couples"
                  id="demo-simple-select"
                  value={couples}
                  label="couples"
                  onChange={(e) => setcouples(e.target.value)}
                >
                  <MenuItem value="true">YES</MenuItem>
                  <MenuItem value="false">NO</MenuItem>
                </Select>
              </div>
            </div>
            <div className="PropertyForm__left">
              <TextField
                className="PropertyForm__input"
                type="number"
                {...register("price", {
                  required: true,
                  max: 1000000,
                  min: 100,
                })}
                aria-invalid={errors.price ? "true" : "false"}
                error={errors.price}
                id="standard-error-helper-text"
                label="Price"
                defaultValue=""
                // color=""
                helperText={
                  errors.price ? `Please enter correct price!  ` : null
                }
                variant="standard"
              />
              <TextField
                type="text"
                className="PropertyForm__input"
                {...register("location", {
                  required: true,
                  // maxLength: 20,
                  minLength: 6,
                })}
                aria-invalid={errors.location ? "true" : "false"}
                error={errors.location}
                // id="standard-error-helper-text"
                label="Location"
                defaultValue=""
                helperText={
                  errors.location ? "Please enter valid location!" : null
                }
                // color=""
                variant="standard"
              />

              <div className="inputHolder">
                <InputLabel id="select-minors">Minors Allowed</InputLabel>
                <Select
                  {...register("minors", {
                    required: true,
                  })}
                  labelId="select-minors"
                  id="demo-simple-select"
                  value={minors}
                  label="minors"
                  onChange={(e) => setminors(e.target.value)}
                >
                  <MenuItem value="true">YES</MenuItem>
                  <MenuItem value="false">NO</MenuItem>
                </Select>
              </div>
              <div className="inputHolder">
                <InputLabel id="select-duration">Duration</InputLabel>
                <Select
                  {...register("duration", {
                    required: true,
                  })}
                  labelId="select-duration"
                  id="demo-simple-select"
                  value={duration}
                  label="duration"
                  onChange={(event) => setduration(event.target.value)}
                >
                  <MenuItem value="3 Months">3 Months</MenuItem>
                  <MenuItem value="6 Months">6 Months</MenuItem>
                  <MenuItem value="9 Months">9 Months</MenuItem>
                  <MenuItem value="12 Months">12 Months</MenuItem>
                </Select>
              </div>
              <div className="inputHolder">
                <InputLabel id="select-typeCategory">typeCategory</InputLabel>
                <Select
                  {...register("typeCategory", {
                    required: true,
                  })}
                  labelId="select-typeCategory"
                  id="demo-simple-select"
                  value={typeCategory}
                  label="typeCategory"
                  onChange={(event) => setTypeCategory(event.target.value)}
                >
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Garage">Garage</MenuItem>
                  <MenuItem value="Office">Office</MenuItem>
                </Select>
              </div>
              <div className="inputHolder">
                <InputLabel id="select-contractCategory">
                  contractCategory
                </InputLabel>
                <Select
                  {...register("contractCategory", {
                    required: true,
                  })}
                  labelId="select-contractCategory"
                  id="demo-simple-select"
                  value={contractCategory}
                  label="contractCategory"
                  onChange={(event) => setContractCategory(event.target.value)}
                >
                  <MenuItem value="BUY">BUY</MenuItem>
                  <MenuItem value="RENT">RENT</MenuItem>
                  <MenuItem value="SHARE">SHARE</MenuItem>
                </Select>
              </div>
              <div className="inputHolder">
                <InputLabel id="select-city">City</InputLabel>
                <Select
                  {...register("city", {
                    required: true,
                  })}
                  labelId="select-city"
                  id="demo-simple-select"
                  value={city}
                  label="city"
                  onChange={(event) => setCity(event.target.value)}
                >
                  <MenuItem value="Madrid">Madrid</MenuItem>
                  <MenuItem value="Barcelona">Barcelona</MenuItem>
                  <MenuItem value="Valencia">Valencia</MenuItem>
                </Select>
              </div>
            </div>

            <Button
              variant="contained"
              className="PropertyForm__button"
              type="submit"
              value="Property"
            >
              Create Property
            </Button>
          </form>
        </div>
      </div>
      <ModalMaterial
        aria-hidden="false"
        aria-modal="true"
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        isModalSuccess={isModalSuccess}
        modalText={modalText}
      />
    </div>
  );
}
