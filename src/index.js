import React from "react";
import ReactDOM from "react-dom";
import { Movie } from './Movie';


const Index = () => {
    return (
        <Movie/>
    );
};

ReactDOM.render(
    <Index />,
    document.getElementById("index")
);