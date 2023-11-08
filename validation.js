function submitForm(e) {
  debugger;
  // all_inputs = document.querySelectorAll('input');
  // all_msg_Spans = document.querySelectorAll('.message');

  // for(let i=0; i<all_inputs.length; i++) {
  //   // console.log(all_inputs[i]);
  //   // As required fields are not for all fields but we are iterating on all input fields
  //   req_msg_span = all_msg_Spans[i].classList[i]

  // below e event is for whole form, not individual elements:
  // debugger;

  req_inputs = document.querySelectorAll('input.required');
  req_msg_spans = document.querySelectorAll('span.required');

  for (let i = 0; i < req_inputs.length; i++) {
    // req_msg_span = all_msg_Spans[i].classList[i]
    // req_msg_spans = document.querySelectorAll('span.required');
    checkEmptyAfterSubmit(e, req_inputs[i], req_msg_spans[i]);
  }

  // }

  // fname_check_presence = checkEmptyAfterSubmit(e, 0, 'fname-message');
  // email_check_presence = checkEmptyAfterSubmit(e, 2, 'email-message');
  // pass_check_presence = checkEmptyAfterSubmit(e, 4, 'pass-message');
  // confirmpass_check_presence = checkEmptyAfterSubmit(e, 5, 'confirmpass-message');
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
    message.innerHTML = "*Passwords do not Match!";
  }
}

function checkEmptyBeforeSubmit(event, eleName, eleMessage) {
  debugger;
  let ele = event.target;
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

  if (eleVal != '' && ele.checkValidity() === true) {
    ele.style.borderColor = 'blue';
    message.innerHTML = ''
  } else
    if (eleVal != '' && ele.checkValidity() === false) {
      ele.style.borderColor = 'red';
      message.innerHTML = ''
    }
    else
      if ((eleName == 'pass' || eleName == 'confirmpass') && document.getElementById('pass-message').value == '*Passwords do not Match!') {
        message.style.color = 'red';
        message.innerHTML = "*Field Required!"
      }
      else {
        ele.style.borderColor = 'red';
        message.style.color = 'red';
        message.innerHTML = "*Field Required!"
      }
}

function checkEmptyAfterSubmit(e, ele, msg_span) {

  // eleVal = e.target.elements[index].value;
  debugger;
  eleVal = ele.value;
  // message_span = ''
  // let message_span_ele = document.querySelector(message_span);
  if (eleVal != '' && ele.checkValidity() === true) {
    msg_span.innerHTML = ''
  } else {
    // below is bring form instead of element.

    // ele.style.borderColor = 'red';
    msg_span.style.color = 'red';
    msg_span.innerHTML = "*Field Required!"

  }
}



// tooltip show or hide:
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

