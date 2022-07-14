import React from 'react'
import Container from '@mui/material/Container';
import "./NewsContent.css"
import NewsCard from '../Newscard/NewsCard';

const NewsContent = ({ newsArray, loadmore, setLoadMore, newsResults }) => {
  return (
    <Container  maxWidth="md">
        <div className="content">
            <div className="downloadMessage">
                <span className="downloadText">
                    For the best experience use <span id='inshort'>Inshorts</span>app on your smartphone
                </span>
                <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="app store" height="80%" />
                <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="playstore" height="80%" />

            </div>
            
               {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        
        
        {loadmore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore" 
              onClick={() => setLoadMore(loadmore + 20)}
            >
              Load More
            </button>
            
          </>
        )}
            {/* <NewsCard/> */}
        </div>
       
    </Container>
  )
}

export default NewsContent