function formatMili(miliseconds){
    days = Math.floor(miliseconds / (1000*60*60*24));
    miliseconds %= (1000*60*60*24);
    hours = Math.floor(miliseconds / (1000*60*60));
    miliseconds %= (1000*60*60);
    minutes = Math.floor(miliseconds / (1000*60));
    miliseconds %= (1000*60);
    seconds = Math.floor(miliseconds / (1000*60));
    miliseconds %= (1000*60);
    return [days, hours, minutes, seconds] 
}

function calcRemaining(){
    winterH1 = document.querySelector("#winter_remaining"); // h1, tiempo restante para las vacaciones de invierno.
    summerH1 = document.querySelector("#summer_remaining"); // h1, tiempo restante para las vacaciones de verano.
    actualDatetime = new Date();
    actualYear = actualDatetime.getFullYear();
    if (actualYear == 2025) {
        winterDay = 18;
        summerDay = 19;
    }
    winterVacation = new Date(`${actualYear}-07-${winterDay} 23:59:59`);
    summerVacation = new Date(`${actualYear}-12-${summerDay} 23:59:59`);

    winterRemaining = winterVacation - actualDatetime;
    summerRemaining = summerVacation - actualDatetime;

    winterFormatedRemaining = formatMili(winterRemaining); // array
    summerFormatedRemaining = formatMili(summerRemaining); // array
    winter = winterFormatedRemaining;
    summer = summerFormatedRemaining;
    winterH1.textContent = (`Faltan ${winter[0]} días, ${winter[1]} horas, ${winter[2]} minutos y ${winter[3]} segundos.`);
    summerH1.textContent = (`Faltan ${summer[0]} días, ${summer[1]} horas, ${summer[2]} minutos y ${summer[3]} segundos.`);
}

setInterval(calcRemaining, 1000);
