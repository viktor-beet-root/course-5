import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../api/getData";
import appLocalStorage from "../api/appLocalStorage";

const imagesUrl = 'https://image.tmdb.org/t/p/original';

function Move() {
    const params = useParams();

    const url = `/movie/${params.id}?language=en-US`;

    const [move, setMove] = useState(
        () => {
            return appLocalStorage(url);
            // return JSON.parse(
            //     window.localStorage.getItem(url)
            // ) || null;
        }
    );

    useEffect(
        () => {
            async function getMove() {
                const data = await getData(url);

                if (!data) return;

                setMove(data);

                appLocalStorage(url, data);
                // window.localStorage.setItem(
                //     url,
                //     JSON.stringify(data)
                // );
            }

            move || getMove();
        },
        []
    );

    if (!move) return <p>Loading...</p>;

    return (
        <>
            <h1>{move.title}</h1>
            <img src={`${imagesUrl}${move.backdrop_path}`} alt="" />
            <p>{params.id}</p>
        </>

    );
}

export { Move as Component };

export default Move;
