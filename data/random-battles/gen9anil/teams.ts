import { type MoveCounter, RandomTeams } from '../gen9/teams';

type AnilSpeciesData = RandomTeamsTypes.RandomSpeciesData & { megaOnly?: boolean };

const KICKS = [
	'axekick', 'blazekick', 'doublekick', 'highjumpkick', 'jumpkick', 'lowkick', 'lowsweep', 'megakick',
	'rollingkick', 'thunderouskick', 'triplekick', 'tripleaxel', 'tropkick',
];

export class RandomAnilTeams extends RandomTeams {
	override randomSets: { [species: string]: AnilSpeciesData } = require('./sets.json');
	override randomDoublesSets: { [species: string]: AnilSpeciesData } = {};

	private pools: { pool: { [k: string]: string[] }, basePool: string[] } | null = null;

	override getPokemonPool(
		type: string,
		pokemonToExclude: RandomTeamsTypes.RandomSet[] = [],
		isMonotype = false,
		pokemonList: string[]
	): [{ [k: string]: string[] }, string[]] {
		// bases that are only here so their mega can show up
		pokemonList = pokemonList.filter(id => !this.randomSets[id]?.megaOnly);
		const [pool, basePool] = super.getPokemonPool(type, pokemonToExclude, isMonotype, pokemonList);
		// Furfrou trims have their own typing here, but they're still one Pokemon
		while (basePool.indexOf('Furfrou') !== basePool.lastIndexOf('Furfrou')) {
			basePool.splice(basePool.lastIndexOf('Furfrou'), 1);
		}
		this.pools = { pool, basePool };
		return [pool, basePool];
	}

	// one mega per team
	private dropMegas() {
		if (!this.pools) return;
		const { pool, basePool } = this.pools;
		for (const base of Object.keys(pool)) {
			const rest = pool[base].filter(id => !this.dex.species.get(id).isMega);
			if (rest.length) {
				pool[base] = rest;
				continue;
			}
			delete pool[base];
			for (let i = basePool.length - 1; i >= 0; i--) {
				if (basePool[i] === base) basePool.splice(i, 1);
			}
		}
	}

	override randomSet(
		s: string | Species,
		teamDetails: RandomTeamsTypes.TeamDetails = {},
		isLead = false,
		isDoubles = false
	): RandomTeamsTypes.RandomSet {
		const set = super.randomSet(s, teamDetails, isLead, isDoubles);
		if (this.dex.species.get(s).isMega) this.dropMegas();
		return set;
	}

	override getForme(species: Species): string {
		if (species.id === 'pikachuamarillo' || ['Basculin', 'Furfrou'].includes(species.baseSpecies)) return species.name;
		return super.getForme(species);
	}

	// no Tera here, but gen9 still looks at the tera type to pick some abilities
	override getAbility(
		types: Set<string>,
		moves: Set<string>,
		abilities: string[],
		counter: MoveCounter,
		teamDetails: RandomTeamsTypes.TeamDetails,
		species: Species,
		isLead: boolean,
		isDoubles: boolean,
		teraType: string,
		role: RandomTeamsTypes.Role,
	): string {
		return super.getAbility(
			types, moves, abilities, counter, teamDetails, species, isLead, isDoubles, teraType || species.types[0], role
		);
	}

	override getMoveType(move: Move, species: Species, abilities: string[], teraType: string): string {
		// megas already know which ability they'll end up with
		if (species.isMega) abilities = Object.values(species.abilities);
		if (move.type === 'Normal' && abilities.includes('Piel Herbácea')) return 'Grass';
		if (move.flags['sound'] && abilities.includes('Tintineo')) return 'Psychic';
		if (move.flags['sound'] && abilities.includes('Liquid Voice')) return 'Water';
		return super.getMoveType(move, species, abilities, teraType);
	}

	override shouldCullAbility(
		ability: string,
		types: Set<string>,
		moves: Set<string>,
		abilities: string[],
		counter: MoveCounter,
		teamDetails: RandomTeamsTypes.TeamDetails,
		species: Species,
		role: RandomTeamsTypes.Role,
		isLead: boolean,
		isDoubles: boolean,
	): boolean {
		switch (ability) {
		case 'Poder Gélido':
			return !teamDetails.snow;
		case 'Silvano':
			return true;
		case 'Camorrista':
			return !KICKS.some(m => moves.has(m));
		}
		return super.shouldCullAbility(
			ability, types, moves, abilities, counter, teamDetails, species, role, isLead, isDoubles
		);
	}

	override getPriorityItem(
		ability: string,
		types: Set<string>,
		moves: Set<string>,
		counter: MoveCounter,
		teamDetails: RandomTeamsTypes.TeamDetails,
		species: Species,
		isLead: boolean,
		teraType: string,
		role: RandomTeamsTypes.Role,
		isDoubles: boolean,
	) {
		if (species.nfe && species.id !== 'pikachu') {
			const twoStagesLeft = species.evos.some(evo => this.dex.species.get(evo).nfe);
			return twoStagesLeft ? 'Supermineral Evolutivo' : 'Eviolite';
		}
		if (moves.has('geomancy')) return 'Power Herb';
		return super.getPriorityItem(ability, types, moves, counter, teamDetails, species, isLead, teraType, role, isDoubles);
	}
}

export default RandomAnilTeams;
