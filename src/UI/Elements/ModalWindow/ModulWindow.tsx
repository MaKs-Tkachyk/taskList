import { FC, ReactChild, useContext } from "react";
import { ModalContext } from "../../Components/ContentProvider/ContentProvider";

import s from "./ModulWindow.module.scss";



const ModulWindow: FC<{children:ReactChild}> = ({children}) => {

  const modalParamets = useContext(ModalContext)
  
  return (
    <div onClick={() => modalParamets?.setModal(false)}
      className={modalParamets?.modal ? `${s.modulWindow} ${s.active}` : `${s.modulWindow}`}>
      <div onClick={(e) => e.stopPropagation()}
        className={ modalParamets?.modal ? `${s.modulWindow__content} ${s.active}`: `${s.modulWindow__content}`}>
        {children}
      </div>
    </div>
  );
};

export default ModulWindow;

