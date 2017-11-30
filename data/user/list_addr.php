<?php
/**
* 获得用户地址信息
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../init.php');

session_start();
@$uid = $_SESSION['loginUid'];
if(!$uid){
  die('{"code":401,"msg":"login required"}');
}

$sql = "SELECT * FROM xz_receiver_address WHERE user_id=$uid";
$result = mysqli_query($conn,$sql);

if(!$result){         //SQL执行失败
  echo('{"code":500, "msg":"err"}');
}else {
  $list=mysqli_fetch_all($result, MYSQLI_ASSOC);
  echo json_encode($list);
}
