// TopHeadlines Component: This component renders a list of top headlines. 
// Clicking on the image of a headline opens a modal displaying detailed information about the headline.

import React, { useState } from 'react';
import './css/HeadLines.css';
import CardModal from './Modal/CardModal';

// TopHeadlines component takes in a prop 'data' which contains an array of top headlines
const TopHeadlines = ({ data }) => {
    // State to manage the data of the headline to be displayed in the modal
    const [modalData, setModalData] = useState(null);
  
    // Function to handle click event on headline image
    const handleImageClick = (item) => {
      setModalData(item); // Set data for modal when image is clicked
    };
  
    return (
      <div className="top-headlines-wrapper">
        <div className="top-headlines-container">
          {/* Mapping over each headline and rendering its image */}
          {data.map((item, index) => (
            <div className="headline-item" key={index} onClick={() => handleImageClick(item)}>
              <div className="image-container" >
                {/* Displaying image of the headline */}
                <img src={item.urlToImage} alt={item.title} />
              </div>
              <div className="summary">
                {/* Displaying title of the headline */}
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
       
        {/* Rendering CardModal component if modalData is not null */}
        {modalData && <CardModal data={modalData} isActive={true} onClose={() => setModalData(null)} />}
      </div>
    );
  };
  
  export default TopHeadlines;
