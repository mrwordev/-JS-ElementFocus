var WorFocuser = (function(document, window) {
    var $ = {
        target: null,
        overlay: null,
        init: function() {
            $.overlay = createOverlay();
        },
        createOverlay: function() {
            var check = document.getElementById('WorOverley');
            if (check !== null) {
                return;
            }
            var overlay = document.createElement('div');
            overlay.id = "WorOverley";
            overlay.style.position = 'absolute';
            overlay.style.zIndex = "999999";
            overlay.style.boxShadow = "0 0 0 3000px rgba(0,0,0,0.8)";
            overlay.style.pointerEvents = "none";
            overlay.style.display = "none";
            document.getElementsByTagName('body')[0].appendChild(overlay);
            return overlay;
        },
        relocation: function(e) {
            if (e !== null || e !== undefined) {
                $.target = e;
            }
            if ($.target === null) {return;}
            var height = $.target.offsetHeight;
            var width = $.target.offsetWidth;
            var top = $.target.offsetTop;
            var left = $.target.offsetLeft;
            $.overlay.style.height = height;
            $.overlay.style.width = width;
            $.overlay.style.top = top;
            $.overlay.style.left = left;
            $.overlay.style.display = "block";
            window.addEventListener("resize", function($) {
                return function() {
                    console.log("resize");
                    $.relocation();
                }
            }($));
        },
        toggle: function(e) {
            var element = document.getElementById(e);
            if (element === null) {
                return;
            }
            if ($.overlay === null) {
                $.overlay = $.createOverlay();
            }
            if ($.overlay.style.display === "block") {
                $.lostFocus();
                return;
            }
            $.relocation(element);
            return;
        },
        lostFocus: function() {
            var overlay = document.getElementById('WorOverley');
            if (overlay === null) {
                return;
            }
            overlay.style.display = "none";
        }
    }
    return $;
})(document, window);