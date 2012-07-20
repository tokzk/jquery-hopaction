/*!
 * jQuery HopAction Plugin
 * https://github.com/tex314/jquery-hopaction
 *
 * Copyright 2012, OKAZAKI Takurou
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

(function($){
    $.fn.extend({
        hopAction:function(){
            
            var $target = $(this);
            $target.animate({
                'top': '-10px'
            }, {
                'dulation': 200,
                'easing': 'easeOutCubic',
                'complete': function() {
                    $target.animate({
                        'top': '0px'
                    }, {
                        'dulation': 400,
                        'easing': 'easeOutBounce'
                    });
                }
            });
            
            return this;
        }
    });
})(jQuery);