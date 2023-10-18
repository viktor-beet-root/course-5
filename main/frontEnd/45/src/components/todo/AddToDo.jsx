import { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

AddToDo.propTypes = {
    changeToDoList: PropTypes.func.isRequired
};

export default function AddToDo({ changeToDoList }) {
    const [toDo, setToDo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [validation, setValidation] = useState(false);

    function onsubmitHandler(e) {
        e.preventDefault();

        setValidation(true);

        if (toDo && startDate.getDate() >= new Date().getDate()) {
            changeToDoList({
                toDo,
                date: startDate.getTime(),
            });
            clearForm();
        }
    }

    function clearForm() {
        setToDo('');
        setStartDate('');
        setValidation(false);
    }

    return (
        <div className="py-8 border-b mb-4">
            <form className="flex gap-5 items-center" onSubmit={onsubmitHandler} action="#">
                <label className="block grow">
                    <span>Мені потрібно:</span>
                    <input
                        className="block w-full border-4 border-indigo-500/100"
                        type="text"
                        name="todo"
                        value={toDo}
                        onChange={(e) => setToDo(e.target.value)}
                    />
                    {!toDo && validation && <div className="text-red-500">Поле обов’язкове</div>}
                </label>
                <label className="block">
                    <span>Виконати до:</span>
                    <div className="block w-full border-4 border-indigo-500/100">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    {!startDate && validation && <div className="text-red-500">Поле обов’язкове</div>}
                </label>
                <button className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Додати</button>
            </form>
        </div>
    );
}
