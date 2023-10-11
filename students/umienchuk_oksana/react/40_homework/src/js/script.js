import React from "react";
import { createRoot } from "react-dom/client";
import Weather from "./components/Weather";


const root = createRoot(document.getElementById('creater'));
root.render(
    React.createElement(Weather)
);
