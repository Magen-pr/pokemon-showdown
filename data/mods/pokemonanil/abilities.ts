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
};
