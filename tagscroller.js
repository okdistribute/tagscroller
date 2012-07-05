(function( $ ) {
    
    $.fn.tagscroller = function(args) {

        var options = $.extend({
            'max' : 0,
            'width' : 450,
            'height' : 200,
            'speed' : 4000,
            'cut' : 0,
            'css' : 'tag',
            'votes' : true
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

                    //populate the list with definitions
                    for(i; i < max; i++) {
                        def = defs[i].def;

                        text = def.text

                        //cut the text to length
                        if (options.cut != 0 && text.length > options.cut) { 
                            text = text.substr(0, options.cut);
                            text = text + "..."
                        }

                        //append the definition item
                        text_item = $("<div class='text'>" + text + "</li>");
                        item = $("<li class='item " + options.css + "'>");

                        if(options.votes) {
                            arrow_down = $("<a>").attr("href", def.uri).attr("target", "_blank").append("<div class='arrow-down'>");
                            arrow_up = $("<a>").attr("href", def.uri).attr("target", "_blank").append("<div class='arrow-up'>");
                            votes_item = $("<div class='votes'>")
                                            .append(arrow_up).append(def.upvotes)
                                            .append("<br>")
                                            .append(def.downvotes).append(arrow_down);
                            item.append(votes_item);
                        }

                        item.append(text_item);
                        ul.append(item);
                    }

                    //scroll
                    function scroll(index) {

                        var li_item;

                        if (index == max) index = 0;

                        li_item = ul.find("li:eq(" + index + ")");
                        li_item.addClass("scroll");

                        setTimeout(function() {
                                li_item.removeClass("scroll");
                                index++;
                                scroll(index);
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
