tagscroller
=============

tagdef.com scrolling widget

This widget takes a Twitter hashtag and uses the tagdef.com API to look up
definitions for the tag. It then scrolls them in a small widget.

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
                        height : 100 };
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
 *    *max* (0) : Max number of tags to scroll.
 *    *width* (450): Width of widget 
 *    *height* (200): Height of widget 



