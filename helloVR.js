//alert(Math.sin(Date.now() / 1000));
// var x = document.getElementById('myAudio').play();
// function playAudio() {
//     x.play();
// }



$ = (queryString) => document.querySelector(queryString);
const shiftHue = (hue) => (hue + 1) % 360;
let hue = 0;

const animate = () => {
  hue = shiftHue(hue);
  const color = `hsl(${hue}, 100%, 50%)`;
  $('#top_ring').setAttribute('color', color);
  const position = `1 ${1 - (Math.sin(Date.now() / 1000) + 0.5 )} -3`;
  $('#top_ring').setAttribute('position', position);
  var position_xyz = position.split(" ");
  //console.log(position_xyz[1]);
  const radius_inner = `${(1 - (Math.sin(Date.now() / 1000) - 0.5) * -1 ) + 1.75}`;
  const radius_outer = `${(1 - (Math.sin(Date.now() / 1000) - 0.5) * -1 ) + 1.75 + 0.25}`;
  //console.log('radius-inner:' + radius_inner + ' radius_outer' + radius_outer);
  $('#top_ring').setAttribute('radius-inner', radius_inner);
  $('#top_ring').setAttribute('radius-outer', radius_outer);
  requestAnimationFrame(animate);
};
//alert("LOOK HERE");
var x = new Audio('trial_song.mp3');
x.play();
requestAnimationFrame(animate);


// require('aframe-audioanalyser-component');
//
// entity.components.sound.playSound();




//($'#mySong').components.sound.playSound();
