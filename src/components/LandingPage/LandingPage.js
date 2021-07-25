import React, {useState} from 'react'
import NewsDiv from '../NewsDiv/NewsDiv'
import './LandingPage.css'

//import <NewsDiv/> Page here to be rendered here post mappin

let data = [];
let data2 = [];
let objectIDs = [];


function LandingPage() {

    const [keyword, setKeyword] = useState();
    const [changed, setChanged] = useState();

    const getKeyword = async(e) => {
        e.preventDefault();
        //add if statmenet for doing notthing is no value entered in search field
        
        const api_call_fir_objectID = await fetch(`http://hn.algolia.com/api/v1/search?query=${keyword}`);

        data = await api_call_fir_objectID.json();
        console.log((data.hits));

        data.hits.forEach((hit) => {
            objectIDs.push(hit.objectID);
        });

        //TO RENDER CHANGES
        // setChanged(1);
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
                {
                    objectIDs.map(async(objectID) => {
                        const api_call = await fetch(`http://hn.algolia.com/api/v1/items/${objectID}`);
                        
                        data2 = await api_call.json();

                        /*Too See Objects being fetched in Console*/
                        console.log(data2);
                        
                        return(
                            <NewsDiv key = {data2.id} {...data2}></NewsDiv>
                        )
                    })
                }
           </div>
        </> 
    )
}

export default LandingPage
