module.exports = role => {
    return (req, res, next) => {

      if (role === req.users.role) {
        next();
      } else {
        res.status(403).json({ you: "are not authorized" });
      }
    };
  };