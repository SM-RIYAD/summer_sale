function getValue(id) {
  console.log(id);
  const string_value = document.getElementById(id);
  console.log(string_value);
  const v = string_value.innerText;
  console.log("hi", v);
  const number_value = parseFloat(v);

  return number_value;
}
function setTitle(card_title) {
  const ol = document.getElementById("product-names");
  const li = document.createElement("li");

  li.innerText = card_title;
  li.classList.add("font-bold");
  li.classList.add("text-xl");
  li.classList.add("ms-5");
  ol.appendChild(li);
}

function setTotalPrice(price) {
  const total_price_elem = document.getElementById("Total_Price ");
  const initial_t_price_el = total_price_elem.innerText;
  const initial_t_price_num = parseFloat(initial_t_price_el);
  var new_t_price = initial_t_price_num + price;
  new_t_price = new_t_price.toFixed(2);
  total_price_elem.innerText = new_t_price;
  const total_el = document.getElementById("total");
  total_el.innerText = new_t_price;
  if (new_t_price >= 200) {
    const apply_btn = document.getElementById("apply_btn");
    apply_btn.removeAttribute("disabled");
  }
  if (new_t_price > 0) {
    const purchase_btn = document.getElementById("purchase_btn");
    purchase_btn.removeAttribute("disabled");
  }
}
function applyHandler() {
  const coupon_el = document.getElementById("apply_input");
  const coupon = coupon_el.value;
  console.log(coupon);
  if (coupon === "SELL200") {
    const total_price_elem = document.getElementById("Total_Price ");
    const initial_t_price_el = total_price_elem.innerText;
    const total_price_num = parseFloat(initial_t_price_el);
    console.log("OK", total_price_num);

    const discount_elem = document.getElementById("discount_price");
    var discount = total_price_num * 0.2;
    discount = discount.toFixed(2);

    discount_elem.innerText = discount;
    const total_el = document.getElementById("total");
    var total = total_price_num - discount;
    total = total.toFixed(2);
    total_el.innerText = total;
  }
}

function go_home() {

  const ol = document.getElementById("product-names");
     ol.innerHTML="";

     const discount_elem = document.getElementById("discount_price");

  discount_elem.innerText=0.00;
  const total_price_elem = document.getElementById("Total_Price ");
  total_price_elem.innerText=0.00;
  const total_el = document.getElementById("total");
  total_el.innerText=0.00;
}
