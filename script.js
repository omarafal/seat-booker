let seats = document.querySelectorAll(".seat");
let numSeats = document.querySelector(".num-seats");
let priceSeats = document.querySelector(".price-seats");

seats.forEach(e => {
    // check if the seat has been occupied
    if(e.classList[1] == "occupied"){
        e.innerHTML = "X";
    }
    else{
        e.addEventListener("click", () => {
            // check if the button has already been selected
            if(e.classList[1] == "selected"){
                e.classList.remove("selected");
                numSeats.innerHTML = parseInt(numSeats.innerHTML)-1;
                priceSeats.innerHTML = parseInt(priceSeats.innerHTML)-20;
            }
            else{
                e.classList.add("selected");
                numSeats.innerHTML = parseInt(numSeats.innerHTML)+1;
                priceSeats.innerHTML = parseInt(priceSeats.innerHTML)+20;
            }
        })
    }
  
})