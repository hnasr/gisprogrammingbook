const app = require("express")();
app.get("/hello", (req, res) => 
                  res.send("Hello! This is my first web app"));
app.listen(8080, () => console.log("Listening on port 8080"));
