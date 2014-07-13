/*global describe, it */
'use strict';

(function () {
  describe("A suite", function() {

    beforeEach{

	}

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

    	expect(items[0].sellIn).toBe(items[i].sellIn);
    	expect(items[0].quality).toBe(items[i].quality);
    	};
    it("")


    });


  });
})();
