/*Story
With your help (in the last Kata), John start building his new web site c0dewars.com.

This time you need to help John write an automatic beta katas processing function, the function name is kataStatus. Function accept 1 parameter betaKata.

betaKata is an object that contains some datas of a kata, like this:

{name:"Training JS #1",issue:0,vote:[4,3,2,1]},
rank:[8,7,6],example:true,random:true}
Your task is return a string that is the description of the state of kata. In accordance with the following rules:

Rules:
If there are issues reported(value of issue != 0), should return kata status as:
"Beta Status:Waiting for issues to be resolved"
If the number of votes is less than 5, should return kata status as:
"Beta Status:Testing & feedback needed"
If the number of ranks is less than 8, should return kata status as:
"Beta Status:Ranking feedback needed"
If Kata does not have the example testcase or/and the random testcase(one of them value=false), should return kata status as:
"Beta Status:Example testcases needed"    //example=false;random=true
"Beta Status:Random testcases needed"     //random=false;example=true
"Beta Status:Example and random testcases needed"  //example=false;random=false
If the above datas is OK, you need to calculate its vote scores and average rank, and then return kata status as:
"Kata approved. vote scores:xxx, rank:nkyu"
xxx is the sum of array vote; n is the average of the array rank, you need round it to an integer.

Some examples:
kataStatus({name:"Training JS #1",issue:1,vote:[4,3,2,1],
rank:[8,7,6],example:true,random:true}) should return
  "Beta Status:Waiting for issues to be resolved"

kataStatus({name:"Training JS #1",issue:0,vote:[4,3,2,1],
rank:[8,7,6],example:true,random:true}) should return
  "Beta Status:Testing & feedback needed"
  
kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6],example:true,random:true}) should return
  "Beta Status:Ranking feedback needed"
  
kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:false,random:true}) should return
  "Beta Status:Example testcases needed"
  
kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:true,random:false}) should return
  "Beta Status:Random testcases needed"
  
kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:false,random:false}) should return
  "Beta Status:Example and random testcases needed" 
kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:true,random:true}) should return
  "Kata approved. vote scores:14, rank:7kyu"*/

function kataStatus(betaKata) {
	if (betaKata.issue !== 0) {
        return "Beta Status:Waiting for issues to be resolved";
    } else if (betaKata.vote.length < 5) {
        return "Beta Status:Testing & feedback needed";
    } else if (betaKata.rank.length < 8) {
        return "Beta Status:Ranking feedback needed";
    } else if (!betaKata.example && !betaKata.random) {
        return "Beta Status:Example and random testcases needed";
    } else if (!betaKata.example && betaKata.random) {
        return "Beta Status:Example testcases needed";
    } else if (betaKata.example && !betaKata.random) {
        return "Beta Status:Random testcases needed";
    } else {
        const scores = betaKata.vote.reduce((accum, current) => accum + current);
        const rank = Math.round(betaKata.rank.reduce((accum, current) => accum + current) / betaKata.rank.length);

        return `Kata approved. vote scores:${scores}, rank:${rank}kyu`;
    }
}

console.log(kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:true,random:true}));
