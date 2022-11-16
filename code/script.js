function NewUser(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.getLogin = function () {
        let login = (this.firstName[0] + this.lastName).toLowerCase();
        return login;
    };
    this.getAge = function () {
        let year = parseInt(this.birthday.substring(6));
        let age = 2022 - year;
        return age;
    };
    this.getPassword = function () {
        let password = this.firstName[0].toUpperCase() + this.lastName.toLowerCase()
            + this.birthday.substring(6);
        return password;
    }
}

function createNewUser() {
    let firstName = prompt("Напишите свое имя: ");
    let lastName = prompt("Напишите свою фамилию: ");
    let birthday = prompt("Напишите свою дату рождения в формате dd.mm.yyyy: ");
    let user = new NewUser(firstName, lastName, birthday);
    return user;
}

let user = createNewUser();
console.log(user.getLogin());
console.log(user.getAge());
console.log(user.getPassword());

let arr = ['hello', 'world', 23, '23', null];
function filterBy(arr, type) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != type) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(filterBy(arr, "string"));