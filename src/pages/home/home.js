import './home.css';
import ResponsiveAppBar from '../../components/navbar/navbar';
import * as React from 'react';
import Button from '@mui/material/Button';
import img from '../../assets/asphaltThree.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {

  return (
    <div className="App">
      <div className='navbar'>
        <ResponsiveAppBar></ResponsiveAppBar>
      </div>
      <div className='header-space' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 className='header-text' style={{ backgroundColor: 'black', fontSize: '45px', marginBottom: '-20px' }}>The Savings Are In Black & White!</h1>
            <h1 className='header-text' style={{ backgroundColor: 'black', fontSize: '45px', marginBottom: '-20px' }}>Your One Stop Shop!</h1>
            <h1 className='header-text' style={{ backgroundColor: 'black', fontSize: '45px' }}>One Call... One Contractor.</h1>
          </div>
          <div className="subtext-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
            <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</h3>
          </div>
          <div className='buttons' style={{ paddingTop: '50px' }}>
            <Button
              variant="contained"
              component={Link}
              to="/services"
              sx={{ backgroundColor: '#ffcc00', color: 'white', marginRight: '15px', width: '200px', height: '50px', fontWeight: 'bold' }}
            >
              Services
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/about"
              sx={{ backgroundColor: '#ffcc00', color: 'white', marginRight: '15px', width: '200px', height: '50px', fontWeight: 'bold' }}
            >
              About Us
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              sx={{ backgroundColor: '#ffcc00', color: 'white', width: '200px', height: '50px', fontWeight: 'bold' }}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className='content' style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <div className='letter-div' style={{ marginTop: '-85px', marginLeft: '25px', backgroundColor: '#ffcc00', height: '150px', width: '15px', marginRight: '25px' }}></div>
        <div className='div-one' style={{ backgroundColor: 'black', height: '350px', width: '350px', fontSize: '75px', marginTop: '-100px', color: 'white', fontWeight: 'bold' }}>
          <p style={{ marginBottom: '-85px', marginLeft: '-120px' }}>Our</p>
          <p>Approach</p>
        </div>
        <div className='div-two' style={{ paddingTop: '40px', paddingLeft: '10px', paddingRight: '10px', color: 'white', backgroundColor: '#121212', height: '250px', width: '500px', marginLeft: '350px', marginTop: '-35px', fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', border: '2px solid white' }}>
          <div className='div-two' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <p className='about-us-paragraph'>At Black & White Asphalt, we take pride in ensuring your property is professionally maintained for you and your customers. Our three-step approach helps us better understand your project needs before we even get started, ensuring we deliver on budget and on schedule every time.</p>
          </div>
          <div className='div-two' style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '25px' }}>
            <h1 className='about-us-link' style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', marginLeft: '25px', marginTop: '25px' }}>About Us</h1>
            <ArrowForwardIcon sx={{ paddingTop: '10px', color: 'white', fontSize: '25px', marginLeft: '25px' }} />
          </div>
        </div>
        <div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
