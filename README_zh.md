## Notion数据库导出器 

该模块允许您将数据从 Notion 数据库导出到 CSV 文件。

## 安装

首先使用 npm 安装模块

```bash
npm install @ronething/notion-db-exporter
```

## 设置

在使用导出器之前，您需要设置您的 Notion 集成并获取您的 Notion API 令牌和数据库 ID。将它们设置为环境变量：

```bash
export NOTION_TOKEN='your_notion_token_here'
export NOTION_DATABASE_ID='your_database_id_here'
```

或者，您可以在项目的根目录中创建一个 .env 文件，并在其中添加您的 Notion 令牌和数据库 ID：

```
NOTION_TOKEN=your_notion_token_here
NOTION_DATABASE_ID=your_database_id_here
```

## 用法

安装模块并设置环境变量后，您可以使用该模块将 Notion 数据库导出到 CSV 文件。这是一个简单的脚本示例：

```javascript
const notionExporter = require('@ronething/notion-db-exporter');

// Execute the export
notionExporter.exportNotionToCsv();
```

该脚本会将 Notion 数据库数据导出到当前目录中名为 out.csv 的文件中。

## 贡献

请随意分叉存储库并提交拉取请求。

## 执照

该项目已根据 MIT 许可证获得许可 - 有关详细信息，请参阅 LICENSE.md 文件。

