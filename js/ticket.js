const coaches = document.getElementsByClassName('coach');

for (const coach of coaches) {
    
    coach.addEventListener('click', function () {
            
        coach.setAttribute('disabled',true);

       
           //selected ticket details
        coach.style.backgroundColor = '#1dd100';
        const listUl = document.getElementById('ticket-list');
        const li = document.createElement('li');
        li.innerText = coach.innerText;
        listUl.appendChild(li);


        const classes = document.getElementById('class-of-bus')
        const p = document.createElement('p');
        p.innerText = 'Economy'
        classes.appendChild(p);

        const prices = document.getElementById('ticket-price');
        const price = document.createElement('p');
        price.innerText = '550';
        prices.appendChild(price)

        //count total ticket
        const tickets = document.getElementById('booking-seat-count');
        const currentTicket = parseInt(tickets.innerText);
        const updateCount = currentTicket + 1;
        tickets.innerText = updateCount;

        //   total ticket price
        const ticketPrices = document.getElementById('ticketPrice');
        const updatePrice = updateCount * 550;
        ticketPrices.innerText = updatePrice + ' BDT';

        //grand total price
        const discountPrice = document.getElementById('grand-price');
        discountPrice.innerText = updatePrice + ' BDT';

        // count total seat left
        const seats = document.getElementById('seat-left')
        const seat = parseInt(seats.innerText);
        const updateSeat = seat - 1;
        seats.innerText = updateSeat;

        //disable all seat after selecting 4 seat
        
         //   if (updateCount >= 4) {
         //  const seat = document.getElementById('button-container')
         //  seat.classList.add('hidden')
         //    alert("you can select only 4 tickets but not more than 4.")
         //   }

         if (updateCount >= 4) {
           
            for(const coach of coaches){
                  coach.setAttribute('disabled',true);
            }
            alert("Remember you can't select more than 4 seats.")
         }
          else {
            coach.addEventListener('click', function () {
               coach.setAttribute('disabled',true);
            })
                 
         }

        //    cuppon discount

        document.getElementById('input-cupon').addEventListener('keyup', function (event) {


            const inputCupon = event.target.value ;
            const applyBtn = document.getElementById('btn-cupon-apply');
            if (inputCupon.toUpperCase() === 'NEW15' && updateCount == 4) {
                applyBtn.removeAttribute('disabled', true);

                document.getElementById('btn-cupon-apply').addEventListener('click', function discountOnCupon() {
                   const discount = updatePrice*0.15;
                   const finalPrice = updatePrice -discount;
                   const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = finalPrice + ' BDT';


        const cuponField = document.getElementById('cupon-field')
        cuponField.classList.add('hidden') 
                })

              
            } 
            else if (inputCupon.toUpperCase() === 'COUPLE20' && updateCount == 4) {
                applyBtn.removeAttribute('disabled', true);
                

                document.getElementById('btn-cupon-apply').addEventListener('click', function discountOnCupon() {
                   const discount = updatePrice*0.2;
                   const finalPrice = updatePrice -discount;
                   const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = finalPrice + ' BDT';

        const cuponField = document.getElementById('cupon-field')
        cuponField.classList.add('hidden')

                })
               
            } 
               else {
                applyBtn.setAttribute('disabled', true);
              }

            })
            //--------------------------cupon end-------------------------
        
         })
         
    }
   
    


