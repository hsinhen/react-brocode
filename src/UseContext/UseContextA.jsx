import { createContext, useState } from "react";
import "./UseContext.css";
import "./UseContextB";
import UseContextB from "./UseContextB";
export const UserContext = createContext();
function UseContextA() {
  const [user, setUser] = useState("Bro code");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>Hello {user}</h2>
      <UserContext.Provider value={user}>
        <UseContextB user={user} />
      </UserContext.Provider>
    </div>
  );
}
export default UseContextA;
