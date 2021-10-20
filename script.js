// FUNCTIONS EXERCISE

// 1
function spookyGhost(){
    console.log(`Boo!!!`);
}
spookyGhost(); // BOO!!!

console.log("==========");

// 2
function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
}
candy(`Get Candy`);
/*
Get Candy
Get Candy
Get Candy
Get Candy
*/

// 3
function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
        console.log(`ARH-WOOO!`);
    }
    // Using a Ternary
    // console.log((a === `Full` && b === `Moon`) ? `ARH-WOOO!` : "");
}
werewolf('Full', `Moon`); //ARH-WOOO!
werewolf(`Crescent`, `Moon`); // Does not display anything in the terminal/console.

// 4
function halloween(){
    return `October 31st`;
}
halloween(); // Does not display anything in the console/terminal
console.log(halloween()); // October 31st

//  5
function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    } else if (pieces < 31) {
        return false;
    }

    // Using a Ternary 
    // return (pieces >= 31) ? true : false;
}
isEnoughCandy(31);

// 6
function candyCounter(nums){
    let  total = 0;
    for(i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total;
}
console.log(candyCounter([1, 2, 3])); // 6
console.log(candyCounter([1, 3])); // 4

console.log("============");

// 7
const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the haunted mansion!");
}
hauntedMansion();

// 8
ghostbusters = () => `Who You Gonna Call?`; // Who You Gonna Call?

console.log(ghostbusters());

// 9
//No

// 10
// Yes

// 11a
const  costumes = ["Ghost", "Princess", "Pirate"];

// 11b
const upperCostumes = costumes.map(i => i.toUpperCase());
console.log(upperCostumes);

// BONUS 12a
const stephenKingMovies = [
    "The Shining",
    "Christine",
    "It",
    "The Mist",
    "Creepshow",
    "Pet Sematary"
];

// 12b
const twoMovies = stephenKingMovies.filter(i => i.length === 9);
console.log(twoMovies); // 'Christine', 'Creepshow'

console.log("==========");

// 13a
const halloweenSongs1 = ["Monster Mash", "Thriller"];

// 13b
const halloweenSongs2 = [
    "I Put A Spell On You",
    "This Is Halloween",
    "Ghostbusters"
];

// 13c
halloweenJukeBox = (songs) => {
    const random = Math.floor(Math.random() * songs.length);
    console.log(songs[random]);
}

// 13d
halloweenJukeBox(halloweenSongs1);
halloweenJukeBox(halloweenSongs2);

// 14
caps = string => {
    let newString = "";
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0){
            newString = newString + string[i].toUpperCase();
        } else {
            newString = newString + string[i];
        }
    }
    return newString;
}

console.log(caps(`Halloween`));

