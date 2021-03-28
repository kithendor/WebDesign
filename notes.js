 var c_date = new Date();
var day = c_date.getDay();
var month = c_date.getMonth();
var date = c_date.getDate();
var year = c_date.getFullYear();


var days = ["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκυή","Σάββατο"];

var months = ["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","..."];

document.getElementById("cdate").innerHTML= days[day]+" "+date+" "+ months[month]+" "+year;


var counter = 0;
var cid; 
var lblid;
var btnid;
var liid;

function fun1(){
	cid = "l"+counter;
	counter++;
	let txt = document.getElementById("txt").value;

	let ul = document.getElementById("ullist");
  let li = document.createElement("li");
  liid = "li"+cid;
  li.setAttribute("id", liid);

  var lbl = document.createElement("LABEL");
  lbl.appendChild(document.createTextNode(txt));
  lbl.setAttribute("for", cid);
  lblid = "lbl"+cid;
  lbl.setAttribute("id", lblid);


  let ch = document.createElement("INPUT");
	ch.setAttribute("type", "checkbox"); 
	ch.setAttribute("id", cid); 
	ch.setAttribute("onclick", "fun2(this.id)"); 
  
  btnid = "btn"+cid;
  let btnd = document.createElement("INPUT");
  btnd.value="x";
	btnd.setAttribute("type", "button"); 
	btnd.setAttribute("class", "dbtn");
  btnd.setAttribute("id", btnid);
  btnd.setAttribute("onclick", "fun3("+liid+")"); 

li.appendChild(ch);
	li.appendChild(lbl);
  li.appendChild(btnd);
  ul.appendChild(li);
}

function fun3(y)
{
  //alert(y.id);
 document.getElementById(y.id).parentNode.removeChild(document.getElementById(y.id));
}

function fun2(x)
{
  if(document.getElementById(x).checked ==true)
  {
      document.getElementById("lbl"+x).style.color="grey";
      document.getElementById("lbl"+x).style.textDecoration ="line-through";
  }
  else
  {
       document.getElementById("lbl"+x).style.color="black";
      document.getElementById("lbl"+x).style.textDecoration ="none";
  }

             
    
}



document.getElementById("addnote").onclick = function() {
  fun1();

};



document.getElementById("txt").addEventListener("keyup", function(event) {
  console.log("asd");
    event.preventDefault();
    if (event.keyCode === 13) {
        fun1();
    }
});

