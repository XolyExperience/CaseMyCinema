export default function Seat({ bookingState, bookSeat }) {
  return <span className={`seat ${bookingState}`} onClick={bookSeat}></span>;
}
