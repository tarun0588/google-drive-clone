import Header from "./components/Header";
import Sidebar from "./Sidebar";
import Data from "./Data";
import { useState } from "react";
import {auth,provider} from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(({ user }) => {
        setUser(user);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <>
      {user ? (
        <>
          <Header />
          <div className="App">
            <Sidebar />
            <Data />
          </div>
        </>
      ) : (
        <div className="loginWrap">
          <img
            src="https://logowik.com/content/uploads/images/google-drive-new1266.jpg"
            alt="Google Drive Logo"
          />
          <button onClick={signIn}>Login to Google Drive</button>
        </div>
      )}
    </>
  );
}


export default App;
