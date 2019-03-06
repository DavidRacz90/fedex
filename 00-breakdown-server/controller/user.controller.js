
const userController = (req, res) => {
  getAllUser()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error));
};

const getAllUser = () => new Promise((resolve, reject) => {
  reject({
    name: 'userName'
  })
});

module.exports = {
  userController,
};
