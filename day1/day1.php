<!DOCTYPE >
<html>
	<head>
		<meta charset="utf-8"/>
		<title></title>
		<style type="text/css">
			table,tr,td{border: 1px solid seagreen;}
			td{width: 80px;height: 40px;}
			.pink{background-color: aqua;}
		</style>
	</head>
	<body>
		<table>
			<?php 
				for($i = 0; $i<10;$i++){
			?>	
			<tr
				<?php
				if($i%2 == 0){
                        echo "class='pink'";
				}?>
				>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>		
				</tr>		
			<?php 
					
				}
				
			?>		
				
		</table>
		
		
		
	</body>
</html>