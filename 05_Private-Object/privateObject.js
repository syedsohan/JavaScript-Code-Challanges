const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "syedsohan",
  [password]: "012#45^7*9",
  age: 27,
};

console.log(`Name: ${user.username}`);
console.log(`Password: ${user.password}`);
console.log(`Age: ${user.age}`);
