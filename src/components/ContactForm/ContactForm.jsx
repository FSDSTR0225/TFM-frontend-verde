import React, { useState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import ModalMaterial from "./../../components/ModalMaterial/ModalMaterial";
import sideImg from "/images/sides/1.jpg";

export default function ContactForm() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [isShowModal, setIsShowModal] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(true);

  const modalText = {
    success: "Your message has been sent successfully",
    fail: "Your message could not be sent. Please try again later.",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formDatas) => {
    await fetch(`${apiUrl}/users/contactUs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formDatas.name,
        family: formDatas.family,
        message: formDatas.message,
        email: formDatas.email,
      }),
    })
      .then((response) => {
        if (response.ok === true) {
          setIsModalSuccess(true);
          setTimeout(() => {}, 2000);
        } else {
          setIsModalSuccess(false);
        }
        setIsShowModal(true);
        return response.json();
      })
      .then((result) => {
        console.log("server result:", result);
        reset();
      })
      .catch((err) => {
        console.log(err);
        setIsModalSuccess(false);
        setIsShowModal(true);
      });
  };

  return (
    <>
      <h1 className="ContactForm__Top mainTitle">
        Fill this form and we will contact you as soon as possible
      </h1>
      <div className="ContactForm">
        <div className="ContactForm__wrapper">
          <div className="ContactForm__fotoContainer">
            <img className="ContactForm__foto" src={sideImg} alt="sideImg" />
          </div>
          <div className="Contact_Form__Container">
            <div className="Contact_Form__Title">Contact Us</div>
            <form className="Contact_Form" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                className="Contact_Form__input"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 35,
                  minLength: 3,
                })}
                aria-invalid={errors.name ? "true" : "false"}
                error={errors.name}
                label="name"
                defaultValue=""
                helperText={errors.name ? "Please enter valid name!" : null}
                variant="standard"
              />
              <TextField
                className="Contact_Form__input"
                type="text"
                {...register("family", {
                  required: true,
                  maxLength: 35,
                  minLength: 3,
                })}
                aria-invalid={errors.family ? "true" : "false"}
                error={errors.family}
                label="family"
                defaultValue=""
                helperText={errors.family ? "Please enter valid family!" : null}
                variant="standard"
              />

              <TextField
                className="Contact_Form__input"
                type="text"
                {...register("email", {
                  required: true,
                  maxLength: 35,
                  minLength: 6,
                })}
                aria-invalid={errors.email ? "true" : "false"}
                error={errors.email}
                label="email"
                defaultValue=""
                helperText={
                  errors.email ? "Please enter correct email! " : null
                }
                variant="standard"
              />
              <TextField
                className="Contact_Form__input"
                type="text"
                {...register("message", {
                  required: true,
                  maxLength: 100,
                  minLength: 6,
                })}
                aria-invalid={errors.message ? "true" : "false"}
                error={errors.message}
                label="message"
                defaultValue=""
                helperText={
                  errors.message ? "Please enter valid message!" : null
                }
                variant="standard"
              />

              <Button
                variant="contained"
                className="Contact_Form__button"
                type="submit"
                value="register"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
        <ModalMaterial
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          isModalSuccess={isModalSuccess}
          modalText={modalText}
        />
      </div>
    </>
  );
}
