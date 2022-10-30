const person = {
    firstName: "Atharva",
    lastName: "Ranade",
    'favorite food': "Indian",

    bestFriend: {
        firstName: "Arjun",
        lastName: "Kapoor",
        'favorite food': "Mexican",
    }
}

console.log(person.bestFriend.firstName);
console.log(person["favorite food"]);


ttt = [['-','0','X'],['-','X','0'],['X','-', 'X']]
ttt[0][2] = 'YY'

console.table(ttt)
console.log(ttt[0][0])

const myEmail = 'guy@guy.com';

const emailRegex = new RegExp('\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*');
const validEmail = emailRegex.test(myEmail);

console.log(validEmail)