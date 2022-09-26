function convertYear(){
    const persianYearElement = document.getElementById('persianYear');
    const persianYear = Number(persianYearElement.value);


    const gregorianYear = persianYear + 621;
    const gregorianYearElement = document.getElementById('gregorianYear');
    gregorianYearElement.value = gregorianYear;
}

function onInputKeyPress(event) {
    if(event.code === 'Enter') {
        convertYear();
    }
    else if(event.code === 'Escape') {
        const persianYearElement = document.getElementById('persianYear');
        const gregorianYearElement = document.getElementById('gregorianYear');

        persianYearElement.value = '';
        gregorianYearElement.value = '';
    }
}

function vaghtiMouseHarkatKard(event) {
    const myCord = document.getElementById('cord');
    myCord.innerText = `${event.pageX}, ${event.pageY}`;    
}