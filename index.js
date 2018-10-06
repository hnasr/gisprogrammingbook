const app = require("express")();
app.get("/", (req, res) => 
                  res.sendFile(__dirname + "/index.html"));
app.listen(8080, () => console.log("Listening on port 8080"));