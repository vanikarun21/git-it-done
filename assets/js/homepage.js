
// var getUserRepos = function() {
//   console.log("function was called");
// };
var getUserRepos = function() {
  fetch("https://api.github.com/users/octocat/repos");
  var response = fetch("https://api.github.com/users/octocat/repos");
console.log(response);
fetch("https://api.github.com/users/octocat/repos").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});

console.log("outside");
getUserRepos();

