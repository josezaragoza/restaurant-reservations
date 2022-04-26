import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTable } from "../utils/api";


function TablesForm() {
  const cancelHandler = () => history.goBack();

  // default initial state
  const initialState = {
    table_name: "",
    capacity: "",
  };
  const [formData, setFormData] = useState({ ...initialState });

  const history = useHistory();

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const abortController = new AbortController();

    async function updateData() {
      try {
        formData.capacity = parseInt(formData.capacity);
        await createTable(formData, abortController.signal);
        history.push(`/dashboard`);
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

  // form change handler

  const handleChange = ({ target }) => {
    let value = target.value;

    if (target.name === "capacity" && target.value <= 0) {
      value = 1;
    }

    setFormData({ ...formData, [target.name]: value });
  };

  return (
    <main>
      <h1 className="text-light">Tables</h1>

      <form onSubmit={handleSubmit} className="form-group">
        <div className="row mb-3">
          <div className="col-4 form-group">
            <label className="form-label text-light" htmlFor="table_name">
              {" "}
              Table Name{" "}
            </label>
            <input
              className="form-control"
              name="table_name"
              id="table_name"
              required={true}
              type="text"
              onChange={handleChange}
              value={formData.table_name}
            />
            <small className="form-text text-light"> Enter Table Name </small>
          </div>
          <div className="col-4 form-group">
            <label className="form-label text-light" htmlFor="capacity">
              {" "}
              Table Capacity{" "}
            </label>
            <input
              className="form-control"
              name="capacity"
              id="capacity"
              required={true}
              type="text"
              onChange={handleChange}
              value={formData.capacity}
            />
            <small className="form-text text-light">
              {" "}
              Enter Table Capacity{" "}
            </small>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={formData.table_name.length < 2}
        >
          Submit
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          onClick={cancelHandler}
          className="btn btn-danger"
        >
          Cancel
        </button>{" "}
      </form>
    </main>
  );
}

export default TablesForm;
