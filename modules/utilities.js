export const formatNumber = (number) => {
    let numToStr = String(Math.floor(number));
    for (let i = numToStr.length - 3; i >= 0; i -= 3) {
        numToStr = numToStr.slice(0, i) + ',' + numToStr.slice(i);
    }
    return numToStr;
};
