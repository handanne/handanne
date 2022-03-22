// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name) {
    roster.push(name);
}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(name) {
    var index = roster.indexOf(name);
    if (index != -1){
        roster.splice(index, 1);
    }
}


// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.
function display() {
    console.log(roster);
}


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var start = prompt("Would you like to start the roster web app? y/n");

if (start.toLowerCase() === "y"){

    while (true){

        var action = prompt("Please select an action: add, remove, display, or quit.")

        if (action.toLowerCase() === "add"){
            var rosterName = prompt("What name would you like to add? ")
            addNew(rosterName);

        } else if (action.toLowerCase() === "remove"){
            var rosterName = prompt("What name would you like to remove?");
            remove(rosterName);

        } else if (action.toLowerCase() === "display"){
            display();

        } else if (action.toLowerCase() === "quit"){
            break;
        }
    }

}

alert("Thanks for using the Web App! Please refresh the page to start over.");
