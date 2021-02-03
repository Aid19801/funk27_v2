const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
    include: [path.resolve(__dirname, 'svgs'), path.resolve(__dirname, 'components/podcast-player')],
    webpack(config, options) {
        return config
    }
});
