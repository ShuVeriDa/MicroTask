import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from "./Task 1/Header";
import {Body} from "./Task 1/Body";
import {Task2} from "./task2/Task2";
import {Task3} from "./Task3/Task3";
import {Task4} from "./Task4/Task4";
import {Task5} from "./Task5/Task5";
import {Task6} from "./Task6/Task6";
import {Practic} from "./Practic/Practic";
import {Task7} from "./Task7/Task7";

function App() {
   return (
      <div className="App">
         {/*<Header title='THis is title of Header'/>*/}
         {/*<Body title='This is title of Body'/>*/}
         {/*<Task2/>*/}
         {/*<Task3/>*/}
         {/*<Task4/>*/}
         {/*<Task5/>*/}
         {/*<Task6/>*/}
         <Task7 />
         {/*<Practic />*/}
      </div>
   );
}

export default App;
