
function celciusToFahrenheit(){
    document.querySelector("h3").style.display="none";
    document.querySelector(".celcius").style.display="none";
    document.querySelector("h4").innerHTML="Enter celcius:"
    document.createElement("submit");
}
function onsubmitting(){
    const celcius = document.getElementById("value").value;
    answer=document.getElementById("ans")
    var fahrenheit=(9/5*celcius+32);
    let text = document.createElement("h2");
    let ans = document.createElement("h4");
    text.innerText="The Fahrenheit is";
    text.style.color="yellow"
    answer.appendChild(text);
    ans.innerText=fahrenheit;
    answer.appendChild(ans);
}
