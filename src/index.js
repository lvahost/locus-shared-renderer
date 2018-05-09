let deps =[
    require('./slider/'),
];

alert('deps');

module.exports = (opts) => {

    for(let i = 0; i < deps.length; i++)
        deps[i](opts);
}
