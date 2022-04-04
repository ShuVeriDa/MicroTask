import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {useState} from "react";

export const Practic = () => {
   const [title, setTitle] = useState('')
   let [users, setUsers] = useState([
      {user: "Said-Muhammad"},
      {user: "Ramzan"},
      {user: "Billy"},
   ])

   const usersAdd = (t: string) => {
      let newUser = {user: t}
      setUsers([newUser, ...users])
      setTitle('')
   }

   const callBackButtonHandler = () => {
      usersAdd(title)
   }


   return (
      <div>
         <h1>Practic </h1>
         <Input title={title} setTitle={setTitle}/>
         <Button name={"+"} callBack={callBackButtonHandler}/>
         <ul>
         {
            users.map((u, index) => <li key={index}>{index + 1}. {u.user}</li>)
         }
         </ul>

      </div>
   );
};
