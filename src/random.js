const random = (a = 0, b = 100) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min) + min);
};

export default random;
