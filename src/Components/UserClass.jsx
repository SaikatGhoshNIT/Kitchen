import React from 'react'

class UserClass extends React.Component {

  constructor(props){
    super(props)

    this.state = {  //! Never update the states directly like  this.state.count = this.state.count + 1
      // count : 0,
      // count2 : 1
      userInfo : "default"
    }

    //console.log("Child Constructor");
  }

  async componentDidMount(){
    //console.log("Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/SaikatGhoshNIT")
    const jsonData = await data.json()
    console.log(jsonData);
    this.setState({
      userInfo : jsonData
    })
  }

  render() {
    //console.log("Child Render");
    // const {name} = this.props;
    return(
      <>
        <div style={{margin : "auto", padding: "50px", textAlign: "center"}}>  
          <img src="https://avatars.githubusercontent.com/u/113719553?v=4" alt="Profile Pic"  style={{height : "150px" , width : "150px", borderRadius : "50%"}}/>
          <h2>Name : {this.state.userInfo.name}</h2>  
          <h3>Bio : {this.state.userInfo.bio}</h3>                                                                                                                                                                                                                                                                                                                                                                              
          {/* <h2>Name : {name}</h2>
          <h3>Location : Durgapur</h3>
          <h4>Contact : {this.props.email}</h4> */}
          {/* <h4>Count : {this.state.count}</h4>
          <button onClick={()=>{
            //! State update in class based application should be as a object passed with in this.setState() method
            this.setState({
              count: this.state.count+1,
              count2: this.state.count2+1 
            })
          }}>Increase Count</button>
          <button onClick={()=>{
            this.setState({
              count: this.state.count-1,})
            }}>Decrease count</button> */}
        </div>
      </>
    )
  }
}

export default UserClass;