import React, { useState, useEffect } from "react";
import Slideshow from "./Slideshow";

export default function Main() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                // console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                // console.log(myJson);
                setData(myJson);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="main">
            <Slideshow data={data} />
        </div>
    );
}
