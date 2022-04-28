import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { ModalContext } from "../store/ModalContext";
import { Title } from "./emotion";

type Inputs = {
  email: string;
  password: string;
};

const LoginModal = () => {
  const [eye, setEye] = useState<boolean>(false);
  const modal = useContext(ModalContext);
  const { loginModal, setLoginModal, setUser, setSignupModal } = modal;
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    setUser({ email: data.email, password: data.password });
    setLoginModal(false);
  };

  const handleOpenRegister = () => {
    setLoginModal(false);
    setSignupModal(true);
  };

  return (
    <div
      className="login-modal"
      style={{ display: loginModal ? "block" : "none" }}
    >
      <IoClose onClick={() => setLoginModal(false)} className="close-icon" />

      <Title size="48">Login</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type={eye ? "text" : "password"}
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {eye ? (
          <FaEyeSlash onClick={() => setEye(!eye)} className="eye" />
        ) : (
          <FaEye onClick={() => setEye(!eye)} className="eye" />
        )}

        <button type="submit">Login</button>
        <p>
          Don't have an account,{" "}
          <span
            onClick={handleOpenRegister}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginModal;
