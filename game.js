var randomNumber=Math.round(Math.random()*10);
var submitButton=document.getElementById("submit");
var message=document.getElementById("message");
var lives=document.getElementById('lives');
var msg;

submitButton.onclick=()=>
{
    let inputNumber=document.getElementById("number-input").value;
    lives--;
    if(inputNumber == randomNumber)
    {
        location.href="win.html"

    }
    else if(inputNumber>randomNumber)
    {
        msg="Oops! you guss is high!"
    }
    else if(inputNumber<randomNumber)
    {
        msg="Oops! you guss is low!"
    }
    else if(lives==0)
    {
        location.href="loss.html"
    }
    message.style.display="inherit";
    message.innerHTML=msg;
    lives.innerHTML=lives;

}