import axios from "axios"
import React, { useState, useEffect } from "react";

// export default function People() {
//     const [people, getPeople] = useState('');

//     const url = './data.json';

//     useEffect(() => {
//         getAllPeople()
//     }, []);

//     const getAllPeople = () => {
//         axios.get(`${url}people`)
//             .then((res) => {
//                 const allPeople = res.data.people;
//                 getPeople(allPeople)
//             })
//             .catch(error => console.error(`Error: ${error}`));
//     }
//         return(
//             {people}
//         )
// }

export default function People() {
    const [person, setPerson] = useState();
    
    const settingPerson = () => {
        setPerson()
    }
}