function button(){
	var stuff=new XMLHttpRequest();
	stuff.onreadystatechange=function(){
		if (this.readyState == 4 && this.status == 200)
			console.log(this.responseText);
	}
	stuff.open("GET","chat.php?s=1234",true);
	stuff.send();
}
