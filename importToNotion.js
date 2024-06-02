const notion = require('./utils/notionClient'); // 引入 Notion 客户端实例
const fs = require('fs').promises;

// Function to read JSON data from file
async function readJsonFile(filePath) {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
}

// Function to add items to Notion database
async function addItemsToNotion(databaseId, items) {
    for (const item of items) {
        await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: item.name
                            }
                        }
                    ]
                },
                URL: {
                    url: item.url
                }
            }
        });
    }
    console.log('Items have been added to the database successfully!');
}

// Main function to import JSON data into Notion
async function importJsonToNotion(filePath) {
    const databaseId = process.env.NOTION_DATABASE_ID;
    try {
        const jsonData = await readJsonFile(filePath);
        await addItemsToNotion(databaseId, jsonData);
    } catch (error) {
        console.error('Error importing data to Notion:', error.message);
    }
}

module.exports.importJsonToNotion = importJsonToNotion;
