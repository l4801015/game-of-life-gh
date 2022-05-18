/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Language: javascript\n// Cellular Automata\n// Game of Life\n\nlet grid, \n    cols, \n    rows, \n    width, \n    height, \n    resolution,\n    ctx;\n\n// create canvas\n// append canvas to body\n// return context\nconst createCanvas = (width, height) => {\n  const canvas = document.createElement('canvas');\n  canvas.width = width;\n  canvas.height = height;\n  const ctx = canvas.getContext('2d');\n  canvas.style.position = 'absolute';\n  canvas.style.top = '0';\n  canvas.style.left = '0';\n  canvas.style.width = '100%';\n  canvas.style.height = '100%';\n  document.body.appendChild(canvas);\n  return ctx;\n};\n\n// make 2d array\nconst make2dArray = (cols, rows) => {\n  const arr = new Array(cols);\n  for (let i = 0; i < arr.length; i++) {\n    arr[i] = new Array(rows);\n  }\n  return arr;\n};\n\n// create setup function\nconst setup = () => {\n  // set cols and rows\n  cols = Math.floor(width / resolution);\n  rows = Math.floor(height / resolution);\n  // create grid\n  grid = make2dArray(cols, rows);\n  // set grid\n  for (let i = 0; i < cols; i++) {\n    for (let j = 0; j < rows; j++) {\n      grid[i][j] = Math.floor(Math.random() * 2);\n    }\n  }\n};\n\n// count neighbors\nconst countNeighbors = (grid, x, y) => {\n  let sum = 0;\n  for (let i = -1; i < 2; i++) {\n    for (let j = -1; j < 2; j++) {\n      const col = (x + i + cols) % cols;\n      const row = (y + j + rows) % rows;\n      sum += grid[col][row];\n    }\n  }\n  sum -= grid[x][y];\n  return sum;\n};\n\n// drop fps to 30\nconst fps = 30;\nconst interval = 1000 / fps;\nlet then = performance.now();\n\n// create draw function\nconst draw = () => {\n  // get current time\n  const now = performance.now();\n  // calculate delta time\n  const delta = now - then;\n  // if delta is greater than interval\n  if (delta > interval) {\n    // set then to now\n    then = now - (delta % interval);\n  \n    \n\n\n  // clear canvas\n  ctx.fillStyle = '#000';\n  ctx.fillRect(0, 0, width, height);\n  // set grid\n  for (let i = 0; i < cols; i++) {\n    for (let j = 0; j < rows; j++) {\n      let x = i * resolution;\n      let y = j * resolution;\n      if (grid[i][j] === 1) {\n        ctx.fillStyle = '#fff';\n        ctx.fillRect(x, y, resolution, resolution);\n      }\n    }\n  }\n  // set next generation\n  let next = make2dArray(cols, rows);\n  for (let i = 0; i < cols; i++) {\n    for (let j = 0; j < rows; j++) {\n      let neighbors = countNeighbors(grid, i, j);\n      if (grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {\n        next[i][j] = 0;\n      } else if (grid[i][j] === 0 && neighbors === 3) {\n        next[i][j] = 1;\n      } else {\n        next[i][j] = grid[i][j];\n      }\n    }\n  }\n  grid = next;\n  // call draw again\n  requestAnimationFrame(draw);\n\n  } else {\n    // call draw again\n    requestAnimationFrame(draw);\n  }\n\n\n};\n\n\nwidth = window.innerWidth;\nheight = window.innerHeight;\nresolution = 10;\nctx = createCanvas(width, height);\nsetup();\ndraw();\n\n\n//# sourceURL=webpack://dev/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;