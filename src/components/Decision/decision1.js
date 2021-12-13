// import React from "react";
// import './decision.css';
// import Aos from "aos";
// import "aos/dist/aos.css";

// function Decision() {
//     return (
//         <div className = 'dec-container'>
//             <div className = 'dec-container-first' data-aos = "fade-up">
//                 <img src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80"></img>
//                 <div class="centered"><h1>HOTELS</h1></div>
//             </div>
//             <div className = 'dec-container-second' data-aos = "fade-up">
//                 <img src="https://images.unsplash.com/photo-1581887300455-5eb259f6eac0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"></img>
//                 <div class="centered"><h1>AGENTS</h1></div>
//             </div>
//         </div>
//     );
// }

// export default Decision;


import React from "react";
import "./decision1.css";

import { Link } from "react-router-dom";

function Decision1() {

  return (
    <section className = "decision1">
      <div>
        <a href = "/hotels"><h1>Hotel to the left Hotel to the left Hotel to the left Hotel to the left Hotel to the left Hotel to the left Hotel to the left Hotel to the left</h1></a>
      </div>
    </section>
  );
};

export default Decision1;