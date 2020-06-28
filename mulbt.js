var len = document.querySelectorAll(".myButton").length;

for (var i = 0; i < len; i++) {

    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {

        var txt = this.innerHTML;
        document.querySelector("h1").innerHTML = txt + " is clicked";

    });
}

// <h1>You have not clicked any button</h1>

//             <button class="myButton">button 1</button>
//             <button class="myButton">button 2</button>
//             <button class="myButton">button 3</button>