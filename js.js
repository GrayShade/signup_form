function submitForm(e) {
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
  }
  else {
    message.style.color = 'red';
    message.innerHTML = "*Passwords do not Match!"
  }
}

function checkEmptyAfterSubmit(e, index, message) {

  eleVal = e.target.elements[index].value;
  let span_message = document.getElementById(message);
  if (eleVal != '') {
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

  // When confirm pass field is filled & then pass field is filled afterwards, Password matched message is shown,
  //  then this function is called & its << message.innerHTML = '' >> overwrites the Password Matched message. So,:
  if (eleVal != '' && (message.innerHTML == 'Passwords Match!' || message.innerHTML == '*Passwords do not Match!')) {
    return;
  }

  if (eleVal != '') {
    message.innerHTML = ''
  }
  else
    if ((eleName == 'pass' || eleName == 'confirmpass') && document.getElementById('pass-message').value == '*Passwords do not Match!') {
      message.style.color = 'red';
      message.innerHTML = "*Field Required!"
    }
    else {
      message.style.color = 'red';
      message.innerHTML = "*Field Required!"
    }
}


// tooltip show or hide:
document.addEventListener('input', function (e) {
  debugger;
  let inputEle = e.target;
  let toolTipSpan = inputEle.previousElementSibling.lastElementChild;

  if (inputEle.checkValidity() === false) {
    toolTipSpan.style.display = 'block';
  }
  else {
    toolTipSpan.style.display = 'none';
  }

});

// if tooltip is shown & user moves to next element, tooltip should hide:
document.addEventListener('focusout', (e) => {
  let inputEle = e.target;

  // no need to run this on button:
  if (inputEle.type === 'submit') {
    return;
  }
  let toolTipSpan = inputEle.previousElementSibling.lastElementChild;

  toolTipSpan.style.display = 'none';

});

// if user moves to next element which has error but no tooltip because of
// listener on focusout event, tooltip should be shown again:
document.addEventListener('focusin', (e) => {
  let inputEle = e.target;


  // no need to run this on button:
  if (inputEle.type === 'submit') {
    return;
  }
  let toolTipSpan = inputEle.previousElementSibling.lastElementChild;

  if (inputEle.checkValidity() === false && toolTipSpan.style.display == 'none') {
    toolTipSpan.style.display = 'block';
  }
  else {
    toolTipSpan.style.display = 'none';
  }
});

