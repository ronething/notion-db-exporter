## notion-db-exporter

This module allows you to export data from a Notion database to a CSV file.

## Installation

First, install the module using npm:

```bash
npm install @ronething/notion-db-exporter
```

为了让其他用户能够使用你的模块，你应该在你的项目中包含使用说明。通常，这些说明会被放在`README.md`文件中。以下是你可以添加到`README.md`的一个示例，它解释了如何安装和使用你的模块：

```markdown
# My Notion Exporter

This module allows you to export data from a Notion database to a CSV file.

## Installation

First, install the module using npm:

```bash
npm install my-notion-exporter
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
const notionExporter = require('notion-db-exporter');

// Execute the export
notionExporter.exportNotionToCsv();
```

This script will export the Notion database data to a file named `out.csv` in your current directory.

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
