const
    express = require("express")
    , app = express()
    , port = process.env.PORT || 3033
;

app.use("/node_modules", express.static("node_modules"));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("index"));
app.get("/:name", (req, res, next) => res.render(req.params.name, (err, html) => {
    if (err) {
        return res.status(404).send("404 - not found")
    }
    return res.send(html);
}));

app.listen(port, () => {
    console.log("listeneing " + port)
});