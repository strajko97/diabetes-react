import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';


function Footer() {
  return (

    <div className="footer container-fluid mt-5" style={{ backgroundImage: 'linear-gradient(rgb(98, 196, 126), rgb(0, 109, 10))' }}>
      <div className="row">
        <div className="col-lg-3 col-md-10 col-sm-10 mx-auto my-lg-2 text-center">
          <div className="footer-site-name">Zdrava ishrana</div>
          <Link to="/o-nama" className="text-decoration-none">
            <div className="footer-subCategory"><h4>O nama</h4></div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-10 mx-auto my-lg-2 text-center">
          <div className="footer-subCategory"><h5>Uslovi korišćenja</h5></div>
          <Link to="/politika-privatnosti" className="text-decoration-none">
            <div className="footer-subCategory"><h4>Politika privatnosti</h4></div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-10 mx-auto my-lg-2 my-sm-2 my-2 text-center">
          <div id="kontakt" className="col-10 mx-auto">
            <div className="footer-subCategory">
              <h5>Kontakt</h5>
            </div>
            <div className="col-12 mt-2 text-center md-mt-3">
              <div>
                <div className="icons-svg">
                  <svg viewBox="0 0 30 30" width="35" height="35" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                  </svg>
                  060 / 1234 - 567
                </div>
                <div>
                  <a href="https://www.facebook.com" className="icons-svg">
                    <svg viewBox="0 0 30 30" width="35" height="35">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                    zdrava_ishrana
                  </a>
                </div>
                <div>
                  <a href="https://instagram.com" className="icons-svg">
                    <svg viewBox="0 0 30 30" width="35" height="35">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2
                    a1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                    zdrava_ishrana
                  </a>
                </div>
              </div>
              <div className="icons-svg">
                <svg viewBox="0 0 24 24" width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                  <path d="M4 4h16c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V6c0-1.104.896-2 2-2zM4 6l8 5 8-5M4 18l8-5 8 5"></path>
                </svg>
                zdrava_ishrana@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="fotterBottom container-fluid" style={{ backgroundColor: 'rgb(0,0,0)' }}>
          <p>
            Copyright &copy; 2024; Designed by
            <span className="designer container-fluid">Tea&Strajko</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
