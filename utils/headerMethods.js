validateHeader = () => {
  return;
};

determineIpAddress = () => {
  return;
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
