var first_row  = ['o','o','o','o','o','o','o'];
var second_row = ['o','o','o','o','o','o','o'];
var third_row  = ['o','o','o','o','o','o','o'];
var fourth_row = ['o','o','o','o','o','o','o'];
var fifth_row  = ['o','o','o','o','o','o','o'];
var sixth_row  = ['o','o','o','o','o','o','o'];

var first_column = [sixth_row[0],fifth_row[0],fourth_row[0],third_row[0],second_row[0],first_row[0]];

function c1()
{
  if(sixth_row[0] == 'o'){
    sixth_row[0] = "x";
    document.getElementById('row6').innerHTML = sixth_row;
  } else if(fifth_row[0] =='o'){
    fifth_row[0] = "x";
    document.getElementById('row5').innerHTML = fifth_row;
  } else if(fourth_row[0] =='o'){
    fourth_row[0] = "x";
    document.getElementById('row4').innerHTML = fourth_row;
  } else if(third_row[0] =='o'){
    third_row[0] = "x";
    document.getElementById('row3').innerHTML = third_row;
  } else if(second_row[0] =='o'){
    second_row[0] = "x";
    document.getElementById('row2').innerHTML = second_row;
  } else {
    first_row[0] = "x";
    document.getElementById('row1').innerHTML = first_row;
  }
}

function c2()
{
  if(sixth_row[1] == 'o'){
    sixth_row[1] = "x";
    document.getElementById('row6').innerHTML = sixth_row;
  } else if(fifth_row[1] =='o'){
    fifth_row[1] = "x";
    document.getElementById('row5').innerHTML = fifth_row;
  } else if(fourth_row[1] =='o'){
    fourth_row[1] = "x";
    document.getElementById('row4').innerHTML = fourth_row;
  } else if(third_row[1] =='o'){
    third_row[1] = "x";
    document.getElementById('row3').innerHTML = third_row;
  } else if(second_row[1] =='o'){
    second_row[1] = "x";
    document.getElementById('row2').innerHTML = second_row;
  } else {
    first_row[1] = "x";
    document.getElementById('row1').innerHTML = first_row;
  }
}

function c3()
{
  if(sixth_row[2] == 'o'){
    sixth_row[2] = "x";
    document.getElementById('row6').innerHTML = sixth_row;
  } else if(fifth_row[2] =='o'){
    fifth_row[2] = "x";
    document.getElementById('row5').innerHTML = fifth_row;
  } else if(fourth_row[2] =='o'){
    fourth_row[2] = "x";
    document.getElementById('row4').innerHTML = fourth_row;
  } else if(third_row[2] =='o'){
    third_row[2] = "x";
    document.getElementById('row3').innerHTML = third_row;
  } else if(second_row[2] =='o'){
    second_row[2] = "x";
    document.getElementById('row2').innerHTML = second_row;
  } else {
    first_row[2] = "x";
    document.getElementById('row1').innerHTML = first_row;
  }
}

function c4()
{
  if(sixth_row[3] == 'o'){
    sixth_row[3] = "x";
    document.getElementById('row6').innerHTML = sixth_row;
  } else if(fifth_row[3] =='o'){
    fifth_row[3] = "x";
    document.getElementById('row5').innerHTML = fifth_row;
  } else if(fourth_row[3] =='o'){
    fourth_row[3] = "x";
    document.getElementById('row4').innerHTML = fourth_row;
  } else if(third_row[3] =='o'){
    third_row[3] = "x";
    document.getElementById('row3').innerHTML = third_row;
  } else if(second_row[3] =='o'){
    second_row[3] = "x";
    document.getElementById('row2').innerHTML = second_row;
  } else {
    first_row[3] = "x";
    document.getElementById('row1').innerHTML = first_row;
  }
}

function c5()
{
  if(sixth_row[4] == 'o'){
    sixth_row[4] = "x";
    document.getElementById('row6').innerHTML = sixth_row;
  } else if(fifth_row[4] =='o'){
    fifth_row[4] = "x";
    document.getElementById('row5').innerHTML = fifth_row;
  } else if(fourth_row[4] =='o'){
    fourth_row[4] = "x";
    document.getElementById('row4').innerHTML = fourth_row;
  } else if(third_row[4] =='o'){
    third_row[4] = "x";
    document.getElementById('row3').innerHTML = third_row;
  } else if(second_row[4] =='o'){
    second_row[4] = "x";
    document.getElementById('row2').innerHTML = second_row;
  } else {
    first_row[4] = "x";
    document.getElementById('row1').innerHTML = first_row;
  }
}

function c6()
{
  if(sixth_row[5] == 'o'){
    sixth_row[5] = "x";
    document.getElementById('row6').innerHTML = sixth_row;
  } else if(fifth_row[5] =='o'){
    fifth_row[5] = "x";
    document.getElementById('row5').innerHTML = fifth_row;
  } else if(fourth_row[5] =='o'){
    fourth_row[5] = "x";
    document.getElementById('row4').innerHTML = fourth_row;
  } else if(third_row[5] =='o'){
    third_row[5] = "x";
    document.getElementById('row3').innerHTML = third_row;
  } else if(second_row[5] =='o'){
    second_row[5] = "x";
    document.getElementById('row2').innerHTML = second_row;
  } else {
    first_row[5] = "x";
    document.getElementById('row1').innerHTML = first_row;
  }
}

function c7()
{
  if(sixth_row[6] == 'o'){
    sixth_row[6] = "x";
    document.getElementById('row6').innerHTML = sixth_row;
  } else if(fifth_row[6] =='o'){
    fifth_row[6] = "x";
    document.getElementById('row5').innerHTML = fifth_row;
  } else if(fourth_row[6] =='o'){
    fourth_row[6] = "x";
    document.getElementById('row4').innerHTML = fourth_row;
  } else if(third_row[6] =='o'){
    third_row[6] = "x";
    document.getElementById('row3').innerHTML = third_row;
  } else if(second_row[6] =='o'){
    second_row[6] = "x";
    document.getElementById('row2').innerHTML = second_row;
  } else {
    first_row[6] = "x";
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
