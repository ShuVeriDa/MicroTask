import React, {useState} from 'react';
import {Task5HomeWork} from "./Task5HomeWork";

type FilterType = "All" | 'Dollars' | 'RUBLS'

export type CurrentMoney = {
    banknote: string
    nominal: number
    number: string
}

export const Task5 = () => {
    const [money, setMoney] = useState([
        {banknote: 'Dollars', nominal: 100, number: ' a1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' z1234567890'},
        {banknote: 'RUBLS', nominal: 100, number: ' w1234567890'},
        {banknote: 'Dollars', nominal: 100, number: ' e1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' c1234567890'},
        {banknote: 'RUBLS', nominal: 100, number: ' r1234567890'},
        {banknote: 'Dollars', nominal: 50, number: ' x1234567890'},
        {banknote: 'RUBLS', nominal: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'Dollars')
    }
    if (filter === "RUBLS") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div>
           <Task5HomeWork currentMoney = {currentMoney} onClickFilterHandler = {onClickFilterHandler}/>
        </div>
      )
    }
