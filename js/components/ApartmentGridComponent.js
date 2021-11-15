class ApartmentGridComponent {
  constructor() {
    this.state = {
      loading: false,
      apartments: [],
    };
    this.init();
  }
  initFetch = () => API.fetchApartments(this.saveApartments, alert);

  saveApartments = (apartments) => {
    this.state.apartments = apartments;
    this.state.loading = false;
    this.render();
  };
  init = () => {
    this.state.loading = true;
    this.initFetch();
    this.htmlElement = document.createElement("div");
    this.render();
  };
  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `Siunčiama...`;
    } else {
      this.htmlElement.innerHTML = `Parsiųsta!`;
    }
  };
}
