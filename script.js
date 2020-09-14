function shake() {
    var ball = document.getElementById("ball")
    var messageText = document.getElementById("message")


    if(messageText != null) {
        messageText.parentNode.removeChild(messageText);
    }

    ball.classList.add("shake");

    setTimeout(function(){ball.classList.remove("shake");}, 1000 );
    setTimeout(function(){getFortune();}, 1000);

}

function getFortune() {
    var fortunes = ["As I see it, yes.", 
        "Ask again later.", 
        "Better not tell you now.", 
        "Cannot predict now.", 
        "Concentrate and ask again.", 
        "It is certain.",
        "It is decidedly so.",
        "Most likely.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Outlook good.",
        "Reply hazy, try again.",
        "Signs point to yes.",
        "Very doubtful.",
        "Without a doubt.",
        "Yes.",
        "Yes, definitely.",
        "You may rely on it."]

    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    var parent = document.getElementById("fortune");
    var newMessage = document.createElement("div");
    newMessage.setAttribute("id", "message");
    newMessage.innerHTML = "\""+fortune+"\""
    parent.appendChild(newMessage)
}