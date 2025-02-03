function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Iterate over the array
for (const name of user) {
  console.log(greeter(name));
}

// Solution 2: Use a function that handles arrays
function greetUsers(users: string[]): string[] {
  return users.map(user => greeter(user));
}

console.log(greetUsers(user));