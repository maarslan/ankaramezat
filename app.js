const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");


app.get("/",function(req,res){
  res.render("home");
});
app.get("/giris-yap",function(req,res){
  res.render("giris-yap");
});
app.get("/uye-ol",function(req,res){
  res.render("uye-ol");
});
app.get("/aktif-mezatlar",function(req,res){
  res.render("aktif-mezatlar");
});
app.get("/sonlanan-mezatlar",function(req,res){
  res.render("sonlanan-mezatlar");
});
app.get("/onemli-bilgiler",function(req,res){
  res.render("onemli-bilgiler");
});
app.get("/hakkimizda",function(req,res){
  res.render("hakkimizda");
});
app.get("/kullanici-bilgileri",function(req,res){
  res.render("kullanici-bilgileri");
});
app.get("/gizlilik-sozlesmesi",function(req,res){
  res.render("gizlilik-sozlesmesi");
});
app.get("/kullanici-sozlesmesi",function(req,res){
  res.render("kullanici-sozlesmesi");
});
app.get("/iptal-iade-kosullari",function(req,res){
  res.render("iptal-iade-kosullari");
});
app.get("/mesafeli-satis-sozlesmesi",function(req,res){
  res.render("mesafeli-satis-sozlesmesi");
});




app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
