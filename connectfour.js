var first_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var second_row = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var third_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var fourth_row = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var fifth_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];
var sixth_row  = ['<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>','<span>o</span>'];

var counter = 0;
var player = ['*','#'];
var player_color = ['player', 'computer'];
var check_column = []

//Decides who won
var winning_p1 = '<span class="player">*</span>,<span class="player">*</span>,<span class="player">*</span>,<span class="player">*</span>'
var winning_p2 = '<span class="computer">#</span>,<span class="computer">#</span>,<span class="computer">#</span>,<span class="computer">#</span>'

var if_player_1_wins = function() {
  if (confirm("Player 1 Wins! Play 50/50 and again?"))
  {
    window.open(fifty_choice);
    return location.reload();
  }
}

var if_player_2_wins = function() {
    if (confirm("Player 2  Wins! Play 50/50 and again?"))
  {
    window.open(fifty_choice);
    return location.reload();
  }
}

var all_row = [first_row, second_row, third_row, fourth_row, fifth_row, sixth_row];

//Add pictures links to display randomly to players
var fifty_fifty =
["http://big.assets.huffingtonpost.com/0220sorry570.gif"];
var fifty_choice = fifty_fifty[Math.floor(Math.random() *
fifty_fifty.length)];

//How many times a chip was placed in the board
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
         if_player_1_wins()
       }

       if(check_diagonally_right.toString() == winning_p2 ||
          check_diagonally_left.toString() == winning_p2)
       {
         if_player_2_wins()
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
          if_player_1_wins()
        }

      if(check_column.toString() == winning_p2)
        {
          if_player_2_wins()
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
          if_player_1_wins()
        }

      if(check_row.toString() == winning_p2)
        {
          if_player_2_wins()
        }
    }
    i++;
  }
}

function column(num)
{
  if (sixth_row[num] == '<span>o</span>'){
    sixth_row[num] = '<span class="' +player_color[counter % 2]+ '">' + player[counter % 2]+ '</span>';
    document.getElementById('row6').innerHTML = sixth_row;
  } else if (fifth_row[num] =='<span>o</span>'){
    fifth_row[num] = '<span class="' +player_color[counter % 2]+ '">' +player[counter % 2]+ '</span>';
    document.getElementById('row5').innerHTML = fifth_row;
  } else if (fourth_row[num] =='<span>o</span>'){
    fourth_row[num] = '<span class="' +player_color[counter % 2]+ '">' +player[counter % 2]+ '</span>';
    document.getElementById('row4').innerHTML = fourth_row;
  } else if (third_row[num] =='<span>o</span>'){
    third_row[num] = '<span class="' +player_color[counter % 2]+ '">' +player[counter % 2]+ '</span>';
    document.getElementById('row3').innerHTML = third_row;
  } else if (second_row[num] =='<span>o</span>'){
    second_row[num] = '<span class="' +player_color[counter % 2]+ '">' +player[counter % 2]+ '</span>';
    document.getElementById('row2').innerHTML = second_row;
  } else if (first_row[num] == '<span class="player">*</span>' || first_row[num] == '<span class="computer">#</span>'){
    counter = counter - 1;
  } else {
    first_row[num] = '<span class="' +player_color[counter % 2]+ '">' +player[counter % 2]+ '</span>';
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
