const currency ={
    USD:1,
    PKR:.279,
    GBD:.76,
    EUR:.091,
    INR:83
}
document.getElementById('converter-from').addEventListener('submit',function(e) {
    e.preventDefault()
let Fromcurrency =document.getElementById('from').value
let Tocurrency =document.getElementById('To').value
let Amount =document.getElementById('amount').value

let FromAmount = currency[FromCurrency]
let ToAmount = currency[Tocurrency]
let baseamount= Amount / FromAmount
let covertedamount = baseamount * ToAmount

document.getElementById('result').textContent =`converted Amount:${Math.round(covertedamount)}`
})
