import React, {useState} from 'react'
import NewsDiv from '../NewsDiv/NewsDiv'
import './LandingPage.css'

//import <NewsDiv/> Page here to be rendered here post mappin

function LandingPage() {

    const [keyword, setKeyword] = useState();

    const getKeyword = async(e) => {
        e.preventDefault();
        //add if statmenet for doing notthing is no value entered in search field
        
        const api_call_fir_objectID = await fetch(`http://hn.algolia.com/api/v1/search?query=${keyword}`);

        const data = await api_call_fir_objectID.json();
        console.log((data.hits));

        const objectIDs = [];

        data.hits.map((hit) => {
            console.log(hit.objectID);
        });

        // `http://hn.algolia.com/api/v1/items/:${hit.objectID}
        

    }

    return (
        <>    
            <div className = "header">
                Search Hacker News
            </div>
            <div className = "search_bar-container">
                <div className = "search_bar">
                    <form onSubmit = {getKeyword}>
                        <input type = "text" className = "keyword" name = "keyword" id="value" onChange = {(e) => setKeyword(e.target.value)}></input>
                        <button type = "submit" className = "btn">Search</button>
                    </form>
                </div>
            </div>
            <div className = "news_container">
                {/* Map Function to be Inserted here and <NewsDiv/> component added here */}
                <NewsDiv/>
            </div>
        </> 
    )
}

export default LandingPage
