const API_URL = 'http://localhost:5000'



async function httpGetUsers() {
    try{
        const response = await fetch(`${API_URL}/users`)
        const fetchedUsers  = await response.json();
        console.log('fetcheddddd Userssss ---> ',fetchedUsers);
        return fetchedUsers.sort((a,b) => {
            return a.id-b.id
        })
    }catch(err){
        console.log('Error',err);
        return [];
    }
}
async function httpSubmitUser(user) {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const createdUser = await response.json();
      return { ok: true, user: createdUser };
    } else {
      const error = await response.json();
      return { ok: false, error };
    }
  } catch (error) {
    console.log('Error: ', error);
    return { ok: false, error: 'Unexpected error occurred' };
  }
}


async function httpLoginUser(credentials) {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const { token } = await response.json();
        return { ok: true, token };
      } else {
        const error = await response.json();
        return { ok: false, error: error.error };
      }
    } catch (error) {
      console.log('Error: ', error);
      return { ok: false, error: 'Server error' };
    }
  }
  

// async function httpDeleteUser(userID) {
//     try{
//         return fetch(`${API_URL}/users/${userID}`,
//             {
//                 method: 'DELETE', 
//             })
//     }catch(err){
//         console.log('Error', err);
//         return {
//             ok: false,
//         }
//     }
// }



module.exports = {
    httpGetUsers,
    httpSubmitUser,
    // httpDeleteUser,
    httpLoginUser
}