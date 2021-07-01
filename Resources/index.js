var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

// Dice of Player 1

if (num1 === 1) {
  document.getElementById("pict1").src = "Resources/dice1.png";
} else if (num1 === 2) {
  document.getElementById("pict1").src = "Resources/dice2.png";
} else if (num1 === 3) {
  document.getElementById("pict1").src = "Resources/dice3.png";
} else if (num1 === 4) {
  document.getElementById("pict1").src = "Resources/dice4.png";
} else if (num1 === 5) {
  document.getElementById("pict1").src = "Resources/dice5.png";
} else if (num1 === 6) {
  document.getElementById("pict1").src = "Resources/dice6.png";
}

// Dice of Player 2

if (num2 === 1) {
  document.getElementById("pict2").src = "Resources/dice1.png";
} else if (num2 === 2) {
  document.getElementById("pict2").src = "Resources/dice2.png";
} else if (num2 === 3) {
  document.getElementById("pict2").src = "Resources/dice3.png";
} else if (num2 === 4) {
  document.getElementById("pict2").src = "Resources/dice4.png";
} else if (num2 === 5) {
  document.getElementById("pict2").src = "Resources/dice5.png";
} else if (num2 === 6) {
  document.getElementById("pict2").src = "Resources/dice6.png";
}

// Decleration of Winner

if (num1 > num2) {
  document.getElementById("winner").textContent = " Player 1 is the winner ";
} else if (num1 < num2) {
  document.getElementById("winner").textContent = " Player 2 is the winner ";
} else if (num1 === num2) {
  document.getElementById("winner").innerHTML = " ! <em> No one is the winner </em> ! ";
}
