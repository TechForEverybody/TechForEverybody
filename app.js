const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");

mongoose.connect("mongodb://localhost/himalaya_shopping", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
let userschema = new mongoose.Schema({
    user_id: Number,
    name: String,
    email: String,
    number: Number,
    password: String,
    address: {
        type: String,
        default: null,
    },
    pincode: {
        type: Number,
        default: 0
    }
});
let productschema = new mongoose.Schema({
    pdt_id:Number,
    pdt_name:String,
    price:Number,
    type:String
})



db = mongoose.connection;
db.once("open", () => {
    console.log("connected");
});
let userdetails = mongoose.model("userdetails", userschema);
let products = mongoose.model("products", productschema)
const app = express();
app.use(express.urlencoded());
app.use("/static", express.static("static"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));
app.use(
    session({
        secret: "Pankajsingh",
        resave: false,
        saveUninitialized: true,
    })
);




const redirectlogin = (req, res, next) => {
    if (!req.session.useremail) {
        res.redirect('/login')
    } else {
        next()
    }
}
const redirecthome = (req, res, next) => {
    if (req.session.useremail) {
        res.redirect('/')
    } else {
        next()
    }
}

app.get("/", (req, res) => {
    products.find({}, (err, data) => {
        if (req.session.useremail) {
            res.render("./homepage.pug", {
                user: true,
                username: req.session.username.split(" ")[0].toLowerCase(),
                data:data
            });
            console.log(data);
        } else {
            res.render("./homepage.pug", {
                user: null,
                data:data
            });
        }
    })
});
app.get("/login", redirecthome, (req, res) => {
        res.render("./loginpage.pug");
});
app.post("/login", (req, res) => {
    let entry = {
        email: req.body.email.toLowerCase(),
        password: req.body.password
    };
    userdetails.findOne({
            email: entry.email,
        },
        (err, data) => {
            if (data != null) {
                if (entry.email == data.email && entry.password == data.password) {
                    req.session.username = data.name
                    req.session.useremail = data.email
                    req.session.save((err) => {
                        if (err) {
                            console.log('error in session saving');
                        }
                    });
                    res.redirect('/')
                } else {
                    res.render("./loginpage.pug", {
                        user: null,
                        notify:true,
                        notificationMessage:"Invalid credentials"
                    });
                }
            } else {
                res.render("./loginpage.pug", {
                    user: null,
                    notify:true,
                    notificationMessage:"User doesn`t Exists"
                });
            }
        });
});
app.post("/register", (req, res) => {
    let namer = req.body.name;
    let emailr = req.body.email;
    let numberr = req.body.phone;
    let passwordr = req.body.password;
    userdetails.find().count((err, count) => {
        let entry = {
            user_id: count + 1,
            name: namer.toLowerCase(),
            email: emailr.toLowerCase(),
            number: numberr,
            password: passwordr,
        };
        let data = new userdetails(entry);
        userdetails.findOne({
                $or: [{
                        email: entry.email,
                    },
                    {
                        number: entry.number,
                    },
                ],
            },
            (err, dta) => {
                if (dta == null) {
                    data.save((err, data) => {
                        req.session.username = data.name
                        req.session.useremail = data.email
                        req.session.save((err) => {
                            if (err) {
                                console.log('error in session saving');
                            }
                            res.render('/')
                        })
                    });
                } else {
                    res.render("./loginpage.pug", {
                        user: null,
                        notify:true,
                        notificationMessage:"User already exists with this Email/number"
                    });
                }
            }
        );
    });
});
app.get('/account', redirectlogin, (req, res) => {
    userdetails.findOne({
        email: req.session.useremail
    }, (err, data) => {
        res.render('accountpage.pug', {
            user: true,
            username: req.session.username.slice(0, 8).toLowerCase(),
            details: data
        })
    })
})

app.post('/updateaddress', (req, res) => {
    userdetails.updateOne({
        email: req.session.useremail
    }, {
        $set: {
            address: req.body.address,
            pincode: req.body.pincode
        }
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("updated");
            res.redirect('/account')
        }
    })
})

app.get("/logout", redirectlogin, (req, res) => {
    req.session.destroy((err) => {
        console.log(err);
    })
    console.log("log outted");
    res.redirect('/')
})




app.listen(80, "127.0.0.1", () => {
    console.log("done go and see");
});