
let display = document.getElementById("display")

function insertToDisplay(content) {
    document.getElementById("display").value += content
}

function clean(content) {
    document.getElementById("display").value = content
}

function back() {
    display.value = display.value.slice(0, -1)
}

function result() {   
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
}