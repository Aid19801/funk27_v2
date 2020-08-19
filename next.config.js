const withTypescript = require('@zeit/next-typescript');
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withTypescript(withReactSvg({
    include: path.resolve(__dirname, 'svgs'),
    webpack(config, options) {
        return config
    }
}))
