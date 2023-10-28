import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Home from "./layout/Home";
// import Moves from "./layout/Moves";
// import Tv from "./layout/Tv";

function App() {
    return (
        <>
            <Header />
            <main>
                {/* <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/moves"
                        element={<Moves />}
                    />
                    <Route
                        path="/tv"
                        element={<Tv />}
                    />
                </Routes> */}
                <Outlet />
            </main>

        </>
    );
}

export default App;
