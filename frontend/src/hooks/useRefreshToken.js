import axios from "../api/axios";
import { useAuthContext } from "./useAuthContext";

export const useRefreshToken = () => {
  const { setAuth } = useAuthContext();

  const refresh = async () => {
    const response = await axios.get("/api/auths/refresh", {
      withCredentials: true,
    });

    if (response.statusText === "OK") {
      setAuth((prev) => {
        console.log(`refresh prev ${JSON.stringify(prev)}`);
        console.log(`refresh ${JSON.stringify(response.data)}`);
        return {
          username: response.data.username,
          email: response.data.email,
          watchlist: response.data.watchlist,
          userId: response.data.userId,
          accessToken: response.data.accessToken,
        };
      });
    }

    return response.data.accessToken;
  };

  return refresh;
};
