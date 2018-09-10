import React, { Component } from 'react';
import * as RecordsAPI from './../../utils/RecordsAPI';
import  VideoList from './videoList'
import axios from 'axios';
class videos extends Component {
      constructor() {
        super();
        this.state = {
            videosUrl: [
            ]
        }
    }
    componentDidMount() {
        axios.get(`${RecordsAPI.api}/satinGodApi?type=5&page=1`).then(
            response => this.setState({
                videosUrl: response.data.data      
            })

        ).catch(error => {
            
        })
            
    }
    render() {
     return (
        <div>
             {this.state.videosUrl.map((url, i) => <VideoList key={i + 'sb'}  {...url} />)}
        </div>
     )
         
    }
}
export default videos;