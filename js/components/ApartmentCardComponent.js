class ApartmentCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }
  init = () => {
    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "card shadow";
    this.htmlElement.innerHTML = `
    
    <h2 class="h5">Kortelė</h2>
    `;
  };
}
