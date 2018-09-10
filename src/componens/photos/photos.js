import React, { Component } from 'react';
import * as RecordsAPI from './../../utils/RecordsAPI';
import GitList from './gitList';
import axios from 'axios';
 class Photo extends Component {
    constructor() {
        super();
        this.state = {
            gitUrl:[]
        }
    }
    componentDidMount() {
   
        axios.get(`${RecordsAPI.api}/satinGodApi?type=4&page=1`).then(
            response => this.setState({
             gitUrl:response.data.data
        })

        ).catch(error => this.setState({
           
        })
         )
    }
    render() {
        return (
            <div>
                {this.state.gitUrl.map((gitUrl, i) => <GitList key={i + 'sb'}  {...gitUrl} />)}
            </div>
        );

    }
 }
 export default Photo;