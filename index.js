const express = require("express")
const app = express()

app.get("/home", (req,res) => {
    const response = "Welcome to Prepbytes Elevation Academy"
    res.send(response)
})

app.get("/api/main", (req,res) => {
    const qns = "What is express ?"
    const ans = "Express is a fast and minimalist web application framework for Node.js. It provides a robust set of features for web and mobile applications, allowing you to build APIs, handle HTTP requests and responses, manage routing, and much more."

    const result = qns + '<br/>' + ans
    res.send(result)

})

const port = 3030

app.listen(port,() => {
    try {
        console.log("server running successfully");
    }
    catch(err) {
        console.log('Error');
    }
})