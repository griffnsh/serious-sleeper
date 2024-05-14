const waitForAll = async (...ps) => {
  return Promise.all(ps);
};
export {
  waitForAll as w
};
