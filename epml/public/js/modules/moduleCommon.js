function moduleCommon(){console.log(window.items);var e=document.getElementById("list");Sortable.create(e,{animation:150,handle:".list-item-move",draggable:".list-item",onUpdate:function(){var e=[];$($(".list-item-name").get().reverse()).each(function(){e.push($(this).text())}),window.items=e,localStorage.setItem("epml",window.items),moduleCommon.writeItens()}}),moduleCommon.writeItens()}window.items=[],null!=localStorage.getItem("epml")&&(window.items=localStorage.getItem("epml").split(",")),window.moduleCommon.writeItens=function(){if(null!=window.items&&""!=window.items){$(".list").empty();for(var e=0;e<window.items.length;e++)""!=window.items[e]&&$(".list").prepend("<div class='list-item'><div class='list-item-name'>"+window.items[e]+"</div><div class='list-item-check'></div><div class='list-item-cancel'></div><div class='list-item-move'></div></div>")}else $(".list").empty()},moduleCommon();