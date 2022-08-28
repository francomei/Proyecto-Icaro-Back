const bcrypt = require('bcrypt')
const users = require("../../models").users;
const messages = require("../../models").messages;

const api = {
  // users

  getusers(req, res) {
    return users.findAll()
      .then(users => res.send(users))
      .catch(error => res.send(error))
  },

  postUser: (req, res) => {
    // console.log(req.body);
    // const hashedPass = bcrypt.hash(req.body.password, 10)
    return users.findOrCreate({
      where: {
        username: req.body.username,
      },
      defaults: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        country: req.body.country,
        city: req.body.city
      }
    })
      .catch(e => res.send(e))
  },

  login(req, res) {
    return users.findOne({
      where: { username: req.body.username }
    })
      .then((data) => {
        userFound = data
        if (!data) {
          console.log('No existe el usuario');
          return res.status(400).send('No existe el usuario')
        }
        hash = userFound.dataValues.password;
        password = req.body.password

        if (userFound) {
          console.log('Login exitoso');

				} else {
					console.log('Fallo login, existe usuario pero password incorrecto');
					return res.status(400).send('error login')
				}
			})
			.catch(error => res.status(400).send(error))
	},

  // messages

  postMessage: async (req, res) => {

    try {
      const data = await users.findOne({
        where: {
          username: req.body.receiverId,
        }
      })

      messages.create({
        receiverId: data.id,
        text: req.body.textj
      })

      res.json(data)
    } catch (error) {
      console.log(error);
    }
  }


}

module.exports = api
