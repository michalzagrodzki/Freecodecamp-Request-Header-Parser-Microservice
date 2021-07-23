const { defaultMethod } = require("./../utils/headerMethods");

// display date details
exports.details = (req, res) => {
  try {
    const response = {
      ipaddress: "",
      language: "",
      software: "",
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};
