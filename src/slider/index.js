/**
 * Render a slider
 */

module.exports = () => {

    return {

        run(opts) {
            alert('running slider');
            if(!opts.el)
                return false;

            let el = (opts.el.jquery) ? opts.el : $(opts.el);
            el.find('.hkslider').each((index,element) => {

                // `element` Element is now the slider
                let liWidth = $(element).find('li').width();

                let li = $(element).find('li').each((index,element) => {
                    if(index > 0) {
                        $(element).attr('left', (index * liWidth) +"px");
                    }
                })
            });

        }
    }
}