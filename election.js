var chosePolitician = function(name)
{
    var politician = {};
    politician.name = name;
    politician.electionResult = null;
    politician.totalVotes = 0;
    
    return politician;
};

var theRock = chosePolitician("Dwayne Johnson");

var vinDiesel = chosePolitician("Mark Sinclair");

theRock.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];

vinDiesel.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1,
6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];

theRock.electionResults[9] = 1;
vinDiesel.electionResults[9] = 28;
 
theRock.electionResults[4] = 17;
vinDiesel.electionResults[4] = 38;
 
theRock.electionResults[43] = 11;
vinDiesel.electionResults[43] = 27;
 
console.log(theRock.electionResults);
console.log(vinDiesel.electionResults);

