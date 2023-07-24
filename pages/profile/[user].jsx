import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { baseUrl } from '@/src/config/Server';
import { useState } from 'react';
import Profile from '@/src/component/app/Root/Profile/Profile';
const userInfo= () => {
  const router = useRouter()
  const {user} = router.query

  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch(`${baseUrl}/add-user/user/${user}`)
    .then(res => res.json())
    .then(data => setUserData(data))
    .catch(err => console.log(err))
  },[userData, user])
  console.log({userData})
  return (
    <div>
      <Profile userData={userData}/> 
    </div>
  );
};

export default userInfo;