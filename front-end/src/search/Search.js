import { useState } from "react";
import { useHistory } from "react-router-dom";
import { listReservations } from "../utils/api";
import ReservationList from "../reservations/ReservationList";

// Search reservations by mobile_number

function Search() {
  const [reservations, setReservations] = useState([]);
  const [mobileNumber, setMobileNumber] = useState("");
  const history = useHistory();
  const cancelHandler = () => history.goBack();

  // change handler
  const handleChange = ({ target }) => {
    let value = target.value;
    setMobileNumber(value);
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const abortController = new AbortController();
    async function updateData() {
      try {
        const output = await listReservations(
          { mobile_number: mobileNumber },
          abortController.signal
        );
        setReservations(output);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    updateData();
    return () => {
      abortController.abort();
    };
  };

  // Search Input JSX

  return (
    <main>
      <h1 className="text-light">Search</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0 text-light">Search for a reservation by mobile number:</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="d-md-flex">
          <div>
            <input
              id="mobile_number"
              type="text"
              name="mobile_number"
              onChange={handleChange}
              style={{ width: "200px", height:"35px" }}
              required
            />{" "}
            <br />
            <small className="form-text text-light"> Enter A Phone Number </small>
          </div>{" "}
          &nbsp; &nbsp;
          <div>
            <button type="submit" style={{width: "70px"}} className="btn btn-success">
              Find
            </button>
            <button
              type="button"
              className="btn btn-danger mx-3"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>{" "}
      <br />
      {reservations.length < 1 ? (
        <div className="d-md-flex mb-3">
          <h4 className="my-3 alert alert-danger w-50">No reservations found</h4>
        </div>
      ) : (
        <div>
          <ReservationList reservations={reservations} />
        </div>
      )}
    </main>
  );
}

export default Search;
