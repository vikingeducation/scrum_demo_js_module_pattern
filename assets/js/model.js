"use strict";



var DEMO = DEMO || {};


DEMO.Model = (function(_) {

  var _id = 0;
  var _items = [];

  return {
    items: [],

    addItem: function(item) {
      item = {
        text: item,
        id: _id
      };
      _id++;
      _items.push(item);
      return item;
    },

    removeItem: function(id) {
      var index = _.findIndex(_items, function(item) {
        return id === item.id;
      });
      _items.splice(index, 1);
    }
  };

})(_);



