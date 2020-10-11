const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')


// Event Listener For input bill
billInput.addEventListener('change', function(e) {
    const people = parseInt(peopleInput.value)
    const bill = parseFloat(billInput.value)
    const percent = parseInt(tipInput.value)
    const tip = bill * percent / 100
    const total = bill + tip
    const tipPer = tip / people
    displayTip.innerHTML = 'Tip: ' + "$" + tipPer.toFixed(2);
    displayTotal.innerHTML = 'Total: ' + "$" + total.toFixed(2);
    console.log(tip)
})

tipInput.addEventListener('change', function(e) {
    const people = parseInt(peopleInput.value)
    const bill = parseFloat(billInput.value)
    const percent = parseInt(tipInput.value)
    const tip = bill * percent / 100
    const total = bill + tip
    const tipPer = tip / people
    displayTip.innerHTML = 'Tip: ' + "$" + tipPer.toFixed(2);
    displayTotal.innerHTML = 'Total: ' + "$" + total.toFixed(2);
    console.log(tip)
})

peopleInput.addEventListener('change', function(e) {
    const people = parseInt(peopleInput.value)
    const bill = parseFloat(billInput.value)
    const percent = parseInt(tipInput.value)
    const tip = bill * percent / 100
    const total = bill + tip
    const tipPer = tip / people
    displayTip.innerHTML = 'Tip: ' + "$" + tipPer.toFixed(2);
    displayTotal.innerHTML = 'Total: ' + "$" + total.toFixed(2);
    console.log(tip)
})