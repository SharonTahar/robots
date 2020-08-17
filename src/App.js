import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import Searchbox from './Searchbox';
import CardxList from './components/CardxList';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// import 'tachyons';

//change a function component to a class component
// function App() {

  // const arr = [
  //   {
  //     id:1,
  //     name:'sharon',
  //     username: 'sharon123',
  //     email:'sharon@gmail.com',
  //   },
  //   {
  //     id:2,
  //     name:'Rafael',
  //     username: 'rafael123',
  //     email:'rafael@gmail.com'
  //   },
  //   {
  //     id:3,
  //     name:'ziv',
  //     username: 'ziv123',
  //     email:'ziv@gmail.com'
  //   },
  //   {
  //     id:4,
  //     name:'omer',
  //     username: 'omer123',
  //     email:'omer@gmail.com'
  //   }
  // ]

  //defining a class on react
class App extends React.Component {
//first stage of defining a class
  constructor(){
    super();
    this.state = {
      users: [], 
      searchText : ''
    }
    console.log('constructor');
  }

//another stage in the mounting stage (with timeout to unserstand)
  // componentDidMount(){
  //   setTimeout( () => {
  //    this.setState({users:arr})
  //   },5000)
    
  //   console.log('componentDidMount');
  // }

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

//function that shows the search input (add a fetch to use the input query - not ideal)
  // onTextChange = (e) => {
  //   // this.setState({searchText:e.target.value})
  //   // console.log(e.target.value);
  //   this.state.searchText = e.target.value;
  // }

  //function console logs a button click
  onbuttonClick = (textvalue) =>{
    console.log('textvalue:', textvalue);
    this.setState({searchText: textvalue});
    // console.log('id =>', id);
    // console.log('click =>' , e.target);
    // this.setState({searchText:this.state.searchText})
  }

  render() {
    // console.log('render');
    const { users,searchText } = this.state;
    const filterUsers = users.filter ( item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
      <Container fluid={true} className="">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Robotsfriends</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline>
                <Searchbox onBtnClk={this.onbuttonClick}/>  
              </Form>
            </Navbar.Collapse>
          </Navbar>
        <CardxList robots={filterUsers} />
      </Container>
  )
}

        /* <Searchbox onClickBtn={this.onTextChange}/> */


//   return (
//     <div>
//     {
//       users.map( item => {
//         return <Hello id={item.id}
//                 name={item.name}
//                 username={item.username}
//                 email={item.email} />
//       })
//     }
//     </div>
//   );
// }
// return (
//     <div className="main">
//     {
//       users.map( (item, i) => {
//         return <Hello data={item} key={i}/>
//       })
//     }
//     </div>
//   );


}
export default App;



