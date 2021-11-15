class ApartmentGridComponent {
  constructor() {
    this.state = {
      loading: false,
      apertments: [],
    };
    this.init();
  }
  initFetch = () => API.fetchApartments(this.saveApartments, alert);

  saveApartments = (apertments) => {
    this.state.apertments = apertments;
  };
  init = () => {
    this.initFetch();
    this.htmlElement = document.createElement("div");
    this.htmlElement.innerHTML = "Gridas";
  };
}
