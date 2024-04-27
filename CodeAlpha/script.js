const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let inputDate = document.getElementById("date-input").value;
    if (!inputDate) {
        alert("Please enter your birthday.");
        return;
    }

    let today = new Date();
    let birthDate = new Date(inputDate);
    let birthMonth, birthDay, birthYear;
    let birthDetails = {
        date: birthDate.getDate(),
        month: birthDate.getMonth() + 1,
        year: birthDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDay && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("You haven't been born yet!");
        displayResult("-", "-", "-");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDay >= birthDetails.date){
        birthDay = currentDay - birthDetails.date;
    } else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDay = days + currentDay - birthDetails.date;
        if (birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDay, birthMonth, birthYear);
}

function displayResult(bDay, bMonth, bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDay;
}

function leapChecker(year){
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}

function goBack() {
    document.getElementById("date-input").value = "";
    displayResult("-", "-", "-");
}
