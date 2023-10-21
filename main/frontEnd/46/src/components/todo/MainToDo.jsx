import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { FcGenericSortingAsc, FcGenericSortingDesc } from "react-icons/fc";

import AddToDo from "./AddToDo";
import Analytics from "./analytics/Analytics";
import DoneToDoList from "./doneToDo/DoneToDoList";
import ToDoList from "./todoList/ToDoList";
import ToDoTask from "./todoList/ToDoTask";
import DoneToDoTask from "./doneToDo/DoneToDoTask";
import useDoneToDo from "./hooks/doneToDo/useDoneToDo";
import useToDo from "./hooks/toDo/useToDo";
import SearchToDo from "./searchToDo";
import useSearchToDo from "./hooks/searchToDo/useSearchToDo";
import useSort from "../../hooks/sort/useSort";
import Sort from "../../ui/Sort";

const options = [
    {
        key: 'toDo',
        label: 'По завданню',
        icon: {
            asc: <BiChevronsDown className="inline" />,
            desc: <BiChevronsUp className="inline" />,
        },
        value: null
    },
    {
        key: 'date',
        label: 'По терміну',
        icon: {
            asc: <FcGenericSortingAsc className="inline" />,
            desc: <FcGenericSortingDesc className="inline" />,
        },
        value: null
    }
];

export default function MainToDo() {
    const [toDoList, addToDo, setToDoList, removeToDo] = useToDo();
    const [doneToDoList, addDoneToDo] = useDoneToDo(setToDoList);
    const [searchValue, filteredToDoList, setSearchValue] = useSearchToDo(toDoList);
    const [sortedData, setSort] = useSort(filteredToDoList);

    return (
        <section className="container mx-auto">
            <h1 className="text-5xl font-bold text-center pb-4 border-b mb-4">MainToDo</h1>
            <AddToDo changeToDoList={addToDo} />
            <ToDoList>
                <div className="border-b mb-5 pb-5 flex">
                    <div className="grow pr-5">
                        <SearchToDo searchValue={searchValue} setSearchValue={setSearchValue} />
                    </div>
                    <div className="mt-6">
                        <Sort
                            options={options}
                            sort={setSort}
                            buttonProps={
                                { className: "px-3 py-2 mr-2 text-2xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" }
                            } />
                    </div>
                </div>
                <ol className="py-5">
                    {
                        sortedData.length ?
                            sortedData.map(
                                (toDo, index) => <ToDoTask
                                    key={toDo.id}
                                    toDo={toDo}
                                    index={index}
                                    doneHeandle={addDoneToDo}
                                    removeHeandle={removeToDo}
                                />
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
            {
                doneToDoList.length ? <DoneToDoList>
                    <div className="mb-5">
                        <DoneToDoTask headers={{
                            title1: 'Задача',
                            title2: 'Дата виконати до:',
                            title3: 'Дата виконання:',
                        }} />
                        {
                            doneToDoList.map(
                                (doneToDo, index) => <DoneToDoTask
                                    key={doneToDo.id}
                                    index={index}
                                    doneToDo={doneToDo}
                                />
                            )
                        }
                    </div>
                </DoneToDoList> :
                    null
            }

            <Analytics />
        </section>
    );
}
