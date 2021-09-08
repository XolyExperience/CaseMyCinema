import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="flex">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <Link
              to={{
                pathname: "/movie",
                items: {
                  name: item.name,
                  image: item.image,
                  shows: item.shows,
                },
              }}
            >
              <div className="post">
                <h3>{item.name}</h3>
                <img className="poster" src={item.image} alt="Movie poster" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
