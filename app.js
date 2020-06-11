const deg = 6;
const hr = document.querySelector("#hr")
const mn = document.querySelector("#mt")
const sc = document.querySelector("#sc")

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

    document.getElementById("hours").innerHTML = `<h1>${day.getHours()}:</h1>`
    document.getElementById("mins").innerHTML = `<h1>${day.getMinutes()}:</h1>`
    document.getElementById("secs").innerHTML = `<h1>${day.getSeconds()}</h1>`
})
