//initialises materialize js functionality
$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.scrollspy').scrollSpy();
    $('.tooltipped').tooltip();
    $('input#input_text, textarea#textarea2').characterCounter();
});

//object with portfolio card information
var projects = [
    {
        name: "Hello World",
        blurb: "We take your ideal temperature, month and activities and give you the perfect location destinations to visit. Results page includes city suggestions, large map with interactive pins, images and info on citties, ratings for activities and suggested activities, and temp map throuought the year.",
        repo: "https://github.com/jsevern94/Hello-World",
        deployed: "https://jsevern94.github.io/Hello-World/index.html",
        image: "assets/images/HelloWorld.png",
    },
    {
        name: "Multiplayer Rock Paper Scissors",
        blurb: "Come play rock paper scissors with friends! Includes rock paper scissors game with images and chat feature.",
        repo: "https://github.com/SamanthaAO/RockPaperScissors-Multiplayer",
        deployed: "https://samanthaao.github.io/RockPaperScissors-Multiplayer/",
        image: "assets/images/RPS.png",
    },
    {
        name: "GifTastic: Cartoon Edition",
        blurb: "View all your favorite cartoon gifs. Fovorite the ones that you want to keep for later and add attitional search buttons to search additional cartoons or terms.",
        repo: "https://github.com/SamanthaAO/gifTastic",
        deployed: "https://samanthaao.github.io/gifTastic/",
        image: "assets/images/gif.png",
    },
    {
        name: "Game of Thrones Trivia",
        blurb: "Test your game of thrones knowledge with this timed trivia game. Includes some sweet GOT memes.",
        repo: "https://github.com/SamanthaAO/TriviaGame",
        deployed: "https://samanthaao.github.io/TriviaGame/",
        image: "assets/images/got.png",
    },

    {
        name: "BarnYard Brawl RPG",
        blurb: "Chose your favorite barnyard character and then fight your way through your opponeents to be the last one standing.",
        repo: "https://github.com/SamanthaAO/unit_4_game",
        deployed: "https://samanthaao.github.io/unit_4_game/",
        image: "assets/images/barnyard.png",
    },

]





//creates porrtfolio cards
var insert = "";
projects.forEach(function (project) {

    insert +=
        `<div class="col s12 m6 l6">
                <div class="card hoverable sticky-action">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${project.image}" alt="${project.name}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator">${project.name} <i class="material-icons right">more_vert</i></span>
                        <div class="card-action">
                            <a href="${project.deployed}" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>
                            <a href="${project.repo}" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Github Repository"><i class="material-icons">code</i></a>
                        </div>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title">${project.name}<i class="material-icons right">close</i></span>
                        <p>${project.blurb}</p>
                    </div>
                </div>
            </div>`;
})

$("#portfolioCards").append(insert);


//makes it so that each section fits the whole page
function createPageCards(){
    console.log("resizing....")

    if ($(".contentContainer").css("height")< window.screen.height)
    $(".contentContainer").css("height", window.screen.height)
}

$(window).resize(createPageCards())
createPageCards();
