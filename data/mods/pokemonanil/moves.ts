export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	deslizamiento: {
		num: 10002,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Deslizamiento",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		breaksProtect: false,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	escalofrio: {
		num: 12001,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Escalofrio",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'frz',
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: { boost: { atk: 1 } },
		contestType: "Beautiful",
	},
	zippyzap: {
		num: 729,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Zippy Zap",
		pp: 15,
		priority: 2,
		flags: { contact: 1, protect: 1, mirror: 1 },
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	cut: {
		num: 15,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Cut",
		pp: 30,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	paraboliccharge: {
		num: 570,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Parabolic Charge",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, heal: 1, metronome: 1 },
		drain: [1, 2],
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
		contestType: "Clever",
	},
	fly: {
		num: 19,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Fly",
		pp: 15,
		priority: 0,
		flags: {
			contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1,
			metronome: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1,
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Clever",
	},
	aquatail: {
		num: 401,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Aqua Tail",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	bouncybubble: {
		num: 733,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Bouncy Bubble",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, heal: 1 },
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	drainingkiss: {
		num: 577,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Draining Kiss",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, heal: 1, metronome: 1 },
		drain: [3, 4],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	smackdown: {
		num: 479,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Smack Down",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
		volatileStatus: 'smackdown',
		condition: {
			noCopy: true,
			onStart(pokemon) {
				let applies = false;
				if (pokemon.hasType('Flying') || pokemon.hasAbility('levitate')) applies = true;
				if (pokemon.hasItem('ironball') || pokemon.volatiles['ingrain'] ||
					this.field.getPseudoWeather('gravity')) applies = false;
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					applies = true;
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
				}
				if (pokemon.volatiles['magnetrise']) {
					applies = true;
					delete pokemon.volatiles['magnetrise'];
				}
				if (pokemon.volatiles['telekinesis']) {
					applies = true;
					delete pokemon.volatiles['telekinesis'];
				}
				if (!applies) return false;
				this.add('-start', pokemon, 'Smack Down');
			},
			onRestart(pokemon) {
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
					this.add('-start', pokemon, 'Smack Down');
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	freezedry: {
		num: 573,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Freeze-Dry",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	metalclaw: {
		num: 232,
		accuracy: 95,
		basePower: 60,
		category: "Physical",
		name: "Metal Claw",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	meteormash: {
		num: 309,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Meteor Mash",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1, metronome: 1 },
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	blazekick: {
		num: 299,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Blaze Kick",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
};
