tagdef-scroll
=============

tagdef.com scrolling widget

This widget takes a 

Requires jQuery

Usage
------------
   
    <html>
    <head>
    <script src="/path/to/tagscroller.js" type="text/javascript"></script>
    <script src="/path/to/jquery.js" type="text/javascript"></script>

    <script>
    $(function() {
        $("div#tagscroller").tagscroller(options);
    });
    </script>
    </head>

    <body>
        <div id="tagscroller">
        </div>
    </body>
    </html>




Options (dict):
 *    *tag* (required): Tag to scroll
 *    *num*: Number of tags to scroll. Default: 0 (no limit)



