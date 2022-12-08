import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  pdfMake: any;

  constructor() { }

  async loadPdfMaker() {
    if (!this.pdfMake) {
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModule = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
    }
  }

  async generatePdf() {

    await this.loadPdfMaker();

    const def = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],
    
            body: [
              [ 'Etudiant', 'Specialité', 'Date Debut', 'Date Fin' ],
              [ '', 'RESEAUX', '2022-11-30', '2022-12-17' ],
              [ '', 'CLOUD', '2022-12-01', '2022-12-22' ],
              [ '', 'CLOUD', '2022-12-01', '2022-12-22' ]
            ]
          }
        }
      ]
    };
    this.pdfMake.createPdf(def).open();
  }

}
