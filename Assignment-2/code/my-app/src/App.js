import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div class="main-container">
  <div className="container">
  {/* Start your React code here */}
  <img class="image"src={employee.profileImg}/>
  <div class="detail">
  <h1 class="name">{employee.name}</h1>
  <p class="about">Location</p>
  <p class="content">{employee.location}</p>
  <p class="about">BloodGroup</p>
  <p class="content">{employee.bloodGroup}</p>
  <p class="about">Age</p>
  <p class="content">{employee.age}</p>
</div>
</div>
</div>
)
}



export default App;
