<?php
include 'db.php';
$page = isset($_GET['p'])? $_GET['p'] : '';
if($page=='del'){
  $myid = $_POST['id'];
  $id = str_replace(' ',',',$myid);
   $result = $mysqli->query("delete from employee where id in($id)");
   if($result){
     echo "Success";
   } else{
     echo "Error";
   }
}else if($page=='filter'){
      echo "<option value=none>None</option>";
    $LMname = $mysqli->query("select * from LM");
    while ($row = $LMname->fetch_assoc()){
      echo "<option value=".$row['Name']." >".$row['Name']."</option>";
    }
}else if($page=='filter2'){
      echo "<option value=none>None</option>";
      $Projectname = $mysqli->query("select * from Project");
    while ($row = $Projectname->fetch_assoc()){
      echo "<option value=".$row['projectName']." >".$row['projectName']."</option>";
    }
}else{
  $hasil = $mysqli->query("select * from employee");
  while ($row = $hasil-> fetch_assoc()){
    echo "<tr>";
    echo "<td class=text-center><input type=checkbox class=checkitem value=".$row['id']." /></td>";
    echo "<td>".$row['Name']." </td>";
    echo "<td>".$row['EmployeeID']."</td>";
    $LMName = $mysqli->query("select * from LM where id=".$row['LMID']);
    $row1 = $LMName->fetch_assoc();
    echo "<td>".$row1['Name']." </td>";
    echo "<td>".$row['Allotment']."</td>";
    $projectName = $mysqli->query("select * from Project where id=".$row['projectID']);
    $row2 = $projectName->fetch_assoc();
    echo "<td>".$row2['projectName']." </td></tr>";

  }
}
?>
