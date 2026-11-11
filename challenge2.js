
const goal = 5000;
let month = 1;
let saving = 100;
let total = 0;


while (total < goal) {

    total += saving;


    let message = `Month ${month}: saved KES ${saving}, total KES ${total}`;

    if (saving >= 500) {
        message += " - Big month!";
    }

    console.log(message);

    if (total < goal) {
        month++;
        saving += 50;
    }
}

console.log(`Goal reached in month ${month} with KES ${total}!`)