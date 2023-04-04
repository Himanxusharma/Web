var element;
// document.getElementById("msg").setAttribute("class","xyz")
// document.getElementById("msg").setAttribute("style","border:10px solid black;")
// document.getElementById("msg").innerHTML = "<h1>Nothing</h1>"
// document.querySelector("#msg").innerHTML="<h1>Pata nhi</h1>";
// document.querySelector("#msg").className="xyz";
// document.querySelector("#msg").className="classList";
// document.querySelector("#msg").style.backgroundColor = "tan";
// element = document.querySelector("#msg").style.color = "white";
// element = document.querySelector("#msg").style.border;
// document.querySelector("#msg").className = "abc xyz";
// document.querySelector("#msg").classList.add("def");
// document.querySelector("#msg").classList.remove("def");
// element = document.querySelector("#msg").classList;

// document.getElementById("msg").onclick=abc;
// document.getElementById("msg").onmousedown=abc;

function abc()
{
    document.getElementById("msg").style.color="white";
    document.getElementById("msg").style.backgroundColor="black";
}

// console.log(element);

document.getElementById("msg").addEventListener("mouseleave",abc);
document.getElementById("msg").addEventListener("click",function () {
    this.style.border="10px solid crimson";

});

document.getElementById("msg").addEventListener('click',xyz);

function xyz(){
    document.getElementById("msg").removeEventListener('mouseleave',abc);

}
