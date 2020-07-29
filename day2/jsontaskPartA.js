var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
// Adding height and weight to Fluffy
cat.height=10;
cat.weight=9;
console.log(cat.name+"'s height -"+cat.height);
console.log(cat.name+"'s weight -"+cat.weight);

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name="Fluffyy";

//List all the activities of Fluffyy’s catFriends.
var act =[];
for(var i = 0;i<cat["catFriends"].length;i++)
{
	act.push(cat["catFriends"][i]["activities"]);
}
console.log("Activities of cat friends - " + act.join(' ')); 

//Print the catFriends names.
var namecats=[];
for(var i = 0;i<cat["catFriends"].length;i++)
{
	namecats.push(cat["catFriends"][i]["name"]);
}
console.log("Cat friends name- " +namecats.join(' '));

//Print the total weight of catFriends
var totalweight = 0;
for(var i = 0;i<cat["catFriends"].length;i++)
{
	totalweight += cat["catFriends"][i]["weight"];
}
console.log(totalweight);

//Print the total activities of all cats (op:6)
var totalact = [];
for(var i = 0;i<cat["catFriends"].length;i++)
{
	totalact.push(cat["catFriends"][i]["activities"]);
}
console.log(cat["activities"]+totalact.join(' ')); 

// Adding two more activities to Bar and Foo
cat.catFriends[0]["activities"][2]="hunt";
cat.catFriends[0]["activities"][3]="playing";
cat.catFriends[1]["activities"][2]="chasing";
cat.catFriends[1]["activities"][3]="naps";

//Update the fur color of bar
cat.catFriends[0].furcolor="creamy white";
console.log(cat.catFriends[0].name+"'s updated furcolor is "+cat.catFriends[0].furcolor);