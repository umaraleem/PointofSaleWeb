import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaGooglePlus, FaLinkedin } from 'react-icons/fa';
import {
  MDBFooter,
  MDBContainer,
  // MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-blue text-center text-white' style={{ backgroundColor: '#007BFF'  }}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaFacebookF /></a>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaTwitter /></a>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <a href='https://9to5google.com/guides/google-plus/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaGooglePlus /></a>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaInstagram /></a>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaLinkedin /></a>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <a href='https://www.github.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaGithub /></a>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#0077AE'  }}>
        © 2021 Copyright:
        <a className='text-white' href='https://materials.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

// // rest of the code

// function Footer() {
//   return (
//     <footer className='footer'>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-12'>
//             <div className='social-links'>
//               <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
//               <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
//               <a href='https://github.com/' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
//             </div>
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col-md-12'>
//             <div className='footer-text'>
//               <p>&copy; 2023, Footer</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
