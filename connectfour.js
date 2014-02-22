var first_row  = ['o','o','o','o','o','o','o'];
var second_row = ['o','o','o','o','o','o','o'];
var third_row  = ['o','o','o','o','o','o','o'];
var fourth_row = ['o','o','o','o','o','o','o'];
var fifth_row  = ['o','o','o','o','o','o','o'];
var sixth_row  = ['o','o','o','o','o','o','o'];

var counter = 0;
var player = ['*','#'];
var current_player = 0;

function countClicks()
{
  counter++;
}

function column(num)
{
  current_player = counter % 2;
  if(sixth_row[num] == 'o'){
    sixth_row[num] = player[current_player];
    document.getElementById('row6').innerHTML = sixth_row;
  } else if(fifth_row[num] =='o'){
    fifth_row[num] = player[current_player];
    document.getElementById('row5').innerHTML = fifth_row;
  } else if(fourth_row[num] =='o'){
    fourth_row[num] = player[current_player];
    document.getElementById('row4').innerHTML = fourth_row;
  } else if(third_row[num] =='o'){
    third_row[num] = player[current_player];
    document.getElementById('row3').innerHTML = third_row;
  } else if(second_row[num] =='o'){
    second_row[num] = player[current_player];
    document.getElementById('row2').innerHTML = second_row;
  } else if(first_row[num] == '*' || first_row[num] == '#'){
    return
  } else {
    first_row[num] = player[current_player];
    document.getElementById('row1').innerHTML = first_row;
  }
}

onload = function ()
{
  document.getElementById("row1").innerHTML = first_row;
  document.getElementById("row2").innerHTML = second_row;
  document.getElementById("row3").innerHTML = third_row;
  document.getElementById("row4").innerHTML = fourth_row;
  document.getElementById("row5").innerHTML = fifth_row;
  document.getElementById("row6").innerHTML = sixth_row;
}
