//Local imports
import MongoDao from "./mongo_dao.js";
import { UserModel } from "./models/user_model.js";

export default class UserDaoMongo extends MongoDao {
  constructor() {
    super(UserModel);
  }

  async getUserByEmail(email) {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserById(id) {
    try {
        return await this.model.findById(id).populate("cart");
    } catch (error) {
        throw new Error(error)
    }
  }
  
  async getAllUsers() {
    try {
      //return await this.model.find({}, { email, role, cart });
      return await this.model.find({}, { first_name: 1, last_name: 1, email: 1, role: 1, cart: 1, _id: 0 });
    } catch (error) {
      throw new Error(error);
    }
  }

  async register(user) {
    try {
      const { email } = user;
      const userExist = await this.model.findOne({ email });
      if (userExist) return null;
      return this.model.create(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(email) {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteAllUsers() {
    try {
      return await this.model.deleteMany();
    } catch (error) {
      throw new Error(error);
    }
  }
}
