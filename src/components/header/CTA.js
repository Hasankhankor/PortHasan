import React from 'react'
import CV from '../../assets/Resume-Muhammad-Hassan-Tariq.pdf'
import axios from "axios";
import fileDownload from "js-file-download";

const CTA = () => {
  const handleDownload = (url, filename) => {
		axios
			.get(url, {
				responseType: "blob",
			})
			.then((res) => {
				fileDownload(res.data, filename);
			});
	};
  return (
    <div className='cta'>
        <a onClick={() => {handleDownload(CV, 'Resume-Muhammad-Hassan-Tariq.pdf')}} className='btn'>Download</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>



    </div>
  )
}

export default CTA