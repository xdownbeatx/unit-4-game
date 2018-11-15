var click1 = "0";
var computerNumber = 0;
var userNumber = "";
var wins = 0;
var losses = 0;
var resetFunction;
var gameEnd = false;

function reset() {
    click1 = "0";
    computerNumber = getRandomNum(19, 120);
    userNumber = 0;
    gameEnd = false;
    $("#userCrystal").text(userNumber);
    $("#computerCrystal").text(computerNumber);
    removeDiv();
    setTimeout(makeDivs(), 20);
    setTimeout(Game(), 30);



}

function getRandomNum(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}


function makeDivs() {
    var imageLink = ["assets/images/GemGreen.png", "assets/images/GemBlue.png", "assets/images/GemPurple.png", "assets/images/GemRed.png"]
    var array = [1, 2, 3, 4];
    for (var i = 0; i < array.length; i++) {
        var div = $("<button>");
        div.addClass('crystal');
        div.attr('value', (Math.floor(Math.random() * 11)) + 1);
        div.attr('id', i);
        $('.divContainer').append(div);

        var img = $("<img>");
        img.addClass('image');
        img.attr('src', imageLink[i]);
        $('#' + i).append(img);

    }
}

function removeDiv() {
    $(".crystal").remove();
    $(".image").remove();
}

function high() {
    gameEnd = true;
    losses++;
    $("#loss").text(losses);

    setTimeout(reset, 2000);

}


function win() {
    gameEnd = true;
    wins++;
    $("#wins").text(wins);
    setTimeout(reset, 2000);
}


reset();

function Game() {
    $(".crystal").on('click', function () {

        click1 = $(this).val();
        if (gameEnd == false) {

            userNumber = parseInt(userNumber) + parseInt(click1);
            $("#userCrystal").text(userNumber);

            console.log(userNumber)
            console.log("computer " + computerNumber);
            console.log("user " + userNumber);


            if (parseInt(userNumber) > parseInt(computerNumber)) {
                high();
            }
            else if (parseInt(userNumber) == parseInt(computerNumber)) {
                win();
            }
            else {

            }

        }
    });
}