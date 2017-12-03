import css from "./css/index.css";
import sass from "./css/common.scss";
//import $  from "jquery"
var oDiv=document.getElementById("div");
var json = require("../author.json");
oDiv.innerHTML="hello world1233!!";
$("#div").html("test jq123");
$("#json").html(`作者是:${json.name},年龄是:${json.age}, 性别是:${json.sex}`);
