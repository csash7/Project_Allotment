

function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  if(!( input.value==""||input.value==null)){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    td4 = tr[i].getElementsByTagName("td")[4];
    td5 = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        if (td2) {
          if (td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            if (td3) {
              if (td3.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                if (td4) {
                  if (td4.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } else {
                    if (td5) {
                      if (td5.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                      } else {
                        tr[i].style.display = "none";
                      }
                  }
                }
              }
            }
          }
        }
      }
    }
  }}}else{
  tablePagination()}
}


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function viewdata(){
  $.ajax({
    url : 'data.php',
    type:'GET',
    success: function(data){
      $('tbody').html(data)
    }
  })
}


function filterData(){
  $.ajax({
    url : 'data.php?p=filter',
    type:'GET',
    success: function(data){
      $(".selectpicker").selectpicker();
      $('#selectLM').html(data)
      $('.selectpicker').selectpicker('refresh')
    }
  })
}

function filterData2(){
  $.ajax({
    url : 'data.php?p=filter2',
    type:'GET',
    success: function(data){
      $(".selectpicker").selectpicker();
      $('#selectProject').html(data)
      $('.selectpicker').selectpicker('refresh')
    }
  })
}

function tablePagination() {
  var table = '#myTable'
  $('.pagination').html('')
  var trnum = 0
  var maxRows = 6
  var totalRows = $(table+' tbody tr:visible').length
  $(table+' tbody tr:visible').each(function(){
      trnum++
      if(trnum > maxRows){
          $(this).hide()
      }
      if(trnum <= maxRows){
          $(this).show()
      }
  })
  if(totalRows > maxRows){
      var pagenum = Math.ceil(totalRows/maxRows)
      for(var i=1;i<=pagenum;){
          $('.pagination').append('<li data-page="'+i+'">\<span>'+ i++ +'<span class="sr-only">(current)</span></span>\</li>').show()
      }
  }
  $('.pagination li:first-child').addClass('active')
  $('.pagination li').on('click',function(){
      var pageNum = $(this).attr('data-page')
      var trIndex = 0;
      $('.pagination li').removeClass('active')
      $(this).addClass('active')
      $(table+' tbody tr').each(function(){
          trIndex++
          if(trIndex > (maxRows*pageNum) || trIndex <= ((maxRows*pageNum)-maxRows)){
              $(this).hide()
          } else{
              $(this).show()
          }
      })
  })
    }


   function filterRows(){
          var table = document.getElementById("myTable");
 	     var tr = table.getElementsByTagName("tr");
          var selP = document.getElementById('selectProject');
 		 var selLM = document.getElementById('selectLM');
 		 var optP = selP.options[selP.selectedIndex];
 		 var optLM = selLM.options[selLM.selectedIndex];
 		 var valueP = optP.text;
 		 var valueLM = optLM.text;
 		 if((valueP=="None" || valueP==null) && (valueLM!="None" && valueLM!=null)){
 		     for (i = 0; i < tr.length; i++) {
                var td = tr[i].getElementsByTagName("td")[3];
 			   if (td) {
                  if (td.innerHTML.indexOf(valueLM)>-1) {
                      tr[i].style.display = "";
                  }else{
                    tr[i].style.display = "none";
                  }
             }
 		  }tablePagination();
    }else if((valueP!="None" && valueP!=null) && (valueLM=="None" || valueLM==null)){
 		       for (i = 0; i < tr.length; i++) {
                var td = tr[i].getElementsByTagName("td")[5];
 		 			   if (td) {
                  if (td.innerHTML.indexOf(valueP)>-1) {
                      tr[i].style.display = "";
                  }else{
                    tr[i].style.display = "none";
                  }
             }
 		  }tablePagination();
    }else if((valueP!="None" && valueP!=null) && (valueLM!="None" && valueLM!=null)){
 		     for (i = 0; i < tr.length; i++) {
                var td = tr[i].getElementsByTagName("td")[3];
 			   var td2 = tr[i].getElementsByTagName("td")[5];
 			   if (td) {
                  if (td.innerHTML.indexOf(valueLM)>-1) {
 				 if (td2.innerHTML.indexOf(valueP)>-1) {
                      tr[i].style.display = "";
                  }else{
                    tr[i].style.display = "none";
                  }

 				 }else{
                    tr[i].style.display = "none";
 				 }
 		 }}tablePagination();
   }else{
       for (i = 0; i < tr.length; i++) {
           tr[i].style.display = "";
       }tablePagination();
 		 }

 }

function start(){
  viewdata();
  filterData();
  filterData2();
  setTimeout(tablePagination,1000);
}
