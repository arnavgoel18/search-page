import React from 'react'
import NewsDiv from '../NewsDiv/NewsDiv'
import './LandingPage.css'

//import <NewsDiv/> Page here to be rendered here post mapping

function LandingPage() {
    const getKeyword = (e) => {
        
    }

    return (
        <>    
            <div className = "header">
                Search Hacker News
            </div>
            <div className = "search_bar-container">
                <div className = "search_bar">
                    <form onSubmit = {() => getKeyword()}>
                        <input type = "text" className = "keyword" name = "keyword"></input>
                        <button type = "submit" className = "btn">Search</button>
                    </form>
                </div>
            </div>
            <div className = "news_container">
                {/* Map Function to be Inserted here and <NewsDiv/> component added here */}
                <NewsDiv/>
                <NewsDiv/>
                <NewsDiv/><NewsDiv/><NewsDiv/>
            </div>
        </> 
    )
}

export default LandingPage
