let deps =[
    require('./slider/'),
];
console.log('loaded');

module.exports = (opts) => {
    
    alert('sample');
    for(let i = 0; i < deps.length; i++)
        deps[i]().run(opts);

    
}
