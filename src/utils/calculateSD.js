const calculateSD = (data) => {
  const n = data.length;
  const mean = data.reduce((a, b) => a + b, 0) / n;
  const variance = data.reduce((a, b) => a + (b - mean) ** 2, 0) / n;
  return Math.sqrt(variance).toFixed(2);
};

module.exports = calculateSD;
