// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const generateTicket = document.getElementById('generate_ticket')

const userName = document.getElementById('user_name').value;
const userKm = parseInt(document.getElementById('user_km').value);
const userAge = document.getElementById('user_age').value;

const passengerName = document.getElementById('passenger_name')
const offer = document.getElementById('offer')
const wagon = document.getElementById('wagon')
const cpCode = document.getElementById('CP_code')
const ticketPrice = document.getElementById('ticket_price')

const priceKm = 0.21

let originalPrice = userKm * priceKm
let discount = 0

if ( userAge === 'minorenne' ) {
    discount = originalPrice * 20 / 100
}
else if ( userAge === 'over' ) {
    discount = originalPrice * 40 / 100
}

let finalPrice = originalPrice - discount
console.log(finalPrice)

generateTicket.addEventListener('click' , function () {
    
})