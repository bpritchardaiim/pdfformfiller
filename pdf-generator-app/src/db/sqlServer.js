class SqlServerConnection {
    constructor(config) {
        this.config = config;
        this.connection = null;
    }

    async connect() {
        const sql = require('mssql');
        try {
            this.connection = await sql.connect(this.config);
            console.log('Connected to SQL Server');
        } catch (err) {
            console.error('Database connection failed:', err);
            throw err;
        }
    }

    async disconnect() {
        if (this.connection) {
            await this.connection.close();
            console.log('Disconnected from SQL Server');
        }
    }

    async fetchData(query) {
        try {
            const result = await this.connection.request().query(query);
            return result.recordset;
        } catch (err) {
            console.error('Error fetching data:', err);
            throw err;
        }
    }
}

module.exports = SqlServerConnection;