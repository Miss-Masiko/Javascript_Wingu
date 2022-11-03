// Create an Factory Function and give this function a suitable name
// Have it's parameters add these parameter values: 'title', 'description', 'date_created', 'date_due', 'tagname'
// Within your function create private variables that are set to the same name as the parameter values above
// Have your property values be equal to the respective parameters they have been named after
// e.g. description: description

const task = (title, description, date_created, date_due, tagname ) => {


    return {
        title: title,
        description: function() {
              return("Task Name: " + this.title + " | " +
              "Date Created: " + this.date_created + " | " +
              "Date Due: " + this.date_due + " | " +
               "Tags: " + this.tagname );
              },

              date_created: date_created,
              date_due : date_due,
              tagname: tagname,
    }

    // this._title = title;
    // this._description = description;
    // this._date_created = date_created;
    // this._date_due = date_due;
    // this._tagname = tagname;

    _
}



// Declare a variable of 'todo' and have it equal to an instantiation of your Factory Function name, using the arguments in brackets below
// Your 'todo' variable should now be equal to an object, which allows you to use concatenation on it.
// To avoid confusion, going forward we are going to refer to the 'todo' variable as an object
const todo = task('Head to Gym', 'Someting that I should turn into an habit', 2018-04-24, 2020-12-06, ['exercise', ' fitness', ' routines'])

console.log(todo.title);
console.log(todo.tagname);

// Using the 'todo' object declared above:
// Console.log the property value 'tagname' from your Factory Function, it should display the value "['exercise', ' fitness', ' routines']"
// Feel free to try and console log.all your other property values declared within the Factory Function

// After having successfully completed the instrutions above, add these changes to your code above:
// Remove the parameter and argument of 'description' from your factory function, as well as from the 'todo' object
// Replace your description property within your factory function, to equal a function which neatly returns all the properties
// e.g. description: function() {
//       return("Task Name: " + this.title + " | " +
//         "Date Created: " + this.date_created + " | " +
//         "Date Due: " + this.date_due + " | " +
//         "Tags: " + this.tagname );
//      },

// Using the 'todo' object, console.log the description property











