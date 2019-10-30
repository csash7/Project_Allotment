<?php
session_start();
if(!isset($_SESSION['login_user'])){
      header("location:index.php");
   }
?>

<html>
<head>
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
<link rel='stylesheet' type='text/css' href="stylesheet.css"/>
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
<script src="customScript.js"></script>

<title>Project Allotment</title>
</head>
<body onload="start()">
  <div id='topbar'>
<div id='bodyLogo'>
<a href="index.html"><img src="images/logo.jpg"></a>
</div>
<div id='pageTitle'><h3>Project Allotment</h3></div>
<div id='profile'>  <div class="dropdown">
    <button id="dropdownMenu" class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><?php echo $_SESSION['login_user']; ?>
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">profile</a></li>
      <li><a href="logout.php">Sign Out</a></li>
    </ul>
  </div></div>
</div>

<div id="someBar"></div>

<div class="row" id="toolbar">
    <div class="col-sm-4">
    <h6 class="LMtoolbar">Select LM</h6>
    <select class="selectpicker" data-live-search="true" id="selectLM" >

    </select>
    </div>
    <div class="col-sm-4">
    <h6 class="LMtoolbar">Select Project</h6>
    <select class="selectpicker" data-live-search="true" id="selectProject">

    </select>
    </div>
    <div class="col-sm-4">
     <input type="text" id="myInput" onkeyup="searchTable()" style="width:35%;" float="left" placeholder="Search">
   </div>
    </div>

<table id="myTable" class="table table-bordered table-hover table-condensed">
  <thead>
<tr class="header">
    <th><input type="checkbox" id="checkall"/></th>
    <th onclick="sortTable(1)">Name</th>
    <th onclick="sortTable(2)">Employee ID</th>
    <th onclick="sortTable(3)">LM</th>
    <th onclick="sortTable(4)">Allotment</th>
    <th onclick="sortTable(5)">Project</th>
    </tr></thead>
  <tbody></tbody>
  </table>

<div class="row" id="secondRow">
  <div class="col-sm-1" id="addButton">
    <button class="btn btn-success">Add</button>
  </div>
  <div class="col-sm-2">
<button class="btn btn-danger" id="delsel">Delete</button>
</div>

<div id="pageNumbers">
    <nav>
        <ul class="pagination"></ul>
    </nav>
</div>
</div>
<script>
$('#checkall').change(function(){
  $('.checkitem').prop("checked",$(this).prop("checked"))
})

$('#delsel').click(function(){
  var id=$('.checkitem:checked').map(function(){
    return $(this).val()
  }).get().join(' ')
  $.post('data.php?p=del',{id:id},function(data){
    viewdata()
  })
})


    $("#selectLM").on("change", function() {
      filterRows()
  })
    $("#selectProject").on("change", function() {
      filterRows()
    })

</script>
</body>
</html>
