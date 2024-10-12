/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { ApiContext } from "../Api/ApiContext";
import { authBaseUrl, eventsBackendUrl } from "../../utils/urls";
import axios from "axios";


function UserState({ children }) {
  const { accessToken } = useContext(ApiContext);

  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState("");
  const [userData, setUserData] = useState({
    loggedIn: false,
    name: "",
    email: "",
    profilePictureUrl: "",
    roles: [],
    registeredEvents: [],
  });

  async function fetchUserData() {
    try {
      setUserLoading(true);
      if (accessToken) {
        const userProfile = jwtDecode(accessToken);

        let roles = [];
        if (typeof userProfile.role === "string") {
          userProfile.role?.split(",").forEach((role) => {
            roles.push(role);
          });
        } else {
          roles = userProfile.role;
        }
        
        
        const response = await axios.get(
            `${eventsBackendUrl}/api/registration`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
         );

        const registeredEvents = response.data;
        // console.log("Registered Events: ", registeredEvents);
        setUserData(() => {

          return {
            email: userProfile.email,
            name: userProfile.name,
            profilePictureUrl: userProfile.picture,
            loggedIn: true,
            roles: roles,
            registeredEvents: registeredEvents
          };
        });
      } else {
        setUserData(() => {
          return {
            loggedIn: false,
            name: "",
            email: "",
            profilePictureUrl: "",
            roles: [],
            registeredEvents: [],
          };
        });
      }
    } catch (err) {
      setUserError("Error fetching user data");

      //  console.log(err);
    } finally {
      setUserLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  function logout() {
    setUserLoading(true);
    setUserData({
      loggedIn: false,
      name: "",
      email: "",
      profilePictureUrl: "",
      roles: [],
      registeredEvents: [],
    });
    setUserError("");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUserLoading(false);
    window.location.href = `${authBaseUrl}/auth/logout?redirect_to=` + window.location;
  }

  return (
    <UserContext.Provider value={{ userData, userLoading, userError, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserState;
