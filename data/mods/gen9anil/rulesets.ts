export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	megaabilitymod: {
		effectType: 'Rule',
		name: 'Mega Ability Mod',
		desc: "Los Pok&eacute;mon que pueden megaevolucionar tienen que llevar otra habilidad para su forma mega.",
		onValidateSet(set, format, setHas) {
			const species = this.dex.species.get(set.species);
			const item = this.dex.items.get(set.item);
			const mega = item.megaStone?.[species.name] || item.megaStone?.[species.baseSpecies];
			// can't Mega Evolve: nothing to use it for
			if (!mega || mega === species.name) {
				delete set.megaAbility;
				return;
			}

			const name = set.name || set.species;
			if (!set.megaAbility) return [`${name}'s Mega Evolution needs to have an ability.`];
			const ability = this.dex.abilities.get(`${set.megaAbility}`);
			if (!ability.exists) return [`${name}'s Mega Ability "${set.megaAbility}" is an invalid ability.`];

			set.megaAbility = ability.name;
			const problem = this.checkAbility(set, ability, setHas);
			if (problem) return [problem.replace(`'s ability`, `'s Mega Ability`)];
		},
	},
};
