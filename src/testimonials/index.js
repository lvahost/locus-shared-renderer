module.exports = () => {

    return {
        run(opts) {
            this.opts = opts;
            let testimonial = this.testimonial;
            let self = this;
            jQuery.fn.hkTestimonial = function() {
                testimonial(this,self);
            }
        },

        testimonial(element, self) {
            
            let $el = $(element);
            if($el.data('hkTestiominal'))
                return false;
            
            if(!$el.attr('testimonialitems')) {
                $el.attr('testimonialitems',3);
            }
            let elWidth = $el.width();
            let elItems = $el.attr('testimonialitems') || 3;

            let itemWidth = elWidth / elItems;
            let length = $el.find('.testimony').length;


            $el.find('.testimony').each((index,testEl) => {
                let lpos = ( index * itemWidth ) + "px";
                testEl.style.left = lpos;
                testEl.style.width = itemWidth + "px";
                testEl.originalLeft = lpos;
            });

            if(!$el.find('.commands').length)
                self.createControls($el);
            
            let curIndex = 0;
            let count = 1;
            // Activate the controls
            $el.find('.leftCtrl').on('click',() => {
                $el.find('.testimony').each((index,testEl) => {
                    if(count > 1) {
                        $(testEl).stop().animate({
                            left: '-=' + itemWidth +"px"
                        })
                        count--;
                    }
                })
            })

            $el.find('.rightCtrl').on('click',() => {
                if(count < length) {
                    $(testEl).stop().animate({
                        left: "+=" + itemWidth +"px"
                    });
                }
            })
        },

        createControls(el) {
            let controls = $(`
                <div class="commands">
                    <i class="fa fa-chevron-left leftCtrl"></i>
                    <i class="fa fa-chevron-right rightCtrl"></i>
                </div>
            `);

            $(el).append(controls);
        },

        activateControls(el) {
            let controls = $(el).find('.commands');

            
        }
    }
}