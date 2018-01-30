

var body = document.getElementsByTagName("BODY")[0];


//2D-animation

// Get the modal
var d2_modal = document.getElementById('d2_modal');

// Get the button that opens the modal
var d2_btn = document.getElementById("d2_act_modal");

// When the user clicks the button, open the modal
d2_btn.onclick = function() {
  d2_modal.style.display = "block";
  body.style.overflow = "hidden";
  init_island();
}

//Games

var games_modal = document.getElementById('games_modal');

var games_btn = document.getElementById("games_act_modal");

games_btn.onclick = function() {
  games_modal.style.display = "block";
  body.style.overflow = "hidden";
}

//3D-animation

var d3_modal = document.getElementById('d3_modal');

var d3_btn = document.getElementById('d3_act_modal');

d3_btn.onclick = function() {
  d3_modal.style.display = "block";
  body.style.overflow = "hidden";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == d2_modal) {
    d2_modal.style.display = "none";
    body.style.overflow = "auto";
  }
  else if (event.target == games_modal) {
    games_modal.style.display = "none";
    body.style.overflow = "auto";
  }
  else if (event.target == d3_modal) {
    d3_modal.style.display = "none";
    body.style.overflow = "auto";
  }
}
