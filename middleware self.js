const logger = (store) => (next) => (action) => {
	console.log("action fired ", action);
}


const logger = (store) => (next) => {
	return function(action){
		console.log("action fired ", action);
	}
}

const logger = (store) => { 
	return function(next){
		return function(action){
			console.log("action fired ", action);
		}
	}
}

const logger = function(store){
	return function(next){
		return function(action){
			console.log("action fired ", action);
		}
	}
}

logger(1)(2)(3)