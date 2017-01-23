function button(){
	var stuff=new XMLHttpRequest();
	stuff.onreadystatechange=function(){
		document.getElementById("return").innerHTML=this.responseText;
	}
	stuff.open("GET","chat.php?s=1234",true);
	stuff.send();
}
