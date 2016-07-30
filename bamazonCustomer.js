//  Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.   
var inquirer = require('inquirer');
var Table = require('cli-table');
var mysql = require('mysql');


// var allProducts = ["frisbee", "jumprope", "stickball set", "beanbag chair", "laptop computer", "brown endtable", "blue computer table", "bottle of JD", "red dirtbike", "blue dirtbike"];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "bamazon_db"
});


connection.connect(function(error) { //unecessary for the mysql package, but I left it anyways
    if (error) {
        throw error;
    }
    console.log('successful connection to database');
})


//=================================================================
//Define user questions
 var prodQuestion = [{
        name: 'product',
        message: 'which product would you like',
        type: 'input'
    }]; 

var quantQuestion = [{
        name: 'quantity',
        message: 'how many would you like?',
        type: 'input'
    }];

//====================================================================
//

function search(){
    connection.query("SELECT * FROM products", function(error, results) {
        if (error) {
            throw error;
        }
        results.forEach(function(column){
            console.log("-------------------------------------");
            console.log("Product ID: " + column.id);
            console.log("Product Name " + column.productName);
            console.log("Department Name" + column.departmentName);
            console.log("Price " + column.price);
            console.log("Stock " + column.stockQuantity)

        })
        inquirer.prompt(prodQuestion).then(function(answer){
             
                              // results is from the table
            for (var i = 0; i < results.length; i++) {
             

                if (results[i].productName=== answer.product){
                    var chosenProd = results[i];
                    inquirer.prompt(quantQuestion).then(function(answer2){
                        // from the table            from the user
                        if(chosenProd.stockQuantity>answer2.quantity){
                            console.log("Your order has been placed");
                            console.log('This is chosenProd.stockQuantity' + chosenProd.stockQuantity);
                            
                            connection.query("UPDATE products SET? WHERE?", [{
                            stockQuantity: chosenProd.stockQuantity - answer2.quantity},
                            {productName: answer.product}], function(error, response){
                                if(error){
                                    throw error;
                                }           
                                var totalPrice = answer2.quantity * chosenProd.price;
                                console.log("Your total price for " + answer2.quantity + " " + chosenProd.productName + " is " + totalPrice);
                            })
                        }else {
                            console.log("Not enough stock");
                        }
                    })
                }
            }
        })    
    })

};
search();
//how can we import the value of results to this function?

    
      
            
            
                        
         





//gives all files but no prompting


