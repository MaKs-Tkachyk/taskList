import { FC, createContext, useState, ReactChild } from "react";

export type ModalContextType = {
  modal: boolean;
  setModal: (value: boolean) => void;
  userId: string,
  setUserId:(value:string)=>void

};

export const ModalContext = createContext<ModalContextType | null>(null);


export const ContentProvider: FC<{children:ReactChild}> = ({ children }) => {

  const [modal, setModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  return (
    <ModalContext.Provider value={{ modal, setModal,userId,setUserId }}>
      {children}
    </ModalContext.Provider>
  );
};
