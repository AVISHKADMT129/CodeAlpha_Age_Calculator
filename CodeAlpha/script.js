document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();
  calculateAge();
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";
  document.getElementById("dob").value = "";
  document.getElementById("resetBtn").style.display = "none";
});

function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Check if birthdate hasn't occurred yet this year
  if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
    years--;
    months += 12;
  }

  // If birthdate day is after current day
  if (days < 0) {
    months--;
    // Calculate the number of days remaining in the previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += prevMonth.getDate();
  }

  // Format the result
  const ageString = `${years} years ${months} months and ${days} days`;

  document.getElementById("result").innerHTML = `You are ${ageString} old.`;
  document.getElementById("resetBtn").style.display = "block";
}
