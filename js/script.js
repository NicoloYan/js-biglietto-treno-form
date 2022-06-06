// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const generateTicket = document.getElementById('generate_ticket')
generateTicket.addEventListener('click' , function () {
let userName = document.getElementById('user_name');
const userKm = document.getElementById('user_km');
const userAge = document.getElementById('user_age');

let passengerName = document.getElementById('passenger_name')
let offer = document.getElementById('offer')
let wagon = document.getElementById('wagon')
let cpCode = document.getElementById('CP_code')
let discount = 0
console.log(discount)



    const priceKm = 0.21
    passengerName.innerHTML = userName.value;
    wagon.innerHTML = Math.floor(Math.random() * 10);
    cpCode.innerHTML = Math.floor(Math.random() * 10000);
    let originalPrice = userKm.value * priceKm;
    console.log(originalPrice)
    let finalPrice = originalPrice - discount;
    let ticketPrice = document.getElementById('ticket_price')
    console.log(ticketPrice)

    
    if ( userAge.value == 'minorenne' ) {
        discount = parseInt(originalPrice * 20 / 100);
        
        offer.innerHTML = 'Tariffa minorenne';
        finalPrice = originalPrice - discount;
        ticketPrice.innerHTML = parseFloat(finalPrice);
    }
    else if ( userAge.value == 'over' ) {
        discount = parseInt(originalPrice * 40 / 100);
        
        offer.innerHTML = 'Tariffa Over 65';
        finalPrice = originalPrice - discount;
        ticketPrice.innerHTML = parseFloat(finalPrice);
    }
    else {
        offer.innerHTML = 'Tariffa Standard';
        finalPrice = originalPrice;
        ticketPrice.innerHTML = parseFloat(finalPrice);
    } 

    userName.value = ''
    userKm.value = ''
    userAge.value = 'maggiorenne'
})