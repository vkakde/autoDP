// ext dependencies
var axios = require("axios")
var express = require("express")

// create express app
var app = express()

// get request 
axios({
    url: 'https://interview.adpeai.com/api/v1/get-task',
    method: 'get',
  }).then((results) => {
      // break result down by body
      let Id = results.data.id;
      let left = results.data.left;
      let right = results.data.right;
      let operation = results.data.operation
      let Result = 0

      // perform operation  
      switch(operation) {
        case "addition": Result = left+right
                         break;
        case "subtraction": Result = left-right
                         break;
        case "multiplication": Result = left*right
                            break;
        case "division": Result = left/right
                            break;
      }

      // post result
      axios({
          url: "https://interview.adpeai.com/api/v1/submit-task",
          method: 'post',
          data: {
              id: Id,
              result: Result
          }
      }).then((results) => {
          console.log("\nResult status: " + results.statusText);
          console.log("\nResult data: " + results.data);
      })
});
