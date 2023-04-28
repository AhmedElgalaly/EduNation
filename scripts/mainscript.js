let videoLink = "empty";
let videoTitle = "empty";

function prev(){
    param = window.location.href;

    videoLink = param.substring(param.indexOf("?http")+1,param.indexOf("|"));

    videoTitle = param.substring(param.indexOf("|")+1,param.length);

    videoTitle = videoTitle.replaceAll("%20"," ");

    document.getElementById("tilte").innerHTML = `<h1>${videoTitle}</h1>`;
    document.getElementById("video").innerHTML = `<iframe width="80%" height="500px" src="${videoLink}" frameborder="0"></iframe>`;

    console.log(param);
    console.log(videoLink);
    console.log(videoTitle);
    
    
}

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

function signUpM(){
    alert("sorry currently we are unable to process your data 😥");
}

function goto(link){
    window.location.href = link;
}