// News Component: This component renders a list of news items with a summary and a "Read More" button. Clicking on "Read More" opens a modal displaying detailed information about the news item.

import React, { useState } from 'react';
import './css/News.css';
import CardModal from './Modal/CardModal';

// News component takes in a prop 'data' which contains an array of news items
const News = ({ data }) => {
  // State to manage the data of the news item to be displayed in the modal
  const [modalData, setModalData] = useState(null);

  // Function to handle mouse enter event on news item
  const handleMouseEnter = (index) => {
    document.getElementById(`headline-item-news-${index}`).classList.add('active');
  };

  // Function to handle mouse leave event on news item
  const handleMouseLeave = (index) => {
    document.getElementById(`headline-item-news-${index}`).classList.remove('active');
  };

  // Function to handle "Read More" button click
  const handleReadMore = (item) => {
    setModalData(item);
  };

  return (
    <div className="top-headlines-wrapper-news">
      <div className="top-headlines-container-news">
        {/* Mapping over each news item and rendering its summary */}
        {data.map((item, index) => (
          <div
            className="headline-item-news"
            id={`headline-item-news-${index}`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="image-container-news">
              {/* Displaying image and date of the news */}
              <img src={item.urlToImage} alt={item.title} />
              <span className="date">{item.publishedAt}</span>
            </div>
            <div className="summary-news">
              {/* Displaying title, description, and a truncated content of the news */}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.content.slice(0, 440)}....</p>
              {/* Button to read more about the news */}
              <button onClick={() => handleReadMore(item)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
      {/* Rendering CardModal component if modalData is not null */}
      {modalData && <CardModal data={modalData} isActive={true} onClose={() => setModalData(null)} />}
    </div>
  );
};

export default News;
