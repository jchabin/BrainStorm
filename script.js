function button(){
	var stuff=new XMLHttpRequest();
	stuff.onreadystatechange=function(){
			console.log(stuff);
	}
	stuff.open("GET","chat.php?s=1234",true);
	stuff.send();
}
