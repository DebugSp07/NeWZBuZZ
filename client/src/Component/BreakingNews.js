import React, { useState } from 'react';
import styled from 'styled-components';
import CardModal from './Modal/CardModal';


const NewCardContainer = styled.section`
  .game-card {
    margin-bottom: 30px;
    width: 900px;
    height: 500px;
    background: #343434 no-repeat center center / cover;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 1s ease-in-out;
  }

  .item-desc {
    padding: 0 24px 12px;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    transform: translateY(100%);
    transition: transform 1s ease-in-out; /* Adjusted transition property */
    overflow: hidden; /* Hide overflow */
    max-height: 50px; /* Initially collapsed */
    opacity: 0; /* Initially transparent */
  }

  .game-card.active .item-desc {
    transform: translateY(0);
    max-height: 400px; /* Adjust height */
    opacity: 1;
    transition-timing-function: cubic-bezier(0.275, 0.885, 0.32, 1.275); /* Smooth transition */
  }

  .item-desc p {
    margin-bottom: 10px; /* Add spacing between paragraphs */
    margin-right : 10px ;
    color: #fff; /* Set paragraph text color to white */
  }

  .read-more {
    color: #e73700;
    cursor: pointer;
    display: block;
    margin-top: 10px;
    text-decoration: underline;
  }

  /* Date styling */
  .game-card-date {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #000;
    font-size: 14px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

// BreakingNews component takes in a prop 'data' which contains data for a breaking news item
const BreakingNews = ({ data }) => {
  // State to manage the visibility of the card modal
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the visibility of the card modal
  const toggleCard = () => {
    setIsActive(!isActive);
  };

  // State to manage the visibility of the card modal triggered by the "Read More" button
  const [isActive2, setIsActive2] = useState(false);

  // Function to toggle the visibility of the card modal triggered by the "Read More" button
  const toggleCard2 = () => {
    setIsActive2(!isActive2);
  };

  return (
    <>
    {/* Container for the BreakingNews component */}
    <NewCardContainer>
      {/* Game card container */}
      <div
        className={`game-card ${isActive ? 'active' : ''}`}
        style={{ backgroundImage: `url(${data.urlToImage})` }}
        onMouseEnter={toggleCard}
        onMouseLeave={toggleCard}
      >
        {/* Displaying the date of the news */}
        <span className="game-card-date">{data.publishedAt}</span>
        {/* Description of the news */}
        <div className="item-desc">
          {/* Title of the news */}
          <h3 style={{ color: '#fff' }}>{data.title}</h3>
          {/* Displaying description only when the card is active */}
          <p>{isActive ? data.description : ''}</p>
          {/* Read more link to toggle the second card modal */}
          <a className="read-more" onClick={(event) => {
            event.stopPropagation();
            toggleCard2();
          }}>
            Read more
          </a>
        </div>
      </div>
      {/* Rendering the CardModal component */}
      <CardModal data={data} isActive={isActive2} onClose={toggleCard2} />
    </NewCardContainer>
    </>
  );
};

export default BreakingNews;