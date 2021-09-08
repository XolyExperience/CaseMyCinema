import React from "react";

export default function Admin() {
  return (
    <div className="main">
      <div className="center">
        <h3>Add new Movie:</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" id="name" />
          </label>
          <br />
          <label>
            Image:
            <input type="url" name="image" id="image" />
          </label>
          <br />
          <label>
            Date:
            <input type="date" name="date" id="date" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
