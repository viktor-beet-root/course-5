import { useEffect, useState } from "react";
import AddToDo from "./AddToDo";
import Analytics from "./analytics/Analytics";
import DoneToDoList from "./doneToDo/DoneToDoList";
import ToDoList from "./todoList/ToDoList";
import ToDoTask from "./todoList/ToDoTask";

const toDoLocalStorageKey = 'toDo';

export default function MainToDo() {
    const [toDoList, setToDoList] = useState(() => {
        return JSON
            .parse(
                window.localStorage.getItem(toDoLocalStorageKey)
            ) || [];
    });

    function addToDo(newToDo) {
        newToDo.id = Date.now();

        setToDoList([
            newToDo,
            ...toDoList,
        ]);
        console.log(toDoList);
    }

    useEffect(function () {
        window.localStorage.setItem(toDoLocalStorageKey, JSON.stringify(toDoList));
        //return () => console.log(222);
    }, [toDoList]);

    return (
        <section className="container mx-auto">
            <h1 className="text-5xl font-bold text-center pb-4 border-b mb-4">MainToDo</h1>
            <AddToDo changeToDoList={addToDo} />
            <ToDoList>
                <ol className="py-5">
                    {
                        toDoList.length ?
                            toDoList.map(
                                (toDo, index) => <ToDoTask key={toDo.id} toDo={toDo} index={index} />
                            ) :
                            <p className="mb-5 text-center">Нічого не заплановано</p>
                    }
                </ol>
            </ToDoList>
            {/* {
                toDoList.length ?
                    <ToDoList toDoList={toDoList} /> :
                    <p className="mb-5 text-center">Нічого не заплановано</p>
            } */}
            <DoneToDoList />
            <Analytics />
        </section>
    );
}
