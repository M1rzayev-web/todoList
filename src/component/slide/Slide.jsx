import React from 'react';
import "./slide.css"
function Slide() {
      const Array = [
        {
          id: 1,
          name: "Bertie Yates",
          images:
            "	https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
          years: 1990,
          day: 5,
          month: 4,
        },
        {
          id: 2,
          name: "Hester Hogan",
          images:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
          years: 2001,
          day: 6,
          month: 4,
        },
        {
          id: 3,
          name: "Larry Little",
          images:
            "	https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
          years: 1999,
          day: 7,
          month: 4,
        },
        {
          id: 4,
          name: "Sean Walsh",
          images:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
          years: 1995,
          day: 8,
          month: 4,
        },
        {
          id: 5,
          name: "Lola Gardner",
          images:
            "	https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
          years: 1993,
          day: 9,
          month: 4,
        },
    ];
   
    
    return (
        <div className="Slide">
           {Array.map((item)=>(
        <article  key={item.id}>
          <img src={item.images} alt="img" />
          <h3>{item.name}</h3>
      </article>
      ))}
        </div>
    )
    
}

export default Slide;