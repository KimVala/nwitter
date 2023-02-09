import { authService } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    authService.signOut();
    navigate("/");
  }

  return (
    <>
      <button onClick={onLogoutClick}>Log Out</button>
    </>
  );
};