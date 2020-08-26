const url = `http://localhost:4000/api/v1/parks`;

class ParkModel {
  static getAllParks = () => {
    return fetch(url).then((response) => response.json());
  };
  static getParkById = (parkId) => {
    return fetch(`${url}/${parkId}`).then((response) => response.json());
  };
  static createPark = (park) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(park),
    }).then((response) => response.json());
  };
}

export default ParkModel;
