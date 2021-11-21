function sendMail(params){
    var tempParams = {

        name:document.getElementById("senderName").value,
        email:document.getElementById("senderEmail").value,
        subject:document.getElementById("senderSubject").value,
        description:document.getElementById("message").value,
    };

    //service İD , template İD you shall take from your acount EmailJs


    emailjs.send('service_ID', 'tempalte_ID', tempParams)
    .then(function (res){
        console.log("success", res.status);
    })
}