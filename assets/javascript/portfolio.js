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
        name: "Suited",
        blurb: "Suited is a full-stack MERN job search application that allows the user to filter jobs, based on their preferences and skills. Suited is tailored towards the job-seeker; allowing them to find jobs that are suited for them through a series of personalizable filters. They can then make notes and keep track of jobs throughout the application process.",
        repo: "https://github.com/chelseymacneill/suited",
        deployed: 
        `<a href="https://suited.herokuapp.com/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/suited.png",
    },
    {
        name: "Blocker Buster",
        blurb: "When you hit a blocker you just cant bust come play our games and chat with fellow developers. Our two games let you jovially collect frontend and backend skills giving you a task that you can accomplish. Each game aslo has its own chatroom so you can ask fellow developers for help. Through this relaxing fun game and stimulation by other developers howpfully soon your blocker will be BUSTED!",
        repo: "https://github.com/SamanthaAO/blockerBuster",
        deployed:
        `<a href="https://blockerbuster.herokuapp.com/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/blocker.png",
    },
    {
        name: "Hello World",
        blurb: "We take your ideal temperature, month and activities and give you the perfect location destinations to visit. Results page includes city suggestions, large map with interactive pins, images and info on citties, ratings for activities and suggested activities, and temp map throuought the year.",
        repo: "https://github.com/jsevern94/Hello-World",
        deployed: 
        `<a href="https://jsevern94.github.io/Hello-World/index.html" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/HelloWorld.png",
    },
    {
        name: "Clicky Game",
        blurb: "Enjoy the luxury of react in this rediculous Borris Johnson themed game where you much click unique images each time as they are shuffled. This interactive game is sure to make you laugh. ",
        repo: "https://github.com/SamanthaAO/clickyGame",
        deployed: 
        `<a href="https://samanthaao.github.io/clickyGame/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/bojo.png",
    },
    {
        name: "NPR Scraper",
        blurb: "Scrape all the top articles from NPR. Leave comments and favorite them and se what other have comented and favorited.",
        repo: "https://github.com/SamanthaAO/ScrapeNPR",
        deployed: 
        `<a href="https://npr-scrapper.herokuapp.com/national" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/scraper.png",
    },
    {
        name: "Date A Wizard",
        blurb: "Find your Harry Potter Soulmate with this 10 question quiz.",
        repo: "https://github.com/SamanthaAO/DateAWizard",
        deployed: 
        `<a href="https://serene-mesa-66125.herokuapp.com/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/dateAWizard.png",
    },
    {
        name: "Adopt A Kitten",
        blurb: "Where you can fufill all your urges to adopt infinate kittens without being branded with the title of crazy cat lady.",
        repo: "https://github.com/SamanthaAO/AdoptAKitten",
        deployed: 
        `<a href="https://adopt-a-kitten.herokuapp.com/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/kitten.png",
    },

    {
        name: "Multiplayer Rock Paper Scissors",
        blurb: "Come play rock paper scissors with friends! Includes rock paper scissors game with images and chat feature.",
        repo: "https://github.com/SamanthaAO/RockPaperScissors-Multiplayer",
        deployed: 
        `<a href="https://samanthaao.github.io/RockPaperScissors-Multiplayer/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/RPS.png",
    },
    {
        name: "Poké Mart",
        blurb: "Come check out all the great finds that we have in store for you. View the Poké Mart as a customer, manager, or supervisor.",
        repo: "https://github.com/SamanthaAO/bamazon",
        deployed: "",
        image: "assets/images/customerSuccess.gif",
    },
    {
        name: "GifTastic: Cartoon Edition",
        blurb: "View all your favorite cartoon gifs. Fovorite the ones that you want to keep for later and add attitional search buttons to search additional cartoons or terms.",
        repo: "https://github.com/SamanthaAO/gifTastic",
        deployed:
        `<a href="https://samanthaao.github.io/gifTastic/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/gif.png",
    },
    {
        name: "Game of Thrones Trivia",
        blurb: "Test your game of thrones knowledge with this timed trivia game. Includes some sweet GOT memes.",
        repo: "https://github.com/SamanthaAO/TriviaGame",
        deployed:
        `<a href="https://samanthaao.github.io/TriviaGame/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/got.png",
    },

    {
        name: "BarnYard Brawl RPG",
        blurb: "Chose your favorite barnyard character and then fight your way through your opponeents to be the last one standing.",
        repo: "https://github.com/SamanthaAO/unit_4_game",
        deployed:
        `<a href="https://samanthaao.github.io/Barnyard_Brawl/" class="cardLinks tooltipped" data-position="bottom" data-tooltip="View Deployed Version"><i class="material-icons">web</i></a>`,
        image: "assets/images/barnyard.png",
    },
    {
        name: "LIRI",
        blurb: "Find out information on your favorites bands, songs, and movies all from the comfort of your own terminal.",
        repo: "https://github.com/SamanthaAO/liri-node-app",
        deployed: "",
        image: "assets/images/liri.png",
    },
    {
        name: "Dessert Dash: Word Guess Game",
        blurb: "Guess letters to identify the hidden dessert word.",
        repo: "https://github.com/SamanthaAO/constructor-word-guess",
        deployed: "",
        image: "assets/images/wordGuess.png",
    },
    

]





//creates porrtfolio cards
var insert = "";
projects.forEach(function (project) {

    insert +=
        `<div class="col s12 m6 l6">
                <div class="card hoverable sticky-action">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${project.image}" height="350rem" alt="${project.name}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator">${project.name} <i class="material-icons right">more_vert</i></span>
                        <div class="card-action">
                        ${project.deployed}
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
