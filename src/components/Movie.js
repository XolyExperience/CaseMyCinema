import { useEffect, useState } from "react";
import Seat from "./Seat";
import { getCurrentDate } from "./utils";

export default function Movie(props) {
    const name = props.location.items.name;
    const image = props.location.items.image;
    const shows = props.location.items.shows;
    const ticketBase = {
        id: `${getCurrentDate()}`,
        movie: name,
        show: shows[0].date,
        seats: [],
    };
    const [showIdx, setShowIdx] = useState(0);
    const [ticket, setTicket] = useState([ticketBase]);
    const [seats, setSeats] = useState([]);
    const [choosenDate, setChoosenDate] = useState([shows[0].date]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const chooseDate = (date, idx) => {
        setChoosenDate(date);
        setShowIdx(idx);
    };

    const initData = (showIdx) => {
        setSeats(props.location.items.shows[showIdx].seats);
    };
    useEffect(() => {
        initData(showIdx);
    }, [choosenDate]);

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

    function addTicketInfo() {
        seats.map((seat, idx) => {
            if (seat === "newly-booked") {
                setSelectedSeats((selectedSeats) => [...selectedSeats, idx++]);
            }
        });
        setTicket((ticket) => [...ticket, { movie: name }]);
        setTicket((ticket) => [...ticket, { show: choosenDate }]);
        setTicket((ticket) => [...ticket, { seats: selectedSeats }]);
        console.log(ticket);
    }

    return (
        <div className="main">
            <div className="flex">
                <div className="post">
                    <h3>{name}</h3>
                    <img className="poster" src={image} alt="Movie poster" />
                    <h3>Välj datum</h3>
                    {shows &&
                        shows.length > 0 &&
                        shows.map((item, idx) => (
                            <div className="box">
                                <input
                                    onClick={() => {
                                        chooseDate(item.date, idx);
                                    }}
                                    key={idx * 5}
                                    type="radio"
                                    name={`date`}
                                    id={`date-${idx}`}
                                    value={item.date}
                                    defaultChecked={idx === 0 && true}
                                />
                                <label htmlFor={`date-${idx}`}>
                                    {item.date}
                                </label>
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
                    <button
                        className="myButton"
                        onClick={() => {
                            addTicketInfo();
                        }}
                    >
                        <p>Boka</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
