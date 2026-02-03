export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	hieloextremo: {
        num: 10003,
        id: 'hieloextremo',
        name: 'Hielo Extremo',
        shortDesc: 'x10 daño en Ice moves. +1 prio si full HP.',
        onBasePower(basePower, attacker, defender, move) {
            if (move.type === 'Ice') {
                return basePower * 10;  // Siempre x10 daño
            }
        },
        onModifyPriority(priority, attacker, defender, move) {
            if (move.type === 'Ice' && attacker.hp === attacker.maxhp) {
                return priority + 1;  // +1 prio solo full HP
            }
        },
    },
	albino: {
        num: 10004,
        id: 'albino',
        name: 'Albino',
        shortDesc: 'Aumenta el daño de los ataques de tipo Hielo.',
        onBasePower(basePower, attacker, defender, move) {
            if (move.type === 'Ice') {
                return this.chainModify(1.2);  // +20% en basePower de Hielo
            }
        },
    },
	iceberg: {
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		flags: {},
		name: "Iceberg",
		rating: 3,
		num: 10005,
	},
    podersabio: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Desactivado por Poder Sabio");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifySpAPriority: 1,
		onModifySpA(atk, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Poder Sabio SpA Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		flags: {},
		name: "Poder Sabio",
		rating: 4.5,
		num: 10006,
	},
};
