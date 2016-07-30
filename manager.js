/*Challenge #2: Manager View (Next Level)
  • Create a new Node application called BamazonManager.js. Running this application will:
  ◦ List a set of menu options:
  ▪ View Products for Sale ***
  ▪ View Low Inventory
  ▪ Add to Inventory
  ▪ Add New Product
  ◦ If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
  ◦ If a manager selects View Low Inventory, then it should list all items with a inventory count lower than five.
  ◦ If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
  ◦ If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

  • If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.

*/


var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root", 
   password: "", 
   database: "bamazon_db"
})

connection.query('SELECT * FROM Products', function(err, results) {
   if (err) {
       throw err;
   }
   menuOptions();
});
//make a list of options for the user to choose from
var menuOptions = function(){
   inquirer.prompt([{
       type: 'list',
       name: 'inventory',
       message: 'Please choose and option.',
       choices: [
           '1) View Products for Sale',
           '2) View Low Inventory',
           '3) Add to Inventory',
           '4) Add New Product'
       ]
   }]).then(function(answers){
       // console.log(answers);
       switch(answers.inventory) {
           case '1) View Products for Sale': viewProducts(); 
           break;
           case '2) View Low Inventory': viewLowInvent();
           break;
           case '3) Add to Inventory': addInvent(); 
           break;
           case '4) Add New Product': addProducts();
           break;
       };
   })
}
//show all the products for sale
var viewProducts = (function() {
   connection.query('SELECT * FROM products', function(error, results) {
   if (error) {
       throw error;
   }
     results.forEach(function(row){
         console.log('Item ID:', row.id);
         console.log('Product:', row.productName);
         console.log('Department:', row.departmentName);
         console.log('Price:', row.price);
         console.log('Stock Left', row.stockQuantity);
         console.log('-------------------------------')
     })
   })
});


//here we get the quantity data from the database. If results.stockQuantity is less than 5, console.log (results.productName)
var viewLowInvent = (function(){
    connection.query('SELECT * FROM products', function(error, results){
      if(error){
        throw error;
      }
       results.forEach(function(row){
          if(row.stockQuantity < 5){
            console.log(row.stockQuantity);
            console.log(row.productName);
          }
       })
    })
        console.log("-------------------------------------------------------");
    
})






