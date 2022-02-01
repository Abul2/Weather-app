const body = document.querySelector("#one")
const city = document.querySelector("#city");
const btnn = document.querySelector("#submit")
let deg = document.querySelector(".temprature-degree")
let desc = document.querySelector(".temprature-description")
let na = document.querySelector(".name")
    // search.addEventListener('click' , console.log(city.value));
btnn.addEventListener('click', function() {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=44c35cb42ceaa5749b541bf158e6d812`

    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const degg = data['main']['temp'];
            const dessc = data['weather'][0]['description'];
            const naa = data['name']


            deg.innerText = Math.round(degg - 273.15)
            desc.innerText = dessc
            na.innerText = naa
        })
})
var img = document.querySelector("#img")
var today = new Date();
const currenttime = today.getHours()
    // const currenttime=18
if (currenttime >= 6 && currenttime < 18) {
    console.log('Morning')
    body.style.backgroundColor = "yellow"
    img.innerHTML = "<img id='imgs' src='https://cdn-icons.flaticon.com/png/512/3222/premium/3222808.png?token=exp=1642685996~hmac=60bc2c40573bbbfe4c636761dbac8c9a'alt='mor' id='img1'/>"

    // document.body.style.backgroundColor = "red";

} else if (currenttime >= 18 && currenttime <= 19) {
    console.log("eve")
    body.style.backgroundColor = "#8f8b66"
    img.innerHTML = "<img id='imgs'src='https://cdn-icons.flaticon.com/png/512/3222/premium/3222808.png?token=exp=1642685996~hmac=60bc2c40573bbbfe4c636761dbac8c9a'alt='mor'/>"

} else {
    console.log("night")
    body.style.backgroundColor = "black"
    img.innerHTML = "<img id='imgs' src='https://cdn-icons.flaticon.com/png/512/3222/premium/3222808.png?token=exp=1642685996~hmac=60bc2c40573bbbfe4c636761dbac8c9a'alt='mor'/>"


}