import React, { Component } from 'react'
import './CreditCard.css'


export default class CreditCard extends Component {
    constructor(){
        super()
      this.state={

          number:'****************',
          name:'',
          expiry:''
      }  
    }

   NumberChange=(e)=>{
        this.setState({
            number:e.target.value
        })
    }

    NameChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    ExpiryChange=(e)=>{
        this.setState({
            expiry:e.target.value
          
        } )
    }
    
    NumberValidation=(num)=>{
        let res='';
        for(let i=0;i<16;i=i+4){
            res=res+num.slice(i,i+4)+' ';
        }
      return res;
        
    }

    NameValidation=(str)=>{
        let x=/^[a-z ]*$/gi;
        let res=x.test(str);
        let str1;
        if(res===true){
            str1=str.toUpperCase();
            console.log(res)
            console.log(str1)
        }
        return str1;
    }
    
    ExpiresValidation=(str) => {
           let tab=str.split(' ');
        let res='';
        if(tab[0]<13 && tab[1]>19){
            str=tab.toString();
        for(let i=0;i<tab.length;i=i+3){
        res=res+tab.slice(i,i+2)+'/';
        console.log(res)
    }

        }

        return res.substring(0,5);

    }


    render() {
        return (
            
           <div>
                <h1 class='title'>Credit Card</h1>

                <div class='section'>
                <div class='Card'>
                   <p class='card-number'>{this.NumberValidation(this.state.number)}</p>
                    <div class='info'>
                    <div>
                    <p class='name'>Card Holder </p>
                    <span>{this.NameValidation(this.state.name)}</span>
                    </div>
                    <div>
                    <p class='date'>Expires</p>
                    <span>{this.ExpiresValidation(this.state.expiry)}</span>
                    </div>
                    </div>
                </div>
                <form>
                    <label for='number'>CARD NUMBER</label>
                    <input type='number' name='number' id='number' placeholder='Valid Card Number' value={this.state.number} onChange={this.NumberChange}/>
                    <label for='name'>Name</label>
                    <input type='text' name='NAME' id='name' placeholder='Name' value={this.state.name} onChange={this.NameChange}/>
                    <label for='cardExpiry'>EXPIRATION DATE</label>
                    <input type='tel' name='cardExpiry' id='cardExpiry' placeholder='MM/ YY' value={this.state.expiry} onChange={this.ExpiryChange}/>
                    
                </form>
                
            </div>
            </div>
        )
    }
}
