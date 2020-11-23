<?php
$preSign=$_POST["preSign"];
$op=$_POST["op"];
$resultFinal=$_POST["resultFinal"];

switch($op){
   case "+":
   $resultFinal=$resultFinal+$preSign;
   break;

   case "-":
   $resultFinal=$resultFinal-$preSign;
   break;

   case "*":
   $resultFinal=$resultFinal*$preSign;
   break;

   case "/":
   $resultFinal=$resultFinal/$preSign;
   break;

   case "%":
   $resultFinal=$resultFinal%$preSign;
   break;
  }
  echo ($resultFinal);
?>