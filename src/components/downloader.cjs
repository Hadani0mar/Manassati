// downloader.js
const fs = require('fs');
const https = require('https');
const path = require('path');

const z = 13; // مستوى التقريب
const minX = 4380, maxX = 4390;
const minY = 2880, maxY = 2890;

for (let x = minX; x <= maxX; x++) {
  for (let y = minY; y <= maxY; y++) {
    const url = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
    const dir = `tiles/${z}/${x}`;
    const file = `tiles/${z}/${x}/${y}.png`;
    fs.mkdirSync(dir, { recursive: true });

    const fileStream = fs.createWriteStream(file);
    https.get(url, (res) => {
      res.pipe(fileStream);
    });
  }
}
