// JavaScript source code

(function FridayFunday() {

    var moves = 0;
    var trainerPosition = {
        x: 0,
        y: 6
    };
    //for algorithm to work pokemon must start above the trainer and to the right.
    var pokemonPosition = {
        x: 6,
        y: 0
    };

    var trainerAi = function () {
        var absX = Math.abs(pokemonPosition.x - trainerPosition.x);
        var absY = Math.abs(pokemonPosition.y - trainerPosition.y);

        if (absX >= absY) {
            if (pokemonPosition.x > trainerPosition.x ) {

                console.log("Trainer moves to the right");
                trainerPosition.x++;
                return;
            }

            console.log("Trainer moves to the left");
            trainerPosition.x--;
            return;
        }


        if (pokemonPosition.y > trainerPosition.y) {

            console.log("Trainer moves down");
            trainerPosition.y++;
            return;
        }

        console.log("Trainer moves up");
        trainerPosition.y--;
        return;
    }

    //not an intelligent ui so it doesn't prove that the pokemon has to move first.
    var pokemonAi = function () {

        do {
            var rand = Math.random() * 5;

            if (rand < 1 && pokemonPosition.y > 0) {
                pokemonPosition.y--;
                console.log("Pokemon moves up");
                return;
            }
            if (rand < 2 && pokemonPosition.y < 6) {
                pokemonPosition.y++;
                console.log("Pokemon moves down");
                return;
            }
            if (rand < 3 && pokemonPosition.x > 0) {
                pokemonPosition.x--;
                console.log("Pokemon moves left");
                return;
            }

            if (pokemonPosition.x < 6) {
                pokemonPosition.x++;
                console.log("Pokemon moves right");
                return;
            }
        } while (1 === 1);
    };

    var catchPokemon = function()
    {
        while (pokemonPosition.x !== trainerPosition.x && pokemonPosition.y !== trainerPosition.y && moves < 1000) {

            pokemonAi();
            trainerAi();

            console.log("Move: " + (++moves)+
                "\nTrainer: "+trainerPosition.x+","+trainerPosition.y+
                "\nPokemon: " + pokemonPosition.x + "," + pokemonPosition.y
                );
        }

        console.log("You got a pokemon!");

    }

    catchPokemon();

})();



