/*global describe, it */
'use strict';

(function () {
  describe("A suite", function() {

    it("has a SellIn value", function(){

    	var potato = new Item("Potato", 20, 10);
    	items.push(potato);
    	var fish = new Item("Fish", 20, 10);
    	items.push(fish);

    	for (var i = 0; i < items.length; i++) {
    		expect(items[i].sellIn).not.toBe(null);
    	};
    });

    it("has a quality value", function(){

    	var potato = new Item("Potato", 20, 10);
    	items.push(potato);
       	var fish = new Item("Fish", 20, 10);
    	items.push(fish);

    	for (var i = 0; i < items.length; i++) {
    		expect(items[i].quality).not.toBe(null);
    	};
    });

    it("system lowers sellIn and quality value every day", function(){

    	var potato = new Item("Potato", 20, 10);
    	items.push(potato);
    	var fish = new Item("Fish", 48, 8);
    	items.push(fish);

    	for (var i = 0; i < items.length; i++) {
    		expect(items[i].sellIn).toBe(items[i].sellIn);
    		expect(items[i].quality).toBe(items[i].quality);
    	};

    });


  });
})();
