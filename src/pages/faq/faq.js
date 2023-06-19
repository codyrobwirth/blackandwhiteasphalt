import ResponsiveAppBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

let Faq = () => {
    return (
      <div>
        <div className="App">
          <div className='navbar'>
            <ResponsiveAppBar />
          </div>
          <div className='form-content' style={{ backgroundColor: 'black', height: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='faq-text' style={{ color: 'white', width: '70%', paddingTop: '150px' }}>
              <h2 style={{ fontSize: '32px', color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>FAQS</h2>
              <div>
                <h3>What is the Black & White promise?</h3>
                <p>The Black & White promise is to provide the best possible products for your geographic location without compromising on quality. We have strict quality control standards in place as required and monitored by the State of Ohio.</p>
              </div>
              <div>
                <h3>What makes a good sealant?</h3>
                <p>A good sealant not only protects and rejuvenates the asphalt but also ensures that the product used does not cause any damage to your parking lot or driveway. While aesthetics are important, at B&W, we prioritize matching quality with the visual appeal of the sealant.</p>
              </div>
              <div>
                <h3>What does Black & White aim to achieve?</h3>
                <p>At Black & White, our goal is to rejuvenate and protect your investment, which is your asphalt. We strive to provide the best possible products and ensure that your asphalt remains in excellent condition.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
export default Faq;