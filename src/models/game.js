const url = `http://localhost:4000/api/v1/parks`;

class ParkModel {
  static getAllParks = () => {
    return fetch(url).then((response) => response.json());
  };
  static getParkById = () => {};
}

export default ParkModel;
