function submitForm(e) {
  console.log(e);
  // ele = e.target.elements[0]
  fname_check_presence = checkEmptyAfterSubmit(e, 0, 'fname-message');
  email_check_presence = checkEmptyAfterSubmit(e, 2, 'email-message');
  pass_check_presence = checkEmptyAfterSubmit(e, 4, 'pass-message');
  confirmpass_check_presence = checkEmptyAfterSubmit(e, 5, 'confirmpass-message');
}

var matchPass = function (event) {
  let pass = document.getElementById('pass').value;
  let confirmpass = document.getElementById('confirmpass').value;

  let message = document.getElementById('pass-message');

  if (event.key === 'Tab') {
    return;
  }

  if (pass === confirmpass && pass != '' && confirmpass != '') {
    message.style.color = 'green';
    message.innerHTML = 'Passwords Match!'
  } else {
    message.style.color = 'red';
    message.innerHTML = "*Passwords do not Match!"
  }
}

function checkEmptyAfterSubmit(e, index, message) {
  debugger;
  // eleName = name.replace(/['"]+/g, '');
  eleVal = e.target.elements[index].value;
  // let field_name = document.getElementById(name).value;
  let span_message = document.getElementById(message);
  if (eleVal != '') {
    // message.style.color = 'green';
    span_message.innerHTML = ''
  } else {
    span_message.style.color = 'red';
    span_message.innerHTML = "*Field Required!"

  }
}

function checkEmptyBeforeSubmit(event, eleName, eleMessage) {
  let eleVal = document.getElementById(eleName).value;
  let message = document.getElementById(eleMessage);

  if (event.key === 'Tab') {
    return;
  }

  if (eleVal != '' && (message.innerHTML == 'Passwords Match!' || message.innerHTML == '*Passwords do not Match!')) {
    return;
  }
  // here is an issue. When confirm pass field is filled & then pass field is filled afterwards, Password matched message is shown,
  //  then this function is called & its << message.innerHTML = '' >> overwrites the Password Matched message. What to do?
  if (eleVal != '') {
    // message.style.color = 'green';
    message.innerHTML = ''
  }
  // else  
  // if (event.key === 'Tab'){
  //   return;
  // } 
  else {
    message.style.color = 'red';
    message.innerHTML = "*Field Required!"
  }
}

function show