// ext dependencies
var axios = require("axios")

// get request 
axios({
    url: 'https://interview.adpeai.com/api/v1/get-task',
    method: 'get',
  }).then((results, err) => {
      // break result down by body
      let Id = results.data.id;
      let left = results.data.left;
      let right = results.data.right;
      let operation = results.data.operation
      let Result = 0

      // perform math operation  
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
      }).then((results, err) => {
          // log response from post request
          console.log("\nResult status: " + results.statusText);
          console.log("\nResult data: " + results.data);
        })
})