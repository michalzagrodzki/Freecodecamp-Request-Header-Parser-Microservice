validateHeader = (req) => {
  if (!req.headers) throw "Missing request header";
};

determineIpAddress = (request) => {
  if (request.ip) return request.ip;
  throw "IP in request not present";
};
determineLanguage = () => {
  return;
};
determineSoftware = (request) => {
  if (request.headers["user-agent"]) return request.headers["user-agent"];
  throw "User-agent in request not present";
};

exports.validateHeader = validateHeader;
exports.determineIpAddress = determineIpAddress;
exports.determineLanguage = determineLanguage;
exports.determineSoftware = determineSoftware;
