function toggleMobileMenu(menu) {
   menu.classList.toggle('open');
}
// -------------Emailjs  import --------

(function () {
   emailjs.init("l4P_xa0KYlv6h_oxI");
})();

function sendmail() {
   let fullName = document.getElementById("name").value;
   let userEmail = document.getElementById("email").value;
   let subject = document.getElementById("subject").value;
   let userMessage = document.getElementById("message").value;

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
       },

   );
}
