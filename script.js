
//let display = document.getElementById("display")
const operators = ["+", "-", "*", "/"]

function insertToDisplay(content) {
    let actualValor = display.value 
    let last = actualValor.slice(-1)

    if (operators.includes(content)) {
        if (operators.includes(last)) {
            display.value = actualValor.slice(0, -1) + content
            return
        }   
    
        if (actualValor === "") return

    }

    display.value += content
}

function clean() {
    display.value = ""
}

function back() {
    display.value = display.value.slice(0, -1)
}

function result() {   
    try {
        if (display.value === "") return
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
}

