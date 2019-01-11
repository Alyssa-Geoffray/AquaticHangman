window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categ;
    var pickCateg;
    var getHint;
    var word;
    var guess;        
    var guessLetter = [];
    var lives;      
    var counter;     
    var space;


    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("catagoryName");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");



    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }
    buttons();





    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "You drowned in failure! Why don't you try again?";
        }
        for (var i = 0; i < guessLetter.length; i++) {
            if (counter + space === guessLetter.length) {
                showLives.innerHTML = "You Win!!!";
            }
        }
    }

    
    displayHints = function () {
        mycanvas = document.getElementById("areaOne");
        context = mycanvas.getContext('2d');
    };



function Category(one, two, three) {
    this.one = one, this.two = two, this.three = three;
}


//c.one returns one.word and one.hint
//c.two returns two.word and two.hint

var categOne = new Category({ word: "cichlid", hint: "A popular genre of aquarium fish, generally of medium size and ovate in shape" }, { word: "plecostomus", hint: "Commonly referred to as 'bottom feeders'" }, { word: "starfish", hint: "Marine invertebrate that typically has five arms" });
var categTwo = new Category({ word: "jaws", hint: "The movie that generated many peoples' fear of sharks" }, { word: "finding-nemo", hint: "A concerned father searches the ocean for his lost son" }, { word: "spongebob", hint: "Cartoon about a creature who lives in a pineapple under the sea" });
var categThree = new Category({ word: "atlantic", hint: "Home to walruses and bluefin tuna" }, { word: "pacific", hint: "An ocean so vast that it covers more area than all the land masses combined" }, { word: "indian", hint: "Touches Asia, Africa, and Australia" });




play = function () {
    var categ = [categOne, categTwo, categThree];
    var word;
    var hint;
  
        pickCateg = categ[Math.floor(Math.random()*categ.length)];
        pickWord = Math.floor(Math.random()*3)+1;

        //labels the category chosen.
        if(pickCateg === 0){
            categoryName.innerHTML = "Category: Aquatic Creatures";
            console.log("The category is aquatic animals.");
        } else if(pickCateg === 1){
            categoryName.innerHTML = "Category: Underwater Films and Shows";
            console.log("The category is underwater films and shows.");
        } else if(pickCateg===2){
            categoryName.innerHTML = "Category: World Oceans"
            console.log("The category is world oceans.");
        }

        //picks the word and hint
        if(pickWord === 1){
            word = pickCateg.one.word;
            hint = pickCateg.one.hint;
        } else if(pickWord === 2){
            word = pickCateg.two.word;
            hint = pickCateg.two.hint;
        } else if(pickWord === 3){
            word = pickCateg.three.word;
            hint = pickCateg.three.hint;
        }
        console.log("Word: " + word + ". Hint: " + hint + ".");

        check = function () {
            list.onclick = function () {
                var guess = (this.innerHTML);
                this.setAttribute("class", "active");
                this.onclick = null;
                for (var i = 0; i < word.length; i++) {
                    if (word[i] === guess) {
                        guessLetter[i].innerHTML = guess;
                        counter += 1;
                    }
                }
                var j = (word.indexOf(guess));
                if (j === -1) {
                    lives -= 1;
                    comments();
                    animate();
                } else {
                    comments();
                }
            }
        }

        result = function () {
            wordHolder = document.getElementById('hold');
            var correct = document.createElement('ul');
    
    
            for (var i = 0; i < word.length; i++) {
                correct.setAttribute('id', 'my-word');
                guess = document.createElement('li');
                guess.setAttribute('class', 'guess');
                if (word[i] === "-") {
                    guess.innerHTML = "-";
                    space = 1;
                } else {
                    guess.innerHTML = "_";
                }
    
                guessLetter.push(guess);
                wordHolder.appendChild(correct);
                correct.appendChild(guess);
            }
        }
        
        buttons();
        check();
        guessLetter = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        displayHints();
 hint.onclick = function(){
    showClue.innerHTML = "Hint: " + hint;
}
}
play();





document.getElementById('reset').onclick = function () {
    // correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
}


}


