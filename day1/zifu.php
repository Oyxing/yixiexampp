	<!--echo-->
<?php
//	输出一个或多个字符串
echo 'Hello Work'
?>
<!--adcslashes-->
<?php
	echo "</br>";
	echo "</br>";
//	返回字符串，该字符串在属于参数 charlist列表中的字符前都加上了反斜线
//  返回转义字符
	echo addcslashes("zoo[t,a,b,0,f,r,v,.]", '0.z.b.a.f.t.r.v');
// 输出：\zoo[\t,\a,\b,\0,\f,\r,\v,\.]

?> 
<!--addslashes-->
<?php
	echo "</br>";
	echo "</br>";
	//某些字符前加反斜线(\)
	//识别出字符"  字符'  "
	$str = "Is your name O'reilly?";
	echo addslashes($str);
// 输出： Is your name O\'reilly?

?> 

<?php
	echo "</br>";
	echo "</br>";
	//substr($str,start,end)	返回$str从start 到 end截取的内容 
    $str = substr($str, 2, -4);
    echo $str;

 ?>
 <!--chop-->
<?php
	//首尾有空格返回全部数值
	//str,str里的部分元素   返回剩下的
	echo "</br>";
 	echo "</br>";//without <pre> you cann't see desired output in your browser
 	echo chop("   Rimki   ");//right spaces are eliminated  返回"  Rimki  "
	echo "</br>";
   echo "</br>";
   echo chop("Kimefghigksdfs","efghigksdfs");//返回   Kimefg
?>
	<!--chr(阿斯克码值)  返回一个阿斯克码所对应的的值-->
<?php
	echo "</br>";
   echo "</br>";
$str1 = "The string ends in escape: ";
$str1 .= 'nihao'; /* 在 $str 后边增加换码符 */
//$str1 .= '' ;
/* 通常这样更有用 */
// $str2 = sprintf($str1,"nihao");
echo $str1;
?> 
	<!--chunk_split-->
	
<?php
//   把字符串分割成几个为一块
echo "</br>";
	echo "</br>";
   
// 使用 RFC 2045 语义格式化 $data
	$str = 'psadasdaasddaas';
   echo chunk_split($str, 3);
?> 
	<!--convert_cyr_string($str,from,to)-->
<?php
	echo "</br>";
	
//		from和to 只支持
//		k,w,i,a,d,m 
	$str3 = 'zhaoshigezhu'; 
	echo convert_cyr_string($str3,'a','d');
?>	
		<!--crypt-->
<?php
	echo "</br>";
echo "</br>";
	
//	返回一个基于标准 UNIX DES 算法或系统上其他可用的替代算法的散列字符串。
// 设置密码
$password = 'mypassword';
// 获取散列值，使用自动盐值
echo crypt($password);
 
?> 
<!--explode( 分隔符 , 字符串 [或者例list对应的下标] )-->
<?php
// 示例 1
$pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
$pieces = explode(" ", $pizza);
echo "</br>";
echo "</br>";
echo $pieces[0]; // piece1
echo "</br>";
echo "</br>";
echo $pieces[1]; // piece2
// 示例 2
$data = "foo:*:1023:1000::/home/foo:/bin/sh";
list($user, $pass, $uid, $gid, $gecos, $home, $shell) = explode(":", $data);
echo "</br>";
echo "</br>";
echo $user; // foo
echo "</br>";
echo $pass; // *
echo "</br>";
echo $gid //1000
?>
	<!--fprintf-->
<?php
echo "</br>";
echo "</br>";
if (!($fp = fopen('currency.txt', 'w'))) {
    return;
}
$money1 = 68.75;
$money2 = 54.35;
$money = $money1 + $money2;
// echo $money 
//will output "123.1";
$len = fprintf($fp, '%01.1f', $money);
// will write "123.10" to currency.txt
echo $len
//echo "wrote $len bytes to currency.txt";
// use the return value of fprintf to determine how many bytes we wrote
?> 
	<!--implode,join-->

<?php
//	将一个一维数组的值转化为字符串	
echo "</br>";
echo "</br>";
$array = array('lastname', 'email', 'phone');
echo "</br>";
$comma_separated = implode("", $array);
echo "</br>";
echo $comma_separated; // lastname,email,phone
// Empty string when using an empty array:
echo "</br>";
var_dump(implode('hello', array())); 
echo "</br>";
//string(0) ""
?> 
<?php
echo "</br>";
     //first example
     $array = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');    
    echo join(' ', $array);
?>
	<!--lcfirst-->
<?php
//	使一个字符串的第一个字符小写
echo "</br>";
echo "</br>";
$foo = 'HelloWorld1';
$foo = lcfirst($foo);             // helloWorld
echo $foo;	
echo "</br>";
$bar = 'HELLO WORLD2!';
echo "</br>";
$bar = lcfirst($bar);             // hELLO WORLD!
//$bar = lcfirst(strtoupper($bar)); // hELLO WORLD!
echo $bar
?>
	<!--levenshtein-->
<?php
//	计算两个字符串之间的编辑距离
//	有重复的直接替换
echo "</br>";
echo "</br>";
$str = "123456";
$str1 = "123456abcd";
$lev = levenshtein($str, $str1);
 echo $lev
?> 
	<!--localeconv-->
<?php
//	函数返回一个包含本地数字及货币格式信息的数组。
echo "</br>";
echo "</br>";
setlocale(LC_ALL,"US");
$locale_info = localeconv();
print_r($locale_info);
?>
	<!--ltrim-->
<?php

echo "</br>";
echo "</br>";
$str = "Hello World!";
echo $str . "<br>";
//	函数移除字符串左侧的空白字符或其他预定义字符。	
echo ltrim($str,"Hello");
//	函数移除字符串右侧的空白字符或其他预定义字符。
echo "</br>";
echo rtrim($str,"World!");
?>
	<!--md5_file-->	
