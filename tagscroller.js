(function( $ ) {
    
    $.fn.tagscroller = function(args) {

        var options = $.extend({
            'num' : 0,
            'width' : 450,
            'height' : 200 
        }, args);

        return this.each(function() {
            var tag = options["tag"];
            if (! tag ) 
            {
                throw "Must give 'tag' as an option to tagscroller. Check http://github.com/krmckelv/tagscroller for a demo."
            }
            var num = options.num;
            var width = options.width;
            var height = options.height; 

            var div = $(this);

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
                    var text = defs[0].def.text;
                    div.html("<p>" + text + "</p>");
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
