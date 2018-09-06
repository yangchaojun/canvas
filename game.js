// The function gets called when the window is fully loaded
window.onload = function () {
  // Get the canvas and context
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');

  // Timing and frames per second
  let lastframe = 0;
  let fpstime = 0;
  let framecount = 0;
  let fps = 0;

  // Initialize the game
  function init() {
    // Add mouse events
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseout', onMouseOut);

    // Enter main loop
    main(0)
  }

  // Main loop
  function main(tframe) {
    // Request animation frames
    window.requestAnimationFrame(main);

    // Update and render the game
    update(tframe);
    render();
  }

  // Update the game state
  function update(tframe) {
    let dt = (tframe - lastframe) / 1000;
    lastframe = tframe;

    // Update the fps counter
    updateFps(dt);
  }

  function updateFps(dt) {
    if (fpstime > 0.25) {
      // Calculate fpstime
      fps = Math.round(framecount / fpstime);

      // Reset time and framecount
      fpstime = 0;
      framecount = 0;
    }

    // Increase time and framecount
    fpstime += dt;
    framecount ++;
  }

  // Render the game
  function render() {
    // Draw the frames
    drawFrame()
  }

  // Draw a frame with a border
  function drawFrame() {
    // Draw background and a border
    context.fillStyle = '#d0d0d0';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#e8eaec';
    context.fillRect(1, 1, canvas.width-2, canvas.height-2);

    // Draw header
    context.fillStyle = '#ffffff';
    context.font = '24px Verdana';
    context.fillText('HTML Canvas Basic Frameword', 10, 30);

    // Display fps
    context.fillStyle = '#ffffff';
    context.font = '12px Verdana';
    context.fillText('Fps:' + fps, 13, 40);
  }

  // Mouse event handler
  function onMouseMove(e) {}
  function onMouseDown(e) {}
  function onMouseUp(e) {}
  function onMouseOut(e) {}

  // Get the mouse position
  function getMousePos (canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
      y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
    }
  }

  // Call init to start the Game
  init();
}
