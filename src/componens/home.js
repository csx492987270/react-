import React, { Component } from 'react';
import Sliders from './Sliders/Sliders';
import { Link } from 'react-router-dom';
import * as RecordsAPI from './../utils/RecordsAPI';
import axios from 'axios';
import './../css/Home.css';
const Img = [
    require('./../img/1.jpg'),
    require('./../img/2.jpg'),
    require('./../img/3.jpg'),
    require('./../img/4.jpg'),
   
]


class Home extends Component {
    constructor() {
        super();
        this.state = {
            gitUrl:[]
        }
    }
    componentDidMount() { 
        axios.get(`${RecordsAPI.api}/meituApi?page=1`).then(
            response => {
                // console.log(response.data.data[0].url)
                // for(var i=0 ;i < 5;i++){
                    // Img.push(response.data.data[0].url)
                    // Img.push(response.data.data[1].url)
                    // Img.push(response.data.data[2].url)
                   // Img.push(response.data.data[3].url)
                // };
               
        }
        ).catch(error => this.setState({
           
        })
         )
    }
    render() {
        return <div>
            <Sliders
                images={Img}
                speed={1}
                delay={2}
                autoPlay={true}
                autoParse={true}
            />
            <div className = 'disRow'>           
                <div><Link to='/Records'><h2>tret</h2></Link></div>
                <div><Link to='/Echart'><h2>tret</h2></Link></div>
                <div><Link to='/Videos'><h2>tret</h2></Link></div>
            </div>
            <div className = 'disRow'>           
                <div><Link to='/Photo'><h2>tret</h2></Link></div>
                <div><Link to='/Photo'><h2>tret</h2></Link></div>
                <div><Link to='/Photo'><h2>tret</h2></Link></div>             
            </div>

        </div>
    }
}
export default Home;