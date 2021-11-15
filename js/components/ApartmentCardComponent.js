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
      onDelete,
    } = this.props;

    const USD_EUR = 0.87;

    const finalPrice = currency === "$" ? amount * USD_EUR : amount;
    const formatedPrice = Math.round(100 * finalPrice) / 100 + " €";

    const formatedRooms = roomCount <= 1 ? "room" : "rooms";

    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "card shadow";
    this.htmlElement.innerHTML = `
  <img src="${imgSrc}" class="card-img-top"">
  <div class="card-body">
  <h2 class="h6 text-secondary" style="text-transform:uppercase">${type} for sale</h2>
  <span>${street} - ${number}, ${city}, ${country}</span>


  <div class="text-secondary"><strong>${roomCount} ${formatedRooms} | ${squares} m<sup>2</sup></strong></div>
  
     <div><strong>${formatedPrice}</strong></div>
 
 <ul style="list-style-type:none">
 <li>
 Seller: ${fullname}
 </li>
 <li>
 Phone: <a href="mobile:${phone}" class="text-dark" style="text-decoration:none">${phone}</a>
 </li>
 <li>
 Email:<a href="mailto:${email}"> ${email}</a>
 </li>
 
 </ul>
<div class="text-center">
 <button class="btn btn-danger" >Delete</button>
 </div>
    `;
    const btn = this.htmlElement.querySelector(".btn");
    btn.addEventListener("click", onDelete);
  };
}
