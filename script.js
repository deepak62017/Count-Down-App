const endDate = new Date("29 Dec, 2024 21:55:00").getTime();
const startDate = new Date().getTime();
let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinuteInMillis = (60 * 1000);
    const oneSecInMillis = (1000);

    const Days = Math.floor(distancePending / (oneDayInMillis));
    const Hrs = Math.floor(distancePending % (oneDayInMillis) / (oneHourInMillis));
    const mins = Math.floor(distancePending % (oneHourInMillis) /
        (oneMinuteInMillis));
    const secs = Math.floor(distancePending % (oneMinuteInMillis) /
        (oneSecInMillis));


    document.getElementById("days").innerHTML = Days;
    document.getElementById('hours').innerHTML = Hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;

    const totalDistace = endDate - startDate;
    const percentageDistace = (distanceCovered / totalDistace) * 100;

    document.getElementById("progress-bar").style.width = percentageDistace + "%";


    if (distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Expired";
        document.getElementById("progress-bar").style.width = "100%";
        alert("React khatm kiya ya nhi bsdk agar nhi kar paya to tum jindgi me jhat kuch nhi kr paoge ");
        const serviceID = "Simple";
        const templateID = "template_4pt20e7";

        emailjs.send(serviceID, templateID)
            .then(
                res => {
                    alert("mail send succesfully")
                })
            .catch((err) => console.log(err));
    } else {
             async function sendMail() {
             const serviceID = "Simple";
             const templateID = "template_4pt20e7";
           
              emailjs.send(serviceID, templateID)
                .then(
                    res => { 
                        alert("you have finished your 1 day are you doing something or not");
                    })
                setInterval(sendMail, 10000);
            }
    }

}, 1000);









