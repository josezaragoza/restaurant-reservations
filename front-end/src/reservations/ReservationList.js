import { Link } from "react-router-dom";
import ReservationCancel from "./ReservationCancel";

const ReservationList = ({ reservations = [] }) => {
  const list = reservations.map((reservation) => (
    <div className="col-sm-6" key={reservation.reservation_id}>
      <div className="card alert-success mb-3" style={{ width: "20rem" }}>
        <div className="card-header">
          <h4>
            {reservation.first_name} {reservation.last_name}
          </h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Time: {reservation.reservation_time}</h5>
          <p className="card-text">
            Date: {reservation.reservation_date} <br />
            Phone Number: {reservation.mobile_number}
            <br />
            Party Size: {reservation.people} <br />
          </p>
          <div data-reservation-id-status={reservation.reservation_id}>
            Status: {reservation.status}
          </div>{" "}
          <br /> <br />
          {reservation.status === "booked" ? (
            <div className="d-flex flex-wrap">
              <Link
                to={`/reservations/${reservation.reservation_id}/seat`}
                className="btn btn-success"
              >
                Seat <i class="bi bi-check-lg"></i>
              </Link>{" "}
              &nbsp;
              <Link
                to={`/reservations/${reservation.reservation_id}/edit`}
                className="btn btn-warning"
              >
                Edit <i class="bi bi-pencil"></i>
              </Link>{" "}
              &nbsp;
              <ReservationCancel reservation={reservation} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  ));

  if (reservations.length > 0) {
    return <div className="row">{list}</div>;
  } else {
    return (
      <div className="alert alert-warning" role="alert">
        No matching reservations found.
      </div>
    );
  }
};

export default ReservationList;
