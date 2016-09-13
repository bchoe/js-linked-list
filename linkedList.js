/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){


  var head = null;
  var tail = null;
  var newAdd = null;
  var linkedListModule = {};


    linkedListModule.getHead = function(){
      return head;
    };

    linkedListModule.getTail = function(){
      return tail;
    };

    linkedListModule.add = function(value){
      var newNode = {
        value: value,
        next: null
      };
      if (head === null){
        head = newNode;
        tail = newNode;
      }else{
        tail.next = newNode;
        tail = newNode;
      }

      return newNode;
    },

    linkedListModule.remove = function(index){
      var currNode = linkedListModule.get(index);
      var prevNode = linkedListModule.get(index-1);

      if (currNode === false){
        return  false;
      }

      if (currNode.next === null){
        tail = prevNode;
      }

      if (index === 0){
        if (currNode.next === null){
          head = null;
          tail = null;
        }else{
        head = head.next;
        }
      }

      prevNode.next = currNode.next;
    },

    linkedListModule.get = function(index){
      var count = 0;
      var position = head;
      while (count < index && position.next !== null){
        position = position.next;
        count ++;
        }
        if (count === index){
          return position;
        }else{
          return false;
        }

    },

    linkedListModule.insert = function(value, index){
      var currNode = linkedListModule.get(index);
      var prevNode = linkedListModule.get(index-1);
      var newNode = {
        value: value,
        next: null
      };

      if (currNode === false){
        return false;
      }
      if (index === 0){
        newNode.next = head;
        head = newNode;
      } else {
      prevNode.next = newNode;
      newNode.next = currNode;
      }
      if (currNode.next === null){
        tail = newNode;
        currNode.next = newNode;
      } else {
      prevNode.next = newNode;
      newNode.next = currNode;
      }

  }


      return linkedListModule;
}