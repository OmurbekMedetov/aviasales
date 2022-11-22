export const priceFormat = (price: number) => {
  let priceStr = price.toString();
  let res = priceStr.slice(0, 2) + ' ' + priceStr.slice(2);
  return res;
};
