$(document).ready(function () {
    var time1 = 0;
    var show = false;
    var names = new Array();
    var urls = new Array();
    $(document).keyup(function (e) {
        var time2 = new Date().getTime();
        if (e.keyCode == 17) {
            var gap = time2 - time1;
            time1 = time2;
            if (gap < 500) {
                if (show) {
                    $(".zk-search-tool").css("display", "none");
                    show = false;
                } else {
                    $(".zk-search-tool").css("display", "block");
                    show = true;
                    $("#zk-search-content").val("");
                    $("#zk-search-content").focus();
                }
                time1 = 0;
            }
        } else if (e.keyCode == 27) {
            $(".zk-search-tool").css("display", "none");
            show = false;
            time1 = 0;
        }
    });

    $("#zk-search-content").keyup(function (e) {
        var time2 = new Date().getTime();
        if (e.keyCode == 17) {
            var gap = time2 - time1;
            time1 = time2;
            if (gap < 500) {
                if (show) {
                    $(".zk-search-tool").css("display", "none");
                    show = false;
                } else {
                    $(".zk-search-tool").css("display", "block");
                    show = true;
                    $("#zk-search-content").val("");
                    $("#zk-search-content").focus();
                }
                time1 = 0;
            }
        }
    });

    $("#cb-close-btn").click(function () {
        $(".zk-search-tool").css("display", "none");
        show = false;
        time1 = 0;
    });

    $("#cb-search-btn").click(function () {
        $(".zk-search-tool").css("display", "block");
        show = true;
        $("#zk-search-content").val("");
        $("#zk-search-content").focus();
        time1 = 0;
    });

    $.getJSON("/search/zk-search.json").done(function (data) {
        if (data.code == 0) {
            for (var index in data.data) {
                var item = data.data[index];
                names.push(item.title);
                urls.push(item.url);
            }

            $("#zk-search-content").typeahead({
                source: names,

                afterSelect: function (item) {
                    $(".zk-search-tool").css("display", "none");
                    show = false;
                    window.location.href = (urls[names.indexOf(item)]);
                    return item;
                }
            });
        }
    });

});
