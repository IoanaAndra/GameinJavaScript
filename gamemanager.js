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
let getInterface = document.querySelector(".interface")
 getInterface.innerHTML = "";

},

 setPreFight: function() {

}

    
}