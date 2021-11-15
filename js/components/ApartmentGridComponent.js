class ApartmentGridComponent {
  constructor() {
    this.state = {
      loading: false,
      apartments: [],
    };
    this.init();
  }
  initFetch = () =>
    setTimeout(() => {
      API.fetchApartments(
        (apartments) => {
          this.state.loading = false;
          this.saveApartments(apartments);
        },
        (err) => {
          alert(err);
          this.state.loading = false;
          this.render();
        }
      );
    }, 4000);

  saveApartments = (apartments) => {
    this.state.apartments = apartments;

    this.render();
  };
  init = () => {
    this.state.loading = true;
    this.initFetch();
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "row g-2";
    this.render();
  };

  columnWrapper = (element) => {
    const column = document.createElement("div");
    column.className = "col-12 col-sm-6 col-lg-4 col-xl-3";
    column.append(element);
    return column;
  };

  deleteApartment = (id) => {
    API.deleteApartment(
      id,
      () => API.fetchApartments(this.saveApartments, alert),
      alert
    );
  };

  render = () => {
    const { loading, apartments } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"/></div>`;
    } else if (apartments.length > 0) {
      this.htmlElement.innerHTML = "";
      const apartmentsElement = apartments
        .map(
          ({ id, ...props }) =>
            new ApartmentCardComponent({
              ...props,
              onDelete: () => this.deleteApartment(id),
            })
        )
        .map((item) => item.htmlElement)
        .map(this.columnWrapper);
      this.htmlElement.append(...apartmentsElement);
    } else {
      this.htmlElement.innerHTML = `<h2>Šiuo metu nekilnojamo turto pasiūlymų nėra</h2>`;
    }
  };
}
