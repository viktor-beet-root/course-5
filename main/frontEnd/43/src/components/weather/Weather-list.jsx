import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import { Oval } from 'react-loader-spinner';

const sity = [
    {
        colClass: "col-6",
        city: "Lisabon",
        temp: 22,
        iconId: "lisbon"
    },
    {
        colClass: "col-3",
        city: "Paris",
        temp: 11,
        iconId: "paris"
    },
    {
        colClass: "col-3",
        city: "Belgrade",
        temp: 21,
        iconId: "belgrade"
    },
    {
        colClass: "col-6",
        city: "Venice",
        temp: 22,
        iconId: "venice"
    }
];

export default function WeatherList() {
    const [wetherList, setWetherList] = useState([]);

    function addWether(newSity) {
        setWetherList((value) => {
            console.log(value.find((city) => city.city === newSity));
            if (value.find((city) => city.city === newSity)) {
                return value.map((city) => {
                    if (city.city === newSity) {
                        return {
                            ...city,
                            temp: Math.round(Math.random() * 100)
                        };
                    }

                    return city;
                });
            }

            return [
                ...value,
                {
                    colClass: "col-6",
                    city: newSity,
                    temp: 11,
                    iconId: "venice"
                }
            ];
        });
    }

    useEffect(function () {
        setTimeout(function () {
            setWetherList([
                ...sity
            ]);
        }, 1000);
    }, []);

    return (
        <div className="row weather__row">
            {/* {!wetherList.length && <Oval
                height={80}
                width={80}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#777"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />} */}

            {!wetherList.length ?
                <Oval
                    height={80}
                    width={80}
                    color="#fff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#777"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                /> :
                wetherList.map(
                    function (wether) {
                        return <React.Fragment key={wether.city}>
                            <h2>{wether.city}</h2>
                            <Weather
                                wether={wether}
                                colClass={wether.colClass}
                                city={wether.city}
                                temp={wether.temp}
                                iconId={wether.iconId}
                            />
                        </React.Fragment>;
                    }
                )
            }

            <button
                onClick={
                    () => { addWether('Rivne'); }
                }>
                add wether Rivne
            </button>
        </div>
    );
}
