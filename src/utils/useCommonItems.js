import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const useCommonItems = () => {
  const [visible, setvisible] = useState(false);
  const handleClose = () => {
    setvisible(false);
  };

  const dispatch = useDispatch();
  const obj = useSelector((state) => state.authentication);
  const [messageToast, setmessageToast] = useState({
    result: "",
    message: "",
  });
  const toastChangeFunct = (result, message) => {
    setmessageToast({
      result,
      message,
    });
  };
  const headers = {
    Authorization: `Bearer ${obj.token}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const [isLoading, setisLoading] = useState(false);
  return {
    isLoading,
    setisLoading,
    visible,
    headers,
    setvisible,
    handleClose,
    messageToast,
    toastChangeFunct,
    dispatch,
    obj,
  };
};

export default useCommonItems;
