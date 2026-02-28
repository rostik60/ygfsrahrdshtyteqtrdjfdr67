document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;



    const emailData = {
        to: 'recipient@example.com',
        subject: email,
        text: name + " : " + message
    };

    sendEmail(emailData);
});

function sendEmail(emailData) {
    fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
} 