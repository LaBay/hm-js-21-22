'use strict'

var unit = {
	GCD: function(x, y){
		if ((typeof(x) != "number") || (typeof(y) != "number")) console.log('Как же тебе не ая-яй?! Вводи только циферки!')
		else{
			var str = "НОД чисел "+ x +" и " + y;
			if(!x && !y) {
				console.log(str, NaN);
				return NaN;
			}else{
				if(x%1 || y%1){
					console.log(str, undefined,", т.к. они не являются целыми");
					return undefined;
				}else{
					x = Math.abs(x);
					y = Math.abs(y); 
					while (x != y)
						if(x > y) x = x - y;
						else y = y - x;
						return x;
				}
			}
		}
	},

	factor: function(z){


	},

	sort: function(arr){

	},
};



