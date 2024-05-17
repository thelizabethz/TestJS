
function bmi() {
    h=document.getElementById("height").value
    w=document.getElementById("weight").value
    value = w/(h*h)
    alert(value.toFixed(2))
}