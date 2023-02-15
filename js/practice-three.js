document.getElementById('btn-apply-2').addEventListener('click', function(){
    const previousPriceField = document.getElementById('price-field-2');
    const previousPriceFieldString = previousPriceField.innerText;
    const previousPriceFieldValue = parseFloat(previousPriceFieldString);
    const newValuePriceField = (previousPriceFieldValue/100)*70;
    previousPriceField.innerText = newValuePriceField;
    const deleteButton = document.getElementById('btn-apply-2');
    if (newValuePriceField == 700){
        deleteButton.setAttribute('disabled', true);
        deleteButton.style.backgroundColor = "gray";
    }
    
})
document.getElementById('p-3-input').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-apply-2');
    if(text === 'DISC30'){
        deleteButton.removeAttribute('disabled');
        
    }
    else{
        deleteButton.setAttribute('disabled', true);
        
    }
})

