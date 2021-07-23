const {
  validateHeader,
  determineIpAddress,
  determineLanguage,
  determineSoftware,
} = require("./../utils/headerMethods");

// display request header details
exports.details = (req, res) => {
  try {
    validateHeader(req);

    const ipAddress = determineIpAddress(req);
    const language = determineLanguage(req);
    const software = determineSoftware(req);

    const response = {
      ipaddress: ipAddress,
      language: language,
      software: software,
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};
