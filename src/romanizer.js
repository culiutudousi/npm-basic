var romanize = require('romanize');

const transform = (number) => {
    return romanize(number);
};

export {
    transform
}