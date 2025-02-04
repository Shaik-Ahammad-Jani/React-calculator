import { Component } from "react";
class Calculator extends Component{

    state={
        str:""
    }

    handleNum = (e) =>{
        this.setState({str:this.state.str+e.target.innerText})
    }
    handleSpe = (e) =>{
        this.setState({str:this.state.str+e.target.innerText})
    }
    handleClear = () =>{
        this.setState({str:this.state.str.slice(0,-1)})
    }
    handleAC = () =>{
        this.setState({str:""})
    }
    handleEval = () =>{
        try{
            this.setState({str:eval(this.state.str).toString()})
        }catch{
            this.setState({str:"Error"})
        }
    }

    render(){
        return (
            <>
            <h1 style={{textAlign:"center"}}>Calculator</h1>
            <div style={{border:'1px solid',height:'350px',width:400,paddingLeft:30,marginLeft:'40%'}}>
            <input type="text" placeholder="enter numbers" value={this.state.str} style={{width:300,height:30,marginTop:10}} /><br /> <br />
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >0</button>&emsp;
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >1</button>&emsp;
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >2</button>&emsp;
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >3</button>&emsp;
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >4</button>&emsp;<br /><br />
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >5</button>&emsp;
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >6</button>&emsp;
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >7</button>&emsp;
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >8</button>&emsp;
                <button onClick={this.handleNum} style={{border:'1px solid',width:50,height:30}}   >9</button><br /><br />
                <button onClick={this.handleSpe} style={{border:'1px solid',width:50,height:30}}   >+</button>&emsp;
                <button onClick={this.handleSpe} style={{border:'1px solid',width:50,height:30}}   >-</button>&emsp;
                <button onClick={this.handleSpe} style={{border:'1px solid',width:50,height:30}}   >*</button>&emsp;
                <button onClick={this.handleSpe} style={{border:'1px solid',width:50,height:30}}   >/</button>&emsp;
                <button onClick={this.handleSpe} style={{border:'1px solid',width:50,height:30}}   >%</button>&emsp;<br /><br />
                <button onClick={this.handleEval}style={{border:'1px solid',width:50,height:30}}   >=</button>&emsp;
                <button onClick={this.handleClear} style={{border:'1px solid',width:50,height:30}}>C</button>&emsp;
                <button onClick={this.handleAC} style={{border:'1px solid',width:50,height:30}}>AC</button>&emsp;
            </div>




            </>
        )
    }
}
export default Calculator