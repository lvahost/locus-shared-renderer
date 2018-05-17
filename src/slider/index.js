/**
 * Render a slider
 */

module.exports = () => {

    return {

        run(opts) {
            this.sliders = [];
           
            let loadsliders = this.loadsliders;
            // $('body').on('DOMNodeInserted', '*', this.loadsliders(event));
       
            jQuery.fn.hkSlider = function() {
                loadsliders(this);
            };
        },

        loadsliders(element) {
            if(element.data('hkSlider'))
                clearInterval(element.data('hkSlider'));
            
                // `element` Element is now the slider
                let liWidth = $(element).find('li').width();

                let lists = [];

                let li = $(element).find('li').each((index,listel) => {

                    let lpos = (index * liWidth) +"px";
                    listel.style.left = lpos;
                    listel.originalleft = lpos;


                    lists.push(listel);
                });

            
                let length = lists.length;
                let count = 1;
                let tim = setInterval(() => {
                    if(count < length) {
                        lists.forEach((item) => {
                            $(item).stop().animate({left:"-="+liWidth+"px"},800)
                        })
                        count++;
                    }
                    else {
                        count=1;
                        lists.forEach((item) => {
                            $(item).stop().animate({left:item.originalleft},1200);
                        });
                    }
                    
                },3000);


                element.data('hkSlider',tim);
              return true;
        }
    }
}