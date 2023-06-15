const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);

console.log(user.name);
console.log(user.age);
console.log(user.email);
