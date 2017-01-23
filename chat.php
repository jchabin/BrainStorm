<php?
$file=explode(file("chat.txt"),"|");
$i=0;
for($i=0;$i<count($file)&&explode($file[i],"/")[0]==$_REQUEST["s"];$i++){}
echo $i;
?>