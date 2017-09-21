var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


/*-----feedback(contact) form-----*/



/*---------*/
app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var routes = {
    "/": "index",
    "/about": "about",
    "/faq": "faq",
    "/catalogue": "catalogue",
    "/contact": "contact",
    "/catalogue/:id": "catalog_template"
}


app.post('/form', function(req,res){
    if (req.body.name!="" && req.body.surname!="" && req.body.num!=""){

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bootcamp0513@gmail.com',
                pass: 'asdfgh89'
            }
        });

        var mailOptions = {
            from: 'bootcamp0513@gmail.com',
            to: 'aws.shkara89@gmail.com',
            subject: 'Добро Пожаловать в Нашу Компанию "Столичный Юрист"',
            text: (req.body.name + " " +req.body.surname + " " +req.body.num + " " +req.body.comments)
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Сообщение Отправлено: ' + info.response);
            }
        });
        res.end(' Ваш Запрос Отправлен. Наш Менеджер с вами свяжится в Ближайшее Время')


    }else{res.end(" Please Insert Data")}

});


for (let key in routes) {


    if (routes[key] == "faq") {

        app.get(key, function(req, res) {
            var b = fs.readFileSync(__dirname + '/views/faqs.json');
            var b = JSON.parse(b.toString());
            res.render(__dirname + "/views/" + routes[key], { title: "Вопросы-Ответы", obj: b })
        });
    } else if (routes[key] == "catalogue") {

        app.get(key, function(req, res) {

            var b = fs.readFileSync(__dirname + '/views/service.json');
            var b = JSON.parse(b.toString());
            res.render(__dirname + "/views/" + routes[key], { title: "Услуги", obj: b })
        });

    } else if (routes[key] == "catalog_template") {

        app.get('/catalogue/:id', function(req, res) {
            console.log(req.params.id);


            var b = fs.readFileSync(__dirname + '/views/service.json');
            b = JSON.parse(b.toString());
            b = b[req.params.id];


            res.render(__dirname + "/views/" + routes[key], { title: "Услуги", obj: b })
        });
    } else {

        app.get(key, function(req, res) {
            console.log(routes[key])
            res.render(__dirname + "/views/" + routes[key])
        });
    }

}

app.listen(3000)



