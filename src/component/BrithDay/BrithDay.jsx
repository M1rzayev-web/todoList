import React from "react";
import "./brith.css";


function BrithDay() {
  const brithArray = [
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
  const today = new Date();
  const bugungiDay = today.getDate();
  const bugungiMonth = today.getMonth() + 1;
const year=today.getFullYear()
  const filteredBirthdays = brithArray.filter(
    (hisobla) => hisobla.day === bugungiDay && hisobla.month === bugungiMonth
  );
  const birthdayNames = filteredBirthdays.map((item) => item.name);

  return (
    <div className="BrithDay">
      {birthdayNames.length > 0 ? (
        <div>
          <span className="BrithDayItem">
            {birthdayNames.map((name) => (
              <h3 key={name}>Bugun "{name}" tug'ulgan kuni</h3>
            ))}
          </span>
        </div>
      ) : (
        <p>Afsus bugunga tug'ulgan kun mavjud emas</p>
      )}
      {brithArray.map((item)=>(
        <article className="BrithdayItemList" key={item.id}>
          <img src={item.images} alt="img" />
          <h3>{item.name}</h3>
          <p> xozirda  { year-item.years}-yosh</p>
      </article>
      ))}
    </div>
  );
}

export default BrithDay;
