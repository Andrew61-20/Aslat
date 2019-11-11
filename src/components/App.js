import React, {Component }  from "react";
import Header from './Header';
import Productlist from './Productlist';
import Results from './Results';
let arr = [];

export default class App extends Component {
  
    state = {
        sumAll: 1600,
        sumRem: 800,
        countRem: 0,
        id: null
    }
   
    handleChangeSumAllDown = (evt, pValue, id) => {
	    this.setState (prevState =>({
            sumAll:  prevState.sumAll - 800,
            sumRem: pValue*800-800,
            id: id
        }))
    }
    
    handleChangeSumAllUp = (evt, pValue, id) => {
        this.setState (prevState =>({
            sumAll:  prevState.sumAll + 800,
            sumRem: pValue*800+800,
            id: id
    }))}     

    handleRemove = ({evt, id}) => {
        const {sumAll, sumRem, countRem} = this.state
        arr.push(id)
        {this.state.id === id ?
        this.setState  (prevState =>(({
            sumAll: sumAll-sumRem,
            countRem: prevState.countRem+1,
            id: id
        }))):
        this.setState  (prevState =>(({
            sumAll: sumRem,
            countRem: prevState.countRem+1,
            id: id
        })))}       
        {countRem === 1 && this.setState ({sumAll: 0})}
    }
   
    render () {
        return (
            <div className="page">
                <Header />
                <br/>
                <h1 className='abovetable'>
                    SHOPPING CART
                </h1>
                {!arr.includes('1') && <Productlist id='1' 
                onChangeSumAllDown={this.handleChangeSumAllDown}
                onChangeSumAllUp={this.handleChangeSumAllUp}
                onHandleRemove={this.handleRemove}
                />}
				<hr className="line" />
				{!arr.includes('2') && <Productlist id='2' 
                onChangeSumAllDown={this.handleChangeSumAllDown}
                onChangeSumAllUp={this.handleChangeSumAllUp}
                onHandleRemove={this.handleRemove}
                />}
				<hr className="line" />
                <Results sumAll={this.state.sumAll}/>
            </div>
        )
    }
}
