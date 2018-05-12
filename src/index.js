let deps =[
    require('./slider/'),
];

module.exports = (opts) => {
    for(let i = 0; i < deps.length; i++)
        deps[i]().run(opts);
}
