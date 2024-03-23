## notion-db-exporter

This module allows you to export data from a Notion database to a CSV file.

## Installation

First, install the module using npm:

```bash
npm install @ronething/notion-db-exporter
```

## Setup

Before using the exporter, you need to set up your Notion integration and obtain your Notion API token and database ID. Set these as environment variables:

```bash
export NOTION_TOKEN='your_notion_token_here'
export NOTION_DATABASE_ID='your_database_id_here'
```

Alternatively, you can create a `.env` file in the root of your project and add your Notion token and database ID there:

```
NOTION_TOKEN=your_notion_token_here
NOTION_DATABASE_ID=your_database_id_here
```

## Usage

After installing the module and setting up your environment variables, you can use the module to export your Notion database to a CSV file. Here's a simple script example:

```javascript
const notionExporter = require('@ronething/notion-db-exporter');

// Execute the export
notionExporter.exportNotionToCsv();
```

This script will export the Notion database data to a file named `out.csv` in your current directory.

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

