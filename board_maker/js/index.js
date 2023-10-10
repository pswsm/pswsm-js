let grid_div = document.createElement("div");

function build_grid(total_chldren) {
  let sqdv_arr = [];
  for (let i = 0; i < total_chldren; i++) {
    let square_div = document.createElement("div");
    square_div.classList.add('square', 'has-background-grey');
    sqdv_arr.push(square_div);
  }
  for (const sqdv of sqdv_arr) {
    grid_div.appendChild(sqdv);
  }
}

document.addEventListener("DOMContentLoaded", (_) => {
  let section1 = document.getElementById("sform");
  let section2 = document.getElementById("game");
  let size_sel = document.getElementById("size");
  document.getElementById("name").addEventListener("keyup", validateName);
  document.getElementById("start_game").addEventListener("click", (e) => {
    validateName(e)
    if (Number(size_sel.value) === 1) {
      grid_div.classList.add("twoxtwo");
      build_grid(4);
    } else {
      grid_div.classList.add("fourxfour");
      build_grid(16);
    }
    // toggle sections and start game
    section1.classList.toggle("hidden");
    section2.classList.toggle("hidden");
  })
  let game_zone = document.getElementById("game");
  game_zone.appendChild(grid_div);
  
})

function validateName(e) {
  const submit_button = document.getElementById("start_game");
  // console.log(e.type);
  if (e.type === 'input') {
    if (e.target.value === '' || e.target.value.length > 10) {
      submit_button.setAttribute('disabled', 'disabled');
      return false;
    } else {
      submit_button.removeAttribute('disabled');
    }
  } else {
    const name = document.getElementById("name").value;
    if (name === '' || name.length > 10) {
      submit_button.setAttribute('disabled', 'disabled');
      return false;
    } else {
      submit_button.removeAttribute('disabled');
      return true;
    }
  }
}
