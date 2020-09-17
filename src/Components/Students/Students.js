import React from "react";
import "./Students.css";
import Student from "./Student/Student";
import axios from "axios";
import Loading from "../Loading/Loading";

export default class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: null,
    };
    this.currentPage = 1;
    this.pageItem = 2;
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        
        this.setState({
         userList : users.data,
        });
        console.log("rizesh anjam shod...!");
        // this.setState({userList.users.})
        console.log(this.state);
      })
      .catch((error) => {
        console.log("error Kiriii...!");
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {
          this.state.userList !== null
          ?this.state.userList.map((userList)=>{
           return( <Student 
              key={userList.id}
              name={userList.name}
              id={userList.id}
              email={userList.email}
              phone={userList.phone}
            />)
          }): <Loading /> 
        }
      </div>
    );
  }
}













// import React from "react";
// import "./Students.css";
// import Student from "./Student/Student";
// import axios from "axios";

// export default class Students extends React.Component {
  
//   constructor() {
//     super();
//     this.userList = {};
//     this.currentPage = 1;
//     this.pageItem = 2;
    
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((users) => {
        
//         this.userList  = users.data;
//         console.log("rizesh anjam shod...!");
//         console.log(this.userList);
//         // console.log(this.state);
//       })
//       .catch((error) => {
//         console.log("error Kiriii...!");
//         console.log(error);
//       });
    
//     this.state = this.userList;
   
//   }
  

//   render() {
//     return (
//       <div>

//            return( <Student 
//               key={userList.id}
//               name={userList.name}
//               id={userList.id}
//               email={userList.email}
//               phone={userList.phone}
//             />)
       
//         }
//       </div>
//     );
//   }
// }



