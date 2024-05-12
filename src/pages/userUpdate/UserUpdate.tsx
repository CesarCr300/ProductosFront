import { useState } from "react";
import { UserUpdateContext } from "./context/UserUpdateContext";
import { UserUpdateForm } from "./components/UserUpdateForm";

export const UserUpdate = () => {
  const [loading, setLoading] = useState(false);
  return (
    <UserUpdateContext.Provider value={{ loading, setLoading }}>
      <UserUpdateForm />
    </UserUpdateContext.Provider>
  );
};
