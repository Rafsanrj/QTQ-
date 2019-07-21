import React, {Component} from 'react';
import './App.css';
class App extends Component{ 
     activateMsg = () =>{
    alert("Your order has been cancelled")}

    render(){
      return(
         <div>
         <div className='f4 tc div3'>
           <h1>Are you sure?</h1>
           <p>Your order is yet to be cancelled.Any credits(if applicable) will be added back to your account for use on your next delivery.</p>
         </div>  
         <div className = 'pa3'>
           <center>
             <img src = "https://as1.ftcdn.net/jpg/01/42/70/66/500_F_142706641_pDs13MNNEkoP8fmLkqmbFf7rnEq1zNwe.jpg" alt="Idlyset" width="250" height="250"/>    
           </center>

         </div>
         <div className = 'f5 pa1 div5'> 
           <ul>ORDER ID</ul>  
           <ul>
           
           </ul>  
           <ul>
             TOTAL CHARGE
          </ul>
            
         </div>
         <div className='f4 tc'>
             <ul>
               
               <button onClick={this.activateMsg} >
                  CANCEL DELIVERY
               </button>
             </ul>  
            
         </div>  
    
       </div>
        );
    }
}

export default App;
