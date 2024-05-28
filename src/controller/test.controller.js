const testService = require('../services/test.service');

const testController = async (req, res) => {
  const response = await testService();
  res.send(response);
};

module.exports = testController;
