import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import axios from 'axios';
export default class RecordeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:"",
            title:"",
            amount:""
        }
    }
    valid() {
        return this.state.date && this.state.title && this.state.amount
    }
    handChange(event) {
        let name,obj;
        name = event.target.name;
        this.setState ((
            obj ={},
            obj[""+ name] = event.target.value,
            obj
        ))
        console.log(event.target.value)
    }
    handSubmit(event) {
            event.preventDefault();
            axios.post('http://5b84d3a0db24a100142dce54.mockapi.io/mydata/v1/recodes',this.state).then(
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
        return (
           <form  className="form-inline"  onSubmit = {this.handSubmit.bind(this)} > 
             <div  className= 'form-group'> 
               <input type="text" className='form-control' onChange = {this.handChange.bind(this)} placeholder="date" name='date' value={this.state.date} />  
            </div>
             <div  className= 'form-group'> 
               <input type="text" className='form-control' onChange = {this.handChange.bind(this)} placeholder="title" name= 'title' value={this.state.title} />  
            </div>
             <div  className= 'form-group'> 
               <input type="text" className='form-control' onChange = {this.handChange.bind(this)} placeholder="amount" name='amount' value={this.state.amount} />  
            </div>
            <button type='submit' className="btn btn-primary" disabled = {!this.valid()}> 
                context
            </button>
           </form> 

        );
    }
}
RecordeForm.propsTypes = {
    createdAt:PropsTypes.string,
    type:PropsTypes.string,
    publishedAt:PropsTypes.string
}
