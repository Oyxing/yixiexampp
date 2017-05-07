<!--数组-->
<!--array()--> 
<?php
	$cars = array('好','好','好');
	echo "你".$cars[0].'我'.$cars[1].'大家'.$cars[2].'.';	
?>
<!--array_change_key_case()--> 
<?php
	echo '</br>';
	$age = array('Xiaoming' => '18','Xiaobai' => '17','Xiaohong' => '20',);
	// 数组的键变成大写返回新数组
    print_r(array_change_key_case($age,CASE_UPPER));
   // Array ( [XIAOMING] => 18 [XIAOBAI] => 17 [XIAOHONG] => 20 ) 
    echo '</br>';
   	// 数组的键变成小写返回新数组
    print_r(array_change_key_case($age,CASE_LOWER));
    // Array ( [xiaoming] => 18  [xiaobai] => 17  [xiaohong] => 20 ) 
?>
<!-- array_chunk() 分割成新数组-->
<?php
    echo '</br>';
    echo '</br>';
    echo '</br>';
    // array_chunk($arr,num)num把一个数组分割成一个新数组新数组中的个数
$cars=array("1","2","3","4","5","6");
  //返回的数组从0开始
print_r(array_chunk($cars,2));
echo '</br>';
print_r(array_chunk($cars,2,false));
// Array ( [0] => Array ( [0] => 1 [1] => 2 )/ [1] => Array ( [0] => 3 [1] => 4 ) /[2] => Array ( [0] => 5 [1] => 6 ) ) 
    echo '</br>';
    echo '</br>';
print_r(array_chunk($cars,2,true));
// Array ( [0] => Array ( [0] => 1 [1] => 2 ) /[1] => Array ( [2] => 3 [3] => 4 ) /[2] => Array ( [4] => 5 [5] => 6 ) )
?>
<!-- array_column() -->
<?php
 echo '</br>';
 echo '</br>';
$a = array(
  array(
    'id' => 5698,
    'first_name' => 'Peter',
    'last_name' => 'Griffin',
  ),
  array(
    'id' => 4767,
    'first_name' => 'Ben',
    'last_name' => 'Smith',
  ),
  array(
    'id' => 3809,
    'first_name' => 'Joe',
    'last_name' => 'Doe',
  )
);
//返回多维数组中所需要的那个值成为新数组
$last_names = array_column($a, 'last_name');
$id = array_column($a, 'id');
print_r($last_names);
// Array ( [0] => Griffin / [1] => Smith / [2] => Doe )
echo '</br>';
print_r($id);
// Array ( [0] => 5698 / [1] => 4767 / [2] => 3809 )
?>
<!-- array_combine()  -->
<?php
echo '</br>';
echo '</br>';
//联系两个数组的下标相互对应返回新的数组
$fname=array("xiaohong","xiaobai","xiaoming");
$age=array("20","19","18");
$c=array_combine($fname,$age);
print_r($c);
// Array ( [xiaohong] => 20  /[xiaobai] => 19  /[xiaoming] => 18 )
?>
<!-- array_count_values()  -->
<?php
echo '</br>';
echo '<br>';
//找出数组中相同的元素有几个
$a=array("A","Cat","Dog","A","Dog");
print_r(array_count_values($a));
// Array ( [A] => 2  /  [Cat] => 1  / [Dog] => 2 )
?>
<!-- 比较数组   两个数组的交集-->
<!-- array_diff()、array_diff_assoc、array_diff_key、array_diff_uassoc()、array_diff_ukey() array_uintersect() -->
<?php
echo '</br>';
echo '<br>';
$a1=array("a"=>"red","b"=>"green","c"=>"yellowgreen","d"=>"yellow");
$a2=array("e"=>"red","f"=>"green","g"=>"blue");
//比较两个或多个数组键值中不同
$result=array_diff($a1,$a2);
print_r($result);
// Array ( [c] => yellowgreen  [d] => yellow )
echo '</br>';
echo '<br>';
$a1=array("a"=>"red","b"=>"green","c"=>"yellowgreen","d"=>"yellow");
$a2=array("a"=>"red","g"=>"green","c"=>"blue");
//比较两个或多个键和键值的不同
$result=array_diff_assoc($a1,$a2);
print_r($result);
// Array ( [b] => green  [c] => yellowgreen  [d] => yellow )
echo '</br>';
echo '<br>';
$a1=array("a"=>"red","b"=>"green","c"=>"blue");
$a2=array("a"=>"red","c"=>"blue","d"=>"pink");
//以第一个数组为基准比较两个或多个键值不同返回第一个在数组里的不同
$result=array_diff_key($a1,$a2);
print_r($result);
// Array ( [b] => green / [c] => blue )
echo '</br>';
echo '<br>';
// 比较两个数组的键名和键值（使用用户自定义函数比较键名）
function myfunction($a,$b){
if ($a===$b){return 0;
}
return ($a>$b)?1:-1;
}
$a1=array("a"=>"red","b"=>"green","c"=>"blue");
$a2=array("d"=>"red","b"=>"green","e"=>"blue");
$result=array_diff_uassoc($a1,$a2,"myfunction");
print_r($result);
// Array ( [a] => red / [c] => blue )
$a3=array("a"=>"red","b"=>"black","c"=>"blue");
$a4=array("a"=>"blue","b"=>"black","e"=>"blue");

