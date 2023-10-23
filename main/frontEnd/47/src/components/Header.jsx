import { Link, NavLink } from "react-router-dom";

const navClass = "mr-4 font-bold py-2 px-4 rounded";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Header() {
    return (
        <header className="py-5 border-b flex justify-between container m-auto">
            <div>Logo</div>
            <nav>
                <NavLink className={getNavClasses} to="/">Home</NavLink>
                <NavLink className={getNavClasses} to="/moves">Moves</NavLink>
                <NavLink className={getNavClasses} to="/tv">Tv</NavLink>

                {/* <Link className="mr-4 font-bold py-2 px-4 rounded" to="/">Home</Link>
                <Link className="mr-4 font-bold py-2 px-4 rounded" to="/moves">Moves</Link>
                <Link className="mr-4 font-bold py-2 px-4 rounded" to="/tv">Tv</Link>

                <a className="mr-4 font-bold py-2 px-4 rounded" href="/">Home</a>
                <a className="mr-4 font-bold py-2 px-4 rounded" href="/moves">Moves</a>
                <a className="mr-4 font-bold py-2 px-4 rounded" href="/tv">Tv</a> */}
            </nav>
        </header>
    );
}

export default Header;
