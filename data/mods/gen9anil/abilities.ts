export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	acometida: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Acometida');
			pokemon.abilityState.firstTurn = true;
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			pokemon.abilityState.firstTurn = false;
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.abilityState.firstTurn) return this.chainModify([5325, 4096]);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.abilityState.firstTurn) return this.chainModify([5325, 4096]);
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.abilityState.firstTurn) return this.chainModify(1.5);
		},
		flags: {},
		shortDesc: "Durante su primer turno en combate, aumenta un 50% su Velocidad y un 30% su Ataque y su Ataque Especial.",
		name: "Acometida",
		rating: 2.5,
		num: 10001,
	},
	albino: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice') return this.chainModify(1.5);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, attacker, defender, move) {
			if (move.type === 'Ice') return this.chainModify(1.5);
		},
		flags: {},
		name: "Albino",
		shortDesc: "Potencia un 50% los movimientos de tipo Hielo.",
		rating: 3.5,
		num: 10014,
	},
	auraguard: {
		inherit: true,
		isNonstandard: "Custom",
	},
	camorrista: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			const kicks = [
				'axekick', 'blazekick', 'doublekick', 'highjumpkick', 'jumpkick', 'lowkick', 'lowsweep', 'megakick',
				'rollingkick', 'thunderouskick', 'triplekick', 'tripleaxel', 'tropkick',
			];
			if (kicks.includes(move.id)) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Camorrista",
		rating: 2,
		num: 10002,
		shortDesc: "Sube el poder de las patadas un 20%.",
	},
	coleptero: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug') return this.chainModify(1.5);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, attacker, defender, move) {
			if (move.type === 'Bug') return this.chainModify(1.5);
		},
		flags: {},
		name: "Coleóptero",
		shortDesc: "Potencia un 50% los movimientos de tipo Bicho.",
		rating: 3.5,
		num: 10015,
	},
	dragonize: {
		inherit: true,
		isNonstandard: "Custom",
	},
	eelevate: {
		inherit: true,
		isNonstandard: "Custom",
	},
	emergencyexit: {
		onModifyMove(move, pokemon) {
			if (move.type === 'Bug' && this.canSwitch(pokemon.side)) move.selfSwitch = true;
		},
		flags: {},
		name: "Emergency Exit",
		rating: 2,
		num: 194,
	},
	espanto: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Espanto', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({ spa: -1 }, target, pokemon, null, true);
				}
			}
		},
		flags: {},
		name: "Espanto",
		rating: 3,
		num: 10003,
		shortDesc: "Espanta al rival y reduce su Atq. Especial.",
	},
	firemane: {
		inherit: true,
		isNonstandard: "Custom",
	},
	floracin: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass') return this.chainModify(1.5);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, attacker, defender, move) {
			if (move.type === 'Grass') return this.chainModify(1.5);
		},
		flags: {},
		name: "Floración",
		rating: 3.5,
		num: 10004,
		shortDesc: "Aumenta el daño de los ataques de tipo Planta.",
	},
	hustle: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.modify(atk, 1.5);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.modify(spa, 1.5);
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (move.category !== 'Status' && typeof accuracy === 'number') {
				return this.chainModify([3277, 4096]);
			}
		},
		flags: {},
		name: "Hustle",
		rating: 3.5,
		num: 55,
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
		num: 10016,
	},
	inflamable: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') return this.chainModify(1.5);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, attacker, defender, move) {
			if (move.type === 'Fire') return this.chainModify(1.5);
		},
		flags: {},
		name: "Inflamable",
		shortDesc: "Potencia un 50% los movimientos de tipo Fuego.",
		rating: 3.5,
		num: 10017,
	},
	innerfocus: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'atk', '[from] ability: Inner Focus', `[of] ${target}`);
			}
			if (effect.name === 'Espanto' && boost.spa) {
				delete boost.spa;
				this.add('-fail', target, 'unboost', 'spa', '[from] ability: Inner Focus', `[of] ${target}`);
			}
		},
	},
	liquidvoice: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
				move.type = 'Water';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Liquid Voice",
		rating: 2,
		num: 204,
	},
	megasol: {
		inherit: true,
		isNonstandard: "Custom",
	},
	mountaineer: {
		inherit: true,
		isNonstandard: "Custom",
	},
	noability: {
		inherit: true,
		isNonstandard: null,
	},
	oblivious: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'atk', '[from] ability: Oblivious', `[of] ${target}`);
			}
			if (effect.name === 'Espanto' && boost.spa) {
				delete boost.spa;
				this.add('-fail', target, 'unboost', 'spa', '[from] ability: Oblivious', `[of] ${target}`);
			}
		},
	},
	owntempo: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'atk', '[from] ability: Own Tempo', `[of] ${target}`);
			}
			if (effect.name === 'Espanto' && boost.spa) {
				delete boost.spa;
				this.add('-fail', target, 'unboost', 'spa', '[from] ability: Own Tempo', `[of] ${target}`);
			}
		},
	},
	persistent: {
		inherit: true,
		isNonstandard: "Custom",
	},
	pielherbcea: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Grass';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Piel Herbácea",
		rating: 4,
		num: 10007,
		shortDesc: "Convierte los movimientos de tipo Normal en Planta y los potencia.",
	},
	pielttrica: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Ghost';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Piel Tétrica",
		rating: 4,
		num: 10018,
	},
	piercingdrill: {
		inherit: true,
		isNonstandard: "Custom",
	},
	poderglido: {
		onModifySpe(spe, pokemon) {
			if (['snowscape', 'hail'].includes(pokemon.effectiveWeather())) return this.chainModify(2);
		},
		flags: {},
		shortDesc: "Duplica su Velocidad cuando nieva.",
		name: "Poder Gélido",
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
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
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
		shortDesc: "Potencia su Ataque Especial en un 50%, pero solo puede usar el primer movimiento escogido.",
	},
	rattled: {
		inherit: true,
		onAfterBoost(boost, target, source, effect) {
			if ((effect?.name === 'Intimidate' && boost.atk) || (effect?.name === 'Espanto' && boost.spa)) {
				this.boost({ spe: 1 });
			}
		},
	},
	razrobusta: {
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
			const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
			if (heals.includes(effect.id)) return this.chainModify([5324, 4096]);
		},
		flags: {},
		name: "Raíz robusta",
		rating: 2,
		num: 10008,
		shortDesc: "Los ataques que drenan PS recuperan más PS.",
	},
	realeza: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (!attacker.hasType(move.type)) return this.chainModify(1.5);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, attacker, defender, move) {
			if (!attacker.hasType(move.type)) return this.chainModify(1.5);
		},
		flags: {},
		name: "Realeza",
		rating: 3.5,
		num: 10009,
		shortDesc: "Recibe bonus de daño del 50% atacando con todos los tipos.",
	},
	rebound: {
		inherit: true,
		isNonstandard: "Custom",
	},
	rivalry: {
		onBasePowerPriority: 24,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.gender && defender.gender && attacker.gender === defender.gender) {
				return this.chainModify(1.25);
			}
		},
		flags: {},
		name: "Rivalry",
		rating: 1,
		num: 79,
	},
	scrappy: {
		inherit: true,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'atk', '[from] ability: Scrappy', `[of] ${target}`);
			}
			if (effect.name === 'Espanto' && boost.spa) {
				delete boost.spa;
				this.add('-fail', target, 'unboost', 'spa', '[from] ability: Scrappy', `[of] ${target}`);
			}
		},
	},
	silvano: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			if (this.field.isTerrain('grassyterrain')) return this.chainModify([5325, 4096]);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			if (this.field.isTerrain('grassyterrain')) return this.chainModify([5325, 4096]);
		},
		flags: {},
		name: "Silvano",
		rating: 2,
		num: 10010,
		shortDesc: "Aumenta el daño de cualquier tipo un 30% en Campo de Hierba.",
	},
	sobrecarga: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hp <= attacker.maxhp / 3) return this.chainModify(1.5);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hp <= attacker.maxhp / 3) return this.chainModify(1.5);
		},
		flags: {},
		name: "Sobrecarga",
		rating: 2,
		num: 10011,
		shortDesc: "Potencia los movimientos de tipo Eléctrico del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
	},
	spicyspray: {
		inherit: true,
		isNonstandard: "Custom",
	},
	synchronize: {
		onAfterSetStatus(status, target, source, effect) {
			if (!source || source === target) return;
			if (effect && effect.id === 'toxicspikes') return;
			if (status.id === 'slp') return;
			this.add('-activate', target, 'ability: Synchronize');
			source.trySetStatus(status, target, { status: status.id, id: 'synchronize' } as Effect);
		},
		flags: {},
		name: "Synchronize",
		rating: 2,
		num: 28,
	},
	tintineo: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Tintineo');
			for (const ally of pokemon.side.pokemon) {
				ally.cureStatus();
			}
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			if (move.flags['sound'] && !pokemon.volatiles['dynamax']) {
				move.type = 'Psychic';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Tintineo",
		rating: 3,
		num: 10012,
		shortDesc: "Repica una campana para curar los estados del equipo cuando sale a combatir. Además, los movs. de sonido pasan a ser psíquicos y aumentan un 20% su potencia.",
	},
	toqueardiente: {
		onSourceDamagingHit(damage, target, source, move) {
			if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;
			if (this.checkMoveMakesContact(move, target, source)) {
				if (this.randomChance(3, 10)) {
					target.trySetStatus('brn', source);
				}
			}
		},
		flags: {},
		name: "Toque Ardiente",
		rating: 2,
		num: 10013,
		shortDesc: "Puede quemar al objetivo con solo tocarlo un 30% de las veces.",
	},
};
