import {useState} from 'react';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export const Task6 = () => {
   const [title, setTitle] = useState('')
   let [message, setMessage] = useState([
      {message: "message1"},
      {message: "message2"},
      {message: "message3"},
   ])

   const addMessage = (title: string) => {
      let newMessage = {message: title}
      setMessage([newMessage, ...message])
   }

   const callBackButtonHandler = () => {
      addMessage(title)
   }

   return (
      <div>
         <h1>Task 6</h1>
         {/*<FullInput addMessage={addMessage}/>*/}

         <Input setTitle={setTitle} title={title}/>
         <Button name={"+"} callBack={callBackButtonHandler}/>
         {message.map((el, index) => {
            return (
               <div key={index}>{el.message}</div>
            )
         })}
      </div>
   );
};
