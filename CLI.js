var inquirer = require('inquirer');
var Weather = require('./WeatherAdmin')

var WeatherAdmin = new Weather()

var getAccess = function () {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Are you user or admin?",
            choices: ["user", "admin"],
        }
    ]).then(function (answers) {
        switch(answers.choice){
            case "user":
                WeatherAdmin.newUserSearch();
                break;
            case "admin":
                inquirer.prompt([
                    {
                        type: "password",
                        message: "Enter password:",
                        name: "password"
                    }
                ]).then(function (answers) {
                    if (answers.password === "admin") {
                        admin = true;
                        console.log("Welcome, Admin!");
                        WeatherAdmin.getData();
                    }
                    else {
                        console.log("Oops! Incorrect password!");
                    }
                });
        }
    });
}
getAccess();