// 比较两个数组的键值（使用用户自定义函数比较键名）
$result1=array_diff_ukey($a3,$a4,"myfunction");
echo '</br>';
print_r($result1);
// Array ( [c] => blue )
$a5=array("a"=>"red","b"=>"green","c"=>"blue");
$a6=array("a"=>"blue","b"=>"black","e"=>"blue");
$result2=array_uintersect($a5,$a6,"myfunction");
echo '</br>';
print_r($result2);
// Array ( [c] => blue )
?>
	 <!--除去重复 array_unique() 添加数组头部array_unshift()  返回数组部不留键名 array_values     
	 把数组的键和键值写到自定义方程 array_walk     
	 定义两个数组用递归的方法把键和键值写到自定义方程 array_walk_recursive
	 键值升序排序 arsort() 键值降序排序 asort()
	 键名升序排序 ksort() 键名降序排序 krsort()
	 数组中元素数目 count()
	 将数组中的值随机排序 shuffle()
	 函数对数值数组进升序排序 sort();
	 函数对数值数组进行降序排序 rsort() 
	 函数对数组按键值进行排序 uasort() 
	 函数对数组按键名进行排序 uksort() -->
<?php
echo '</br>';
// 用于移除数组中重复的值。如果两个或更多个数组值相同，只保留第一个值，其他的值被移除。
$a=array("a"=>"red","b"=>"green","c"=>"red");
print_r(array_unique($a));
// Array ( [a] => red  [b] => green ) 
$a=array("a"=>"red","b"=>"green");
// 用于向数组插入新元素。新数组的值将被插入到数组的开头。
array_unshift($a,"blue");
echo '</br>';
print_r($a);
// Array ( [0] => blue  [a] => red  [b] => green ) 
echo '</br>';
// 返回数组中所有的值（不保留键名）
print_r(array_values($a));
// Array ( [0] => blue  [1] => red  [2] => green )
echo '</br>';
echo '</br>';
function myfunction1($value,$key)
{
			//键				键值		
echo "The key $key has the value $value<br>";
}
$a1=array("a"=>"red","b"=>"green");
$a=array("a"=>"red","b"=>"green","c"=>"blue");
array_walk($a,"myfunction1");
// The key a has the value red
// The key b has the value green
// The key c has the value blue
$a1=array("a"=>"red","b"=>"green");
$a2=array($a1,"c"=>"blue","d"=>"yellow");
echo '</br>';
array_walk_recursive($a2,"myfunction1");
// The key a has the value red
// The key b has the value green
// The key c has the value blue
// The key d has the value yellow
$age1=array("1"=>"36","2"=>"34","3"=>"43");
echo '</br>';
//键值升序排序
// arsort($age1);
//键名降序排序
 // krsort($age1);
//键值降序排序
// asort($age1);
//键名升序排序
 ksort($age1);

foreach($age1 as $x=>$x_value)
    {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
    }
$my_array = array("red","green","blue","yellow","purple");
echo '</br>';
//将数组中的值随机排序
shuffle($my_array);
print_r($my_array);


$cars=array("1","2","3","4","5","6");
echo '</br>';
echo '</br>';
echo count($cars);
// 6
echo '</br>';
echo '</br>';
// 将内部指针指向数组中的第一个元素
echo reset($cars) . "<br>";//1
// 指当前的值
echo current($cars) . "<br>";//1
//下一个
echo next($cars) . "<br>";//2
//上一个
echo prev($cars) . "<br>";//1
//最后一个
echo end($cars) . "<br>";//6
echo '</br>';
echo '</br>';
// $a = "Original";
$my_array = array("a" => "Cat","b" => "Dog", "c" => "Horse");
print_r(extract($my_array));
echo '</br>';
//把从数组获取的的变量倒入当前的变量
echo "\$a = $a; \$b = $b; \$c = $c";
?>