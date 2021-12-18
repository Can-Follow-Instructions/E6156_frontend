import {useEffect, useState} from "react";
import {commGet} from "./common/commFunc";
import {Typography} from "@mui/material";

export default function () {
  const [user, setUser] = useState('guest');

  useEffect(() => {
    const displayUsername = async () => {
      const user = await commGet('userinfo', '/userinfo');
      if (user) {
        setUser(user.firstName + ' ' + user.lastName);
      }
    };
    displayUsername();
  }, []);


  return (
    <Typography>
      Hello, {user}
    </Typography>

  )
}