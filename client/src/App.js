import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import './App.css'; 
import BreakingNews from './Component/BreakingNews';
import TopHeadlines from './Component/HeadLines';
import News from './Component/News';
import Footer from './Component/Footer1';
function App() {
  const [currentTopic,setCurrentTopic]=useState('Politics')
  const [headlinesData , setHeadlineData] = useState([])
  const [selectedNews,setSelectedNews]=useState([])
  const [headNews,setHeadNews]=useState({})
  const handleTopicChange = (newTopic) => {
    setCurrentTopic(newTopic);
    console.log("changeddd");
    // console.log(currentTopic);
  };

  useEffect(() => {
    fetch("/api/general")
      .then(response => response.json())
      .then(data => {
        setHeadlineData(data);
        setHeadNews(data[0])
      })
      .catch(error => {
        console.error('Error fetching general data:', error);
      });
  
    fetch(`/api/${currentTopic}`)
      .then(response => response.json())
      .then(data => {
        setSelectedNews(data);
        console.log("Fetched politics data:", data); // Log fetched politics data
      })
      .catch(error => {
        console.error('Error fetching politics data:', error);
      });
  }, [currentTopic]); 
  


  return (
      <div className='App'>
        <Navbar currentTopic={currentTopic} onTopicChange={handleTopicChange} />
        <h1> $  $</h1>
        <div className="content-container">
          <div className="topnews-container">
            <div className="newcard">
              <h1>Breaking News</h1>
              <BreakingNews data={headNews} />
            </div>
            <div className="top-headlines">
              <h1>Top Head Lines</h1>
              <TopHeadlines data={headlinesData}/>
            </div>
          </div>
         


          <h1>{currentTopic} News</h1>
          <News data={selectedNews.slice(6,11)}/>

          <Footer/>
        </div>
       
      </div>
    );
  }

export default App


