console.log(gameObjext());
{
    home: {
        teamName: "
        colors: [ ]
        plrayers: {
            "Alan Anderson": {0},
            "Reggie Evans": {30}
        }
    },
    
    'away': {
      
      }
   
    }


function homeTeaamName () {
    let object = hameObject();
    return object["home"]["teamName"];
}

console.log(homeTeamName());
//logs "Brooklyn Nets"


function homeTeaamName() {
    return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());
// logs "Brooklyn Nets"






//
//
///Part 1: Building the Object
//The first function you will define is called gameObject. This function contains and returns an object nested in the following manner:

//The top level of the object has two keys: "home", for the home team, and "away", for the away team.
//The values of the "home" and "away" keys are objects too. These objects have the following keys:
//"teamName"
"colors"
"players"
The teamName key points to a string of the team name.
The colors key points to an array of strings that are that team's colors.
The players key points to an object of players whose names (as strings) are the keys to an object containing their stats. The values for each player's names and their stats can be found in the table below. The stats keys should be formatted like this:
"number"
"shoe"
"points"
"rebounds"
"assists"
"steals"
"blocks"
"slamDunks"
