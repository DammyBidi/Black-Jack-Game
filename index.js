let player = {
    name: "Dammy",
    chips: 5000
}

let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// let sumEl = document.querySelector("#sum-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

   let randomNumber = Math.floor ( Math.random() * 10 ) + 2
   if ( randomNumber > 10) {
      return 10
   } else if ( randomNumber === 1) {
    return 11
   } else {
    return randomNumber
   }

}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack= true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEL.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false ) {
        let card = getRandomCard ()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}

// THINGS LEARNT
// - arrays
// - object
// - booleans
// - if else statement
// - comparison operators
// - logical operator
// - for loops
// - The Math object
// - return statements
// - 
 
//LOOPS
//       START           FINISH       STEP SIZE
// for ( let count = 10;  count < 21;  count += 1 )  {
    
//     console.log(count)
// }

// for ( let i =10; i < 101; i += 10 ) {
//     console.log(i)
  
// }

// For loops and arrays

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "🙌"
// ]

// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++ ) {
//     console.log(cards[i])
// }

// Manipulation of dom with loop and array

// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
    
// }
// Arrays - ordered lists of items

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// let skills = [
//     "Welcomeeb developer",
//     "Pianist",
//     "Sound Engineer"
// ]

// console.log( skills[1])

// console.log( skills[2])

// console.log( skills[0])

// let Dammy = [
//     "Gideon Damilola Bidi",
//     23,
//     false
// ]

//Push to add item to an array while Pop to remove item from an array
//Array = []

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// messages.pop(newMessage)

// console.log(messages)





// CASH OUT!
// console.log(hasBlackJack)

// console.log(isAlive)

// console.log(4 === 3)  
// console.log(5 > 2)    
// console.log(12 > 12) 
// console.log(3 < 0)    
// console.log(3 >= 3)   
// console.log(11 <= 11) 
// console.log(3 <= 2) 

//IF STATEMENT

//  let age = 22

//  if (age < 21) {
//     console.log("You can not enter the club")
//  } else {
//     console.log("Welcome!")
//  }

// let age =100

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible,you have already gotten one")
// }

// Returning valuse in function 

// let player1Time = 102
// let player2Time = 101

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }


// function getTotalRaceTime () {
//     return player1Time + player2Time
// }

// let totalRaceTime = getTotalRaceTime ()

// console.log(totalRaceTime)
// let fastestRace = getFastestRaceTime()
//  console.log(fastestRace)

// How to create a random number 

// function rollDice () {
//     let randomNumber = Math.floor (Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice())

// THE LOGICAL AND OPERATOR &&

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }


// THE LOGICAL OR OPERATOR ||

// let likesDocumentaries = false

// let likesStartups = true

// if (likesDocumentaries === true || likesStartups === true ) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// OBJECTS

// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)

// let airbnb = {
//     pay: true,
//     location: "london",
//     price: 3,
//     list: ["island", "mainland"]
// }

// console.log(airbnb.pay)
// console.log(airbnb.list)