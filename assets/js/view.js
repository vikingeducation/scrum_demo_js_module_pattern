"use strict";



var DEMO = DEMO || {};


DEMO.View = (function($) {

  var _$list;
  var _$form;
  var _$itemInput;

  var _createItem = function(item) {
    var $li = $('<li>')
        .attr('data-id', item.id)
        .addClass('list-item')
        .text(item.text);
    var $a = $('<a>')
      .attr('href', '#')
      .addClass('text-danger')
      .addClass('delete-link')
      .text(' x');
    $li.append($a);
    return $li;
  };

  
  var _createItems = function(items) {
    var listItems = [];
    for (var i = 0; i < items.length; i++) {
      var $li = _createItem(item);
      listItems.push($li);
    }
    _$list.append(listItems);
  };

  var _setCreateListener = function(onCreate) {
    _$form.submit(function(e) {
      e.preventDefault();
      var item = _$itemInput.val();
      if (item.length) {
        onCreate(item);
      }
      _$itemInput.val('');
    });
  };

  var _setDestroyListener = function(onDestroy) {
    _$list.on('click', '.delete-link', function(e) {
      var $a = $(this);
      var $li = $a.parent();
      var id = parseInt($li.attr('data-id'));
      onDestroy(id);
    });
  };

  var _setNoItems = function() {
    if (!_$list.find('li').length) {
      var $li = $('<li>')
        .addClass('text-danger')
        .attr('id', 'no-items')
        .text('No items');
      _$list.append($li);
    }
  };

  var _removeNoItems = function() {
    var $noItems = $('#no-items');
    if ($noItems.length) {
      $noItems.remove();
    }
  };

  return {
    init: function(config) {
      _$list = $('#list');
      _$form = $('#item-form');
      _$itemInput = $('#item');

      _setCreateListener(config.onCreate);
      _setDestroyListener(config.onDestroy);
      _createItems(config.items);
      _setNoItems();
    },

    addItem: function(item) {
      _removeNoItems();
      var $li = _createItem(item);
      _$list.append($li);
    },

    removeItem: function(id) {
      $('#list li[data-id="' + id + '"]').remove();
      _setNoItems();
    }
  };

})($);



