// game elements
var gamePlayElement = document.getElementById('game-play')
var resultsElement = document.getElementById('results')
var timerElement = document.getElementById('timer')
var startButton = document.getElementById('start')
var restartButton = document.getElementById('restart')
var responsesElement = document.getElementById('responses')
var correctElement = document.getElementById('correct')
var incorrectElement = document.getElementById('incorrect')
var unansweredElement = document.getElementById('unanswered')

// game data
var counter = 15
var questionIndex = 0
var correct = 0
var incorrect = 0
var unanswered = 0
var timer
var triviaQuestions = [
  {
    question : "What year did France gift the United States with the statue of Libery?",
    response : ["1908", "1808", "1886", "1888"],
    answer   : "1886",
  },
  {
    question : "Which of these bridges connects Manhattan to Brooklyn?",
    response : ["Manhattan", "Brooklyn", "Verrazano", "Goethals"],
    answer   : "Brooklyn",
  },
  {
    question : "Which building did Frank Lloyd Wright Design?",
    response : ["30 Rockefeller Place", "Woolworth Building", "Flatiron Building", "Solomon R. Guggenheim Museum"],
    answer   : "Solomon R. Guggenheim Museum",
  },
  {
    question : "In 1930 what was considered the world's largest building?",
    response : ["30 Rockefeller Place", "Woolworth Building", "Flatiron Building", "Chrysler Building"],
    answer   : "Chrysler Building",
  },
  {
    question : "What do the seven points on the Statue Of Liberty's crown represent?",
    response : ["First 7 Colonies", "7 Promises Treaty", "July 7, 1776, when France sent help to support the American Revolution", "The light shining on the 7 seas & 7 continents"],
    answer   : "The light shining on the 7 seas & 7 continents",
  },
  {
    question : "How many World's Fairs have taken place in New York City since 1900?",
    response : ["4", "3", "2", "None"],
    answer   : "2",
  },
  {
    question : "What street in Manhattan was called Swing Street because of all the jazz clubs that once filled it?",
    response : ["52nd Street", "42nd Street", "8 av and Broadway", "34 Street"],
    answer   : "52nd Street",
  },
  {
    question : "When did the New York Subway system begin operation?",
    response : ["1901", "1914", "1924", "1904"],
    answer   : "1904",
  },
  {
    question : "What was the neighborhood, where the World Trade Center rose, known as in the mid-1900's?",
    response : ["Meat Packing District", "MidTown", "Radio Row", "Financial District"],
    answer   : "Radio Row",
  },
  {
    question : "The largest store in the world was built in Manhattan. It was built in 1902. In 2006, this department store was still the biggest. What is the name of it?",
    response : ["Sears", "Macys", "JCPennys", "Lord Taylor"],
    answer   : "Macys",
  },
  {
    question : "Tom's Restaurant (of television's 'Seinfeld' fame), Columbia University, and many of the exterior shots seen in television's 'Law and Order' can all be found in what Manhattan neighborhood?",
    response : ["Upper Westside", "Inwood", "Morningside Heights", "Lower Eastside"],
    answer   : "Morningside Heights"
  },
  {
    question : "The Verrazano-Narrows Bridge directly connects which two New York City Boroughs?",
    response : ["Brooklyn and Queens", "Brooklyn and Manhattan", "Staten Island and Manhattan", "Brooklyn and Staten Island"],
    answer   : "Brooklyn and Staten Island",
  },
  {
    question : "When traveling south on Broadway, which famous New York City landmark would you encounter at the crossroads of Central Park West and Central Park South?",
    response : ["Columbus Circle", "Washington Square Park", "Radio City Music Hall", "Charging Bull"],
    answer   : "Columbus Circle",
  },
  {
    question : "What famous parade starts at W. 77th Street and Central Park West?",
    response : ["Christmas Day Parade", "St. Patricks Day Parade", "Carniaval Celebration", "Thanksgiving Day Parade"],
    answer   : "Thanksgiving Day Parade",
  },
  {
    question : "What is the proper way to eat your Pizza?",
    response : ["Knife and Fork", "Fold-it", "Crust First", "Without Cheese"],
    answer   : "Fold-it",
  }
]
//triviaQuestions[1].response -----> ["Manhattan", "Brooklyn", "Verrazano", "Goethals"]
//triviaQuestions[1].response[0] -----> "Manhattan"

function checkGameAdvance () {
  counter = 15
  
  if (triviaQuestions[questionIndex + 1]) {
     questionIndex += 1
     document.getElementById('timer').innerHTML = 'Time left: ' + counter
     //this removes all the response buttons instead of adding to exsisting ones
     responsesElement.innerHTML = ''
     startGame()
  } else {
     // end of game
     gamePlayElement.classList.add('hidden')
     resultsElement.classList.add('show')

     clearInterval(timer)
     counter = 0
     
     correctElement.innerHTML = 'CORRECT: ' + correct
     incorrectElement.innerHTML = 'INCORRECT: ' + incorrect
     unansweredElement.innerHTML = 'UNANSWERED: ' + unanswered
  }
}

function countDown () {
  timer = setInterval(function () {
    counter -= 1
    // reached time limit
    if (counter === -1) {
      unanswered += 1
      checkGameAdvance()
    }
    
    document.getElementById('timer').innerHTML = 'Time left: ' + counter
  }, 1000) 
}

// start game
function startGame () {
  // 1. display question
  var questionElement = document.getElementById('question')
  var questionObj = triviaQuestions[questionIndex]
  var question = questionObj.question
  
  questionElement.innerHTML = question
  
  // 2. display responses
  var responses = questionObj.response
  
  // iterate through array
  for (var i = 0; i < responses.length; i++) {
    // create response element <div>response</div>
    var responseElement = document.createElement('button')
    // create a line break element
    var br = document.createElement('br')
    // insert response in div element
    var response = responses[i]
    responseElement.innerHTML = response
    var answer = questionObj.answer    
    // bind click event to response element
    responseElement.addEventListener('click', function (e) {
      //This is the text of the button you click
      var currentResponse = e.currentTarget.innerText
      // correct answer, increment correct counter
      if (currentResponse === answer) {
        correct += 1
      } else { // incorrect answer, increment incorrect counter
        incorrect += 1
      }

      checkGameAdvance()
    })
    // apppend response element to parent
    responsesElement.appendChild(responseElement)
    // add line break
    responsesElement.appendChild(br)
  }
}

startButton.addEventListener('click', function () {
  timerElement.innerHTML = 'Time left: ' + counter
  // remove start button
  startButton.parentNode.removeChild(startButton);
  // 3. start countdown
  countDown()
  // start the game bitches!
  startGame()
})

restartButton.addEventListener('click', function () {
  // reset default variables
  counter = 15
  questionIndex = 0
  correct = 0
  incorrect = 0
  unanswered = 0
  // clear responses
  timerElement.innerHTML = 'Time left: ' + counter
  gamePlayElement.classList.remove('hidden')
  resultsElement.classList.remove('show')
       //this removes all the response buttons instead of adding to exsisting ones
  responsesElement.innerHTML = ''
  countDown()
  startGame()
})