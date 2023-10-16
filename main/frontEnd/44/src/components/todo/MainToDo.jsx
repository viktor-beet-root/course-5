import { useState } from "react";
import AddToDo from "./AddToDo";
import Analytics from "./analytics/Analytics";
import DoneToDoList from "./doneToDo/DoneToDoList";
import ToDoList from "./todoList/ToDoList";

export default function MainToDo() {
    const [toDoList, setToDoList] = useState([]);

    function addToDo(newToDo) {
        newToDo.id = Date.now();

        setToDoList([
            newToDo,
            ...toDoList,
        ]);
    }
    console.log(toDoList);
    return (
        <section className="container mx-auto">
            <h1 className="text-5xl font-bold text-center pb-4 border-b mb-4">MainToDo</h1>
            <AddToDo changeToDoList={addToDo} />
            <ToDoList />
            <DoneToDoList />
            <Analytics />
        </section>
    );
}
