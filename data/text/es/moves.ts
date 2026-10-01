// Mechanics desc style (es): official game terminology. el usuario (user), el objetivo
//   (target), efecto secundario, hacer retroceder (flinch), golpe crítico, niveles (stages),
//   problema de estado (status), movimiento multigolpe, prioridad, sustituto, redondeado
//   hacia abajo/arriba. Decimal comma (1,5). Boilerplate shared verbatim — QC one, fix all.
// Cross-references generated from name fields / pokedex-names.ts. CAP entities keep name
//   null (English fallback); descs are translated with English names inline.

export const MovesText: { [id: IDEntry]: MoveText } = {
	"10000000voltthunderbolt": {
		name: "Gigarrayo Fulminante",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	absorb: {
		name: "Absorber",
		// Official flavor text: "Un ataque que absorbe nutrientes. Quien lo usa recupera la mitad de los PS del daño que produce."
		desc: "Absorbe la mitad del daño producido.",
		shortDesc: "Absorbe la mitad del daño producido.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	accelerock: {
		name: "Roca Veloz",
		// Official flavor text: "El usuario se lanza contra el objetivo a gran velocidad. Este movimiento tiene prioridad alta."
		desc: "El usuario se lanza contra el objetivo a gran velocidad. Siempre ataca primero.",
		shortDesc: "El usuario se lanza contra el objetivo a gran velocidad. Siempre ataca primero.",
	},
	acid: {
		name: "Ácido",
		// Official flavor text: "Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial."
		desc: "Rocía con un ácido corrosivo. Puede bajar la Defensa Especial.",
		shortDesc: "Rocía con un ácido corrosivo. Puede bajar la Defensa Especial.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	acidarmor: {
		name: "Armadura Ácida",
		// Official flavor text: "Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa."
		desc: "Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa.",
		shortDesc: "Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa.",
	},
	aciddownpour: {
		name: "Diluvio Corrosivo",
		shortDesc: null, // NEEDS TRANSLATION
	},
	acidspray: {
		name: "Bomba Ácida",
		// Official flavor text: "Ataca con un líquido corrosivo que reduce mucho la Defensa Especial del objetivo."
		desc: "Ataca con un líquido corrosivo, reduciendo mucho la Defensa Especial del objetivo.",
		shortDesc: "Ataca con un líquido corrosivo, reduciendo mucho la Defensa Especial del objetivo.",
	},
	acrobatics: {
		name: "Acróbata",
		shortDesc: "Golpea ágilmente. Si el usuario no porta ningún objeto, el objetivo resulta seriamente dañado.",
	},
	acupressure: {
		name: "Acupresión",
		// Official flavor text: "Aplica presión en puntos clave del cuerpo para potenciar mucho una de sus características."
		desc: "La presión en puntos clave del cuerpo potencia una de sus características al azar.",
		shortDesc: "La presión en puntos clave del cuerpo potencia una de sus características al azar.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	aerialace: {
		name: "Golpe Aéreo",
		shortDesc: "El usuario lanza un ataque muy rápido e ineludible.",
	},
	aeroblast: {
		name: "Aerochorro",
		// Official flavor text: "Lanza un chorro de aire que suele asestar un golpe crítico."
		desc: "Lanza un chorro de aire que suele dar un golpe crítico.",
		shortDesc: "Lanza un chorro de aire que suele dar un golpe crítico.",
	},
	afteryou: {
		name: "Cede Paso",
		// Official flavor text: "Si el usuario es el más rápido, permite al objetivo usar un movimiento justo tras él, adelantándose a Pokémon más rápidos."
		desc: "Si el usuario es el más rápido, permite al objetivo usar un movimiento justo tras él.",
		shortDesc: "Si el usuario es el más rápido, permite al objetivo usar un movimiento justo tras él.",

		activate: "  ¡{TARGET} ha decidido aprovechar la oportunidad!",
	},
	agility: {
		name: "Agilidad",
		// Official flavor text: "Relaja el cuerpo para ganar mucha Velocidad."
		desc: "Relaja el cuerpo para ganar mucha Velocidad.",
		shortDesc: "Relaja el cuerpo para ganar mucha Velocidad.",
	},
	aircutter: {
		name: "Aire Afilado",
		// Official flavor text: "Viento cortante que azota. Suele ser un golpe crítico."
		desc: "Viento cortante que azota. Suele ser un golpe crítico.",
		shortDesc: "Viento cortante que azota. Suele ser un golpe crítico.",
	},
	airslash: {
		name: "Tajo Aéreo",
		// Official flavor text: "Ataca con un viento afilado que incluso corta el aire. También puede amedrentar al objetivo."
		desc: "Ataca con una hoja de aire que incluso corta el cielo. También puede amedrentar al objetivo.",
		shortDesc: "Ataca con una hoja de aire que incluso corta el cielo. También puede amedrentar al objetivo.",
	},
	alloutpummeling: {
		name: "Ráfaga Demoledora",
		shortDesc: null, // NEEDS TRANSLATION
	},
	alluringvoice: {
		name: "Canto Encantador",
		desc: "Canto angelical que confunde al objetivo si sus características han aumentado en ese turno.",
		shortDesc: "Canto angelical que confunde al objetivo si sus características han aumentado en ese turno.",
	},
	allyswitch: {
		name: "Cambio de Banda",
		// Official flavor text: "Extraño poder que intercambia la posición del usuario con la de un aliado sobre el terreno de combate."
		desc: "Un extraño poder que intercambia las posiciones del usuario y un aliado sobre el terreno de combate.",
		shortDesc: "Un extraño poder que intercambia las posiciones del usuario y un aliado sobre el terreno de combate.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	amnesia: {
		name: "Amnesia",
		// Official flavor text: "El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial."
		desc: "El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.",
		shortDesc: "El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	anchorshot: {
		name: "Anclaje",
		// Official flavor text: "Ataca lanzando un ancla al oponente, que queda atrapado y no puede huir."
		desc: "Ataca lanzando un ancla al oponente, que queda atrapado y no puede huir.",
		shortDesc: "Ataca lanzando un ancla al oponente, que queda atrapado y no puede huir.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	ancientpower: {
		name: "Poder Pasado",
		// Official flavor text: "Ataque prehistórico que puede subir todas las características."
		desc: "Ataque prehistórico que puede subir todas las características.",
		shortDesc: "Ataque prehistórico que puede subir todas las características.",
	},
	appleacid: {
		name: "Ácido Málico",
		// Official flavor text: "Ataca al objetivo con el fluido corrosivo que desprende una manzana ácida, lo que también disminuye la Defensa Especial de este."
		desc: "Ataca con el fluido corrosivo de una manzana ácida, y reduce la Defensa Especial.",
		shortDesc: "Ataca con el fluido corrosivo de una manzana ácida, y reduce la Defensa Especial.",
	},
	aquacutter: {
		name: "Tajo Acuático",
		desc: "Corta al objetivo con agua a presión como si de una hoja se tratara. Suele ser crítico.",
		shortDesc: "Corta al objetivo con agua a presión como si de una hoja se tratara. Suele ser crítico.",
	},
	aquajet: {
		name: "Acua Jet",
		// Official flavor text: "Ataque de una rapidez espeluznante. Este movimiento tiene prioridad alta."
		desc: "Ataque rápido que permite golpear en primer lugar.",
		shortDesc: "Ataque rápido que permite golpear en primer lugar.",
	},
	aquaring: {
		name: "Acua Aro",
		// Official flavor text: "Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno."
		desc: "Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.",
		shortDesc: "Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.",

		start: "  ¡{POKEMON} se ha rodeado de un manto de agua!",
		heal: "  ¡{POKEMON} ha recuperado algunos PS gracias al manto de agua que rodea su cuerpo!",
	},
	aquastep: {
		name: "Danza Acuática",
		desc: "Ejecuta una elegante y fluida danza y le inflige daño. Aumenta la Velocidad del usuario.",
		shortDesc: "Ejecuta una elegante y fluida danza y le inflige daño. Aumenta la Velocidad del usuario.",
	},
	aquatail: {
		name: "Acua Cola",
		shortDesc: "Ataca agitando la cola como si fuera una ola rabiosa en una tormenta devastadora.",
	},
	armorcannon: {
		name: "Cañón Armadura",
		desc: "Arroja partes de su armadura como proyectiles ardientes. Reduce la Def. y la Def. Esp. del usuario.",
		shortDesc: "Arroja partes de su armadura como proyectiles ardientes. Reduce la Def. y la Def. Esp. del usuario.",
	},
	armthrust: {
		name: "Empujón",
		// Official flavor text: "Fuertes empujones que golpean de dos a cinco veces seguidas."
		desc: "Empujones directos que golpean de dos a cinco veces seguidas.",
		shortDesc: "Empujones directos que golpean de dos a cinco veces seguidas.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	aromatherapy: {
		name: "Aromaterapia",
		// Official flavor text: "Cura todos los problemas de estado del equipo con un suave aroma."
		desc: "Cura los problemas de estado del equipo con un suave aroma.",
		shortDesc: "Cura los problemas de estado del equipo con un suave aroma.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Un aroma balsámico flota en el aire.",
	},
	aromaticmist: {
		name: "Niebla Aromática",
		// Official flavor text: "Consigue aumentar la Defensa Especial de un Pokémon de su equipo con una fragancia misteriosa."
		desc: "Consigue aumentar la Defensa Especial de un Pokémon de su equipo con una fragancia misteriosa.",
		shortDesc: "Consigue aumentar la Defensa Especial de un Pokémon de su equipo con una fragancia misteriosa.",
	},
	assist: {
		name: "Ayuda",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Usa un movimiento de un miembro del equipo elegido al azar.",
		shortDesc: "Usa un movimiento de un miembro del equipo elegido al azar.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	assurance: {
		name: "Buena Baza",
		// Official flavor text: "Si el objetivo ya ha sufrido daño en ese turno, la fuerza del ataque se duplica."
		desc: "Si el objetivo ya ha sufrido daño en ese turno, la fuerza del ataque se duplica.",
		shortDesc: "Si el objetivo ya ha sufrido daño en ese turno, la fuerza del ataque se duplica.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	astonish: {
		name: "Impresionar",
		// Official flavor text: "Lanza un grito tan tremendo que impresiona y puede amedrentar al objetivo."
		desc: "Impresiona tanto que puede amedrentar al objetivo.",
		shortDesc: "Impresiona tanto que puede amedrentar al objetivo.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	astralbarrage: {
		name: "Orbes Espectro",
		// Official flavor text: "El usuario ataca al objetivo lanzándole una ingente cantidad de pequeños fantasmas."
		desc: "El usuario ataca lanzando una ráfaga de fantasmas que daña a ambos rivales.",
		shortDesc: "El usuario ataca lanzando una ráfaga de fantasmas que daña a ambos rivales.",
	},
	attackorder: {
		name: "Al Ataque",
		// Official flavor text: "El usuario llama a sus súbditos para que ataquen al objetivo. Suele ser crítico."
		desc: "El usuario llama a sus amigos para que ataquen al rival. Suele ser crítico.",
		shortDesc: "El usuario llama a sus amigos para que ataquen al rival. Suele ser crítico.",
	},
	attract: {
		name: "Atracción",
		// Official flavor text: "Si el objetivo es del sexo opuesto, se enamorará y bajará la posibilidad de que ataque."
		desc: "Si el objetivo es del sexo opuesto, se enamorará y bajará la posibilidad de que ataque.",
		shortDesc: "Si el objetivo es del sexo opuesto, se enamorará y bajará la posibilidad de que ataque.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} se ha enamorado!",
		startFromItem: "  ¡{POKEMON} se ha enamorado debido {ITEM:a:definite}!",
		end: "  ¡{POKEMON} ya no está enamorado!",
		endFromItem: "  ¡{POKEMON} ya no está enamorado gracias {ITEM:a:definite:classified}!",
		activate: "  ¡{POKEMON} está enamorado de {TARGET}!",
		cant: "¡El enamoramiento impide que {POKEMON} reaccione!",
	},
	aurasphere: {
		name: "Esfera Aural",
		shortDesc: "Libera una descarga de la fuerza del aura desde su interior. Es infalible.",
	},
	aurawheel: {
		name: "Rueda Aural",
		// Official flavor text: "La energía que acumula en las mejillas le sirve para atacar y aumentar su Velocidad. Este movimiento cambia de tipo según la forma que adopte Morpeko."
		desc: "Ataca y sube su Velocidad del usuario. Cambia de tipo dependiendo de la forma del usuario.",
		shortDesc: "Ataca y sube su Velocidad del usuario. Cambia de tipo dependiendo de la forma del usuario.",
	},
	aurorabeam: {
		name: "Rayo Aurora",
		// Official flavor text: "Rayo multicolor que puede reducir el Ataque."
		desc: "Rayo multicolor que puede reducir el Ataque.",
		shortDesc: "Rayo multicolor que puede reducir el Ataque.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	auroraveil: {
		name: "Velo Aurora",
		// Official flavor text: "Reduce el daño de los ataques físicos y especiales que ejecuta el rival durante cinco turnos. Solo puede usarse cuando está granizando."
		desc: "Reduce el daño de los ataques físicos y especiales que ejecuta el rival durante cinco turnos. Solo puede usarse cuando está nevando.",
		shortDesc: "Reduce el daño de los ataques físicos y especiales que ejecuta el rival durante cinco turnos. Solo puede usarse cuando está nevando.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡Velo Aurora ha aumentado la resistencia de {TEAM} ante los ataques físicos y especiales!",
		end: "  El efecto de Velo Aurora en {TEAM} se ha disipado.",
	},
	autotomize: {
		name: "Aligerar",
		// Official flavor text: "El usuario se desprende de partes prescindibles de su cuerpo para hacerse más ligero y aumentar mucho su Velocidad."
		desc: "El usuario se sacude para hacerse más ligero y aumentar mucho su Velocidad.",
		shortDesc: "El usuario se sacude para hacerse más ligero y aumentar mucho su Velocidad.",

		start: "  ¡{POKEMON} es ahora más ligero!",
	},
	avalanche: {
		name: "Alud",
		// Official flavor text: "Este ataque inflige el doble de daño a un objetivo que haya golpeado al usuario en ese mismo turno."
		desc: "Este ataque inflige el doble de daño a un objetivo que haya golpeado al usuario en ese mismo turno.",
		shortDesc: "Este ataque inflige el doble de daño a un objetivo que haya golpeado al usuario en ese mismo turno.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	axekick: {
		name: "Patada Hacha",
		desc: "Lanza una patada al aire y golpea con el talón. Si falla, se hiere a sí mismo. Puede confundir.",
		shortDesc: "Lanza una patada al aire y golpea con el talón. Si falla, se hiere a sí mismo. Puede confundir.",

		damage: "#crash",
	},
	babydolleyes: {
		name: "Ojitos Tiernos",
		// Official flavor text: "Lanza una mirada al objetivo con ojos acaramelados, con lo que logra que su Ataque se reduzca. Este movimiento tiene prioridad alta."
		desc: "Lanza una mirada al Pokémon objetivo, reduciendo su Ataque. Siempre va primero.",
		shortDesc: "Lanza una mirada al Pokémon objetivo, reduciendo su Ataque. Siempre va primero.",
	},
	baddybad: {
		name: "Umbreozona",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario actúa mal, ataca al objetivo y levanta una pantalla de Reflejo.",
		shortDesc: "El usuario actúa mal, ataca al objetivo y levanta una pantalla de Reflejo.",
	},
	banefulbunker: {
		name: "Búnker",
		// Official flavor text: "Protege de los ataques y, al mismo tiempo, envenena al Pokémon que use un movimiento de contacto contra el usuario."
		desc: "Protege de ataques y, al mismo tiempo, envenena al que use un movimiento de contacto contra él.",
		shortDesc: "Protege de ataques y, al mismo tiempo, envenena al que use un movimiento de contacto contra él.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	barbbarrage: {
		name: "Mil Púas Tóxicas",
		desc: "Dispara púas tóxicas que pueden envenenar al objetivo. Duplica la potencia si está envenenado.",
		shortDesc: "Dispara púas tóxicas que pueden envenenar al objetivo. Duplica la potencia si está envenenado.",
	},
	barrage: {
		name: "Bombardeo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Arroja esferas al objetivo entre dos y cinco veces seguidas.",
		shortDesc: "Arroja esferas al objetivo entre dos y cinco veces seguidas.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	barrier: {
		name: "Barrera",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Crea una barrera para aumentar mucho la Defensa.",
		shortDesc: "Crea una barrera para aumentar mucho la Defensa.",
	},
	batonpass: {
		name: "Relevo",
		// Official flavor text: "Cambia el puesto con otro miembro del equipo y le pasa los cambios de características."
		desc: "Cambia el puesto con un compañero y le pasa los cambios de características.",
		shortDesc: "Cambia el puesto con un compañero y le pasa los cambios de características.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	beakblast: {
		name: "Pico Cañón",
		// Official flavor text: "Primero aumenta la temperatura de su pico y luego ejecuta un ataque. Quema al rival si este le propina un ataque físico mientras está calentando el pico."
		desc: "Carga el pico antes de atacar. Quema al rival si recibe un ataque físico durante la carga.",
		shortDesc: "Carga el pico antes de atacar. Quema al rival si recibe un ataque físico durante la carga.",

		start: "  ¡{POKEMON} empieza a calentar su pico!",
	},
	beatup: {
		name: "Paliza",
		// Official flavor text: "Ataque de todo el equipo Pokémon. Cuantos más haya, más veces se atacará."
		desc: "Ataque de todo el equipo Pokémon. Cuantos más haya, más veces ataca.",
		shortDesc: "Ataque de todo el equipo Pokémon. Cuantos más haya, más veces ataca.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡Ataque de {NAME}!",
	},
	behemothbash: {
		name: "Embate Supremo",
		shortDesc: "El usuario se convierte en un escudo gigante y arremete contra el objetivo.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	behemothblade: {
		name: "Tajo Supremo",
		shortDesc: "El usuario se convierte en una espada gigante para rebanar al objetivo.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	belch: {
		name: "Eructo",
		// Official flavor text: "El Pokémon causa daño a su oponente lanzándole un eructo. Para poder utilizar este movimiento tiene que llevar una baya y comérsela."
		desc: "Causa daño a su oponente lanzándole un eructo. Para usarlo tiene que llevar una Baya y comérsela.",
		shortDesc: "Causa daño a su oponente lanzándole un eructo. Para usarlo tiene que llevar una Baya y comérsela.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	bellydrum: {
		name: "Tambor",
		// Official flavor text: "Reduce la mitad de los PS máximos para mejorar al máximo el Ataque."
		desc: "Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.",
		shortDesc: "Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		boost: "  ¡{POKEMON} ha sacrificado algunos PS y ha aumentado al máximo su Ataque!",
	},
	bestow: {
		name: "Ofrenda",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Entrega el objeto que lleva al objetivo en caso de que este no tenga ninguno.",
		shortDesc: "Entrega el objeto que lleva al objetivo en caso de que este no tenga ninguno.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		takeItem: "  ¡{POKEMON} ha recibido {ITEM:indefinite} de {SOURCE}!",
	},
	bide: {
		name: "Venganza",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Resiste dos golpes para liberar la energia acumulada.",
		shortDesc: "Resiste dos golpes para liberar la energia acumulada.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} está acumulando energía!",
		end: "  ¡{POKEMON} ha liberado la energía!",
		activate: "  ¡{POKEMON} está acumulando energía!",
	},
	bind: {
		name: "Atadura",
		// Official flavor text: "Ata y oprime de cuatro a cinco turnos."
		desc: "Ata y oprime de cuatro a cinco turnos.",
		shortDesc: "Ata y oprime de cuatro a cinco turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡La atadura de {SOURCE} oprime a {POKEMON}!",
		move: "#wrap",
	},
	bite: {
		name: "Mordisco",
		// Official flavor text: "Un voraz bocado que puede amedrentar al objetivo."
		desc: "Un voraz bocado que puede amedrentar al objetivo.",
		shortDesc: "Un voraz bocado que puede amedrentar al objetivo.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bitterblade: {
		name: "Espada Lamento",
		desc: "Asesta una estocada llena de rencor. Recupera la mitad de los PS del daño que produce.",
		shortDesc: "Asesta una estocada llena de rencor. Recupera la mitad de los PS del daño que produce.",
	},
	bittermalice: {
		name: "Rencor Reprimido",
		desc: "Ataca al objetivo sometiéndolo a su frío rencor y reduce su Ataque.",
		shortDesc: "Ataca al objetivo sometiéndolo a su frío rencor y reduce su Ataque.",
	},
	blackholeeclipse: {
		name: "Agujero Negro Aniquilador",
		shortDesc: null, // NEEDS TRANSLATION
	},
	blastburn: {
		name: "Anillo Ígneo",
		// Official flavor text: "Explosión de fuego. El atacante debe descansar el siguiente turno."
		desc: "Explosión de fuego. El atacante debe descansar el siguiente turno.",
		shortDesc: "Explosión de fuego. El atacante debe descansar el siguiente turno.",
	},
	blazekick: {
		name: "Patada Ígnea",
		// Official flavor text: "Patada que suele ser un golpe crítico y puede causar quemaduras."
		desc: "Patada que suele ser un golpe crítico y puede causar quemaduras.",
		shortDesc: "Patada que suele ser un golpe crítico y puede causar quemaduras.",
	},
	blazingtorque: {
		name: "Pirochoque",
		desc: "Puede causar quemaduras.",
		shortDesc: "Puede causar quemaduras.",
	},
	bleakwindstorm: {
		name: "Vendaval Gélido",
		desc: "Viento muy frío que estremece el cuerpo y puede reducir la Velocidad del objetivo.",
		shortDesc: "Viento muy frío que estremece el cuerpo y puede reducir la Velocidad del objetivo.",
	},
	blizzard: {
		name: "Ventisca",
		// Official flavor text: "Tormenta de hielo que puede llegar a congelar."
		desc: "Tormenta de hielo que puede llegar a congelar.",
		shortDesc: "Tormenta de hielo que puede llegar a congelar.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	block: {
		name: "Bloqueo",
		// Official flavor text: "Le corta el paso al objetivo para que no pueda escapar."
		desc: "Le corta el paso al objetivo para que no pueda escapar.",
		shortDesc: "Le corta el paso al objetivo para que no pueda escapar.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	bloodmoon: {
		name: "Luna Roja",
		shortDesc: "Ataca con toda su fuerza a través de una luna roja. No puede usarse dos veces seguidas.",
	},
	bloomdoom: {
		name: "Megatón Floral",
		shortDesc: null, // NEEDS TRANSLATION
	},
	blueflare: {
		name: "Llama Azul",
		// Official flavor text: "Ataca con una bella pero potente llama azul que rodea al objetivo. Puede quemarlo."
		desc: "Ataca con una bella pero potente llama azul que rodea al objetivo. Puede quemarlo.",
		shortDesc: "Ataca con una bella pero potente llama azul que rodea al objetivo. Puede quemarlo.",
	},
	bodypress: {
		name: "Plancha Corporal",
		// Official flavor text: "El usuario usa el cuerpo para lanzar su ataque e infligir un daño directamente proporcional a su Defensa."
		desc: "El usuario embistie al objetivo. Cuanto más alta sea la Defensa del usuario, más daño inflingirá.",
		shortDesc: "El usuario embistie al objetivo. Cuanto más alta sea la Defensa del usuario, más daño inflingirá.",
	},
	bodyslam: {
		name: "Golpe Cuerpo",
		// Official flavor text: "Salta sobre el objetivo con todo su peso y puede llegar a paralizarlo."
		desc: "Salta sobre el objetivo con su peso. Puede paralizar.",
		shortDesc: "Salta sobre el objetivo con su peso. Puede paralizar.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	boltbeak: {
		name: "Electropico",
		// Official flavor text: "El usuario ensarta al objetivo con su pico cargado de electricidad. Si ataca en primer lugar, la potencia del movimiento se duplica."
		desc: "Ataca con su pico electrificado. Si el usuario ataca antes que el objetivo, duplica la potencia.",
		shortDesc: "Ataca con su pico electrificado. Si el usuario ataca antes que el objetivo, duplica la potencia.",
	},
	boltstrike: {
		name: "Ataque Fulgor",
		// Official flavor text: "Ataca envolviéndose de una gran carga eléctrica y embistiendo al objetivo con ella. Puede paralizar."
		desc: "Ataca envolviéndose de una gran carga eléctrica y embistiendo al objetivo con ella. Puede paralizar.",
		shortDesc: "Ataca envolviéndose de una gran carga eléctrica y embistiendo al objetivo con ella. Puede paralizar.",
	},
	boneclub: {
		name: "Hueso Palo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Aporrea con un hueso. Puede amedrentar al objetivo.",
		shortDesc: "Aporrea con un hueso. Puede amedrentar al objetivo.",
	},
	bonemerang: {
		name: "Huesomerang",
		// Official flavor text: "Lanza un hueso a modo de bumerán que golpea dos veces."
		desc: "Lanza un hueso a modo de bumerán que golpea dos veces.",
		shortDesc: "Lanza un hueso a modo de bumerán que golpea dos veces.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	bonerush: {
		name: "Ataque Óseo",
		// Official flavor text: "Hueso en ristre, aporrea al objetivo de dos a cinco veces."
		desc: "Hueso en ristre, aporrea al objetivo de dos a cinco veces.",
		shortDesc: "Hueso en ristre, aporrea al objetivo de dos a cinco veces.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	boomburst: {
		name: "Estruendo",
		// Official flavor text: "Ataca a todos los Pokémon a su alrededor con una potentísima onda sonora."
		desc: "Ataca a todos los Pokémon a su alrededor con una potentísima onda sonora.",
		shortDesc: "Ataca a todos los Pokémon a su alrededor con una potentísima onda sonora.",
	},
	bounce: {
		name: "Bote",
		// Official flavor text: "El usuario bota en el primer turno y golpea al objetivo en el segundo y puede llegar a paralizarlo."
		desc: "Primer turno: bota. Segundo turno: golpea. Puede paralizar.",
		shortDesc: "Primer turno: bota. Segundo turno: golpea. Puede paralizar.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "¡{POKEMON} ha saltado muy alto!",
	},
	bouncybubble: {
		name: "Vapodrenaje",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario ataca disparando burbujas de agua al objetivo y absorbe la mitad del daño producido.",
		shortDesc: "El usuario ataca disparando burbujas de agua al objetivo y absorbe la mitad del daño producido.",
	},
	branchpoke: {
		name: "Punzada Rama",
		// Official flavor text: "Ataca pinchando al objetivo con una rama afilada."
		desc: "Ataca pinchando al objetivo con una rama afilada.",
		shortDesc: "Ataca pinchando al objetivo con una rama afilada.",
	},
	bravebird: {
		name: "Pájaro Osado",
		// Official flavor text: "Pliega sus alas y ataca con un vuelo rasante. El Pokémon que lo usa también resulta seriamente dañado."
		desc: "Pliega sus alas y ataca con un vuelo rasante. El Pokémon que lo usa también resulta dañado.",
		shortDesc: "Pliega sus alas y ataca con un vuelo rasante. El Pokémon que lo usa también resulta dañado.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	breakingswipe: {
		name: "Vasto Impacto",
		// Official flavor text: "El usuario sacude violentamente su enorme cola para golpear a todos los rivales y reducir su Ataque a la par."
		desc: "Azota con ímpetu con su cola al Pokémon enemigo. Esto hace que baje el Ataque del objetivo.",
		shortDesc: "Azota con ímpetu con su cola al Pokémon enemigo. Esto hace que baje el Ataque del objetivo.",
	},
	breakneckblitz: {
		name: "Carrera Arrolladora",
		shortDesc: null, // NEEDS TRANSLATION
	},
	brickbreak: {
		name: "Demolición",
		// Official flavor text: "Potente ataque que también es capaz de destruir barreras como Pantalla de Luz y Reflejo."
		desc: "Potente ataque que también es capaz de destruir barreras como pantalla de luz y reflejo.",
		shortDesc: "Potente ataque que también es capaz de destruir barreras como pantalla de luz y reflejo.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: null, // NEEDS TRANSLATION
	},
	brine: {
		name: "Salmuera",
		// Official flavor text: "Si al objetivo le queda la mitad o menos de sus PS, el ataque será el doble de fuerte."
		desc: "Si al objetivo le queda la mitad o menos de sus PS, el ataque será el doble de fuerte.",
		shortDesc: "Si al objetivo le queda la mitad o menos de sus PS, el ataque será el doble de fuerte.",
	},
	brutalswing: {
		name: "Giro Vil",
		// Official flavor text: "Hace pivotar su cuerpo para causar daño a su alrededor."
		desc: "Hace pivotar su cuerpo para infligir daño a todos sus rivales.",
		shortDesc: "Hace pivotar su cuerpo para infligir daño a todos sus rivales.",
	},
	bubble: {
		name: "Burbuja",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Lanza burbujas al contrincante y puede reducir su Velocidad.",
		shortDesc: "Lanza burbujas al contrincante y puede reducir su Velocidad.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bubblebeam: {
		name: "Rayo Burbuja",
		// Official flavor text: "Diluvio de burbujas que puede bajar la Velocidad."
		desc: "Diluvio de burbujas que puede bajar la Velocidad.",
		shortDesc: "Diluvio de burbujas que puede bajar la Velocidad.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bugbite: {
		name: "Picadura",
		// Official flavor text: "Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto."
		desc: "Pica al rival. Si el adversario lleva una Baya, el agresor se la come y se beneficia de su efecto.",
		shortDesc: "Pica al rival. Si el adversario lleva una Baya, el agresor se la come y se beneficia de su efecto.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "  ¡{SOURCE} ha robado {ITEM:definite:classified} del objetivo y se {INFLECT:ITEM:ms=lo:fs=la:mp=los:fp=las} ha comido!",
	},
	bugbuzz: {
		name: "Zumbido",
		// Official flavor text: "El usuario crea una onda sónica dañina moviendo su cuerpo que también puede disminuir la Defensa Especial del objetivo."
		desc: "El movimiento de las alas crea una onda sónica dañina. Puede disminuir la Defensa Especial del objetivo.",
		shortDesc: "El movimiento de las alas crea una onda sónica dañina. Puede disminuir la Defensa Especial del objetivo.",
	},
	bulkup: {
		name: "Corpulencia",
		// Official flavor text: "Robustece el cuerpo para subir el Ataque y la Defensa."
		desc: "Robustece el cuerpo para subir el Ataque y la Defensa.",
		shortDesc: "Robustece el cuerpo para subir el Ataque y la Defensa.",
	},
	bulldoze: {
		name: "Terratemblor",
		// Official flavor text: "Sacudida sísmica que afecta a los demás Pokémon adyacentes y también reduce su Velocidad."
		desc: "Ataca con una sacudida sísmica que afecta a los Pokémon adyacentes y baja su Velocidad.",
		shortDesc: "Ataca con una sacudida sísmica que afecta a los Pokémon adyacentes y baja su Velocidad.",
	},
	bulletpunch: {
		name: "Puño Bala",
		// Official flavor text: "Ataca con fuertes puñetazos tan rápidos como proyectiles. Este movimiento tiene prioridad alta."
		desc: "Fuerte puñetazo tan rápido como un proyectil. Este movimiento siempre va primero.",
		shortDesc: "Fuerte puñetazo tan rápido como un proyectil. Este movimiento siempre va primero.",
	},
	bulletseed: {
		name: "Semilladora",
		// Official flavor text: "Dispara rápido de dos a cinco ráfagas de semillas de manera consecutiva."
		desc: "Dispara rápido de dos a cinco ráfagas de semillas de manera consecutiva.",
		shortDesc: "Dispara rápido de dos a cinco ráfagas de semillas de manera consecutiva.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	burningbulwark: {
		name: "Llama Protectora",
		desc: "Emplea pelaje para protegerse de ataques y causar quemaduras si le tocan.",
		shortDesc: "Emplea pelaje para protegerse de ataques y causar quemaduras si le tocan.",
	},
	burningjealousy: {
		name: "Envidia Ardiente",
		// Official flavor text: "Ataca al objetivo con la energía generada por la envidia y causa quemaduras a los Pokémon cuyas características hayan aumentado en ese turno."
		desc: "Causa quemaduras a los Pokémon cuyas características hayan aumentado en ese turno.",
		shortDesc: "Causa quemaduras a los Pokémon cuyas características hayan aumentado en ese turno.",
	},
	burnup: {
		name: "Llama Final",
		// Official flavor text: "Utiliza hasta el último resquicio de llamas de su cuerpo para infligir un grave daño al oponente. Tras el ataque, el usuario deja de ser de tipo Fuego."
		desc: "Usa hasta el último resquicio de llamas de su cuerpo para atacar, pero pierde el tipo Fuego.",
		shortDesc: "Usa hasta el último resquicio de llamas de su cuerpo para atacar, pero pierde el tipo Fuego.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		typeChange: "  ¡El fuego interior de {POKEMON} se ha extinguido!",
	},
	buzzybuzz: {
		name: "Joltioparálisis",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario dispara una descarga eléctrica para atacar al objetivo, siempre paraliza.",
		shortDesc: "El usuario dispara una descarga eléctrica para atacar al objetivo, siempre paraliza.",
	},
	calmmind: {
		name: "Paz Mental",
		// Official flavor text: "Aumenta la concentración y calma el espíritu para subir el Ataque Especial y la Defensa Especial."
		desc: "Aumenta la concentración y calma el espíritu para subir el Ataque Especial y la Defensa Especial.",
		shortDesc: "Aumenta la concentración y calma el espíritu para subir el Ataque Especial y la Defensa Especial.",
	},
	camouflage: {
		name: "Camuflaje",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Modifica el tipo del Pokémon según el terreno de combate donde esté.",
		shortDesc: "Modifica el tipo del Pokémon según el terreno de combate donde esté.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	captivate: {
		name: "Seducción",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Si el objetivo es del sexo opuesto, queda embelesado y baja mucho su Ataque Especial.",
		shortDesc: "Si el objetivo es del sexo opuesto, queda embelesado y baja mucho su Ataque Especial.",
	},
	catastropika: {
		name: "Pikavoltio Letal",
		shortDesc: null, // NEEDS TRANSLATION
	},
	ceaselessedge: {
		name: "Tajo Metralla",
		desc: "Ataca con una espada de forma brusca y, al hacerlo, se deprenden púas que rodean al bando enemigo.",
		shortDesc: "Ataca con una espada de forma brusca y, al hacerlo, se deprenden púas que rodean al bando enemigo.",
	},
	celebrate: {
		name: "Celebración",
		shortDesc: "El Pokémon te felicita en un día muy especial para ti.",

		activate: "  ¡Felicidades, {TRAINER}!",
	},
	charge: {
		name: "Carga",
		// Official flavor text: "Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial."
		desc: "Recarga energía para potenciar el siguiente movimiento Eléctrico. Sube la Defensa Especial.",
		shortDesc: "Recarga energía para potenciar el siguiente movimiento Eléctrico. Sube la Defensa Especial.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha comenzado a acumular energía!",
	},
	chargebeam: {
		name: "Rayo Carga",
		// Official flavor text: "Lanza un rayo eléctrico contra el objetivo. Puede subir el Ataque Especial de quien lo usa."
		desc: "Lanza un rayo eléctrico contra el rival. Puede subir el Ataque Especial de quien lo usa.",
		shortDesc: "Lanza un rayo eléctrico contra el rival. Puede subir el Ataque Especial de quien lo usa.",
	},
	charm: {
		name: "Encanto",
		// Official flavor text: "Engatusa al objetivo y reduce mucho su Ataque."
		desc: "Engatusa al objetivo y reduce bastante su Ataque.",
		shortDesc: "Engatusa al objetivo y reduce bastante su Ataque.",
	},
	chatter: {
		name: "Cháchara",
		// Official flavor text: "Ataca con una onda de sonido muy ruidosa compuesta por palabras y confunde al objetivo."
		desc: "Ataca con una onda sónica compuesta por palabras que ha aprendido. Puede confundir al objetivo.",
		shortDesc: "Ataca con una onda sónica compuesta por palabras que ha aprendido. Puede confundir al objetivo.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	chillingwater: {
		name: "Agua Fría",
		desc: "Ataca al objetivo rociándolo con un agua gélida y desalentadora que reduce su Ataque.",
		shortDesc: "Ataca al objetivo rociándolo con un agua gélida y desalentadora que reduce su Ataque.",
	},
	chillyreception: {
		name: "Fría Acogida",
		desc: "Cuenta un chiste con una acogida tan fría que hace que nieve, y se cambia por un Pokémon del equipo.",
		shortDesc: "Cuenta un chiste con una acogida tan fría que hace que nieve, y se cambia por un Pokémon del equipo.",

		prepare: "  {POKEMON} se prepara para contar un chiste malo...",
	},
	chipaway: {
		name: "Guardia Baja",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Busca los puntos débiles del objetivo y causa daño aunque cambien sus características.",
		shortDesc: "Busca los puntos débiles del objetivo y causa daño aunque cambien sus características.",
	},
	chloroblast: {
		name: "Clorofiláser",
		desc: "El usuario concentra clorofila y la dispara en forma de rayo, pero también se hiere a sí mismo.",
		shortDesc: "El usuario concentra clorofila y la dispara en forma de rayo, pero también se hiere a sí mismo.",
	},
	circlethrow: {
		name: "Llave Giro",
		// Official flavor text: "Lanza por los aires al objetivo y hace que salga otro Pokémon. Si es uno salvaje, acaba el combate."
		desc: "Lanza por los aires al objetivo y hace que salga otro Pokémon. Si es uno salvaje, acaba el combate.",
		shortDesc: "Lanza por los aires al objetivo y hace que salga otro Pokémon. Si es uno salvaje, acaba el combate.",
	},
	clamp: {
		name: "Tenaza",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Atrapa y atenaza con fuerza durante cuatro o cinco turnos.",
		shortDesc: "Atrapa y atenaza con fuerza durante cuatro o cinco turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{SOURCE} ha atenazado a {POKEMON}!",
		move: "#wrap",
	},
	clangingscales: {
		name: "Fragor Escamas",
		// Official flavor text: "Frota todas las escamas de su cuerpo para crear un fuerte sonido con el que ataca. Cuando el ataque termina, su Defensa se ve reducida."
		desc: "Frota las escamas de su cuerpo para crear un fuerte sonido, a costa de reducir su Defensa.",
		shortDesc: "Frota las escamas de su cuerpo para crear un fuerte sonido, a costa de reducir su Defensa.",
	},
	clangoroussoul: {
		name: "Estruendo Escama",
		// Official flavor text: "Utiliza parte de los PS propios para subir sus características."
		desc: "El usuario aumenta todas sus características a cambio de sus PS.",
		shortDesc: "El usuario aumenta todas sus características a cambio de sus PS.",
	},
	clangoroussoulblaze: {
		name: "Estruendo Implacable",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	clearsmog: {
		name: "Niebla Clara",
		shortDesc: "Ataca al objetivo con una extraña niebla que elimina sus cambios de características.",
	},
	closecombat: {
		name: "A Bocajarro",
		// Official flavor text: "Lucha abiertamente contra el objetivo sin protegerse. También reduce la Defensa y la Defensa Especial del usuario."
		desc: "Lucha abiertamente contra el rival. Reduce la Defensa y la Defensa Especial del usuario.",
		shortDesc: "Lucha abiertamente contra el rival. Reduce la Defensa y la Defensa Especial del usuario.",
	},
	coaching: {
		name: "Motivación",
		// Official flavor text: "El usuario imparte indicaciones precisas a sus aliados, que ven aumentados su Ataque y su Defensa."
		desc: "El usuario imparte indicaciones precisas a sus aliados, que ven aumentados su Ataque y su Defensa.",
		shortDesc: "El usuario imparte indicaciones precisas a sus aliados, que ven aumentados su Ataque y su Defensa.",
	},
	coil: {
		name: "Enrosque",
		// Official flavor text: "El usuario se concentra, lo que le permite aumentar su Ataque, Defensa y Precisión."
		desc: "El usuario se concentra, lo que le permite aumentar su Ataque, Defensa y Precisión.",
		shortDesc: "El usuario se concentra, lo que le permite aumentar su Ataque, Defensa y Precisión.",
	},
	collisioncourse: {
		name: "Nitrochoque",
		desc: "Choca contra el suelo mientras se transforma. La potencia aumenta si es supereficaz.",
		shortDesc: "Choca contra el suelo mientras se transforma. La potencia aumenta si es supereficaz.",
	},
	combattorque: {
		name: "Pugnachoque",
		desc: "Puede paralizar al objetivo.",
		shortDesc: "Puede paralizar al objetivo.",
	},
	cometpunch: {
		name: "Puño Cometa",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Pega de dos a cinco veces seguidas.",
		shortDesc: "Pega de dos a cinco veces seguidas.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	comeuppance: {
		name: "Resarcimiento",
		desc: "Devuelve al rival el último ataque recibido, pero con mucha más fuerza.",
		shortDesc: "Devuelve al rival el último ataque recibido, pero con mucha más fuerza.",
	},
	confide: {
		name: "Confidencia",
		// Official flavor text: "Hace que el objetivo pierda la concentración contándole un secreto. Disminuye el Ataque Especial del oponente."
		desc: "Desconcentra al oponente contándole un secreto, disminuyendo así su Ataque Especial.",
		shortDesc: "Desconcentra al oponente contándole un secreto, disminuyendo así su Ataque Especial.",
	},
	confuseray: {
		name: "Rayo Confuso",
		// Official flavor text: "Rayo siniestro que confunde al objetivo."
		desc: "Rayo siniestro que confunde al objetivo.",
		shortDesc: "Rayo siniestro que confunde al objetivo.",
	},
	confusion: {
		name: "Confusión",
		// Official flavor text: "Débil ataque telequinético que puede causar confusión."
		desc: "Débil ataque telequinético que puede causar confusión.",
		shortDesc: "Débil ataque telequinético que puede causar confusión.",
	},
	constrict: {
		name: "Restricción",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Constriñe para herir y puede bajar la Velocidad.",
		shortDesc: "Constriñe para herir y puede bajar la Velocidad.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	continentalcrush: {
		name: "Aplastamiento Gigalítico",
		shortDesc: null, // NEEDS TRANSLATION
	},
	conversion: {
		name: "Conversión",
		// Official flavor text: "Cambia el tipo del usuario por el del primero de sus movimientos."
		desc: "Cambia el tipo del usuario por el de uno de sus movimientos.",
		shortDesc: "Cambia el tipo del usuario por el de uno de sus movimientos.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		typeChange: "  ¡Cambió tipo al de {SOURCE}!",
	},
	conversion2: {
		name: "Conversión 2",
		// Official flavor text: "El usuario cambia de tipo para hacerse resistente al último tipo de movimiento usado por el objetivo."
		desc: "El usuario cambia de tipo para hacerse resistente al último tipo de movimiento usado por el objetivo.",
		shortDesc: "El usuario cambia de tipo para hacerse resistente al último tipo de movimiento usado por el objetivo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	copycat: {
		name: "Copión",
		// Official flavor text: "Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno."
		desc: "Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.",
		shortDesc: "Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	coreenforcer: {
		name: "Núcleo Castigo",
		// Official flavor text: "Inflige daño al rival, y si este ya ha hecho uso de algún movimiento, pierde su habilidad."
		desc: "Inflige daño al rival, y si este ya ha hecho uso de algún movimiento, pierde su habilidad.",
		shortDesc: "Inflige daño al rival, y si este ya ha hecho uso de algún movimiento, pierde su habilidad.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	corkscrewcrash: {
		name: "Hélice Trepanadora",
		shortDesc: null, // NEEDS TRANSLATION
	},
	corrosivegas: {
		name: "Gas Corrosivo",
		// Official flavor text: "El usuario libera un gas cáustico que envuelve a todos los que se encuentren alrededor y derrite por completo los objetos que lleven equipados."
		desc: "Libera un gas cáustico que envuelve a todos alrededor y derrite los objetos que lleven equipados.",
		shortDesc: "Libera un gas cáustico que envuelve a todos alrededor y derrite los objetos que lleven equipados.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		fail: "#healblock",
		removeItem: "  ¡{SOURCE} ha derretido {ITEM:definite:classified} de {POKEMON}!",
	},
	cosmicpower: {
		name: "Masa Cósmica",
		// Official flavor text: "Sube la Defensa y la Defensa Especial propias con energía mística."
		desc: "Sube la Defensa y la Defensa Especial propias con energía mística.",
		shortDesc: "Sube la Defensa y la Defensa Especial propias con energía mística.",
	},
	cottonguard: {
		name: "Rizo Algodón",
		// Official flavor text: "Cubre al Pokémon con una madeja protectora. Aumenta muchísimo la Defensa."
		desc: "Cubre al Pokémon con una madeja protectora. Aumenta muchísimo la Defensa.",
		shortDesc: "Cubre al Pokémon con una madeja protectora. Aumenta muchísimo la Defensa.",
	},
	cottonspore: {
		name: "Esporagodón",
		// Official flavor text: "Adhiere esporas a los rivales para reducir mucho su Velocidad."
		desc: "Adhiere esporas al objetivo para reducir mucho su Velocidad.",
		shortDesc: "Adhiere esporas al objetivo para reducir mucho su Velocidad.",
	},
	counter: {
		name: "Contraataque",
		// Official flavor text: "Devuelve un golpe físico por duplicado."
		desc: "Devuelve un golpe físico por duplicado.",
		shortDesc: "Devuelve un golpe físico por duplicado.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	courtchange: {
		name: "Cambio de Cancha",
		// Official flavor text: "Extraño poder que intercambia los efectos en el terreno de combate de ambos bandos."
		desc: "Gracias a un poder misterioso, el usuario intercambia los efectos en los extremos del campo.",
		shortDesc: "Gracias a un poder misterioso, el usuario intercambia los efectos en los extremos del campo.",

		activate: "  ¡{POKEMON} ha intercambiado los efectos del terreno de combate!",
	},
	covet: {
		name: "Antojo",
		// Official flavor text: "Se acerca con ternura al objetivo, pero le ataca y le roba el objeto que lleve."
		desc: "Se acerca con ternura al objetivo, pero le ataca pudiendo robar el objeto que lleve.",
		shortDesc: "Se acerca con ternura al objetivo, pero le ataca pudiendo robar el objeto que lleve.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	crabhammer: {
		name: "Martillazo",
		// Official flavor text: "Golpea con fuerza con una pinza enorme. Suele asestar un golpe crítico."
		desc: "Golpea con fuerza con unas pinzas. Suele ser crítico.",
		shortDesc: "Golpea con fuerza con unas pinzas. Suele ser crítico.",
	},
	craftyshield: {
		name: "Truco Defensa",
		// Official flavor text: "Usa unos misteriosos poderes para protegerse a sí mismo y a sus aliados de movimientos de estado, pero no de otro tipo de ataques."
		desc: "Se protege a sí mismo y a sus aliados de ataques de estado, pero no de otro tipo de ataques.",
		shortDesc: "Se protege a sí mismo y a sus aliados de ataques de estado, pero no de otro tipo de ataques.",

		start: "  ¡{TEAM} está protegido por Truco Defensa!",
		block: "  ¡{POKEMON} está protegido por Truco Defensa!",
	},
	crosschop: {
		name: "Tajo Cruzado",
		// Official flavor text: "Corte doble que suele propinar un golpe crítico."
		desc: "Corte doble que suele propinar un golpe crítico.",
		shortDesc: "Corte doble que suele propinar un golpe crítico.",
	},
	crosspoison: {
		name: "Veneno X",
		// Official flavor text: "Tajo que puede envenenar al objetivo. Suele ser crítico."
		desc: "Tajo que puede envenenar al objetivo. Suele ser crítico.",
		shortDesc: "Tajo que puede envenenar al objetivo. Suele ser crítico.",
	},
	crunch: {
		name: "Triturar",
		// Official flavor text: "Tritura con afilados colmillos y puede bajar la Defensa del objetivo."
		desc: "Tritura con afilados colmillos y puede bajar la Defensa del objetivo.",
		shortDesc: "Tritura con afilados colmillos y puede bajar la Defensa del objetivo.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	crushclaw: {
		name: "Garra Brutal",
		// Official flavor text: "Hace trizas al objetivo con garras afiladas y puede bajar su Defensa."
		desc: "Hace trizas al objetivo con garras afiladas y puede bajar su Defensa.",
		shortDesc: "Hace trizas al objetivo con garras afiladas y puede bajar su Defensa.",
	},
	crushgrip: {
		name: "Agarrón",
		// Official flavor text: "Estruja al objetivo con gran fuerza. Cuantos más PS le queden al objetivo, más fuerte será el ataque."
		desc: "Cuantos más PS le queden al objetivo, más fuerte será el ataque.",
		shortDesc: "Cuantos más PS le queden al objetivo, más fuerte será el ataque.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	curse: {
		name: "Maldición",
		// Official flavor text: "Un movimiento que tiene efectos distintos si el usuario es de tipo Fantasma o no."
		desc: "Un movimiento que tiene efectos distintos si el usuario es de tipo Fantasma o no.",
		shortDesc: "Un movimiento que tiene efectos distintos si el usuario es de tipo Fantasma o no.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{SOURCE} sacrifica algunos PS y maldice a {POKEMON}!",
		damage: "  ¡{POKEMON} es víctima de una maldición!",
	},
	cut: {
		name: "Corte",
		shortDesc: "Corta con garras, guadañas, etc. También sirve para cortar árboles finos.",
	},
	darkestlariat: {
		name: "Lariat Oscuro",
		// Official flavor text: "Gira sobre sí mismo y golpea al oponente con ambos brazos. Ignora los cambios en las características del objetivo."
		desc: "Gira y golpea al oponente, ignorando los cambios en las características del objetivo.",
		shortDesc: "Gira y golpea al oponente, ignorando los cambios en las características del objetivo.",
	},
	darkpulse: {
		name: "Pulso Umbrío",
		// Official flavor text: "Libera una horrible aura llena de malos pensamientos que puede amedrentar al objetivo."
		desc: "Libera una horrible aura llena de malos pensamientos y puede amedrentar al objetivo.",
		shortDesc: "Libera una horrible aura llena de malos pensamientos y puede amedrentar al objetivo.",
	},
	darkvoid: {
		name: "Brecha Negra",
		// Official flavor text: "El objetivo es enviado a un mundo de tinieblas que lo hace dormir."
		desc: "El objetivo es enviado a un mundo de tinieblas que lo hace dormir.",
		shortDesc: "El objetivo es enviado a un mundo de tinieblas que lo hace dormir.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		fail: "Pero no ha podido ponerlo en práctica.",
		failWrongForme: "Pero no ha podido ponerlo en práctica en su forma actual.",
	},
	dazzlinggleam: {
		name: "Brillo Mágico",
		// Official flavor text: "Inflige daño a los oponentes con una potente luz."
		desc: "Inflige daño a los oponentes con una potente luz.",
		shortDesc: "Inflige daño a los oponentes con una potente luz.",
	},
	decorate: {
		name: "Decoración",
		// Official flavor text: "Aumenta mucho el Ataque y el Ataque Especial del objetivo al decorarlo."
		desc: "El usuario aumenta el Ataque y el Ataque Especial del objetivo decorándolo.",
		shortDesc: "El usuario aumenta el Ataque y el Ataque Especial del objetivo decorándolo.",
	},
	defendorder: {
		name: "A Defender",
		// Official flavor text: "El usuario llama a sus súbditos para que formen un escudo viviente. Sube la Defensa y la Defensa Especial."
		desc: "El usuario llama a sus amigos para que formen un escudo viviente. Sube la Defensa y la Def. Esp.",
		shortDesc: "El usuario llama a sus amigos para que formen un escudo viviente. Sube la Defensa y la Def. Esp.",
	},
	defensecurl: {
		name: "Rizo Defensa",
		// Official flavor text: "Se enrosca para ocultar sus puntos débiles y aumentar la Defensa."
		desc: "Se enrosca para ocultar su punto débil. Sube la Defensa.",
		shortDesc: "Se enrosca para ocultar su punto débil. Sube la Defensa.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	defog: {
		name: "Despejar",
		// Official flavor text: "Potente viento que barre el reflejo o la pantalla de luz creada por el objetivo. También puede reducir su Evasión."
		desc: "Potente viento que barre el reflejo o pantalla de luz del objetivo y puede reducir su Evasión.",
		shortDesc: "Potente viento que barre el reflejo o pantalla de luz del objetivo y puede reducir su Evasión.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	destinybond: {
		name: "Mismo Destino",
		// Official flavor text: "Si el usuario se debilita por un ataque rival antes de usar otro movimiento, el Pokémon rival se debilitará también. Puede fallar si se usa repetidamente."
		desc: "Si el usuario se debilita, el enemigo se debilita también.",
		shortDesc: "Si el usuario se debilita, el enemigo se debilita también.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} intenta que su atacante sufra su mismo destino!",
		activate: "¡{POKEMON} ha conseguido debilitar también a su atacante!",
	},
	detect: {
		name: "Detección",
		// Official flavor text: "Frena todos los ataques, pero puede fallar si se usa repetidamente."
		desc: "Frena los ataques, pero puede fallar si se usa repetidamente.",
		shortDesc: "Frena los ataques, pero puede fallar si se usa repetidamente.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	devastatingdrake: {
		name: "Dracoaliento Devastador",
		shortDesc: null, // NEEDS TRANSLATION
	},
	diamondstorm: {
		name: "Tormenta de Diamantes",
		// Official flavor text: "Desata un devastador vendaval de diamantes para dañar a los oponentes. Puede aumentar mucho la Defensa del usuario."
		desc: "Devastador vendaval de diamantes. Puede aumentar la Defensa del usuario.",
		shortDesc: "Devastador vendaval de diamantes. Puede aumentar la Defensa del usuario.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dig: {
		name: "Excavar",
		// Official flavor text: "El usuario cava durante el primer turno y ataca en el segundo."
		desc: "Primer turno: cava. Segundo turno: ataca. También sirve para salir de ciertas zonas.",
		shortDesc: "Primer turno: cava. Segundo turno: ataca. También sirve para salir de ciertas zonas.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "¡{POKEMON} se ha ocultado bajo tierra!",
	},
	direclaw: {
		name: "Garra Nociva",
		desc: "Ataca al punto débil del objetivo con unas garras letales que pueden envenenarlo, paralizarlo o dormirlo.",
		shortDesc: "Ataca al punto débil del objetivo con unas garras letales que pueden envenenarlo, paralizarlo o dormirlo.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	disable: {
		name: "Anulación",
		// Official flavor text: "Desactiva el último movimiento del objetivo durante cuatro turnos."
		desc: "Desactiva el último movimiento del objetivo durante cuatro turnos.",
		shortDesc: "Desactiva el último movimiento del objetivo durante cuatro turnos.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡Se ha anulado el movimiento {MOVE} de {POKEMON}!",
		end: "  ¡El movimiento de {POKEMON} ya no está anulado!",
		cant: "¡{POKEMON} no puede usar {MOVE} porque ha sido anulado!",
	},
	disarmingvoice: {
		name: "Voz Cautivadora",
		// Official flavor text: "Obnubila a los oponentes con su fascinante voz y les provoca daños emocionales. Siempre acierta al objetivo."
		desc: "Obnubila a los oponentes con su voz y les provoca daños emocionales. Siempre acierta.",
		shortDesc: "Obnubila a los oponentes con su voz y les provoca daños emocionales. Siempre acierta.",
	},
	discharge: {
		name: "Chispazo",
		// Official flavor text: "Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar."
		desc: "Una deslumbradora onda eléctrica afecta a los demás Pokémon del combate. Puede paralizar.",
		shortDesc: "Una deslumbradora onda eléctrica afecta a los demás Pokémon del combate. Puede paralizar.",
	},
	dive: {
		name: "Buceo",
		// Official flavor text: "El usuario se sumerge en el primer turno y ataca en el segundo."
		desc: "Primer turno: se sumerge en el mar. Segundo turno: emerge y ataca.",
		shortDesc: "Primer turno: se sumerge en el mar. Segundo turno: emerge y ataca.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "¡{POKEMON} se ha ocultado bajo el agua!",
	},
	dizzypunch: {
		name: "Puño Mareo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Rítmicos puñetazos que pueden causar confusión.",
		shortDesc: "Rítmicos puñetazos que pueden causar confusión.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	doodle: {
		name: "Decalcomanía",
		desc: "Calca la esencia misma del objetivo para atribuir su habilidad a sí mismo y a sus aliados.",
		shortDesc: "Calca la esencia misma del objetivo para atribuir su habilidad a sí mismo y a sus aliados.",
	},
	doomdesire: {
		name: "Deseo Oculto",
		// Official flavor text: "Concentra un haz de luz y ataca dos turnos después."
		desc: "Concentra un haz de luz y ataca dos turnos después.",
		shortDesc: "Concentra un haz de luz y ataca dos turnos después.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha elegido Deseo Oculto para el futuro!",
		activate: "  ¡{TARGET} ha sido alcanzado por Deseo Oculto!",
	},
	doubleedge: {
		name: "Doble Filo",
		// Official flavor text: "Ataque arriesgado que también hiere al agresor."
		desc: "Ataque arriesgado que también hiere al agresor.",
		shortDesc: "Ataque arriesgado que también hiere al agresor.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doublehit: {
		name: "Doble Golpe",
		// Official flavor text: "Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo."
		desc: "Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo.",
		shortDesc: "Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleironbash: {
		name: "Ferropuño Doble",
		// Official flavor text: "Usando la tuerca del pecho como eje, gira sobre sí mismo y golpea con los brazos dos veces seguidas. Puede amedrentar al rival."
		desc: "Golpea dos veces seguidas con los puños pudiendo amedrentar al rival.",
		shortDesc: "Golpea dos veces seguidas con los puños pudiendo amedrentar al rival.",
	},
	doublekick: {
		name: "Doble Patada",
		// Official flavor text: "Una patada doble. Golpea dos veces."
		desc: "Una patada doble. Golpea dos veces.",
		shortDesc: "Una patada doble. Golpea dos veces.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleshock: {
		name: "Electropalmas",
		desc: "Libera toda la electricidad de su cuerpo para atacar. Pierde el tipo Eléctrico.",
		shortDesc: "Libera toda la electricidad de su cuerpo para atacar. Pierde el tipo Eléctrico.",

		typeChange: "  ¡{POKEMON} ha descargado toda su electricidad!",
	},
	doubleslap: {
		name: "Doble Bofetón",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Abofetea de dos a cinco veces seguidas.",
		shortDesc: "Abofetea de dos a cinco veces seguidas.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleteam: {
		name: "Doble Equipo",
		// Official flavor text: "Crea copias de sí mismo para mejorar la Evasión."
		desc: "Crea copias de sí mismo para mejorar la Evasión.",
		shortDesc: "Crea copias de sí mismo para mejorar la Evasión.",
	},
	dracometeor: {
		name: "Cometa Draco",
		// Official flavor text: "Hace que grandes cometas caigan del cielo sobre el objetivo. Baja mucho el Ataque Especial del que lo usa."
		desc: "Hace que grandes cometas caigan del cielo. Baja mucho el Ataque Especial de quien lo usa.",
		shortDesc: "Hace que grandes cometas caigan del cielo. Baja mucho el Ataque Especial de quien lo usa.",
	},
	dragonascent: {
		name: "Ascenso Draco",
		// Official flavor text: "El usuario se precipita desde el cielo a una velocidad de vértigo para atacar al objetivo, pero hace que bajen la Defensa y la Defensa Especial del usuario."
		desc: "Se precipita desde el cielo a mucha velocidad, pero hace que bajen la Def. y Def. Esp.",
		shortDesc: "Se precipita desde el cielo a mucha velocidad, pero hace que bajen la Def. y Def. Esp.",

		megaNoItem: "  ¡El ruego vehemente de {TRAINER} alcanza a {POKEMON}!",
	},
	dragonbreath: {
		name: "Dragoaliento",
		// Official flavor text: "Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo."
		desc: "Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.",
		shortDesc: "Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.",
	},
	dragoncheer: {
		name: "Bramido Dragón",
		desc: "Bramido que aumenta la probabilidad de golpe crítico de aliados, y en dos niveles si es Dragón.",
		shortDesc: "Bramido que aumenta la probabilidad de golpe crítico de aliados, y en dos niveles si es Dragón.",

		start: "#focusenergy",
	},
	dragonclaw: {
		name: "Garra Dragón",
		shortDesc: "Araña al objetivo con garras afiladas.",
	},
	dragondance: {
		name: "Danza Dragón",
		// Official flavor text: "Danza mística que sube el Ataque y la Velocidad."
		desc: "Danza mística que sube el Ataque y la Velocidad.",
		shortDesc: "Danza mística que sube el Ataque y la Velocidad.",
	},
	dragondarts: {
		name: "Dracoflechas",
		// Official flavor text: "El usuario ataca propulsando a ambos Dreepy. En caso de haber dos adversarios, cada Dreepy golpea a su propio objetivo por separado."
		desc: "El usuario ataca dos veces usando Dreepy. Si hay dos enemigos, golpea una vez a cada uno.",
		shortDesc: "El usuario ataca dos veces usando Dreepy. Si hay dos enemigos, golpea una vez a cada uno.",
	},
	dragonenergy: {
		name: "Dracoenergía",
		// Official flavor text: "El usuario convierte su fuerza vital en una energía con la que ataca al objetivo. Cuantos menos PS tenga el usuario, menor será la potencia del movimiento."
		desc: "Ataca con su fuerza vital. Cuanto menos vida tenga el usuario, menos daño hará.",
		shortDesc: "Ataca con su fuerza vital. Cuanto menos vida tenga el usuario, menos daño hará.",
	},
	dragonhammer: {
		name: "Martillo Dragón",
		shortDesc: "Usa el cuerpo como un martillo para abalanzarse sobre su rival y causarle daño.",
	},
	dragonpulse: {
		name: "Pulso Dragón",
		shortDesc: "Abre mucho la boca y libera una onda de choque que ataca al objetivo.",
	},
	dragonrage: {
		name: "Furia Dragón",
		shortDesc: "Ráfaga de furiosas ondas de choque que quitan 40 PS.",
	},
	dragonrush: {
		name: "Carga Dragón",
		// Official flavor text: "Ataca de forma brutal mientras intimida al objetivo. También puede amedrentarlo."
		desc: "Ataca de forma brutal mientras intimida al objetivo. También puede amedrentarlo.",
		shortDesc: "Ataca de forma brutal mientras intimida al objetivo. También puede amedrentarlo.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	dragontail: {
		name: "Cola Dragón",
		// Official flavor text: "Ataca al objetivo y lo obliga a cambiarse por otro Pokémon. Si es uno salvaje, acaba el combate."
		desc: "Ataca al objetivo y lo obliga a cambiarse por otro Pokémon. Si es uno salvaje, acaba el combate.",
		shortDesc: "Ataca al objetivo y lo obliga a cambiarse por otro Pokémon. Si es uno salvaje, acaba el combate.",
	},
	drainingkiss: {
		name: "Beso Drenaje",
		// Official flavor text: "El usuario absorbe PS del objetivo con un beso y restaura su propia energía en una cantidad igual o superior a la mitad del daño infligido."
		desc: "Absorbe PS del objetivo con un beso y restaura sus PS.",
		shortDesc: "Absorbe PS del objetivo con un beso y restaura sus PS.",
	},
	drainpunch: {
		name: "Puño Drenaje",
		// Official flavor text: "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo."
		desc: "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo.",
		shortDesc: "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	dreameater: {
		name: "Comesueños",
		// Official flavor text: "Restaura al usuario la mitad del daño causado a un objetivo dormido."
		desc: "Restaura al usuario la mitad del daño causado a un objetivo dormido.",
		shortDesc: "Restaura al usuario la mitad del daño causado a un objetivo dormido.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	drillpeck: {
		name: "Pico Taladro",
		shortDesc: "Picotazo giratorio y perforador muy potente.",
	},
	drillrun: {
		name: "Taladradora",
		// Official flavor text: "El usuario golpea usando su cuerpo como un taladro. Suele ser crítico."
		desc: "El usuario golpea usando su cuerpo como un taladro. Suele ser crítico.",
		shortDesc: "El usuario golpea usando su cuerpo como un taladro. Suele ser crítico.",
	},
	drumbeating: {
		name: "Batería Asalto",
		// Official flavor text: "El usuario controla un tocón mediante la percusión y al atacar reduce la Velocidad del objetivo."
		desc: "El usuario controla un tocón mediante la percusión y al atacar reduce la Velocidad del objetivo.",
		shortDesc: "El usuario controla un tocón mediante la percusión y al atacar reduce la Velocidad del objetivo.",
	},
	dualchop: {
		name: "Golpe Bis",
		// Official flavor text: "Golpea dos veces seguidas con las partes más recias de su cuerpo."
		desc: "Golpea dos veces seguidas con la cola u otras partes de su cuerpo.",
		shortDesc: "Golpea dos veces seguidas con la cola u otras partes de su cuerpo.",
	},
	dualwingbeat: {
		name: "Ala Bis",
		// Official flavor text: "Ataca al adversario golpeándolo dos veces con las alas."
		desc: "Ataca al adversario golpeándolo dos veces con las alas.",
		shortDesc: "Ataca al adversario golpeándolo dos veces con las alas.",
	},
	dynamaxcannon: {
		name: "Cañón Dinamax",
		shortDesc: "El usuario lanza un poderoso rayo de energía de su núcleo.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dynamicpunch: {
		name: "Puño Dinámico",
		// Official flavor text: "Puñetazo con toda la fuerza concentrada. Causa confusión si atina."
		desc: "Puñetazo con toda la fuerza concentrada. Causa confusión si atina.",
		shortDesc: "Puñetazo con toda la fuerza concentrada. Causa confusión si atina.",
	},
	earthpower: {
		name: "Tierra Viva",
		// Official flavor text: "La tierra a los pies del objetivo erupciona violentamente. Puede disminuir la Defensa Especial del objetivo."
		desc: "Erupciona la tierra a los pies del rival. Puede disminuir la Defensa Especial.",
		shortDesc: "Erupciona la tierra a los pies del rival. Puede disminuir la Defensa Especial.",
	},
	earthquake: {
		name: "Terremoto",
		// Official flavor text: "Un terremoto que afecta a todos los Pokémon que estén a su alrededor."
		desc: "Un terremoto que afecta a los Pokémon de alrededor en combate.",
		shortDesc: "Un terremoto que afecta a los Pokémon de alrededor en combate.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	echoedvoice: {
		name: "Eco Voz",
		// Official flavor text: "Un susurro que aumenta de potencia conforme el usuario y otros Pokémon lo van utilizando."
		desc: "Un susurro que aumenta de potencia conforme el usuario y otros Pokémon lo van utilizando.",
		shortDesc: "Un susurro que aumenta de potencia conforme el usuario y otros Pokémon lo van utilizando.",
	},
	eerieimpulse: {
		name: "Onda Anómala",
		// Official flavor text: "El usuario irradia unas raras ondas que, al alcanzar a un oponente, hacen que disminuya mucho su Ataque Especial."
		desc: "Irradia unas raras ondas que disminuyen mucho el Ataque Especial del objetivo.",
		shortDesc: "Irradia unas raras ondas que disminuyen mucho el Ataque Especial del objetivo.",
	},
	eeriespell: {
		name: "Conjuro Funesto",
		// Official flavor text: "El usuario ataca con un poder psíquico de inmensa potencia y elimina 3 PP del último movimiento que haya usado el objetivo."
		desc: "El usuario ataca con su poder psíquico y reduce tres PP del último movimiento usado por el objetivo.",
		shortDesc: "El usuario ataca con su poder psíquico y reduce tres PP del último movimiento usado por el objetivo.",

		activate: "#spite",
	},
	eggbomb: {
		name: "Bomba Huevo",
		shortDesc: "Arroja un huevo al objetivo con gran fuerza.",
	},
	electricterrain: {
		name: "Campo Eléctrico",
		// Official flavor text: "Durante cinco turnos, se potencian los movimientos de tipo Eléctrico y los Pokémon que están en contacto con el suelo no pueden quedarse dormidos."
		desc: "Durante cinco turnos crea un campo eléctrico que impide dormirse a los Pokémon en el suelo.",
		shortDesc: "Durante cinco turnos crea un campo eléctrico que impide dormirse a los Pokémon en el suelo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	electrify: {
		name: "Electrificación",
		// Official flavor text: "Si el objetivo queda electrificado antes de usar un movimiento, este será de tipo Eléctrico."
		desc: "Si el Pokémon objetivo queda electrificado antes de usar un movimiento, este será de tipo Eléctrico.",
		shortDesc: "Si el Pokémon objetivo queda electrificado antes de usar un movimiento, este será de tipo Eléctrico.",

		start: "  ¡Electrificación hace que el siguiente movimiento de {POKEMON} sea de tipo Eléctrico!",
	},
	electroball: {
		name: "Bola Voltio",
		// Official flavor text: "Lanza una bola eléctrica. Cuanto mayor sea la Velocidad del usuario en comparación con la del objetivo, mayor será el daño causado."
		desc: "Lanza una bola eléctrica. Cuanto mayor es la Velocidad del usuario, mayor será el daño causado.",
		shortDesc: "Lanza una bola eléctrica. Cuanto mayor es la Velocidad del usuario, mayor será el daño causado.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	electrodrift: {
		name: "Electroderrape",
		desc: "Se abalanza mientras se transforma y atraviesa al rival. La potencia aumenta si es supereficaz.",
		shortDesc: "Se abalanza mientras se transforma y atraviesa al rival. La potencia aumenta si es supereficaz.",
	},
	electroshot: {
		name: "Electrorrayo",
		desc: "1º turno: acumula electricidad y aumenta At. Esp. 2º turno: ataca. Si llueve ataca el 1º turno.",
		shortDesc: "1º turno: acumula electricidad y aumenta At. Esp. 2º turno: ataca. Si llueve ataca el 1º turno.",

		prepare: "¡{POKEMON} está acumulando electricidad!",
	},
	electroweb: {
		name: "Electrotela",
		// Official flavor text: "Atrapa y ataca a los objetivos con una telaraña eléctrica. También reduce su Velocidad."
		desc: "Atrapa y ataca a los objetivos con una telaraña eléctrica. También reduce su Velocidad.",
		shortDesc: "Atrapa y ataca a los objetivos con una telaraña eléctrica. También reduce su Velocidad.",
	},
	embargo: {
		name: "Embargo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Impide al objetivo usar el objeto que lleva. Su Entrenador tampoco puede usar objetos sobre él.",
		shortDesc: "Impide al objetivo usar el objeto que lleva. Su Entrenador tampoco puede usar objetos sobre él.",

		start: "  ¡{POKEMON} no puede usar objetos!",
		end: "  ¡{POKEMON} ya puede usar objetos de nuevo!",
	},
	ember: {
		name: "Ascuas",
		// Official flavor text: "Ataca con llamas pequeñas que pueden causar quemaduras."
		desc: "Ataca con llamas pequeñas que pueden causar quemaduras.",
		shortDesc: "Ataca con llamas pequeñas que pueden causar quemaduras.",
	},
	encore: {
		name: "Otra Vez",
		// Official flavor text: "El objetivo repite su último movimiento durante tres turnos."
		desc: "El objetivo repite su último movimiento durante tres turnos.",
		shortDesc: "El objetivo repite su último movimiento durante tres turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha sufrido los efectos de Otra Vez!",
		end: "  ¡{POKEMON} ya no sufre los efectos de Otra Vez!",
	},
	endeavor: {
		name: "Esfuerzo",
		// Official flavor text: "Reduce los PS del objetivo para que igualen a los del atacante."
		desc: "Reduce los PS del objetivo para que igualen a los del atacante.",
		shortDesc: "Reduce los PS del objetivo para que igualen a los del atacante.",
	},
	endure: {
		name: "Aguante",
		// Official flavor text: "Resiste cualquier ataque y deja al menos 1 PS. Puede fallar si se usa repetidamente."
		desc: "Resiste cualquier ataque y deja al menos un PS. Puede fallar si se usa repetidamente.",
		shortDesc: "Resiste cualquier ataque y deja al menos un PS. Puede fallar si se usa repetidamente.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} se prepara para resistir los ataques!",
		activate: "  ¡{POKEMON} ha aguantado el golpe!",
	},
	energyball: {
		name: "Energibola",
		// Official flavor text: "Aúna fuerzas de la naturaleza y libera su ataque. Puede disminuir la Defensa Especial del objetivo."
		desc: "Aúna fuerzas de la naturaleza y libera su ataque. Puede disminuir la Defensa Especial del objetivo.",
		shortDesc: "Aúna fuerzas de la naturaleza y libera su ataque. Puede disminuir la Defensa Especial del objetivo.",
	},
	entrainment: {
		name: "Danza Amiga",
		// Official flavor text: "Una extraña danza que hace que el usuario y el objetivo tengan la misma habilidad."
		desc: "Una extraña danza que hace que el usuario y el objetivo tengan la misma habilidad.",
		shortDesc: "Una extraña danza que hace que el usuario y el objetivo tengan la misma habilidad.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	eruption: {
		name: "Estallido",
		// Official flavor text: "Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque."
		desc: "Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.",
		shortDesc: "Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.",
	},
	esperwing: {
		name: "Ala Aural",
		desc: "Corta con unas alas imbuidas de aura. Suele asestar un golpe crítico y aumenta la Velocidad.",
		shortDesc: "Corta con unas alas imbuidas de aura. Suele asestar un golpe crítico y aumenta la Velocidad.",
	},
	eternabeam: {
		name: "Rayo Infinito",
		// Official flavor text: "Este es el mayor ataque de Eternatus una vez adquirida su forma original. No puede moverse en el turno siguiente."
		desc: "Ataque más poderoso de Eternatus en su forma original. No se podrá mover en el siguiente turno.",
		shortDesc: "Ataque más poderoso de Eternatus en su forma original. No se podrá mover en el siguiente turno.",
	},
	expandingforce: {
		name: "Vasta Fuerza",
		// Official flavor text: "El usuario ataca al objetivo con sus poderes psíquicos. Cuando se usa en conjunción con un campo psíquico, aumenta su potencia e inflige daño a todos los rivales."
		desc: "Ataca al objetivo con sus poderes psíquicos. En campo psíquico aumenta su potencia e inflige daño a todos los rivales.",
		shortDesc: "Ataca al objetivo con sus poderes psíquicos. En campo psíquico aumenta su potencia e inflige daño a todos los rivales.",
	},
	explosion: {
		name: "Explosión",
		// Official flavor text: "El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato."
		desc: "El atacante explota y hiere a todos a su alrededor. El usuario se debilita de inmediato.",
		shortDesc: "El atacante explota y hiere a todos a su alrededor. El usuario se debilita de inmediato.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	extrasensory: {
		name: "Paranormal",
		// Official flavor text: "Emite una energía muy extraña que puede amedrentar al objetivo."
		desc: "Energía muy extraña que puede amedrentar al objetivo.",
		shortDesc: "Energía muy extraña que puede amedrentar al objetivo.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	extremeevoboost: {
		name: "Novena Potencia",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	extremespeed: {
		name: "Velocidad Extrema",
		// Official flavor text: "Ataque de una velocidad extrema. Este movimiento tiene prioridad alta."
		desc: "Ataque muy rápido que siempre va en primer lugar.",
		shortDesc: "Ataque muy rápido que siempre va en primer lugar.",
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	facade: {
		name: "Fachada",
		// Official flavor text: "Si el usuario está quemado, paralizado o envenenado, ataca con el doble de potencia."
		desc: "Ataca con el doble de potencia si el usuario está quemado, paralizado o envenenado.",
		shortDesc: "Ataca con el doble de potencia si el usuario está quemado, paralizado o envenenado.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	fairylock: {
		name: "Cerrojo Feérico",
		// Official flavor text: "Consigue que ningún Pokémon pueda huir en el siguiente turno echando un cerrojo."
		desc: "Consigue que ningún Pokémon pueda huir en el siguiente turno echando un cerrojo.",
		shortDesc: "Consigue que ningún Pokémon pueda huir en el siguiente turno echando un cerrojo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Nadie podrá huir durante el próximo turno.",
	},
	fairywind: {
		name: "Viento Feérico",
		shortDesc: "El Pokémon que lo usa desata un vendaval feérico que arremete contra el objetivo.",
	},
	fakeout: {
		name: "Sorpresa",
		// Official flavor text: "Amedrenta al objetivo con este movimiento de prioridad alta. Solo sirve en el primer turno."
		desc: "Ataca primero y, además, amedrenta al rival. Solo sirve en el primer turno.",
		shortDesc: "Ataca primero y, además, amedrenta al rival. Solo sirve en el primer turno.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	faketears: {
		name: "Llanto Falso",
		// Official flavor text: "Lágrimas de cocodrilo que bajan mucho la Defensa Especial del objetivo."
		desc: "Lágrimas de cocodrilo que bajan mucho la Defensa Especial del objetivo.",
		shortDesc: "Lágrimas de cocodrilo que bajan mucho la Defensa Especial del objetivo.",
	},
	falsesurrender: {
		name: "Irreverencia",
		shortDesc: "El usuario finge hacer una reverencia y ensarta al objetivo con su cabello alborotado. No falla.",
	},
	falseswipe: {
		name: "Falso Tortazo",
		// Official flavor text: "Ataque moderado que no debilita al objetivo y le deja al menos 1 PS."
		desc: "Ataque moderado que no debilita al objetivo y le deja al menos un PS.",
		shortDesc: "Ataque moderado que no debilita al objetivo y le deja al menos un PS.",
	},
	featherdance: {
		name: "Danza Pluma",
		// Official flavor text: "Envuelve al objetivo con un manto de plumas para reducir mucho su Ataque."
		desc: "Envuelve al objetivo con un manto de plumas para reducir mucho su Ataque.",
		shortDesc: "Envuelve al objetivo con un manto de plumas para reducir mucho su Ataque.",
	},
	feint: {
		name: "Amago",
		// Official flavor text: "Permite golpear a objetivos que han utilizado movimientos como Protección o Detección y anula sus efectos."
		desc: "Permite golpear a objetivos que usan Protección o Detección y anula dichos movimientos.",
		shortDesc: "Permite golpear a objetivos que usan Protección o Detección y anula dichos movimientos.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{TARGET} se ha dejado engañar por Amago!",
	},
	feintattack: {
		name: "Finta",
		shortDesc: "Engaña al objetivo para acercarse y dar un puñetazo que no falla.",
	},
	fellstinger: {
		name: "Aguijón Letal",
		// Official flavor text: "Si se derrota al objetivo utilizando este movimiento, aumenta muchísimo el Ataque del usuario."
		desc: "Al derrotar al objetivo utilizando este movimiento, aumenta muchísimo el Ataque del usuario.",
		shortDesc: "Al derrotar al objetivo utilizando este movimiento, aumenta muchísimo el Ataque del usuario.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ficklebeam: {
		name: "Láser Veleidoso",
		shortDesc: "En ocasiones el resto de sus cabezas se unen al ataque haciendo el doble de daño.",

		activate: "  ¡{POKEMON} lo ha dado todo!",
	},
	fierydance: {
		name: "Danza Llama",
		// Official flavor text: "Envuelve en llamas y daña al objetivo. Puede aumentar el Ataque Especial de quien lo usa."
		desc: "El Pokémon golpea envuelto en llamas. Puede aumentar el Ataque Especial de quien lo usa.",
		shortDesc: "El Pokémon golpea envuelto en llamas. Puede aumentar el Ataque Especial de quien lo usa.",
	},
	fierywrath: {
		name: "Furia Candente",
		// Official flavor text: "El usuario convierte su ira en un aura flamígera para lanzar su ataque. Puede amedrentar al objetivo."
		desc: "El usuario transforma su ira en un aura de fuego para atacar. Puede amedrentar al objetivo.",
		shortDesc: "El usuario transforma su ira en un aura de fuego para atacar. Puede amedrentar al objetivo.",
	},
	filletaway: {
		name: "Deslome",
		desc: "Aumenta mucho el Ataque, el Ataque Especial y la Velocidad del usuario a costa de parte de sus PS.",
		shortDesc: "Aumenta mucho el Ataque, el Ataque Especial y la Velocidad del usuario a costa de parte de sus PS.",
	},
	finalgambit: {
		name: "Sacrificio",
		// Official flavor text: "El usuario se sacrifica causándole un daño al objetivo equivalente a sus propios PS perdidos."
		desc: "El usuario se sacrifica causándole un daño al objetivo equivalente a sus propios PS perdidos.",
		shortDesc: "El usuario se sacrifica causándole un daño al objetivo equivalente a sus propios PS perdidos.",
	},
	fireblast: {
		name: "Llamarada",
		// Official flavor text: "Llama intensa que chamusca y puede causar quemaduras."
		desc: "Llama intensa que lo chamusca y puede causar quemaduras.",
		shortDesc: "Llama intensa que lo chamusca y puede causar quemaduras.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	firefang: {
		name: "Colmillo Ígneo",
		// Official flavor text: "El usuario muerde al objetivo con colmillos en llamas y puede hacer que se amedrente o sufra quemaduras."
		desc: "Usa colmillos en llamas para morder. Puede hacer que el objetivo se amedrente o se queme.",
		shortDesc: "Usa colmillos en llamas para morder. Puede hacer que el objetivo se amedrente o se queme.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	firelash: {
		name: "Látigo Ígneo",
		// Official flavor text: "Golpea al oponente con un látigo incandescente y reduce su Defensa."
		desc: "Golpea al oponente con un látigo incandescente y reduce su Defensa.",
		shortDesc: "Golpea al oponente con un látigo incandescente y reduce su Defensa.",
	},
	firepledge: {
		name: "Voto Fuego",
		// Official flavor text: "Ataca con columnas de fuego. Combinado con Voto Planta, crea un mar de llamas y aumenta su potencia."
		desc: "Ataca con columnas de fuego. Combinado con un Voto Planta crea un mar de llamas y aumenta su potencia.",
		shortDesc: "Ataca con columnas de fuego. Combinado con un Voto Planta crea un mar de llamas y aumenta su potencia.",

		activate: "#waterpledge",
		start: "  ¡{TEAM:capitalize} se ve rodeado por un mar de llamas!",
		end: "  El mar de llamas que rodeaba a {TEAM} ha desaparecido.",
		damage: "  ¡{POKEMON} ha resultado herido por un mar de llamas!",
	},
	firepunch: {
		name: "Puño Fuego",
		// Official flavor text: "Puñetazo ardiente que puede causar quemaduras."
		desc: "Puñetazo ardiente. Puede quemar.",
		shortDesc: "Puñetazo ardiente. Puede quemar.",
	},
	firespin: {
		name: "Giro Fuego",
		// Official flavor text: "Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos."
		desc: "Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.",
		shortDesc: "Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha quedado atrapado en un torbellino de fuego!",
		move: "#wrap",
	},
	firstimpression: {
		name: "Escaramuza",
		// Official flavor text: "Movimiento de gran potencia que solo puede usarse en el turno en que el usuario sale al combate."
		desc: "Movimiento de gran potencia y prioridad que solo puede usarse en el primer turno del usuario.",
		shortDesc: "Movimiento de gran potencia y prioridad que solo puede usarse en el primer turno del usuario.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	fishiousrend: {
		name: "Branquibocado",
		// Official flavor text: "El usuario agarra al objetivo con sus duras branquias. En caso de atacar antes que este último, la potencia del movimiento se duplica."
		desc: "Ataca al objetivo con sus branquias. Si ataca antes que el objetivo, duplica la potencia.",
		shortDesc: "Ataca al objetivo con sus branquias. Si ataca antes que el objetivo, duplica la potencia.",
	},
	fissure: {
		name: "Fisura",
		// Official flavor text: "Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe."
		desc: "Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.",
		shortDesc: "Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flail: {
		name: "Azote",
		// Official flavor text: "Ataque frenético. Cuantos menos PS tenga el usuario, más daño producirá."
		desc: "Ataque frenético. Cuantos menos PS tenga el usuario, más daño produce.",
		shortDesc: "Ataque frenético. Cuantos menos PS tenga el usuario, más daño produce.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	flameburst: {
		name: "Pirotecnia",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Golpea al objetivo con una llamarada que afecta a sus Pokémon adyacentes.",
		shortDesc: "Golpea al objetivo con una llamarada que afecta a sus Pokémon adyacentes.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  ¡Las chispas también han alcanzado a {POKEMON}!",
	},
	flamecharge: {
		name: "Nitrocarga",
		// Official flavor text: "Llamas que golpean al objetivo y aumentan la Velocidad del atacante."
		desc: "Llamas que golpean al objetivo y aumentan la Velocidad del atacante.",
		shortDesc: "Llamas que golpean al objetivo y aumentan la Velocidad del atacante.",
	},
	flamethrower: {
		name: "Lanzallamas",
		// Official flavor text: "Ataca con una gran ráfaga de fuego que puede causar quemaduras."
		desc: "Ataca con una gran ráfaga de fuego que puede causar quemaduras.",
		shortDesc: "Ataca con una gran ráfaga de fuego que puede causar quemaduras.",
	},
	flamewheel: {
		name: "Rueda Fuego",
		// Official flavor text: "Ataca envuelto en fuego. Puede causar quemaduras."
		desc: "Ataca envuelto en fuego. Puede causar quemaduras.",
		shortDesc: "Ataca envuelto en fuego. Puede causar quemaduras.",
	},
	flareblitz: {
		name: "Envite Ígneo",
		// Official flavor text: "El Pokémon se cubre de llamas y carga contra el objetivo, aunque él también recibe daño. Puede quemar."
		desc: "El Pokémon se cubre de llamas y carga contra el objetivo, aunque él también recibe daños.",
		shortDesc: "El Pokémon se cubre de llamas y carga contra el objetivo, aunque él también recibe daños.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flash: {
		name: "Destello",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Luz cegadora que baja la Precisión del objetivo.",
		shortDesc: "Luz cegadora que baja la Precisión del objetivo.",
	},
	flashcannon: {
		name: "Cañón Resplandor",
		// Official flavor text: "El usuario concentra toda la luz del cuerpo y la libera. Puede bajar la Defensa Especial del objetivo."
		desc: "El usuario concentra toda la luz del cuerpo y la libera. Puede bajar la Defensa Especial del objetivo.",
		shortDesc: "El usuario concentra toda la luz del cuerpo y la libera. Puede bajar la Defensa Especial del objetivo.",
	},
	flatter: {
		name: "Camelo",
		// Official flavor text: "Halaga al objetivo y lo confunde, pero también sube su Ataque Especial."
		desc: "Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.",
		shortDesc: "Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.",
	},
	fleurcannon: {
		name: "Cañón Floral",
		// Official flavor text: "El usuario emite un potente rayo, pero su Ataque Especial se reduce mucho."
		desc: "El usuario emite un potente rayo, pero su Ataque Especial se reduce mucho.",
		shortDesc: "El usuario emite un potente rayo, pero su Ataque Especial se reduce mucho.",
	},
	fling: {
		name: "Lanzamiento",
		// Official flavor text: "El usuario lanza contra el objetivo el objeto que lleva. La fuerza del ataque y su efecto varían según el objeto."
		desc: "Lanza contra el objetivo su objeto. La fuerza del ataque y su efecto varían según el objeto.",
		shortDesc: "Lanza contra el objetivo su objeto. La fuerza del ataque y su efecto varían según el objeto.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "  ¡{POKEMON} ha tirado su{INFLECT:ITEM:s=:p=s} {ITEM:classified}!",
	},
	flipturn: {
		name: "Viraje",
		// Official flavor text: "Tras atacar, el usuario da paso a toda prisa a otro Pokémon del equipo."
		desc: "Tras atacar, el usuario da paso a toda prisa a otro Pokémon del equipo.",
		shortDesc: "Tras atacar, el usuario da paso a toda prisa a otro Pokémon del equipo.",

		switchOut: "#uturn",
	},
	floatyfall: {
		name: "Pikapicado",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario flota en el aire y luego se lanza en picado para atacar al objetivo. Puede amedrentar.",
		shortDesc: "El usuario flota en el aire y luego se lanza en picado para atacar al objetivo. Puede amedrentar.",
	},
	floralhealing: {
		name: "Cura Floral",
		// Official flavor text: "Restaura la mitad de los PS máximos del objetivo. Es más efectivo cuando se usa en conjunción con Campo de Hierba."
		desc: "Restaura la mitad de los PS máximos del objetivo. Cura más con campo de hierba.",
		shortDesc: "Restaura la mitad de los PS máximos del objetivo. Cura más con campo de hierba.",
	},
	flowershield: {
		name: "Defensa Floral",
		// Official flavor text: "Aumenta la Defensa de todos los Pokémon de tipo Planta que hay en el combate usando unos misteriosos poderes."
		desc: "Aumenta la Defensa de los Pokémon de tipo Planta en combate usando unos misteriosos poderes.",
		shortDesc: "Aumenta la Defensa de los Pokémon de tipo Planta en combate usando unos misteriosos poderes.",
	},
	flowertrick: {
		name: "Truco Floral",
		desc: "Lanza un ramo de flores trucado. No falla nunca y siempre asesta un golpe crítico.",
		shortDesc: "Lanza un ramo de flores trucado. No falla nunca y siempre asesta un golpe crítico.",
	},
	fly: {
		name: "Vuelo",
		// Official flavor text: "El usuario vuela en el primer turno y ataca en el segundo."
		desc: "El primer turno el Pokémon alza el vuelo, para posteriormente en el segundo atacar a su objetivo.",
		shortDesc: "El primer turno el Pokémon alza el vuelo, para posteriormente en el segundo atacar a su objetivo.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "¡{POKEMON} ha volado muy alto!",
	},
	flyingpress: {
		name: "Plancha Voladora",
		// Official flavor text: "El Pokémon que lo usa se lanza sobre su oponente. Este movimiento es de tipo Lucha y tipo Volador al mismo tiempo."
		desc: "Se lanza sobre su oponente. Este movimiento es de tipo Lucha y tipo Volador al mismo tiempo.",
		shortDesc: "Se lanza sobre su oponente. Este movimiento es de tipo Lucha y tipo Volador al mismo tiempo.",
	},
	focusblast: {
		name: "Onda Certera",
		// Official flavor text: "Agudiza la concentración mental y libera su poder. Puede disminuir la Defensa Especial del objetivo."
		desc: "Agudiza la concentración mental y libera su poder. Puede disminuir la Def. Esp. del rival.",
		shortDesc: "Agudiza la concentración mental y libera su poder. Puede disminuir la Def. Esp. del rival.",
	},
	focusenergy: {
		name: "Foco Energía",
		// Official flavor text: "Concentra energía para aumentar las posibilidades de asestar un golpe crítico."
		desc: "Concentra energía para aumentar las posibilidades de un golpe crítico.",
		shortDesc: "Concentra energía para aumentar las posibilidades de un golpe crítico.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} se está preparando para luchar!",
		startFromItem: "  ¡La probabilidad de asestar golpes críticos de {POKEMON} ha aumentado gracias {ITEM:a:definite:classified}!",
		startFromZEffect: "  ¡{POKEMON} ve aumentada su probabilidad de asestar golpes críticos gracias al Poder Z!",
	},
	focuspunch: {
		name: "Puño Certero",
		// Official flavor text: "Se concentra para dar un puñetazo. Falla si se sufre un golpe antes de su uso."
		desc: "Se concentra para dar un puñetazo. Falla si se sufre un golpe antes de su uso.",
		shortDesc: "Se concentra para dar un puñetazo. Falla si se sufre un golpe antes de su uso.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} está reforzando su concentración!",
		cant: "¡{POKEMON} ha perdido la concentración y no puede atacar!",
	},
	followme: {
		name: "Señuelo",
		// Official flavor text: "Llama la atención para concentrar todos los ataques de todos los del equipo rival hacia sí mismo."
		desc: "Llama la atención para concentrar los ataques de todos los del equipo rival hacia sí mismo.",
		shortDesc: "Llama la atención para concentrar los ataques de todos los del equipo rival hacia sí mismo.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} se ha convertido en el centro de atención!",
		startFromZEffect: "  ¡{POKEMON} se ha convertido en el centro de atención!",
	},
	forcepalm: {
		name: "Palmeo",
		// Official flavor text: "Ataca al objetivo con una onda de choque y puede llegar a paralizarlo."
		desc: "Ataca al objetivo con una onda de choque y puede llegar a paralizarlo.",
		shortDesc: "Ataca al objetivo con una onda de choque y puede llegar a paralizarlo.",
	},
	foresight: {
		name: "Profecía",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.",
		shortDesc: "Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} identificado!",
	},
	forestscurse: {
		name: "Condena Silvana",
		// Official flavor text: "El objetivo es presa de la maldición del bosque, por lo que pasa a ser un Pokémon de tipo Planta, además de conservar sus tipos habituales."
		desc: "Presa de la maldición del bosque, el rival pasa a ser de tipo Planta, además de los suyos.",
		shortDesc: "Presa de la maldición del bosque, el rival pasa a ser de tipo Planta, además de los suyos.",
	},
	foulplay: {
		name: "Juego Sucio",
		// Official flavor text: "El usuario emplea la fuerza del objetivo para atacarlo. Cuanto mayor es el Ataque del objetivo, más daño provoca."
		desc: "El usuario emplea el Ataque del objetivo para golpear.",
		shortDesc: "El usuario emplea el Ataque del objetivo para golpear.",
	},
	freezedry: {
		name: "Liofilización",
		// Official flavor text: "Enfría súbitamente al objetivo e incluso puede congelarlo. Es supereficaz contra Pokémon de tipo Agua."
		desc: "Enfría súbitamente al objetivo e incluso puede congelarlo. Es supereficaz contra Pokémon de tipo Agua.",
		shortDesc: "Enfría súbitamente al objetivo e incluso puede congelarlo. Es supereficaz contra Pokémon de tipo Agua.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	freezeshock: {
		name: "Rayo Gélido",
		// Official flavor text: "El usuario carga un bloque de hielo con electricidad en el primer turno y ataca con él en el segundo. Puede paralizar."
		desc: "Carga un bloque de hielo con electricidad en el 1º turno y ataca con él en el 2º. Puede paralizar.",
		shortDesc: "Carga un bloque de hielo con electricidad en el 1º turno y ataca con él en el 2º. Puede paralizar.",

		prepare: "  ¡Una luz fría envuelve a {POKEMON}!",
	},
	freezingglare: {
		name: "Mirada Heladora",
		// Official flavor text: "A través de sus ojos emite poderes psíquicos con los que ataca al objetivo, al que puede llegar a congelar."
		desc: "El usuario ataca disparando poderes psíquicos por los ojos. Puede congelar.",
		shortDesc: "El usuario ataca disparando poderes psíquicos por los ojos. Puede congelar.",
	},
	freezyfrost: {
		name: "Glaceoprisma",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataca con un cristal de neblina helada. Elimina los cambios de estadísticas de todos.",
		shortDesc: "Ataca con un cristal de neblina helada. Elimina los cambios de estadísticas de todos.",
	},
	frenzyplant: {
		name: "Planta Feroz",
		// Official flavor text: "Golpea con una enorme planta. Quien lo usa no puede moverse en el siguiente turno."
		desc: "Golpea con una enorme planta. El atacante no puede moverse en el siguiente turno.",
		shortDesc: "Golpea con una enorme planta. El atacante no puede moverse en el siguiente turno.",
	},
	frostbreath: {
		name: "Vaho Gélido",
		// Official flavor text: "Quien lo usa ataca lanzando un aliento gélido. Siempre asesta un golpe crítico."
		desc: "Ataque con aire helado. Siempre resulta en un golpe crítico.",
		shortDesc: "Ataque con aire helado. Siempre resulta en un golpe crítico.",
	},
	frustration: {
		name: "Frustración",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Cuanto menor sea la amistad con el Entrenador, más poderoso será este ataque.",
		shortDesc: "Cuanto menor sea la amistad con el Entrenador, más poderoso será este ataque.",
	},
	furyattack: {
		name: "Ataque Furia",
		// Official flavor text: "Cornea al objetivo de dos a cinco veces."
		desc: "Cornea al objetivo de dos a cinco veces.",
		shortDesc: "Cornea al objetivo de dos a cinco veces.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	furycutter: {
		name: "Corte Furia",
		// Official flavor text: "Ataque con garras o guadaña que crece en intensidad si se usa repetidas veces."
		desc: "Ataque con garras o guadañas que crece en intensidad si se usa repetidas veces.",
		shortDesc: "Ataque con garras o guadañas que crece en intensidad si se usa repetidas veces.",
	},
	furyswipes: {
		name: "Golpes Furia",
		// Official flavor text: "Araña rápidamente de dos a cinco veces."
		desc: "Araña rápidamente de dos a cinco veces.",
		shortDesc: "Araña rápidamente de dos a cinco veces.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	fusionbolt: {
		name: "Rayo Fusión",
		// Official flavor text: "Ataca con una enorme descarga eléctrica. Aumenta su potencia si es influenciada por una gigantesca llamarada."
		desc: "Enorme descarga eléctrica. Aumenta su potencia si es influenciada por una gigantesca llamarada.",
		shortDesc: "Enorme descarga eléctrica. Aumenta su potencia si es influenciada por una gigantesca llamarada.",
	},
	fusionflare: {
		name: "Llama Fusión",
		// Official flavor text: "Ataca con una llamarada gigantesca. Aumenta su potencia si es influenciada por una gran energía eléctrica."
		desc: "Llamarada gigantesca. Aumenta su potencia si es influenciada por una gran energía eléctrica.",
		shortDesc: "Llamarada gigantesca. Aumenta su potencia si es influenciada por una gran energía eléctrica.",
	},
	futuresight: {
		name: "Premonición",
		// Official flavor text: "Concentra energía psíquica para golpear al objetivo dos turnos después."
		desc: "Concentra energía psíquica para golpear al objetivo dos turnos después.",
		shortDesc: "Concentra energía psíquica para golpear al objetivo dos turnos después.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha previsto un ataque!",
		activate: "  ¡{TARGET} ha sido alcanzado por Premonición!",
	},
	gastroacid: {
		name: "Bilis",
		// Official flavor text: "El usuario arroja sus jugos biliares al objetivo, lo que anula el efecto de la habilidad en uso."
		desc: "El usuario arroja sus jugos biliares al objetivo, lo que anula el efecto de la habilidad en uso.",
		shortDesc: "El usuario arroja sus jugos biliares al objetivo, lo que anula el efecto de la habilidad en uso.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡Se ha anulado la habilidad de {POKEMON}!",
	},
	geargrind: {
		name: "Rueda Doble",
		// Official flavor text: "Rota dos engranajes de hierro sobre el objetivo. Golpea dos veces."
		desc: "Rota dos engranajes de hierro sobre el objetivo. Golpea dos veces.",
		shortDesc: "Rota dos engranajes de hierro sobre el objetivo. Golpea dos veces.",
	},
	gearup: {
		name: "Piñón Auxiliar",
		// Official flavor text: "Cambia de marcha y logra aumentar el Ataque y el Ataque Especial de los Pokémon aliados que cuenten con las habilidades Más y Menos."
		desc: "Cambia de marcha y logra aumentar el Ataque y el Ataque Especial de los Pokémon aliados.",
		shortDesc: "Cambia de marcha y logra aumentar el Ataque y el Ataque Especial de los Pokémon aliados.",
	},
	genesissupernova: {
		name: "Supernova Original",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	geomancy: {
		name: "Geocontrol",
		// Official flavor text: "Concentra energía durante el primer turno, de forma que su Velocidad, Ataque Especial y Defensa Especial aumenten mucho en el segundo."
		desc: "Concentra energía un turno, y en el segundo aumenta mucho su At. Esp., Def. Esp. y Velocidad.",
		shortDesc: "Concentra energía un turno, y en el segundo aumenta mucho su At. Esp., Def. Esp. y Velocidad.",

		prepare: "¡{POKEMON} está acumulando energía!",
	},
	gigadrain: {
		name: "Gigadrenado",
		// Official flavor text: "Un ataque que absorbe nutrientes. Quien lo usa recupera la mitad de los PS del daño que produce."
		desc: "Absorbe la mitad del daño producido.",
		shortDesc: "Absorbe la mitad del daño producido.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	gigaimpact: {
		name: "Gigaimpacto",
		// Official flavor text: "El usuario carga contra el objetivo con toda la fuerza que tiene y descansa durante el siguiente turno."
		desc: "Carga contra el rival usando toda la fuerza que tiene. El Pokémon descansa el turno siguiente.",
		shortDesc: "Carga contra el rival usando toda la fuerza que tiene. El Pokémon descansa el turno siguiente.",
	},
	gigatonhammer: {
		name: "Martillo Colosal",
		shortDesc: "Golpea con un enorme martillo. No se puede usar dos veces seguidas.",
	},
	gigavolthavoc: {
		name: "Gigavoltio Destructor",
		shortDesc: null, // NEEDS TRANSLATION
	},
	glaciallance: {
		name: "Lanza Glacial",
		// Official flavor text: "El usuario ataca al objetivo lanzándole un carámbano de hielo envuelto en una ventisca."
		desc: "El usuario ataca lanzando una poderosa lanza de hielo que daña a ambos rivales.",
		shortDesc: "El usuario ataca lanzando una poderosa lanza de hielo que daña a ambos rivales.",
	},
	glaciate: {
		name: "Mundo Gélido",
		// Official flavor text: "Ataque con aire helado que baja la Velocidad del objetivo."
		desc: "Ataque con aire helado que puede bajar la Velocidad del objetivo.",
		shortDesc: "Ataque con aire helado que puede bajar la Velocidad del objetivo.",
	},
	glaiverush: {
		name: "Asalto Espadón",
		desc: "En el turno siguiente los ataques del rival no fallarán y causarán el doble de daño.",
		shortDesc: "En el turno siguiente los ataques del rival no fallarán y causarán el doble de daño.",
	},
	glare: {
		name: "Deslumbrar",
		// Official flavor text: "Intimida y asusta al objetivo con la mirada para dejarlo paralizado."
		desc: "Intimida y asusta al objetivo con la mirada para dejarlo paralizado.",
		shortDesc: "Intimida y asusta al objetivo con la mirada para dejarlo paralizado.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	glitzyglow: {
		name: "Espeaura",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario bombardea al objetivo con fuerza telequinética y levanta una Pantalla de Luz.",
		shortDesc: "El usuario bombardea al objetivo con fuerza telequinética y levanta una Pantalla de Luz.",
	},
	gmaxbefuddle: {
		name: "Gigaestupor",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxcannonade: {
		name: "Gigacañonazo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡La corriente arrastra a {PARTY}!",
		damage: "  ¡{POKEMON} sufre al verse arrastrado por la corriente de Gigacañonazo!",
	},
	gmaxcentiferno: {
		name: "Gigacienfuegos",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxchistrike: {
		name: "Gigapuñición",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "#focusenergy",
	},
	gmaxcuddle: {
		name: "Gigaternura",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxdepletion: {
		name: "Gigadesgaste",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡{TARGET} ha perdido PP!",
	},
	gmaxdrumsolo: {
		name: "Gigarredoble",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxfinale: {
		name: "Gigacolofón",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxfireball: {
		name: "Gigaesfera Ígnea",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxfoamburst: {
		name: "Gigaespuma",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxgoldrush: {
		name: "Gigamonedas",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxgravitas: {
		name: "Gigabóveda",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxhydrosnipe: {
		name: "Gigadisparo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxmalodor: {
		name: "Gigapestilencia",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxmeltdown: {
		name: "Gigafundido",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxoneblow: {
		name: "Gigagolpe Brusco",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxrapidflow: {
		name: "Gigagolpe Fluido",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxreplenish: {
		name: "Gigarreciclaje",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxresonance: {
		name: "Gigamelodía",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsandblast: {
		name: "Gigapolvareda",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsmite: {
		name: "Gigacastigo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsnooze: {
		name: "Gigasopor",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsteelsurge: {
		name: "Gigatrampa Acero",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡Piezas de acero puntiagudas rodean a {PARTY}!",
		end: "  Las piezas de acero que rodeaban a {PARTY} han desaparecido.",
		damage: "  ¡Unas piezas de acero puntiagudas han dañado a {POKEMON}!",
	},
	gmaxstonesurge: {
		name: "Gigatrampa Rocas",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxstunshock: {
		name: "Gigadescarga",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsweetness: {
		name: "Giganéctar",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxtartness: {
		name: "Gigacorrosión",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxterror: {
		name: "Gigaaparición",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxvinelash: {
		name: "Gigalianas",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡Violentos latigazos avasallan a {PARTY}!",
		damage: "  ¡Los violentos golpes de Gigalianas hieren a {POKEMON}!",
	},
	gmaxvolcalith: {
		name: "Gigarroca Ígnea",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡Las rocas rodean a {PARTY}!",
		damage: "  ¡Las piedras desprendidas por Gigarroca Ígnea han herido a {POKEMON}!",
	},
	gmaxvoltcrash: {
		name: "Gigatronada",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxwildfire: {
		name: "Gigallamarada",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡Las llamas rodean a {PARTY}!",
		damage: "  ¡El fuego de Gigallamarada ha quemado a {POKEMON}!",
	},
	gmaxwindrage: {
		name: "Gigahuracán",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	grassknot: {
		name: "Hierba Lazo",
		// Official flavor text: "Enreda al objetivo con hierba y lo derriba. Cuanto más pesado es el objetivo, más daño inflige."
		desc: "Enreda al objetivo con hierba y lo derriba. Cuanto más pesado es el objetivo, más daño inflige.",
		shortDesc: "Enreda al objetivo con hierba y lo derriba. Cuanto más pesado es el objetivo, más daño inflige.",
	},
	grasspledge: {
		name: "Voto Planta",
		// Official flavor text: "Ataca con columnas de hojas. Combinado con Voto Agua, crea un pantano y aumenta su potencia."
		desc: "Ataca con columnas de hojas. Combinado con Voto Agua crea un pantano y aumenta su potencia.",
		shortDesc: "Ataca con columnas de hojas. Combinado con Voto Agua crea un pantano y aumenta su potencia.",

		activate: "#waterpledge",
		start: "  ¡Ha aparecido un pantano alrededor de {TEAM}!",
		end: "  El pantano que rodeaba a {TEAM} ha desaparecido.",
	},
	grasswhistle: {
		name: "Silbato",
		shortDesc: "Agradable melodía que adormece al objetivo.",
	},
	grassyglide: {
		name: "Fitoimpulso",
		// Official flavor text: "Ataca al objetivo deslizándose sobre el terreno de combate. Este movimiento tiene prioridad alta cuando el terreno está cubierto por un campo de hierba."
		desc: "Ataca deslizándose sobre el terreno. Cuando hay campo de hierba tiene prioridad.",
		shortDesc: "Ataca deslizándose sobre el terreno. Cuando hay campo de hierba tiene prioridad.",
	},
	grassyterrain: {
		name: "Campo de Hierba",
		// Official flavor text: "Durante cinco turnos, se potencian los movimientos de tipo Planta y los Pokémon que están en contacto con el suelo recuperan PS en cada turno."
		desc: "Invoca un campo de hierba 5 turnos. Al final del turno los Pokémon en el suelo recuperan PS.",
		shortDesc: "Invoca un campo de hierba 5 turnos. Al final del turno los Pokémon en el suelo recuperan PS.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	gravapple: {
		name: "Fuerza G",
		// Official flavor text: "El usuario ataca haciendo caer una manzana desde gran altura. Disminuye la Defensa del objetivo."
		desc: "Causa daño dejando caer una manzana desde una gran altura. Baja la Defensa del objetivo.",
		shortDesc: "Causa daño dejando caer una manzana desde una gran altura. Baja la Defensa del objetivo.",
	},
	gravity: {
		name: "Gravedad",
		// Official flavor text: "Durante cinco turnos, se anulan los movimientos que alzan el vuelo y los Pokémon de tipo Volador o que levitan son vulnerables a movimientos de tipo Tierra."
		desc: "La gravedad aumenta durante cinco turnos, lo que impide acciones que impliquen volar o levitar.",
		shortDesc: "La gravedad aumenta durante cinco turnos, lo que impide acciones que impliquen volar o levitar.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	growl: {
		name: "Gruñido",
		// Official flavor text: "Dulce gruñido que reduce el Ataque del equipo rival."
		desc: "Dulce gruñido que reduce el Ataque del contrincante.",
		shortDesc: "Dulce gruñido que reduce el Ataque del contrincante.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	growth: {
		name: "Desarrollo",
		// Official flavor text: "Hace que su cuerpo crezca a marchas forzadas con lo que aumenta su Ataque y Ataque Especial."
		desc: "El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.",
		shortDesc: "El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	grudge: {
		name: "Rabia",
		// Official flavor text: "Si el usuario se debilita al recibir un ataque, todos los PP de este último ataque serán eliminados."
		desc: "Si el usuario se debilita al recibir un ataque, los PP de este último ataque serán eliminados.",
		shortDesc: "Si el usuario se debilita al recibir un ataque, los PP de este último ataque serán eliminados.",

		activate: "  ¡A causa de la rabia {POKEMON} se ha quedado sin ningún PP de {MOVE}!",
		start: "¡{POKEMON} va a intentar que su rival sienta rabia!",
	},
	guardianofalola: {
		name: "Cólera del Guardián",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	guardsplit: {
		name: "Isoguardia",
		// Official flavor text: "El usuario emplea sus poderes para hacer la media de su Defensa y Defensa Especial con las de su objetivo y compartirlas."
		desc: "Hace la media de su Defensa y Def. Esp. con las de su objetivo y las comparte.",
		shortDesc: "Hace la media de su Defensa y Def. Esp. con las de su objetivo y las comparte.",

		activate: "  ¡{POKEMON} suma su capacidad defensiva a la del objetivo y la reparte equitativamente!",
	},
	guardswap: {
		name: "Cambiadefensa",
		// Official flavor text: "El usuario emplea su poder mental para intercambiar los cambios en la Defensa y Defensa Especial con el objetivo."
		desc: "Con su poder mental intercambia los cambios en Defensa y Def. Especial con el objetivo.",
		shortDesc: "Con su poder mental intercambia los cambios en Defensa y Def. Especial con el objetivo.",
	},
	guillotine: {
		name: "Guillotina",
		// Official flavor text: "Ataque cortante que debilita al oponente de un golpe si acierta."
		desc: "Ataque con pinzas que debilita al oponente de un golpe si acierta.",
		shortDesc: "Ataque con pinzas que debilita al oponente de un golpe si acierta.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	gunkshot: {
		name: "Lanzamugre",
		// Official flavor text: "Lanza contra el objetivo basura asquerosa y puede envenenarlo."
		desc: "Lanza contra el objetivo asquerosa basura. Puede envenenar al objetivo.",
		shortDesc: "Lanza contra el objetivo asquerosa basura. Puede envenenar al objetivo.",
	},
	gust: {
		name: "Tornado",
		// Official flavor text: "Crea un tornado con las alas y lo lanza contra el objetivo."
		desc: "Crea un tornado con las alas y lo lanza contra el objetivo.",
		shortDesc: "Crea un tornado con las alas y lo lanza contra el objetivo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	gyroball: {
		name: "Giro Bola",
		// Official flavor text: "Embiste al objetivo con un potente ataque giratorio. Cuanto más lento es el usuario, más daño causa."
		desc: "Embiste con un potente ataque giratorio. Cuanto más lento es el usuario, más daño causa.",
		shortDesc: "Embiste con un potente ataque giratorio. Cuanto más lento es el usuario, más daño causa.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hail: {
		name: "Granizo",
		// Official flavor text: "Tormenta de granizo que dura cinco turnos. Hiere a todos los Pokémon excepto a los de tipo Hielo."
		desc: "Tormenta de nieve que dura cinco turnos. Aumenta la defensa de los Pokémon tipo Hielo en un 50%.",
		shortDesc: "Tormenta de nieve que dura cinco turnos. Aumenta la defensa de los Pokémon tipo Hielo en un 50%.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hammerarm: {
		name: "Machada",
		// Official flavor text: "Gira con fuerza el puño y da un gran golpe. No obstante, baja la Velocidad."
		desc: "Gira con fuerza el puño y da un gran golpe. No obstante, baja la Velocidad del usuario.",
		shortDesc: "Gira con fuerza el puño y da un gran golpe. No obstante, baja la Velocidad del usuario.",
	},
	happyhour: {
		name: "Paga Extra",
		shortDesc: "Al usar este movimiento se consigue duplicar la recompensa recibida tras el combate.",

		activate: "  ¡La felicidad se respira en el aire!",
	},
	harden: {
		name: "Fortaleza",
		// Official flavor text: "Tensa la musculatura del usuario para aumentar la Defensa."
		desc: "Tensa la musculatura del usuario para aumentar la Defensa.",
		shortDesc: "Tensa la musculatura del usuario para aumentar la Defensa.",
	},
	hardpress: {
		name: "Prensa Metálica",
		desc: "Oprime con los brazos o las pinzas. Cuantos más PS le queden al objetivo, más daño hace.",
		shortDesc: "Oprime con los brazos o las pinzas. Cuantos más PS le queden al objetivo, más daño hace.",
	},
	haze: {
		name: "Niebla",
		// Official flavor text: "Neblina que elimina los cambios de características de todos los Pokémon en combate."
		desc: "Neblina que elimina los cambios de características de todos los Pokémon en combate.",
		shortDesc: "Neblina que elimina los cambios de características de todos los Pokémon en combate.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		// Only used in Gen 1
		activate: "  ¡Eliminado TODO cambio de ESTADO!",
	},
	headbutt: {
		name: "Golpe Cabeza",
		// Official flavor text: "Potente cabezazo que puede amedrentar al objetivo."
		desc: "Lanza un potente cabezazo que puede amedrentar al objetivo.",
		shortDesc: "Lanza un potente cabezazo que puede amedrentar al objetivo.",
	},
	headcharge: {
		name: "Ariete",
		// Official flavor text: "Propina un tremendo cabezazo. También daña al usuario un poco."
		desc: "Propina un tremendo cabezazo. También daña al usuario un poco.",
		shortDesc: "Propina un tremendo cabezazo. También daña al usuario un poco.",
	},
	headlongrush: {
		name: "Arremetida",
		desc: "El usuario arremete con todas sus fuerzas, pero se reducen su Defensa y su Defensa Especial.",
		shortDesc: "El usuario arremete con todas sus fuerzas, pero se reducen su Defensa y su Defensa Especial.",
	},
	headsmash: {
		name: "Testarazo",
		// Official flavor text: "El usuario arriesga su vida y lanza un cabezazo con toda su fuerza. El agresor resulta seriamente dañado."
		desc: "Arriesga su vida y lanza un cabezazo con toda su fuerza. El agresor resulta seriamente dañado.",
		shortDesc: "Arriesga su vida y lanza un cabezazo con toda su fuerza. El agresor resulta seriamente dañado.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	healbell: {
		name: "Cascabel Cura",
		// Official flavor text: "Tañido que cura los problemas de estado de todos los Pokémon del equipo."
		desc: "Tañido que cura los problemas de estado de todos los Pokémon del equipo.",
		shortDesc: "Tañido que cura los problemas de estado de todos los Pokémon del equipo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Ha repicado un cascabel.",
	},
	healblock: {
		name: "Anticura",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Impide al objetivo usar movimientos, habilidades y objetos que recuperan PS durante cinco turnos.",
		shortDesc: "Impide al objetivo usar movimientos, habilidades y objetos que recuperan PS durante cinco turnos.",
		gen8: {
			end: "  ¡Se han pasado los efectos de Anticura en {POKEMON}!",
			cant: "¡{POKEMON} no puede usar {MOVE} debido a Anticura!",
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} no puede curarse!",
		end: "  ¡{POKEMON} ya puede curarse!",
		cant: "¡{POKEMON} no puede usar {MOVE} porque se ha anulado la curación!",
		fail: "  Pero no ha afectado a {POKEMON}...",
	},
	healingwish: {
		name: "Deseo Cura",
		// Official flavor text: "El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS."
		desc: "El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS.",
		shortDesc: "El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  ¡El deseo de curación se ha hecho realidad para {POKEMON}!",
	},
	healorder: {
		name: "Auxilio",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario llama a sus amigos para que lo curen. Recupera hasta la mitad de los PS máximos.",
		shortDesc: "El usuario llama a sus amigos para que lo curen. Recupera hasta la mitad de los PS máximos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	healpulse: {
		name: "Pulso Cura",
		// Official flavor text: "Una onda curativa restaura la mitad de los PS máximos del objetivo."
		desc: "Una onda curativa restaura los PS del objetivo a la mitad de su máximo.",
		shortDesc: "Una onda curativa restaura los PS del objetivo a la mitad de su máximo.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	heartstamp: {
		name: "Arrumaco",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Grácil gesto que asesta un golpe tremendo al objetivo y puede amedrentarlo.",
		shortDesc: "Grácil gesto que asesta un golpe tremendo al objetivo y puede amedrentarlo.",
	},
	heartswap: {
		name: "Cambiaalmas",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Usa la fuerza mental para intercambiar con el objetivo los cambios en las características.",
		shortDesc: "Usa la fuerza mental para intercambiar con el objetivo los cambios en las características.",
	},
	heatcrash: {
		name: "Golpe Calor",
		// Official flavor text: "El usuario ataca con su cuerpo ardiente. Cuanto mayor sea su peso comparado con el del objetivo, más daño causará."
		desc: "Cuanto mayor sea su peso comparado con el del objetivo, más daño causará.",
		shortDesc: "Cuanto mayor sea su peso comparado con el del objetivo, más daño causará.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	heatwave: {
		name: "Onda Ígnea",
		// Official flavor text: "Provoca un viento abrasador que puede quemar al objetivo."
		desc: "Provoca un viento abrasador que puede quemar al objetivo.",
		shortDesc: "Provoca un viento abrasador que puede quemar al objetivo.",
	},
	heavyslam: {
		name: "Cuerpo Pesado",
		// Official flavor text: "El usuario golpea con todo su cuerpo. Cuanto mayor sea su peso comparado con el del objetivo, más daño causará."
		desc: "Cuanto mayor sea su peso comparado con el del objetivo, más daño causará.",
		shortDesc: "Cuanto mayor sea su peso comparado con el del objetivo, más daño causará.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	helpinghand: {
		name: "Refuerzo",
		// Official flavor text: "El usuario ayuda a un aliado reforzando la potencia de su ataque."
		desc: "El usuario ayuda a un aliado reforzando la potencia de su ataque.",
		shortDesc: "El usuario ayuda a un aliado reforzando la potencia de su ataque.",

		start: "  ¡{SOURCE} está listo para ayudar a {POKEMON}!",
	},
	hex: {
		name: "Infortunio",
		// Official flavor text: "Ataque que causa un gran daño a los objetivos que sufren problemas de estado."
		desc: "Ataque que causa un gran daño a los objetivos que sufren problemas de estado.",
		shortDesc: "Ataque que causa un gran daño a los objetivos que sufren problemas de estado.",
	},
	hiddenpower: {
		name: "Poder Oculto",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataque único cuyo tipo y potencia varían según el agresor.",
		shortDesc: "Ataque único cuyo tipo y potencia varían según el agresor.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hiddenpowerbug: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerdark: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerdragon: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerelectric: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerfighting: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerfire: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerflying: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerghost: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowergrass: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerground: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerice: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerpoison: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerpsychic: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerrock: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowersteel: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerwater: {
		name: null, // NEEDS TRANSLATION
	},
	highhorsepower: {
		name: "Fuerza Equina",
		shortDesc: "Asesta un golpe devastador usando su cuerpo.",
	},
	highjumpkick: {
		name: "Patada Salto Alta",
		// Official flavor text: "El usuario salta muy alto y da un rodillazo. Si falla, se hará daño."
		desc: "Salta muy alto y lanza una patada. Si falla, dañará al usuario.",
		shortDesc: "Salta muy alto y lanza una patada. Si falla, dañará al usuario.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "#crash",
	},
	holdback: {
		name: "Clemencia",
		// Official flavor text: "El usuario se contiene a la hora de atacar y deja al objetivo con al menos 1 PS."
		desc: "El usuario se contiene a la hora de atacar y deja al Pokémon objetivo con al menos 1 PS.",
		shortDesc: "El usuario se contiene a la hora de atacar y deja al Pokémon objetivo con al menos 1 PS.",
	},
	holdhands: {
		name: "Manos Juntas",
		// Official flavor text: "El Pokémon le da la mano a un aliado y ambos se sienten muy felices."
		desc: "El Pokémon le da la mano a un aliado y ambos se sienten muy felices.",
		shortDesc: "El Pokémon le da la mano a un aliado y ambos se sienten muy felices.",
	},
	honeclaws: {
		name: "Afilagarras",
		// Official flavor text: "El usuario se afila las garras para aumentar su Ataque y Precisión."
		desc: "El usuario se afila las garras para aumentar su Ataque y Precisión.",
		shortDesc: "El usuario se afila las garras para aumentar su Ataque y Precisión.",
	},
	hornattack: {
		name: "Cornada",
		shortDesc: "Ataca al objetivo con una cornada.",
	},
	horndrill: {
		name: "Perforador",
		// Official flavor text: "Ataque con un cuerno giratorio que fulmina de un solo golpe al objetivo si lo alcanza."
		desc: "Ataque con taladro que fulmina en un golpe al objetivo si le toca.",
		shortDesc: "Ataque con taladro que fulmina en un golpe al objetivo si le toca.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hornleech: {
		name: "Asta Drenaje",
		// Official flavor text: "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo."
		desc: "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo.",
		shortDesc: "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo.",
	},
	howl: {
		name: "Aullido",
		// Official flavor text: "Aullido que sube el ánimo y aumenta el Ataque del equipo."
		desc: "Aullido que sube el ánimo y aumenta el Ataque.",
		shortDesc: "Aullido que sube el ánimo y aumenta el Ataque.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hurricane: {
		name: "Vendaval",
		// Official flavor text: "Golpea al objetivo con un fuerte torbellino que envuelve al rival y puede confundirlo."
		desc: "Golpea al objetivo con un fuerte torbellino que envuelve al rival y puede confundirlo.",
		shortDesc: "Golpea al objetivo con un fuerte torbellino que envuelve al rival y puede confundirlo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hydrocannon: {
		name: "Hidrocañón",
		// Official flavor text: "Disparo de agua. El atacante debe descansar el siguiente turno."
		desc: "Disparo potente de agua. El atacante debe descansar el siguiente turno.",
		shortDesc: "Disparo potente de agua. El atacante debe descansar el siguiente turno.",
	},
	hydropump: {
		name: "Hidrobomba",
		shortDesc: "Lanza una gran masa de agua a presión para atacar.",
	},
	hydrosteam: {
		name: "Hidrovapor",
		desc: "Lanza un potente chorro de agua hirviendo al rival que aumenta su poder si hace sol.",
		shortDesc: "Lanza un potente chorro de agua hirviendo al rival que aumenta su poder si hace sol.",
	},
	hydrovortex: {
		name: "Hidrovórtice Abisal",
		shortDesc: null, // NEEDS TRANSLATION
	},
	hyperbeam: {
		name: "Hiperrayo",
		// Official flavor text: "Es eficaz, pero el atacante deberá descansar en el siguiente turno."
		desc: "Un rayo fulminante, pero el atacante deberá descansar en el siguiente turno.",
		shortDesc: "Un rayo fulminante, pero el atacante deberá descansar en el siguiente turno.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hyperdrill: {
		name: "Hipertaladro",
		shortDesc: "Ataca rotando la parte puntiaguda de su cuerpo. Ignora movimientos como Protección.",
	},
	hyperfang: {
		name: "Hipercolmillo",
		// Official flavor text: "Ataca con agudos colmillos. Puede amedrentar al objetivo."
		desc: "Ataque con finos colmillos. Puede amedrentar.",
		shortDesc: "Ataque con finos colmillos. Puede amedrentar.",
	},
	hyperspacefury: {
		name: "Cerco Dimensión",
		// Official flavor text: "Ataca al objetivo con una ráfaga de golpes que pasan por alto los efectos de movimientos como Protección o Detección. Baja la Defensa del usuario."
		desc: "Ataca ignorando efectos de movimientos como Protección. Baja la Defensa del usuario.",
		shortDesc: "Ataca ignorando efectos de movimientos como Protección. Baja la Defensa del usuario.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#shadowforce",
		fail: "#darkvoid",
	},
	hyperspacehole: {
		name: "Paso Dimensional",
		// Official flavor text: "El usuario aparece junto al rival usando un agujero dimensional y le asesta un golpe que movimientos como Protección o Detección no pueden evitar."
		desc: "Golpea aunque el rival use Protección, Detección, Vastaguardia o Anticipo ese turno.",
		shortDesc: "Golpea aunque el rival use Protección, Detección, Vastaguardia o Anticipo ese turno.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#shadowforce",
	},
	hypervoice: {
		name: "Vozarrón",
		// Official flavor text: "Grito desgarrador que inflige daño al objetivo."
		desc: "Grito desgarrador que inflige daño al objetivo.",
		shortDesc: "Grito desgarrador que inflige daño al objetivo.",
	},
	hypnosis: {
		name: "Hipnosis",
		shortDesc: "Ataque hipnótico que hace dormir profundamente al objetivo.",
	},
	iceball: {
		name: "Bola Hielo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El atacante rueda contra el objetivo durante cinco turnos, cada vez con mayor fuerza.",
		shortDesc: "El atacante rueda contra el objetivo durante cinco turnos, cada vez con mayor fuerza.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	icebeam: {
		name: "Rayo Hielo",
		// Official flavor text: "Rayo de hielo que puede llegar a congelar."
		desc: "Rayo de hielo que puede llegar a congelar.",
		shortDesc: "Rayo de hielo que puede llegar a congelar.",
	},
	iceburn: {
		name: "Llama Gélida",
		// Official flavor text: "Ataca al objetivo en el segundo turno rodeándolo de un aire gélido. Puede causar quemaduras."
		desc: "Ataca al objetivo en el segundo turno rodeándolo de un aire gélido. Puede causar quemaduras.",
		shortDesc: "Ataca al objetivo en el segundo turno rodeándolo de un aire gélido. Puede causar quemaduras.",

		prepare: "  ¡Una ráfaga gélida envuelve a {POKEMON}!",
	},
	icefang: {
		name: "Colmillo Hielo",
		// Official flavor text: "El usuario muerde al objetivo con colmillos helados y puede hacer que se amedrente o se congele."
		desc: "Usa colmillos helados para morder. Puede hacer que el objetivo se amedrente o congelarlo.",
		shortDesc: "Usa colmillos helados para morder. Puede hacer que el objetivo se amedrente o congelarlo.",
	},
	icehammer: {
		name: "Martillo Hielo",
		// Official flavor text: "Un terrible puño golpea al contrincante, pero la Velocidad del usuario se ve reducida."
		desc: "Un terrible puño golpea al contrincante, pero la Velocidad del usuario se ve reducida.",
		shortDesc: "Un terrible puño golpea al contrincante, pero la Velocidad del usuario se ve reducida.",
	},
	icepunch: {
		name: "Puño Hielo",
		// Official flavor text: "Puñetazo helado que puede llegar a congelar."
		desc: "Puñetazo helado. Puede congelar.",
		shortDesc: "Puñetazo helado. Puede congelar.",
	},
	iceshard: {
		name: "Esquirla Helada",
		// Official flavor text: "Crea bolas de hielo y las lanza a gran velocidad. Este movimiento tiene prioridad alta."
		desc: "Crea bolas de hielo y las lanza a gran velocidad. Este movimiento siempre va primero.",
		shortDesc: "Crea bolas de hielo y las lanza a gran velocidad. Este movimiento siempre va primero.",
	},
	icespinner: {
		name: "Pirueta Helada",
		desc: "Recubre las extremidades con una capa de hielo y golpea al rival. Si hay un campo lo rompe.",
		shortDesc: "Recubre las extremidades con una capa de hielo y golpea al rival. Si hay un campo lo rompe.",
	},
	iciclecrash: {
		name: "Chuzos",
		// Official flavor text: "Lanza grandes carámbanos. Puede amedrentar al objetivo."
		desc: "Lanza grandes carámbanos. Puede amedrentar al objetivo.",
		shortDesc: "Lanza grandes carámbanos. Puede amedrentar al objetivo.",
	},
	iciclespear: {
		name: "Carámbano",
		// Official flavor text: "Ataca lanzando de dos a cinco ráfagas consecutivas de carámbanos."
		desc: "Ataca lanzando de dos a cinco ráfagas consecutivas de carámbanos.",
		shortDesc: "Ataca lanzando de dos a cinco ráfagas consecutivas de carámbanos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	icywind: {
		name: "Viento Hielo",
		// Official flavor text: "Ataque con aire helado que baja la Velocidad de los rivales."
		desc: "Ataque con aire helado que baja la Velocidad del objetivo.",
		shortDesc: "Ataque con aire helado que baja la Velocidad del objetivo.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	imprison: {
		name: "Sellar",
		// Official flavor text: "Impide a los contrincantes usar ataques conocidos por el usuario durante el combate."
		desc: "Impide a los contrincantes usar ataques conocidos por el usuario durante el combate.",
		shortDesc: "Impide a los contrincantes usar ataques conocidos por el usuario durante el combate.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡Los movimientos de los rivales que {POKEMON} también conoce han sido sellados!",
		cant: "¡{POKEMON} no puede usar el movimiento {MOVE} porque ha sido sellado!",
	},
	incinerate: {
		name: "Calcinación",
		// Official flavor text: "Llamas que golpean a los objetivos adyacentes. Si estos llevan bayas o ciertos objetos, se quemarán y ya no se podrán usar."
		desc: "Llamas que golpean a los objetivos adyacentes. Si llevan Bayas, se quemarán y desaparecerán.",
		shortDesc: "Llamas que golpean a los objetivos adyacentes. Si llevan Bayas, se quemarán y desaparecerán.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		removeItem: "  ¡{ITEM:definite:capitalize} de {POKEMON} se ha calcinado!",
	},
	infernalparade: {
		name: "Marcha Espectral",
		desc: "Bolas de fuego que pueden causar quemaduras. Duplica la potencia si ya tiene un cambio de estado.",
		shortDesc: "Bolas de fuego que pueden causar quemaduras. Duplica la potencia si ya tiene un cambio de estado.",
	},
	inferno: {
		name: "Infierno",
		// Official flavor text: "Ataca con una gran ráfaga de fuego que causa quemaduras."
		desc: "Ataca con una gran ráfaga de fuego que causa quemaduras.",
		shortDesc: "Ataca con una gran ráfaga de fuego que causa quemaduras.",
	},
	infernooverdrive: {
		name: "Hecatombe Pírica",
		shortDesc: null, // NEEDS TRANSLATION
	},
	infestation: {
		name: "Acoso",
		// Official flavor text: "Hostiga al objetivo durante cuatro o cinco turnos e impide que pueda huir mientras tanto."
		desc: "Oprime al enemigo de cuatro a cinco turnos, durante los cuales no podrá huir.",
		shortDesc: "Oprime al enemigo de cuatro a cinco turnos, durante los cuales no podrá huir.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} es presa del acoso de {SOURCE}!",
	},
	ingrain: {
		name: "Arraigo",
		// Official flavor text: "Echa raíces para recuperar PS en cada turno, pero impide el relevo."
		desc: "Echa raíces para recuperar PS en cada turno, pero impide el relevo.",
		shortDesc: "Echa raíces para recuperar PS en cada turno, pero impide el relevo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha echado raíces!",
		block: "  ¡{POKEMON} se ha fijado al suelo con sus raíces!",
		heal: "  ¡{POKEMON} ha absorbido nutrientes a través de las raíces!",
	},
	instruct: {
		name: "Mandato",
		// Official flavor text: "Fuerza al objetivo a repetir inmediatamente su último movimiento."
		desc: "Fuerza al objetivo a repetir inmediatamente su último movimiento.",
		shortDesc: "Fuerza al objetivo a repetir inmediatamente su último movimiento.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{TARGET} sigue el mandato de {POKEMON} y repite su último movimiento!",
	},
	iondeluge: {
		name: "Cortina Plasma",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Disemina partículas con carga que convierten los movimientos de tipo Normal en tipo Eléctrico.",
		shortDesc: "Disemina partículas con carga que convierten los movimientos de tipo Normal en tipo Eléctrico.",

		activate: "  ¡Una lluvia de electrones cae sobre el terreno de combate!",
	},
	irondefense: {
		name: "Defensa Férrea",
		// Official flavor text: "Fortalece el cuerpo como si fuera de hierro y sube mucho la Defensa."
		desc: "Fortalece el cuerpo como si fuera hierro y sube mucho la Defensa.",
		shortDesc: "Fortalece el cuerpo como si fuera hierro y sube mucho la Defensa.",
	},
	ironhead: {
		name: "Cabeza de Hierro",
		// Official flavor text: "Ataca con su dura cabeza de hierro. Puede hacer que el objetivo se amedrente."
		desc: "Ataca con su dura cabeza de hierro. Puede hacer que el objetivo se amedrente.",
		shortDesc: "Ataca con su dura cabeza de hierro. Puede hacer que el objetivo se amedrente.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	irontail: {
		name: "Cola Férrea",
		// Official flavor text: "Ataca con una cola férrea y puede bajar la Defensa del objetivo."
		desc: "Ataca con una cola férrea y puede bajar la Defensa del objetivo.",
		shortDesc: "Ataca con una cola férrea y puede bajar la Defensa del objetivo.",
	},
	ivycudgel: {
		name: "Garrote Liana",
		desc: "Golpea con un garrote. El tipo varía según la máscara que lleve. Suele ser crítico.",
		shortDesc: "Golpea con un garrote. El tipo varía según la máscara que lleve. Suele ser crítico.",
	},
	jawlock: {
		name: "Presa Maxilar",
		// Official flavor text: "Impide que tanto el atacante como el defensor puedan ser intercambiados hasta que uno de ellos se debilite o abandone el terreno de combate."
		desc: "Prohibe al objetivo y al usuario abandonar el combate hasta que uno de los dos se debilite.",
		shortDesc: "Prohibe al objetivo y al usuario abandonar el combate hasta que uno de los dos se debilite.",
	},
	jetpunch: {
		name: "Puño Jet",
		desc: "Envuelve el puño con un torrente y propina un golpe de alta prioridad.",
		shortDesc: "Envuelve el puño con un torrente y propina un golpe de alta prioridad.",
	},
	judgment: {
		name: "Sentencia",
		// Official flavor text: "Emite incontables haces de luz. El tipo del movimiento varía según la tabla que lleve el usuario."
		desc: "Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.",
		shortDesc: "Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.",
	},
	jumpkick: {
		name: "Patada Salto",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Da un salto y pega una patada. Si falla, dañará al usuario.",
		shortDesc: "Da un salto y pega una patada. Si falla, dañará al usuario.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "#crash",
	},
	junglehealing: {
		name: "Cura Selvática",
		// Official flavor text: "Al entrar en plena armonía con la selva, el usuario cura problemas de estado y restaura PS no solo de sí mismo, sino también de los aliados presentes en el terreno."
		desc: "Restaura los PS y cura los problemas de estado del usuario y sus aliados.",
		shortDesc: "Restaura los PS y cura los problemas de estado del usuario y sus aliados.",
	},
	karatechop: {
		name: "Golpe Kárate",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Da un golpe cortante. Suele ser crítico.",
		shortDesc: "Da un golpe cortante. Suele ser crítico.",
	},
	kinesis: {
		name: "Kinético",
		// Official flavor text: "Dobla una cuchara para distraer al objetivo y bajar su nivel de Precisión."
		desc: "Dobla una cuchara para distraer al objetivo y bajar su nivel de Precisión.",
		shortDesc: "Dobla una cuchara para distraer al objetivo y bajar su nivel de Precisión.",
	},
	kingsshield: {
		name: "Escudo Real",
		// Official flavor text: "El usuario adopta una postura defensiva y se protege de cualquier daño. Reduce el Ataque de cualquier Pokémon con el que entre en contacto."
		desc: "Protege al usuario de cualquier daño y baja el Ataque del rival si lo toca.",
		shortDesc: "Protege al usuario de cualquier daño y baja el Ataque del rival si lo toca.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	knockoff: {
		name: "Desarme",
		// Official flavor text: "Impide al objetivo usar el objeto que lleva durante el combate. La potencia del movimiento se multiplica si el objetivo lleva un objeto."
		desc: "Impide al objetivo usar el objeto que lleva durante el combate.",
		shortDesc: "Impide al objetivo usar el objeto que lleva durante el combate.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "  ¡{SOURCE} ha tirado al suelo {ITEM:definite:classified} de {POKEMON}!",
	},
	kowtowcleave: {
		name: "Genufendiente",
		shortDesc: "Se postra en ademán de reverencia para que el objetivo baje la guardia y aprovecha para atacar. No falla.",
	},
	landswrath: {
		name: "Fuerza Telúrica",
		// Official flavor text: "Acumula energía de la corteza terrestre y la concentra contra los oponentes, dañándolos."
		desc: "Acumula energía de la corteza terrestre y la concentra contra los oponentes, dañándolos.",
		shortDesc: "Acumula energía de la corteza terrestre y la concentra contra los oponentes, dañándolos.",
	},
	laserfocus: {
		name: "Aguzar",
		// Official flavor text: "El usuario se concentra para que el siguiente ataque propine un golpe crítico."
		desc: "El usuario se concentra para que el siguiente ataque propine un golpe crítico.",
		shortDesc: "El usuario se concentra para que el siguiente ataque propine un golpe crítico.",

		start: "  ¡{POKEMON} aguza la mente!",
	},
	lashout: {
		name: "Desahogo",
		// Official flavor text: "Ataca al rival presa de la rabia. Si el usuario ha sufrido una reducción de características en ese turno, la potencia del movimiento se duplica."
		desc: "Si el usuario ha sufrido una reducción de características en ese turno duplica la potencia.",
		shortDesc: "Si el usuario ha sufrido una reducción de características en ese turno duplica la potencia.",
	},
	lastresort: {
		name: "Última Baza",
		// Official flavor text: "Este movimiento solo puede utilizarse tras haber usado al menos una vez todos los demás conocidos por el Pokémon."
		desc: "Este movimiento solo puede usarse tras haber usado los demás conocidos por el Pokémon.",
		shortDesc: "Este movimiento solo puede usarse tras haber usado los demás conocidos por el Pokémon.",
	},
	lastrespects: {
		name: "Homenaje Póstumo",
		desc: "Venga a sus compañeros caídos. Cuantos más se hayan debilitado, mayor será la potencia.",
		shortDesc: "Venga a sus compañeros caídos. Cuantos más se hayan debilitado, mayor será la potencia.",
	},
	lavaplume: {
		name: "Humareda",
		// Official flavor text: "Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar."
		desc: "Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.",
		shortDesc: "Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.",
	},
	leafage: {
		name: "Follaje",
		shortDesc: "Ataca al oponente lanzando hojas.",
	},
	leafblade: {
		name: "Hoja Aguda",
		// Official flavor text: "Acuchilla con una hoja fina. Suele dar un golpe crítico."
		desc: "Acuchilla con una hoja fina. Suele dar un golpe crítico.",
		shortDesc: "Acuchilla con una hoja fina. Suele dar un golpe crítico.",
	},
	leafstorm: {
		name: "Lluevehojas",
		// Official flavor text: "Envuelve al objetivo con una lluvia de hojas afiladas, pero reduce mucho su Ataque Especial."
		desc: "Cae una lluvia de hojas afiladas. Baja mucho el Ataque Especial de quien lo usa.",
		shortDesc: "Cae una lluvia de hojas afiladas. Baja mucho el Ataque Especial de quien lo usa.",
	},
	leaftornado: {
		name: "Ciclón de Hojas",
		// Official flavor text: "Tritura con afiladas hojas y puede bajar la Precisión del objetivo."
		desc: "Tritura con afiladas hojas y puede bajar la Precisión del objetivo.",
		shortDesc: "Tritura con afiladas hojas y puede bajar la Precisión del objetivo.",
	},
	leechlife: {
		name: "Chupavidas",
		// Official flavor text: "Restaura al usuario la mitad del daño causado al objetivo."
		desc: "Restaura al usuario la mitad del daño causado al objetivo.",
		shortDesc: "Restaura al usuario la mitad del daño causado al objetivo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	leechseed: {
		name: "Drenadoras",
		// Official flavor text: "Planta semillas que absorben PS del objetivo en cada turno y que le sirven para recuperarse."
		desc: "Planta semillas que absorben PS para recuperar la salud del usuario en cada turno.",
		shortDesc: "Planta semillas que absorben PS para recuperar la salud del usuario en cada turno.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha sido infectado!",
		end: "  ¡{POKEMON} se ha liberado de Drenadoras!",
		damage: "  ¡Las drenadoras han restado salud a {POKEMON}!",
	},
	leer: {
		name: "Malicioso",
		// Official flavor text: "Intimida a los rivales para bajar su Defensa."
		desc: "Intimida al objetivo para bajar su Defensa.",
		shortDesc: "Intimida al objetivo para bajar su Defensa.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	letssnuggleforever: {
		name: "Somanta Amistosa",
		shortDesc: null, // NEEDS TRANSLATION
	},
	lick: {
		name: "Lengüetazo",
		// Official flavor text: "Una lengua ataca al objetivo. Puede causar parálisis."
		desc: "Una lengua ataca al objetivo. Puede causar parálisis.",
		shortDesc: "Una lengua ataca al objetivo. Puede causar parálisis.",
	},
	lifedew: {
		name: "Gota Vital",
		// Official flavor text: "Vierte un agua misteriosa y balsámica que restaura tanto sus propios PS como los de aquellos aliados presentes en el terreno de combate."
		desc: "El usuario rocia un agua misteriosa que recupera PS para él y sus aliados en combate.",
		shortDesc: "El usuario rocia un agua misteriosa que recupera PS para él y sus aliados en combate.",
	},
	lightofruin: {
		name: "Luz Aniquiladora",
		// Official flavor text: "El usuario emplea el poder de la Flor Eterna para lanzar un potente rayo de luz, pero sufre bastante daño al hacerlo."
		desc: "Emplea el poder de la Flor Eterna para lanzar un potente rayo de luz, pero sufre bastante daño.",
		shortDesc: "Emplea el poder de la Flor Eterna para lanzar un potente rayo de luz, pero sufre bastante daño.",
	},
	lightscreen: {
		name: "Pantalla de Luz",
		// Official flavor text: "Pared de luz que reduce durante cinco turnos el daño producido por los ataques especiales."
		desc: "Pared de luz que reduce durante cinco turnos el daño producido por los ataques especiales.",
		shortDesc: "Pared de luz que reduce durante cinco turnos el daño producido por los ataques especiales.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  ¡{POKEMON} está protegido contra ataques especiales!",
		},

		start: "  ¡Pantalla de Luz ha aumentado la resistencia de {TEAM} ante los ataques especiales!",
		end: "  El efecto de Pantalla de Luz en {TEAM} se ha disipado.",
	},
	lightthatburnsthesky: {
		name: "Fotodestrucción Apocalíptica",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	liquidation: {
		name: "Hidroariete",
		// Official flavor text: "Ataca golpeando gracias a la fuerza del agua. También puede reducir la Defensa del objetivo."
		desc: "Ataca golpeando gracias a la fuerza del agua. También puede reducir la Defensa del objetivo.",
		shortDesc: "Ataca golpeando gracias a la fuerza del agua. También puede reducir la Defensa del objetivo.",
	},
	lockon: {
		name: "Fijar Blanco",
		// Official flavor text: "Fija el blanco para que el siguiente ataque no falle."
		desc: "Fija el blanco para que el siguiente ataque no falle.",
		shortDesc: "Fija el blanco para que el siguiente ataque no falle.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{SOURCE} tiene en su punto de mira a {POKEMON}!",
	},
	lovelykiss: {
		name: "Beso Amoroso",
		shortDesc: "Con una cara que asusta, da un beso al objetivo y lo adormece.",
	},
	lowkick: {
		name: "Patada Baja",
		// Official flavor text: "Patada baja que derriba al oponente. Cuanto más pesa el objetivo, más daño le causa."
		desc: "Patada baja. Cuanto más pesa el objetivo, más daño causa.",
		shortDesc: "Patada baja. Cuanto más pesa el objetivo, más daño causa.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	lowsweep: {
		name: "Puntapié",
		// Official flavor text: "Ataque rápido dirigido a los pies del objetivo que le hace perder Velocidad."
		desc: "Un veloz ataque a los pies que reduce la Velocidad del objetivo.",
		shortDesc: "Un veloz ataque a los pies que reduce la Velocidad del objetivo.",
	},
	luckychant: {
		name: "Conjuro",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.",
		shortDesc: "Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.",

		start: "  ¡Conjuro protege a {TEAM} de los golpes críticos!",
		end: "  El efecto de Conjuro en {TEAM} se ha desvanecido.",
	},
	luminacrash: {
		name: "Fotocolisión",
		desc: "Ataca proyectando una extraña luz que afecta a la mente y reduce mucho la Def Especial.",
		shortDesc: "Ataca proyectando una extraña luz que afecta a la mente y reduce mucho la Def Especial.",
	},
	lunarblessing: {
		name: "Plegaria Lunar",
		desc: "Dedica una oración a la luna que restaura PS y los problemas de estado del bando del usuario.",
		shortDesc: "Dedica una oración a la luna que restaura PS y los problemas de estado del bando del usuario.",
	},
	lunardance: {
		name: "Danza Lunar",
		// Official flavor text: "El usuario se debilita, pero el Pokémon que lo sustituye recupera su estado, los PS y los PP."
		desc: "El usuario se debilita, pero el Pokémon que lo sustituye recupera su estado, los PS y los PP.",
		shortDesc: "El usuario se debilita, pero el Pokémon que lo sustituye recupera su estado, los PS y los PP.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  ¡Un místico halo de luz de luna envuelve a {POKEMON}!",
	},
	lunge: {
		name: "Plancha",
		// Official flavor text: "Ataca al oponente abalanzándose sobre él con todas sus fuerzas y reduce su Ataque."
		desc: "Ataca al oponente abalanzándose sobre él con todas sus fuerzas y reduce su Ataque.",
		shortDesc: "Ataca al oponente abalanzándose sobre él con todas sus fuerzas y reduce su Ataque.",
	},
	lusterpurge: {
		name: "Resplandor",
		// Official flavor text: "Fogonazo de luz que puede bajar la Defensa Especial del objetivo."
		desc: "Fogonazo de luz que puede bajar la Defensa Especial del objetivo.",
		shortDesc: "Fogonazo de luz que puede bajar la Defensa Especial del objetivo.",
	},
	machpunch: {
		name: "Ultrapuño",
		// Official flavor text: "Puñetazo de velocidad fulminante. Este movimiento tiene prioridad alta."
		desc: "Puñetazo que se da rápido para golpear primero.",
		shortDesc: "Puñetazo que se da rápido para golpear primero.",
	},
	magicalleaf: {
		name: "Hoja Mágica",
		shortDesc: "Esparce extrañas hojas que persiguen al objetivo. No se puede esquivar.",
	},
	magicaltorque: {
		name: "Feerichoque",
		desc: "Puede confundir al objetivo.",
		shortDesc: "Puede confundir al objetivo.",
	},
	magiccoat: {
		name: "Capa Mágica",
		// Official flavor text: "Barrera capaz de devolver al agresor movimientos como Drenadoras y otros que alteran el estado o las características."
		desc: "Barrera capaz de devolver al agresor movimientos como drenadoras y que alteran el estado.",
		shortDesc: "Barrera capaz de devolver al agresor movimientos como drenadoras y que alteran el estado.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} se ha cubierto con Capa Mágica!",
		move: "¡{POKEMON} ha devuelto {MOVE}!",
	},
	magicpowder: {
		name: "Polvo Mágico",
		// Official flavor text: "Cubre al objetivo con unos polvos mágicos que le hacen adquirir el tipo Psíquico."
		desc: "El usuario lanza una nube de polvo mágico que convierte al objetivo en tipo Psíquico.",
		shortDesc: "El usuario lanza una nube de polvo mágico que convierte al objetivo en tipo Psíquico.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	magicroom: {
		name: "Zona Mágica",
		// Official flavor text: "Crea un espacio misterioso que inutiliza todos los objetos de los Pokémon durante cinco turnos."
		desc: "Crea un espacio misterioso que inutiliza los objetos de los Pokémon durante cinco turnos.",
		shortDesc: "Crea un espacio misterioso que inutiliza los objetos de los Pokémon durante cinco turnos.",
	},
	magmastorm: {
		name: "Lluvia Ígnea",
		// Official flavor text: "El objetivo queda atrapado en una tormenta de fuego que dura de cuatro a cinco turnos."
		desc: "El rival queda atrapado en una tormenta de fuego que dura de dos a cinco turnos.",
		shortDesc: "El rival queda atrapado en una tormenta de fuego que dura de dos a cinco turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha quedado atrapado en la lluvia ígnea!",
	},
	magnetbomb: {
		name: "Bomba Imán",
		shortDesc: "Lanza unas bombas de hierro que se pegan al adversario. Este movimiento acierta siempre.",
	},
	magneticflux: {
		name: "Aura Magnética",
		// Official flavor text: "Manipula el campo magnético y logra aumentar la Defensa y la Defensa Especial de los Pokémon aliados que cuenten con las habilidades Más y Menos."
		desc: "Aumentar la Defensa y la Defensa Espepecial de los aliados con las habilidades Más y Menos.",
		shortDesc: "Aumentar la Defensa y la Defensa Espepecial de los aliados con las habilidades Más y Menos.",
	},
	magnetrise: {
		name: "Levitón",
		// Official flavor text: "Levita gracias a un campo magnético generado por electricidad durante cinco turnos."
		desc: "Levita gracias a un campo magnético generado por electricidad durante cinco turnos.",
		shortDesc: "Levita gracias a un campo magnético generado por electricidad durante cinco turnos.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} levita gracias a un campo electromagnético!",
		end: "  ¡El campo electromagnético de {POKEMON} se ha disipado!",
	},
	magnitude: {
		name: "Magnitud",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Sacudida sísmica de intensidad variable que afecta a los Pokémon adyacentes en combate.",
		shortDesc: "Sacudida sísmica de intensidad variable que afecta a los Pokémon adyacentes en combate.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡Magnitud {NUMBER}!",
	},
	makeitrain: {
		name: "Fiebre Dorada",
		desc: "Ataca arrojando muchas monedas, pero reduce su At. Especial. Aumenta la recompensa.",
		shortDesc: "Ataca arrojando muchas monedas, pero reduce su At. Especial. Aumenta la recompensa.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},

		activate: "#payday",
	},
	maliciousmoonsault: {
		name: "Hiperplancha Oscura",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	malignantchain: {
		name: "Cadena Virulenta",
		desc: "Apresa al objetivo con una cadena para minarle las fuerzas. Puede envenenar gravemente.",
		shortDesc: "Apresa al objetivo con una cadena para minarle las fuerzas. Puede envenenar gravemente.",
	},
	matblock: {
		name: "Escudo Tatami",
		// Official flavor text: "El usuario usa un tatami para escudarse de los ataques enemigos. Protege también a los aliados. No funciona contra movimientos de estado."
		desc: "El usuario usa un tatami para escudarse de los movimientos enemigos. Protege también a los aliados. No funciona contra ataques de estado.",
		shortDesc: "El usuario usa un tatami para escudarse de los movimientos enemigos. Protege también a los aliados. No funciona contra ataques de estado.",

		start: "  ¡{POKEMON} va a usar un tatami para bloquear ataques!",
		block: "  ¡Escudo Tatami neutraliza {MOVE}!",
	},
	matchagotcha: {
		name: "Cañón Batidor",
		desc: "Rocía al objetivo con té y recupera la mitad de los PS del daño que produce. Puede quemar.",
		shortDesc: "Rocía al objetivo con té y recupera la mitad de los PS del daño que produce. Puede quemar.",
	},
	maxairstream: {
		name: "Maxiciclón",
		// Official flavor text: "Ataque de tipo Volador ejecutado por un Pokémon Dinamax. Aumenta la Velocidad de tu bando."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxdarkness: {
		name: "Maxisombra",
		// Official flavor text: "Ataque de tipo Siniestro ejecutado por un Pokémon Dinamax. Reduce la Defensa Especial del objetivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxflare: {
		name: "Maxignición",
		// Official flavor text: "Ataque de tipo Fuego ejecutado por un Pokémon Dinamax. Hace que se intensifique el efecto del sol durante cinco turnos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxflutterby: {
		name: "Maxinsecto",
		// Official flavor text: "Ataque de tipo Bicho ejecutado por un Pokémon Dinamax. Reduce el Ataque Especial del objetivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxgeyser: {
		name: "Maxichorro",
		// Official flavor text: "Ataque de tipo Agua ejecutado por un Pokémon Dinamax. Desata un aguacero que dura cinco turnos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxguard: {
		name: "Maxibarrera",
		// Official flavor text: "Frena todos los ataques, pero puede fallar si se usa repetidamente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡{POKEMON} se ha protegido!",
	},
	maxhailstorm: {
		name: "Maxihelada",
		// Official flavor text: "Ataque de tipo Hielo ejecutado por un Pokémon Dinamax. Crea una tormenta de granizo que dura cinco turnos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxknuckle: {
		name: "Maxipuño",
		// Official flavor text: "Ataque de tipo Lucha ejecutado por un Pokémon Dinamax. Aumenta el Ataque de tu bando."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxlightning: {
		name: "Maxitormenta",
		// Official flavor text: "Ataque de tipo Eléctrico ejecutado por un Pokémon Dinamax. Crea un campo eléctrico durante cinco turnos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxmindstorm: {
		name: "Maxionda",
		// Official flavor text: "Ataque de tipo Psíquico ejecutado por un Pokémon Dinamax. Crea un campo psíquico durante cinco turnos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxooze: {
		name: "Maxiácido",
		// Official flavor text: "Ataque de tipo Veneno ejecutado por un Pokémon Dinamax. Aumenta el Ataque Especial de tu bando."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxovergrowth: {
		name: "Maxiflora",
		// Official flavor text: "Ataque de tipo Planta ejecutado por un Pokémon Dinamax. Crea un campo de hierba durante cinco turnos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxphantasm: {
		name: "Maxiespectro",
		// Official flavor text: "Ataque de tipo Fantasma ejecutado por un Pokémon Dinamax. Reduce la Defensa de los rivales."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxquake: {
		name: "Maxitemblor",
		// Official flavor text: "Ataque de tipo Tierra ejecutado por un Pokémon Dinamax. Aumenta la Defensa Especial de tu bando."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxrockfall: {
		name: "Maxilito",
		// Official flavor text: "Ataque de tipo Roca ejecutado por un Pokémon Dinamax. Levanta una tormenta de arena que dura cinco turnos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxstarfall: {
		name: "Maxiestela",
		// Official flavor text: "Ataque de tipo Hada ejecutado por un Pokémon Dinamax. Crea un campo de niebla durante cinco turnos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxsteelspike: {
		name: "Maximetal",
		// Official flavor text: "Ataque de tipo Acero ejecutado por un Pokémon Dinamax. Aumenta la Defensa de tu bando."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxstrike: {
		name: "Maxiataque",
		// Official flavor text: "Ataque de tipo Normal ejecutado por un Pokémon Dinamax. Reduce la Velocidad del objetivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxwyrmwind: {
		name: "Maxidraco",
		// Official flavor text: "Ataque de tipo Dragón ejecutado por un Pokémon Dinamax. Reduce el Ataque del objetivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	meanlook: {
		name: "Mal de Ojo",
		// Official flavor text: "Mal de ojo que impide al objetivo huir del combate."
		desc: "Impide al objetivo huir de la batalla.",
		shortDesc: "Impide al objetivo huir de la batalla.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	meditate: {
		name: "Meditación",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario reposa y medita para potenciar el Ataque.",
		shortDesc: "El usuario reposa y medita para potenciar el Ataque.",
	},
	mefirst: {
		name: "Yo Primero",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.",
		shortDesc: "Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	megadrain: {
		name: "Megaagotar",
		// Official flavor text: "Un ataque que absorbe nutrientes. Quien lo usa recupera la mitad de los PS del daño que produce."
		desc: "Absorbe la mitad del daño producido.",
		shortDesc: "Absorbe la mitad del daño producido.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	megahorn: {
		name: "Megacuerno",
		shortDesc: "Violenta embestida con cuernos imponentes.",
	},
	megakick: {
		name: "Megapatada",
		shortDesc: "Patada de extrema fuerza.",
	},
	megapunch: {
		name: "Megapuño",
		shortDesc: "Un puñetazo de gran potencia.",
	},
	memento: {
		name: "Legado",
		// Official flavor text: "El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo."
		desc: "El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo.",
		shortDesc: "El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  ¡{POKEMON} ha recuperado PS gracias al Poder Z!",
	},
	menacingmoonrazemaelstrom: {
		name: "Deflagración Lunar",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	metalburst: {
		name: "Represión Metal",
		// Official flavor text: "Devuelve al rival el último ataque recibido, pero con mucha más fuerza."
		desc: "Devuelve al objetivo el último ataque recibido, pero con mucha más fuerza.",
		shortDesc: "Devuelve al objetivo el último ataque recibido, pero con mucha más fuerza.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	metalclaw: {
		name: "Garra Metal",
		// Official flavor text: "Ataque con garras de acero que puede aumentar el Ataque del usuario."
		desc: "Ataque con garras de acero que puede aumentar el Ataque del usuario.",
		shortDesc: "Ataque con garras de acero que puede aumentar el Ataque del usuario.",
	},
	metalsound: {
		name: "Eco Metálico",
		// Official flavor text: "Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo."
		desc: "Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.",
		shortDesc: "Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.",
	},
	meteorassault: {
		name: "Asalto Estelar",
		// Official flavor text: "El usuario agita violentamente su grueso puerro para atacar, pero el mareo que le provocan las sacudidas le impide moverse en el turno siguiente."
		desc: "El usuario arremete con su puerro. El usuario no se podrá mover en el siguiente turno.",
		shortDesc: "El usuario arremete con su puerro. El usuario no se podrá mover en el siguiente turno.",
	},
	meteorbeam: {
		name: "Rayo Meteórico",
		// Official flavor text: "El usuario dedica el primer turno a aumentar su Ataque Especial acumulando energía cósmica y lanza su ofensiva contra el objetivo en el segundo."
		desc: "1º turno: aumenta su At. Especial. 2º turno: lanza su ofensiva contra el objetivo.",
		shortDesc: "1º turno: aumenta su At. Especial. 2º turno: lanza su ofensiva contra el objetivo.",

		prepare: "¡{POKEMON} rebosa energía cósmica!",
	},
	meteormash: {
		name: "Puño Meteoro",
		// Official flavor text: "Puñetazo que impacta como un meteorito y puede subir el Ataque del agresor."
		desc: "Puñetazo que impacta como un meteorito y puede subir el Ataque del agresor.",
		shortDesc: "Puñetazo que impacta como un meteorito y puede subir el Ataque del agresor.",
	},
	metronome: {
		name: "Metrónomo",
		// Official flavor text: "Mueve un dedo y estimula su cerebro para usar al azar casi cualquier movimiento."
		desc: "El usuario mueve un dedo y estimula su cerebro para usar al azar casi cualquier movimiento.",
		shortDesc: "El usuario mueve un dedo y estimula su cerebro para usar al azar casi cualquier movimiento.",
		gen8bdsp: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7letsgo: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		move: "¡Metrónomo actúa como {MOVE}!",
	},
	mightycleave: {
		name: "Filo Potente",
		shortDesc: "Rebana al objetivo con la luz que ha acumulado en la testa. Golpea aunque el rival se proteja.",
	},
	milkdrink: {
		name: "Batido",
		// Official flavor text: "Restaura la mitad de los PS máximos del usuario."
		desc: "Restaura la mitad de sus PS máximos. Fuera de combate puede transferir sus PS a un aliado.",
		shortDesc: "Restaura la mitad de sus PS máximos. Fuera de combate puede transferir sus PS a un aliado.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mimic: {
		name: "Mimético",
		// Official flavor text: "Copia el último movimiento usado por el objetivo, y puede utilizarlo mientras esté en el combate."
		desc: "Copia el último movimiento usado por el objetivo. Solo lo podrá usar si no es cambiado.",
		shortDesc: "Copia el último movimiento usado por el objetivo. Solo lo podrá usar si no es cambiado.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha aprendido {MOVE}!",
	},
	mindblown: {
		name: "Cabeza Sorpresa",
		// Official flavor text: "El usuario hace explotar su cabeza para atacar a todos los Pokémon que se hallan a su alrededor, aunque también se hiere a sí mismo."
		desc: "Hace explotar su cabeza para atacar a todos a su alrededor, aunque también se hiere a sí mismo.",
		shortDesc: "Hace explotar su cabeza para atacar a todos a su alrededor, aunque también se hiere a sí mismo.",

		damage: null, // NEEDS TRANSLATION
	},
	mindreader: {
		name: "Telépata",
		// Official flavor text: "El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle."
		desc: "El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.",
		shortDesc: "El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "#lockon",
	},
	minimize: {
		name: "Reducción",
		// Official flavor text: "El usuario mengua para aumentar mucho la Evasión."
		desc: "El usuario mengua para aumentar mucho la Evasión.",
		shortDesc: "El usuario mengua para aumentar mucho la Evasión.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	miracleeye: {
		name: "Gran Ojo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Permite atacar con cualquier movimiento a objetivos de tipo Siniestro y golpear a Pokémon evasivos.",
		shortDesc: "Permite atacar con cualquier movimiento a objetivos de tipo Siniestro y golpear a Pokémon evasivos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "#foresight",
	},
	mirrorcoat: {
		name: "Manto Espejo",
		// Official flavor text: "Responde a un ataque especial ocasionando el doble del daño recibido."
		desc: "Responde a un ataque especial ocasionando el doble del daño recibido.",
		shortDesc: "Responde a un ataque especial ocasionando el doble del daño recibido.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mirrormove: {
		name: "Espejo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Contraataca con el mismo movimiento empleado por el objetivo.",
		shortDesc: "Contraataca con el mismo movimiento empleado por el objetivo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mirrorshot: {
		name: "Disparo Espejo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario libera un haz de energía desde su pulido cuerpo. Puede bajar la Precisión.",
		shortDesc: "El usuario libera un haz de energía desde su pulido cuerpo. Puede bajar la Precisión.",
	},
	mist: {
		name: "Neblina",
		// Official flavor text: "Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos."
		desc: "Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.",
		shortDesc: "Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  ¡{POKEMON} está cubierto por una NEBLINA!",
			block: "  {POKEMON} está protegido por la NEBLINA.",
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			start: "  ¡{POKEMON} está cubierto por una NEBLINA!",
			block: "  ¡Pero ha fallado!",
		},

		start: "  ¡Una neblina ha cubierto a {TEAM}!",
		end: "  Ha desaparecido el efecto de la neblina en {TEAM}.",
		block: "  ¡{POKEMON} está protegido por la neblina!",
	},
	mistball: {
		name: "Bola Neblina",
		// Official flavor text: "Banco de niebla que puede bajar el Ataque Especial del objetivo."
		desc: "Banco de niebla que puede bajar el Ataque Especial del objetivo.",
		shortDesc: "Banco de niebla que puede bajar el Ataque Especial del objetivo.",
	},
	mistyexplosion: {
		name: "Bruma Explosiva",
		// Official flavor text: "El usuario ataca a todos a su alrededor, pero se debilita de inmediato. La potencia del movimiento aumenta si el terreno está cubierto por un campo de niebla."
		desc: "Bruma misteriosa con prioridad alta en campo de niebla.",
		shortDesc: "Bruma misteriosa con prioridad alta en campo de niebla.",
	},
	mistyterrain: {
		name: "Campo de Niebla",
		// Official flavor text: "Durante cinco turnos, los Pokémon que están en el suelo no sufren problemas de estado y se reduce a la mitad el daño de los movimientos de tipo Dragón."
		desc: "Cubre de niebla el terreno cinco turnos. Los Pokémon en el suelo no reciben cambios de estado.",
		shortDesc: "Cubre de niebla el terreno cinco turnos. Los Pokémon en el suelo no reciben cambios de estado.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	moonblast: {
		name: "Fuerza Lunar",
		// Official flavor text: "Invoca el poder de la luna para atacar al objetivo. Puede disminuir el Ataque Especial del objetivo."
		desc: "Invoca el poder de la luna para atacar. Puede disminuir el Ataque Especial del objetivo.",
		shortDesc: "Invoca el poder de la luna para atacar. Puede disminuir el Ataque Especial del objetivo.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	moongeistbeam: {
		name: "Rayo Umbrío",
		// Official flavor text: "Ataca con un rayo misterioso que ignora la habilidad del objetivo."
		desc: "Ataca al objetivo con un rayo misterioso de energía lunar. Este movimiento ignora la habilidad del objetivo.",
		shortDesc: "Ataca al objetivo con un rayo misterioso de energía lunar. Este movimiento ignora la habilidad del objetivo.",
	},
	moonlight: {
		name: "Luz Lunar",
		// Official flavor text: "Restaura PS del usuario. La cantidad varía según el tiempo que haga."
		desc: "Restaura PS del usuario. La cantidad varía según el tiempo que haga.",
		shortDesc: "Restaura PS del usuario. La cantidad varía según el tiempo que haga.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	morningsun: {
		name: "Sol Matinal",
		// Official flavor text: "Restaura PS del usuario. La cantidad varía según el tiempo que haga."
		desc: "Restaura PS del usuario. La cantidad varía según el tiempo que haga.",
		shortDesc: "Restaura PS del usuario. La cantidad varía según el tiempo que haga.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mortalspin: {
		name: "Giro Mortífero",
		desc: "Ataque giratorio que envenena al objetivo y anula efectos como atadura, constricción y drenadoras.",
		shortDesc: "Ataque giratorio que envenena al objetivo y anula efectos como atadura, constricción y drenadoras.",
	},
	mountaingale: {
		name: "Viento Carámbano",
		desc: "Ataca con unos carámbanos grandes como icebergs que pueden amedrentar al objetivo.",
		shortDesc: "Ataca con unos carámbanos grandes como icebergs que pueden amedrentar al objetivo.",
	},
	mudbomb: {
		name: "Bomba Fango",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.",
		shortDesc: "Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.",
	},
	muddywater: {
		name: "Agua Lodosa",
		// Official flavor text: "Ataque con agua lodosa que puede bajar la Precisión del equipo rival."
		desc: "Ataque con agua lodosa que puede bajar la Precisión.",
		shortDesc: "Ataque con agua lodosa que puede bajar la Precisión.",
	},
	mudshot: {
		name: "Disparo Lodo",
		// Official flavor text: "El usuario lanza lodo al objetivo y reduce su Velocidad."
		desc: "El usuario lanza lodo al objetivo y reduce su Velocidad.",
		shortDesc: "El usuario lanza lodo al objetivo y reduce su Velocidad.",
	},
	mudslap: {
		name: "Bofetón Lodo",
		// Official flavor text: "Echa lodo en la cara para bajar la Precisión."
		desc: "Echa lodo en la cara para bajar la Precisión.",
		shortDesc: "Echa lodo en la cara para bajar la Precisión.",
	},
	mudsport: {
		name: "Chapoteo Lodo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Se cubre de lodo y debilita los movimientos de tipo Eléctrico mientras está en combate.",
		shortDesc: "Se cubre de lodo y debilita los movimientos de tipo Eléctrico mientras está en combate.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	multiattack: {
		name: "Multiataque",
		// Official flavor text: "El Pokémon se rodea de una potente energía con la que golpea al rival. El tipo del movimiento depende del disco que lleva el usuario."
		desc: "Se rodea de una potente energía con la que golpea al rival. El tipo depende del disco que lleva.",
		shortDesc: "Se rodea de una potente energía con la que golpea al rival. El tipo depende del disco que lleva.",
	},
	mysticalfire: {
		name: "Llama Embrujada",
		// Official flavor text: "El usuario lanza por la boca una singular llama a gran temperatura con la que ataca a su oponente y baja su Ataque Especial."
		desc: "Lanza una llama a gran temperatura a su rival, la cual le baja el Ataque Especial.",
		shortDesc: "Lanza una llama a gran temperatura a su rival, la cual le baja el Ataque Especial.",
	},
	mysticalpower: {
		name: "Poder Místico",
		desc: "Ataca desatando un misterioso poder, que también aumenta su Ataque Especial.",
		shortDesc: "Ataca desatando un misterioso poder, que también aumenta su Ataque Especial.",
	},
	nastyplot: {
		name: "Maquinación",
		// Official flavor text: "Estimula su cerebro pensando en cosas malas. Aumenta mucho el Ataque Especial."
		desc: "Estimula su cerebro pensando en cosas malas. Aumenta considerablemente el Ataque Especial.",
		shortDesc: "Estimula su cerebro pensando en cosas malas. Aumenta considerablemente el Ataque Especial.",
	},
	naturalgift: {
		name: "Don Natural",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "La baya que lleva presta su fuerza para atacar. El tipo de ataque y su fuerza dependen de la baya.",
		shortDesc: "La baya que lleva presta su fuerza para atacar. El tipo de ataque y su fuerza dependen de la baya.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	naturepower: {
		name: "Adaptación",
		// Official flavor text: "Usa el poder de la naturaleza para atacar. Su efecto varía según el entorno de combate."
		desc: "Usa el poder de la naturaleza. Su efecto varía según el entorno de combate.",
		shortDesc: "Usa el poder de la naturaleza. Su efecto varía según el entorno de combate.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		move: "¡Adaptación actúa como {MOVE}!",
	},
	naturesmadness: {
		name: "Furia Natural",
		// Official flavor text: "Golpea al objetivo con la furia de la naturaleza y reduce sus PS a la mitad."
		desc: "Golpea al objetivo con la furia de la naturaleza y reduce sus PS a la mitad.",
		shortDesc: "Golpea al objetivo con la furia de la naturaleza y reduce sus PS a la mitad.",
	},
	needlearm: {
		name: "Brazo Pincho",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Pega con brazos de pinchos y puede amedrentar al objetivo.",
		shortDesc: "Pega con brazos de pinchos y puede amedrentar al objetivo.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	neverendingnightmare: {
		name: "Presa Espectral",
		shortDesc: null, // NEEDS TRANSLATION
	},
	nightdaze: {
		name: "Pulso Noche",
		// Official flavor text: "Ataca al objetivo con una onda siniestra. Puede bajar su Precisión."
		desc: "Ataca al objetivo con una onda siniestra. Puede bajar su Precisión.",
		shortDesc: "Ataca al objetivo con una onda siniestra. Puede bajar su Precisión.",
	},
	nightmare: {
		name: "Pesadilla",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El objetivo dormido sufre una pesadilla que le hace perder PS en cada turno.",
		shortDesc: "El objetivo dormido sufre una pesadilla que le hace perder PS en cada turno.",

		start: "  ¡{POKEMON} se ha sumido en una pesadilla!",
		damage: "  ¡{POKEMON} está inmerso en una pesadilla!",
	},
	nightshade: {
		name: "Tinieblas",
		// Official flavor text: "Produce un espejismo ante el objetivo, que pierde tantos PS como nivel tenga el usuario."
		desc: "Produce un espejismo ante el objetivo, que pierde tantos PS como nivel tenga el agresor.",
		shortDesc: "Produce un espejismo ante el objetivo, que pierde tantos PS como nivel tenga el agresor.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	nightslash: {
		name: "Tajo Umbrío",
		// Official flavor text: "Ataca al objetivo a la primera oportunidad. Suele ser crítico."
		desc: "Ataca al objetivo a la primera oportunidad. Suele ser crítico.",
		shortDesc: "Ataca al objetivo a la primera oportunidad. Suele ser crítico.",
	},
	nobleroar: {
		name: "Rugido de Guerra",
		// Official flavor text: "Intimida a su oponente con un rugido de guerra, lo que hace que disminuyan tanto su Ataque como su Ataque Especial."
		desc: "Intimida a su oponente con un rugido de guerra, bajando su Ataque y su Ataque Especial.",
		shortDesc: "Intimida a su oponente con un rugido de guerra, bajando su Ataque y su Ataque Especial.",
	},
	noretreat: {
		name: "Bastión Final",
		// Official flavor text: "El usuario aumenta todas sus características, pero ya no puede huir ni ser cambiado por otro."
		desc: "El usuario aumenta todas sus características, pero no puede huir ni ser cambiado por otro.",
		shortDesc: "El usuario aumenta todas sus características, pero no puede huir ni ser cambiado por otro.",

		start: "  ¡{POKEMON} ya no puede ser cambiado por otro porque ha usado Bastión Final!",
	},
	noxioustorque: {
		name: "Ponzochoque",
		desc: "Puede envenenar al objetivo.",
		shortDesc: "Puede envenenar al objetivo.",
	},
	nuzzle: {
		name: "Moflete Estático",
		// Official flavor text: "Quien lo usa frota sus mofletes cargados de electricidad contra el objetivo y consigue paralizarlo."
		desc: "Frota sus mofletes cargados de electricidad contra el Pokémon objetivo y consigue paralizarlo.",
		shortDesc: "Frota sus mofletes cargados de electricidad contra el Pokémon objetivo y consigue paralizarlo.",
	},
	oblivionwing: {
		name: "Ala Mortífera",
		// Official flavor text: "El usuario absorbe energía del objetivo y aumenta sus PS en una cantidad igual o superior a la mitad del daño infligido."
		desc: "Absorbe energía del Pokémon objetivo y recupera más de la mitad del daño inflingido.",
		shortDesc: "Absorbe energía del Pokémon objetivo y recupera más de la mitad del daño inflingido.",
	},
	obstruct: {
		name: "Obstrucción",
		// Official flavor text: "Frena todos los ataques, pero puede fallar si se usa repetidamente. Reduce mucho la Defensa de quien ejecute un movimiento de contacto contra el usuario."
		desc: "Frena cualquier ataque y baja mucho la defensa si recibe un golpe de contacto. Si se usa mucho falla.",
		shortDesc: "Frena cualquier ataque y baja mucho la defensa si recibe un golpe de contacto. Si se usa mucho falla.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	oceanicoperetta: {
		name: "Sinfonía de la Diva Marina",
		shortDesc: null, // NEEDS TRANSLATION
	},
	octazooka: {
		name: "Pulpocañón",
		// Official flavor text: "Dispara tinta a la cara. Puede bajar la Precisión."
		desc: "Dispara tinta a la cara. Puede bajar la Precisión.",
		shortDesc: "Dispara tinta a la cara. Puede bajar la Precisión.",
	},
	octolock: {
		name: "Octopresa",
		// Official flavor text: "Retiene al objetivo para impedir su huida, a la vez que reduce su Defensa y Defensa Especial cada turno."
		desc: "Retiene al objetivo para impedir su huida, a la vez que reduce su Defensa y Defensa Especial cada turno.",
		shortDesc: "Retiene al objetivo para impedir su huida, a la vez que reduce su Defensa y Defensa Especial cada turno.",

		start: "  ¡Octopresa impide que {POKEMON} huya o sea cambiado por otro!",
	},
	odorsleuth: {
		name: "Rastreo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.",
		shortDesc: "Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	ominouswind: {
		name: "Viento Aciago",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Produce un viento horripilante. Puede subir de golpe todas las características del usuario.",
		shortDesc: "Produce un viento horripilante. Puede subir de golpe todas las características del usuario.",
	},
	orderup: {
		name: "Oído Cocina",
		desc: "Si lleva un Tatsugiri en la boca, aumenta una de sus características en función de su forma.",
		shortDesc: "Si lleva un Tatsugiri en la boca, aumenta una de sus características en función de su forma.",
	},
	originpulse: {
		name: "Pulso Primigenio",
		// Official flavor text: "Ataca al objetivo con una infinidad de rayos de luz azulada."
		desc: "Ataca al objetivo con una infinidad de rayos de luz azulada.",
		shortDesc: "Ataca al objetivo con una infinidad de rayos de luz azulada.",
	},
	outrage: {
		name: "Enfado",
		// Official flavor text: "Ataca de dos a tres turnos y acaba confundiendo al agresor."
		desc: "Ataca de dos a tres turnos y acaba confundiendo al agresor.",
		shortDesc: "Ataca de dos a tres turnos y acaba confundiendo al agresor.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	overdrive: {
		name: "Amplificador",
		// Official flavor text: "El usuario rasguea la guitarra o el bajo para generar enormes vibraciones de intensa reverberación con las que ataca al objetivo."
		desc: "El usuario rasguea su cuerpo para generar enormes vibraciones con las que ataca al objetivo.",
		shortDesc: "El usuario rasguea su cuerpo para generar enormes vibraciones con las que ataca al objetivo.",
	},
	overheat: {
		name: "Sofoco",
		// Official flavor text: "Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa."
		desc: "Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa.",
		shortDesc: "Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa.",
	},
	painsplit: {
		name: "Divide Dolor",
		// Official flavor text: "Suma los PS del usuario a los del objetivo y los reparte a partes iguales."
		desc: "Suma los PS del usuario a los del objetivo y los reparte a partes iguales.",
		shortDesc: "Suma los PS del usuario a los del objetivo y los reparte a partes iguales.",

		activate: "  ¡Los combatientes comparten sus PS!",
	},
	paleowave: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	paraboliccharge: {
		name: "Carga Parábola",
		// Official flavor text: "Inflige daño a todos los Pokémon a su alrededor. El usuario absorbe la mitad del daño producido para restaurar sus propios PS."
		desc: "Inflige daño a los Pokémon a su alrededor, absorbiendo la mitad del daño producido.",
		shortDesc: "Inflige daño a los Pokémon a su alrededor, absorbiendo la mitad del daño producido.",
	},
	partingshot: {
		name: "Última Palabra",
		// Official flavor text: "El usuario se cambia por otro Pokémon de su equipo, pero antes amedrenta a su oponente y hace que disminuyan su Ataque y Ataque Especial."
		desc: "Baja el Ataque y el Ataque Especial del rival y se cambia por otro Pokémon de su equipo.",
		shortDesc: "Baja el Ataque y el Ataque Especial del rival y se cambia por otro Pokémon de su equipo.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "#memento",
		switchOut: "#uturn",
	},
	payback: {
		name: "Vendetta",
		// Official flavor text: "El usuario contraataca con el doble de fuerza si el objetivo usa un movimiento antes."
		desc: "El usuario contraataca con el doble de fuerza si el objetivo usa un movimiento antes.",
		shortDesc: "El usuario contraataca con el doble de fuerza si el objetivo usa un movimiento antes.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	payday: {
		name: "Día de Pago",
		// Official flavor text: "Arroja monedas al objetivo y las recupera al final del combate."
		desc: "Arroja monedas al objetivo. Las recupera al final del combate.",
		shortDesc: "Arroja monedas al objetivo. Las recupera al final del combate.",

		activate: "  ¡Hay monedas por todas partes!",
	},
	peck: {
		name: "Picotazo",
		shortDesc: "Ensarta al objetivo con un cuerno o pico punzante.",
	},
	perishsong: {
		name: "Canto Mortal",
		// Official flavor text: "Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose."
		desc: "Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.",
		shortDesc: "Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.",

		start: "  ¡Los Pokémon que han oído Canto Mortal se debilitarán dentro de tres turnos!",
		activate: "  ¡La cuenta atrás de Canto Mortal de {POKEMON} ha bajado a {NUMBER}!",
	},
	petalblizzard: {
		name: "Tormenta Floral",
		// Official flavor text: "El usuario desata un intenso vendaval de pétalos que daña a los Pokémon a su alrededor."
		desc: "El usuario desata un intenso vendaval de pétalos que daña a los Pokémon a su alrededor.",
		shortDesc: "El usuario desata un intenso vendaval de pétalos que daña a los Pokémon a su alrededor.",
	},
	petaldance: {
		name: "Danza Pétalo",
		// Official flavor text: "Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante."
		desc: "Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.",
		shortDesc: "Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	phantomforce: {
		name: "Golpe Fantasma",
		// Official flavor text: "El usuario desaparece en el primer turno y ataca a su objetivo en el segundo. Permite acertar aunque el objetivo esté protegiéndose."
		desc: "Desaparece en el primer turno y ataca en el segundo. Acierta aunque el objetivo se proteja.",
		shortDesc: "Desaparece en el primer turno y ataca en el segundo. Acierta aunque el objetivo se proteja.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "#shadowforce",
		activate: "#shadowforce",
	},
	photongeyser: {
		name: "Géiser Fotónico",
		// Official flavor text: "El usuario ataca con una gran columna de luz. Compara sus valores de Ataque y Ataque Especial para infligir daño con el más alto de los dos."
		desc: "Compara sus valores de Ataque y Ataque Especial para infligir daño con el más alto de los dos.",
		shortDesc: "Compara sus valores de Ataque y Ataque Especial para infligir daño con el más alto de los dos.",
	},
	pikapapow: {
		name: "Pikatormenta",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Cuanto mayor sea la amistad con el Entrenador, más poderoso será este ataque. No falla.",
		shortDesc: "Cuanto mayor sea la amistad con el Entrenador, más poderoso será este ataque. No falla.",
	},
	pinmissile: {
		name: "Pin Misil",
		// Official flavor text: "Lanza finas púas que hieren de dos a cinco veces."
		desc: "Lanza finas púas que hieren de dos a cinco veces.",
		shortDesc: "Lanza finas púas que hieren de dos a cinco veces.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	plasmafists: {
		name: "Puños Plasma",
		// Official flavor text: "El usuario ataca con puños cargados de electricidad. Convierte los movimientos de tipo Normal en movimientos de tipo Eléctrico."
		desc: "Ataca con los puños. Convierte los movimientos de tipo Normal en tipo Eléctrico.",
		shortDesc: "Ataca con los puños. Convierte los movimientos de tipo Normal en tipo Eléctrico.",
	},
	playnice: {
		name: "Camaradería",
		// Official flavor text: "Se hace amigo de su oponente y consigue que a este se le quiten las ganas de combatir. Además, reduce su Ataque."
		desc: "Se hace amigo de su oponente y consigue que no quiera combatir. Además, reduce su Ataque.",
		shortDesc: "Se hace amigo de su oponente y consigue que no quiera combatir. Además, reduce su Ataque.",
	},
	playrough: {
		name: "Carantoña",
		// Official flavor text: "El Pokémon que lo usa le hace cucamonas al objetivo y lo ataca. Puede disminuir el Ataque del objetivo."
		desc: "Hace cucamonas al objetivo y lo ataca. Puede disminuir el Ataque del objetivo.",
		shortDesc: "Hace cucamonas al objetivo y lo ataca. Puede disminuir el Ataque del objetivo.",
	},
	pluck: {
		name: "Picoteo",
		// Official flavor text: "Picotea al objetivo. Si este sostiene una baya, la picotea también y obtiene sus efectos."
		desc: "Picotea al objetivo. Si este sostiene una Baya, la picotea también y obtiene sus efectos.",
		shortDesc: "Picotea al objetivo. Si este sostiene una Baya, la picotea también y obtiene sus efectos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "#bugbite",
	},
	poisonfang: {
		name: "Colmillo Veneno",
		// Official flavor text: "Colmillos tóxicos que pueden envenenar gravemente al objetivo."
		desc: "Colmillos tóxicos que pueden envenenar gravemente al objetivo.",
		shortDesc: "Colmillos tóxicos que pueden envenenar gravemente al objetivo.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisongas: {
		name: "Gas Venenoso",
		// Official flavor text: "Lanza una nube de gas tóxico al objetivo. Produce envenenamiento."
		desc: "Lanza una nube de gas tóxico al objetivo. Produce envenenamiento.",
		shortDesc: "Lanza una nube de gas tóxico al objetivo. Produce envenenamiento.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonjab: {
		name: "Puya Nociva",
		// Official flavor text: "Pincha al objetivo con un tentáculo o brazo envenenado. Puede llegar a envenenar al objetivo."
		desc: "Pincha al rival con un tentáculo o brazo envenenado. Puede llegar a envenenar al rival.",
		shortDesc: "Pincha al rival con un tentáculo o brazo envenenado. Puede llegar a envenenar al rival.",
	},
	poisonpowder: {
		name: "Polvo Veneno",
		// Official flavor text: "Polvo tóxico que envenena al objetivo."
		desc: "Polvo tóxico que envenena al objetivo.",
		shortDesc: "Polvo tóxico que envenena al objetivo.",
	},
	poisonsting: {
		name: "Picotazo Veneno",
		// Official flavor text: "Lanza un aguijón tóxico que puede envenenar al objetivo."
		desc: "Lanza un aguijón tóxico que puede envenenar al objetivo.",
		shortDesc: "Lanza un aguijón tóxico que puede envenenar al objetivo.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisontail: {
		name: "Cola Veneno",
		// Official flavor text: "Puede envenenar y dar un golpe crítico."
		desc: "Ataque con la cola que puede envenenar y dar un golpe crítico.",
		shortDesc: "Ataque con la cola que puede envenenar y dar un golpe crítico.",
	},
	polarflare: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pollenpuff: {
		name: "Bola de Polen",
		// Official flavor text: "Ataca al oponente con una bola explosiva. Si esta alcanza a un aliado, le hará recuperar PS."
		desc: "Ataca al oponente con una bola explosiva. Si esta alcanza a un aliado, le hará recuperar PS.",
		shortDesc: "Ataca al oponente con una bola explosiva. Si esta alcanza a un aliado, le hará recuperar PS.",
	},
	poltergeist: {
		name: "Poltergeist",
		shortDesc: "El usuario ataca utilizando el objeto que lleva el rival. Si no tiene, falla.",

		activate: "  ¡{POKEMON} es atacado por {ITEM:definite:classified}!",
	},
	populationbomb: {
		name: "Proliferación",
		desc: "Ejecuta un ataque conjunto que golpea al objetivo de una a diez veces seguidas.",
		shortDesc: "Ejecuta un ataque conjunto que golpea al objetivo de una a diez veces seguidas.",
	},
	pounce: {
		name: "Brinco",
		desc: "Ataca abalanzándose sobre el objetivo y le reduce la Velocidad.",
		shortDesc: "Ataca abalanzándose sobre el objetivo y le reduce la Velocidad.",
	},
	pound: {
		name: "Destructor",
		shortDesc: "Golpea con las patas o la cola.",
	},
	powder: {
		name: "Polvo Explosivo",
		// Official flavor text: "Esparce un polvo sobre el objetivo. Si este usa un movimiento de tipo Fuego en el mismo turno, el polvo explota y le inflige daño."
		desc: "Si el objetivo usa un movimiento de tipo Fuego en ese turno, el polvo explota y le inflige daño.",
		shortDesc: "Si el objetivo usa un movimiento de tipo Fuego en ese turno, el polvo explota y le inflige daño.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} está cubierto de polvo!",
		activate: "  ¡El polvo ha reaccionado con el movimiento {MOVE} y ha explotado!",
	},
	powdersnow: {
		name: "Nieve Polvo",
		// Official flavor text: "Lanza nieve que puede llegar a congelar."
		desc: "Lanza nieve que puede llegar a congelar.",
		shortDesc: "Lanza nieve que puede llegar a congelar.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	powergem: {
		name: "Joya de Luz",
		shortDesc: "Ataca con un rayo de luz que centellea como si lo formaran miles de joyas.",
	},
	powersplit: {
		name: "Isofuerza",
		// Official flavor text: "El usuario emplea sus poderes para hacer la media de su Ataque y Ataque Especial con los de su objetivo y compartirlos."
		desc: "Hace la media de su Ataque y Ataque Especial con los de su objetivo y los comparte.",
		shortDesc: "Hace la media de su Ataque y Ataque Especial con los de su objetivo y los comparte.",

		activate: "  ¡{POKEMON} suma su capacidad ofensiva a la del objetivo y la reparte equitativamente!",
	},
	powerswap: {
		name: "Cambiafuerza",
		// Official flavor text: "El usuario emplea su poder mental para intercambiar los cambios en el Ataque y Ataque Especial con el objetivo."
		desc: "Intercambia los cambios en Ataque y At. Especial con el objetivo.",
		shortDesc: "Intercambia los cambios en Ataque y At. Especial con el objetivo.",
	},
	powershift: {
		name: "Cambiapoder",
		desc: "Intercambia su Ataque por su Defensa.",
		shortDesc: "Intercambia su Ataque por su Defensa.",

		start: "  ¡{POKEMON} ha intercambiado los valores de su ofensiva y su defensiva!",
		end: "#.start",
	},
	powertrick: {
		name: "Truco Fuerza",
		// Official flavor text: "Usa sus poderes mentales para intercambiar sus características de Ataque y Defensa."
		desc: "Usa sus poderes mentales para intercambiar su característica de Ataque por Defensa.",
		shortDesc: "Usa sus poderes mentales para intercambiar su característica de Ataque por Defensa.",

		start: "  ¡{POKEMON} ha intercambiado el valor de su Ataque por el de su Defensa!",
		end: "#.start",
	},
	powertrip: {
		name: "Chulería",
		// Official flavor text: "Ataca al oponente presumiendo de su fuerza. Cuanto más hayan subido las características del usuario, mayor será el daño."
		desc: "Cuanto más hayan subido las características del usuario, mayor será el daño.",
		shortDesc: "Cuanto más hayan subido las características del usuario, mayor será el daño.",
	},
	poweruppunch: {
		name: "Puño Incremento",
		// Official flavor text: "Cada vez que golpea a un oponente se endurecen sus puños. Si acierta al objetivo, el Ataque del usuario aumenta."
		desc: "Cada vez que golpea se endurecen sus puños. Si acierta, el Ataque del usuario aumenta.",
		shortDesc: "Cada vez que golpea se endurecen sus puños. Si acierta, el Ataque del usuario aumenta.",
	},
	powerwhip: {
		name: "Latigazo",
		shortDesc: "El usuario agita violentamente sus lianas o tentáculos para golpear al objetivo.",
	},
	precipiceblades: {
		name: "Filo del Abismo",
		// Official flavor text: "Hace que el poder latente de la tierra se manifieste en forma de hojas afiladas y ataca al objetivo con ellas."
		desc: "Manifiesta el poder latente de la tierra en forma de hojas afiladas y ataca al objetivo.",
		shortDesc: "Manifiesta el poder latente de la tierra en forma de hojas afiladas y ataca al objetivo.",
	},
	present: {
		name: "Presente",
		// Official flavor text: "Quien lo usa ataca al objetivo dándole un regalo con una bomba trampa. Sin embargo, a veces restaura sus PS."
		desc: "Regalo con bomba trampa. A veces restaura los PS.",
		shortDesc: "Regalo con bomba trampa. A veces restaura los PS.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	prismaticlaser: {
		name: "Láser Prisma",
		// Official flavor text: "El usuario utiliza un prisma para emitir un rayo de gran potencia, pero no puede moverse en el turno siguiente."
		desc: "El usuario utiliza un prisma para emitir un rayo de gran potencia, pero no puede moverse en el turno siguiente.",
		shortDesc: "El usuario utiliza un prisma para emitir un rayo de gran potencia, pero no puede moverse en el turno siguiente.",
	},
	protect: {
		name: "Protección",
		// Official flavor text: "Frena todos los ataques, pero puede fallar si se usa repetidamente."
		desc: "Frena los ataques, pero puede fallar si se usa repetidamente.",
		shortDesc: "Frena los ataques, pero puede fallar si se usa repetidamente.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} se está protegiendo!",
		block: "  ¡{POKEMON} se ha protegido!",
	},
	psybeam: {
		name: "Psicorrayo",
		// Official flavor text: "Extraño rayo que puede causar confusión."
		desc: "Extraño rayo que puede causar confusión.",
		shortDesc: "Extraño rayo que puede causar confusión.",
	},
	psyblade: {
		name: "Psicohojas",
		desc: "El usuario desgarra al objetivo con una espada etérea cuyo poder aumenta en el terreno eléctrico.",
		shortDesc: "El usuario desgarra al objetivo con una espada etérea cuyo poder aumenta en el terreno eléctrico.",
	},
	psychic: {
		name: "Psíquico",
		// Official flavor text: "Fuerte ataque telequinético que puede bajar la Defensa Especial del objetivo."
		desc: "Fuerte ataque telequinético que puede bajar la Defensa Especial del objetivo.",
		shortDesc: "Fuerte ataque telequinético que puede bajar la Defensa Especial del objetivo.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	psychicfangs: {
		name: "Psicocolmillo",
		// Official flavor text: "Ataca a sus rivales con poderes psíquicos que además destruyen barreras como Pantalla de Luz y Reflejo."
		desc: "Ataca con poderes psíquicos que además destruyen barreras como pantalla de luz y reflejo.",
		shortDesc: "Ataca con poderes psíquicos que además destruyen barreras como pantalla de luz y reflejo.",
	},
	psychicnoise: {
		name: "Psicorruido",
		desc: "Onda que impide al objetivo recuperar PS durante 2 turnos con movimientos, habilidades y objetos.",
		shortDesc: "Onda que impide al objetivo recuperar PS durante 2 turnos con movimientos, habilidades y objetos.",
	},
	psychicterrain: {
		name: "Campo Psíquico",
		// Official flavor text: "Durante cinco turnos, se potencian los movimientos de tipo Psíquico y los Pokémon que están en el suelo quedan protegidos contra movimientos con prioridad."
		desc: "Durante cinco turnos se potencian los movimientos Psíquico y los de prioridad fallan.",
		shortDesc: "Durante cinco turnos se potencian los movimientos Psíquico y los de prioridad fallan.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	psychoboost: {
		name: "Psicoataque",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa.",
		shortDesc: "Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa.",
	},
	psychocut: {
		name: "Psicocorte",
		// Official flavor text: "Ataca al objetivo con cuchillas formadas por energía psíquica. Suele ser crítico."
		desc: "Ataca al objetivo con cuchillas formadas por energía psíquica. Suele ser crítico.",
		shortDesc: "Ataca al objetivo con cuchillas formadas por energía psíquica. Suele ser crítico.",
	},
	psychoshift: {
		name: "Psicocambio",
		// Official flavor text: "Usa su poder mental para transferir al objetivo sus problemas de estado."
		desc: "Usa su poder mental para transferir al objetivo sus problemas de estado.",
		shortDesc: "Usa su poder mental para transferir al objetivo sus problemas de estado.",
	},
	psychup: {
		name: "Autosugestión",
		// Official flavor text: "Quien lo usa se sume en un trance y copia cualquier cambio que haya en las características de su objetivo."
		desc: "Se hipnotiza y copia cualquier cambio que haya en las características de su objetivo.",
		shortDesc: "Se hipnotiza y copia cualquier cambio que haya en las características de su objetivo.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	psyshieldbash: {
		name: "Asalto Barrera",
		desc: "El usuario ataca envuelto en una energía psíquica que además aumenta su Defensa.",
		shortDesc: "El usuario ataca envuelto en una energía psíquica que además aumenta su Defensa.",
	},
	psyshock: {
		name: "Psicocarga",
		// Official flavor text: "Crea una onda psíquica que causa daño físico al objetivo."
		desc: "Crea una onda psíquica que golpea al objetivo y provoca un gran daño físico.",
		shortDesc: "Crea una onda psíquica que golpea al objetivo y provoca un gran daño físico.",
	},
	psystrike: {
		name: "Onda Mental",
		// Official flavor text: "Crea una onda psíquica que causa daño físico al objetivo."
		desc: "Crea una onda psíquica que golpea al objetivo provocándole un daño físico.",
		shortDesc: "Crea una onda psíquica que golpea al objetivo provocándole un daño físico.",
	},
	psywave: {
		name: "Psicoonda",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataque con una onda de energía de intensidad variable.",
		shortDesc: "Ataque con una onda de energía de intensidad variable.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	pulverizingpancake: {
		name: "Arrojo Intempestivo",
		shortDesc: null, // NEEDS TRANSLATION
	},
	punishment: {
		name: "Castigo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "La fuerza del ataque aumenta cuanto más se ha fortalecido el rival con cambios de características.",
		shortDesc: "La fuerza del ataque aumenta cuanto más se ha fortalecido el rival con cambios de características.",
	},
	purify: {
		name: "Purificación",
		// Official flavor text: "Cura los problemas de estado del Pokémon rival y a cambio recupera PS propios."
		desc: "Cura los problemas de estado del Pokémon rival y a cambio recupera PS propios.",
		shortDesc: "Cura los problemas de estado del Pokémon rival y a cambio recupera PS propios.",
	},
	pursuit: {
		name: "Persecución",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Hace el doble de daño al objetivo que pide el relevo.",
		shortDesc: "Hace el doble de daño al objetivo que pide el relevo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: null, // NEEDS TRANSLATION
	},
	pyroball: {
		name: "Balón Ígneo",
		// Official flavor text: "El usuario prende una pequeña piedra para crear una bola de fuego con la que ataca al rival. Puede causar quemaduras."
		desc: "Prende una pequeña piedra para crear una bola de fuego con la que ataca. Puede causar quemaduras.",
		shortDesc: "Prende una pequeña piedra para crear una bola de fuego con la que ataca. Puede causar quemaduras.",
	},
	quash: {
		name: "Último Lugar",
		// Official flavor text: "Consigue que el objetivo sea el último en moverse."
		desc: "El usuario intimida a su objetivo logrando que su movimiento sea el último del turno.",
		shortDesc: "El usuario intimida a su objetivo logrando que su movimiento sea el último del turno.",

		activate: "  ¡{TARGET} ha retrasado su turno!",
	},
	quickattack: {
		name: "Ataque Rápido",
		// Official flavor text: "Ataca al objetivo a gran velocidad. Este movimiento tiene prioridad alta."
		desc: "Ataque rápido que permite golpear en primer lugar.",
		shortDesc: "Ataque rápido que permite golpear en primer lugar.",
	},
	quickguard: {
		name: "Anticipo",
		// Official flavor text: "Se protege a sí mismo y a sus aliados de movimientos con prioridad."
		desc: "Protege a el equipo de ataques con prioridad. Puede fallar si se utiliza repetidamente.",
		shortDesc: "Protege a el equipo de ataques con prioridad. Puede fallar si se utiliza repetidamente.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{TEAM} está protegido por Anticipo!",
		block: "  ¡{POKEMON} está protegido por Anticipo!",
	},
	quiverdance: {
		name: "Danza Aleteo",
		// Official flavor text: "Danza mística que sube el Ataque Especial, la Defensa Especial y la Velocidad."
		desc: "Danza mística que sube el Ataque Especial, la Defensa Especial y la Velocidad.",
		shortDesc: "Danza mística que sube el Ataque Especial, la Defensa Especial y la Velocidad.",
	},
	rage: {
		name: "Furia",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Al usarse, aumenta el Ataque del usuario cada vez que es golpeado.",
		shortDesc: "Al usarse, aumenta el Ataque del usuario cada vez que es golpeado.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ragefist: {
		name: "Puño Furia",
		desc: "Convierte su rabia en energía. Cuantos más golpes haya recibido mayor será la potencia.",
		shortDesc: "Convierte su rabia en energía. Cuantos más golpes haya recibido mayor será la potencia.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	ragepowder: {
		name: "Polvo Ira",
		// Official flavor text: "Usa un polvo que irrita y centra en el usuario la atención y los ataques de los rivales."
		desc: "Usa un polvo que irrita y centra en el usuario la atención y los ataques de los rivales.",
		shortDesc: "Usa un polvo que irrita y centra en el usuario la atención y los ataques de los rivales.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "#followme",
		startFromZEffect: "#followme",
	},
	ragingbull: {
		name: "Furia Taurina",
		desc: "Este movimiento cambia de tipo en función de la forma del usuario. Destruye barreras.",
		shortDesc: "Este movimiento cambia de tipo en función de la forma del usuario. Destruye barreras.",

		activate: null, // NEEDS TRANSLATION
	},
	ragingfury: {
		name: "Erupción de Ira",
		desc: "Ataca con unas violentas llamas de dos a tres turnos seguidos y después se queda confuso.",
		shortDesc: "Ataca con unas violentas llamas de dos a tres turnos seguidos y después se queda confuso.",
	},
	raindance: {
		name: "Danza Lluvia",
		// Official flavor text: "Genera una fuerte lluvia que refuerza los movimientos de tipo Agua durante cinco turnos y debilita los de tipo Fuego."
		desc: "Genera una fuerte lluvia que refuerza los movimientos de tipo Agua durante cinco turnos.",
		shortDesc: "Genera una fuerte lluvia que refuerza los movimientos de tipo Agua durante cinco turnos.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rapidspin: {
		name: "Giro Rápido",
		// Official flavor text: "Ataque giratorio que puede eliminar movimientos como Atadura, Constricción y Drenadoras. También aumenta la Velocidad del usuario."
		desc: "Ataque giratorio que sube la Velocidad y elimina movimientos como atadura, drenadoras o púas.",
		shortDesc: "Ataque giratorio que sube la Velocidad y elimina movimientos como atadura, drenadoras o púas.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	razorleaf: {
		name: "Hoja Afilada",
		// Official flavor text: "Corta con hojas afiladas. Un ataque que suele ser crítico."
		desc: "Corta con hojas afiladas. Suele ser crítico.",
		shortDesc: "Corta con hojas afiladas. Suele ser crítico.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	razorshell: {
		name: "Concha Filo",
		// Official flavor text: "Una afilada vieira ataca al objetivo. También puede hacer disminuir su Defensa."
		desc: "Una afilada vieira ataca al objetivo. También puede hacer disminuir su Defensa.",
		shortDesc: "Una afilada vieira ataca al objetivo. También puede hacer disminuir su Defensa.",
	},
	razorwind: {
		name: "Viento Cortante",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataca con viento cortante. Suele ser crítico.",
		shortDesc: "Ataca con viento cortante. Suele ser crítico.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "  ¡{POKEMON} se prepara para lanzar una borrasca!",
	},
	recover: {
		name: "Recuperación",
		// Official flavor text: "Restaura hasta la mitad de los PS máximos."
		desc: "Restaura hasta la mitad de los PS máximos.",
		shortDesc: "Restaura hasta la mitad de los PS máximos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	recycle: {
		name: "Reciclaje",
		// Official flavor text: "Recicla y así recupera un objeto equipado de un solo uso que ya haya sido empleado durante el combate."
		desc: "Recicla y así recupera el objeto equipado de un solo uso que ya ha sido empleado en el combate.",
		shortDesc: "Recicla y así recupera el objeto equipado de un solo uso que ya ha sido empleado en el combate.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		addItem: "  ¡{POKEMON} ha reciclado {ITEM}!",
	},
	reflect: {
		name: "Reflejo",
		// Official flavor text: "Pared de luz que reduce durante cinco turnos el daño producido por los ataques físicos."
		desc: "Pared de luz que reduce durante cinco turnos el daño producido por los ataques físicos.",
		shortDesc: "Pared de luz que reduce durante cinco turnos el daño producido por los ataques físicos.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  ¡{POKEMON} ganó blindaje!",
		},

		start: "  ¡Reflejo ha aumentado la resistencia de {TEAM} ante los ataques físicos!",
		end: "  El efecto de Reflejo en {TEAM} se ha disipado.",
	},
	reflecttype: {
		name: "Clonatipo",
		// Official flavor text: "Cambia el tipo del Pokémon al mismo tipo que el del objetivo."
		desc: "Cambia el tipo del Pokémon al mismo tipo que el del objetivo.",
		shortDesc: "Cambia el tipo del Pokémon al mismo tipo que el del objetivo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		typeChange: "  ¡{POKEMON} ahora es del mismo tipo que {SOURCE}!",
	},
	refresh: {
		name: "Alivio",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Descansa para curar parálisis, envenenamiento o quemaduras.",
		shortDesc: "Descansa para curar parálisis, envenenamiento o quemaduras.",
	},
	relicsong: {
		name: "Canto Arcaico",
		// Official flavor text: "Ataca conmoviendo a los rivales de alrededor con un antiguo canto. Puede dormirlos."
		desc: "Ataca conmoviendo a los rivales de alrededor con un antiguo canto. Puede dormirlos.",
		shortDesc: "Ataca conmoviendo a los rivales de alrededor con un antiguo canto. Puede dormirlos.",
	},
	rest: {
		name: "Descanso",
		// Official flavor text: "Restaura todos los PS y cura todos los problemas de estado del usuario, que se duerme los dos turnos siguientes."
		desc: "Restaura los PS y cura los problemas de estado del usuario. Duerme los dos próximos turnos.",
		shortDesc: "Restaura los PS y cura los problemas de estado del usuario. Duerme los dos próximos turnos.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	retaliate: {
		name: "Represalia",
		// Official flavor text: "Venga a los amigos caídos. Si en el turno anterior han derrotado a alguno, la potencia del ataque aumentará."
		desc: "Si en el turno anterior han derrotado a un compañero, la potencia del ataque aumentará.",
		shortDesc: "Si en el turno anterior han derrotado a un compañero, la potencia del ataque aumentará.",
	},
	return: {
		name: "Retribución",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Cuanto mayor sea la amistad con el Entrenador, más poderoso será este ataque.",
		shortDesc: "Cuanto mayor sea la amistad con el Entrenador, más poderoso será este ataque.",
	},
	revelationdance: {
		name: "Danza Despertar",
		// Official flavor text: "Ataque que consiste en un baile muy enérgico. El tipo de este ataque se corresponde con el del Pokémon que lo ejecuta."
		desc: "Baile enérgico cuyo tipo será el primero del Pokémon que lo ejecuta. Si lo pierde, usará el segundo.",
		shortDesc: "Baile enérgico cuyo tipo será el primero del Pokémon que lo ejecuta. Si lo pierde, usará el segundo.",
	},
	revenge: {
		name: "Desquite",
		// Official flavor text: "Ataque que produce el doble de daño si el usuario resulta herido en el mismo turno."
		desc: "Ataque que produce el doble de daño si el usuario es herido en el mismo turno.",
		shortDesc: "Ataque que produce el doble de daño si el usuario es herido en el mismo turno.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	reversal: {
		name: "Inversión",
		// Official flavor text: "Ataque desesperado que causa más daño cuantos menos PS tenga el usuario."
		desc: "Ataque desesperado que causa más daño cuantos menos PS tenga el usuario.",
		shortDesc: "Ataque desesperado que causa más daño cuantos menos PS tenga el usuario.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	revivalblessing: {
		name: "Plegaria Vital",
		desc: "Oración que revive a un Pokémon del equipo que se haya debilitado y restaura la mitad de sus PS.",
		shortDesc: "Oración que revive a un Pokémon del equipo que se haya debilitado y restaura la mitad de sus PS.",

		heal: "  ¡{POKEMON} se ha repuesto y está listo para combatir!",
	},
	risingvoltage: {
		name: "Alto Voltaje",
		// Official flavor text: "Ataca con una descarga eléctrica que surge del terreno de combate. La potencia del movimiento se duplica si el rival se ve afectado por un campo eléctrico."
		desc: "La potencia del movimiento se duplica si el rival se ve afectado por un campo eléctrico.",
		shortDesc: "La potencia del movimiento se duplica si el rival se ve afectado por un campo eléctrico.",
	},
	roar: {
		name: "Rugido",
		// Official flavor text: "Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate."
		desc: "Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.",
		shortDesc: "Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	roaroftime: {
		name: "Distorsión",
		// Official flavor text: "Ataca al objetivo usando tal energía que el tiempo se distorsiona. El usuario descansa el siguiente turno."
		desc: "Ataca usando tal energía que el tiempo se distorsiona. El usuario descansa el siguiente turno.",
		shortDesc: "Ataca usando tal energía que el tiempo se distorsiona. El usuario descansa el siguiente turno.",
	},
	rockblast: {
		name: "Pedrada",
		// Official flavor text: "Lanza pedruscos al objetivo de dos a cinco veces consecutivas."
		desc: "Lanza pedruscos al objetivo de dos a cinco veces consecutivas.",
		shortDesc: "Lanza pedruscos al objetivo de dos a cinco veces consecutivas.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rockclimb: {
		name: "Treparrocas",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataca con una gran embestida. Puede confundir al objetivo.",
		shortDesc: "Ataca con una gran embestida. Puede confundir al objetivo.",
	},
	rockpolish: {
		name: "Pulimento",
		// Official flavor text: "Reduce la resistencia puliendo su cuerpo. Aumenta mucho la Velocidad."
		desc: "Reduce la resistencia puliendo su cuerpo. Aumenta la Velocidad considerablemente.",
		shortDesc: "Reduce la resistencia puliendo su cuerpo. Aumenta la Velocidad considerablemente.",
	},
	rockslide: {
		name: "Avalancha",
		// Official flavor text: "Lanza grandes pedruscos. Puede amedrentar al objetivo."
		desc: "Lanza grandes pedruscos. Puede amedrentar al objetivo.",
		shortDesc: "Lanza grandes pedruscos. Puede amedrentar al objetivo.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	rocksmash: {
		name: "Golpe Roca",
		// Official flavor text: "Ataque con los puños. Puede bajar la Defensa del objetivo."
		desc: "Ataca con puñetazos que pueden romper rocas. Puede bajar la Defensa del objetivo.",
		shortDesc: "Ataca con puñetazos que pueden romper rocas. Puede bajar la Defensa del objetivo.",
	},
	rockthrow: {
		name: "Lanzarrocas",
		shortDesc: "Tira una pequeña roca al objetivo.",
	},
	rocktomb: {
		name: "Tumba Rocas",
		// Official flavor text: "Tira rocas que detienen al objetivo y bajan su Velocidad."
		desc: "Tira rocas que detienen al objetivo y bajan su Velocidad.",
		shortDesc: "Tira rocas que detienen al objetivo y bajan su Velocidad.",
	},
	rockwrecker: {
		name: "Romperrocas",
		// Official flavor text: "Lanza una piedra enorme contra el objetivo, pero tiene que descansar el siguiente turno."
		desc: "Lanza una piedra enorme contra el objetivo, pero tiene que descansar el siguiente turno.",
		shortDesc: "Lanza una piedra enorme contra el objetivo, pero tiene que descansar el siguiente turno.",
	},
	roleplay: {
		name: "Imitación",
		// Official flavor text: "Imita al objetivo por completo y copia su habilidad."
		desc: "Imita al objetivo por completo y copia su habilidad.",
		shortDesc: "Imita al objetivo por completo y copia su habilidad.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  ¡{POKEMON} ha copiado la habilidad {ABILITY} de {SOURCE}!",
	},
	rollingkick: {
		name: "Patada Giro",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Una patada rápida y circular. También puede amedrentar al objetivo.",
		shortDesc: "Una patada rápida y circular. También puede amedrentar al objetivo.",
	},
	rollout: {
		name: "Rodar",
		// Official flavor text: "El atacante rueda contra el objetivo durante cinco turnos, cada vez con mayor fuerza."
		desc: "Consiste en enrollarse y girar como una rueda por el campo de batalla.",
		shortDesc: "Consiste en enrollarse y girar como una rueda por el campo de batalla.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	roost: {
		name: "Respiro",
		// Official flavor text: "Aterriza sobre la superficie para descansar. Recupera hasta la mitad del total de sus PS."
		desc: "Aterriza sobre la superficie para descansar. Recupera hasta la mitad del total de sus PS.",
		shortDesc: "Aterriza sobre la superficie para descansar. Recupera hasta la mitad del total de sus PS.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: null, // NEEDS TRANSLATION
	},
	rototiller: {
		name: "Fertilizante",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Labra la tierra y consigue que aumente el Ataque y el Ataque Especial de los Pokémon Planta.",
		shortDesc: "Labra la tierra y consigue que aumente el Ataque y el Ataque Especial de los Pokémon Planta.",
	},
	round: {
		name: "Canon",
		// Official flavor text: "Un canto que ataca al objetivo. Cuantos más Pokémon lo usan, más aumenta de potencia."
		desc: "Un canto que ataca al objetivo. Cuantos más Pokémon lo usan, más aumenta de potencia.",
		shortDesc: "Un canto que ataca al objetivo. Cuantos más Pokémon lo usan, más aumenta de potencia.",
	},
	ruination: {
		name: "Calamidad",
		desc: "Provoca una catástrofe devastadora que reduce a la mitad los PS del objetivo.",
		shortDesc: "Provoca una catástrofe devastadora que reduce a la mitad los PS del objetivo.",
	},
	sacredfire: {
		name: "Fuego Sagrado",
		// Official flavor text: "Fuego místico de gran intensidad que puede causar quemaduras."
		desc: "Fuego místico de gran intensidad que puede causar quemaduras.",
		shortDesc: "Fuego místico de gran intensidad que puede causar quemaduras.",
	},
	sacredsword: {
		name: "Espada Santa",
		// Official flavor text: "El usuario ataca con una espada, ignorando cualquier cambio en las características del objetivo."
		desc: "El usuario ataca con una espada, ignorando cualquier cambio en las características del objetivo.",
		shortDesc: "El usuario ataca con una espada, ignorando cualquier cambio en las características del objetivo.",
	},
	safeguard: {
		name: "Velo Sagrado",
		// Official flavor text: "Un escudo que protege de problemas de estado, como el sueño o la parálisis, durante cinco turnos."
		desc: "Crea un campo protector que evita problemas de estado durante cinco turnos.",
		shortDesc: "Crea un campo protector que evita problemas de estado durante cinco turnos.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{TEAM:capitalize} se ha protegido con Velo Sagrado!",
		end: "  El efecto de Velo Sagrado en {TEAM} se ha disipado.",
		block: "  ¡{POKEMON} está protegido por Velo Sagrado!",
	},
	saltcure: {
		name: "Salazón",
		desc: "El objetivo pierde PS cada turno. Afecta especialmente a Pokémon de tipo Acero y tipo Agua.",
		shortDesc: "El objetivo pierde PS cada turno. Afecta especialmente a Pokémon de tipo Acero y tipo Agua.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},

		start: "  ¡{POKEMON} está en salazón!",
		damage: "  ¡Salazón ha herido a {POKEMON}!",
	},
	sandattack: {
		name: "Ataque Arena",
		// Official flavor text: "Arroja arena a la cara y baja la Precisión."
		desc: "Arroja arena a la cara y baja la Precisión.",
		shortDesc: "Arroja arena a la cara y baja la Precisión.",
	},
	sandsearstorm: {
		name: "Simún de Arena",
		desc: "Ataca envolviéndo al objetivo en unas arenas tórridas que pueden causar quemaduras.",
		shortDesc: "Ataca envolviéndo al objetivo en unas arenas tórridas que pueden causar quemaduras.",
	},
	sandstorm: {
		name: "Tormenta de Arena",
		// Official flavor text: "Tormenta de arena que dura cinco turnos y hiere a todos, excepto a los de tipo Roca, Tierra y Acero, y aumenta la Defensa Especial de los de tipo Roca."
		desc: "Tormenta de arena que dura cinco turnos y hiere a s, excepto a los de tipo Roca, Tierra y Acero.",
		shortDesc: "Tormenta de arena que dura cinco turnos y hiere a s, excepto a los de tipo Roca, Tierra y Acero.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sandtomb: {
		name: "Bucle Arena",
		// Official flavor text: "Enreda al objetivo en un remolino de arena de cuatro a cinco turnos."
		desc: "Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.",
		shortDesc: "Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡Bucle Arena ha atrapado a {POKEMON}!",
	},
	sappyseed: {
		name: "Leafitobombas",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario esparce semillas para atacar al objetivo y coloca Drenadoras.",
		shortDesc: "El usuario esparce semillas para atacar al objetivo y coloca Drenadoras.",
	},
	savagespinout: {
		name: "Guadaña Sedosa",
		shortDesc: null, // NEEDS TRANSLATION
	},
	scald: {
		name: "Escaldar",
		// Official flavor text: "Ataca arrojando agua hirviendo al objetivo. Puede causar quemaduras."
		desc: "Ataca arrojando agua hirviendo al objetivo. Puede causar quemaduras.",
		shortDesc: "Ataca arrojando agua hirviendo al objetivo. Puede causar quemaduras.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	scaleshot: {
		name: "Ráfaga Escamas",
		// Official flavor text: "Lanza escamas al objetivo de dos a cinco veces seguidas. Aumenta la Velocidad del usuario, pero reduce su Defensa."
		desc: "Lanza escamas de dos a cinco veces. Sube la Velocidad del usuario pero reduce su Defensa.",
		shortDesc: "Lanza escamas de dos a cinco veces. Sube la Velocidad del usuario pero reduce su Defensa.",
	},
	scaryface: {
		name: "Cara Susto",
		// Official flavor text: "Asusta al objetivo para reducir mucho su Velocidad."
		desc: "Asusta al objetivo para reducir mucho su Velocidad.",
		shortDesc: "Asusta al objetivo para reducir mucho su Velocidad.",
	},
	scorchingsands: {
		name: "Arenas Ardientes",
		// Official flavor text: "Ataca al objetivo arrojándole arena a temperaturas muy elevadas. Puede causar quemaduras."
		desc: "Ataca al objetivo arrojándole arena a temperaturas muy elevadas. Puede causar quemaduras.",
		shortDesc: "Ataca al objetivo arrojándole arena a temperaturas muy elevadas. Puede causar quemaduras.",
	},
	scratch: {
		name: "Arañazo",
		shortDesc: "Araña con afiladas garras.",
	},
	screech: {
		name: "Chirrido",
		// Official flavor text: "Alarido agudo que reduce mucho la Defensa del objetivo."
		desc: "Alarido agudo que reduce mucho la Defensa del objetivo.",
		shortDesc: "Alarido agudo que reduce mucho la Defensa del objetivo.",
	},
	searingshot: {
		name: "Bomba Ígnea",
		// Official flavor text: "Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar."
		desc: "Un infierno de llamas daña a los Pokémon de alrededor en combate. Puede quemar.",
		shortDesc: "Un infierno de llamas daña a los Pokémon de alrededor en combate. Puede quemar.",
	},
	searingsunrazesmash: {
		name: "Embestida Solar",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	secretpower: {
		name: "Daño Secreto",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataque con poder secreto cuyos efectos secundarios varían según el entorno de combate.",
		shortDesc: "Ataque con poder secreto cuyos efectos secundarios varían según el entorno de combate.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	secretsword: {
		name: "Sable Místico",
		// Official flavor text: "Ensarta al objetivo con un largo cuerno dotado de un poder místico que provoca daño físico."
		desc: "Ensarta al objetivo con un sable, hiriéndolo con su místico poder.",
		shortDesc: "Ensarta al objetivo con un sable, hiriéndolo con su místico poder.",
	},
	seedbomb: {
		name: "Bomba Germen",
		shortDesc: "Lanza al objetivo una descarga de semillas explosivas desde arriba.",
	},
	seedflare: {
		name: "Fulgor Semilla",
		// Official flavor text: "Una onda de choque se libera del cuerpo. Puede bajar mucho la Defensa Especial del objetivo."
		desc: "Una onda de choque se libera del cuerpo. Puede bajar la Defensa Especial del objetivo.",
		shortDesc: "Una onda de choque se libera del cuerpo. Puede bajar la Defensa Especial del objetivo.",
	},
	seismictoss: {
		name: "Sísmico",
		// Official flavor text: "Aprovecha la gravedad para derribar al objetivo. Le resta tantos PS como nivel tenga el usuario."
		desc: "La gravedad derriba al objetivo. Se restarán tantos PS como nivel tenga el agresor.",
		shortDesc: "La gravedad derriba al objetivo. Se restarán tantos PS como nivel tenga el agresor.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	selfdestruct: {
		name: "Autodestrucción",
		// Official flavor text: "El atacante explota y hiere a todos a su alrededor. El usuario se debilita de inmediato."
		desc: "El atacante explota y hiere a todos a su alrededor. El usuario se debilita de inmediato.",
		shortDesc: "El atacante explota y hiere a todos a su alrededor. El usuario se debilita de inmediato.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shadowball: {
		name: "Bola Sombra",
		// Official flavor text: "Lanza una bola oscura que puede bajar la Defensa Especial del objetivo."
		desc: "Lanza una bola oscura que puede bajar la Defensa Especial del objetivo.",
		shortDesc: "Lanza una bola oscura que puede bajar la Defensa Especial del objetivo.",
	},
	shadowbone: {
		name: "Hueso Sombrío",
		// Official flavor text: "Ataca al oponente golpeándole con un hueso poseído por un espíritu. Puede reducir la Defensa del objetivo."
		desc: "Golpea al oponente con un hueso poseído por un espíritu. Puede reducir su Defensa.",
		shortDesc: "Golpea al oponente con un hueso poseído por un espíritu. Puede reducir su Defensa.",
	},
	shadowclaw: {
		name: "Garra Umbría",
		// Official flavor text: "Ataca con una garra afilada hecha de sombras. Suele ser crítico."
		desc: "Ataca con una garra afilada hecha de sombras. Suele ser crítico.",
		shortDesc: "Ataca con una garra afilada hecha de sombras. Suele ser crítico.",
	},
	shadowforce: {
		name: "Golpe Umbrío",
		// Official flavor text: "En el primer turno, desaparece. En el segundo, golpea al objetivo aunque se esté protegiendo."
		desc: "En el primer turno, desaparece. En el segundo, golpea al objetivo aunque se esté protegiendo.",
		shortDesc: "En el primer turno, desaparece. En el segundo, golpea al objetivo aunque se esté protegiendo.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡Se ha atravesado la protección de {TARGET}!",
		prepare: "¡{POKEMON} desaparece en un abrir y cerrar de ojos!",
	},
	shadowpunch: {
		name: "Puño Sombra",
		shortDesc: "Puñetazo ineludible procedente de las sombras.",
	},
	shadowsneak: {
		name: "Sombra Vil",
		// Official flavor text: "Extiende su sombra y ataca al objetivo por la espalda. Este movimiento tiene prioridad alta."
		desc: "Extiende su sombra y ataca al objetivo por la espalda. Este movimiento siempre va primero.",
		shortDesc: "Extiende su sombra y ataca al objetivo por la espalda. Este movimiento siempre va primero.",
	},
	shadowstrike: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sharpen: {
		name: "Afilar",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El perfil del usuario se hace más afilado y su Ataque mejora.",
		shortDesc: "El perfil del usuario se hace más afilado y su Ataque mejora.",
	},
	shatteredpsyche: {
		name: "Disruptor Psíquico",
		shortDesc: null, // NEEDS TRANSLATION
	},
	shedtail: {
		name: "Autotomía",
		desc: "El usuario se cambia por otro Pokémon del equipo dejando un sustituto a cambio de sus PS.",
		shortDesc: "El usuario se cambia por otro Pokémon del equipo dejando un sustituto a cambio de sus PS.",

		start: "  ¡{POKEMON} se desprende de un segmento de su cuerpo y lo usa como señuelo!",
		alreadyStarted: "#substitute",
		fail: "#substitute",
	},
	sheercold: {
		name: "Frío Polar",
		// Official flavor text: "Debilita al objetivo de un solo golpe. Si lo usa un Pokémon que no sea de tipo Hielo, es difícil que acierte."
		desc: "Ataque de frío polar que debilita al objetivo si le alcanza.",
		shortDesc: "Ataque de frío polar que debilita al objetivo si le alcanza.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	shellsidearm: {
		name: "Moluscañón",
		// Official flavor text: "El usuario lanza un ataque físico o especial en función de cuál inflija más daño. Puede envenenar al objetivo."
		desc: "Lanza un ataque físico o especial en función de cuál inflija más daño. Puede envenenar.",
		shortDesc: "Lanza un ataque físico o especial en función de cuál inflija más daño. Puede envenenar.",
	},
	shellsmash: {
		name: "Rompecoraza",
		// Official flavor text: "El usuario rompe su coraza y baja su Defensa y Defensa Especial, pero aumenta mucho su Ataque, Ataque Especial y Velocidad."
		desc: "Rompe su coraza y baja su Defensa y Def. Esp., pero aumenta mucho su Ataque, At. Esp. y Velocidad.",
		shortDesc: "Rompe su coraza y baja su Defensa y Def. Esp., pero aumenta mucho su Ataque, At. Esp. y Velocidad.",
	},
	shelltrap: {
		name: "Coraza Trampa",
		// Official flavor text: "El caparazón del Pokémon se convierte en una trampa. Si le alcanza un ataque físico, la trampa estalla y los oponentes sufren daño."
		desc: "Si le alcanza un ataque físico, la trampa del caparazón estalla y el atacante sufre daño.",
		shortDesc: "Si le alcanza un ataque físico, la trampa del caparazón estalla y el atacante sufre daño.",

		start: "  ¡{POKEMON} ha activado la Coraza Trampa!",
		prepare: "  ¡{POKEMON} ha activado la Coraza Trampa!",
		cant: "¡La Coraza Trampa de {POKEMON} no ha estallado!",
	},
	shelter: {
		name: "Retracción",
		desc: "La piel del usuario se vuelve dura como un escudo de acero, lo que aumenta mucho su Defensa.",
		shortDesc: "La piel del usuario se vuelve dura como un escudo de acero, lo que aumenta mucho su Defensa.",
	},
	shiftgear: {
		name: "Cambio de Marcha",
		// Official flavor text: "Al hacer girar los engranajes, el usuario mejora su Ataque y aumenta mucho su Velocidad."
		desc: "Al hacer girar los engranajes, el usuario mejora su Ataque y aumenta su Velocidad espectacularmente.",
		shortDesc: "Al hacer girar los engranajes, el usuario mejora su Ataque y aumenta su Velocidad espectacularmente.",
	},
	shockwave: {
		name: "Onda Voltio",
		shortDesc: "Ataque eléctrico muy rápido e ineludible.",
	},
	shoreup: {
		name: "Recogearena",
		// Official flavor text: "Restaura la mitad de los PS máximos del usuario. Durante las tormentas de arena, restaura aún más PS."
		desc: "Restaura la mitad de los PS máximos del usuario. Si hay tormentas de arena restaura más PS.",
		shortDesc: "Restaura la mitad de los PS máximos del usuario. Si hay tormentas de arena restaura más PS.",
	},
	signalbeam: {
		name: "Rayo Señal",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataca con un rayo de luz siniestro. Puede confundir al objetivo.",
		shortDesc: "Ataca con un rayo de luz siniestro. Puede confundir al objetivo.",
	},
	silktrap: {
		name: "Telatrampa",
		desc: "Trampa sedosa que protege al usuario. Baja la Velocidad de quien lo toca.",
		shortDesc: "Trampa sedosa que protege al usuario. Baja la Velocidad de quien lo toca.",
	},
	silverwind: {
		name: "Viento Plata",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.",
		shortDesc: "Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.",
	},
	simplebeam: {
		name: "Onda Simple",
		// Official flavor text: "Lanza una onda psíquica que hace que la habilidad del objetivo pase a ser Simple."
		desc: "Envía una imagen desconcertante al oponente. Cambia la habilidad del oponente a Simple.",
		shortDesc: "Envía una imagen desconcertante al oponente. Cambia la habilidad del oponente a Simple.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sing: {
		name: "Canto",
		shortDesc: "Cancioncilla que hace dormir profundamente al objetivo.",
	},
	sinisterarrowraid: {
		name: "Aluvión de Flechas Sombrías",
		shortDesc: null, // NEEDS TRANSLATION
	},
	sizzlyslide: {
		name: "Flarembestida",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario se cubre de fuego y carga contra el objetivo, siempre provoca quemadura.",
		shortDesc: "El usuario se cubre de fuego y carga contra el objetivo, siempre provoca quemadura.",
	},
	sketch: {
		name: "Esquema",
		// Official flavor text: "Aprende de forma permanente el último movimiento utilizado por el objetivo. Es de un solo uso."
		desc: "Aprende de forma permanente el último movimiento del objetivo. Es de un solo uso.",
		shortDesc: "Aprende de forma permanente el último movimiento del objetivo. Es de un solo uso.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha usado Esquema para copiar {MOVE}!",
	},
	skillswap: {
		name: "Intercambio",
		// Official flavor text: "Usa el poder psíquico para intercambiar habilidades con el objetivo."
		desc: "Usa el poder psíquico para intercambiar habilidades con el objetivo.",
		shortDesc: "Usa el poder psíquico para intercambiar habilidades con el objetivo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha intercambiado su habilidad con la del otro Pokémon!",
	},
	skittersmack: {
		name: "Golpe Rastrero",
		// Official flavor text: "Ataca al objetivo por la espalda de forma subrepticia y además reduce su Ataque Especial."
		desc: "Ataca al objetivo por la espalda de forma subrepticia y además reduce su Ataque Especial.",
		shortDesc: "Ataca al objetivo por la espalda de forma subrepticia y además reduce su Ataque Especial.",
	},
	skullbash: {
		name: "Cabezazo",
		// Official flavor text: "El usuario se prepara y sube su Defensa en el primer turno y en el segundo arremete con un cabezazo."
		desc: "Primer turno: se prepara y sube la Defensa. Segundo turno: da el cabezazo.",
		shortDesc: "Primer turno: se prepara y sube la Defensa. Segundo turno: da el cabezazo.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "¡{POKEMON} ha agachado la cabeza!",
	},
	skyattack: {
		name: "Ataque Aéreo",
		// Official flavor text: "Ataca durante dos turnos y suele asestar un golpe crítico. También puede amedrentar al objetivo."
		desc: "Ataque en dos turnos que suele ser crítico. Puede amedrentar al objetivo.",
		shortDesc: "Ataque en dos turnos que suele ser crítico. Puede amedrentar al objetivo.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "¡Un intenso halo rodea a {POKEMON}!",
	},
	skydrop: {
		name: "Caída Libre",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "1º turno: lanza al objetivo al aire. 2º: lo hace caer. En el aire no lo deja moverse.",
		shortDesc: "1º turno: lanza al objetivo al aire. 2º: lo hace caer. En el aire no lo deja moverse.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "¡{POKEMON} se ha llevado a {TARGET} por los aires!",
		end: "  ¡{POKEMON} se ha liberado de Caída Libre!",
		failSelect: "¡{POKEMON} está bajo los efectos de Caída Libre! No puede actuar libremente.",
		failTooHeavy: "  ¡{POKEMON} pesa demasiado, así que no puede ser levantado por los aires!",
	},
	skyuppercut: {
		name: "Gancho Alto",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Gancho ascendente de gran ímpetu.",
		shortDesc: "Gancho ascendente de gran ímpetu.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	slackoff: {
		name: "Relajo",
		// Official flavor text: "El usuario se relaja y restaura la mitad de sus PS máximos."
		desc: "El usuario se relaja y restaura la mitad de sus PS máximos.",
		shortDesc: "El usuario se relaja y restaura la mitad de sus PS máximos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	slam: {
		name: "Atizar",
		shortDesc: "Golpea con las extremidades.",
	},
	slash: {
		name: "Cuchillada",
		// Official flavor text: "Ataca con cuchillas o con pinzas. Suele asestar un golpe crítico."
		desc: "Ataca con cuchillas o con pinzas. Suele ser un golpe crítico.",
		shortDesc: "Ataca con cuchillas o con pinzas. Suele ser un golpe crítico.",
	},
	sleeppowder: {
		name: "Somnífero",
		shortDesc: "Esparce polvo que duerme al objetivo.",
	},
	sleeptalk: {
		name: "Sonámbulo",
		// Official flavor text: "Mientras duerme, usa uno de sus movimientos elegido al azar."
		desc: "Mientras duerme, usa uno de sus movimientos elegido al azar.",
		shortDesc: "Mientras duerme, usa uno de sus movimientos elegido al azar.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sludge: {
		name: "Residuos",
		// Official flavor text: "Arroja residuos al objetivo. Puede llegar a envenenar."
		desc: "Arroja residuos al objetivo. Puede llegar a envenenar.",
		shortDesc: "Arroja residuos al objetivo. Puede llegar a envenenar.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sludgebomb: {
		name: "Bomba Lodo",
		// Official flavor text: "Arroja residuos al objetivo. Puede llegar a envenenar."
		desc: "Arroja residuos al objetivo. Puede llegar a envenenar.",
		shortDesc: "Arroja residuos al objetivo. Puede llegar a envenenar.",
	},
	sludgewave: {
		name: "Onda Tóxica",
		// Official flavor text: "Una onda tóxica que daña a los Pokémon de alrededor. Puede envenenar."
		desc: "Una onda tóxica que daña a los Pokémon de alrededor. Puede envenenar.",
		shortDesc: "Una onda tóxica que daña a los Pokémon de alrededor. Puede envenenar.",
	},
	smackdown: {
		name: "Antiaéreo",
		// Official flavor text: "Ataca lanzando una piedra o un proyectil. Si el objetivo está en el aire, lo estrella contra el suelo."
		desc: "Ataca lanzando una piedra o un proyectil. Estrella contra el suelo al objetivo si vuela.",
		shortDesc: "Ataca lanzando una piedra o un proyectil. Estrella contra el suelo al objetivo si vuela.",

		start: "  ¡{POKEMON} ha sido derribado y ha caído al suelo!",
	},
	smartstrike: {
		name: "Cuerno Certero",
		shortDesc: "Ensarta al adversario con su afilada cornamenta. Este movimiento acierta siempre.",
	},
	smellingsalts: {
		name: "Estímulo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Hace el doble de daño a objetivos paralizados, pero también cura la parálisis.",
		shortDesc: "Hace el doble de daño a objetivos paralizados, pero también cura la parálisis.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	smog: {
		name: "Polución",
		// Official flavor text: "Lanza un ataque con gases tóxicos que pueden llegar a envenenar."
		desc: "El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.",
		shortDesc: "El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.",
	},
	smokescreen: {
		name: "Pantalla de Humo",
		// Official flavor text: "Baja la Precisión del objetivo con una nube de humo o tinta."
		desc: "Baja la Precisión del objetivo con una nube de humo o tinta.",
		shortDesc: "Baja la Precisión del objetivo con una nube de humo o tinta.",
	},
	snaptrap: {
		name: "Cepo",
		// Official flavor text: "Cepo que atrapa al objetivo durante cuatro o cinco turnos y le causa daño mientras se encuentra preso."
		desc: "El usuario ensarta al objetivo en un cepo de cuatro a cinco turnos.",
		shortDesc: "El usuario ensarta al objetivo en un cepo de cuatro a cinco turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha quedado atrapado en un cepo!",
	},
	snarl: {
		name: "Alarido",
		// Official flavor text: "Chillido desagradable que baja el Ataque Especial del rival."
		desc: "Ataca lanzando un chillido insoportable que baja el Ataque Especial de los objetivos.",
		shortDesc: "Ataca lanzando un chillido insoportable que baja el Ataque Especial de los objetivos.",
	},
	snatch: {
		name: "Robo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Roba el efecto de movimientos de curación o de cambio de características de un combatiente.",
		shortDesc: "Roba el efecto de movimientos de curación o de cambio de características de un combatiente.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} está esperando a que se use algún movimiento!",
		activate: "  ¡{POKEMON} le ha robado el movimiento a {TARGET}!",
	},
	snipeshot: {
		name: "Disparo Certero",
		// Official flavor text: "Permite atacar al objetivo seleccionado ignorando las habilidades o movimientos que permiten a un rival centrar la atención sobre sí."
		desc: "Atacar al objetivo ignorando habilidades o movimientos que redirigen ataques.",
		shortDesc: "Atacar al objetivo ignorando habilidades o movimientos que redirigen ataques.",
	},
	snore: {
		name: "Ronquido",
		// Official flavor text: "Fuerte ronquido que solo puede usarse dormido. Puede amedrentar al objetivo."
		desc: "Fuerte ronquido que debe usarse dormido. Puede amedrentar al objetivo.",
		shortDesc: "Fuerte ronquido que debe usarse dormido. Puede amedrentar al objetivo.",
	},
	snowscape: {
		name: "Paisaje Nevado",
		desc: "Invoca una nevada durante 5 turnos que aumenta la Defensa de los Pokémon de tipo Hielo.",
		shortDesc: "Invoca una nevada durante 5 turnos que aumenta la Defensa de los Pokémon de tipo Hielo.",
	},
	soak: {
		name: "Empapar",
		// Official flavor text: "Potente lluvia que transforma al objetivo en un Pokémon de tipo Agua."
		desc: "Potente lluvia que transforma al objetivo en un Pokémon de tipo Agua.",
		shortDesc: "Potente lluvia que transforma al objetivo en un Pokémon de tipo Agua.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	softboiled: {
		name: "Ovocuración",
		// Official flavor text: "Restaura la mitad de los PS máximos del usuario."
		desc: "Restaura la mitad de los PS máximos del usuario. Fuera de combate transfiere PS a un aliado.",
		shortDesc: "Restaura la mitad de los PS máximos del usuario. Fuera de combate transfiere PS a un aliado.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	solarbeam: {
		name: "Rayo Solar",
		// Official flavor text: "El usuario absorbe luz en el primer turno y en el segundo lanza un potente rayo de energía."
		desc: "Primer turno: absorbe luz. Segundo turno: ataca.",
		shortDesc: "Primer turno: absorbe luz. Segundo turno: ataca.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "  ¡{POKEMON} ha absorbido la luz solar!",
	},
	solarblade: {
		name: "Cuchilla Solar",
		// Official flavor text: "El usuario dedica un turno a absorber energía lumínica y concentrarla en forma de cuchilla con la que ataca al rival en el siguiente turno."
		desc: "Dedica un turno a concentrar energía en forma de cuchilla con la que ataca en el segundo turno.",
		shortDesc: "Dedica un turno a concentrar energía en forma de cuchilla con la que ataca en el segundo turno.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "#solarbeam",
	},
	sonicboom: {
		name: "Bomba Sónica",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Lanza ondas de choque que restan 20 PS al objetivo.",
		shortDesc: "Lanza ondas de choque que restan 20 PS al objetivo.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	soulstealing7starstrike: {
		name: "Constelación Robaalmas",
		shortDesc: null, // NEEDS TRANSLATION
	},
	spacialrend: {
		name: "Corte Vacío",
		// Official flavor text: "Desgarra al objetivo y el espacio a su alrededor. Suele ser crítico."
		desc: "Desgarra al objetivo y el espacio a su alrededor. Suele ser crítico.",
		shortDesc: "Desgarra al objetivo y el espacio a su alrededor. Suele ser crítico.",
	},
	spark: {
		name: "Chispa",
		// Official flavor text: "Ataque eléctrico que puede llegar a paralizar."
		desc: "Ataque eléctrico que puede llegar a paralizar.",
		shortDesc: "Ataque eléctrico que puede llegar a paralizar.",
	},
	sparklingaria: {
		name: "Aria Burbuja",
		// Official flavor text: "Libera burbujas al cantar. Este movimiento cura las quemaduras de los Pokémon que reciban daño."
		desc: "Libera burbujas al cantar. Cura las quemaduras de los Pokémon que reciban daño.",
		shortDesc: "Libera burbujas al cantar. Cura las quemaduras de los Pokémon que reciban daño.",
	},
	sparklyswirl: {
		name: "Sylveotornado",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Ataca al objetivo envolviéndolo con un torbellino. Cura todos los problemas de estado del equipo.",
		shortDesc: "Ataca al objetivo envolviéndolo con un torbellino. Cura todos los problemas de estado del equipo.",
	},
	spectralthief: {
		name: "Robasombra",
		// Official flavor text: "El usuario se esconde en la sombra del objetivo y lo ataca tras robarle las mejoras en sus características."
		desc: "Se esconde en la sombra del objetivo y lo ataca tras robarle las mejoras en sus características.",
		shortDesc: "Se esconde en la sombra del objetivo y lo ataca tras robarle las mejoras en sus características.",

		clearBoost: "  ¡{SOURCE} se ha apropiado de las mejoras en las características de su rival!",
	},
	speedswap: {
		name: "Cambiavelocidad",
		// Official flavor text: "Intercambia su Velocidad por la del oponente."
		desc: "Intercambia su Velocidad por la del oponente.",
		shortDesc: "Intercambia su Velocidad por la del oponente.",

		activate: "  ¡{POKEMON} cambia su Velocidad por la de su objetivo!",
	},
	spicyextract: {
		name: "Extracto Picante",
		desc: "Libera un extracto picante que aumenta mucho su Ataque, pero también reduce mucho su Defensa.",
		shortDesc: "Libera un extracto picante que aumenta mucho su Ataque, pero también reduce mucho su Defensa.",
	},
	spiderweb: {
		name: "Telaraña",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Enreda al objetivo para evitar que abandone la batalla.",
		shortDesc: "Enreda al objetivo para evitar que abandone la batalla.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	spikecannon: {
		name: "Clavo Cañón",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Lanza finas púas que hieren de dos a cinco veces.",
		shortDesc: "Lanza finas púas que hieren de dos a cinco veces.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	spikes: {
		name: "Púas",
		// Official flavor text: "Esparce púas alrededor del equipo rival que hieren a los Pokémon rivales que entran en combate."
		desc: "Esparce púas en el terreno rival. Las púas hieren a los Pokémon rivales que entran en combate.",
		shortDesc: "Esparce púas en el terreno rival. Las púas hieren a los Pokémon rivales que entran en combate.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{TEAM:capitalize} está rodeado de púas!",
		end: "  Las púas lanzadas a {TEAM} han desaparecido.",
		damage: "  ¡Las púas han herido a {POKEMON}!",
	},
	spikyshield: {
		name: "Barrera Espinosa",
		// Official flavor text: "Protege al usuario de ataques, e inflige daño a quien se los lance si entra en contacto con él."
		desc: "Evita el ataque de su oponente y le inflige daño si ha entrado en contacto con él.",
		shortDesc: "Evita el ataque de su oponente y le inflige daño si ha entrado en contacto con él.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  ¡{POKEMON} se ha herido!",
	},
	spinout: {
		name: "Quemarrueda",
		desc: "Gira violentamente sobre sí. Reduce mucho la Velocidad del usuario.",
		shortDesc: "Gira violentamente sobre sí. Reduce mucho la Velocidad del usuario.",
	},
	spiritbreak: {
		name: "Choque Anímico",
		// Official flavor text: "El usuario ataca al objetivo con tal ímpetu que acaba minando su moral y, en consecuencia, reduce su Ataque Especial."
		desc: "Ataca al objetivo con tal ímpetu que acaba minando su moral y reduce su Ataque Especial.",
		shortDesc: "Ataca al objetivo con tal ímpetu que acaba minando su moral y reduce su Ataque Especial.",
	},
	spiritshackle: {
		name: "Puntada Sombría",
		// Official flavor text: "Ataca al oponente y, al mismo tiempo, fija su sombra al terreno para impedir su huida."
		desc: "Ataca al oponente y, al mismo tiempo, fija su sombra al terreno, impidiendo su huida.",
		shortDesc: "Ataca al oponente y, al mismo tiempo, fija su sombra al terreno, impidiendo su huida.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	spite: {
		name: "Rencor",
		// Official flavor text: "Da rienda suelta a su rencor para reducir cuatro PP del último movimiento usado por el objetivo."
		desc: "Da rienda suelta a su rencor para reducir cuatro PP del último movimiento usado por el rival.",
		shortDesc: "Da rienda suelta a su rencor para reducir cuatro PP del último movimiento usado por el rival.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡El movimiento {MOVE} de {TARGET} ha perdido {NUMBER} PP!",
	},
	spitup: {
		name: "Escupir",
		// Official flavor text: "Libera de una vez la energía acumulada con Reserva. La potencia del ataque será proporcional a la cantidad de energía acumulada."
		desc: "Libera de una vez la energía acumulada con reserva.",
		shortDesc: "Libera de una vez la energía acumulada con reserva.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	splash: {
		name: "Salpicadura",
		shortDesc: "No tiene ningún efecto. Solo salpica.",

		activate: "  Pero no ha sucedido nada.",
	},
	splinteredstormshards: {
		name: "Tempestad Rocosa",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	splishysplash: {
		name: "Salpikasurf",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario carga una enorme onda eléctrica y golpea al Pokémon rival con ella. Puede paralizar.",
		shortDesc: "El usuario carga una enorme onda eléctrica y golpea al Pokémon rival con ella. Puede paralizar.",
	},
	spore: {
		name: "Espora",
		shortDesc: "Esparce esporas que inducen al sueño.",
	},
	spotlight: {
		name: "Foco",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Convierte a un Pokémon en el foco de atención, haciendo que los ataques se dirijan hacia él.",
		shortDesc: "Convierte a un Pokémon en el foco de atención, haciendo que los ataques se dirijan hacia él.",

		start: "#followme",
		startFromZEffect: "#followme",
	},
	springtidestorm: {
		name: "Ciclón Primavera",
		desc: "Desata una tormenta de amor y odio con la que envuelve al objetivo. Puede reducir su Ataque.",
		shortDesc: "Desata una tormenta de amor y odio con la que envuelve al objetivo. Puede reducir su Ataque.",
	},
	stealthrock: {
		name: "Trampa Rocas",
		// Official flavor text: "Una trampa de rocas que flota en el aire y daña a los objetivos que entran en combate."
		desc: "Una trampa de rocas que flota en el aire y daña a los objetivos que entran en combate.",
		shortDesc: "Una trampa de rocas que flota en el aire y daña a los objetivos que entran en combate.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{TEAM:capitalize} está rodeado de piedras puntiagudas!",
		end: "  Las piedras puntiagudas lanzadas a {TEAM} han desaparecido.",
		damage: "  ¡Unas piedras puntiagudas han dañado a {POKEMON}!",
	},
	steameruption: {
		name: "Chorro de Vapor",
		// Official flavor text: "Envuelve al Pokémon oponente con vapor extremadamente caliente que puede llegar a quemarlo."
		desc: "Envuelve al Pokémon oponente con vapor extremadamente caliente que puede llegar a quemarlo.",
		shortDesc: "Envuelve al Pokémon oponente con vapor extremadamente caliente que puede llegar a quemarlo.",
	},
	steamroller: {
		name: "Rodillo de Púas",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario se hace una bola y arrolla al objetivo con su cuerpo. Puede amedrentar.",
		shortDesc: "El usuario se hace una bola y arrolla al objetivo con su cuerpo. Puede amedrentar.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	steelbeam: {
		name: "Metaláser",
		// Official flavor text: "Utiliza el acero de su cuerpo para disparar un potente rayo. También hiere al agresor."
		desc: "El usuario lanza un rayo de metal que recolecta de su cuerpo. Esto daña al usuario.",
		shortDesc: "El usuario lanza un rayo de metal que recolecta de su cuerpo. Esto daña al usuario.",

		damage: "#mindblown",
	},
	steelroller: {
		name: "Allanador Férreo",
		// Official flavor text: "El usuario lanza su ataque y destruye el campo activo en el terreno de combate, y falla si no hay ninguno en ese momento."
		desc: "Lanza su ataque y destruye el campo activo. Falla si no hay ninguno en ese momento.",
		shortDesc: "Lanza su ataque y destruye el campo activo. Falla si no hay ninguno en ese momento.",
	},
	steelwing: {
		name: "Ala de Acero",
		// Official flavor text: "Alas macizas que golpean al objetivo y pueden subir la Defensa del usuario."
		desc: "Alas macizas que golpean al objetivo y pueden subir la Defensa del usuario.",
		shortDesc: "Alas macizas que golpean al objetivo y pueden subir la Defensa del usuario.",
	},
	stickyweb: {
		name: "Red Viscosa",
		// Official flavor text: "Coloca una red pegajosa alrededor del equipo rival que baja la Velocidad de cualquier adversario que entre a combatir."
		desc: "Coloca una red pegajosa en el bando rival que baja la Velocidad de cualquier Pokémon que entre.",
		shortDesc: "Coloca una red pegajosa en el bando rival que baja la Velocidad de cualquier Pokémon que entre.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡Una red viscosa se extiende a los pies de {TEAM}!",
		end: "  La red viscosa que rodeaba a {TEAM} ha desaparecido.",
		activate: "  ¡{POKEMON} ha caído en una red viscosa!",
	},
	stockpile: {
		name: "Reserva",
		// Official flavor text: "Acumula energía y sube la Defensa y la Defensa Especial. Puede utilizarse hasta tres veces."
		desc: "Acumula energía y sube la Defensa y la Defensa Especial. Puede utilizarse hasta tres veces.",
		shortDesc: "Acumula energía y sube la Defensa y la Defensa Especial. Puede utilizarse hasta tres veces.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha reservado energía por {NUMBER}.ª vez!",
		end: "  ¡Han desaparecido los efectos de la reserva acumulada por {POKEMON}!",
	},
	stokedsparksurfer: {
		name: "Surfeo Galvánico",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stomp: {
		name: "Pisotón",
		// Official flavor text: "Tremendo pisotón que puede hacer que el objetivo se amedrente."
		desc: "Tremendo pisotón que puede amedrentar al objetivo.",
		shortDesc: "Tremendo pisotón que puede amedrentar al objetivo.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	stompingtantrum: {
		name: "Pataleta",
		// Official flavor text: "Usa la frustración como revulsivo para atacar. La potencia de Pataleta se duplica si el usuario ha fallado el último movimiento usado."
		desc: "Usa la frustración para atacar, duplicando la potencia si ha fallado su último movimiento.",
		shortDesc: "Usa la frustración para atacar, duplicando la potencia si ha fallado su último movimiento.",
	},
	stoneaxe: {
		name: "Hachazo Pétreo",
		desc: "Ataca con un hacha de piedra y, al hacerlo, se deprenden fragmentos que rodean al objetivo.",
		shortDesc: "Ataca con un hacha de piedra y, al hacerlo, se deprenden fragmentos que rodean al objetivo.",
	},
	stoneedge: {
		name: "Roca Afilada",
		// Official flavor text: "Clava piedras muy afiladas al objetivo. Suele ser crítico."
		desc: "Clava piedras muy afiladas al objetivo. Suele ser crítico.",
		shortDesc: "Clava piedras muy afiladas al objetivo. Suele ser crítico.",
	},
	storedpower: {
		name: "Poder Reserva",
		// Official flavor text: "Acumula poder para golpear. Cuanto más suban las características del usuario, mayor será el daño."
		desc: "Cuanto más suban las características del usuario, mayor será el daño.",
		shortDesc: "Cuanto más suban las características del usuario, mayor será el daño.",
	},
	stormthrow: {
		name: "Llave Corsé",
		// Official flavor text: "Lanza un golpe devastador. Siempre asesta un golpe crítico."
		desc: "Lanza un golpe fulminante. Siempre resulta en un golpe crítico.",
		shortDesc: "Lanza un golpe fulminante. Siempre resulta en un golpe crítico.",
	},
	strangesteam: {
		name: "Cautivapor",
		// Official flavor text: "Desprende un humo con el que ataca al objetivo, que puede acabar confundido."
		desc: "El usuario ataca al enemigo emitiendo vapor. Puede dejar confuso al objetivo.",
		shortDesc: "El usuario ataca al enemigo emitiendo vapor. Puede dejar confuso al objetivo.",
	},
	strength: {
		name: "Fuerza",
		shortDesc: "Potente puñetazo.",
	},
	strengthsap: {
		name: "Absorbefuerza",
		// Official flavor text: "Restaura una cantidad de PS equivalente al valor de Ataque del rival, que además verá reducida esta característica."
		desc: "Baja el Ataque del rival y restaura una cantidad de PS equivalente al valor de Ataque del rival.",
		shortDesc: "Baja el Ataque del rival y restaura una cantidad de PS equivalente al valor de Ataque del rival.",
	},
	stringshot: {
		name: "Disparo Demora",
		// Official flavor text: "Lanza seda a los rivales y reduce mucho su Velocidad."
		desc: "Lanza seda al objetivo y reduce su Velocidad.",
		shortDesc: "Lanza seda al objetivo y reduce su Velocidad.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	struggle: {
		name: "Forcejeo",
		// Official flavor text: "Solo se usa como último recurso al acabarse los PP. Hiere un poco al agresor."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	strugglebug: {
		name: "Estoicismo",
		// Official flavor text: "El usuario opone resistencia y ataca a los oponentes. También reduce su Ataque Especial."
		desc: "El usuario contraataca. Además baja el Ataque Especial de los oponentes.",
		shortDesc: "El usuario contraataca. Además baja el Ataque Especial de los oponentes.",
	},
	stuffcheeks: {
		name: "Atiborramiento",
		// Official flavor text: "El usuario ingiere la baya que lleva equipada para aumentar mucho su Defensa."
		desc: "El usuario se come la baya que lleve equipada y sube drásticamente su Defensa.",
		shortDesc: "El usuario se come la baya que lleve equipada y sube drásticamente su Defensa.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	stunspore: {
		name: "Paralizador",
		// Official flavor text: "Esparce polvo que paraliza al objetivo."
		desc: "Esparce polvo que paraliza al objetivo.",
		shortDesc: "Esparce polvo que paraliza al objetivo.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	submission: {
		name: "Sumisión",
		// Official flavor text: "El usuario se lanza al suelo con el oponente en brazos y también se hace un poco de daño."
		desc: "Tira al objetivo al suelo. También hiere al agresor.",
		shortDesc: "Tira al objetivo al suelo. También hiere al agresor.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	substitute: {
		name: "Sustituto",
		// Official flavor text: "Utiliza parte de los PS propios para crear un sustituto que actúa como señuelo."
		desc: "Utiliza parte de los PS propios para crear un sustituto que actúa como señuelo.",
		shortDesc: "Utiliza parte de los PS propios para crear un sustituto que actúa como señuelo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha creado un sustituto!",
		alreadyStarted: "  ¡{POKEMON} ya tiene un sustituto!",
		end: "  ¡El sustituto de {POKEMON} ha desaparecido!",
		fail: "  ¡Está demasiado débil para crear un sustituto!",
		activate: "  ¡El sustituto recibe el ataque en lugar de {POKEMON}!",
	},
	subzeroslammer: {
		name: "Crioaliento Despiadado",
		shortDesc: null, // NEEDS TRANSLATION
	},
	suckerpunch: {
		name: "Golpe Bajo",
		// Official flavor text: "Permite atacar con prioridad. Falla si el objetivo no está preparando ningún ataque."
		desc: "Permite atacar primero. Falla si el objetivo no está preparando ningún ataque.",
		shortDesc: "Permite atacar primero. Falla si el objetivo no está preparando ningún ataque.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sunnyday: {
		name: "Día Soleado",
		// Official flavor text: "Hace que se intensifique el efecto del sol durante cinco turnos, lo que potencia los movimientos de tipo Fuego y debilita los de tipo Agua."
		desc: "Intensifica el sol durante cinco turnos, lo que potencia los movimientos de tipo Fuego.",
		shortDesc: "Intensifica el sol durante cinco turnos, lo que potencia los movimientos de tipo Fuego.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sunsteelstrike: {
		name: "Meteoimpacto",
		// Official flavor text: "Ataca al objetivo con la potencia de un meteoro, ignorando su habilidad."
		desc: "Ataca al objetivo con la potencia de un meteoro.",
		shortDesc: "Ataca al objetivo con la potencia de un meteoro.",
	},
	supercellslam: {
		name: "Plancha Voltaica",
		desc: "Electrifica su cuerpo y salta en plancha sobre el objetivo. Si falla, se hiere a sí mismo.",
		shortDesc: "Electrifica su cuerpo y salta en plancha sobre el objetivo. Si falla, se hiere a sí mismo.",

		damage: "#crash",
	},
	superfang: {
		name: "Superdiente",
		// Official flavor text: "Finos colmillos que reducen a la mitad los PS del objetivo."
		desc: "Finos colmillos que reducen a la mitad los PS del objetivo.",
		shortDesc: "Finos colmillos que reducen a la mitad los PS del objetivo.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	superpower: {
		name: "Fuerza Bruta",
		// Official flavor text: "Ataque de gran potencia, pero que reduce el Ataque y la Defensa del agresor."
		desc: "Ataque de gran potencia, pero que reduce el Ataque y la Defensa del agresor.",
		shortDesc: "Ataque de gran potencia, pero que reduce el Ataque y la Defensa del agresor.",
	},
	supersonic: {
		name: "Supersónico",
		shortDesc: "Raras ondas sónicas que pueden confundir al objetivo.",
	},
	supersonicskystrike: {
		name: "Picado Supersónico",
		shortDesc: null, // NEEDS TRANSLATION
	},
	surf: {
		name: "Surf",
		// Official flavor text: "Inunda el terreno de combate con una ola gigante."
		desc: "Inunda el campo de batalla con una ola gigante.",
		shortDesc: "Inunda el campo de batalla con una ola gigante.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	surgingstrikes: {
		name: "Azote Torrencial",
		// Official flavor text: "El usuario, dominador absoluto del líquido elemento, golpea hasta tres veces con movimientos fluidos. Siempre asesta un golpe crítico."
		desc: "El usuario golpea tres veces con movimientos fluidos. Siempre asesta golpes críticos.",
		shortDesc: "El usuario golpea tres veces con movimientos fluidos. Siempre asesta golpes críticos.",
	},
	swagger: {
		name: "Fanfarronear",
		// Official flavor text: "Provoca confusión en el objetivo, pero también sube mucho su Ataque."
		desc: "Provoca confusión en el objetivo, pero también sube mucho su Ataque.",
		shortDesc: "Provoca confusión en el objetivo, pero también sube mucho su Ataque.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	swallow: {
		name: "Tragar",
		// Official flavor text: "Absorbe la energía acumulada con Reserva para recobrar salud. Cuanta más se haya acumulado, mayor será el número de PS que se recuperen."
		desc: "Absorbe la energía acumulada con reserva y restaura PS.",
		shortDesc: "Absorbe la energía acumulada con reserva y restaura PS.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sweetkiss: {
		name: "Beso Dulce",
		shortDesc: "Da un beso con tal dulzura que causa confusión.",
	},
	sweetscent: {
		name: "Dulce Aroma",
		// Official flavor text: "Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión."
		desc: "Engatusa al rival para reducir su evasión. También atrae Pokémon salvajes.",
		shortDesc: "Engatusa al rival para reducir su evasión. También atrae Pokémon salvajes.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	swift: {
		name: "Meteoros",
		// Official flavor text: "Lanza rayos en forma de estrella que no fallan nunca."
		desc: "Lanza rayos en forma de estrella que no fallan nunca.",
		shortDesc: "Lanza rayos en forma de estrella que no fallan nunca.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	switcheroo: {
		name: "Trapicheo",
		// Official flavor text: "Intercambia con el objetivo los objetos que llevan tan rápido que es imposible verlo a simple vista."
		desc: "Intercambia con el objetivo los objetos que llevan tan rápido que es imposible verlo a simple vista.",
		shortDesc: "Intercambia con el objetivo los objetos que llevan tan rápido que es imposible verlo a simple vista.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#trick",
	},
	swordsdance: {
		name: "Danza Espada",
		// Official flavor text: "Baile frenético que aumenta mucho el Ataque."
		desc: "Baile frenético que aumenta mucho el Ataque.",
		shortDesc: "Baile frenético que aumenta mucho el Ataque.",
	},
	synchronoise: {
		name: "Sincrorruido",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Una extraña onda que daña a todos los Pokémon adyacentes del mismo tipo que el que la ejecuta.",
		shortDesc: "Una extraña onda que daña a todos los Pokémon adyacentes del mismo tipo que el que la ejecuta.",
	},
	synthesis: {
		name: "Fotosíntesis",
		// Official flavor text: "Restaura PS del usuario. La cantidad varía según el tiempo que haga."
		desc: "Restaura PS del usuario. La cantidad varía según el clima.",
		shortDesc: "Restaura PS del usuario. La cantidad varía según el clima.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	syrupbomb: {
		name: "Bomba Caramelo",
		desc: "Impregna al objetivo con su viscoso néctar, reduciendo su Velocidad durante tres turnos.",
		shortDesc: "Impregna al objetivo con su viscoso néctar, reduciendo su Velocidad durante tres turnos.",

		start: "  ¡{POKEMON} está caramelizado!",
	},
	tackle: {
		name: "Placaje",
		shortDesc: "Embiste con el cuerpo.",
	},
	tachyoncutter: {
		name: "Tajo Taquión",
		desc: "Ráfaga de cuchillas formadas por partículas que inflige daño dos veces seguidas. No falla.",
		shortDesc: "Ráfaga de cuchillas formadas por partículas que inflige daño dos veces seguidas. No falla.",
	},
	tailglow: {
		name: "Luminicola",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Se concentra en una ráfaga de luz que sube muchísimo el Ataque Especial.",
		shortDesc: "Se concentra en una ráfaga de luz que sube muchísimo el Ataque Especial.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tailslap: {
		name: "Plumerazo",
		// Official flavor text: "Golpea con la cola de dos a cinco veces seguidas."
		desc: "Golpea con la cola u otras partes de su cuerpo de dos a cinco veces seguidas.",
		shortDesc: "Golpea con la cola u otras partes de su cuerpo de dos a cinco veces seguidas.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	tailwhip: {
		name: "Agitacola",
		// Official flavor text: "Agita la cola para bajar la Defensa del equipo rival."
		desc: "Agita la cola para bajar la Defensa del contrincante.",
		shortDesc: "Agita la cola para bajar la Defensa del contrincante.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tailwind: {
		name: "Viento Afín",
		// Official flavor text: "Crea un fuerte remolino que aumenta la Velocidad de los Pokémon de tu equipo durante cuatro turnos."
		desc: "Fuerte remolino que duplica la Velocidad de los Pokémon de tu equipo durante cuatro turnos.",
		shortDesc: "Fuerte remolino que duplica la Velocidad de los Pokémon de tu equipo durante cuatro turnos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡El viento sopla a favor de {TEAM}!",
		end: "  Ha dejado de soplar el viento que favorecía a {TEAM}.",
	},
	takedown: {
		name: "Derribo",
		// Official flavor text: "Carga desmedida que también hiere al agresor."
		desc: "Carga desmedida que también hiere al agresor.",
		shortDesc: "Carga desmedida que también hiere al agresor.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	takeheart: {
		name: "Bálsamo Osado",
		desc: "El usuario se cura de problemas de estado. Aumenta su Ataque Especial y su Defensa Especial.",
		shortDesc: "El usuario se cura de problemas de estado. Aumenta su Ataque Especial y su Defensa Especial.",
	},
	tarshot: {
		name: "Alquitranazo",
		// Official flavor text: "Cubre al objetivo de un alquitrán pegajoso que reduce su Velocidad y lo vuelve débil contra el fuego."
		desc: "Lanza alquitran sobre el objetivo, bajando su Velocidad y volviéndolo débil ante los movs. Fuego.",
		shortDesc: "Lanza alquitran sobre el objetivo, bajando su Velocidad y volviéndolo débil ante los movs. Fuego.",

		start: "  ¡{POKEMON} se ha vuelto débil ante el fuego!",
	},
	taunt: {
		name: "Mofa",
		// Official flavor text: "Enfurece al objetivo para que solo use movimientos de ataque durante tres turnos."
		desc: "Enfurece al objetivo para que solo use movimientos de ataque durante tres turnos.",
		shortDesc: "Enfurece al objetivo para que solo use movimientos de ataque durante tres turnos.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} se ha dejado provocar por una mofa!",
		end: "  ¡{POKEMON} ya se ha olvidado de la mofa!",
		cant: "¡Se han mofado de {POKEMON}, por lo que no puede usar {MOVE}!",
	},
	tearfullook: {
		name: "Ojos Llorosos",
		// Official flavor text: "Mira al objetivo con ojos llorosos para hacerle perder su espíritu combativo y reduce su Ataque y Ataque Especial."
		desc: "Mira al objetivo para hacerle perder su espíritu combativo y reduce su Ataque y Ataque Especial.",
		shortDesc: "Mira al objetivo para hacerle perder su espíritu combativo y reduce su Ataque y Ataque Especial.",
	},
	teatime: {
		name: "Hora del Té",
		// Official flavor text: "El usuario invita a tomar el té a todos los presentes en el terreno de combate, lo que hace que ingieran las bayas que lleven equipadas."
		desc: "Invita a tomar el té a todos los presentes en el combate, haciendo que ingieran sus bayas equipadas.",
		shortDesc: "Invita a tomar el té a todos los presentes en el combate, haciendo que ingieran sus bayas equipadas.",

		activate: "  ¡Es la hora del té! A comer bayas se ha dicho.",
		fail: "  Pero no ha sucedido nada.",
	},
	technoblast: {
		name: "Tecno Shock",
		// Official flavor text: "Ataca al objetivo con un gran láser. El tipo del ataque lo determina el cartucho que porta el usuario."
		desc: "Ataca al objetivo con un gran laser. El tipo del ataque lo determina el cartucho que porta el usuario.",
		shortDesc: "Ataca al objetivo con un gran laser. El tipo del ataque lo determina el cartucho que porta el usuario.",
	},
	tectonicrage: {
		name: "Barrena Telúrica",
		shortDesc: null, // NEEDS TRANSLATION
	},
	teeterdance: {
		name: "Danza Caos",
		// Official flavor text: "Danza histérica que confunde a los Pokémon que están alrededor del usuario."
		desc: "Danza histérica que confunde a los Pokémon que están alrededor del usuario.",
		shortDesc: "Danza histérica que confunde a los Pokémon que están alrededor del usuario.",
	},
	telekinesis: {
		name: "Telequinesis",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Hace flotar al objetivo, haciéndolo blanco fácil de sus ataques durante tres turnos.",
		shortDesc: "Hace flotar al objetivo, haciéndolo blanco fácil de sus ataques durante tres turnos.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha sido lanzado por los aires!",
		end: "  ¡{POKEMON} se ha liberado de la telequinesis!",
	},
	teleport: {
		name: "Teletransporte",
		// Official flavor text: "Permite al usuario cambiarse por otro Pokémon del equipo, si es posible. Si un Pokémon salvaje usa este movimiento, huye del combate."
		desc: "Permite al usuario cambiarse por otro Pokémon del equipo, si es posible.",
		shortDesc: "Permite al usuario cambiarse por otro Pokémon del equipo, si es posible.",
		gen7letsgo: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	temperflare: {
		name: "Cólera Ardiente",
		desc: "Su potencia se duplica si el movimiento del usuario falló en el turno anterior.",
		shortDesc: "Su potencia se duplica si el movimiento del usuario falló en el turno anterior.",
	},
	terablast: {
		name: "Teraexplosión",
		desc: "Movimiento cuyo tipo varia al del usuario en caso de que éste haya teracristalizado.",
		shortDesc: "Movimiento cuyo tipo varia al del usuario en caso de que éste haya teracristalizado.",
	},
	terastarstorm: {
		name: "Teraclúster",
		desc: "Si Terapagos lo usa en su Forma Astral, inflige daño a todos los rivales.",
		shortDesc: "Si Terapagos lo usa en su Forma Astral, inflige daño a todos los rivales.",
	},
	terrainpulse: {
		name: "Pulso de Campo",
		// Official flavor text: "El usuario ataca aprovechando la energía del campo activo, que determina tanto el tipo como la potencia del movimiento."
		desc: "Ataca aprovechando la energía del campo activo, que determina el tipo y la potencia del movimiento.",
		shortDesc: "Ataca aprovechando la energía del campo activo, que determina el tipo y la potencia del movimiento.",
	},
	thief: {
		name: "Ladrón",
		// Official flavor text: "El agresor ataca y le quita el objeto al objetivo siempre y cuando no lleve ninguno."
		desc: "Ataca y le quita al objetivo su objeto. Si el agresor lleva un objeto, no robará el del objetivo.",
		shortDesc: "Ataca y le quita al objetivo su objeto. Si el agresor lleva un objeto, no robará el del objetivo.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	thousandarrows: {
		name: "Mil Flechas",
		// Official flavor text: "Acierta incluso a Pokémon que estén en el aire y los hace caer al suelo."
		desc: "Acierta incluso a Pokémon que estén en el aire y los hace caer al suelo.",
		shortDesc: "Acierta incluso a Pokémon que estén en el aire y los hace caer al suelo.",
	},
	thousandwaves: {
		name: "Mil Temblores",
		// Official flavor text: "El usuario genera ondas sísmicas que se propagan por el suelo y sacuden a los oponentes. Los Pokémon alcanzados no podrán huir del combate."
		desc: "Ondas sísmicas que se propagan por el suelo a todos los rivales. Los alcanzados no podrán huir.",
		shortDesc: "Ondas sísmicas que se propagan por el suelo a todos los rivales. Los alcanzados no podrán huir.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	thrash: {
		name: "Saña",
		// Official flavor text: "Ataque de dos a tres turnos que acaba confundiendo al agresor."
		desc: "Ataca de dos a tres turnos y acaba confundiendo al agresor.",
		shortDesc: "Ataca de dos a tres turnos y acaba confundiendo al agresor.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	throatchop: {
		name: "Golpe Mordaza",
		// Official flavor text: "Inflige al rival un dolor tan abrumador que le impide utilizar durante dos turnos ataques que se sirven del sonido."
		desc: "Inflige al rival un dolor tan abrumador que le impide utilizar durante dos turnos ataques sonoros.",
		shortDesc: "Inflige al rival un dolor tan abrumador que le impide utilizar durante dos turnos ataques sonoros.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		cant: "¡El efecto de Golpe Mordaza impide a {POKEMON} usar el movimiento!",
	},
	thunder: {
		name: "Trueno",
		// Official flavor text: "Un poderoso rayo que daña al objetivo y puede paralizarlo."
		desc: "Un poderoso rayo que daña al objetivo y puede paralizarlo.",
		shortDesc: "Un poderoso rayo que daña al objetivo y puede paralizarlo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	thunderbolt: {
		name: "Rayo",
		// Official flavor text: "Potente ataque eléctrico que puede paralizar al objetivo."
		desc: "Potente ataque eléctrico que puede paralizar al objetivo.",
		shortDesc: "Potente ataque eléctrico que puede paralizar al objetivo.",
	},
	thundercage: {
		name: "Electrojaula",
		// Official flavor text: "El objetivo queda atrapado en una jaula electrificada que permanece en el terreno de cuatro a cinco turnos."
		desc: "El usuario atrapa al rival en una caja eléctrica que dura entre cuatro y cinco turnos.",
		shortDesc: "El usuario atrapa al rival en una caja eléctrica que dura entre cuatro y cinco turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{SOURCE} ha enjaulado a {POKEMON}!",
	},
	thunderclap: {
		name: "Relámpago Súbito",
		desc: "Rayo que cae sobre el objetivo con prioridad. Falla si el objetivo no ataca.",
		shortDesc: "Rayo que cae sobre el objetivo con prioridad. Falla si el objetivo no ataca.",
	},
	thunderfang: {
		name: "Colmillo Rayo",
		// Official flavor text: "El usuario muerde al objetivo con colmillos electrificados y puede hacer que se amedrente o se paralice."
		desc: "Muerde con colmillos electrificados. Puede hacer que el rival se amedrente o paralice.",
		shortDesc: "Muerde con colmillos electrificados. Puede hacer que el rival se amedrente o paralice.",
	},
	thunderouskick: {
		name: "Patada Relámpago",
		// Official flavor text: "El usuario desconcierta al rival con movimientos centelleantes y le propina una patada. Baja la Defensa del objetivo."
		desc: "El usuario arremete contra el rival con una poderosa patada que siempre baja la Defensa.",
		shortDesc: "El usuario arremete contra el rival con una poderosa patada que siempre baja la Defensa.",
	},
	thunderpunch: {
		name: "Puño Trueno",
		// Official flavor text: "Puñetazo eléctrico que puede paralizar al adversario."
		desc: "Puñetazo eléctrico. Puede paralizar.",
		shortDesc: "Puñetazo eléctrico. Puede paralizar.",
	},
	thundershock: {
		name: "Impactrueno",
		// Official flavor text: "Ataque eléctrico que puede paralizar al objetivo."
		desc: "Ataque eléctrico que puede paralizar al objetivo.",
		shortDesc: "Ataque eléctrico que puede paralizar al objetivo.",
	},
	thunderwave: {
		name: "Onda Trueno",
		// Official flavor text: "Una ligera descarga que paraliza al objetivo si lo alcanza."
		desc: "Una ligera descarga que paraliza al objetivo si lo alcanza.",
		shortDesc: "Una ligera descarga que paraliza al objetivo si lo alcanza.",
	},
	tickle: {
		name: "Cosquillas",
		// Official flavor text: "Hace reír al objetivo para bajar su Ataque y Defensa."
		desc: "Hace reír al objetivo para bajar el Ataque y la Defensa.",
		shortDesc: "Hace reír al objetivo para bajar el Ataque y la Defensa.",
	},
	tidyup: {
		name: "Limpieza General",
		desc: "Aumenta el Ataque y la Velocidad. Limpia efectos de efectos como Púas, Trampa Rocas o Sustituto.",
		shortDesc: "Aumenta el Ataque y la Velocidad. Limpia efectos de efectos como Púas, Trampa Rocas o Sustituto.",

		activate: "  ¡Limpieza general completada!",
	},
	topsyturvy: {
		name: "Reversión",
		// Official flavor text: "Invierte por completo los cambios en las características del objetivo."
		desc: "Invierte por completo los cambios en las características del Pokémon objetivo.",
		shortDesc: "Invierte por completo los cambios en las características del Pokémon objetivo.",
	},
	torchsong: {
		name: "Canto Ardiente",
		desc: "Expele tórridas llamaradas como si entonara una canción. Aumenta el Ataque Especial.",
		shortDesc: "Expele tórridas llamaradas como si entonara una canción. Aumenta el Ataque Especial.",
	},
	torment: {
		name: "Tormento",
		// Official flavor text: "Atormenta y enfurece al objetivo, que no puede usar dos veces seguidas el mismo movimiento."
		desc: "Atormenta y enfurece al objetivo, que no puede usar dos veces seguidas el mismo movimiento.",
		shortDesc: "Atormenta y enfurece al objetivo, que no puede usar dos veces seguidas el mismo movimiento.",

		start: "  ¡{POKEMON} está atormentado!",
		end: "  ¡{POKEMON} ya no está atormentado!",
	},
	toxic: {
		name: "Tóxico",
		// Official flavor text: "Envenena gravemente al objetivo y causa un daño mayor en cada turno."
		desc: "Envenena gravemente al objetivo y causa un daño mayor en cada turno.",
		shortDesc: "Envenena gravemente al objetivo y causa un daño mayor en cada turno.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	toxicspikes: {
		name: "Púas Tóxicas",
		// Official flavor text: "Lanza una trampa de púas tóxicas a los pies del objetivo. El veneno afecta a los Pokémon oponentes que entran en combate."
		desc: "Lanza una trampa de púas tóxicas a los pies del objetivo. El veneno afecta a los Pokémon que entran.",
		shortDesc: "Lanza una trampa de púas tóxicas a los pies del objetivo. El veneno afecta a los Pokémon que entran.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{TEAM:capitalize} está rodeado de púas tóxicas!",
		end: "  Las púas tóxicas lanzadas a {TEAM} han desaparecido.",
	},
	toxicthread: {
		name: "Hilo Venenoso",
		// Official flavor text: "Ataca al oponente con hilillos venenosos que reducen su Velocidad y lo envenenan."
		desc: "Ataca al oponente con hilillos venenosos que reducen su Velocidad y lo envenenan.",
		shortDesc: "Ataca al oponente con hilillos venenosos que reducen su Velocidad y lo envenenan.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	trailblaze: {
		name: "Abrecaminos",
		desc: "Ataca como si saltara desde la hierba alta. Aumenta su Velocidad.",
		shortDesc: "Ataca como si saltara desde la hierba alta. Aumenta su Velocidad.",
	},
	transform: {
		name: "Transformación",
		// Official flavor text: "El usuario se transforma en una copia del objetivo, con los mismos movimientos."
		desc: "El usuario se transforma en una copia del objetivo, con los mismos movimientos.",
		shortDesc: "El usuario se transforma en una copia del objetivo, con los mismos movimientos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "¡{POKEMON} se ha transformado en {SPECIES}!",
	},
	triattack: {
		name: "Triataque",
		// Official flavor text: "Ataque triple que puede paralizar, quemar o congelar al objetivo."
		desc: "Ataque triple que puede paralizar, quemar o congelar al objetivo.",
		shortDesc: "Ataque triple que puede paralizar, quemar o congelar al objetivo.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	trick: {
		name: "Truco",
		// Official flavor text: "Engaña al objetivo desprevenido e intercambia objetos."
		desc: "Engaña al objetivo desprevenido e intercambia objetos.",
		shortDesc: "Engaña al objetivo desprevenido e intercambia objetos.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha intercambiado su objeto con el de su objetivo!",
	},
	trickortreat: {
		name: "Halloween",
		// Official flavor text: "Invita al objetivo a celebrar Halloween, lo que añade el tipo Fantasma a los tipos de este."
		desc: "Invita al objetivo a celebrar Halloween, volviéndolo de tipo Fantasma además de los suyos.",
		shortDesc: "Invita al objetivo a celebrar Halloween, volviéndolo de tipo Fantasma además de los suyos.",
	},
	trickroom: {
		name: "Espacio Raro",
		// Official flavor text: "Crea un espacio extraño en el que los Pokémon lentos se mueven primero durante cinco turnos."
		desc: "Se crea un espacio extraño en el que los Pokémon lentos se mueven primero durante cinco turnos.",
		shortDesc: "Se crea un espacio extraño en el que los Pokémon lentos se mueven primero durante cinco turnos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	triplearrows: {
		name: "Triple Flecha",
		desc: "Asesta un talonazo y lanza tres flechas. Puede amedrentar o bajar la Defensa del objetivo. Alto índice de crítico.",
		shortDesc: "Asesta un talonazo y lanza tres flechas. Puede amedrentar o bajar la Defensa del objetivo. Alto índice de crítico.",
	},
	tripleaxel: {
		name: "Triple Axel",
		// Official flavor text: "Patea hasta tres veces seguidas y cada vez más fuerte."
		desc: "Patea hasta tres veces seguidas y cada vez más fuerte.",
		shortDesc: "Patea hasta tres veces seguidas y cada vez más fuerte.",
	},
	tripledive: {
		name: "Triple Inmersión",
		desc: "Ejecuta una inmersión triple en perfecta sincronía que golpea al objetivo tres veces seguidas.",
		shortDesc: "Ejecuta una inmersión triple en perfecta sincronía que golpea al objetivo tres veces seguidas.",
	},
	triplekick: {
		name: "Triple Patada",
		// Official flavor text: "Patea hasta tres veces seguidas y cada vez más fuerte."
		desc: "Patea hasta tres veces seguidas y cada vez más fuerte.",
		shortDesc: "Patea hasta tres veces seguidas y cada vez más fuerte.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tropkick: {
		name: "Patada Tropical",
		// Official flavor text: "Lanza una patada con la fuerza del trópico que golpea al rival y reduce su Ataque."
		desc: "Lanza una patada con la fuerza del trópico que golpea al rival y reduce su Ataque.",
		shortDesc: "Lanza una patada con la fuerza del trópico que golpea al rival y reduce su Ataque.",
	},
	trumpcard: {
		name: "As Oculto",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Cuantos menos PP tenga el movimiento, mayor será la fuerza para atacar.",
		shortDesc: "Cuantos menos PP tenga el movimiento, mayor será la fuerza para atacar.",
	},
	twinbeam: {
		name: "Láser Doble",
		desc: "Emite dos misteriosos haces lumínicos por los ojos que infligen daño dos veces seguidas.",
		shortDesc: "Emite dos misteriosos haces lumínicos por los ojos que infligen daño dos veces seguidas.",
	},
	twineedle: {
		name: "Doble Ataque",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Clava aguijones al rival dos veces. Puede envenenar.",
		shortDesc: "Clava aguijones al rival dos veces. Puede envenenar.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	twinkletackle: {
		name: "Arrumaco Sideral",
		shortDesc: null, // NEEDS TRANSLATION
	},
	twister: {
		name: "Ciclón",
		// Official flavor text: "Crea un violento tornado para hacer trizas al objetivo. Puede amedrentarlo."
		desc: "Crea un violento tornado para hacer trizas al rival. Puede amedrentarlo.",
		shortDesc: "Crea un violento tornado para hacer trizas al rival. Puede amedrentarlo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	upperhand: {
		name: "Palma Rauda",
		desc: "Si el objetivo usa movimientos de prioridad se anticipa golpeándolo antes y lo amedrenta.",
		shortDesc: "Si el objetivo usa movimientos de prioridad se anticipa golpeándolo antes y lo amedrenta.",
	},
	uproar: {
		name: "Alboroto",
		// Official flavor text: "Ataca de forma alborotada durante tres turnos. Mantiene despiertos a todos."
		desc: "Ataca de forma alborotada durante tres turnos. Mantiene despiertos a todos.",
		shortDesc: "Ataca de forma alborotada durante tres turnos. Mantiene despiertos a todos.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha montado un alboroto!",
		end: "  ¡{POKEMON} se ha tranquilizado!",
		upkeep: "  ¡{POKEMON} está alborotado!",
		block: "  ¡El alboroto ha mantenido despierto a {POKEMON}!",
		blockSelf: "  ¡{POKEMON} no puede dormirse con tanto alboroto!",
	},
	uturn: {
		name: "Ida y Vuelta",
		// Official flavor text: "Tras atacar, el usuario vuelve a toda prisa para dar paso a otro Pokémon del equipo."
		desc: "Tras atacar, vuelve a toda prisa para dar paso a otro Pokémon del equipo.",
		shortDesc: "Tras atacar, vuelve a toda prisa para dar paso a otro Pokémon del equipo.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		switchOut: "¡{POKEMON} ha vuelto con {TRAINER:definite}!",
	},
	vacuumwave: {
		name: "Onda Vacío",
		// Official flavor text: "Gira los puños y libera una onda de vacío contra el objetivo. Este movimiento tiene prioridad alta."
		desc: "Gira los puños y libera una onda de vacío contra el objetivo. Este movimiento siempre va primero.",
		shortDesc: "Gira los puños y libera una onda de vacío contra el objetivo. Este movimiento siempre va primero.",
	},
	vcreate: {
		name: "V de Fuego",
		// Official flavor text: "Golpea con una V de llamas al objetivo. Baja la Defensa, la Defensa Especial y la Velocidad de quien lo usa."
		desc: "Golpea con una V de llamas. Baja la Defensa, la Def. Esp. y la Velocidad del usuario.",
		shortDesc: "Golpea con una V de llamas. Baja la Defensa, la Def. Esp. y la Velocidad del usuario.",
	},
	veeveevolley: {
		name: "Eevimpacto",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	venomdrench: {
		name: "Trampa Venenosa",
		// Official flavor text: "Impregna a su objetivo con un líquido venenoso que disminuye el Ataque, el Ataque Especial y la Velocidad. Solo afecta a Pokémon ya envenenados."
		desc: "Disminuye el Ataque, el Ataque Especial y la Velocidad, pero solo a Pokémon ya envenenados.",
		shortDesc: "Disminuye el Ataque, el Ataque Especial y la Velocidad, pero solo a Pokémon ya envenenados.",
	},
	venoshock: {
		name: "Carga Tóxica",
		// Official flavor text: "Cubre al objetivo con un líquido venenoso. El daño será doble si este ya está envenenado."
		desc: "Ataca cubriendo al objetivo con un líquido venenoso. El daño será doble si este ya está envenenado.",
		shortDesc: "Ataca cubriendo al objetivo con un líquido venenoso. El daño será doble si este ya está envenenado.",
	},
	victorydance: {
		name: "Danza Triunfal",
		desc: "Ejecuta una danza frenética que invoca la victoria y aumenta el Ataque, la Defensa y la Velocidad.",
		shortDesc: "Ejecuta una danza frenética que invoca la victoria y aumenta el Ataque, la Defensa y la Velocidad.",
	},
	vinewhip: {
		name: "Látigo Cepa",
		shortDesc: "Azota al objetivo con ramas finas.",
	},
	visegrip: {
		name: "Agarre",
		shortDesc: "Atrapa con potentes pinzas.",
	},
	vitalthrow: {
		name: "Llave Vital",
		// Official flavor text: "El usuario ataca el último, pero no falla."
		desc: "El usuario ataca el último, pero no falla.",
		shortDesc: "El usuario ataca el último, pero no falla.",
	},
	voltswitch: {
		name: "Voltiocambio",
		// Official flavor text: "Tras atacar, el usuario vuelve a toda prisa para dar paso a otro Pokémon del equipo."
		desc: "Tras atacar, vuelve a toda prisa para dar paso a otro Pokémon del equipo.",
		shortDesc: "Tras atacar, vuelve a toda prisa para dar paso a otro Pokémon del equipo.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		switchOut: "#uturn",
	},
	volttackle: {
		name: "Placaje Eléctrico",
		// Official flavor text: "Quien lo usa electrifica su cuerpo para luego atacar. Se hiere mucho a sí mismo, pero puede paralizar al objetivo."
		desc: "Placaje de alto riesgo que hiere también al atacante.",
		shortDesc: "Placaje de alto riesgo que hiere también al atacante.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wakeupslap: {
		name: "Espabila",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Inflige gran daño a objetivos dormidos. Sin embargo, los bofetones también los despiertan.",
		shortDesc: "Inflige gran daño a objetivos dormidos. Sin embargo, los bofetones también los despiertan.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	waterfall: {
		name: "Cascada",
		// Official flavor text: "Embiste con un gran impulso que puede llegar a amedrentar."
		desc: "Embiste con un gran impulso que puede amedrentar. También sirve para remontar cascadas.",
		shortDesc: "Embiste con un gran impulso que puede amedrentar. También sirve para remontar cascadas.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	watergun: {
		name: "Pistola Agua",
		shortDesc: "Ataca disparando agua con gran potencia.",
	},
	waterpledge: {
		name: "Voto Agua",
		// Official flavor text: "Ataca con columnas de agua. Combinado con Voto Fuego, crea un arcoíris y aumenta su potencia."
		desc: "Ataca con columnas de agua. Combinado con un Voto Fuego crea un arcoíris.",
		shortDesc: "Ataca con columnas de agua. Combinado con un Voto Fuego crea un arcoíris.",

		activate: "  {POKEMON} está esperando a {TARGET}...",
		start: "  ¡Ha aparecido un arcoíris sobre {TEAM}!",
		end: "  El arcoíris sobre {TEAM} ha desaparecido.",
	},
	waterpulse: {
		name: "Hidropulso",
		// Official flavor text: "Ataca con un potente chorro de agua. Puede confundir al objetivo."
		desc: "Ataca con un potente chorro de agua. Puede confundir al objetivo.",
		shortDesc: "Ataca con un potente chorro de agua. Puede confundir al objetivo.",
	},
	watershuriken: {
		name: "Shuriken de Agua",
		// Official flavor text: "Golpea al oponente de dos a cinco veces con estrellas arrojadizas hechas de mucosidad. Este movimiento tiene prioridad alta."
		desc: "Golpea de dos a cinco veces con estrellas arrojadizas. El que lo usa siempre ataca primero.",
		shortDesc: "Golpea de dos a cinco veces con estrellas arrojadizas. El que lo usa siempre ataca primero.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	watersport: {
		name: "Hidrochorro",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario se moja y, mientras esté en combate, los movimientos de tipo Fuego se debilitan.",
		shortDesc: "El usuario se moja y, mientras esté en combate, los movimientos de tipo Fuego se debilitan.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	waterspout: {
		name: "Salpicar",
		// Official flavor text: "Chorro de agua. Cuantos menos PS tenga el usuario, menos dañino será."
		desc: "Chorro de agua. Cuantos menos PS tenga el usuario, menos dañino será.",
		shortDesc: "Chorro de agua. Cuantos menos PS tenga el usuario, menos dañino será.",
	},
	wavecrash: {
		name: "Envite Acuático",
		desc: "El usuario se envuelve en agua y embiste contra el objetivo, pero también se hiere seriamente a sí mismo.",
		shortDesc: "El usuario se envuelve en agua y embiste contra el objetivo, pero también se hiere seriamente a sí mismo.",
	},
	weatherball: {
		name: "Meteorobola",
		// Official flavor text: "El tipo y fuerza del ataque varían según el tiempo que haga."
		desc: "El tipo y fuerza del ataque varían según el clima.",
		shortDesc: "El tipo y fuerza del ataque varían según el clima.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		move: "¡Carrera Arrolladora ha cambiado a {MOVE} debido al tiempo!",
	},
	whirlpool: {
		name: "Torbellino",
		// Official flavor text: "Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos."
		desc: "Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos.",
		shortDesc: "Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ha quedado atrapado dentro del torbellino!",
	},
	whirlwind: {
		name: "Remolino",
		// Official flavor text: "Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate."
		desc: "Se lleva al rival, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.",
		shortDesc: "Se lleva al rival, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wickedblow: {
		name: "Golpe Oscuro",
		// Official flavor text: "Golpe devastador que requiere un absoluto dominio de las artes siniestras. Siempre asesta un golpe crítico."
		desc: "Golpe devastador que requiere un absoluto dominio de las artes siniestras. Siempre es crítico.",
		shortDesc: "Golpe devastador que requiere un absoluto dominio de las artes siniestras. Siempre es crítico.",
	},
	wickedtorque: {
		name: "Ominochoque",
		desc: "Puede dormir al objetivo.",
		shortDesc: "Puede dormir al objetivo.",
	},
	wideguard: {
		name: "Vasta Guardia",
		// Official flavor text: "Bloquea los ataques de objetivo múltiple lanzados contra tu equipo durante un turno."
		desc: "Protege a todo tu bando de golpes que dan a múltiples objetivos. Falla si se usa repetidamente.",
		shortDesc: "Protege a todo tu bando de golpes que dan a múltiples objetivos. Falla si se usa repetidamente.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{TEAM} está protegido por Vasta Guardia!",
		block: "  ¡{POKEMON} está protegido por Vasta Guardia!",
	},
	wildboltstorm: {
		name: "Electormenta",
		desc: "Invoca una tormenta eléctrica que ataca al objetivo con fuertes vientos y relámpagos y puede paralizarlo.",
		shortDesc: "Invoca una tormenta eléctrica que ataca al objetivo con fuertes vientos y relámpagos y puede paralizarlo.",
	},
	wildcharge: {
		name: "Voltio Cruel",
		// Official flavor text: "Carga eléctrica muy potente que también hiere ligeramente a quien la usa."
		desc: "Carga eléctrica muy potente que también hiere ligeramente a quien la usa.",
		shortDesc: "Carga eléctrica muy potente que también hiere ligeramente a quien la usa.",
	},
	willowisp: {
		name: "Fuego Fatuo",
		// Official flavor text: "Siniestra llama morada que produce quemaduras."
		desc: "Siniestra llama morada que produce quemaduras.",
		shortDesc: "Siniestra llama morada que produce quemaduras.",
	},
	wingattack: {
		name: "Ataque Ala",
		shortDesc: "Golpea al objetivo con unas grandes alas.",
	},
	wish: {
		name: "Deseo",
		// Official flavor text: "Restaura en el siguiente turno la mitad de los PS máximos del usuario o se los pasa al Pokémon que lo sustituye."
		desc: "Cumple el deseo de restaurar la mitad de los PS máximos en el siguiente turno.",
		shortDesc: "Cumple el deseo de restaurar la mitad de los PS máximos en el siguiente turno.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		heal: "  ¡El deseo de {NICKNAME} se ha hecho realidad!",
	},
	withdraw: {
		name: "Refugio",
		// Official flavor text: "El usuario se resguarda en su coraza, por lo que le sube la Defensa."
		desc: "El usuario se protege en su coraza y sube la Defensa.",
		shortDesc: "El usuario se protege en su coraza y sube la Defensa.",
	},
	wonderroom: {
		name: "Zona Extraña",
		// Official flavor text: "Crea una zona misteriosa donde se intercambian la Defensa y la Defensa Especial de todos los Pokémon durante cinco turnos."
		desc: "Crea una zona que intercambia la Defensa y Def. Esp. de todos por 5 turnos.",
		shortDesc: "Crea una zona que intercambia la Defensa y Def. Esp. de todos por 5 turnos.",
	},
	woodhammer: {
		name: "Mazazo",
		// Official flavor text: "Arremete contra el objetivo con su robusto cuerpo. El agresor también sufre bastante daño."
		desc: "Arremete contra el rival con su robusto cuerpo. El agresor también sufre bastante daño.",
		shortDesc: "Arremete contra el rival con su robusto cuerpo. El agresor también sufre bastante daño.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	workup: {
		name: "Avivar",
		// Official flavor text: "Quien lo usa se concentra y potencia su Ataque y su Ataque Especial."
		desc: "Movimiento que aumenta el Ataque y el Ataque Especial de quien lo usa.",
		shortDesc: "Movimiento que aumenta el Ataque y el Ataque Especial de quien lo usa.",
	},
	worryseed: {
		name: "Abatidoras",
		// Official flavor text: "Planta una semilla en el objetivo que le causa pesar. Sustituye la habilidad del objetivo por Insomnio y le impide dormirse."
		desc: "Se planta una semilla en el objetivo que le causa pesar y le induce Insomnio.",
		shortDesc: "Se planta una semilla en el objetivo que le causa pesar y le induce Insomnio.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	wrap: {
		name: "Constricción",
		// Official flavor text: "Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo."
		desc: "Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.",
		shortDesc: "Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{SOURCE} ha atrapado a {POKEMON} con Constricción!",
		move: "¡{POKEMON} sigue atacando!",
	},
	wringout: {
		name: "Estrujón",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "Estruja con fuerza al objetivo. Cuantos más PS tenga el objetivo, más fuerza tendrá el ataque.",
		shortDesc: "Estruja con fuerza al objetivo. Cuantos más PS tenga el objetivo, más fuerza tendrá el ataque.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	xscissor: {
		name: "Tijera X",
		shortDesc: "Cruza las guadañas o las garras para atacar al rival como si fueran unas tijeras.",
	},
	yawn: {
		name: "Bostezo",
		// Official flavor text: "Gran bostezo que induce al sueño al objetivo en el siguiente turno."
		desc: "Gran bostezo que induce al sueño al objetivo en el siguiente turno.",
		shortDesc: "Gran bostezo que induce al sueño al objetivo en el siguiente turno.",

		start: "  ¡{POKEMON} está somnoliento!",
	},
	zapcannon: {
		name: "Electrocañón",
		// Official flavor text: "Dispara una descarga eléctrica que causa daño y parálisis."
		desc: "Dispara una descarga eléctrica que causa daño y parálisis.",
		shortDesc: "Dispara una descarga eléctrica que causa daño y parálisis.",
	},
	zenheadbutt: {
		name: "Cabezazo Zen",
		// Official flavor text: "Concentra su energía psíquica en la cabeza para golpear. Puede hacer que el objetivo se amedrente."
		desc: "Concentra su energía psíquica en la cabeza para golpear. Puede hacer que el objetivo se amedrente.",
		shortDesc: "Concentra su energía psíquica en la cabeza para golpear. Puede hacer que el objetivo se amedrente.",
	},
	zingzap: {
		name: "Electropunzada",
		// Official flavor text: "Se lanza contra el objetivo y le suelta una potente descarga eléctrica que puede hacer que se amedrente."
		desc: "El usuario se lanza contra el objetivo y le suelta una potente descarga que puede amedrentarlo.",
		shortDesc: "El usuario se lanza contra el objetivo y le suelta una potente descarga que puede amedrentarlo.",
	},
	zippyzap: {
		name: "Pikaturbo",
		// Official flavor text: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
		desc: "El usuario ataca con ráfagas eléctricas, siempre va en primer lugar y es golpe crítico.",
		shortDesc: "El usuario ataca con ráfagas eléctricas, siempre va en primer lugar y es golpe crítico.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
};
