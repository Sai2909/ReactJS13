
import { Link } from 'react-router-dom';
export default function HeaderComponent(){

  const sai = {
    color: "white",
    backgroundColor: "black",
    height:'55px',
    
    
    
    
  };
    
    return(
      <>
      <div style={sai}>
        
      <ul class="nav">
        <li class="nav-item">
           
        <button type='button' className='btn btn-outline-danger'> <Link to='/header' class="nav-link active" aria-current="page" >Header</Link></button>
        </li>
        <li class="nav-item">
         <button type='button' className='btn btn-outline-info'><Link to='/home' class="nav-link">Home</Link></button> 
        </li>
        <li class="nav-item">
        <button type='button' className='btn btn-outline-warning'> <Link to='/register' class="nav-link" >Register</Link></button> 
        </li>
        <li class="nav-item">
        <button type='button' className='btn btn-outline-dark'><Link to='/product' class="nav-link" >Product</Link></button>  
        </li>
        <li class="nav-item">
        <button type='button' className='btn btn-outline-dark'><Link to='/calc' class="nav-link" >Calculator</Link></button>  
        </li>
       
      </ul>
      </div>
      <div>
        <h2>heey hi</h2>
      </div>
      
      
</>
        
    )
}
