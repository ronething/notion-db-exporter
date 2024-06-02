const notion = require('./utils/notionClient');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// CSV file configuration
const csvWriter = createCsvWriter({
    path: 'output.csv', // The output CSV file
    header: [
        { id: 'name', title: 'Name' },
        { id: 'url', title: 'URL' }
        // Add more header mappings here based on your Notion database properties
    ]
});

// Function to retrieve data from Notion database
async function getDatabaseItems(databaseId) {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    console.log("results is ", response.results)
    return response.results;
}

// Function to transform Notion items to a simpler object structure for CSV export
function transformItemsToRecords(items) {
    return items.map((item) => {
        return {
            name: item.properties.Name.title[0]?.plain_text,
            url: item.properties.URL.url,
            // Map more properties here based on your Notion database structure
        };
    });
}

// Main function to execute the data fetch and export
async function exportNotionToCsv() {
    const databaseId = process.env.NOTION_DATABASE_ID;
    try {
        const items = await getDatabaseItems(databaseId);
        const records = transformItemsToRecords(items);
        await csvWriter.writeRecords(records); // Writes the records to the CSV file
        console.log('Data has been exported to out.csv successfully!');
    } catch (error) {
        console.error('Error exporting data from Notion:', error.message);
    }
}

// Execute the export
module.exports.exportNotionToCsv = exportNotionToCsv;
