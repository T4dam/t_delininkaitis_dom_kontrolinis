class ApartmentCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }
  init = () => {
    const {
      type,
      owner: { fullname, email, phone },
      roomCount,
      squares,
      address: { city, country, street, number },
      price: { amount, currency },
      imgSrc,
    } = this.props;

    const USD_EUR = 0.87;

    const finalPrice = currency === "$" ? amount * USD_EUR : amount;
    const formatedPrice = Math.round(100 * finalPrice) / 100 + " €";

    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "card shadow";
    this.htmlElement.innerHTML = `
  <img src="${imgSrc}" class="card-img-top"">
  <div class="card-body">
  <h2 class="h6">${type} for sale</h2>
  <span>${street} - ${number}, ${city}, ${country}</span>


  <div><strong>${roomCount} rooms | ${squares} m<sup>2</sup></strong></div>
  
     <div><strong>${formatedPrice}</strong></div>
 
 <ul style="list-style-type:none">
 <li>
 Seller: ${fullname}
 </li>
 <li>
 Phone: ${phone}
 </li>
 <li>
 Phone: ${email}
 </li>
 
 </ul>
    `;
  };
}
