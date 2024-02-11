import {Component} from 'react'
import UserClass from '../UserClass'

export default class About extends Component {

  constructor(){
    super()
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <>
      <UserClass name={"Saikat"} email={"saikatghosh5434@gmail.com"}/>
      </> 
    )
  } 
}
