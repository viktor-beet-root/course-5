import { useEffect, useState } from "react";

const toDoLocalStorageKey = 'toDo';

export default function useToDo() {
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

    function removeToDo(toDoId) {
        setToDoList(
            (currentState) => currentState.filter((currentToDo) => currentToDo.id !== toDoId)
        );
    }

    useEffect(function () {
        window.localStorage.setItem(toDoLocalStorageKey, JSON.stringify(toDoList));
        //return () => console.log(222);
    }, [toDoList]);

    return [toDoList, addToDo, setToDoList, removeToDo];
}
