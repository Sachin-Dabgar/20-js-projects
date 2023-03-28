const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const count = document.getElementById("count")
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie")

let ticketPrice = Number(movieSelect.value)
// localStorage.setItem("selectedMovieIndex", 0)
// localStorage.setItem("selectedMoviePrice", ticketPrice)

// updating price and no of seats based on selects
const updateSelectedCount = () => {
    const selectedSeates = container.querySelectorAll(".row .seat.selected")

    // store selected seats index in the local storage
    const indexOfSelectedSeats = [...selectedSeates].map((seat) => {
        return [...seats].indexOf(seat)
    })

    localStorage.setItem("selectedSeats", JSON.stringify(indexOfSelectedSeats))


    const selectedSeatsCount = selectedSeates.length

    count.innerHTML = selectedSeatsCount
    total.innerHTML = selectedSeatsCount * ticketPrice

}

// set movie price and index data to local storage
const setMovieData = (movie, ticketPrice) => {
    localStorage.setItem("selectedMovieIndex", movie.target.selectedIndex)
    localStorage.setItem("selectedMoviePrice", ticketPrice)
}

// function to populate ui from local storage
const populateUI = () => {
    const selectedSeatsFromLocalStorage = JSON.parse(localStorage.getItem("selectedSeats"))

    const selectedMovieIndexFromLocalStorage = JSON.parse(localStorage.getItem("selectedMovieIndex"))

    const selectedMoviePriceFromLocalStorage = JSON.parse(localStorage.getItem("selectedMoviePrice"))

    if (selectedMovieIndexFromLocalStorage !== null) {
        movieSelect.selectedIndex = selectedMovieIndexFromLocalStorage
    }

    if (selectedMoviePriceFromLocalStorage !== null) {
        ticketPrice = selectedMoviePriceFromLocalStorage
    }

    console.log(selectedMovieIndexFromLocalStorage, selectedMoviePriceFromLocalStorage)
    seats.forEach((seat, index) => {
        if (selectedSeatsFromLocalStorage != null && [...selectedSeatsFromLocalStorage].includes(index)) {
            seat.classList.add("selected")
        }
        updateSelectedCount()
    })
}

populateUI()

// select movie event
movieSelect.addEventListener("change", (movie) => {
    ticketPrice = document.getElementById("movie").value
    setMovieData(movie, ticketPrice)
    updateSelectedCount()
})

// select seat event
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected")
        updateSelectedCount()
    }
})



/**
 * TODO : 
 * 1. store all the indexes of the selected seates in array as selectedSeates : [1,2,3]
 * 
 * TODO :
 * 2. store all the selected movies index as selectedMovieIndex : 1
 * 
 * TODO :
 * 3. store selected movie price as selectedMoviePrice : 12 
 * 
 */