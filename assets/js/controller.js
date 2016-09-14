"use strict";



var DEMO = DEMO || {};


DEMO.Controller = (function(Model, View) {

  var _addItem = function(item) {
    item = Model.addItem(item);
    View.addItem(item);
  };

  var _removeItem = function(id) {
    Model.removeItem(id);
    View.removeItem(id);
  };

  return {
    init: function() {
      View.init({
        onCreate: _addItem,
        onDestroy: _removeItem,
        items: Model.items
      });
    }
  };

})(DEMO.Model, DEMO.View);




