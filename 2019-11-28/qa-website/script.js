// function login() {
//     const emailVal = document.querySelector('#emailInput').value;
//     const passwordVal = document.querySelector('#passwordInput').value;
//     const agreeTermsVal = document.querySelector('#agreeTermsInput').checked;

//     if (!emailVal) {
//         alert("Please enter a valid email");
//         return;
//     } else if (!passwordVal) {
//         alert('Please enter a valid password');
//         return;
//     } else if (!agreeTermsVal) {
//         alert('you must agree to the terms and conditions');
//         return;
//     }

//     alert("Signed Up Successfully!!");

// }

function signup() {
  const emailVal = document.querySelector('#emailInput').value
  const passwordVal = document.querySelector('#passwordInput').value
  const agreeTermsVal = document.querySelector('#agreeTermsInput').checked
  if (!emailVal) {
    return false;
  } else if (!passwordVal) {
    return false;
  } else if (!agreeTermsVal) {
    return false;
  }

  alert('Signed Up Successfully!!');
  return false;
}
