function submitForm() {
  req_inputs = document.querySelectorAll('input.required');
  req_msg_spans = document.querySelectorAll('span.required');
  for (let i = 0; i < req_inputs.length; i++) {
    checkEmptyAfterSubmit(req_inputs[i], req_msg_spans[i]);
  }
}

var matchPass = function (event) {
  let pass = document.getElementById('pass').value;
  let confirm_pass = document.getElementById('confirmpass').value;

  let message = document.getElementById('pass-message');

  if (event.key === 'Tab') {
    return;
  }

  if (pass === confirm_pass && pass != '' && confirm_pass != '') {
    message.style.color = 'green';
    message.innerHTML = 'Passwords Match!'
  }
  else {
    message.style.color = 'red';
    message.innerHTML = "*Passwords do not Match!";
  }
}

function checkEmptyBeforeSubmit(event, ele_name, ele_message) {
  let ele = event.target;
  let ele_val = document.getElementById(ele_name).value;
  let message = document.getElementById(ele_message);

  if (event.key === 'Tab') {
    return;
  }

  // When confirm pass field is filled & then pass field is filled afterwards, Password matched message is shown,
  //  then this function is called & its << message.innerHTML = '' >> overwrites the Password Matched message. So,:
  if (ele_val != '' && (message.innerHTML == 'Passwords Match!' || message.innerHTML == '*Passwords do not Match!')) {
    return;
  }

  if (ele_val != '' && ele.checkValidity() === true) {
    ele.style.borderColor = 'blue';
    message.innerHTML = ''
  } else
    if (ele_val != '' && ele.checkValidity() === false) {
      ele.style.borderColor = 'red';
      message.innerHTML = ''
    }
    else
      if ((ele_name == 'pass' || ele_name == 'confirmpass') && document.getElementById('pass-message').value == '*Passwords do not Match!') {
        message.style.color = 'red';
        message.innerHTML = "*Field Required!"
      }
      else {
        ele.style.borderColor = 'red';
        message.style.color = 'red';
        message.innerHTML = "*Field Required!"
      }
}

function checkEmptyAfterSubmit(ele, msg_span) {
  ele_val = ele.value;
  if (ele_val != '' && ele.checkValidity() === true) {
    msg_span.innerHTML = ''
  } else {
    ele.style.borderColor = 'red';
    msg_span.style.color = 'red';
    msg_span.innerHTML = "*Field Required!"

  }
}

document.addEventListener('input', function (e) {
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

