<?php
/**
* 添加用户地址信息
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../init.php');

@$receiver = $_REQUEST['name'];
@$province = $_REQUEST['province'];
@$city = $_REQUEST['city'];
@$country = $_REQUEST['country'];
@$addr=$_REQUEST['addr'];
@$phone=$_REQUEST['phone'];
@$fixedphone=$_REQUEST['fixedphone'];
@$postcode=$_REQUEST['postcode'];
$tag='标签名';
$is_default=false;

session_start();
@$uid = $_SESSION['loginUid'];
if(!$uid){
  die('{"code":401,"msg":"login required"}');
}

INSERT INTO xz_shoppingcart_item VALUES(NULL, $_SESSION[loginUid], $lid, $buyCount, false)

$sql = "INSERT INTO xz_receiver_address VALUES($uid,$receiver,$province,$city,$country,$addr,$phone,$fixedphone,$postcode,$tag,is_default)"; 
$result = mysqli_query($conn,$sql);

if(!$result){         //SQL执行失败
  echo '{"code":500, "msg":"update err"}';
}else {
 echo '{"code":200, "msg":"update succ"}';
}
