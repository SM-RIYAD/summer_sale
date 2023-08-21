
// adding event to all the divs which are clickable
document.getElementById("card1").addEventListener("click", function () {
  const title = document.getElementById("card1-title").innerText;
  
  console.log(title);
  setTitle(title);
  const price =getValue("card1-price")
  setTotalPrice(price);
});
document.getElementById("card2").addEventListener("click", function () {
  const title = document.getElementById("card2-title").innerText;
  console.log(title);
  setTitle(title);
  const price =getValue("card2-price")
  setTotalPrice(price);
});
document.getElementById("card3").addEventListener("click", function () {
  const title = document.getElementById("card3-title").innerText;
  console.log(title);
  setTitle(title);
  const price =getValue("card3-price")
  setTotalPrice(price);
});
document.getElementById("card4").addEventListener("click", function () {
    const title = document.getElementById("card4-title").innerText;
    console.log(title);
    setTitle(title);
    const price =getValue("card4-price")
    setTotalPrice(price);
  });
  document.getElementById("card5").addEventListener("click", function () {
    const title = document.getElementById("card5-title").innerText;
    console.log(title);
    setTitle(title);
    const price =getValue("card5-price")
    setTotalPrice(price);
  });
  document.getElementById("card6").addEventListener("click", function () {
    const title = document.getElementById("card6-title").innerText;
    console.log(title);
    setTitle(title);
    const price =getValue("card6-price")
    setTotalPrice(price);
  });
  


