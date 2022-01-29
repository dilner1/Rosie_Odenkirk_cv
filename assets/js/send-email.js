        // emailJS API key service_vjp3blq
        // emailjs.send("service_vjp3blq","template_27068pe");

function sendMail(contactForm) {
    emailjs.send('gmail', 'rosie', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            console.log('SUCCESS', response);
        },
        function(error) {
            console,log('FAILD', error);
        }
    )
}

        // emailjs.send("service_vjp3blq", "template_27068pe", {
        //     from_name: "Mr User Man",
        //     to_name: "Daniel Milner",
        //     message: "I want something that does a thing.",
        // });