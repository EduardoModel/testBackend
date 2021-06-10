import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    // Define a schema to validade the information that will be recieved by the backend
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    // Verify if the data pass inside the defined schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation failed',
      });
    }

    const checkDuplicatedEmail = await User.findOne({
      where: { email: req.body.email },
    });

    if (checkDuplicatedEmail) {
      return res.status(400).json({
        error: 'Email is duplicated',
      });
    }

    // Create the entry inside the database
    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
