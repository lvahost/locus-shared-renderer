module.exports = () => {

    return {
        run(opts) {
            this.opts = opts;
            let testimonial = this.testimonial;
            let self = this;
            jQuery.fn.hkTestimonial = function (overwrite) {
                testimonial(this, self, overwrite);
            }

            $('.hkTestimonial').hkTestimonial();

            $(window).resize(function() {
                $('.hkTestimonial').hkTestimonial();
            });
        },

        testimonial(element, self, overwrite) {

            let $el = $(element);
            if ($el.data('hkTestiominal') && !overwrite)
                return false;

            console.log('testimonials found and rendered');

            if (!$el.attr('testimonialitems')) {
                $el.attr('testimonialitems', 3);
            }
            let elWidth = $el.width();
            let elItems = $el.attr('testimonialitems') || 3;

            let itemWidth = elWidth / elItems;
            let length = $el.find('.testimony').length;


            $el.find('.testimony').each((index, testEl) => {
                let lpos = (index * itemWidth) + "px";
                testEl.style.left = lpos;
                testEl.style.width = itemWidth + "px";
                testEl.originalLeft = lpos;
            });

            if (!$el.find('.commands').length)
                self.createControls($el);

            let curIndex = 0;
            let count = elItems;

            console.log('testimonial count: ',count);
            console.log('testimonial length: ',length);

            // Activate the controls
            $el.find('.leftCtrl').unbind('click').on('click', () => {
                if (count > elItems) {
                    $el.find('.testimony').each((index, testEl) => {
                        $(testEl).stop().animate({
                            left: '+=' + itemWidth + "px"
                        })
                    });

                    count--;
                }
            })

            $el.find('.rightCtrl').unbind('click').on('click', () => {
                if (count < length) {
                    $el.find('.testimony').each((index, testEl) => {
                        $(testEl).stop().animate({
                            left: "-=" + itemWidth + "px"
                        });
                    });
                    count++;
                }
            })

            $el.data('hkTestimonial', true);
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