import { useEffect, useState } from "react";
import Seat from "./Seat";

export default function Movie(props) {
  let name = props.location.items.name;
  let image = props.location.items.image;
  let shows = props.location.items.shows;

  const [seats, setSeats] = useState([]);

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
        myJson &&
          myJson.length > 0 &&
          myJson.map((item) => setSeats(item.shows[0].seats));
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const bookSeat = (idx) => {
    const newSeats = [...seats];
    if (seats[idx] === "free") {
      newSeats[idx] = "newly-booked";
      setSeats(newSeats);
    } else if (seats[idx] === "newly-booked") {
      newSeats[idx] = "free";
      setSeats(newSeats);
    } else {
      console.log("Trying to book already booked seat at", idx);
    }
  };

  return (
    <div className="main">
      <div className="flex">
        <div className="post">
          <h3>{name}</h3>
          <img className="poster" src={image} alt="Movie poster" />
          <h3>Välj datum</h3>
          {shows &&
            shows.length > 0 &&
            shows.map((item) => (
              <div className="box">
                <input type="radio" name="date1" id="date" value={item.date} />
                <label htmlFor="date1">{item.date}</label>
                <br />
              </div>
            ))}
        </div>
        <div className="post">
          <div className="seat-list">
            {seats.length === 0
              ? "Loading..."
              : seats.map((s, idx) => (
                  <Seat
                    key={`s_${idx}`}
                    bookingState={s}
                    bookSeat={() => bookSeat(idx)}
                  />
                ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="center">
          <button className="myButton">
            <p>Boka</p>
          </button>
        </div>
      </div>
    </div>
  );
}
