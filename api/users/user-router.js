const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../secrets/secrets');
const restricted = require('../middleware/restricted-middleware');

const Users = require('./user-model');

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.register(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //produce token
        const token = generateToken(user)

        const decoded = jwt.verify(token, secrets.jwtSecret)
        console.log(decoded)

        res.status(200).json({
          id: user.id,
          user: user.username,
          name: user.name,
          role: user.role,
          token:token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {

  const payload = { //key value store
    subject: user.id,
    username: user.username,
    role: user.role
  }

  const options = {
    expiresIn: '7d'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}

router.get('/users', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ loggedInUser: req.username, users });
    })
    .catch(err => res.send(err));
});

module.exports = router;