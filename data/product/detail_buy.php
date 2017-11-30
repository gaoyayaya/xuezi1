<?php
/**
* 商品详情中的直接购买的商品数据
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../init.php');

//session_start();
@$lid=$_REQUEST['id'];
//if(! @$_SESSION['loginUid']){
//  $_SESSION['pageToJump'] = 'cart.html';
//  die('{"code":300, "msg":"login required"}');
//}
//获取数据
$sql = "SELECT title,spec,price FROM xz_laptop WHERE lid=$lid";
$result = mysqli_query($conn, $sql);
$list = mysqli_fetch_all($result, MYSQLI_ASSOC);
//查询每个商品的第一幅小图片
foreach($list as $i=>$p){
  $sql = "SELECT sm FROM xz_laptop_pic WHERE laptop_id=$lid LIMIT 1";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_row($result);
  $list[$i]['pic'] = $row[0];
}
$output = [
  'code'=>200,
  'data'=>$list
];
echo json_encode($output);