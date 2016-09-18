var mysql      = require('mysql');
var prompt = require("prompt");
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  3307,
  user     : 'root',
  password : 'root',
  database : 'Bamazon'
});
 
connection.connect();

    connection.query('SELECT * FROM Bamazon.Products ', function(err, results) {
                if (err){
                    console.log(err);
        } 
                else {

                for(var i = 0; i<results.length; i++){
                    console.log(results[i]);
                    console.log(results[i].ProductName);
                    console.log(results[i].DepartmentName);
                    console.log(results[i].Price);
                    console.log(results[i].StockQuantity);
                }
            }
       
});
prompt.start();

var selectItem = function(){
        inquirer.prompt({
            name:"select",
            type:"input",
            message:"what item do you want to buy?"

        }).then(function (answers) {
        if (answers.select > 0){
        buyItem(answers.select);
        }
        else {
            runSearch();
        }

    });
}
