import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import axios from 'axios';
export default class RecordTb extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false
        }
    }
    handTogglt() {
        this.setState({
            edit:!this.state.edit
        })
    }
    handEdit(event){
        event.preventDefault();
        const record = {
             date:this.refs.createdAt.value,
             title:this.refs.type.value,
            amount:this.refs.publishedAt.value
        }
        console.log(record)
         axios.post('http://5b84d3a0db24a100142dce54.mockapi.io/mydata/v1/recodes',record).then(
            response => this.setState({
                // Records: response.data.data,
                // isLoaded: true
            }),

        ).catch(error => this.setState({
            // isLoaded: true,
            // error
        })
            )
    }
    renderRow() {
        return (
            <tr>
                <td>{this.props.createdAt}</td>
                <td>{this.props.type}</td>
                <td>{this.props.publishedAt}</td>
                <td>                    
                    <button type="button" className="btn btn-info mr-1" onClick={this.handTogglt.bind(this)}>Edit</button>
                    <button type="button" className="btn btn-danger">dele</button>          
                </td>
            </tr>

        );
    }
    renderForm() {
        return (
            <tr>
                <td><input type="text" className = 'form-control' defaultValue ={this.props.createdAt} ref="createdAt" /></td>
                <td><input type="text" className = 'form-control' defaultValue ={this.props.type} ref='type' /></td>
                <td><input type="text" className = 'form-control' defaultValue ={this.props.publishedAt} ref='publishedAt' /></td>
                <td>                    
                    <button type="button" className="btn btn-info mr-1" onClick={this.handEdit.bind(this)}>updated</button>
                    <button type="button" className="btn btn-danger" onClick={this.handTogglt.bind(this)}>cancel</button>          
                </td>
            </tr>

        );
    }
    render() {
        if(this.state.edit){
            return  this.renderForm()
        }else{
          return  this.renderRow()
        }
    }
}
RecordTb.propsTypes = {
    createdAt:PropsTypes.number,
    type:PropsTypes.string,
    publishedAt:PropsTypes.number
}
