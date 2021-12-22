module.exports = {
    isValid,
  };
  
  function isValid(mv) {
    return Boolean(mv.title && typeof mv.title === "string");
  }