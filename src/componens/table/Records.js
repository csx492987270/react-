import React, { Component } from 'react';
import RecordTb from './../table/recordTb';
import RecordeForm from './../table/RecordeForm'
// import $ from 'jquery';
import * as RecordsAPI from './../../utils/RecordsAPI'
import axios from 'axios';
class Records extends Component {
    constructor() {
        super();
        this.state = {
            Records: [
            ],
            error: null,
            isLoaded: false
        }
    }
    componentDidMount() {
        // $.getJSON("https://www.apiopen.top/meituApi?page=1").then(
        //     response => this.setState({
        //         Records: response.data,
        //         isLoaded: true
        //     }),
        //     error => this.setState({
        //         isLoaded: true,
        //         error
        //     })
        // )
        axios.get(`${RecordsAPI.api}/meituApi?page=1`).then(
            response => this.setState({
                Records: response.data.data,
                isLoaded: true
            }),

        ).catch(error => this.setState({
            isLoaded: true,
            error
        })
            )
    }
    render() {
        const { error, isLoaded } = this.state;
        let recordCompment;
        // const error = 
        if (error) {
            recordCompment = <div>error:{error.responseText}</div>
        } else if (!isLoaded) {
            recordCompment = <div>loading....</div>
        } else {
            recordCompment =(<table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>title</th>
                        <th>hamount</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Records.map((record, i) => <RecordTb key={i + 'sb'}  {...record} />)}
                </tbody>
            </table>)

        }
        return (
            <div>
                <h2>Records</h2>
                <RecordeForm />
                {recordCompment}
            </div>
        );

    }
}
export default Records;