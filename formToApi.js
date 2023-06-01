function formToApi(event, typeOfSending) {
  event.preventDefault();

  const apiUrl =
    "https://in6sf8xh4l.execute-api.us-east-1.amazonaws.com/SendingStage/sending";

  let data = {
    typeOfSending: typeOfSending,
    destinationEmail: document.getElementsByName("email")[0].value,
    phoneNumber: document.getElementsByName("sms")[0].value,
    message: document.getElementsByName("message")[0].value,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "no-cors",
  })
    .then((response) => {
      if (response.ok) {
        console.alert("Message sent successfully");
      } else {
        console.error("Error sending message");
      }
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}