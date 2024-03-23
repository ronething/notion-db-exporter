const { exportNotionToCsv } = require('./index'); // 调整路径以符合你的项目结构
const path = require('path');
const fs = require('fs');

describe('exportNotionToCsv', () => {
  // case1: check export success or not
  test('should create a CSV file', async () => {
    const outputPath = path.join(__dirname, 'output.csv');
    
    await exportNotionToCsv(); // 假设这会导出到output.csv
    
    // 检查文件是否存在
    expect(fs.existsSync(outputPath)).toBe(true);

    fs.unlinkSync(outputPath);
  });
});
