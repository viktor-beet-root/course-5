import PropTypes from "prop-types";

ToDoTask.propTypes = {
    toDo: PropTypes.object.isRequired,
    index: PropTypes.number,
    doneHeandle: PropTypes.func,
    removeHeandle: PropTypes.func,
};

export default function ToDoTask({ toDo, index, doneHeandle, removeHeandle }) {
    const finishDate = ~~((toDo.date - Date.now()) / (1000 * 60 * 60 * 24));

    //style={{ backgroundColor: finishDate === 0 ? 'red' : '' }}

    return (
        <li className={
            `
            p-3 border mb-2 
            rounded-lg flex hover:bg-gray-100 
            ${finishDate === 0 ? 'bg-orange-200' : ''}
            ${finishDate < 0 ? 'bg-red-300' : ''}
            `
        }>
            <div className="grow">
                {index + 1}. Запланованно: {toDo.toDo}<br />
                Виконати до: {new Date(toDo.date).toLocaleDateString()}.
            </div>
            <div className="px-5 border-l">
                <p>Залишилося днів:</p>
                <strong className="font-bold text-center text-6xl block">
                    {finishDate}
                </strong>
            </div>
            <div className="pl-5 border-l">
                <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 block"
                    onClick={() => { doneHeandle(toDo.id); }}
                >
                    Виконати
                </button>
                <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 block"
                    onClick={() => { removeHeandle(toDo.id); }}
                >
                    Видалити
                </button>
            </div>
        </li>
    );
}
