import ResponsiveAppBar from '../../components/navbar/navbar';
import img from '../../assets/asphaltPageContent.jpeg';
import Footer from '../../components/footer/footer';
import { useState } from 'react';

let Estimate = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        address: '',
        phoneNumber: '',
        bestTimeToCall: '',
        howHeard: '',
        checkboxes: [],
    });

    let onSubmit = () => {
        console.log(formData);
        // Send the form data to the desired email address formatted line by line for each key value pair
        const emailContent = Object.entries(formData)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
        window.open(`mailto:jetsscolumbus@gmail.com?subject=Contact Form Submission&body=${emailContent}`)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                checkboxes: [...prevData.checkboxes, value],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                checkboxes: prevData.checkboxes.filter((item) => item !== value),
            }));
        }
    };

    return (
        <div className='App'>
            <div className='navbar'>
                <ResponsiveAppBar></ResponsiveAppBar>
            </div>
            <div
                className='form-content'
                style={{
                    backgroundColor: 'black',
                    height: '800px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
            <h3 style={{ color: 'white', fontWeight: 'bold', paddingBottom: '40px' }}>Interested? Fill Out The Form Below TO Get In Contact!</h3>
                <form onSubmit={onSubmit}>
                    <label style={{ paddingRight: '15px' }}>
                        <span style={{ paddingRight: '15px', color: 'white', fontWeight: 'bold' }}>Name:</span>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} required />
                    </label>
                    <br />
                    <label style={{ paddingRight: '15px' }}>
                        <span style={{ paddingRight: '15px', color: 'white', fontWeight: 'bold' }}>Company Name:</span>
                        <input
                            type='text'
                            name='companyName'
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label style={{ paddingRight: '15px' }}>
                        <span style={{ paddingRight: '15px', color: 'white', fontWeight: 'bold' }}>Email:</span>
                        <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                    </label>
                    <br />
                    <label style={{ paddingRight: '15px' }}>
                        <span style={{ paddingRight: '15px', color: 'white', fontWeight: 'bold' }}>Project Address:</span>
                        <input type='text' name='address' value={formData.address} onChange={handleChange} required />
                    </label>
                    <br />
                    <label style={{ paddingRight: '15px' }}>
                        <span style={{ paddingRight: '15px', color: 'white', fontWeight: 'bold' }}>Phone Number:</span>
                        <input
                            type='tel'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label style={{ paddingRight: '15px' }}>
                        <span style={{ paddingRight: '15px', color: 'white', fontWeight: 'bold' }}>Best Time to Call:</span>
                        <input
                            type='text'
                            name='bestTimeToCall'
                            value={formData.bestTimeToCall}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label style={{ paddingRight: '15px' }}>
                        <span style={{ paddingRight: '15px', color: 'white', fontWeight: 'bold' }}>How did you hear about us?</span>
                        <input type='text' name='howHeard' value={formData.howHeard} onChange={handleChange} required />
                    </label>
                    <br />
                    <div style={{ width: '80%', marginLeft: '150px' }}>
                        <p>Select checkboxes:</p>
                        {['Commercial', 'Residential', 'Sealcoating', 'Crackfill/Crack Seal', 'Striping', 'Thermoplastic Striping', 'ADA Compliant Repairs', 'Roadway Signage Instillation', 'Concreate', 'Pot-Hole Repairs', 'Patch Work / Asphalt Repairs', 'Apron Replacement', 'Parking Blocks', 'Speed Bumps'].map((value) => (
                            <label key={value} style={{ color: 'white', paddingRight: '15px' }}>
                                <input
                                    type='checkbox'
                                    name='checkboxes'
                                    value={value}
                                    checked={formData.checkboxes.includes(value)}
                                    onChange={handleCheckboxChange}
                                />
                                {value}
                            </label>
                        ))}
                        <br />
                    </div>
                    <br />
                    <button onClick={onSubmit} type='submit'>Submit</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Estimate;
