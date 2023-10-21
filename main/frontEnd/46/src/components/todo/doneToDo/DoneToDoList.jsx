import Headings from "../../../ui/headings/Headings";

export default function DoneToDoList({ children }) {
    return (
        <>
            <Headings
                type="h2"
                props={
                    {
                        className:
                            "mb-5 text-2xl text-center font-bold"
                    }
                }
            >
                Виконані
            </Headings>
            {children}
        </>
    );
}
