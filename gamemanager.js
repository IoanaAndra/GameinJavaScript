let GameManager = {

 setGameStart: function(clasType) {  //needs parameter type string

    this.resetPlayer(classType);
    this.setPreFight(); //onclick can only take one method/function

 },

 resetPlayer: function(classType)  {

   switch (classType) {
         case "Warrior":
         
         player = new Player(classType, 200, 0, 200, 100, 50);

         break;
   
         case "Rogue":
         
         player = new Player(classType, 100, 0, 200, 100, 50);
      
         break;
               
         case "Mage":
         
         player = new Player(classType, 100, 0, 200, 100, 50);

         break;
         
         case "Hunter":
         
         player = new Player(classType, 200, 0, 200, 100, 50);
      
         break;

   }

   //changes in HTML document 
let getInterface = document.querySelector(".interface")
 getInterface.innerHTML = '<img src="img/avatar-player/' + 
 classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType
+ '</h3><p>Health: ' + player.health + '</p>';

},
changes in HTML document when choose arena
 setPreFight: function() {

   let getHeader = document.querySelector(".header");
   let getActions = document.querySelector(".action");
   let getArena = document.querySelector(".arena");

   getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
   getActions.innerHTML = '<a href = "#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy</a>';

   getArena.style.visibility = "visible";

},

setFight: function()  {

   let getHeader = document.querySelector(".header");
   let getHeader = document.querySelector(".header");
   let getHeader = document.querySelector(".header");

   //Create enemy

   let enemy00 = new Enemy("Orc", 100, 0, 40, 20, 50);
   let enemy01 = new Enemy("Troll", 100, 0, 40, 20, 50);

   //Choosing an enemy / Random number generator

   let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

}
    
}