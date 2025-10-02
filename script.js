const time = document.getElementById("time")
const date = document.getElementById("date")
function dateFunction(){
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    }
    const now = new Date()
    date.innerText = now.toLocaleDateString("en-GB",options)
}
function timeFunction(){
        const now = new Date()
    
    let rawH = now.getHours()
    let HH = rawH % 12 || 12  // converts 0 → 12 and 12 stays 12
    HH = HH.toString().padStart(2,"0")

    let MM = now.getMinutes().toString().padStart(2,"0")
    let SS = now.getSeconds().toString().padStart(2,"0")

    let ampm = rawH >= 12 ? "PM" : "AM"

    time.innerText = `${HH}:${MM}:${SS} ${ampm}`
    dateFunction()
}
timeFunction()

setInterval(timeFunction,1000)
