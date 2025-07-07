import { SqlServerConnection } from './db/sqlServer.js';
import { PdfGenerator } from './pdf/generator.js';
import dbConfig from './config/dbConfig.js';

async function main() {
    const sqlConnection = new SqlServerConnection(dbConfig);
    
    try {
        await sqlConnection.connect();
        const data = await sqlConnection.fetchData();
        
        const pdfGenerator = new PdfGenerator();
        await pdfGenerator.createPdf(data);
        
        console.log('PDF generated successfully.');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await sqlConnection.disconnect();
    }
}

main();