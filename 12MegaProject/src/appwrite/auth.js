/* eslint-disable no-useless-catch */
/* eslint-disable no-empty */
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service ::createAccount::error", error);
    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite service ::Login::error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service ::getCurrentUser::error", error);
    }
  }

  async Logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service ::Logout::error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
