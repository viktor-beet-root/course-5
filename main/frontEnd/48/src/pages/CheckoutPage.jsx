import { Outlet } from "react-router-dom";

function CheckoutPage() {
    return (
        <>
            <header>logo</header>
            <main>
                <Outlet />
            </main>
            <footer>2023 copy</footer>
        </>
    );
}

export default CheckoutPage;
