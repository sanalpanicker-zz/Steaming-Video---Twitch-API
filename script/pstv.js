/*
 * pstv.js
 * Author : Sanal Panicker
 * $Date: 2017/01/15 $
 * $Rev: 1 $
 */

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
    var rarr = result.channels;

    //setting total to html
    var dtotal = "<label class='rtotal_label'>Total results</label> : <span class='rtotal_val'>" + rarr.length + "</span>";
    var t = document.getElementById('total_result');
    t.innerHTML = dtotal;
    //call paginator widget
    _paginator.init(rarr, 10, "data_block");
}