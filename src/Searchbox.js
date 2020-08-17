import React from 'react';

//search with the input 
// const Searchbox = ({onTxtCng, onBtnClk}) => {
//     return(
//         <div>
//             <input type="text" 
//             placeholder="Search"
//             onChange={onTxtCng}/>
//             <button type='search'onClick={() => onBtnClk()}>search</button> 
//         </div>
//     );
// }
// export default Searchbox;

//search with a button 
// const Searchbox = ({onClickBtn}) => {
//     return(
//         <div>
//             <input type="text" 
//             placeholder="Search"/>
//             <button id='search'onChange={onClickBtn}>search</button>
//         </div>
//     );
// }
// export default Searchbox;

//using the class component 
class Searchbox extends React.Component {
    constructor(){
        super();
        this.state = { 
            txt: '',
        }
    }

    handleText = (e) => {
        // console.log('handletext:', e.target.value);
        this.setState({txt:e.target.value})
    }

    render(){
    const {txt} = this.state;
    const { onBtnClk } = this.props
    return(
        <div>
            <input type="text" 
            placeholder="Search"
            onChange={this.handleText}
            className="mr-sm-2 form-control form-inline"/>
            <button className="btn-outline-success btn" type='search' onClick={() => onBtnClk(txt)}>search</button> 
        </div>
    );
}

}
export default Searchbox;