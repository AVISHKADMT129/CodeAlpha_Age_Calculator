function calculateAge() {
  var day = document.getElementById('dob-day').value;
  var month = document.getElementById('dob-month').value;
  var year = document.getElementById('dob-year').value;

  var dob = new Date(year, month - 1, day);
  var today = new Date();

  var age = today.getFullYear() - dob.getFullYear();
  var monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById('result').innerHTML = "You are " + age + " years old.";
}
