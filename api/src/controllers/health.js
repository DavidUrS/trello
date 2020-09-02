module.exports = {
  checkAvailability: (req, res) =>
    res.json({ msg: 'Server listen on port 5000', status: 'OK' })
};
