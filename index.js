const mongoose = require("mongoose");
const articleModel = require("./article");



mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {useNewUrlParser: true, useUnifiedTopology: true});

const Article =  mongoose.model("Article", articleModel);

Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
})

/*Atualizar (update) dados
Article.findByIdAndUpdate("6123dbca34176406b8d8b5f1", {title:"Sou Brava", body: "sou peludinha"}).then(articles => {
    console.log("dado alterado");
}).catch(err => {
    console.log(err)
})*/
/* Remover dados
Article.findByIdAndDelete("6123dbdacd164e1d1c1f835f").then(articles => {
    console.log("dado removido");
}).catch(err => {
    console.log(err);
})*/

/*Posso procurar por quantas categorias quiser
Article.find({'author': 'Drogo'}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
})*/

/*Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
})*/

/*Cadastro
const artigo = new Article({title: "Olá, mundo", 
author: "Drogo", 
body: "node",
special: true,
resume:{
    content: " bla bla bla",
    author: " ble bla ble"
}});

artigo.save().then (() => {
    console.log("Artigo salvo")
}).catch(err => {
    console.log(err);
}) */