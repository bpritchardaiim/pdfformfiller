class PdfGenerator {
    constructor() {
        const PDFDocument = require('pdfkit');
        this.PDFDocument = PDFDocument;
    }

    createPdf(data, filePath) {
        const doc = new this.PDFDocument();
        doc.pipe(fs.createWriteStream(filePath));

        doc.fontSize(25).text('Data from SQL Server', { align: 'center' });
        doc.moveDown();

        data.forEach(item => {
            doc.fontSize(12).text(`ID: ${item.id}, Name: ${item.name}, Value: ${item.value}`);
            doc.moveDown();
        });

        doc.end();
    }
}

module.exports = PdfGenerator;