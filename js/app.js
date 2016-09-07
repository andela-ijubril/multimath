// You can pass argument like this
(function (name) {
  console.log("Inside my cool IIFE function");
  console.log("Hello " + name);
})("Jubril");

(function () {
  console.log("Starting MultiMath with an IIFE");

  // add click handler to the start game button
  document.getElementById('startGame').addEventListener('click', function () {
    player.setName(document.getElementById('playerName').value);
    game.printGame();
  });

  // add click handler to calculate score button
  document.getElementById('calculate').addEventListener('click', function () {
    game.calculateScore();
  });

  // set the default number of problems
  document.getElementById('problemCount').value = game.getProblemCount();
})();
