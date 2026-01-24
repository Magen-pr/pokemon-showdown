export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	frz: {
		name: 'frz',
		/*
		start: "  [Pokemon] was chilled!",
		alreadyStarted: "  [POKEMON] is already chilled!",
		end: "  [POKEMON] warmed up!",
		endFromItem: "  [POKEMON]'s [ITEM] warmed it up!",
		endFromMove: "  [POKEMON]'s [MOVE] warmed it up!",
		cant: "[POKEMON] is chilled!",
		*/
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, `[of] ${source}`);
			} else {
				this.add('-status', target, 'frz');
			}
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
		onModifySpA(spa, pokemon) {
			return this.chainModify(0.5);
		},
	},
};
