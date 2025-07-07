# PDF Generator Application

This project is a simple PDF generator that retrieves data from a SQL Server database and generates PDF documents based on that data.

## Project Structure

```
pdf-generator-app
├── src
│   ├── index.js          # Entry point of the application
│   ├── db
│   │   └── sqlServer.js  # Handles SQL Server database connection
│   ├── pdf
│   │   └── generator.js   # Responsible for PDF generation
│   └── config
│       └── dbConfig.js   # Database configuration settings
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd pdf-generator-app
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Configure the database connection settings in `src/config/dbConfig.js`:
   ```javascript
   module.exports = {
       host: 'your_host',
       user: 'your_user',
       password: 'your_password',
       database: 'your_database'
   };
   ```

## Usage

To run the application and generate a PDF, execute the following command:
```
node src/index.js
```

## Dependencies

- `pdfkit`: A library for generating PDF documents.
- `mssql`: A Microsoft SQL Server client for Node.js.

## License

This project is licensed under the MIT License.