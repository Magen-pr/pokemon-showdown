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
	adrenalineorb: {
		inherit: true,
		// Espanto triggers it too (it lowers SpA instead)
		onAfterBoost(boost, target, source, effect) {
			if (effect.name !== 'Intimidate' && effect.name !== 'Espanto') return;
			const stat = effect.name === 'Espanto' ? 'spa' : 'atk';
			if (target.boosts['spe'] === 6 || boost[stat] === 0) return;
			target.useItem();
		},
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
		num: 10120,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Alcremie en combate.",
	},
	aloraichiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	altarianite: {
		inherit: true,
		isNonstandard: null,
	},
	ampharosite: {
		inherit: true,
		isNonstandard: null,
	},
	armorfossil: {
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
	belueberry: {
		inherit: true,
		isNonstandard: null,
	},
	berry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	berryjuice: {
		inherit: true,
		isNonstandard: null,
	},
	berserkgene: {
		inherit: true,
		isNonstandard: "Custom",
	},
	bitterberry: {
		inherit: true,
		isNonstandard: "Custom",
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
	blueorb: {
		inherit: true,
		isNonstandard: null,
	},
	blukberry: {
		inherit: true,
		isNonstandard: null,
	},
	bottlecap: {
		inherit: true,
		isNonstandard: "Custom",
	},
	buggem: {
		inherit: true,
		isNonstandard: null,
	},
	buginiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	bugmemory: {
		inherit: true,
		isNonstandard: null,
	},
	burndrive: {
		inherit: true,
		isNonstandard: null,
	},
	burntberry: {
		inherit: true,
		isNonstandard: "Custom",
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
		num: 10117,
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
	cherishball: {
		inherit: true,
		isNonstandard: null,
	},
	chesnaughtite: {
		inherit: true,
		isNonstandard: null,
	},
	chilldrive: {
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
		num: 10126,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Cinderace en combate.",
	},
	clawfossil: {
		inherit: true,
		isNonstandard: null,
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
		num: 10121,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Copperajah en combate.",
	},
	cornnberry: {
		inherit: true,
		isNonstandard: null,
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
	coverfossil: {
		inherit: true,
		isNonstandard: null,
	},
	crabominite: {
		inherit: true,
		isNonstandard: null,
	},
	crucibellite: {
		inherit: true,
		isNonstandard: "Custom",
	},
	darkgem: {
		inherit: true,
		isNonstandard: null,
	},
	darkiniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	darkmemory: {
		inherit: true,
		isNonstandard: null,
	},
	darkranite: {
		inherit: true,
		isNonstandard: null,
	},
	decidiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	deepseascale: {
		inherit: true,
		isNonstandard: null,
	},
	deepseatooth: {
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
	domefossil: {
		inherit: true,
		isNonstandard: null,
	},
	dousedrive: {
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
	dragongem: {
		inherit: true,
		isNonstandard: null,
	},
	dragoninite: {
		inherit: true,
		isNonstandard: null,
	},
	dragoniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	dragonmemory: {
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
		num: 10122,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Duraludon en combate.",
	},
	durinberry: {
		inherit: true,
		isNonstandard: null,
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
		megaStone: { "Eevee-Starter": "Eevee-Starter-Mega" },
		itemUser: ["Eevee"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10123,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Eevee en combate.",
	},
	eeviumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	electricgem: {
		inherit: true,
		isNonstandard: null,
	},
	electricmemory: {
		inherit: true,
		isNonstandard: null,
	},
	electriumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	emboarite: {
		inherit: true,
		isNonstandard: null,
	},
	excadrite: {
		inherit: true,
		isNonstandard: null,
	},
	fairiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	fairygem: {
		inherit: true,
		isNonstandard: null,
	},
	fairymemory: {
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
	fightinggem: {
		inherit: true,
		isNonstandard: null,
	},
	fightingmemory: {
		inherit: true,
		isNonstandard: null,
	},
	fightiniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	firegem: {
		inherit: true,
		isNonstandard: null,
	},
	firememory: {
		inherit: true,
		isNonstandard: null,
	},
	firiumz: {
		inherit: true,
		isNonstandard: "Custom",
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
		megaStone: { Flapple: "Flapple-Mega", Appletun: "Appletun-Mega" },
		itemUser: ["Flapple"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10114,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Flapple y Appletun en combate.",
	},
	floettite: {
		inherit: true,
		isNonstandard: null,
	},
	flyinggem: {
		inherit: true,
		isNonstandard: null,
	},
	flyingmemory: {
		inherit: true,
		isNonstandard: null,
	},
	flyiniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	fossilizedbird: {
		inherit: true,
		isNonstandard: null,
	},
	fossilizeddino: {
		inherit: true,
		isNonstandard: null,
	},
	fossilizeddrake: {
		inherit: true,
		isNonstandard: null,
	},
	fossilizedfish: {
		inherit: true,
		isNonstandard: null,
	},
	froslassite: {
		inherit: true,
		isNonstandard: null,
	},
	fullincense: {
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
	gengarite: {
		inherit: true,
		isNonstandard: "Custom",
	},
	ghostgem: {
		inherit: true,
		isNonstandard: null,
	},
	ghostiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	ghostmemory: {
		inherit: true,
		isNonstandard: null,
	},
	glalitite: {
		inherit: true,
		isNonstandard: null,
	},
	glimmoranite: {
		inherit: true,
		isNonstandard: null,
	},
	goldberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	goldbottlecap: {
		inherit: true,
		isNonstandard: "Custom",
	},
	golisopite: {
		inherit: true,
		isNonstandard: null,
	},
	golurkite: {
		inherit: true,
		isNonstandard: null,
	},
	grassgem: {
		inherit: true,
		isNonstandard: null,
	},
	grassiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	grassmemory: {
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
		num: 10119,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Grimmsnarl en combate.",
	},
	groundgem: {
		inherit: true,
		isNonstandard: null,
	},
	groundiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	groundmemory: {
		inherit: true,
		isNonstandard: null,
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
		num: 10118,
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
	helixfossil: {
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
	iceberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	icegem: {
		inherit: true,
		isNonstandard: null,
	},
	icememory: {
		inherit: true,
		isNonstandard: null,
	},
	icicleplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ice') return this.chainModify([5120, 4096]);
		},
	},
	iciumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	inciniumz: {
		inherit: true,
		isNonstandard: "Custom",
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
		num: 10127,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Inteleon en combate.",
	},
	ironplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Steel') return this.chainModify([5120, 4096]);
		},
	},
	jawfossil: {
		inherit: true,
		isNonstandard: null,
	},
	jumplufita: {
		name: "Jumplufita",
		spritenum: 608,
		megaStone: { Jumpluff: "Jumpluff-Mega" },
		itemUser: ["Jumpluff"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10124,
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
	kommoniumz: {
		inherit: true,
		isNonstandard: "Custom",
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
	laxincense: {
		inherit: true,
		isNonstandard: null,
	},
	leek: {
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
	luckypunch: {
		inherit: true,
		isNonstandard: null,
	},
	lunaliumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	lycaniumz: {
		inherit: true,
		isNonstandard: "Custom",
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
	machobrace: {
		inherit: true,
		isNonstandard: null,
	},
	magearnite: {
		inherit: true,
		isNonstandard: null,
	},
	magostberry: {
		inherit: true,
		isNonstandard: null,
	},
	mail: {
		inherit: true,
		isNonstandard: "Custom",
	},
	malamarite: {
		inherit: true,
		isNonstandard: null,
	},
	manectite: {
		inherit: true,
		isNonstandard: null,
	},
	marshadiumz: {
		inherit: true,
		isNonstandard: "Custom",
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
	metalpowder: {
		inherit: true,
		isNonstandard: null,
	},
	mewniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: null,
	},
	mimikiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	mindplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Psychic') return this.chainModify([5120, 4096]);
		},
	},
	mintberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	miracleberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	mysteryberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	nanabberry: {
		inherit: true,
		isNonstandard: null,
	},
	nomelberry: {
		inherit: true,
		isNonstandard: null,
	},
	normaliumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	oddincense: {
		inherit: true,
		isNonstandard: null,
	},
	oldamber: {
		inherit: true,
		isNonstandard: null,
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
	pamtreberry: {
		inherit: true,
		isNonstandard: null,
	},
	parkball: {
		inherit: true,
		isNonstandard: "Custom",
	},
	pelucaregia: {
		name: "Peluca Regia",
		spritenum: 439,
		fling: {
			basePower: 30,
		},
		shortDesc: "Hace evolucionar a Eevee en Royaleon.",
		num: 10003,
		gen: 9,
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
	pikaniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	pikashuniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	pinapberry: {
		inherit: true,
		isNonstandard: null,
	},
	pinkbow: {
		inherit: true,
		isNonstandard: "Custom",
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
	plumaelica: {
		name: "Pluma Eólica",
		spritenum: 1,
		fling: {
			basePower: 30,
		},
		shortDesc: "Hace evolucionar a Eevee en Cefireon.",
		num: 10004,
		gen: 9,
	},
	plumefossil: {
		inherit: true,
		isNonstandard: null,
	},
	poisongem: {
		inherit: true,
		isNonstandard: null,
	},
	poisoniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	poisonmemory: {
		inherit: true,
		isNonstandard: null,
	},
	polkadotbow: {
		inherit: true,
		isNonstandard: "Custom",
	},
	primariumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	przcureberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	psncureberry: {
		inherit: true,
		isNonstandard: "Custom",
	},
	psychicgem: {
		inherit: true,
		isNonstandard: null,
	},
	psychicmemory: {
		inherit: true,
		isNonstandard: null,
	},
	psychiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	pyroarite: {
		inherit: true,
		isNonstandard: null,
	},
	quickpowder: {
		inherit: true,
		isNonstandard: null,
	},
	rabutaberry: {
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
	razzberry: {
		inherit: true,
		isNonstandard: null,
	},
	redorb: {
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
		num: 10125,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Rillaboom en combate.",
	},
	rockgem: {
		inherit: true,
		isNonstandard: null,
	},
	rockincense: {
		inherit: true,
		isNonstandard: null,
	},
	rockiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	rockmemory: {
		inherit: true,
		isNonstandard: null,
	},
	rootfossil: {
		inherit: true,
		isNonstandard: null,
	},
	roseincense: {
		inherit: true,
		isNonstandard: null,
	},
	sablenite: {
		inherit: true,
		isNonstandard: null,
	},
	sachet: {
		inherit: true,
		isNonstandard: null,
	},
	sailfossil: {
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
		num: 10115,
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
	seaincense: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: null,
	},
	shockdrive: {
		inherit: true,
		isNonstandard: null,
	},
	skarmorite: {
		inherit: true,
		isNonstandard: null,
	},
	skullfossil: {
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
		num: 10128,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Snorlax en combate.",
	},
	snorliumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	solganiumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	spelonberry: {
		inherit: true,
		isNonstandard: null,
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
	steelgem: {
		inherit: true,
		isNonstandard: null,
	},
	steeliumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	steelixite: {
		inherit: true,
		isNonstandard: null,
	},
	steelmemory: {
		inherit: true,
		isNonstandard: null,
	},
	stick: {
		inherit: true,
		isNonstandard: "Custom",
	},
	stoneplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') return this.chainModify([5120, 4096]);
		},
	},
	strangeball: {
		inherit: true,
		isNonstandard: "Custom",
	},
	supermineralevolutivo: {
		name: "Supermineral Evolutivo",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyAtkPriority: 2,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.evos.some(evo => this.dex.species.get(evo).nfe)) {
				return this.chainModify(1.5);
			}
		},
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.evos.some(evo => this.dex.species.get(evo).nfe)) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 2,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.evos.some(evo => this.dex.species.get(evo).nfe)) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.evos.some(evo => this.dex.species.get(evo).nfe)) {
				return this.chainModify(1.5);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.baseSpecies.evos.some(evo => this.dex.species.get(evo).nfe)) {
				return this.chainModify(1.5);
			}
		},
		num: 10001,
		gen: 9,
		shortDesc: "Si lo lleva un Pokémon que aún puede evolucionar dos veces, aumenta un 50% su Ataque, Defensa, Ataque Especial, Defensa Especial y Velocidad.",
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
	tapuniumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tatsugirinite: {
		inherit: true,
		isNonstandard: null,
	},
	thickclub: {
		inherit: true,
		isNonstandard: null,
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
		megaStone: { Toxtricity: "Toxtricity-Mega", "Toxtricity-Low-Key": "Toxtricity-Low-Key-Mega" },
		itemUser: ["Toxtricity"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 10116,
		gen: 9,
		shortDesc: "Una de las misteriosas Megapiedras. Permite megaevolucionar a Toxtricity en combate.",
	},
	tr00: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr01: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr02: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr03: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr04: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr05: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr06: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr07: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr08: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr09: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr10: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr11: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr12: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr13: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr14: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr15: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr16: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr17: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr18: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr19: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr20: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr21: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr22: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr23: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr24: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr25: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr26: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr27: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr28: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr29: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr30: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr31: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr32: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr33: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr34: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr35: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr36: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr37: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr38: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr39: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr40: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr41: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr42: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr43: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr44: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr45: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr46: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr47: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr48: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr49: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr50: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr51: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr52: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr53: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr54: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr55: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr56: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr57: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr58: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr59: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr60: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr61: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr62: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr63: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr64: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr65: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr66: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr67: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr68: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr69: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr70: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr71: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr72: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr73: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr74: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr75: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr76: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr77: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr78: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr79: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr80: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr81: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr82: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr83: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr84: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr85: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr86: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr87: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr88: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr89: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr90: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr91: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr92: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr93: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr94: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr95: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr96: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr97: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr98: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tr99: {
		inherit: true,
		isNonstandard: "Custom",
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: null,
	},
	ultranecroziumz: {
		inherit: true,
		isNonstandard: "Custom",
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
	vilevial: {
		inherit: true,
		isNonstandard: "Custom",
	},
	watergem: {
		inherit: true,
		isNonstandard: null,
	},
	wateriumz: {
		inherit: true,
		isNonstandard: "Custom",
	},
	watermemory: {
		inherit: true,
		isNonstandard: null,
	},
	watmelberry: {
		inherit: true,
		isNonstandard: null,
	},
	waveincense: {
		inherit: true,
		isNonstandard: null,
	},
	wepearberry: {
		inherit: true,
		isNonstandard: null,
	},
	whippeddream: {
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
