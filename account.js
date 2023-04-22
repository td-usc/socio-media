$(document).ready(function(){
    //placeholder values - replace with real data from database
    var rank = 1;
    var username = 'John Doe';
    var logins = 10;
    var numoffriends = 11;
    var numofposts = 12;
    var numofenemies = 2;

    //implement if .json file
    /*
    fetch("./data.json")
        .then(function(response) {
        return response;
        })
        .then(function(data) {
            return data.json();
        })
        .then(function (Normal) {
            const username = Normal.map(
                (data) => '${data.username}'
            );
            const numoffriends = Normal.map(
                (data) => '${data.numoffriends}'
            );
            const numofposts = Normal.map(
                (data) => '${data.numofposts}'
            );
        })
        .catch(function(err) {
            console.log("Fetch problem show: " + err.message);
        }
        );
    */

        $("#username").html(username);
        $("#numofposts").html("Total Posts: " + numofposts);
        $("#numoffriends").html("Total Associates: " + numoffriends);
        $("#numofenemies").html("Total Enemies: " + numofenemies);
});
  
