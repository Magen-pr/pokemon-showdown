export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	frz: {
		// Añil uses Legends: Arceus frostbite instead of freeze
		name: 'frz',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, `[of] ${source}`);
			} else {
				this.add('-status', target, 'frz');
			}
			if (target.species.name === 'Shaymin-Sky' && target.baseSpecies.baseSpecies === 'Shaymin') {
				target.formeChange('Shaymin', this.effect, true);
			}
		},
		onModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') return this.chainModify(0.5);
		},
		onAfterMove(source, target, move) {
			if (move.flags['defrost'] && move.category !== 'Status' && source.status === 'frz') {
				source.cureStatus();
			}
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.flags['defrost']) target.cureStatus();
		},
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
	},
	snowscape: {
		inherit: true,
		onModifyMove(move) {
			if (!['blizzard', 'icebeam', 'icepunch', 'freezedry', 'powdersnow', 'triattack', 'freezingglare'].includes(move.id)) {
				return;
			}
			for (const secondary of move.secondaries || []) {
				if (secondary.chance) secondary.chance = Math.min(secondary.chance * 2, 100);
			}
		},
	},
};