<?php
echo "</br>";
echo "</br>";
//计算文件的 MD5 散列
$filename = "arr.php";
$md5file = md5_file($filename);
echo $md5file;//037a06b01f5ac57aeb2a867e50663207
?>
	<!--metaphone-->
<?php
//	函数计算字符串的 发音 
echo "</br>";
echo "</br>";
$str1 = "change";
$str2 = "Assistants";
echo metaphone($str1)."</br>";
echo metaphone($str2);
?>
	<!--nl2br-->
<?php
//	找到 \n 和  br 转化为html里的换行符
echo "</br>";
echo "</br>";
echo nl2br("One li\nne.\nAno</br>ther line.");
//返回
//One line.
//Ano
//ther line.
?>	
	<!--number_format-->
<?php
echo "</br>";
	
//	函数通过千位分组来格式化数字。
echo "</br>";
echo number_format("1000000")."<br>";
echo number_format("1000000",2)."<br>";
echo number_format("1000000",5,",",".");
?>
	<!--ord()-->
<?php
//	函数返回字符串中第一个字符的 ASCII 值。
echo "</br>";
echo ord("e")."<br>";
echo ord("ello")."<br>";
?>
	<!--parse_str-->
<?php
//	函数把查询字符串解析到变量中。
echo "</br>";
parse_str("name=Peter &age=43");
echo $name."<br>";
echo $age;
?>
	<!--print-->
<?php 
//	发送到输出的一个或多个字符串。
echo "</br>";
print "Hello world!"; 
?>
	<!--printf-->
<?php
//	函数输出格式化的字符串。
echo "</br>";
$number = 9;
$str = "Beijing";
printf("There are %u million bicycles in %s.",$number,$str);
?>
	<!--quoted_printable_decode()-->
<?php
echo "</br>";
$str = "Hello=0Aworld.";
echo quoted_printable_decode($str);
?>
	<!--quotemeta-->
<?php
//	函数在字符串中某些预定义的字符前添加反斜杠
//预定义的字符
//句号（.）,反斜杠（\）,加号（+）,星号（*）,问号（?）,方括号（[]）
//脱字号（^）,美元符号（$）,圆括号（()）,echo "</br>";
$str = "Hello world. (can you hear me?)";
echo "</br>";
echo "</br>";
echo quotemeta($str);//Hello world\. \(can you hear me\?\)
?>
	<!--sha1-->
<?php	
//	函数计算字符串的 SHA-1 散列
echo "</br>";
echo "</br>";
$str = "world";
echo sha1($str);
?>	
	<!--similar_text-->
<?php
//	函数计算两个字符串的相似的东西有几个。
echo "</br>";
echo "</br>";
echo similar_text("Heddo Peter","Hello Peter");//9
?>
	<!--str_ireplace-->
<?php
//	函数替换字符串中的一些字符（不区分大小写）。
echo "</br>";
echo "</br>";
echo str_ireplace("HELLO","Peter","Hello world!");//Peter world!
echo str_ireplace("WORLD","Peter","Hello world!");//Hello Peter!
?>
<?php
//	strcasecmp验证码不分大小写  是二进制安全的
echo "</br>";
echo strcasecmp("Hello world!","HeLLo woRld!");//相同返回0 
// 	strcmp验证码区分大小写  是二进制安全的
echo "</br>";
echo strcmp("Hello world!","Hello world!");//相同返回 0 不同是-1或1
echo "</br>";
echo "</br>";
//	strcoll() 是区分大小写的，但不是二进制安全的。
echo strcoll("Hello World!","Hello World!");//相同返回 0 
echo "</br>";
echo strcoll("Hello World!","HEllo Werld!");//相同返回 1
?>
	<!--str_repeat-->
<?php
//	重复输出
echo "</br>";
echo "</br>";
echo str_repeat("Rsa",5);//五个Rsa
?>
	<!--str_split()-->
<?php
//	函数把字符串分割到数组中
echo "</br>";
echo "</br>";
print_r(str_split("Hello"));//Array ( [0] => H [1] => e [2] => l [3] => l [4] => o )
?>
	<!--str_word_count()-->
<?php
//	函数计算字符串中的单词数。
echo "</br>";
echo "</br>";
echo str_word_count("Hel l owo rld!");//4
?>
	<!--strchr,stripos,stristr-->
<?php
//	函数搜索字符串在另一字符串中的第一次出现。
//	返回第一次出现的值开始到整个字符串结束
echo "</br>";
echo "</br>";
echo strchr("Hello world!Hpllo w饿rld!","world");//world!Hpllo w饿rld!
//   可以查找一个元素在另一个元素不分大小写  返回的是位置
echo "</br>";
echo stripos("I love php, I love php too!","PHP");//7
echo "</br>";
//   可以查找一个元素在另一个元素不分大小写  返回的是字符
echo stristr("Hello world!","WORld");//world
?>

	<!--strip_tags()-->
<?php
echo "</br>";
echo "</br>";
echo strip_tags("Hello world!");
?>
		<!--stripslashes-->
<?php

echo "</br>";
echo "</br>";
//	删除 字符 前面的反斜杠：
echo stripcslashes("He\l\lo \World!");//Hello World!
echo "</br>";
echo stripslashes("Who\'s \Peter Griffin?");//Who's Peter Griffin?
?>
	<!--strlen-->
<?php
	//获取字符长度
echo "</br>";
echo strlen("Hello");//5
?>
	<!--wordwrap-->
<?php
echo "</br>";
//函数按照指定长度对字符串进行折行处理。
$str = "An example of a long word is: Supercalifragulistic";
echo wordwrap($str,15,"<br>n");
?>