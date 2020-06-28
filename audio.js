for (var i = 0; i < 3; i++) {
    document
        .querySelectorAll(".myButton")[i].addEventListener("click", function() {
            var txt = this.innerHTML;
            //console.log(txt);
            audioPlay(txt);
            playAnimation(txt);


        });
}

document.addEventListener("keypress", function(event) {

    var txt = event.key;

    audioPlay(txt);
    playAnimation(txt);

});

function audioPlay(txt) {
    switch (txt) {
        case "a":
            var audio = new Audio("sounds/1.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("sounds/2.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("sounds/3.mp3");
            audio.play();
            break;
    }
}

function playAnimation(text) {
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");

    setTimeout(function() {

        selectedButton.classList.remove("anim");


    }, 1000);

}