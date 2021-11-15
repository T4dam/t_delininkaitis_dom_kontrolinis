const baseURL = "http://localhost:3000";

class API {
  static fetchApartments = (success, failure) => {
    fetch(`${baseURL}/apartment`)
      .then((res) => res.json())
      .then(success)
      .catch(failure);
  };
  static deleteApartment = (id, success, failure) => {
    fetch(`${baseURL}/apartment/${id}`, { method: "DELETE" })
      .then((res) => (res.ok ? success() : failure(res.statusText)))
      .catch(failure);
  };
}
