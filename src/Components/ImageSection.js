import React from 'react';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <h4>I am<span> Soyeb</span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Md Abu Soyeb Babu</p>
                        <p>: 26</p>
                        <p>: Bangladeshi</p>
                        <p>: English, Bangla, Hindi</p>
                        <p>: Abdul Hamid Road, Foy's Lake Chittagong</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1itUXwzJ-VXRXaDI85MNLUa673mcTPPMo/view?usp=sharing">
                <button className="btn">Download Cv</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;
