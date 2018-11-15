var x = 0;
        var y = {};
        var click1 = "0";
        var computerNumber = 0;
        var userNumber = "";
        var wins;
        var losses = 0;
        var resetFunction;

        function reset() {
            click1 = "0";
            computerNumber = getRandomNum(19, 120);
            userNumber = 0;

            $("#userCrystal").text(userNumber);
            $("#computerCrystal").text(computerNumber);
            return computerNumber;
            return userNumber;

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
        function high() {
            losses = losses++;
            $("#loss").text(losses);

            setTimeout(reset, 2000);
            return losses;

        }
        function low() {

        }
        function win() {
            wins++;
            $("#wins").text(wins);
        }

        makeDivs();
        reset();


        $(".crystal").on('click', function () {

            click1 = $(this).val();
            userNumber = parseInt(userNumber) + parseInt(click1);
            console.log(click1);
            console.log($(this));
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
            else if (parseInt(userNumber) < parseInt(computerNumber)) {
                low();
            }


        });