import React from 'react';
import {NewComponent} from "./TopCars";

export const Task2 = () => {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs', },
        {manufacturer:'Mercedes', model:'e63s',},
        {manufacturer:'Audi', model:'rs6',}
    ]

    return (
        <div>
            <NewComponent cars  = {topCars}/>
        </div>
    );
};
