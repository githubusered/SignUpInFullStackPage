import {useCallback, useEffect, useState} from 'react'

import {
    httpGetUsers,
    httpSubmitUser,
    // httpDeleteUser
} from './requests'


function useUsers() {
    const [users,saveUsers] = useState([]);
    const [isPendingUser,setPendingUser] = useState(false);

    const getUsers = useCallback(async ()=> {
        const fetchedUsers = await httpGetUsers();
         saveUsers(fetchedUsers)
    },[])

    useEffect(() => {
        getUsers()
    },[getUsers])

    const submitUsers = useCallback(async (e) => {
        e.preventDefault();
        setPendingUser(true);
        const data = new FormData(e.target);
        
       
        
        const firstname = data.get('firstname');
        const email = data.get('email');
        const password = data.get('password');
      
        // Check if user with the provided email already exists
        const userExists = users.some((user) => user.email === email);
        if (userExists) {
          console.log('User with this email already exists. Cannot register.');
          return;
        }
      
        const response = await httpSubmitUser({
          firstname,
          email,
          password
        });
        console.log('response is >>>>>', response);
      }, [users]);
      

    // const deleteUsers = useCallback(async (id)=> {
    //     return await httpDeleteUser(id)
    // },[])

    const checkAndEnterAccount = useCallback(async (e)=>{
        e.preventDefault();
        const data = new FormData(e.target);

        const email = data.get('email');
        const password = data.get('password');
        
        const userExists = users.some((user) => {
            return user.email === email && user.password === password;
          });
          if (userExists) {
            console.log('User entered the account');
          } else {
            console.log('User does not have an account');
          }
        }, [users]);

    return {
        users,
        isPendingUser,
        submitUsers,
        // deleteUsers,
        checkAndEnterAccount

    }
    
    
    
}

export default useUsers;