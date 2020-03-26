// window.alert("Welcome to Robot Gladiators!")

playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney=10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//for(var i = 0; i < enemyNames.length; i++) {

// console.log(enemyNames[i]);
// console.log(i);
// console.log(enemyNames[i] + "is at" + i + "index");


//}


    

var fight = function(enemyName) {}
    while(enemyHealth > 0 && playerHealth > 0) {


    for(var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50; 
        fight(pickedEnemyName);
            
    }
    
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }

        
      

   
        if (promptFight === "fight" || promptFight === "FIGHT") {

        enemyHealth = enemyHealth - playerAttack;

        console.log(playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining.");

        if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");
        playerMoney = playerMoney + 20;
        break;
        } else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack;

        console.log(
            enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");

        break;
        } 
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } 
}
    

