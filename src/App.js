import React from 'react';
import './App.css';
import Searchbox from './Searchbox';
import CardxList from './components/CardxList';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from 'react-redux'


//defining a class
class App extends React.Component {
//first stage of defining a class
  constructor(){
    super();
    this.state = {
      users: [], 
      // searchText : ''
    }
  }


//will render again after first render of mounting due to the setstate
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({users:data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleText = (e) =>{
    this.setState({searchText:e.target.value})
    
    console.log(e.target.value);
  }


  render() {
    // console.log('render');
    const { searchText } = this.props;
    const { users } = this.state;
    const filterUsers = users.filter ( item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
      <Container fluid={true} className="">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Robotsfriends</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Searchbox />  
            </Navbar.Collapse>
          </Navbar>
        <CardxList robots={filterUsers} />
      </Container>
  )
}

}

const mapStateToProps = (state) =>{
  return{
    searchText: state.searchText
  }
}


export default connect(mapStateToProps, null) (App);



