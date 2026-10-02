export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	"10000000voltthunderbolt": {
		inherit: true,
		isNonstandard: "Custom",
	},
	absorb: {
		inherit: true,
		basePower: 30,
	},
	aciddownpour: {
		inherit: true,
		isNonstandard: "Custom",
	},
	aeroblast: {
		inherit: true,
		flags: { protect: 1, mirror: 1, distance: 1, metronome: 1 },
	},
	airslash: {
		inherit: true,
		basePower: 80,
	},
	alloutpummeling: {
		inherit: true,
		isNonstandard: "Custom",
	},
	anchorshot: {
		inherit: true,
		isNonstandard: null,
	},
	aquatail: {
		inherit: true,
		basePower: 95,
	},
	armthrust: {
		inherit: true,
		basePower: 20,
	},
	aromatherapy: {
		inherit: true,
		isNonstandard: null,
	},
	assist: {
		inherit: true,
		isNonstandard: null,
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
	autotomize: {
		inherit: true,
		isNonstandard: null,
	},
	baddybad: {
		inherit: true,
		isNonstandard: null,
		basePower: 90,
		accuracy: 100,
	},
	barrage: {
		inherit: true,
		isNonstandard: null,
	},
	barrier: {
		inherit: true,
		isNonstandard: null,
	},
	belch: {
		inherit: true,
		basePower: 130,
		accuracy: 100,
	},
	bestow: {
		inherit: true,
		isNonstandard: null,
	},
	bide: {
		inherit: true,
		isNonstandard: null,
	},
	blackholeeclipse: {
		inherit: true,
		isNonstandard: "Custom",
	},
	blazekick: {
		inherit: true,
		basePower: 90,
	},
	blazingtorque: {
		inherit: true,
		isNonstandard: null,
	},
	bloomdoom: {
		inherit: true,
		isNonstandard: "Custom",
	},
	boltbeak: {
		inherit: true,
		isNonstandard: null,
	},
	boneclub: {
		inherit: true,
		isNonstandard: null,
	},
	bonemerang: {
		inherit: true,
		isNonstandard: null,
	},
	bounce: {
		inherit: true,
		basePower: 90,
		accuracy: 90,
	},
	bouncybubble: {
		inherit: true,
		isNonstandard: null,
		basePower: 90,
		pp: 15,
	},
	breakneckblitz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	bubble: {
		inherit: true,
		isNonstandard: null,
	},
	burnup: {
		inherit: true,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		isNonstandard: null,
		basePower: 90,
		pp: 15,
	},
	camouflage: {
		inherit: true,
		isNonstandard: null,
	},
	captivate: {
		inherit: true,
		isNonstandard: null,
	},
	catastropika: {
		inherit: true,
		isNonstandard: "Custom",
	},
	chatter: {
		inherit: true,
		isNonstandard: null,
	},
	chipaway: {
		inherit: true,
		isNonstandard: null,
	},
	clamp: {
		inherit: true,
		isNonstandard: null,
		basePower: 50,
	},
	clangoroussoul: {
		inherit: true,
		accuracy: true,
	},
	clangoroussoulblaze: {
		inherit: true,
		isNonstandard: "Custom",
	},
	combattorque: {
		inherit: true,
		isNonstandard: null,
	},
	cometpunch: {
		inherit: true,
		isNonstandard: null,
	},
	constrict: {
		inherit: true,
		isNonstandard: null,
	},
	continentalcrush: {
		inherit: true,
		isNonstandard: "Custom",
	},
	coreenforcer: {
		inherit: true,
		isNonstandard: null,
	},
	corkscrewcrash: {
		inherit: true,
		isNonstandard: "Custom",
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: null,
	},
	courtchange: {
		inherit: true,
		accuracy: true,
	},
	covet: {
		inherit: true,
		pp: 40,
	},
	craftyshield: {
		inherit: true,
		isNonstandard: null,
	},
	curse: {
		inherit: true,
		target: "self",
	},
	cut: {
		inherit: true,
		isNonstandard: null,
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
	devastatingdrake: {
		inherit: true,
		isNonstandard: "Custom",
	},
	dive: {
		inherit: true,
		basePower: 90,
	},
	dizzypunch: {
		inherit: true,
		isNonstandard: null,
	},
	doubleironbash: {
		inherit: true,
		isNonstandard: null,
	},
	doubleslap: {
		inherit: true,
		isNonstandard: null,
	},
	dragoncheer: {
		inherit: true,
		pp: 10,
	},
	dragonrage: {
		inherit: true,
		isNonstandard: null,
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
	dualchop: {
		inherit: true,
		isNonstandard: null,
	},
	eggbomb: {
		inherit: true,
		isNonstandard: null,
	},
	electrify: {
		inherit: true,
		isNonstandard: null,
	},
	embargo: {
		inherit: true,
		isNonstandard: null,
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
	eternabeam: {
		inherit: true,
		isNonstandard: null,
	},
	extrasensory: {
		inherit: true,
		pp: 30,
	},
	extremeevoboost: {
		inherit: true,
		isNonstandard: "Custom",
	},
	fairywind: {
		inherit: true,
		basePower: 50,
	},
	feintattack: {
		inherit: true,
		isNonstandard: null,
	},
	filletaway: {
		inherit: true,
		target: "normal",
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: null,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
	},
	flameburst: {
		inherit: true,
		isNonstandard: null,
	},
	flash: {
		inherit: true,
		isNonstandard: null,
	},
	floatyfall: {
		inherit: true,
		isNonstandard: null,
	},
	flowershield: {
		inherit: true,
		isNonstandard: null,
	},
	fly: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
	},
	foresight: {
		inherit: true,
		isNonstandard: null,
	},
	freezedry: {
		inherit: true,
		basePower: 80,
	},
	freezyfrost: {
		inherit: true,
		isNonstandard: null,
		basePower: 90,
		accuracy: 100,
		pp: 15,
	},
	frustration: {
		inherit: true,
		isNonstandard: null,
	},
	futuresight: {
		inherit: true,
		basePower: 130,
	},
	geargrind: {
		inherit: true,
		isNonstandard: null,
		basePower: 55,
		accuracy: 90,
	},
	gearup: {
		inherit: true,
		isNonstandard: null,
	},
	genesissupernova: {
		inherit: true,
		isNonstandard: "Custom",
	},
	geomancy: {
		inherit: true,
		isNonstandard: null,
	},
	gigavolthavoc: {
		inherit: true,
		isNonstandard: "Custom",
	},
	glitzyglow: {
		inherit: true,
		isNonstandard: null,
		basePower: 90,
		accuracy: 100,
	},
	gmaxbefuddle: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxcannonade: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxcentiferno: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxchistrike: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxcuddle: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxdepletion: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxdrumsolo: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxfinale: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxfireball: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxfoamburst: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxgoldrush: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxgravitas: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxhydrosnipe: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxmalodor: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxmeltdown: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxoneblow: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxrapidflow: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxreplenish: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxresonance: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxsandblast: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxsmite: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxsnooze: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxsteelsurge: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxstonesurge: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxstunshock: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxsweetness: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxtartness: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxterror: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxvinelash: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxvolcalith: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxvoltcrash: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxwildfire: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gmaxwindrage: {
		inherit: true,
		isNonstandard: "Custom",
	},
	grasswhistle: {
		inherit: true,
		isNonstandard: null,
	},
	grudge: {
		inherit: true,
		isNonstandard: null,
	},
	guardianofalola: {
		inherit: true,
		isNonstandard: "Custom",
	},
	gunkshot: {
		inherit: true,
		accuracy: 90,
	},
	hail: {
		inherit: true,
		isNonstandard: null,
	},
	headcharge: {
		inherit: true,
		isNonstandard: null,
	},
	healblock: {
		inherit: true,
		isNonstandard: null,
	},
	healorder: {
		inherit: true,
		isNonstandard: null,
	},
	heartstamp: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpower: {
		inherit: true,
		isNonstandard: null,
	},
	holdback: {
		inherit: true,
		isNonstandard: null,
	},
	holdhands: {
		inherit: true,
		isNonstandard: null,
	},
	hydrosteam: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1 },
	},
	hydrovortex: {
		inherit: true,
		isNonstandard: "Custom",
	},
	hyperfang: {
		inherit: true,
		isNonstandard: null,
	},
	iceball: {
		inherit: true,
		isNonstandard: null,
	},
	infernooverdrive: {
		inherit: true,
		isNonstandard: "Custom",
	},
	iondeluge: {
		inherit: true,
		isNonstandard: null,
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
	jumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	karatechop: {
		inherit: true,
		isNonstandard: null,
	},
	kinesis: {
		inherit: true,
		isNonstandard: null,
	},
	kingsshield: {
		inherit: true,
		isNonstandard: null,
	},
	landswrath: {
		inherit: true,
		isNonstandard: null,
	},
	laserfocus: {
		inherit: true,
		isNonstandard: null,
	},
	leaftornado: {
		inherit: true,
		isNonstandard: null,
	},
	letssnuggleforever: {
		inherit: true,
		isNonstandard: "Custom",
	},
	lightofruin: {
		inherit: true,
		isNonstandard: null,
	},
	lightthatburnsthesky: {
		inherit: true,
		isNonstandard: "Custom",
	},
	lovelykiss: {
		inherit: true,
		isNonstandard: null,
	},
	luckychant: {
		inherit: true,
		isNonstandard: null,
	},
	magicaltorque: {
		inherit: true,
		isNonstandard: null,
	},
	magiccoat: {
		inherit: true,
		isNonstandard: null,
	},
	magnetbomb: {
		inherit: true,
		isNonstandard: null,
	},
	magnitude: {
		inherit: true,
		isNonstandard: null,
	},
	maliciousmoonsault: {
		inherit: true,
		isNonstandard: "Custom",
	},
	matblock: {
		inherit: true,
		isNonstandard: null,
	},
	maxairstream: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxdarkness: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxflare: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxflutterby: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxgeyser: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxguard: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxhailstorm: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxknuckle: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxlightning: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxmindstorm: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxooze: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxovergrowth: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxphantasm: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxquake: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxrockfall: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxstarfall: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxsteelspike: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxstrike: {
		inherit: true,
		isNonstandard: "Custom",
	},
	maxwyrmwind: {
		inherit: true,
		isNonstandard: "Custom",
	},
	meditate: {
		inherit: true,
		isNonstandard: null,
	},
	mefirst: {
		inherit: true,
		isNonstandard: null,
	},
	megadrain: {
		inherit: true,
		basePower: 55,
	},
	menacingmoonrazemaelstrom: {
		inherit: true,
		isNonstandard: "Custom",
	},
	metalclaw: {
		inherit: true,
		basePower: 60,
	},
	meteorassault: {
		inherit: true,
		isNonstandard: null,
	},
	meteorbeam: {
		inherit: true,
		basePower: 130,
	},
	meteormash: {
		inherit: true,
		basePower: 100,
	},
	mindblown: {
		inherit: true,
		isNonstandard: null,
	},
	mindreader: {
		inherit: true,
		isNonstandard: null,
	},
	miracleeye: {
		inherit: true,
		isNonstandard: null,
	},
	mirrormove: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorshot: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
		accuracy: 95,
	},
	mudslap: {
		inherit: true,
		basePower: 35,
	},
	mudsport: {
		inherit: true,
		isNonstandard: null,
	},
	multiattack: {
		inherit: true,
		isNonstandard: null,
	},
	naturalgift: {
		inherit: true,
		isNonstandard: null,
	},
	naturepower: {
		inherit: true,
		isNonstandard: null,
	},
	naturesmadness: {
		inherit: true,
		isNonstandard: null,
	},
	needlearm: {
		inherit: true,
		isNonstandard: null,
	},
	neverendingnightmare: {
		inherit: true,
		isNonstandard: "Custom",
	},
	nightmare: {
		inherit: true,
		isNonstandard: null,
	},
	nihillight: {
		inherit: true,
		isNonstandard: null,
		basePower: 200,
		target: "normal",
	},
	nobleroar: {
		inherit: true,
		accuracy: true,
	},
	noxioustorque: {
		inherit: true,
		isNonstandard: null,
	},
	oblivionwing: {
		inherit: true,
		isNonstandard: null,
	},
	obstruct: {
		inherit: true,
		isNonstandard: null,
		accuracy: true,
	},
	oceanicoperetta: {
		inherit: true,
		isNonstandard: "Custom",
	},
	octazooka: {
		inherit: true,
		isNonstandard: null,
		basePower: 85,
		accuracy: 90,
	},
	octolock: {
		inherit: true,
		isNonstandard: null,
	},
	odorsleuth: {
		inherit: true,
		isNonstandard: null,
	},
	ominouswind: {
		inherit: true,
		isNonstandard: null,
	},
	outrage: {
		inherit: true,
		pp: 15,
	},
	overdrive: {
		inherit: true,
		basePower: 100,
	},
	paleowave: {
		inherit: true,
		isNonstandard: "Custom",
	},
	paraboliccharge: {
		inherit: true,
		basePower: 70,
	},
	pikapapow: {
		inherit: true,
		isNonstandard: null,
	},
	plasmafists: {
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
	polarflare: {
		inherit: true,
		isNonstandard: "Custom",
	},
	powder: {
		inherit: true,
		isNonstandard: null,
		priority: 0,
	},
	powdersnow: {
		inherit: true,
		basePower: 50,
	},
	powershift: {
		inherit: true,
		isNonstandard: null,
	},
	poweruppunch: {
		inherit: true,
		isNonstandard: null,
	},
	psychoshift: {
		inherit: true,
		isNonstandard: null,
	},
	psywave: {
		inherit: true,
		isNonstandard: null,
	},
	pulverizingpancake: {
		inherit: true,
		isNonstandard: "Custom",
	},
	punishment: {
		inherit: true,
		isNonstandard: null,
	},
	purify: {
		inherit: true,
		isNonstandard: null,
	},
	pursuit: {
		inherit: true,
		isNonstandard: null,
	},
	rage: {
		inherit: true,
		isNonstandard: null,
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
	refresh: {
		inherit: true,
		isNonstandard: null,
	},
	rest: {
		inherit: true,
		pp: 10,
	},
	return: {
		inherit: true,
		isNonstandard: null,
	},
	revenge: {
		inherit: true,
		isNonstandard: null,
	},
	rockclimb: {
		inherit: true,
		isNonstandard: null,
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
	rollingkick: {
		inherit: true,
		isNonstandard: null,
	},
	rototiller: {
		inherit: true,
		isNonstandard: null,
	},
	sappyseed: {
		inherit: true,
		isNonstandard: null,
		basePower: 90,
		accuracy: 100,
		pp: 15,
	},
	savagespinout: {
		inherit: true,
		isNonstandard: "Custom",
	},
	searingshot: {
		inherit: true,
		isNonstandard: null,
	},
	searingsunrazesmash: {
		inherit: true,
		isNonstandard: "Custom",
	},
	secretpower: {
		inherit: true,
		isNonstandard: null,
	},
	shadowbone: {
		inherit: true,
		isNonstandard: null,
	},
	shadowpunch: {
		inherit: true,
		basePower: 75,
	},
	shadowstrike: {
		inherit: true,
		isNonstandard: "Custom",
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
	},
	shatteredpsyche: {
		inherit: true,
		isNonstandard: "Custom",
	},
	shelltrap: {
		inherit: true,
		isNonstandard: null,
	},
	shoreup: {
		inherit: true,
		pp: 10,
	},
	signalbeam: {
		inherit: true,
		isNonstandard: null,
	},
	silverwind: {
		inherit: true,
		isNonstandard: null,
	},
	sinisterarrowraid: {
		inherit: true,
		isNonstandard: "Custom",
	},
	sizzlyslide: {
		inherit: true,
		isNonstandard: null,
		basePower: 90,
		pp: 15,
		flags: { contact: 1, protect: 1, mirror: 1 },
	},
	skullbash: {
		inherit: true,
		isNonstandard: null,
	},
	skydrop: {
		inherit: true,
		isNonstandard: null,
	},
	skyuppercut: {
		inherit: true,
		isNonstandard: null,
	},
	smackdown: {
		inherit: true,
		basePower: 60,
	},
	smellingsalts: {
		inherit: true,
		isNonstandard: null,
	},
	snaptrap: {
		inherit: true,
		isNonstandard: null,
	},
	snatch: {
		inherit: true,
		isNonstandard: null,
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
	sonicboom: {
		inherit: true,
		isNonstandard: null,
	},
	soulstealing7starstrike: {
		inherit: true,
		isNonstandard: "Custom",
	},
	spacialrend: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1, slicing: 1 },
	},
	sparklyswirl: {
		inherit: true,
		isNonstandard: null,
		basePower: 90,
		accuracy: 100,
		pp: 15,
	},
	spectralthief: {
		inherit: true,
		isNonstandard: null,
	},
	spiderweb: {
		inherit: true,
		isNonstandard: null,
		flags: { reflectable: 1, mirror: 1, metronome: 1 },
	},
	spikecannon: {
		inherit: true,
		isNonstandard: null,
		type: "Water",
		basePower: 25,
	},
	spinout: {
		inherit: true,
		pp: 10,
	},
	splinteredstormshards: {
		inherit: true,
		isNonstandard: "Custom",
	},
	splishysplash: {
		inherit: true,
		isNonstandard: null,
	},
	spotlight: {
		inherit: true,
		isNonstandard: null,
	},
	steamroller: {
		inherit: true,
		isNonstandard: null,
	},
	stokedsparksurfer: {
		inherit: true,
		isNonstandard: "Custom",
	},
	stormthrow: {
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
	submission: {
		inherit: true,
		isNonstandard: null,
	},
	subzeroslammer: {
		inherit: true,
		isNonstandard: "Custom",
	},
	supersonic: {
		inherit: true,
		accuracy: 65,
	},
	supersonicskystrike: {
		inherit: true,
		isNonstandard: "Custom",
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
	synchronoise: {
		inherit: true,
		isNonstandard: null,
	},
	takeheart: {
		inherit: true,
		pp: 10,
	},
	technoblast: {
		inherit: true,
		isNonstandard: null,
	},
	tectonicrage: {
		inherit: true,
		isNonstandard: "Custom",
	},
	telekinesis: {
		inherit: true,
		isNonstandard: null,
	},
	terablast: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1, mustpressure: 1, contact: 1 },
	},
	thousandarrows: {
		inherit: true,
		isNonstandard: null,
	},
	thousandwaves: {
		inherit: true,
		isNonstandard: null,
	},
	thundershock: {
		inherit: true,
		basePower: 45,
	},
	tidyup: {
		inherit: true,
		target: "normal",
	},
	trickortreat: {
		inherit: true,
		isNonstandard: null,
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
	trumpcard: {
		inherit: true,
		isNonstandard: null,
	},
	twineedle: {
		inherit: true,
		isNonstandard: null,
	},
	twinkletackle: {
		inherit: true,
		isNonstandard: "Custom",
	},
	twister: {
		inherit: true,
		basePower: 60,
	},
	vcreate: {
		inherit: true,
		isNonstandard: null,
	},
	veeveevolley: {
		inherit: true,
		isNonstandard: null,
	},
	venomdrench: {
		inherit: true,
		isNonstandard: null,
	},
	vitalthrow: {
		inherit: true,
		isNonstandard: null,
	},
	wakeupslap: {
		inherit: true,
		isNonstandard: null,
	},
	watergun: {
		inherit: true,
		basePower: 45,
	},
	watersport: {
		inherit: true,
		isNonstandard: null,
	},
	whirlwind: {
		inherit: true,
		flags: { reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1, metronome: 1, noassist: 1, failcopycat: 1 },
	},
	wickedblow: {
		inherit: true,
		flags: { contact: 1, protect: 1, mirror: 1 },
	},
	wickedtorque: {
		inherit: true,
		isNonstandard: null,
	},
	wonderroom: {
		inherit: true,
		priority: -7,
	},
	wringout: {
		inherit: true,
		isNonstandard: null,
	},
	zenheadbutt: {
		inherit: true,
		basePower: 90,
	},
	zippyzap: {
		inherit: true,
		isNonstandard: null,
		basePower: 50,
		pp: 15,
	},
};
