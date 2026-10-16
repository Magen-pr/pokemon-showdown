export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	actions: {
		runMegaEvo(pokemon) {
			const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
			if (!speciesid) return false;

			let species = this.dex.species.get(speciesid);
			// Mega Ability Mod: the mega gets the ability chosen in the teambuilder
			if (pokemon.canMegaEvo && pokemon.set.megaAbility && this.battle.ruleTable.has('megaabilitymod')) {
				species = Object.assign(this.dex.deepClone(species), {
					abilities: { 0: this.dex.abilities.get(pokemon.set.megaAbility).name },
				});
			}
			pokemon.formeChange(species, pokemon.getItem(), true);

			// Limit one mega evolution
			const wasMega = pokemon.canMegaEvo;
			for (const ally of pokemon.side.pokemon) {
				if (wasMega) {
					ally.canMegaEvo = false;
				} else {
					ally.canUltraBurst = null;
				}
			}

			this.battle.runEvent('AfterMega', pokemon);
			return true;
		},
	},
};
