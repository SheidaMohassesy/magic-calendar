function convertYear(){
    const persianYearElement = document.getElementById('persianYear');
    const persianYear = Number(persianYearElement.value);


    const gregorianYear = persianYear + 621;
    const gregorianYearElement = document.getElementById('gregorianYear');
    gregorianYearElement.value = gregorianYear;
}



