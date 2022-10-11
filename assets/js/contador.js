var clicks = 0;

function clickME() {
  clicks += 1;
  document.getElementById("clicks").value = clicks;
  document.getElementById("bote").value = "0";
}

function clickME2() {
  if (clicks > 0) clicks -= 1;
  document.getElementById("clicks").value = clicks;
}