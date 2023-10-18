import PropTypes from "prop-types";

ToDoList.propTypes = {
    children: PropTypes.node
};

export default function ToDoList({ children }) {
    return (
        <>
            <h2 className="mb-5 text-2xl text-center font-bold">Запланованні</h2>
            {children}
        </>
    );
}
