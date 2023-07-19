import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";


function App() {

const [num,setNum] = useState(0);

const increNum = () =>{
  setNum(num+1);
}

const decNum = () => {

  if(num > 0){
    setNum(num-1);
  }
  else{
    alert("Sorry,Zero Limit Reached !!")
    setNum(0);
  }

  
}

  return (
    <>
     <div className="main_div">
      <div className="center_div">
        <h1>{num}</h1>
        <div className="btn_div">
          <button onClick={increNum}><i class="fa-solid fa-plus"></i></button>
          <button onClick={decNum}><i class="fa-solid fa-minus"></i></button>
        </div>
      </div>
     </div>
   
    </>
  );
}

export default App;
