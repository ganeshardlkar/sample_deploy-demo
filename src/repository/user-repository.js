import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(data) {
        try {
            const response = await User.findOne({email: data});
            console.log(response);
            return response;
        } catch (error) {
            throw error;
        }
    }

}

export default UserRepository;