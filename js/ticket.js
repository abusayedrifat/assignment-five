

let coaches = document.getElementsByClassName('coach');





for (const coach of coaches) {

    coach.addEventListener('click', function () {

    coach.setAttribute('disabled', true);

        //selected ticket details
        coach.style.backgroundColor = '#1dd100';
        const listUl = document.getElementById('ticket-list');
        const li = document.createElement('li');
        li.innerText = coach.innerText;
        listUl.appendChild(li)
       
        const classes = document.getElementById('class-of-bus')
        const p = document.createElement('p');
        p.innerText = 'Economy'
        classes.appendChild(p);

        const prices = document.getElementById('ticket-price');
        const price = document.createElement('p');
        price.innerText = '550';
        prices.appendChild(price)

    //count total ticket
      const tickets =  document.getElementById('booking-seat-count');
      const currentTicket = parseInt(tickets.innerText);
      const updateCount = currentTicket+1;
      tickets.innerText = updateCount;

    //   total ticket price
    const ticketPrices = document.getElementById('ticketPrice');
    const updatePrice = updateCount*550;
     ticketPrices.innerText = updatePrice + ' BDT';
    
     //grand total price
     const discountPrice = document.getElementById('grand-price');
     discountPrice.innerText = updatePrice + ' BDT';

     // count total seat left
      const seats = document.getElementById('seat-left')
      const seat = parseInt(seats.innerText);
      const updateSeat = seat - 1;
      seats.innerText = updateSeat;
        
    
    
    })
   
}

document.getElementById('input-cupon').addEventListener('keyup', function (event) {
    const inputCupon = event.target.value;
    const applyBtn = document.getElementById('btn-cupon-apply');
    if (inputCupon === 'NEW15' || inputCupon === 'COUPLE20') {
        applyBtn.removeAttribute('disabled',true);
    } 
    else {
    applyBtn.setAttribute('disabled', true);    
    }
})


   