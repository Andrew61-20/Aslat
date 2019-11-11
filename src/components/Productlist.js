import React, {Component} from "react";
import Counter from './Counter'
import ProductName from './ProductName'
import Sumator from './Sumator'

export default class Productlist extends Component {
            
    state = {acc: 1}
    
    handleDecrement = (e)  => {
        const {acc} = this.state
        const {onChangeSumAllDown, id} = this.props
        acc > 1 &&
        this.setState  (prevState => ({
			acc: prevState.acc - 1
		})) 
        acc !== 1 && onChangeSumAllDown(e.target.value, acc, id)
     }
  
    handleIncrement = (e) => {
        const {acc} = this.state
        const {onChangeSumAllUp, id} = this.props
        this.setState  (prevState =>({
            acc: prevState.acc + 1,
        }));
        onChangeSumAllUp(e.target.value, acc, id)
    }
        
    render () {
       return (
           <div className="main">
              <ul className="content">
                  <li className="picture" ><img src={`../../images/10102.png`} alt="" /></li>
                  <li className="pName"><ProductName /></li>
                  <li><Counter 
                        onDecrement={this.handleDecrement} 
                        onIncrement={this.handleIncrement}
                        onValue={this.state.acc}
                        onId={this.props.id}
                            />
                   </li>
                   <li><Sumator onValue={this.state.acc}/></li>
                   <li>
                       <button className='remove' id={this.props.id} 
                        onClick={(e, id) => this.props.onHandleRemove(e.currentTarget, id)}>
                           Удалить
                       </button>
                   </li>
               </ul>
		   </div>
       );
}}
