var first_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var second_row = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var third_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var fourth_row = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var fifth_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var sixth_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];

var counter = 0;
var player = ['*','#'];
var check_column = []

var winning_p1 = "<span>*</span>,<span>*</span>,<span>*</span>,<span>*</span>"
var winning_p2 = "<span>#</span>,<span>#</span>,<span>#</span>,<span>#</span>"

var all_row = [first_row, second_row, third_row, fourth_row, fifth_row, sixth_row];

var fifty_fifty =
["http://static2.wikia.nocookie.net/__cb20120124020744/creepypasta/images/2/23/Scary_05.gif",
"http://i.imgur.com/pinQSgA.gif",
"http://who-is-awesome.com/who-is-awesome.jpg",
"http://big.assets.huffingtonpost.com/0220sorry570.gif",
"http://i.imgur.com/mP2zdqT.jpg",
"http://i.imgur.com/zwx38LL.jpg"];
var fifty_choice = fifty_fifty[Math.floor(Math.random() *
fifty_fifty.length)];

function countClicks()
{
  counter++;
}

function check_diagonal()
{
  i = 0
  while (i < 4)
  {
    for(n = 0; n < 3; n++)
    {
      var check_diagonally_right = [all_row[5 - n][0 + i], all_row[5 - 1 - n][1 + i],
                      all_row[5 - 2 - n][2 + i], all_row[5 - 3 - n][3 + i]];
      var check_diagonally_left = [all_row[5 - n][3 + i], all_row[5 - 1 - n][2 + i],
                      all_row[5 - 2 - n][1 + i], all_row[5 - 3 - n][i]];
      if(check_diagonally_left.toString() == winning_p1 ||
         check_diagonally_left.toString() == winning_p2)
      {
        if (confirm(check_diagonally_left[0] + " Wins! Play again?"))
        {
          return location.reload();
        }
      }
      if (check_diagonally_right.toString() == winning_p1 ||
          check_diagonally_right.toString() == winning_p2) 
      {
        if (confirm(check_row[0] + " Wins! Play 50/50 and again?"))
          {

            window.open(fifty_choice);
            location.reload();
          }
      }
    }
    i++;
  }
}

function checker_column(num)
{
  i = 0
  while(i < 3)
  {
      var check_column = [all_row[i][num],all_row[i + 1][num],all_row[i
+ 2][num],all_row[i + 3][num]];
      if(check_column.toString() == winning_p1 || check_column.toString() == winning_p2)
        {
          if (confirm(check_row[0] + " Wins! Play 50/50 and again?"))
          {
            window.open(fifty_choice);
            location.reload();
          }
        }
    i++;
  }
}

function checker_row()
{
  i = 0
  while (i < 4)
  {
    for (n = 0; n < all_row.length; n++)
    {
    var check_row = all_row[n].slice(i, 4+i);
    if (check_row.toString() == winning_p1 || check_row.toString() == winning_p2)
      {
        if (confirm(check_row[0] + " Wins! Play 50/50 and again?"))
        {
          window.open(fifty_choice);
          location.reload();
        }
      }
    }
    i++;
  }
}

function column(num)
{
  if (sixth_row[num] == '<span>o</span>'){
    sixth_row[num] = '<span>' +player[counter % 2]+ '</span>';
    document.getElementById('row6').innerHTML = sixth_row;
  } else if (fifth_row[num] =='<span>o</span>'){
    fifth_row[num] = '<span>' +player[counter % 2]+ '</span>';
    document.getElementById('row5').innerHTML = fifth_row;
  } else if (fourth_row[num] =='<span>o</span>'){
    fourth_row[num] = '<span>' +player[counter % 2]+ '</span>';
    document.getElementById('row4').innerHTML = fourth_row;
  } else if (third_row[num] =='<span>o</span>'){
    third_row[num] = '<span>' +player[counter % 2]+ '</span>';
    document.getElementById('row3').innerHTML = third_row;
  } else if (second_row[num] =='<span>o</span>'){
    second_row[num] = '<span>' +player[counter % 2]+ '</span>';
    document.getElementById('row2').innerHTML = second_row;
  } else if (first_row[num] == '<span>*</span>' || first_row[num] == '<span>#</span>'){
    counter = counter - 1;
  } else {
    first_row[num] = '<span>' +player[counter % 2]+ '</span>';
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
