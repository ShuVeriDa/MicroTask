import {useState} from "react";
import './Task7.css'
import {v1} from "uuid";
import {Task7TodoList} from "./Components/Task7TodoList";

export type TaskType = {
   id: string
   title: string
   isDone: boolean //выполнено ли
}
export type TodoListsType = {
   id: string
   title: string
   filter: FilterValuesType
}
export type FilterValuesType = "all" | "active" | "completed"
export type taskObjectType = {
   [key: string]: Array<TaskType>
}

export const Task7 = () => {
   let todoListID1 = v1();
   let todoListID2 = v1();

   let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
      {id: todoListID1, title: 'What to learn', filter: 'all'},
      {id: todoListID2, title: 'What to buy', filter: 'all'},
   ])

   let [tasks, setTasks] = useState<taskObjectType>({
      [todoListID1]: [
         {id: v1(), title: "HTML&CSS", isDone: true},
         {id: v1(), title: "JS", isDone: true},
         {id: v1(), title: "ReactJS", isDone: false},
         {id: v1(), title: "Rest API", isDone: false},
         {id: v1(), title: "GraphQL", isDone: false},
      ],
      [todoListID2]: [
         {id: v1(), title: "HTML&CSS2", isDone: true},
         {id: v1(), title: "JS2", isDone: true},
         {id: v1(), title: "ReactJS2", isDone: false},
         {id: v1(), title: "Rest API2", isDone: false},
         {id: v1(), title: "GraphQL2", isDone: false},
      ]
   });


   function removeTask(todoListID: string, id: string) {
     setTasks({...tasks, [todoListID]: tasks[todoListID].filter(t => t.id !== id)})
   }

   function addTask(todoListID: string, title: string) {
      let newTask = {id: v1(), title: title, isDone: false};
      setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]});
   }

   function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
      setTasks({...tasks, [todoListID]: tasks[todoListID].map(m => m.id === taskId ? {...m, isDone}: m)})
   }

   function changeFilter(todoListID: string, value: FilterValuesType) {
      setTodoLists(todoLists.map(filtered => filtered.id === todoListID ? {...filtered, filter: value} : filtered))
   }


   return (
      <div className="App">
         {
            todoLists.map(tdl => {
               let tasksForTodolist
               tasksForTodolist = tdl.filter === 'active' ? tasks[tdl.id].filter(f => !f.isDone) : tdl.filter === "completed" ? tasks[tdl.id].filter(f => f.isDone) : tasks[tdl.id];

               return (
                  <Task7TodoList key={tdl.id}
                                 todoListID={tdl.id}
                                 title={tdl.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeStatus}
                                 filter={tdl.filter}
                  />
               )
            })
         }
      </div>
   );
}