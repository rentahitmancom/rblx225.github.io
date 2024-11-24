const input = document.getElementById("input")
const button = document.getElementById("button")

button.onclick = function() {
    navigator.share(input.textContent)
}