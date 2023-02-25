function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
// -------------Emailjs  import --------

(function () {
    emailjs.init("qV3vpfDOsnWjbmNVu");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let userMessage = document.getElementById("message").value;
    // Check if any of the input fields are empty
    if (fullName === "" || userEmail === "" || subject === "" || userMessage === "") {
        // Display an alert if any of the input fields are empty
        window.alert("Please fill out all the required fields!");
    } else {
        // Check if the email address is in the correct format
        let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(userEmail)) {
            // Display an alert if the email address is not in the correct format
            window.alert("Please enter a valid email address!");
        } else {
            var contactParams = {
                from_name: fullName,
                from_email: userEmail,
                subject: subject,
                message: userMessage,
            };

            emailjs.send("service_xkvnbye", "template_08j2xyg", contactParams).then(
                function (res) {
                    window.alert("Message sent successfully...🥰");
                    //it helps to clear the input field after prompt and press ok
                    document.getElementById('message').value = ""
                    document.getElementById('name').value = ""
                    document.getElementById('email').value = ""
                    document.getElementById('subject').value = ""
                });
        }
    }
}
