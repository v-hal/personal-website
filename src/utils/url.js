module.exports = {
  addLeadingSlash: url => {
    var firstChar = url[0];
    return firstChar !== '/' ? '/' + url : url;
  },
};
