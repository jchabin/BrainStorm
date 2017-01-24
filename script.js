function button(){
	var stuff=new XMLHttpRequest();
	stuff.onreadystatechange=function(){
			console.log(this);
	}
	stuff.open("GET","chat.php?s=1234",true);
	stuff.send();
}
