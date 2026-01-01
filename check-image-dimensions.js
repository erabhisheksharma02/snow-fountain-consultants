const fs = require('fs');
const path = require('path');

const files = ['slide1_merged.jpg', 'slide2_merged.jpg', 'slide3_merged.jpg', 'slide4_merged.jpg', 'slide5_merged.jpg'];

files.forEach(file => {
  const filePath = path.join('public', 'images', file);
  const buffer = fs.readFileSync(filePath);
  
  // Read JPEG dimensions from file header
  let width = 0;
  let height = 0;
  
  // Simple JPEG dimension extraction
  for (let i = 0; i < buffer.length - 8; i++) {
    if (buffer[i] === 0xFF && buffer[i + 1] === 0xC0) {
      height = buffer.readUInt16BE(i + 5);
      width = buffer.readUInt16BE(i + 7);
      break;
    }
    if (buffer[i] === 0xFF && buffer[i + 1] === 0xC2) {
      height = buffer.readUInt16BE(i + 5);
      width = buffer.readUInt16BE(i + 7);
      break;
    }
  }
  
  console.log(`${file}: ${width}x${height} pixels (aspect ratio: ${(width/height).toFixed(2)})`);
});
