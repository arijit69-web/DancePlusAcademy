const express = require("express");
const path = require("path");
var mongoose = require("mongoose");

const app = express();
const fast2sms = require("fast-two-sms");
require("dotenv").config();
const DB =
  "mongodb+srv://arijit:Arijit@2000@cluster0.m4uuy.mongodb.net/DancePlus?retryWrites=true&w=majority";
const port = process.env.PORT || 80;
const bodyparser = require("body-parser"); 
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Atlas connected");
  })
  .catch((err) => console.log("DB not connected"));
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

var contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  age: { type: String, required: true },
  register: {
    type: Boolean,
    default: false,
  },
});

var Contact = mongoose.model("Contact", contactSchema);
app.use("/static", express.static("static"));
app.use(express.urlencoded());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.status(200).render("index.pug");
});
app.get("/review", function (req, res) {
  res.status(200).render("review.pug");
});

app.get("/about", function (req, res) {
  res.status(200).render("about.pug");
});
app.get("/shop", function (req, res) {
  res.status(200).render("swag.pug");
});

app.get("/info", function (req, res) {
  res.status(200).render("info.pug");
});
app.get("/FAQ", function (req, res) {
  res.status(200).render("FAQ.pug");
});

app.get("/register", function (req, res) {
  res.status(200).render("register.pug");
});
app.get("/price", function (req, res) {
  res.status(200).render("price.pug");
});
app.get("/bot", function (req, res) {
  res.status(200).render("bot.pug");
});

app.post("/register", async (req, res) => {
  var myData = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    age: req.body.age,
  });
  myData
    .save()
    .then(async () => {
      res.send(
        `<script>alert("✅Registered Successfully✅"); window.location.href = "/price"; </script>`
      );
      const data = await fast2sms.sendMessage({
        authorization: process.env.API_KEY,
        message: `Hello ${req.body.name}, Welcome to Dance + Academy.Our mentors will contact you soon.Thank You for registering. Have a nice day.`,
        numbers: [req.body.phone],
      });
    })
    .catch((err) => {
      res.send(
        `<script>alert("⚠️Not Registered.Please Enter the Data Correctly!!⚠️"); window.location.href = "/register"; </script>`
      );
    });
});

var Publishable_Key =
  "pk_test_51IKbd3Jwkx2vX4NUc2gUq8hcMVYRfVjga8yjdfoDSPz3kZIGXdKnRUrzNrny88nskfWspc6N5htOPh4VBGgVNcgV00dExlonw6";
var Secret_Key =
  "sk_test_51IKbd3Jwkx2vX4NUa6rvmEqfwGpRH3J9bYmv8YoUQwxFbMZ2UUDdqkd0F66Uh51DaAvdfzIDwdXdawB1Mmm5QMeK00kA0HDCmD";
const stripe = require("stripe")(Secret_Key);
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/payment", function (req, res) {
  res.render("pay.pug");
});

app.post("/payment", async function (req, res) {
  var useremail = req.body.stripeEmail;

  try {
    const result = await Contact.findOne({ email: useremail });
    if (result.id !== null) {
      const i = result.id;

      const up = await Contact.findByIdAndUpdate(
        { _id: i },
        { $set: { register: true } }
      );
      stripe.customers
        .create({
          email: req.body.stripeEmail,
          source: req.body.stripeToken,
          name: "Arijit Sarkar",
          address: {
            line1: "8/1 New Santoshpur 1st Lane",
            postal_code: "700075",
            city: "Kolkata",
            state: "West Bengal",
            country: "India",
          },
        })
        .then((customer) => {
          return stripe.charges.create({
            amount: 100000, // Charing Rs 25
            description: "Dance+ Academy Monthly Fees",
            currency: "INR",
            customer: customer.id,
          });
        })

        .then((charge) => {
          res.send(
            `<script>alert("✅Payment Successful✅.We will Send you the Receipt to your Mail."); window.location.href = "/"; </script>`
          );
        })
        .catch((err) => {
          console.log(err)
          res.send(
            `<script>alert("⚠️Payment Declined!!⚠️"); window.location.href = "/payment"; </script>`
          );
        });
    }
  } catch (err) {
    res.send(
      `<script>alert("You have not Registered.⚠️Payment Failed!!⚠️"); window.location.href = "/register"; </script>`
    );
  }
});

var buySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  apartment: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  sizeHOOD: { type: String, required: true },
  sizeJOGG: { type: String, required: true },
});

var Buy = mongoose.model("Buy", buySchema);

app.post("/swag", async (req, res) => {
  var myData = new Buy({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    address: req.body.address,
    apartment: req.body.apartment,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    sizeHOOD: req.body.sizeHOOD,
    sizeJOGG: req.body.sizeJOGG,
  });
  myData
    .save()
    .then(async () => {
      res.send(
        `<script>alert("✅Order is Placed Successfully and it will be Delivered by Tomorrow✅"); window.location.href = "/"; </script>`
      );
      const data = await fast2sms.sendMessage({
        authorization: process.env.API_KEY,
        message: `Hello ${req.body.name}, Order is Placed Successfully and it will be Delivered by Tomorrow.Have a nice day.`,
        numbers: [req.body.phone],
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(
        `<script>alert("⚠️Order Not Placed Successfully!!⚠️"); window.location.href = "/shop"; </script>`
      );
    });
});

//Listening at port
app.listen(port, () => {
  console.log(`The application started on port ${port}`);
});
