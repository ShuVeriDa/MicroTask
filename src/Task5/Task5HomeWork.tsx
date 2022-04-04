import React from 'react';
import {CurrentMoney} from "./Task5";

type Task5HomeWorkType = {
    currentMoney: Array<CurrentMoney>
    onClickFilterHandler: Function
}

export const Task5HomeWork = (props: Task5HomeWorkType) => {
    return (
        <div>
            <h1>Task5</h1>
            {props.currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknote}</span>
                        <span>{objFromMoneyArr.nominal}</span>
                        <span>{objFromMoneyArr.number}</span>

                    </li>
                )
            })}
            <div>
                <button onClick={() => props.onClickFilterHandler('All')}>all</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>Rubls</button>

            </div>
        </div>
    );
};
