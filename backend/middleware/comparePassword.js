import bcrypt from "bcrypt";

const comparePassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
};

export default comparePassword;