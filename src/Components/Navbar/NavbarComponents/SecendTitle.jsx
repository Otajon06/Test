import React from "react";
import './SecendTitle.css'
import { Search } from "react-feather";
const SecendTitle = () => {
    return (
        <div className="Secend-title">
            <form action="">
                <label htmlFor="">
                    <input type="seach" name="" id="" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        border: '1px solid #D92525',
                        borderRadius:'50px',
                        width:'250px',
                        fontSize:'20px',
                        marginRight:'10px',
                        paddingLeft:'15px',
                        paddingRight:'15px',
                        height:'35px',
                        color:'#41BFB3'
                    }}/>
                </label>
            </form>
            <Search/>
        </div>
    )
}

export default SecendTitle;