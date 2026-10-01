export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	abomasite: {
		inherit: true,
		isNonstandard: null,
	},
	absolite: {
		inherit: true,
		isNonstandard: null,
	},
	absolitez: {
		inherit: true,
		isNonstandard: null,
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	aggronite: {
		inherit: true,
		isNonstandard: null,
	},
	alakazite: {
		inherit: true,
		isNonstandard: null,
	},
	alcremita: {
		name: "Alcremita",
		spritenum: 608,
		megaStone: { Alcremie: "Alcremie-Mega" },
		itemUser: ["Alcremie"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10122,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Alcremie en combate.",
	},
	altarianite: {
		inherit: true,
		isNonstandard: null,
	},
	ampharosite: {
		inherit: true,
		isNonstandard: null,
	},
	audinite: {
		inherit: true,
		isNonstandard: null,
	},
	banettite: {
		inherit: true,
		isNonstandard: null,
	},
	barbaracite: {
		inherit: true,
		isNonstandard: null,
	},
	baxcalibrite: {
		inherit: true,
		isNonstandard: null,
	},
	beedrillite: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisitay: {
		name: "Blastoisita Y",
		spritenum: 583,
		megaStone: { Blastoise: "Blastoise-Mega-Y" },
		itemUser: ["Blastoise"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10103,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Blastoise en combate.",
	},
	blazikenite: {
		inherit: true,
		isNonstandard: null,
	},
	butterfreeita: {
		name: "Butterfreeita",
		spritenum: 608,
		megaStone: { Butterfree: "Butterfree-Mega" },
		itemUser: ["Butterfree"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10111,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Butterfree en combate.",
	},
	cameruptite: {
		inherit: true,
		isNonstandard: null,
	},
	centiskorchita: {
		name: "Centiskorchita",
		spritenum: 608,
		megaStone: { Centiskorch: "Centiskorch-Mega" },
		itemUser: ["Centiskorch"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10119,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Centiskorch en combate.",
	},
	chandelurite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditex: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditey: {
		inherit: true,
		isNonstandard: null,
	},
	chesnaughtite: {
		inherit: true,
		isNonstandard: null,
	},
	chimechite: {
		inherit: true,
		isNonstandard: null,
	},
	cinderecita: {
		name: "Cinderecita",
		spritenum: 608,
		megaStone: { Cinderace: "Cinderace-Mega" },
		itemUser: ["Cinderace"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10128,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Cinderace en combate.",
	},
	clefablite: {
		inherit: true,
		isNonstandard: null,
	},
	coalossalita: {
		name: "Coalossalita",
		spritenum: 608,
		megaStone: { Coalossal: "Coalossal-Mega" },
		itemUser: ["Coalossal"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10113,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Coalossal en combate.",
	},
	copperajita: {
		name: "Copperajita",
		spritenum: 608,
		megaStone: { Copperajah: "Copperajah-Mega" },
		itemUser: ["Copperajah"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10123,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Copperajah en combate.",
	},
	corvinightita: {
		name: "Corvinightita",
		spritenum: 608,
		megaStone: { Corviknight: "Corviknight-Mega" },
		itemUser: ["Corviknight"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10109,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Corvinight en combate.",
	},
	crabominite: {
		inherit: true,
		isNonstandard: null,
	},
	darkranite: {
		inherit: true,
		isNonstandard: null,
	},
	delphoxite: {
		inherit: true,
		isNonstandard: null,
	},
	diancite: {
		inherit: true,
		isNonstandard: null,
	},
	dracoplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dragon') return this.chainModify([5120, 4096]);
		},
	},
	dragalgite: {
		inherit: true,
		isNonstandard: null,
	},
	dragoninite: {
		inherit: true,
		isNonstandard: null,
	},
	drampanite: {
		inherit: true,
		isNonstandard: null,
	},
	dreadplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') return this.chainModify([5120, 4096]);
		},
	},
	drednawita: {
		name: "Drednawita",
		spritenum: 608,
		megaStone: { Drednaw: "Drednaw-Mega" },
		itemUser: ["Drednaw"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10112,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Drednaw en combate.",
	},
	duraludonita: {
		name: "Duraludonita",
		spritenum: 608,
		megaStone: { Duraludon: "Duraludon-Mega" },
		itemUser: ["Duraludon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10124,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Duraludon en combate.",
	},
	earthplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ground') return this.chainModify([5120, 4096]);
		},
	},
	eelektrossite: {
		inherit: true,
		isNonstandard: null,
	},
	eeveeita: {
		name: "Eeveeita",
		spritenum: 608,
		megaStone: { Eevee: "Eevee-Mega" },
		itemUser: ["Eevee"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10125,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Eevee en combate.",
	},
	emboarite: {
		inherit: true,
		isNonstandard: null,
	},
	excadrite: {
		inherit: true,
		isNonstandard: null,
	},
	falinksite: {
		inherit: true,
		isNonstandard: null,
	},
	feraligite: {
		inherit: true,
		isNonstandard: null,
	},
	fistplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fighting') return this.chainModify([5120, 4096]);
		},
	},
	flameplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') return this.chainModify([5120, 4096]);
		},
	},
	flappletunita: {
		name: "Flappletunita",
		spritenum: 608,
		megaStone: { Appletun: "Appletun-Mega" },
		itemUser: ["Appletun"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10115,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Flapple y Appletun en combate.",
	},
	floettite: {
		inherit: true,
		isNonstandard: null,
	},
	froslassite: {
		inherit: true,
		isNonstandard: null,
	},
	galladite: {
		inherit: true,
		isNonstandard: null,
	},
	garbodorita: {
		name: "Garbodorita",
		spritenum: 608,
		megaStone: { Garbodor: "Garbodor-Mega" },
		itemUser: ["Garbodor"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10108,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Garbodor en combate.",
	},
	garchompite: {
		inherit: true,
		isNonstandard: null,
	},
	garchompitez: {
		inherit: true,
		isNonstandard: null,
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: null,
	},
	gengaritax: {
		name: "Gengarita X",
		spritenum: 588,
		megaStone: { Gengar: "Gengar-Mega-X" },
		itemUser: ["Gengar"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10101,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Gengar en combate.",
	},
	gengaritay: {
		name: "Gengarita Y",
		spritenum: 588,
		megaStone: { Gengar: "Gengar-Mega-Y" },
		itemUser: ["Gengar"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10104,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Gengar en combate.",
	},
	glalitite: {
		inherit: true,
		isNonstandard: null,
	},
	glimmoranite: {
		inherit: true,
		isNonstandard: null,
	},
	golisopite: {
		inherit: true,
		isNonstandard: null,
	},
	golurkite: {
		inherit: true,
		isNonstandard: null,
	},
	greninjite: {
		inherit: true,
		isNonstandard: null,
	},
	grimmsnarlita: {
		name: "Grimmsnarlita",
		spritenum: 608,
		megaStone: { Grimmsnarl: "Grimmsnarl-Mega" },
		itemUser: ["Grimmsnarl"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10121,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Grimmsnarl en combate.",
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: null,
	},
	hatterenita: {
		name: "Hatterenita",
		spritenum: 608,
		megaStone: { Hatterene: "Hatterene-Mega" },
		itemUser: ["Hatterene"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10120,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Hatterene en combate.",
	},
	hawluchanite: {
		inherit: true,
		isNonstandard: null,
	},
	heatranite: {
		inherit: true,
		isNonstandard: null,
	},
	heracronite: {
		inherit: true,
		isNonstandard: null,
	},
	houndoominite: {
		inherit: true,
		isNonstandard: null,
	},
	icicleplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ice') return this.chainModify([5120, 4096]);
		},
	},
	insectplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Bug') return this.chainModify([5120, 4096]);
		},
	},
	inteleonita: {
		name: "Inteleonita",
		spritenum: 608,
		megaStone: { Inteleon: "Inteleon-Mega" },
		itemUser: ["Inteleon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10129,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Inteleon en combate.",
	},
	ironplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Steel') return this.chainModify([5120, 4096]);
		},
	},
	jumplufita: {
		name: "Jumplufita",
		spritenum: 608,
		megaStone: { Jumpluff: "Jumpluff-Mega" },
		itemUser: ["Jumpluff"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10126,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Jumpluff en combate.",
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: null,
	},
	kinglerita: {
		name: "Kinglerita",
		spritenum: 608,
		megaStone: { Kingler: "Kingler-Mega" },
		itemUser: ["Kingler"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10105,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Kingler en combate.",
	},
	laprasita: {
		name: "Laprasita",
		spritenum: 608,
		megaStone: { Lapras: "Lapras-Mega" },
		itemUser: ["Lapras"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10106,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Lapras en combate.",
	},
	latiasite: {
		inherit: true,
		isNonstandard: null,
	},
	latiosite: {
		inherit: true,
		isNonstandard: null,
	},
	lightball: {
		inherit: true,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') return this.chainModify(2);
			if (pokemon.baseSpecies.baseSpecies === 'Raichu') return this.chainModify(1.5);
		},
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') return this.chainModify(2);
			if (pokemon.baseSpecies.baseSpecies === 'Raichu') return this.chainModify(1.5);
		},
	},
	lopunnite: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionite: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionitez: {
		inherit: true,
		isNonstandard: null,
	},
	machampita: {
		name: "Machampita",
		spritenum: 608,
		megaStone: { Machamp: "Machamp-Mega" },
		itemUser: ["Machamp"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10107,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Machamp en combate.",
	},
	magearnita: {
		name: "Magearnita",
		spritenum: 509,
		megaStone: { Magearna: "Magearna-Mega" },
		itemUser: ["Magearna"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10131,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Magearna en combate.",
	},
	magearnite: {
		inherit: true,
		isNonstandard: null,
	},
	malamarite: {
		inherit: true,
		isNonstandard: null,
	},
	manectite: {
		inherit: true,
		isNonstandard: null,
	},
	mawilite: {
		inherit: true,
		isNonstandard: null,
	},
	meadowplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Grass') return this.chainModify([5120, 4096]);
		},
	},
	medichamite: {
		inherit: true,
		isNonstandard: null,
	},
	meganiumite: {
		inherit: true,
		isNonstandard: null,
	},
	meowsticite: {
		inherit: true,
		isNonstandard: null,
	},
	metagrossite: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: null,
	},
	mindplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Psychic') return this.chainModify([5120, 4096]);
		},
	},
	orbeetleita: {
		name: "Orbeetleita",
		spritenum: 608,
		megaStone: { Orbeetle: "Orbeetle-Mega" },
		itemUser: ["Orbeetle"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10110,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Orbeetle en combate.",
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: null,
	},
	pikachuita: {
		name: "Pikachuita",
		spritenum: 608,
		megaStone: { Pikachu: "Pikachu-Mega" },
		itemUser: ["Pikachu"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10100,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Pikachu en combate.",
	},
	pinsirite: {
		inherit: true,
		isNonstandard: null,
	},
	pixieplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fairy') return this.chainModify([5120, 4096]);
		},
	},
	pyroarite: {
		inherit: true,
		isNonstandard: null,
	},
	raichunitex: {
		inherit: true,
		isNonstandard: null,
	},
	raichunitey: {
		inherit: true,
		isNonstandard: null,
	},
	rillabomita: {
		name: "Rillabomita",
		spritenum: 608,
		megaStone: { Rillaboom: "Rillaboom-Mega" },
		itemUser: ["Rillaboom"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10127,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Rillaboom en combate.",
	},
	sablenite: {
		inherit: true,
		isNonstandard: null,
	},
	salamencite: {
		inherit: true,
		isNonstandard: null,
	},
	sandacondita: {
		name: "Sandacondita",
		spritenum: 608,
		megaStone: { Sandaconda: "Sandaconda-Mega" },
		itemUser: ["Sandaconda"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10116,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Sandaconda en combate.",
	},
	sceptilite: {
		inherit: true,
		isNonstandard: null,
	},
	scizorite: {
		inherit: true,
		isNonstandard: null,
	},
	scolipite: {
		inherit: true,
		isNonstandard: null,
	},
	scovillainite: {
		inherit: true,
		isNonstandard: null,
	},
	scraftinite: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: null,
	},
	skarmorite: {
		inherit: true,
		isNonstandard: null,
	},
	skyplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Flying') return this.chainModify([5120, 4096]);
		},
	},
	slowbronite: {
		inherit: true,
		isNonstandard: null,
	},
	snorlaxita: {
		name: "Snorlaxita",
		spritenum: 608,
		megaStone: { Snorlax: "Snorlax-Mega" },
		itemUser: ["Snorlax"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10130,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Snorlax en combate.",
	},
	splashplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') return this.chainModify([5120, 4096]);
		},
	},
	spookyplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ghost') return this.chainModify([5120, 4096]);
		},
	},
	staraptite: {
		inherit: true,
		isNonstandard: null,
	},
	starminite: {
		inherit: true,
		isNonstandard: null,
	},
	steelixite: {
		inherit: true,
		isNonstandard: null,
	},
	stoneplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') return this.chainModify([5120, 4096]);
		},
	},
	superminevol: {
		name: "Supermin. Evol.",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		// species with more than one evolution entry in Añil's data
		itemUser: [
			"Gloom", "Poliwhirl", "Kadabra", "Machoke", "Graveler", "Slowpoke", "Haunter", "Onix", "Rhydon", "Seadra",
			"Scyther", "Electabuzz", "Magmar", "Eevee", "Porygon", "Porygon2", "Tyrogue", "Wurmple", "Kirlia", "Nincada",
			"Feebas", "Dusclops", "Snorunt", "Clamperl", "Burmy", "Karrablast", "Shelmet", "Spritzee", "Swirlix", "Cosmoem",
			"Applin", "Kubfu", "Charcadet",
		],
		onModifyAtkPriority: 2,
		onModifyAtk(atk, pokemon) {
			if ((this.effect as Item).itemUser!.includes(pokemon.baseSpecies.baseSpecies)) return this.chainModify(1.5);
		},
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if ((this.effect as Item).itemUser!.includes(pokemon.baseSpecies.baseSpecies)) return this.chainModify(1.5);
		},
		onModifySpAPriority: 2,
		onModifySpA(spa, pokemon) {
			if ((this.effect as Item).itemUser!.includes(pokemon.baseSpecies.baseSpecies)) return this.chainModify(1.5);
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if ((this.effect as Item).itemUser!.includes(pokemon.baseSpecies.baseSpecies)) return this.chainModify(1.5);
		},
		onModifySpe(spe, pokemon) {
			if ((this.effect as Item).itemUser!.includes(pokemon.baseSpecies.baseSpecies)) return this.chainModify(1.5);
		},
		num: 10001,
		gen: 9,
	},
	swampertite: {
		inherit: true,
		isNonstandard: null,
	},
	tablanormal: {
		name: "Tabla Normal",
		spritenum: 146,
		onPlate: 'Normal',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Normal') return this.chainModify([5120, 4096]);
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) return false;
			return true;
		},
		forcedForme: "Arceus",
		num: 10002,
		gen: 9,
	},
	tatsugirinite: {
		inherit: true,
		isNonstandard: null,
	},
	tatsugirita: {
		name: "Tatsugirita",
		spritenum: 513,
		megaStone: { Tatsugiri: "Tatsugiri-Mega" },
		itemUser: ["Tatsugiri"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10133,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Tatsugiri en combate.",
	},
	toxicplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Poison') return this.chainModify([5120, 4096]);
		},
	},
	toxtricitita: {
		name: "Toxtricitita",
		spritenum: 608,
		megaStone: { Toxtricity: "Toxtricity-Mega" },
		itemUser: ["Toxtricity"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10118,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Toxtricity en combate.",
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: null,
	},
	venusauritay: {
		name: "Venusaurita Y",
		spritenum: 608,
		megaStone: { Venusaur: "Venusaur-Mega-Y" },
		itemUser: ["Venusaur"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10102,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Venusaur en combate.",
	},
	venusaurite: {
		inherit: true,
		isNonstandard: null,
	},
	victreebelite: {
		inherit: true,
		isNonstandard: null,
	},
	zapplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Electric') return this.chainModify([5120, 4096]);
		},
	},
	zeraorite: {
		inherit: true,
		isNonstandard: null,
	},
	zygardite: {
		inherit: true,
		isNonstandard: null,
	},
};
