var BASE_URL = "https://api.twitch.tv/kraken/search/channels",
    CLIENT_ID = "3ayqtffruo2goxf0cvyp75wjm28g4pq",
    search_query = "starcraft";
//default call
search(search_query);
var l = document.getElementById('loader');
l.style.visibility = 'visible';
var c = document.getElementById('container');
c.style.visibility = 'hidden';

function search(e) {
    if (e.value) {
        search_query = e.value;
    } else {
        search_query = "starcraft";
    }

    _jsonp.call(BASE_URL, CLIENT_ID, search_query, "pstv_CallBack");
}


function display(result) {
    if (result) {
        l.style.visibility = 'hidden';
        c.style.visibility = 'visible';
    }
    var rarr = result.channels,
        dlist = "",
        dtotal = "";
    for (var i = 0; i < rarr.length; i++) {

        dlist += "<li><div class='tile'><div class='logo'><a href='" + rarr[i].url + "'><img src='" + rarr[i].logo + "'></img></a></div>" +
            "<div class='info'>" +
            "<span class='display_name'>" + rarr[i].display_name + "</span><br>" +
            "<span class='game'>" + rarr[i].game + "</span>-<span class='views'>" + rarr[i].views + "</span><br>" +
            "<span class='status'>" + rarr[i].status + "</span>" +
            "</div></div></li>";
    }

    dtotal = "<label class='rtotal_label'>Total results</label><br><span class='rtotal_val'><h1>" + rarr.length + "</h1></span>";
    var d = document.getElementById('data_block');
    var t = document.getElementById('total_result');
    d.innerHTML = dlist;
    t.innerHTML = dtotal;
}