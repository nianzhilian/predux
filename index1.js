const fs = require('fs');
const prettier = require('prettier');
const jsBeautify = require('js-beautify');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path');
  process.exit(1);
} 
console.log(filePath)
fs.readFile(filePath, 'utf8', async (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  // 使用 prettier 格式化代码
  const formattedCode = await prettier.format(data, { parser: 'babel' });

  // 使用 js-beautify 进一步格式化代码
  const beautifiedCode = jsBeautify(formattedCode, { indent_size: 2 });

  // 将格式化后的代码写回文件
  fs.writeFile(filePath, beautifiedCode, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      process.exit(1);
    }
    console.log('File formatted successfully');
  });
});