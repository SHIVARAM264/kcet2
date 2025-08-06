const scriptURL = 'https://script.google.com/macros/s/AKfycbyppeguwuE2Xb_lOINcYvXZwWMOl26MlE0qmBT9k8XKOqxwLdetB1zd46ERO_Q7qvhY-Q/exec';
const form = document.getElementById('kcetForm');
const responseMsg = document.getElementById('response');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    cet: form.cet.value,
    choice: form.choice.value,
    remarks: form.remarks.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      responseMsg.innerText = "✅ Submission successful!";
      form.reset();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    console.error('Error!', error.message);
    responseMsg.innerText = "❌ Submission failed. Try again.";
  });
});const scriptURL = 'https://script.google.com/macros/s/AKfycbyppeguwuE2Xb_lOINcYvXZwWMOl26MlE0qmBT9k8XKOqxwLdetB1zd46ERO_Q7qvhY-Q/exec';
const form = document.getElementById('kcetForm');
const responseMsg = document.getElementById('response');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    cet: form.cet.value,
    choice: form.choice.value,
    remarks: form.remarks.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      responseMsg.innerText = "✅ Submission successful!";
      form.reset();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    console.error('Error!', error.message);
    responseMsg.innerText = "❌ Submission failed. Try again.";
  });
});
