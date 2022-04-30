

import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './body.css';
function Body() {
    const [user, setUser] = useState([]);

    const fetchData = async () => {
        await axios.get('https://api.spacexdata.com/v3/launches?limit=15&launch_success=true')
            .then((response) => {
                setUser(response.data)
            })
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <h1>SpaceX Launch Programs</h1>
            <div className="container">

            <div className='box1'>
                <h4 className='text4'><u>Launch year </u></h4>
    <u></u>
    
                            {user?.map(data => (
                                <div key={data.flight_number}>

                                    <button type="button" className="btn1">{data.launch_year}</button>
                                </div>
                            ))
                            }
                            <h5>Succesful Launch</h5>
                            <button type="button" className="btn1">True</button>
                            <button type="button" className="btn1">False</button>
                            <h5>Succesful Landing</h5>
                            <button type="button" className="btn1">True</button>
                            <button type="button" className="btn1">False</button>
                        </div>
                {user?.map(data => (
                    <div key={data.flight_number}>
                       
                       
                        <div className="box navh">
                            <div className='time-per'>
                                <div>
                                    <img src={data.links.mission_patch} style={{ width: '150px', height: "150px" }} alt=""></img>
                                    <h2> {data.rocket.rocket_name}</h2>
                                    <h1> Mission Ids:</h1>
                                    <p> &#10625;&#10627;list Mission Ids &#10628;</p>
                                    <div className='rte'>
                                        <h5>Launch year:<span className="text">{data.launch_year}</span></h5>
                                        <h5>Succesful Launch:<span className="text">&#10627;launch_success&#10628;</span></h5>
                                        <h5>Succesful Landing:<span className="text">&#10627;launch_landing&#10628;</span></h5>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
                }

            </div>
            <h1 className='text1'>Devloped by:&#10627;Dheeraj Paneru &#10628;</h1>

        </>
    )
}

export default Body