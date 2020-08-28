const url = `http://localhost:4000/api/v1/parks`;

class ParkModel {
  static getAllParks = () => {
    return fetch(url).then((response) => response.json());
  };
  static getParkById = (parkId) => {
    return fetch(`${url}/${parkId}`).then((response) => response.json());
  };
  static createPark = (park) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    return fetch(url, {
      method: "POST",
      config,
      body: JSON.stringify(park),
    }).then((response) => response.json());
  };

  static updatePark = (park, id) => {
    return fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(park),
    }).then((response) => response.json());
  };

  static deletePark = (id) => {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    }).then((response) => response.json());
  };
}

export default ParkModel;
