/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;
  var tail = null;
  var newAdd = null;

  return {
    getHead: function(){
      return head;
    },
    getTail: function(){
      return tail;
    },
    add: function(value){
      var newNode = {
        value: value,
        next: null
      };
      head = newNode;
      tail = newNode;
      return newNode;

    },
    remove: function(){

    },
    get: function(){

    },
    insert: function(){

    }
  };

  }

