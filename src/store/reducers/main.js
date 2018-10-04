const mammals = ['Tiger', 'Panda', 'Pig'];
const birds = ['Eagle', 'Flamingo', 'Penguin'];
const fish = [ 'Seahorse', 'Octopus', 'Stingray'];
const initialState = {
    selectedMammal : "Tiger",
    selectedBird : "Eagle",
    selectedFish : "Seahorse",
    mammals,
    birds,
    fish
};
	// Asegurate que entendes los parametros aquí!
	// con cualquier reducer esperamos 2 argumentos
	// somos capaces de dar un valor por defecto a el parametro en la forma vista abajo
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MAMMAL':
            return Object.assign({}, state, {
                selectedMammal: action.animal
            });
        case 'SET_BIRD':
            return Object.assign({}, state, {
                selectedBird: action.animal
            });
        case 'SET_FISH':
            return Object.assign({}, state, {
                selectedFish: action.animal
            });
        default:
            return state
    }
};
