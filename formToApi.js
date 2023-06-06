function formToApi(event, typeOfSending) {
  event.preventDefault();
  const formContent = document.getElementById("form-content");

  const apiUrl =
    "https://in6sf8xh4l.execute-api.us-east-1.amazonaws.com/SendingStage/sending";

  // prettier-ignore

  let data = {
    typeOfSending: typeOfSending,
    destinationEmail: document.getElementsByName("email")[0].value,
    phoneNumber: document.getElementsByName("sms")[0].value,
    message: document.getElementsByName("message")[0].value
  };


  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "no-cors",
  })
    .then((res) => res.json())
    .then((data) => {
      formContent.innerHTML = `<h3 class="success">Message was sent successfully please check your phone or email</h3>`;
    })
    .catch((err) => {
      formContent.innerHTML = `<h3 class="error">Something went wrong, please Refresh and try again</h3>`;
      console.error(err);
    });
}
