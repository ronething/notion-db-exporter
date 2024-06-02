const { Client } = require('@notionhq/client');

// Initialize and export Notion client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

module.exports = notion;
