import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const ModalContext = createContext<any>({});

export const ModalContextProvier = ({ children }: Props) => {
  const [signupModal, setSignupModal] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [user, setUser] = useState<null | any>(null);

  const value = {
    signupModal,
    setSignupModal,
    loginModal,
    setLoginModal,
    user,
    setUser,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
