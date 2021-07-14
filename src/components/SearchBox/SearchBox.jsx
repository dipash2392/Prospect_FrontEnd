import React from 'react'
import filterImg from "../../images/filter.jpg"
import "./searchBox.css"

export default function SearchBox() {
    return (
        
            <div class="input-group margin" > 
                <input type="text" class="form-control-placeholdericon" aria-label="Default" placeholder=" &#xF002; Search Prospect Set"
                    aria-describedby="inputGroup-sizing-default"/>
            <div class="input-group-append">
                <img src={filterImg} style={{width:"60%"}} alt="Filter"/>   
            </div>
            </div>
    )
}
