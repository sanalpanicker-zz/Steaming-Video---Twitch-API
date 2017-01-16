/*
 * jsonp_lib
 * Author : Sanal Panicker
 * $Date: 2017/01/15 $
 * $Rev: 1 $
 */
var _jsonp = _jsonp || {};
(function() {
    _jsonp = {
        call: function(base_url, client_id, search_query, call_backfn) {
            this[call_backfn] = function(data) {
                console.log(data);
                display(data);
                this.clean();
                //delete this[call_backfn];
            }
            var url = base_url + "?q=" + search_query;
            url = url + "&client_id=" + client_id;
            url = url + "&limit=" + 100;
            url = url + "&callback=" + "_jsonp." + call_backfn;
            var scriptElement = document.createElement("script");
            scriptElement.id = "jsonp";
            scriptElement.src = url;
            document.head.appendChild(scriptElement);

        },
        clean: function() {
            var scriptElement = document.getElementById("jsonp");
            scriptElement.parentNode.removeChild(scriptElement);
        }
    };
})();