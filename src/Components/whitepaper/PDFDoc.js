import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import './styles/PDFDoc.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PDFDoc = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }
    function goToPrevPage(){
         setPageNumber(pageNumber - 1)
    }
    function goToNextPage(){
        setPageNumber(pageNumber + 1)
    }
  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        {
            pageNumber <= 1
            ? <button className='WhitePaperPrevDisabled' disabled> Prev</button>
            : <button className='WhitePaperButtonPrev' onClick={() => goToPrevPage()}> Prev</button>
        }
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
        <Document
        file={require('../whitepaper/HEST.pdf')}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        >
            <Page pageNumber={pageNumber} width={600} />
        </Document>
        </div>
        {
            pageNumber >= numPages
            ?
            <button className='WhitePaperNextDisabled' disabled> Next</button>
            :  
            <button className='WhitePaperButtonNext' onClick={() => goToNextPage()}> Next</button>
        }
        </div>
        <p style={{ color: 'green', textAlign: 'center'}}>
            Page {pageNumber} of {numPages}
        </p>
    </div>
  )
}

export default PDFDoc
