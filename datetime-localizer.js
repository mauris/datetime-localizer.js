/*
    DateTime Localizer jQuery plugin
    Copyright (c) 2014 Sam-Mauris Yong
*/


(function($){

    $(function(){
        $('.datetimelocalizer').each(function(){
            var $this = $(this),
                dt = new Date($this.html()),
                hours = dt.getHours(),
                min = dt.getMinutes() + '',
                pm = false,
                months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            if(hours > 11){
               hours = hours - 12;
               pm = true;
            }

            if(hours == 0) hours = 12;
            if(min.length == 1) min = '0' + min;

            $this.html(dt.getDate() + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear() + ', ' + hours + ':' + min + ' ' + (pm ? 'pm' : 'am'));
        });

    });

})(jQuery);
