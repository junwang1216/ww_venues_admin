var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: './**/**',
    platforms: ['osx64', 'win'],
    buildDir: './builds'
});

nw.on('log', function (message) {
    console.info(message);
});

nw.build().then(function (err) {
    if (err) {
        console.error(err);
    }
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});
