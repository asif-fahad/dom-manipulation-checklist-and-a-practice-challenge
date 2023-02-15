document.getElementById('btn-apply').addEventListener('click', function(){
    const previousPriceField = document.getElementById('price-field');
    const previousPriceFieldString = previousPriceField.innerText;
    const previousPriceFieldValue = parseFloat(previousPriceFieldString);
    const newValuePriceField = (previousPriceFieldValue/100)*70;
    previousPriceField.innerText = newValuePriceField;
    const deleteButton = document.getElementById('btn-apply');
    if (newValuePriceField == 700){
        deleteButton.setAttribute('disabled', true);
        deleteButton.style.backgroundColor = "gray";
    }
})