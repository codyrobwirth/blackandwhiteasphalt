import ResponsiveAppBar from '../../components/navbar/navbar';
import img from '../../assets/asphaltPageContent.jpeg';
import Footer from '../../components/footer/footer';

let About = () => {
    return (
        <div>
            <div className="App" style={{ marginBottom: '-5px' }}>
                <div className='navbar'>
                    <ResponsiveAppBar></ResponsiveAppBar>
                </div>
                <div className='aboutusText' style={{ backgroundColor: 'black', height: '180px' }}>
                    <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', paddingTop: '125px' }}>"The Savings Are In Black & White! Your One Stop Shop! One Call... One Contractor."</h2>
                </div>
                <div style={{ backgroundImage: `url(${img})`, paddingBottom: '50px', backgroundSize: 'cover', height: '500px', paddingTop: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '2px solid white', borderTop: '2px solid white' }}>
                    <div className='aboutUsText' style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
                        <h1 style={{ textDecoration: 'underline' }}>About Us</h1>
                        <h2>Commercial</h2>
                        <p>Black & White Asphalt Management has been in service for 20+ years.</p>
                        <p>We are truly dedicated to performing the highest quality work, with the best customer service.</p>
                        <p>Partners Jordan and Terry lead the company, with owner Kailyn helping run the back of the house operations.</p>
                        <p>We care deeply about building a reputation of excellence here in the beautiful state of Ohio and we know that you'll be glad you</p>
                        <p>worked with us to maximize the life of your driveway, commercial parking lot, or other asphalt needs.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About;
