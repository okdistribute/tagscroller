(function( $ ) {
    
    $.fn.tagscroller = function(args) {

        var options = $.extend({
            'max' : 0,
            'width' : 450,
            'height' : 200,
            'speed' : 2000
        }, args);

        return this.each(function() {
            var tag = options["tag"];
            if (! tag ) 
            {
                throw "Must give 'tag' as an option to tagscroller. Check http://github.com/krmckelv/tagscroller for a demo."
            }

            var div = $(this);
            div.width(options.width);
            div.height(options.height);
            div.append("<ul class='tagscroller'>");
            var ul = div.find("ul");
            var url = "http://api.tagdef.com/" + tag + ".json?no404=1";

            function readData(data) {
                //tagdef api spec on May 29, 2012:
                //data := {"num_defs" : # , "defs" : [ def1, def2, def3, ...]}
                //def  := {"def": { "text" : str,  "time": str, "upvotes": #,
                //                   "downvotes": #, "uri" : str, "hashtag" : str}}

                var num_defs = data.num_defs;
                var defs = data.defs; 

                if (num_defs == undefined){
                    div.html("Add a defintion at " + defs.def.uri);
                }
                else
                {
                    //do not pass max in options
                    var max;
                    if (options.max == 0)
                        max = num_defs;
                    else
                        max = Math.min(options.max, num_defs);

                    var text;
                    var i = 0;
                    def_length = 60;

                    //initialize the list
                    for(i; i < max; i++) {
                        text = defs[i].def.text;
                        if (text.length > def_length) { 
                            text = text.substr(0, def_length);
                            text = text + "..."
                        }
                        ul.append("<li class='item'>" + text + "</li>");
                    }


                    //scroll
                    function scroll(index) {

                        var li_item;

                        if (i == max) i = 0;

                        li_item = div.find("li:eq(" + i + ")");

                        li_item.addClass("scroll");
                        setTimeout(function() {
                                li_item.removeClass("scroll");
                                i++;
                                scroll(i);
                        }, options.speed);
                    }

                    scroll(0);
                }

            }

            $.ajax({
                type: "GET",
                url: url,
                dataType: "jsonp",
                success:readData
            });

        });


    };

})(jQuery);
