import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../api/getData";
import appLocalStorage from "../api/appLocalStorage";

const imagesUrl = 'https://image.tmdb.org/t/p/w500';

function Moves() {
    const [page, setPage] = useState(1);
    const [lang, setLang] = useState('en-US');

    const [urlMove, setUrlMove] = useState(`/discover/movie?include_adult=false&include_video=false&language=${lang}&page=${page}&sort_by=popularity.desc`);

    const [moveList, setMoveList] = useState(
        () => {
            const data = appLocalStorage(urlMove)?.results;

            return data ? data : [];
        }
    );

    useEffect(() => {
        async function getMove() {
            const data = await getData(
                urlMove
            );

            if (!data.results) return;

            appLocalStorage(urlMove, data);

            setMoveList(data.results);
        }

        moveList.length || getMove();
    }, [moveList, urlMove]);

    return (
        <>
            <h1 className="text-5xl">Moves</h1>
            <div className="flex flex-wrap">
                {moveList.map(
                    (move) => {
                        return (
                            <div key={move.id} className="p-5 w-1/2">
                                <Link to={`/moves/${move.id}`}>
                                    <h2>{move.title}</h2>
                                    <img src={`${imagesUrl}${move.poster_path}`} alt="" />
                                </Link>
                            </div>
                        );
                    }
                )}
            </div>
        </>
    );
}

export { Moves as Component };

export default Moves;
