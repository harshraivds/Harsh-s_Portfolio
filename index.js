import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (res, req)=>{
    req.render("index.ejs");
});
app.get("/about", (res, req)=>{
    req.render("about.ejs");
});
app.get("/contact", (res, req)=>{
    req.render("contact.ejs");
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Basic form validation
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }
    res.send('Form submitted successfully.');
});
// app.get("/project", (res, req)=>{
//     req.render("project.ejs");
// });
app.get("/web", (res, req)=>{
    req.render("web.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });