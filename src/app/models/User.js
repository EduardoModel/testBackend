import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    // Hook to encrypt the user password before saving it inside the database
    this.addHook('beforeSave', async user => {
      if (user.password) {
        // Pass the password to be hashed and the streng of the hash
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  // Utility function to help to verify if the user password is the same inside the database
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
