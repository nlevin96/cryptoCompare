Home Assignment
---------------------------------------

The following app gets coins list names and a date in the past in the following format:
{
    "date" : "dd/MM/yyyy",
    "coins" : []
}
The app returns the difference in percentage between that time and now.

running instructions:
run the app via node with the following command in the terminal - node index.js.
the app runs on localhost:3000/coins.

send a POST request with the list in the body and the app will return a map with the required information.

files:
coins.js - contains the function that uses the cryptoCompare API with axios
index.js - contains the restAPI code for the user.

note : the index.js file only contains a POST request implementation as required.