console.log(document.getElementsByClassName("dvClass")[0])
document.getElementsByClassName("dvClass")[0].innerHTML = 
`<h1>Header inside div</h1>
<p>This is paragraph</p>
`
//document.getElementById("container").innerText = "<h1>Header inside div</h1>"
document.getElementById("container").style.color ="blue"

document.getElementsByClassName("header")[0].innerHTML="Header Tag"
document.getElementsByClassName("header")[0].style.color ="blue"
document.getElementsByClassName("header")[0].style.backgroundColor ="Yellow"
document.getElementById("bird").style.cursor = "pointer"
document.getElementById("bird").onclick = function(){
    alert('did you click me ?')
}

document.getElementsByName("firstname")[0].value ="Scott"

console.log(document.getElementsByTagName("h1"))