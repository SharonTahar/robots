import React from 'react';
import { connect } from 'react-redux'
import { getText } from './redux/action'


const Searchbox = (props) => {
    const { getText  } = props
    // console.log(the_text);
    return(
        <div>
            <input type="text" 
            placeholder="Search"
            onChange={getText}
            className="mr-sm-2 form-control form-inline"/>
        </div>
    );
}


//gets the state from the store (state is calling the stores state)
const mapStateToProps = (state) => {
    return {
    searchText: state.getText
    }
  }
  
//updates state changes in the store 
const mapDispatchToProps = (dispatch) => {
    return {
        getText:() => dispatch(getText('check')),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Searchbox); 