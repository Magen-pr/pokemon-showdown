export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	absorb: {
		inherit: true,
		basePower: 30,
	},
	aeroblast: {
		inherit: true,
		flags: { protect: 1, mirror: 1, distance: 1, metronome: 1 },
	},
	airslash: {
		inherit: true,
		basePower: 80,
	},
	aquatail: {
		inherit: true,
		basePower: 95,
	},
	armthrust: {
		inherit: true,
		basePower: 20,
	},
	atrapabicho: {
		num: 10001,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Atrapabicho",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, bite: 1, metronome: 1 },
		onEffectiveness(typeMod, target, type) {
			if (type === 'Bug') return 1;
		},
		target: "normal",
		type: "Grass",
		shortDesc: "Muerde con unas fauces eficaces contra los Pokémon Bicho.",
	},
	aurorabeam: {
		inherit: true,
		basePower: 80,
	},
	baddybad: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		isNonstandard: null,
	},
	belch: {
		inherit: true,
		basePower: 130,
		accuracy: 100,
	},
	blazekick: {
		inherit: true,
		basePower: 90,
	},
	bounce: {
		inherit: true,
		basePower: 90,
		accuracy: 90,
	},
	bouncybubble: {
		inherit: true,
		basePower: 90,
		pp: 15,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		basePower: 90,
		pp: 15,
		isNonstandard: null,
	},
	clamp: {
		inherit: true,
		basePower: 50,
	},
	clangoroussoul: {
		inherit: true,
		accuracy: true,
	},
	courtchange: {
		inherit: true,
		accuracy: true,
	},
	covet: {
		inherit: true,
		pp: 40,
	},
	curse: {
		inherit: true,
		target: "self",
	},
	cut: {
		inherit: true,
		type: "Steel",
		basePower: 65,
	},
	darkvoid: {
		num: 464,
		accuracy: 50,
		basePower: 0,
		category: "Status",
		name: "Dark Void",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1, nosketch: 1 },
		status: 'slp',
		target: "allAdjacentFoes",
		type: "Dark",
		zMove: { effect: 'clearnegativeboost' },
		contestType: "Clever",
	},
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
		target: "normal",
		type: "Ice",
		shortDesc: "Se desliza con un esquí y aumenta la Velocidad del atacante.",
	},
	dive: {
		inherit: true,
		basePower: 90,
	},
	dragoncheer: {
		inherit: true,
		pp: 10,
	},
	drainingkiss: {
		inherit: true,
		basePower: 60,
	},
	dreameater: {
		inherit: true,
		basePower: 110,
	},
	drumbeating: {
		inherit: true,
		flags: { protect: 1, mirror: 1, sound: 1 },
	},
	ember: {
		inherit: true,
		basePower: 45,
	},
	escalofro: {
		num: 10003,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Escalofrío",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		status: 'frz',
		target: "normal",
		type: "Ice",
		shortDesc: "Provoca un terrible escalofrío en el objetivo y lo congela.",
	},
	extrasensory: {
		inherit: true,
		pp: 30,
	},
	fairywind: {
		inherit: true,
		basePower: 50,
	},
	filletaway: {
		inherit: true,
		target: "normal",
	},
	fishiousrend: {
		inherit: true,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
	},
	floatyfall: {
		inherit: true,
		isNonstandard: null,
	},
	fly: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
	},
	freezedry: {
		inherit: true,
		basePower: 80,
	},
	freezyfrost: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		pp: 15,
		isNonstandard: null,
	},
	futuresight: {
		inherit: true,
		basePower: 130,
	},
	geargrind: {
		inherit: true,
		basePower: 55,
		accuracy: 90,
	},
	glitzyglow: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		isNonstandard: null,
	},
	gunkshot: {
		inherit: true,
		accuracy: 90,
	},
	hydrosteam: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1 },
	},
	irontail: {
		inherit: true,
		basePower: 110,
		accuracy: 85,
	},
	jawlock: {
		inherit: true,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
	},
	megadrain: {
		inherit: true,
		basePower: 55,
	},
	metalclaw: {
		inherit: true,
		basePower: 60,
	},
	meteorbeam: {
		inherit: true,
		basePower: 130,
	},
	meteormash: {
		inherit: true,
		basePower: 100,
	},
	mistyexplosion: {
		num: 802,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Misty Explosion",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onModifyPriority(priority, source, target, move) {
			if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				return priority + 1;
			}
		},
		target: "normal",
		type: "Fairy",
	},
	mudbomb: {
		inherit: true,
		accuracy: 95,
	},
	mudslap: {
		inherit: true,
		basePower: 35,
	},
	nihillight: {
		inherit: true,
		basePower: 200,
		target: "normal",
		isNonstandard: null,
	},
	nobleroar: {
		inherit: true,
		accuracy: true,
	},
	obstruct: {
		inherit: true,
		accuracy: true,
	},
	octazooka: {
		inherit: true,
		basePower: 85,
		accuracy: 90,
	},
	outrage: {
		inherit: true,
		pp: 15,
	},
	overdrive: {
		inherit: true,
		basePower: 100,
	},
	paraboliccharge: {
		inherit: true,
		basePower: 70,
	},
	pikapapow: {
		inherit: true,
		isNonstandard: null,
	},
	poisongas: {
		inherit: true,
		accuracy: 80,
	},
	poisonsting: {
		inherit: true,
		basePower: 25,
	},
	powder: {
		inherit: true,
		priority: 0,
	},
	powdersnow: {
		inherit: true,
		basePower: 50,
	},
	rage: {
		inherit: true,
		basePower: 30,
	},
	razorleaf: {
		inherit: true,
		basePower: 60,
		accuracy: 100,
	},
	razorwind: {
		num: 13,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, slicing: 1, wind: 1 },
		critRatio: 2,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	rest: {
		inherit: true,
		pp: 10,
	},
	rockslide: {
		inherit: true,
		basePower: 80,
		accuracy: 95,
	},
	rocksmash: {
		inherit: true,
		basePower: 50,
	},
	sappyseed: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		pp: 15,
		isNonstandard: null,
	},
	shadowpunch: {
		inherit: true,
		basePower: 75,
	},
	shoreup: {
		inherit: true,
		pp: 10,
	},
	sizzlyslide: {
		inherit: true,
		basePower: 90,
		pp: 15,
		flags: { contact: 1, protect: 1, mirror: 1 },
		isNonstandard: null,
	},
	smackdown: {
		inherit: true,
		basePower: 60,
	},
	snipeshot: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1 },
	},
	solarbeam: {
		inherit: true,
		basePower: 130,
	},
	solarblade: {
		inherit: true,
		basePower: 130,
	},
	spacialrend: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1, slicing: 1 },
	},
	sparklyswirl: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		pp: 15,
		isNonstandard: null,
	},
	spiderweb: {
		inherit: true,
		flags: { reflectable: 1, mirror: 1, metronome: 1 },
	},
	spikecannon: {
		inherit: true,
		type: "Water",
		basePower: 25,
	},
	spinout: {
		inherit: true,
		pp: 10,
	},
	splishysplash: {
		inherit: true,
		isNonstandard: null,
	},
	strangesteam: {
		inherit: true,
		basePower: 95,
	},
	strength: {
		inherit: true,
		type: "Rock",
		basePower: 90,
	},
	supersonic: {
		inherit: true,
		accuracy: 65,
	},
	surgingstrikes: {
		inherit: true,
		flags: { contact: 1, protect: 1, mirror: 1 },
	},
	swagger: {
		inherit: true,
		accuracy: 90,
	},
	swordsdance: {
		inherit: true,
		pp: 10,
	},
	takeheart: {
		inherit: true,
		pp: 10,
	},
	terablast: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1, mustpressure: 1, contact: 1 },
	},
	thundershock: {
		inherit: true,
		basePower: 45,
	},
	tidyup: {
		inherit: true,
		target: "normal",
	},
	triplegolpe: {
		num: 10004,
		accuracy: 100,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			return 15 * move.hit;
		},
		category: "Physical",
		name: "Triple Golpe",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		multihit: 3,
		multiaccuracy: true,
		target: "normal",
		type: "Normal",
		shortDesc: "Golpea hasta tres veces seguidas y cada vez más fuerte.",
	},
	twister: {
		inherit: true,
		basePower: 60,
	},
	veeveevolley: {
		inherit: true,
		isNonstandard: null,
	},
	watergun: {
		inherit: true,
		basePower: 45,
	},
	whirlwind: {
		inherit: true,
		flags: { reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1, metronome: 1, noassist: 1, failcopycat: 1 },
	},
	wickedblow: {
		inherit: true,
		flags: { contact: 1, protect: 1, mirror: 1 },
	},
	wonderroom: {
		inherit: true,
		priority: -7,
	},
	zenheadbutt: {
		inherit: true,
		basePower: 90,
	},
	zippyzap: {
		inherit: true,
		basePower: 50,
		pp: 15,
		isNonstandard: null,
	},
};
