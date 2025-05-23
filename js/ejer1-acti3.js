let maxZ = -Infinity;
let bestX = 0, bestY = 0;

for (let i = 0; i < 100; i++) {
  let x = Math.random() * 10 - 5;
  let y = Math.random() * 10 - 5;
  let z = x * x + y * y;
  if (z > maxZ) {
    maxZ = z;
    bestX = x;
    bestY = y;
  }
}

console.log('Mejor Z: ${maxZ.toFixed(2)} con x=${bestX.toFixed(2)}, y=${bestY.toFixed(2)}');