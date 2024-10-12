import AuthHandler from "./authHandler";
import { authBaseUrl } from "../utils/urls";

export default class AccountHandler {
    static logInUser = () => {
        if (!this.isUserLoggedIn()) {
            window.location.href = `${authBaseUrl}/auth/login?redirect_to=` + window.location;
        }

    };

    static logOutUser = () => {
        if (this.isUserLoggedIn()) {
            AuthHandler.clearAllTokens();
            window.location.href = `${authBaseUrl}/auth/logout?redirect_to=` + window.location;
        }
    };

    static isUserLoggedIn = () => {
        return AuthHandler.getRefreshToken() != null;
    };


}