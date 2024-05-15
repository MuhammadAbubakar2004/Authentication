// import axios from "axios";

// const API_KEY = 'AIzaSyDhq6WQLyUAK9xalk6Aytkf3WUDW7jbBJM';

// async function createUser(email, password){
//     const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    
//     const response= await axios.post(url,
//         {
//             email: email,
//             password: password,
//             returnSecureToken: true,
//         }
//     );
//     console.log(response.data);
// }

// export async function createUser(email, password) {
//     await authenticate('signUp', email, password);
// }
// export async function logIn(email, password) {
//     await authenticate('signInWithPassword', email, password);
// }
import axios from 'axios';

const API_KEY = 'AIzaSyDhq6WQLyUAK9xalk6Aytkf3WUDW7jbBJM';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  }
  ).catch(err =>  console.log(err.message));
  console.log(response.data);

  // console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

export async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}