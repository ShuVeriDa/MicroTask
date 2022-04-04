import {FC} from "react";

type ButtonPropsType = {
   name: string
   callBack: () => void
}

export const Button: FC<ButtonPropsType> = ({name, callBack}) => {
   const onClickButtonHandler = () => {
      callBack()
   }

   return (
      <div>
         <button onClick={onClickButtonHandler}>{name}</button>
      </div>
   );
};
