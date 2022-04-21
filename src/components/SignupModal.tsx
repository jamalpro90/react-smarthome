import React, { useContext, useState } from "react";
import { Title } from "./emotion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../store/ModalContext";

type Inputs = {
  email: string;
  password: string;
};

const SignupModal = () => {
  const [eye, setEye] = useState<boolean>(false);
  const modal = useContext(ModalContext);
  const { signupModal, setSignupModal } = modal;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <div
      className="signup-modal"
      style={{ display: signupModal ? "block" : "none" }}
    >
      <IoClose onClick={() => setSignupModal(false)} className="close-icon" />

      <Title size="48">Sign Up</Title>
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

        <button type="submit" onClick={() => alert("Not Function Yet!")}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupModal;
