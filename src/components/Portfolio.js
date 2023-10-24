import React, { Component } from 'react';
import './Portfolio.css'; // Assuming you have your custom CSS file
import imgURL from '../div.jpg';

class Portfolio extends Component {
  render() {
    const customStyles = {
      // Define custom styles here
      container: {
        fontFamily: 'Arial, sans-serif',
        background: '#f5f5f5',
        padding: '20px',
      },
      title: {
        backgroundColor: 'grey',
        color: 'white',
        margin: '10px 0 0',
        padding: '10px',
        textAlign: 'center',
      },
      image: {
        maxWidth: '100%',
        borderRadius: '10px',
        border: '2px solid #007bff',
        margin: '20px 0',
      },
      jumbotron: {
        backgroundColor: 'light-pink',
        border: '2px solid #6c757d',
        borderRadius: '10px',
        marginTop: '10px',
      },
      container1: {
        border: '2px solid #6c757d',
        borderRadius: '10px',
        padding: '10px',
      },
      heading: {
        fontSize: '24px',
        fontWeight: 'bold',
      },
      list: {
        listStyleType: 'none',
        padding: 0,
      },
    };

    return (
      <div style={customStyles.container}>
        <div style={customStyles.title}>
          <h1>My Portfolio</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={imgURL} alt="Me" style={customStyles.image} />
          </div>
          <div className="col-md-8">
            {/* About Me */}
            <div style={customStyles.jumbotron}>
              <div style={customStyles.container1}>
                <h3 style={customStyles.heading}>About Me</h3>
                <p>I am Kurmapu Divya. Computer Science Student passionate to work in a competitive environment where I can showcase my technical skills.</p>
              </div>
            </div>

            {/* Skills */}
            <div style={customStyles.jumbotron}>
              <div style={customStyles.container1}>
                <h3 style={customStyles.heading}>Skills</h3>
                <ul style={customStyles.list}>
                  <li>Programming: Python, Java</li>
                  <li>Web-Development: HTML, CSS, JavaScript</li>
                  <li>Database: MySQL</li>
                </ul>
              </div>
            </div>

            {/* Hobbies */}
            <div style={customStyles.jumbotron}>
              <div style={customStyles.container1}>
                <h3 style={customStyles.heading}>Hobbies</h3>
                <ul style={customStyles.list}>
                  <li>Playing UNO</li>
                  <li>Watching Movies</li>
                  <li>Dancing</li>
                  <li>Programming</li>
                </ul>
              </div>
            </div>

            {/* Contact Me */}
            <div style={customStyles.jumbotron}>
              <div style={customStyles.container1}>
                <h3 style={customStyles.heading}>Contact Me:</h3>
                <p>
                  <a href="mailto:kurmapudivya25@gmail.com">Email</a>
                  <a href="https://www.linkedin.com/in/kurmapu-divya-2a6574284">LinkedIn</a>
                  +91 7893982527
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;


