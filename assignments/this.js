/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window/Global Object Binding
    - Using "this" globally will call the top most outter object being used and if none are declared then it will travel to the language and work from there!
* 2. Principle 2: Implicit Binding
    - When using dot notation, any object being called before the dot will be "this"!
* 3. Principle 4: Explicit binding
    - Whenever JS methods call() or apply() is being used, "this" is being used for a specific object related to which ever method is being called. 
* 4. Principle 3: New binding
    - "this"  is used when a constructor function creates a new object and wants to pass it back to another function 
*
* write out a code example of each explanation above
*/

// Principle 1
function myName(firstName, lastName) {
    console.log(this.firstName);
    return firstName;
}
console.log(myName("Toni", "Darden"));
// only my first name should be passed unless I changed the return to lastName then "darden" would pass. 

// Principle 2
const universityId = {
    name: 'Jay',
    major: 'Rap',
    graduationYear: '2019', 
    statement: function(gpa) {
        console.log(`${this.name} is graduating in ${this.graduationYear} top of his class with a ${gpa} GPA!`);
        console.log(this);
    }
}
universityId.statement("4.0");

// Principle 3
function RudePerson(comment) {
    this.word = "Yoooo";
    this.comment = comment;
    this.reponse = function() {
        console.log(this.word + " " + this.comment);
        console.log(this);
    }
}
const man = new RudePerson("Move that slowWagon lady!");
const woman = new RudePerson("You stop trailing me speedRACER!");

man.reponse();
woman.reponse();
// Principle 4
const contestWinner = {
    name: "John Poe", 
    state: "Texas", 
    winningNumbers: (12345), 
    announcement: function(prize1, prize2, prize3) {
        return `${this.name} from ${this.state} is the winner of this years Annual State Contest. ${this.name} winning numbers 
        were ${this.winningNumbers}. He won a ${prize1}, ${prize2} and a brand new ${prize3} ! `
    }
}
const prizes = ['Bike', 'Car', 'Jet Plane'];
// using apply() method
console.log(contestWinner.announcement.apply(contestWinner, prizes));
// using the call() method 
console.log(contestWinner.announcement.call(contestWinner, 'Bike', 'Car', 'Jet Plane'));