/*
 * paginator_lib
 * Author : Sanal Panicker
 * $Date: 2017/01/15 $
 * $Rev: 1 $
 */

var _paginator = _paginator || {},
    per_page = 10,
    template = "",
    data,
    temp_id = "",
    items, total_pages, current_page = 1,
    prevB, nextB;



(function() {
    _paginator = {

        init: function(list, per_page, ul_id) {
            data = list;
            items = list.length;
            current_page = 1;
            total_pages = Math.ceil(items / per_page);
            temp_id = ul_id;

            var p = document.querySelector('#paginator');
            p.innerHTML = "<div class='counter'></div>" +
                "<button class='paginate left' onclick='_paginator.prev()'><i></i><i></i></button>" +
                "<button class='paginate right' onclick='_paginator.next()'><i></i><i></i></button>";
            prevB = document.querySelector('.paginate.left');
            nextB = document.querySelector('.paginate.right');
            this.updateCounter();
            this.load(1);
        },
        next: function() {
            if (current_page < total_pages) {
                current_page = current_page + 1;
                this.current = current_page;
                this.updateCounter();
                this.load(current_page);
            }
        },
        prev: function() {
            if (current_page > 1) {
                current_page = current_page - 1;
                this.updateCounter();
                this.load(current_page);
            }
        },
        load: function(current_page) {
            this.clear();
            var offset = (current_page - 1) * per_page;
            var d = document.getElementById(temp_id);
            if (data != undefined || data != null) {
                for (var i = 0; i < per_page; i++) {
                    //template
                    if (data[i + offset] == undefined || data[i + offset] == null) {
                        continue;
                    }
                    template += "<li><div class='tile'><div class='logo'><a href='" + data[i + offset].url + "'><img src='" + data[i + offset].logo + "'></img></a></div>" +
                        "<div class='info'>" +
                        "<span class='display_name'>" + data[i + offset].display_name + "</span><br>" +
                        "<span class='game'> Game Name : " + data[i + offset].game + " </span> | <span class='views'> " + data[i + offset].views + " Viewers</span><br>" +
                        "<span class='status'>" + data[i + offset].status + "</span>" +
                        "</div></div></li>";

                }
            } else {
                template = "No streaming found. Please try again later"
            }
            d.innerHTML = template;
        },
        clear: function() {
            template = "";
            var d = document.getElementById(temp_id);
            d.innerHTML = "";
        },
        updateCounter: function() {
            document.querySelector('.counter').innerHTML = current_page + ' / ' + total_pages;
            prevB.setAttribute('data-state', current_page === 1 ? 'disabled' : '');
            nextB.setAttribute('data-state', current_page === total_pages ? 'disabled' : '');
        }
    }
})();