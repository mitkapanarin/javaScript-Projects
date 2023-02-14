// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const form = document.getElementById('form')
const button = document.getElementById('button')
const input = document.getElementById('search-bar')
const results = document.getElementById("results")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    fetchData(input.value)
    console.log(input.value)
})

const base = "https://api.openweathermap.org/data/2.5/weather"
const psw ="b3528849799fc69ab2e46bdd46794f25"
const town = "dhaka"
const units = "metric"

const fetchData = async (q)=>{
    const data = await fetch(`${base}?q=${q}&appid=${psw}&units=${units}`)
                    .then((res)=>res.json())
                    .then((res)=>results.innerHTML = printResult(res))
    console.log(data)
    return data
}

const printResult = (res)=>{
    const {main, wind, sys} = res
    return `
    <div class="card-parent">
        <!-- .card-$*6 -->
        <div class="card-1 text-center">
            <i class="bi bi-thermometer-sun xyz"></i>
            <p>${main.temp} C</p>
            <p>Temperature</p>
        </div>
        <div class="card-2 text-center">
            <i class="bi bi-wind xyz"></i>
            <p>${wind.speed} km/h</p>
            <p>Wind</p>
        </div>
        <div class="card-3 text-center">
            <i class="bi bi-moisture xyz"></i>
            <p>${main.humidity}</p>
            <p>Humidity</p>
        </div>
        <div class="card-4 text-center">
            <i class="bi bi-water xyz"></i>
            <p>${main.pressure}</p>
            <p>Pressure</p>
        </div>
        <div class="card-5 text-center">
            <i class="bi bi-sunrise xyz"></i>
            <p>${sys.sunrise}</p>
            <p>Sun Rise</p>
        </div>
        <div class="card-6 text-center">
            <i class="bi bi-sunset xyz"></i>
            <p>${sys.sunset}</p>
            <p>Sun Set</p>
        </div>
    </div>
    `
}

// const sampleObject = {
//     value1: 1,
//     value2: 2,
//     value3: 3,
//     value4: 4
// }

// // object destructuring
//  const {value2, value3} = sampleObject

// value2 // dot notation
// value3
// sampleObject.value4