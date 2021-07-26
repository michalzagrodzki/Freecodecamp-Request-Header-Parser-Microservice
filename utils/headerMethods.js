validateHeader = (req) => {
  if (!req.headers) throw "Missing request header";
};

determineIpAddress = (request) => {
  if (request.ip) return request.ip;
  throw "IP in request not present";
};
determineLanguage = (request) => {
  if (request.headers["accept-language"]) {
    const languages = request.headers["accept-language"].split(",");
    const response = `${languages[0]},${languages[1]}`;
    return response;
  }
  throw "Languages in request not present";
};
determineSoftware = (request) => {
  if (request.headers["user-agent"]) return request.headers["user-agent"];
  throw "User-agent in request not present";
};

exports.validateHeader = validateHeader;
exports.determineIpAddress = determineIpAddress;
exports.determineLanguage = determineLanguage;
exports.determineSoftware = determineSoftware;
