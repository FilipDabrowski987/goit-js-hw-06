const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', submitFunction);

function submitFunction(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === '' || password === '') {
    return alert('Wszystkie pola powinny zostać wypełnione!');
    };

    let formData = {
        email: email,
        password: password,
    };

    console.log(formData);
    form.reset();
};