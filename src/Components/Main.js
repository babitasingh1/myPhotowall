import React, {Component} from 'react'
 import Employee from './Employee'
import AddEmployee from './AddEmployee'
import {Route} from 'react-router-dom'
  

class Main extends Component{
    constructor() {
        super()
        this.state = {
            Person: [{name:'Babita',
                Empid:158476,
                City:'Utrecht'},

                {name:'Radha',
                 Empid:23789,
                 City:'Banglore'},

                 {name:'Aarti',
                  Empid:75463,
                  City:'Pune'}
],
screen: 'Employee' //Employee,addEmployee
        }

        this.removeEmployee = this.removeEmployee.bind(this);
        
        
        this.Navigate = this.Navigate.bind(this);
    }
    
    removeEmployee(personRemoved){
        console.log(personRemoved.City)
        this.setState((state) => ({
            Person: state.Person.filter(Person => Person !== personRemoved )
        }))

    }  

    addEmployee(postSubmitted){
        this.setState(state =>({
            Person: state.Person.concat([postSubmitted]) 
            
        }))
    }

    Navigate(){
        this.setState({
            screen: 'AddEmployee'
        })
    }

    render(){
        return <div>
              <Route exact path="/" render={() => (
        <div>
            <h1>Employee List </h1>
            <Employee persons = {this.state.Person} onremoveEmployee={this.removeEmployee} onNavigate = {this.Navigate} />
       </div> )}/>
    

             <Route path = "/AddEmployee" render ={({history}) => (<AddEmployee onaddEmployee={(addedEmployee)=>{
                 this.addEmployee(addedEmployee)
                 console.log(addedEmployee);
                 history.push('/')

             }} /> )}/>
            

            </div>
    }
}

 export default Main;