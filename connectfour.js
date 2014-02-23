var first_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var second_row = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var third_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var fourth_row = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var fifth_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var sixth_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];


var counter = 0;
var player = ['*','#'];
var check_column = []

var winning_p1 = "*,*,*,*"
var winning_p2 = "#,#,#,#"

var all_row = [first_row, second_row, third_row, fourth_row, fifth_row, sixth_row];

var fifty_fifty =
["http://big.assets.huffingtonpost.com/0220sorry570.gif"];
var fifty_choice = fifty_fifty[Math.floor(Math.random() *
fifty_fifty.length)];

function computer()
{
  if(counter % 2 == 1)
  {
          i = 0
    while (i < 4)
    {
     for (n = 0; n < all_row.length; n++)
      {
        var check_row = all_row[n];
        if(check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>*</span>,<span>o</span>") == 0) {
          return document.getElementById('button4').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>*</span>,<span>o</span>") == 15) {
          return document.getElementById('button5').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>*</span>,<span>o</span>") == 30) {
          return document.getElementById('button6').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>*</span>,<span>o</span>") == 45) {
          return document.getElementById('button7').click();
        }
        if(check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>o</span>") == 0) {
          return document.getElementById('button3').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>o</span>") == 15) {
          return document.getElementById('button4').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>,<span>*</span>") == 15) {
          return document.getElementById('button2').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>o</span>") == 30) {
          return document.getElementById('button5').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>,<span>*</span>") == 30) {
          return document.getElementById('button3').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>,<span>*</span>") == 45) {
          return document.getElementById('button4').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>o</span>") == 45) {
          return document.getElementById('button6').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>,<span>*</span>") == 60) {
          return document.getElementById('button5').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>*</span>,<span>o</span>") == 60) {
          return document.getElementById('button7').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>,<span>*</span>") == 60) {
          return document.getElementById('button5').click();
        }
        if(check_row.toString().indexOf("<span>*</span>,<span>o</span>") == 0) {
          return document.getElementById('button2').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>,<span>o</span>") == 0) {
          return document.getElementById('button3').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>o</span>") == 15) {
          return document.getElementById('button3').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>") == 15) {
          return document.getElementById('button2').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>") == 30) {
          return document.getElementById('button3').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>o</span>") == 30) {
          return document.getElementById('button4').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>") == 45) {
          return document.getElementById('button4').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>o</span>") == 45) {
          return document.getElementById('button5').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>o</span>") == 60) {
          return document.getElementById('button5').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>o</span>") == 60) {
          return document.getElementById('button6').click();
        } else if (check_row.toString().indexOf("<span>*</span>,<span>o</span>") == 75) {
          return document.getElementById('button7').click();
        } else if (check_row.toString().indexOf("<span>o</span>,<span>*</span>") == 75) {
          return document.getElementById('button6').click();
        }
      }
      i++;
    }
  }
}

function countClicks()
{
  counter++;
}

function check_diagonal()
{
  i = 0
  while(i < 4)
  {
    for(n = 0; n < 3; n++)
    {
       var check_diagonally_right = [all_row[5 - n][0 + i], all_row[5 - 1 - n][1 + i],
                      all_row[5 - 2 - n][2 + i], all_row[5 - 3 - n][3 + i]];
       var check_diagonally_left = [all_row[5 - n][3 + i], all_row[5 - 1 - n][2 + i],
                      all_row[5 - 2 - n][1 + i], all_row[5 - 3 - n][i]];
       if(check_diagonally_right.toString() == winning_p1 ||
         check_diagonally_left.toString() == winning_p1)
       {
          if (confirm("Player 1 Wins! Play 50/50 and again?"))
          {
            window.open(fifty_choice);
            location.reload();
          }
       }

       if(check_diagonally_right.toString() == winning_p2 ||
          check_diagonally_left.toString() == winning_p2)
       {
          if (confirm("Player 2  Wins! Play 50/50 and again?"))
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
      var check_column = [all_row[i][num],all_row[i + 1][num],
                          all_row[i + 2][num],all_row[i + 3][num]];
      if(check_column.toString() == winning_p1)
        {
          if (confirm("Player 1 Wins! Play 50/50 and again?"))
          {
            window.open(fifty_choice);
            location.reload();
          }
        }

      if(check_column.toString() == winning_p2)
        {
          if (confirm("Player 2  Wins! Play 50/50 and again?"))
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
      if(check_row.toString() == winning_p1)
        {
          if (confirm("Player 1 Wins! Play 50/50 and again?"))
          {
            window.open(fifty_choice);
            location.reload();
          }
        }

      if(check_row.toString() == winning_p2)
        {
          if (confirm("Player 2  Wins! Play 50/50 and again?"))
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
  } else if (first_row[num] == '<span>*</span>' || first_row[num] ==
'<span>#</span>'){
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
