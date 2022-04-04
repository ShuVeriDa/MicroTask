import React from 'react';

type NewComponentType = {
    cars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <h1>Task 2</h1>
            <table style={{border: '1px solid black'}}>
                <tr>
                    <th>Number</th>
                    <th>Car</th>
                    <th>Model</th>
                </tr>
                    {props.cars.map((car, index) => {
                        return (
                            <tr key={index}>
                                <td style={{border: '1px solid black'}}>
                                    <span>{index + 1} </span>
                                </td>
                                <td style={{border: '1px solid black'}}>
                                    <span>{car.manufacturer}</span>
                                </td>
                                <td style={{border: '1px solid black'}}>
                                    <span>{car.model}</span>
                                </td>
                            </tr>
                        )
                    })}
            </table>
        </div>
    );
};
