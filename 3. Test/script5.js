const user = {
    name : "A",
    origin : "B",
    enemy : "C"
};

let {enemy} = user;
enemy = "D";
console.log(user.enemy);

