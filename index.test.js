const { exportNotionToCsv } = require('./exportFromNotion');
const { importJsonToNotion } = require('./importToNotion');
const path = require('path');
const fs = require('fs');

describe('exportNotionToCsv', () => {
  // case1: check export success or not
  test('should create a CSV file', async () => {
    const outputPath = path.join(__dirname, 'output.csv');

    await exportNotionToCsv();

    // check file exists
    expect(fs.existsSync(outputPath)).toBe(true);

    // delete file
    fs.unlinkSync(outputPath);
  });
});

describe('importToNotion', () => {
  test('import json to notion', async () => {
    await importJsonToNotion("./testdata/import.json");
  });
});
