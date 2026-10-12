import {mkdir,copyFile,cp} from 'node:fs/promises';
import path from 'node:path';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','styles.css','script.js']) await copyFile(file,`dist/${file}`);
await cp('assets','dist/assets',{recursive:true,filter:source=>!path.basename(source).startsWith('.')});
console.log('GardenGate Essentials built to dist/');
