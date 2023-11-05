var matchPass = function() {
  debugger;
  let pass = document.getElementById('pass').value;
  let confirmpass = document.getElementById('confirmpass').value;

  let message = document.getElementById('message');
  if (pass === confirmpass) {
    message.style.color = 'green';
    message.innerHTML = 'Passwords Match!'
  } else {
    message.style.color = 'red';
    message.innerHTML = "*Passwords do not Match!"
  }



}