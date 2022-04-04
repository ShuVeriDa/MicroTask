import React from 'react';
import {Button} from "./Button";

export const Task3 = () => {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age ,address)
    }

    const Button3Foo = () => {
        console.log("i'm stupid bottom")
    }


    return (
        <div>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo("You're Ivan", 26, "Moscow")}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo("You're Khasan", 20, "Grozny")}/>
            <Button name={'Stupid Bottom'} callBack={Button3Foo}/>
        </div>
    );
};
