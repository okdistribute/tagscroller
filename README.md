tagscroller
=============

tagdef.com scrolling widget

This jquery widget takes a Twitter hashtag and uses the tagdef.com API to look up
definitions for the tag. It then scrolls them one at a time in a div. An example
of its usage can be seen at http://truthy.indiana.edu

Requires jQuery

Usage
------------
   
    <html>
    <head>
    <script src="/path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/tagscroller.js" type="text/javascript"></script>
    <link href="/path/to/tagscroller.css" type="text/css" rel="stylesheet" />

    <script>
    $(function() {
        var options = { tag : "obama",
                        max : 3,
                        width : 200,
                        height : 100,
                        cut: 60 };
        $("div#tagscroller").tagscroller(options);
    });
    </script>
    </head>

    <body>
        <div id="tagscroller">
        </div>
    </body>
    </html>




Options (default):
 *    *tag* (required): Tag to scroll
 *    *max* (0) : Max number of defintions to scroll
 *    *width* (400): Width
 *    *height* (100): Height
 *    *cut* (0): The number of characters to cut long definitions.
 *    *css* ("tag"): The css rule to use for each item definition.
 *    *votes* (true): Show the upvotes and downvotes for each definition



