var cubeRotating = [
  {transform: 'rotate(0deg)', backgroundColor: 'pink'},
  {backgroundColor: 'purple', offset:0.3},
  {transform: 'rotate(180deg)', backgroundColor: 'pink'}
]

var cubeTiming = {
  duration: 1000,
  iterations: Infinity
}

//pause
/*var cubeAnimation = document.getElementById('cube').animate(
  cubeRotating, 
  cubeTiming
)

cubeAnimation.pause();

document.body.onclick = () => 

;*/ 

//poyy
var cubeAnimation = document.getElementById('cube').animate(cubeRotating, cubeTiming);

//promena brzine

/*var cubeAnimation = document.getElementById('cube').animate(
  cubeRotating, 
  cubeTiming
)

document.body.onclick = () => {
  cubeAnimation.playbackRate *= 1.5;
};*/

// ---------------------------------------------

/* Other syntax passing all keyframes and timing values directly in the animate function

document.getElementById('cube').animate(
  [
    {transform: 'rotate(0deg)', backgroundColor: 'pink'},
    {backgroundColor: 'purple', offset:0.3},
    {transform: 'rotate(180deg)', backgroundColor: 'pink'}
  ], {
    duration: 1000,
    iterations: Infinity
  }
)
*/

// --------------------------------------------

/* If we wanted to only pass the animation duration, we could write it like this:

document.getElementById('cube').animate(
  [
    {transform: 'rotate(0deg)', backgroundColor: 'pink'},
    {backgroundColor: 'purple', offset:0.3},
    {transform: 'rotate(180deg)', backgroundColor: 'pink'}
  ], 1000)
*/