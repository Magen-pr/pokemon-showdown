// Mechanics desc style (es): official game terminology. el usuario (user), el objetivo
//   (target), efecto secundario, hacer retroceder (flinch), golpe crítico, niveles (stages),
//   problema de estado (status), movimiento multigolpe, prioridad, sustituto, redondeado
//   hacia abajo/arriba. Decimal comma (1,5). Boilerplate shared verbatim — QC one, fix all.
// Cross-references generated from name fields / pokedex-names.ts. CAP entities keep name
//   null (English fallback); descs are translated with English names inline.

export const AbilitiesText: { [id: IDEntry]: AbilityText } = {
	noability: {
		name: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	adaptability: {
		name: "Adaptable",
		// Official flavor text: "Potencia aún más los movimientos cuyo tipo coincida con el suyo."
		desc: "Aumenta la bonificación de usar movimientos del mismo tipo del Pokémon x2 en lugar de x1,5.",
		shortDesc: "Aumenta la bonificación de usar movimientos del mismo tipo del Pokémon x2 en lugar de x1,5.",
	},
	aerilate: {
		name: "Piel Celeste",
		// Official flavor text: "Convierte los movimientos de tipo Normal en tipo Volador y aumenta ligeramente su potencia."
		desc: "Convierte los movimientos de tipo Normal en tipo Volador y aumenta su potencia en un 20%.",
		shortDesc: "Convierte los movimientos de tipo Normal en tipo Volador y aumenta su potencia en un 20%.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	aftermath: {
		name: "Detonación",
		// Official flavor text: "Daña al agresor que le ha dado el golpe de gracia con un movimiento de contacto."
		desc: "Daña al agresor que le ha dado el golpe de gracia con un movimiento de contacto en un 25% de sus PS máximos, salvo que el agresor tenga Humedad.",
		shortDesc: "Daña al agresor que le ha dado el golpe de gracia con un movimiento de contacto en un 25% de sus PS máximos, salvo que el agresor tenga Humedad.",

		damage: "  ¡{POKEMON} ha resultado herido!",
	},
	airlock: {
		name: "Bucle Aire",
		shortDesc: "Neutraliza todos los efectos del tiempo atmosférico, salvo la capacidad de negar el cambio de clima de Sol abrasador, Diluvio y Turbulencias.",

		start: "  Los efectos del tiempo atmosférico se han neutralizado.",
	},
	analytic: {
		name: "Cálculo Final",
		// Official flavor text: "Aumenta la potencia de su movimiento si es el último en atacar."
		desc: "Aumenta la potencia del movimiento en un 30% si es el último en atacar.",
		shortDesc: "Aumenta la potencia del movimiento en un 30% si es el último en atacar.",
	},
	angerpoint: {
		name: "Irascible",
		// Official flavor text: "Si recibe un golpe crítico, monta en cólera y sube su Ataque hasta el máximo."
		desc: "Si recibe un golpe crítico, monta en cólera y sube su Ataque hasta el máximo.",
		shortDesc: "Si recibe un golpe crítico, monta en cólera y sube su Ataque hasta el máximo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		boost: "  ¡El Ataque de {POKEMON} ha aumentado al máximo!",
	},
	angershell: {
		name: "Coraza Ira",
		desc: "Cuando un ataque reduce sus PS a la mitad, un arrebato de cólera reduce su Defensa y su Defensa Especial, pero aumenta su Ataque, su Ataque Especial y su Velocidad.",
		shortDesc: "Cuando un ataque reduce sus PS a la mitad, un arrebato de cólera reduce su Defensa y su Defensa Especial, pero aumenta su Ataque, su Ataque Especial y su Velocidad.",
	},
	anticipation: {
		name: "Anticipación",
		// Official flavor text: "Prevé los movimientos peligrosos del rival."
		desc: "Si el rival tiene un movimiento que resulte eficaz contra él, el Pokémon se estremecerá.",
		shortDesc: "Si el rival tiene un movimiento que resulte eficaz contra él, el Pokémon se estremecerá.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} se ha estremecido!",
	},
	arenatrap: {
		name: "Trampa Arena",
		// Official flavor text: "Evita que el rival huya."
		desc: "Evita que el enemigo huya o sea cambiado, salvo que sea tipo Fantasma o Volador, levite, lleve equipado Muda concha o use un movimiento de cambio.",
		shortDesc: "Evita que el enemigo huya o sea cambiado, salvo que sea tipo Fantasma o Volador, levite, lleve equipado Muda concha o use un movimiento de cambio.",
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
	armortail: {
		name: "Cola Armadura",
		desc: "La extraña cola que le envuelve la cabeza impide al rival usar movimientos con prioridad contra él y sus aliados.",
		shortDesc: "La extraña cola que le envuelve la cabeza impide al rival usar movimientos con prioridad contra él y sus aliados.",

		block: "#damp",
	},
	aromaveil: {
		name: "Velo Aroma",
		// Official flavor text: "Se protege a sí mismo y a sus aliados de ataques que impiden elegir movimientos."
		desc: "Protege al poseedor y sus aliados de ataques que impiden elegir movimientos, como anticura, mofa, anulación o la habilidad cuerpo maldito.",
		shortDesc: "Protege al poseedor y sus aliados de ataques que impiden elegir movimientos, como anticura, mofa, anulación o la habilidad cuerpo maldito.",

		block: "  ¡Velo Aroma ha protegido a {POKEMON}!",
	},
	asone: {
		name: "Unidad Ecuestre",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} tiene dos habilidades!",
	},
	asoneglastrier: {
		name: "Unidad Ecuestre (Glastrier)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION
	},
	asonespectrier: {
		name: "Unidad Ecuestre (Spectrier)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION
	},
	aurabreak: {
		name: "Rompeaura",
		// Official flavor text: "Invierte los efectos de las auras, por lo que baja la potencia de ciertos movimientos en vez de subirla."
		desc: "Invierte los efectos de las auras, por lo que bajan la potencia de los movs. hada y siniestro en 1/3 en vez de subirlos.",
		shortDesc: "Invierte los efectos de las auras, por lo que bajan la potencia de los movs. hada y siniestro en 1/3 en vez de subirlos.",

		start: "  ¡{POKEMON} ha invertido todas las auras!",
	},
	auraguard: {
		name: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	baddreams: {
		name: "Mal Sueño",
		// Official flavor text: "Inflige daño a cualquier rival que esté dormido."
		desc: "Inflige 1/8 de sus PS máximos de daño a cualquier rival que esté dormido en combate al final de cada turno.",
		shortDesc: "Inflige 1/8 de sus PS máximos de daño a cualquier rival que esté dormido en combate al final de cada turno.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "  ¡{POKEMON} está inmerso en un sueño agitado!",
	},
	ballfetch: {
		name: "Recogebolas",
		shortDesc: "Si no lleva equipado ningún objeto, recupera la Poké Ball del primer intento de captura fallido.",
	},
	battery: {
		name: "Batería",
		shortDesc: "Potencia los movimientos especiales de los aliados en un 30%.",
	},
	battlearmor: {
		name: "Armadura Batalla",
		shortDesc: "La robusta coraza que lo protege bloquea los golpes críticos.",
	},
	battlebond: {
		name: "Fuerte Afecto",
		// Official flavor text: "Al derrotar a un rival, los vínculos con su Entrenador se refuerzan y se convierte en Greninja Ash. Su Shuriken de Agua también se ve potenciado."
		desc: "Al derrotar a un rival, los vínculos con su entrenador se refuerzan y se convierte en Greninja Ash.",
		shortDesc: "Al derrotar a un rival, los vínculos con su entrenador se refuerzan y se convierte en Greninja Ash.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		activate: "  ¡{POKEMON} siente la fuerza de vuestro afecto mutuo!",
		transform: "¡{POKEMON} se ha convertido en Greninja Ash!",
	},
	beadsofruin: {
		name: "Abalorio Debacle",
		shortDesc: "Reduce la Defensa Especial de todos los demás Pokémon con el poder de sus abalorios malditos.",

		start: "  ¡{POKEMON} ha mermado la Defensa Especial de los demás Pokémon con Abalorio Debacle!",
	},
	beastboost: {
		name: "Ultraimpulso",
		// Official flavor text: "Si derrota a un rival en ese turno, aumenta su característica más fuerte."
		desc: "Si el Pokémon derrota a un rival en ese turno, aumenta su característica más elevada en un nivel.",
		shortDesc: "Si el Pokémon derrota a un rival en ese turno, aumenta su característica más elevada en un nivel.",
	},
	berserk: {
		name: "Cólera",
		// Official flavor text: "Aumenta su Ataque Especial si sus PS se ven reducidos a la mitad debido a algún ataque."
		desc: "Aumenta el At. Especial en un nivel cada vez que los ataques del oponente le reduzcan los PS por debajo del 50%, pudiéndose activar más de una vez.",
		shortDesc: "Aumenta el At. Especial en un nivel cada vez que los ataques del oponente le reduzcan los PS por debajo del 50%, pudiéndose activar más de una vez.",
	},
	bigpecks: {
		name: "Sacapecho",
		shortDesc: "Impide que el rival baje la Defensa del Pokémon, pero no que baje por usar movimientos propios.",
	},
	blaze: {
		name: "Mar Llamas",
		// Official flavor text: "Potencia sus movimientos de tipo Fuego cuando le quedan pocos PS."
		desc: "Potencia los movimientos de tipo Fuego del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
		shortDesc: "Potencia los movimientos de tipo Fuego del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bulletproof: {
		name: "Antibalas",
		shortDesc: "EL poseedor es inmune a todos los movimientos basados en balas, cañones, bombas y bolas.",
	},
	cheekpouch: {
		name: "Carrillo",
		// Official flavor text: "Recupera PS al comer cualquier baya."
		desc: "Recupera 1/3 de sus PS máximos al comer cualquier baya, después de aplicar los efectos de esta.",
		shortDesc: "Recupera 1/3 de sus PS máximos al comer cualquier baya, después de aplicar los efectos de esta.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	chillingneigh: {
		name: "Relincho Blanco",
		// Official flavor text: "Al derrotar a un objetivo, emite un relincho gélido y aumenta su Ataque."
		desc: "Sube un nivel su Ataque al derrotar a un Pokémon.",
		shortDesc: "Sube un nivel su Ataque al derrotar a un Pokémon.",
	},
	chlorophyll: {
		name: "Clorofila",
		// Official flavor text: "Sube su Velocidad cuando hace sol."
		desc: "Mientras haya clima soleado en el combate el Pokémon duplica su estadística de Velocidad.",
		shortDesc: "Mientras haya clima soleado en el combate el Pokémon duplica su estadística de Velocidad.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	clearbody: {
		name: "Cuerpo Puro",
		shortDesc: "Evita que bajen sus características a causa de movimientos o habilidades de otros Pokémon, pero no de los suyos.",
	},
	cloudnine: {
		name: "Aclimatación",
		shortDesc: "Anula todos los efectos del tiempo atmosférico, aunque no hace que éste desaparezca del campo.",

		start: "#airlock",
	},
	colorchange: {
		name: "Cambio Color",
		// Official flavor text: "Adopta el tipo del último movimiento del que es blanco."
		desc: "Adopta el tipo del último movimiento del que se es blanco. Si recibe un movimiento multigolpe, lo adoptará al recibir el último golpe.",
		shortDesc: "Adopta el tipo del último movimiento del que se es blanco. Si recibe un movimiento multigolpe, lo adoptará al recibir el último golpe.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	comatose: {
		name: "Letargo Perenne",
		// Official flavor text: "No despierta jamás de su profundo letargo e incluso ataca dormido."
		desc: "No despierta jamás de su profundo letargo e incluso ataca dormido.",
		shortDesc: "No despierta jamás de su profundo letargo e incluso ataca dormido.",

		start: "  ¡{POKEMON} está sumido en un profundo letargo!",
	},
	commander: {
		name: "Comandar",
		desc: "Si al entrar en combate coincide con un Dondozo aliado, se cuela en el interior de su boca para tomar el control.",
		shortDesc: "Si al entrar en combate coincide con un Dondozo aliado, se cuela en el interior de su boca para tomar el control.",

		activate: "  ¡{POKEMON} ha sido engullido por {TARGET} y se ha convertido en su comandante!",
	},
	competitive: {
		name: "Tenacidad",
		// Official flavor text: "Aumenta mucho su Ataque Especial cuando el rival le baja cualquiera de sus características."
		desc: "Sube dos niveles el At. Especial del usuario cuando el rival le baja una de sus caract. Se activa tantas veces como reducciones ocurran.",
		shortDesc: "Sube dos niveles el At. Especial del usuario cuando el rival le baja una de sus caract. Se activa tantas veces como reducciones ocurran.",
	},
	compoundeyes: {
		name: "Ojo Compuesto",
		shortDesc: "Aumenta la precisión de sus movimientos en un 30%. También aumenta la probabilidad de que los Pokémon salvajes lleven un objeto equipado.",
	},
	contrary: {
		name: "Respondón",
		shortDesc: "Invierte los cambios en las características: bajan cuando les toca subir y suben cuando les toca bajar.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	corrosion: {
		name: "Corrosión",
		shortDesc: "Permite envenenar incluso a rivales de tipo Acero o Veneno. No permite atacar a Pokémon tipo Acero con movs. tipo Veneno de daño directo.",
	},
	costar: {
		name: "Unísono",
		shortDesc: "Al entrar en combate, copia los cambios en las características de su aliado.",
	},
	cottondown: {
		name: "Pelusa",
		// Official flavor text: "Al ser alcanzado por un ataque, suelta una pelusa de algodón que reduce la Velocidad de todos los demás Pokémon."
		desc: "Cuando es afectado por un ataque, con su pelusa reduce la Velocidad en un nivel de los demás Pokémon en combate.",
		shortDesc: "Cuando es afectado por un ataque, con su pelusa reduce la Velocidad en un nivel de los demás Pokémon en combate.",
	},
	cudchew: {
		name: "Rumia",
		shortDesc: "Cuando ingiere una baya, la regurgita al final del siguiente turno y se la come por segunda vez.",
	},
	curiousmedicine: {
		name: "Medicina Extraña",
		shortDesc: "Cuando entra en combate elimina los cambios de características de los aliados, tanto positivos como negativos.",
	},
	cursedbody: {
		name: "Cuerpo Maldito",
		// Official flavor text: "Puede anular el movimiento usado en su contra."
		desc: "Tiene una probabilidad del 30% de anular el movimiento usado en su contra durante 4 turnos.",
		shortDesc: "Tiene una probabilidad del 30% de anular el movimiento usado en su contra durante 4 turnos.",
	},
	cutecharm: {
		name: "Gran Encanto",
		// Official flavor text: "Puede causar enamoramiento al rival que lo toque."
		desc: "Si el rival golpea con un movimiento de contacto al usuario y es del género opuesto, tiene una probabilidad del 30% de quedarse enamorado.",
		shortDesc: "Si el rival golpea con un movimiento de contacto al usuario y es del género opuesto, tiene una probabilidad del 30% de quedarse enamorado.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	damp: {
		name: "Humedad",
		// Official flavor text: "Aumenta la humedad del entorno y evita que se puedan utilizar movimientos explosivos, tales como Autodestrucción."
		desc: "Aumenta la humedad del entorno y evita que se puedan utilizar movimientos explosivos. También impide que la habilidad Detonación se active.",
		shortDesc: "Aumenta la humedad del entorno y evita que se puedan utilizar movimientos explosivos. También impide que la habilidad Detonación se active.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		block: "  ¡{SOURCE} no puede usar {MOVE}!",
	},
	dancer: {
		name: "Pareja de Baile",
		// Official flavor text: "Puede copiar inmediatamente cualquier movimiento de baile que haya usado otro Pokémon presente en el combate."
		desc: "Permite copiar cualquier movimiento de baile que haya usado otro Pokémon presente en el combate.",
		shortDesc: "Permite copiar cualquier movimiento de baile que haya usado otro Pokémon presente en el combate.",
	},
	darkaura: {
		name: "Aura Oscura",
		// Official flavor text: "Aumenta la potencia de todos los movimientos de tipo Siniestro."
		desc: "Aumenta la potencia de todos los movimientos de tipo Siniestro en 1/3.",
		shortDesc: "Aumenta la potencia de todos los movimientos de tipo Siniestro en 1/3.",

		start: "  ¡{POKEMON} irradia un aura oscura!",
	},
	dauntlessshield: {
		name: "Escudo Recio",
		shortDesc: "Aumenta la Defensa del usuario en un nivel la primera vez que entra en combate.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dazzling: {
		name: "Cuerpo Vívido",
		// Official flavor text: "Desconcierta al rival y le impide utilizar movimientos con prioridad en su contra."
		desc: "Desconcierta al rival y le impide utilizar movimientos con prioridad contra el usuario o sus aliados.",
		shortDesc: "Desconcierta al rival y le impide utilizar movimientos con prioridad contra el usuario o sus aliados.",

		block: "#damp",
	},
	defeatist: {
		name: "Flaqueza",
		// Official flavor text: "Se debilita tanto cuando sus PS se ven reducidos a la mitad que su Ataque y su Ataque Especial bajan."
		desc: "Se debilita tanto cuando sus PS se ven reducidos por debajo del 50% de sus PS máximos que su Ataque y su Ataque Especial bajan a la mitad.",
		shortDesc: "Se debilita tanto cuando sus PS se ven reducidos por debajo del 50% de sus PS máximos que su Ataque y su Ataque Especial bajan a la mitad.",
	},
	defiant: {
		name: "Competitivo",
		// Official flavor text: "Sube mucho su Ataque cuando el rival le baja las características."
		desc: "Sube dos niveles el Ataque del usuario cuando el rival le baja una de sus características. Se activa tantas veces como reducciones ocurran.",
		shortDesc: "Sube dos niveles el Ataque del usuario cuando el rival le baja una de sus características. Se activa tantas veces como reducciones ocurran.",
	},
	deltastream: {
		name: "Ráfaga Delta",
		// Official flavor text: "Altera el clima para anular las vulnerabilidades del tipo Volador."
		desc: "Altera el clima para anular las vulnerabilidades del tipo Volador. Los climas básicos no eliminan este clima.",
		shortDesc: "Altera el clima para anular las vulnerabilidades del tipo Volador. Los climas básicos no eliminan este clima.",
	},
	desolateland: {
		name: "Tierra del Ocaso",
		// Official flavor text: "Altera el clima para anular los ataques de tipo Agua."
		desc: "Altera el clima con un abrasador sol para anular los ataques de tipo Agua. Los climas básicos no eliminan este clima.",
		shortDesc: "Altera el clima con un abrasador sol para anular los ataques de tipo Agua. Los climas básicos no eliminan este clima.",
	},
	disguise: {
		name: "Disfraz",
		// Official flavor text: "Puede eludir un ataque valiéndose de la tela que le cubre el cuerpo una vez por combate."
		desc: "El Pokémon perderá sólo 1/8 de sus PS máximos del primer ataque que reciba del rival, independientemente del daño que reciba.",
		shortDesc: "El Pokémon perderá sólo 1/8 de sus PS máximos del primer ataque que reciba del rival, independientemente del daño que reciba.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		block: "  ¡El disfraz ha actuado como señuelo!",
		transform: "¡El disfraz de {POKEMON} se ha roto!",
	},
	download: {
		name: "Descarga",
		// Official flavor text: "Compara la Defensa y la Defensa Especial del rival para ver cuál es inferior y aumenta su propio Ataque o Ataque Especial según sea lo más eficaz."
		desc: "Compara la Defensa y la Defensa Especial del rival para ver cuál es inferior y aumenta su propio Ataque o Ataque Especial, según corresponda.",
		shortDesc: "Compara la Defensa y la Defensa Especial del rival para ver cuál es inferior y aumenta su propio Ataque o Ataque Especial, según corresponda.",
	},
	dragonize: {
		name: "Piel Dragontina",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonsmaw: {
		name: "Mandíbula Dragón",
		shortDesc: "Potencia los movimientos tipo Dragón un 50%.",
	},
	drizzle: {
		name: "Llovizna",
		shortDesc: "Cuando entra en combate invoca una lluvia que dura 5 turnos. Si el Pokémon lleva equipada Roca lluvia durará 8 turnos.",
	},
	drought: {
		name: "Sequía",
		shortDesc: "Cuando entra en combate induce clima soleado, que dura 5 turnos. Si el Pokémon lleva equipada Roca calor durará 8 turnos.",
	},
	dryskin: {
		name: "Piel Seca",
		// Official flavor text: "Pierde PS si hace sol y los recupera si llueve o recibe un movimiento de tipo Agua. Los movimientos de tipo Fuego, por su parte, le hacen más daño de lo normal."
		desc: "Cada turno pierde 1/8 de sus PS si hace sol, y los gana si llueve. Los mov. tipo Fuego le hacen un 25% más de daño, y los de agua le recuperan un 25% de sus PS.",
		shortDesc: "Cada turno pierde 1/8 de sus PS si hace sol, y los gana si llueve. Los mov. tipo Fuego le hacen un 25% más de daño, y los de agua le recuperan un 25% de sus PS.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "#aftermath",
	},
	earlybird: {
		name: "Madrugar",
		shortDesc: "Si el Pokémon se duerme, tardará la mitad de turnos en despertarse. En caso de ser un número impar de turnos, se redondea a la baja.",
	},
	eartheater: {
		name: "Geofagia",
		desc: "Si lo alcanza un movimiento de tipo Tierra, recupera PS en vez de sufrir daño.",
		shortDesc: "Si lo alcanza un movimiento de tipo Tierra, recupera PS en vez de sufrir daño.",
	},
	eelevate: {
		name: "Impulso Anguila",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	effectspore: {
		name: "Efecto Espora",
		// Official flavor text: "Puede dormir, envenenar o paralizar al Pokémon con el que entre en contacto al recibir un ataque."
		desc: "Hay un 30% de probabilidad de dormir, envenenar o paralizar al Pokémon rival con el que entre en contacto al recibir un ataque.",
		shortDesc: "Hay un 30% de probabilidad de dormir, envenenar o paralizar al Pokémon rival con el que entre en contacto al recibir un ataque.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	electricsurge: {
		name: "Electrogénesis",
		shortDesc: "Crea un campo eléctrico al entrar en combate.",
	},
	electromorphosis: {
		name: "Dinamo",
		shortDesc: "Su cuerpo se carga de electricidad al recibir daño, lo que potencia su siguiente movimiento de tipo Eléctrico.",

		start: "  ¡{POKEMON} se ha cargado de electricidad gracias a {MOVE}!",
	},
	embodyaspectcornerstone: {
		name: "Evocarrecuerdos (Cimiento)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION

		boost: "  ¡{POKEMON} ha hecho brillar la Máscara Cimiento y ha aumentado su Defensa!",
	},
	embodyaspecthearthflame: {
		name: "Evocarrecuerdos (Horno)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION

		boost: "  ¡{POKEMON} ha hecho brillar la Máscara Horno y ha aumentado su Ataque!",
	},
	embodyaspectteal: {
		name: "Evocarrecuerdos (Turquesa)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION

		boost: "  ¡{POKEMON} ha hecho brillar la Máscara Turquesa y ha aumentado su Velocidad!",
	},
	embodyaspectwellspring: {
		name: "Evocarrecuerdos (Fuente)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION

		boost: "  ¡{POKEMON} ha hecho brillar la Máscara Fuente y ha aumentado su Defensa Especial!",
	},
	emergencyexit: {
		name: "Retirada",
		// Official flavor text: "Abandona el terreno de combate cuando sus PS se ven reducidos a la mitad para evitar males mayores."
		desc: "Abandona el terreno de combate luego de usar un movimiento de tipo Bicho.",
		shortDesc: "Abandona el terreno de combate luego de usar un movimiento de tipo Bicho.",
	},
	fairyaura: {
		name: "Aura Feérica",
		// Official flavor text: "Aumenta la potencia de todos los movimientos de tipo Hada."
		desc: "Aumenta la potencia de todos los movimientos de tipo Hada en 1/3.",
		shortDesc: "Aumenta la potencia de todos los movimientos de tipo Hada en 1/3.",

		start: "  ¡{POKEMON} irradia un aura feérica!",
	},
	filter: {
		name: "Filtro",
		shortDesc: "Mitiga el daño que le infligen los movimientos supereficaces, reduciéndolos a 3/4 del daño inicial.",
	},
	firemane: {
		name: "Crin de Fuego",
		shortDesc: null, // NEEDS TRANSLATION
	},
	flamebody: {
		name: "Cuerpo Llama",
		shortDesc: "Si un Pokémon lo ataca con un ataque de contacto, tiene un 30% de probabilidad de resultar quemado.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flareboost: {
		name: "Ímpetu Ardiente",
		// Official flavor text: "Aumenta la potencia de sus ataques especiales cuando sufre quemaduras."
		desc: "Aumenta la potencia de los ataques especiales en un 50% cuando el Pokémon sufre quemaduras.",
		shortDesc: "Aumenta la potencia de los ataques especiales en un 50% cuando el Pokémon sufre quemaduras.",
	},
	flashfire: {
		name: "Absorbe Fuego",
		// Official flavor text: "Si le alcanza algún movimiento de tipo Fuego, potencia sus propios movimientos de dicho tipo."
		desc: "Si le alcanza un movimiento de tipo Fuego, éste no le afecta y potencia en un 50% sus ataques de fuego. También funciona con movs. de estado.",
		shortDesc: "Si le alcanza un movimiento de tipo Fuego, éste no le afecta y potencia en un 50% sus ataques de fuego. También funciona con movs. de estado.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡La potencia de los movimientos de tipo Fuego de {POKEMON} ha aumentado!",
	},
	flowergift: {
		name: "Don Floral",
		// Official flavor text: "Si hace sol, aumenta su Ataque y su Defensa Especial, así como los de sus aliados."
		desc: "Aumenta el Ataque y la Defensa Especial de todos los Pokémon del equipo en combate si hace sol.",
		shortDesc: "Aumenta el Ataque y la Defensa Especial de todos los Pokémon del equipo en combate si hace sol.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flowerveil: {
		name: "Velo Flor",
		// Official flavor text: "Evita que los Pokémon de tipo Planta aliados sufran problemas de estado o que les bajen sus características."
		desc: "Evita que los Pokémon de tipo Planta aliados sufran problemas de estado o que bajen sus características.",
		shortDesc: "Evita que los Pokémon de tipo Planta aliados sufran problemas de estado o que bajen sus características.",

		block: "  ¡Velo Flor ha protegido a {POKEMON}!",
	},
	fluffy: {
		name: "Peluche",
		// Official flavor text: "Reduce a la mitad el daño provocado por los movimientos de contacto, pero duplica el infligido por los de tipo Fuego."
		desc: "Reduce a la mitad el daño provocado por los movimientos de contacto, pero duplica el infligido por los de tipo Fuego.",
		shortDesc: "Reduce a la mitad el daño provocado por los movimientos de contacto, pero duplica el infligido por los de tipo Fuego.",
	},
	forecast: {
		name: "Predicción",
		// Official flavor text: "Cambia a tipo Agua, Fuego o Hielo en función del tiempo atmosférico."
		desc: "Cambia a tipo Agua, Fuego o Hielo en función del tiempo atmosférico. Si éste deja de ejercer efecto cambia a tipo Normal.",
		shortDesc: "Cambia a tipo Agua, Fuego o Hielo en función del tiempo atmosférico. Si éste deja de ejercer efecto cambia a tipo Normal.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	forewarn: {
		name: "Alerta",
		// Official flavor text: "Indica el movimiento más potente del rival al entrar en combate."
		desc: "Determina el movimiento más potente del rival al entrar en combate.",
		shortDesc: "Determina el movimiento más potente del rival al entrar en combate.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡Se ha detectado el movimiento {MOVE} de {TARGET}!",
		activateNoTarget: "  ¡Alerta de {POKEMON} detectó {MOVE}!",
	},
	friendguard: {
		name: "Compiescolta",
		shortDesc: "Reduce el daño que sufren los aliados en combate en un 25%, pero no el propio.",
	},
	frisk: {
		name: "Cacheo",
		shortDesc: "El Pokémon puede ver el objeto que lleva el rival al entrar en combate.",
		gen5: {
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha cacheado a {TARGET} y ha hallado {ITEM:indefinite:classified}!",
		activateNoTarget: "  ¡{POKEMON} ha cacheado a su rival y ha encontrado {ITEM}!",
	},
	fullmetalbody: {
		name: "Guardia Metálica",
		shortDesc: "Evita que bajen sus características a causa de movimientos o habilidades de otros Pokémon.",
	},
	furcoat: {
		name: "Pelaje Recio",
		shortDesc: "Reduce a la mitad el daño recibido por ataques físicos del rival o que actúen sobre la defensa del usuario.",
	},
	galewings: {
		name: "Alas Vendaval",
		shortDesc: "Da prioridad a los movimientos de tipo Volador si los PS del usuario están al máximo.",
		gen6: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	galvanize: {
		name: "Piel Eléctrica",
		// Official flavor text: "Convierte los movimientos de tipo Normal en tipo Eléctrico y aumenta ligeramente su potencia."
		desc: "Convierte los movimientos de tipo Normal en tipo Eléctrico y aumenta su potencia en un 20%.",
		shortDesc: "Convierte los movimientos de tipo Normal en tipo Eléctrico y aumenta su potencia en un 20%.",
	},
	gluttony: {
		name: "Gula",
		// Official flavor text: "Cuando sus PS se ven reducidos a la mitad, engulle la baya que normalmente solo se comería cuando le quedasen pocos PS."
		desc: "El Pokémon utilizará las bayas que se consumen con un 25% o menos de sus PS máximos cuando le queden un 50% o menos de sus PS máximos.",
		shortDesc: "El Pokémon utilizará las bayas que se consumen con un 25% o menos de sus PS máximos cuando le queden un 50% o menos de sus PS máximos.",
	},
	goodasgold: {
		name: "Cuerpo Áureo",
		shortDesc: "Su robusto cuerpo de oro inoxidable lo hace inmune frente a movimientos de estado de otros Pokémon.",
	},
	gooey: {
		name: "Baba",
		shortDesc: "Baja la Velocidad del rival en un nivel cuando este ataca al Pokémon con un movimiento de contacto.",
	},
	gorillatactics: {
		name: "Monotema",
		// Official flavor text: "Potencia su Ataque, pero solo puede usar el primer movimiento escogido."
		desc: "Potencia su Ataque en un 50%, pero solo puede usar el primer movimiento escogido.",
		shortDesc: "Potencia su Ataque en un 50%, pero solo puede usar el primer movimiento escogido.",
	},
	grasspelt: {
		name: "Manto Frondoso",
		shortDesc: "Aumenta la Defensa en un 50% si hay un campo de hierba en el terreno de combate.",
	},
	grassysurge: {
		name: "Herbogénesis",
		shortDesc: "Crea un campo de hierba al entrar en combate.",
	},
	grimneigh: {
		name: "Relincho Negro",
		// Official flavor text: "Al derrotar a un objetivo, emite un relincho aterrador y aumenta su Ataque Especial."
		desc: "Sube un nivel su Ataque Especial al derrotar a un Pokémon.",
		shortDesc: "Sube un nivel su Ataque Especial al derrotar a un Pokémon.",
	},
	guarddog: {
		name: "Perro Guardián",
		desc: "Aumenta su Ataque si sufre los efectos de Intimidación. También anula movimientos y objetos que fuercen el cambio de Pokémon.",
		shortDesc: "Aumenta su Ataque si sufre los efectos de Intimidación. También anula movimientos y objetos que fuercen el cambio de Pokémon.",
	},
	gulpmissile: {
		name: "Tragamisil",
		// Official flavor text: "Tras usar Surf o Buceo, emerge con una presa en la boca. Al recibir daño, ataca escupiéndola al rival."
		desc: "Tras usar Surf o Buceo, si tiene más del 50% de sus PS máximos pasa a su forma tragatodo, mientras que si tiene menos pasa a su forma engulletodo.",
		shortDesc: "Tras usar Surf o Buceo, si tiene más del 50% de sus PS máximos pasa a su forma tragatodo, mientras que si tiene menos pasa a su forma engulletodo.",
	},
	guts: {
		name: "Agallas",
		// Official flavor text: "Si sufre un problema de estado, se viene arriba y aumenta su Ataque."
		desc: "Si sufre un problema de estado, aumenta su Ataque en un 50%, ignorando la reducción de Ataque en caso de estar quemado.",
		shortDesc: "Si sufre un problema de estado, aumenta su Ataque en un 50%, ignorando la reducción de Ataque en caso de estar quemado.",
	},
	hadronengine: {
		name: "Motor Hadrónico",
		shortDesc: "Crea un campo eléctrico al entrar en combate. Si hay un campo eléctrico, su Ataque Especial aumenta gracias a su motor futurista.",

		start: "  ¡{POKEMON} crea un campo eléctrico que impulsa su motor futurista!",
		activate: "  ¡El campo eléctrico impulsa el motor futurista de {POKEMON}!",
	},
	harvest: {
		name: "Cosecha",
		// Official flavor text: "Puede reutilizar varias veces una misma baya."
		desc: "El Pokémon tiene un 50% de probabilidad de recuperar la baya usada en combate al final de cada turno. Con clima soleado la recupera siempre.",
		shortDesc: "El Pokémon tiene un 50% de probabilidad de recuperar la baya usada en combate al final de cada turno. Con clima soleado la recupera siempre.",

		addItem: "  ¡{POKEMON} ha recogido {ITEM:indefinite}!",
	},
	healer: {
		name: "Alma Cura",
		// Official flavor text: "A veces cura los problemas de estado de un aliado."
		desc: "Al final de cada turno tiene una probabilidad del 30% de curar los problemas de estado de un compañero Pokémon en combate.",
		shortDesc: "Al final de cada turno tiene una probabilidad del 30% de curar los problemas de estado de un compañero Pokémon en combate.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	heatproof: {
		name: "Ignífugo",
		// Official flavor text: "Su cuerpo, resistente al calor, reduce a la mitad el daño recibido por movimientos de tipo Fuego."
		desc: "Reduce a la mitad el daño recibido por movimientos de tipo Fuego. Si está quemado perderá cada turno 1/32 de sus PS máximos en lugar de 1/16.",
		shortDesc: "Reduce a la mitad el daño recibido por movimientos de tipo Fuego. Si está quemado perderá cada turno 1/32 de sus PS máximos en lugar de 1/16.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	heavymetal: {
		name: "Metal Pesado",
		// Official flavor text: "Duplica su peso."
		desc: "Duplica el peso del Pokémon, lo cual afecta a los movimientos tanto propios como del rival que se basan en el peso.",
		shortDesc: "Duplica el peso del Pokémon, lo cual afecta a los movimientos tanto propios como del rival que se basan en el peso.",
	},
	honeygather: {
		name: "Recogemiel",
		shortDesc: "Es posible que el Pokémon encuentre Miel una vez concluido el combate. La probabilidad aumenta según aumenta el nivel del Pokémon.",
	},
	hospitality: {
		name: "Hospitalidad",
		shortDesc: "Al entrar en combate, restaura algunos PS de su aliado como muestra de hospitalidad.",

		heal: "  ¡{POKEMON} se ha bebido el té que ha preparado {SOURCE}!",
	},
	hugepower: {
		name: "Potencia",
		shortDesc: "Duplica la estadística de Ataque del Pokémon, por lo que sólo afecta a ataques físicos.",
	},
	hungerswitch: {
		name: "Mutapetito",
		// Official flavor text: "Alterna entre su Forma Saciada y Forma Voraz al final de cada turno."
		desc: "Alterna entre su Forma Saciada y Forma Voraz al final de cada turno, cambiando el tipo del movimiento Rueda aural.",
		shortDesc: "Alterna entre su Forma Saciada y Forma Voraz al final de cada turno, cambiando el tipo del movimiento Rueda aural.",
	},
	hustle: {
		name: "Entusiasmo",
		// Official flavor text: "Aumenta su Ataque, pero reduce su Precisión."
		desc: "Aumenta el Ataque o Ataque Especial del usuario en un 50%, pero reduce la Precisión de los movimientos ofensivos en un 20%. Los movs. de estado no se ven afectados.",
		shortDesc: "Aumenta el Ataque o Ataque Especial del usuario en un 50%, pero reduce la Precisión de los movimientos ofensivos en un 20%. Los movs. de estado no se ven afectados.",
	},
	hydration: {
		name: "Hidratación",
		// Official flavor text: "Cura los problemas de estado si está lloviendo."
		desc: "Al final de cada turno cura los problemas de estado del Pokémon si está lloviendo.",
		shortDesc: "Al final de cada turno cura los problemas de estado del Pokémon si está lloviendo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hypercutter: {
		name: "Corte Fuerte",
		shortDesc: "Evita que el rival le baje el Ataque. Reduciones por ataques propios o por los movimientos Cambia fuerza, Cambia almas e Isofuerta sí tienen efecto.",
	},
	icebody: {
		name: "Gélido",
		// Official flavor text: "Recupera PS de forma gradual cuando hay tormentas de granizo."
		desc: "Recupera 1/16 de sus PS máximos al final de cada turno cuando hay tormentas de granizo.",
		shortDesc: "Recupera 1/16 de sus PS máximos al final de cada turno cuando hay tormentas de granizo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	iceface: {
		name: "Cara de Hielo",
		// Official flavor text: "Absorbe el daño de un ataque físico con el hielo de la cabeza, tras lo cual cambia de forma. El hielo se regenerará la próxima vez que granice."
		desc: "Si recibe un ataque físico del rival o suyo por confusión cambiará a su forma cara deshielo. Recupera su anterior forma una vez si graniza.",
		shortDesc: "Si recibe un ataque físico del rival o suyo por confusión cambiará a su forma cara deshielo. Recupera su anterior forma una vez si graniza.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	icescales: {
		name: "Escama de Hielo",
		shortDesc: "Las gélidas escamas que protegen su cuerpo reducen a la mitad el daño que le infligen los ataques especiales.",
	},
	illuminate: {
		name: "Iluminación",
		// Official flavor text: "Aumenta la probabilidad de encontrar Pokémon al iluminar el entorno."
		desc: "Al entrar en combate baja la precisión de los rivales en un nivel. Fuera de combate aumenta la probabilidad de encontrar Pokémon salvajes.",
		shortDesc: "Al entrar en combate baja la precisión de los rivales en un nivel. Fuera de combate aumenta la probabilidad de encontrar Pokémon salvajes.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	illusion: {
		name: "Ilusión",
		// Official flavor text: "Adopta el aspecto del último Pokémon del equipo al entrar en combate para desconcertar al rival."
		desc: "Adopta el aspecto del último Pokémon del equipo al entrar en combate para desconcertar al rival.",
		shortDesc: "Adopta el aspecto del último Pokémon del equipo al entrar en combate para desconcertar al rival.",

		end: "  ¡La ilusión de {POKEMON} se ha desvanecido!",
	},
	immunity: {
		name: "Inmunidad",
		shortDesc: "Su sistema inmunitario evita el envenenamiento. Si un Pokémon con esta habilidad es envenenado, la baya se activa antes que la habilidad.",
	},
	imposter: {
		name: "Impostor",
		// Official flavor text: "Se transforma en el Pokémon que tiene enfrente."
		desc: "El Pokémon se transforma en el que tiene enfrente, copiando todos sus stats a excepción de los PS.",
		shortDesc: "El Pokémon se transforma en el que tiene enfrente, copiando todos sus stats a excepción de los PS.",
	},
	infiltrator: {
		name: "Allanamiento",
		// Official flavor text: "Ataca sorteando la barrera o el sustituto del rival."
		desc: "Ataca rodeando la barrera o el sustituto del rival.",
		shortDesc: "Ataca rodeando la barrera o el sustituto del rival.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	innardsout: {
		name: "Revés",
		// Official flavor text: "Al caer debilitado, inflige al rival un daño equivalente a los PS que le quedaran."
		desc: "Al caer debilitado, inflige al rival un daño equivalente a los PS que le quedaban. No se activa cuando es debilitado por daño indirecto.",
		shortDesc: "Al caer debilitado, inflige al rival un daño equivalente a los PS que le quedaban. No se activa cuando es debilitado por daño indirecto.",

		damage: "#aftermath",
	},
	innerfocus: {
		name: "Fuerza Mental",
		// Official flavor text: "Gracias a su profunda concentración, no se amedrenta ante los ataques del rival."
		desc: "Gracias a su profunda concentración, no puede ser amedrentado por los ataques del rival. También evita ser intimidado.",
		shortDesc: "Gracias a su profunda concentración, no puede ser amedrentado por los ataques del rival. También evita ser intimidado.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	insomnia: {
		name: "Insomnio",
		shortDesc: "Su resistencia al sueño le impide quedarse dormido. También le impide el uso de Descanso. Si un Pokémon dormido adquiere esta habilidad, se despertará.",
	},
	intimidate: {
		name: "Intimidación",
		// Official flavor text: "Al entrar en combate amilana al rival de tal manera que su Ataque disminuye."
		desc: "Al entrar en combate amilana al rival de tal manera que su Ataque disminuye un nivel.",
		shortDesc: "Al entrar en combate amilana al rival de tal manera que su Ataque disminuye un nivel.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
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
	intrepidsword: {
		name: "Espada Indómita",
		shortDesc: "Aumenta el Ataque del usuario en un nivel la primera vez que entra en combate.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ironbarbs: {
		name: "Punta Acero",
		// Official flavor text: "Inflige daño al rival si este le golpea con un movimiento de contacto."
		desc: "Inflige al rival 1/8 de sus PS máximos de daño si este golpea al Pokémon con un movimiento de contacto.",
		shortDesc: "Inflige al rival 1/8 de sus PS máximos de daño si este golpea al Pokémon con un movimiento de contacto.",

		damage: "#roughskin",
	},
	ironfist: {
		name: "Puño Férreo",
		// Official flavor text: "Aumenta la potencia de los puñetazos."
		desc: "Aumenta la potencia de los movimientos basados en puños en un 20%.",
		shortDesc: "Aumenta la potencia de los movimientos basados en puños en un 20%.",
	},
	justified: {
		name: "Justiciero",
		shortDesc: "Si le alcanza un movimiento de tipo Siniestro, aumenta en un nivel el Ataque debido a su integridad.",
	},
	keeneye: {
		name: "Vista Lince",
		// Official flavor text: "Su aguda vista evita que le disminuya la Precisión."
		desc: "La aguda vista de este Pokémon evita que disminuya su Precisión. También ignora aumentos de evasión del Pokémon rival.",
		shortDesc: "La aguda vista de este Pokémon evita que disminuya su Precisión. También ignora aumentos de evasión del Pokémon rival.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	klutz: {
		name: "Zoquete",
		// Official flavor text: "No puede usar objetos equipados."
		desc: "El Pokémon no puede usar objetos equipados, y anula su efecto. También afecta al uso de lanzamiento. Los objetos que afectan exp. y dinero funcionan.",
		shortDesc: "El Pokémon no puede usar objetos equipados, y anula su efecto. También afecta al uso de lanzamiento. Los objetos que afectan exp. y dinero funcionan.",
	},
	leafguard: {
		name: "Defensa Hoja",
		// Official flavor text: "Evita los problemas de estado si hace sol."
		desc: "Evita los problemas de estado si hace sol, al igual que no puede usar descanso o no se activan los objetos llamasfera y toxisfera.",
		shortDesc: "Evita los problemas de estado si hace sol, al igual que no puede usar descanso o no se activan los objetos llamasfera y toxisfera.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	levitate: {
		name: "Levitación",
		// Official flavor text: "Su capacidad de flotar sobre el suelo le proporciona inmunidad frente a los movimientos de tipo Tierra."
		desc: "Su capacidad de flotar sobre el suelo le proporciona inmunidad frente a los movimientos de tipo Tierra.",
		shortDesc: "Su capacidad de flotar sobre el suelo le proporciona inmunidad frente a los movimientos de tipo Tierra.",
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
	},
	libero: {
		name: "Líbero",
		// Official flavor text: "Cambia su tipo al del movimiento que va a usar."
		desc: "Cambia el tipo del poseedor al del movimiento a usar antes de ejecutarlo, incluso aunque el movimiento falle.",
		shortDesc: "Cambia el tipo del poseedor al del movimiento a usar antes de ejecutarlo, incluso aunque el movimiento falle.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	lightmetal: {
		name: "Metal Liviano",
		// Official flavor text: "Reduce a la mitad su peso."
		desc: "Reduce a la mitad el peso del Pokémon, lo cual afecta a los movimientos tanto propios como del rival que se basan en el peso.",
		shortDesc: "Reduce a la mitad el peso del Pokémon, lo cual afecta a los movimientos tanto propios como del rival que se basan en el peso.",
	},
	lightningrod: {
		name: "Pararrayos",
		// Official flavor text: "Atrae y neutraliza los movimientos de tipo Eléctrico, que además le suben el Ataque Especial."
		desc: "Además de atraer y neutralizar los movimientos de tipo Eléctrico, se sube un nivel el Ataque Especial, incluso aunque el Pokémon sea tipo Tierra.",
		shortDesc: "Además de atraer y neutralizar los movimientos de tipo Eléctrico, se sube un nivel el Ataque Especial, incluso aunque el Pokémon sea tipo Tierra.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha atraído el ataque!",
	},
	limber: {
		name: "Flexibilidad",
		shortDesc: "Evita ser paralizado gracias a la flexibilidad de su cuerpo.",
	},
	lingeringaroma: {
		name: "Olor Persistente",
		desc: "Contagia la habilidad Olor Persistente al Pokémon que lo ataque con un movimiento de contacto.",
		shortDesc: "Contagia la habilidad Olor Persistente al Pokémon que lo ataque con un movimiento de contacto.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  ¡Un olor persistente impregna a {TARGET}!",
	},
	liquidooze: {
		name: "Lodo Líquido",
		shortDesc: "Hiere a los Pokémon que intentan drenarle los PS. Estos pierden tantos PS como los que hubiesen absorbido. No afecta a Comesueños.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  ¡{POKEMON} ha absorbido la secreción viscosa tóxica!",
	},
	liquidvoice: {
		name: "Voz Fluida",
		// Official flavor text: "Hace que todos sus movimientos que usan sonido pasen a ser de tipo Agua."
		desc: "Hace que todos los movimientos del Pokémon basados en sonido pasen a ser de tipo Agua y los potencia en un 20%. Los movimientos de estado también se activan.",
		shortDesc: "Hace que todos los movimientos del Pokémon basados en sonido pasen a ser de tipo Agua y los potencia en un 20%. Los movimientos de estado también se activan.",
	},
	longreach: {
		name: "Remoto",
		shortDesc: "Permite usar cualquier movimiento sin entrar en contacto con el rival.",
	},
	magicbounce: {
		name: "Espejo Mágico",
		// Official flavor text: "Puede devolver los movimientos de estado lanzados por el rival, sin verse afectado por ellos."
		desc: "Permite devolver los ataques de estado lanzados por el rival, sin verse afectado por ellos.",
		shortDesc: "Permite devolver los ataques de estado lanzados por el rival, sin verse afectado por ellos.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		move: "#magiccoat",
	},
	magicguard: {
		name: "Muro Mágico",
		// Official flavor text: "Solo recibe daño de ataques."
		desc: "El Pokémon solo recibe daño de ataques directos. No recibe daño indirecto de ataques, habilidades u objetos, ni puede ser atrapado por movimientos.",
		shortDesc: "El Pokémon solo recibe daño de ataques directos. No recibe daño indirecto de ataques, habilidades u objetos, ni puede ser atrapado por movimientos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	magician: {
		name: "Prestidigitador",
		// Official flavor text: "Roba el objeto del Pokémon al que alcance con un movimiento."
		desc: "Roba el objeto del Pokémon al que alcance con un movimiento de daño directo. No lo hace con ciertos objetos o habilidades.",
		shortDesc: "Roba el objeto del Pokémon al que alcance con un movimiento de daño directo. No lo hace con ciertos objetos o habilidades.",
	},
	magmaarmor: {
		name: "Escudo Magma",
		shortDesc: "Gracias al magma candente que lo envuelve, evita la congelación. Fuera de combate reduce a la mitad los pasos para eclosionar huevos.",
	},
	magnetpull: {
		name: "Imán",
		// Official flavor text: "Su magnetismo atrae a los Pokémon de tipo Acero y les impide huir."
		desc: "Evita que el enemigo huya o sea cambiado por otro si es de tipo Acero, salvo que lleve equipado Muda concha o use un movimiento de cambio.",
		shortDesc: "Evita que el enemigo huya o sea cambiado por otro si es de tipo Acero, salvo que lleve equipado Muda concha o use un movimiento de cambio.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
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
	},
	marvelscale: {
		name: "Escama Especial",
		shortDesc: "Sube la Defensa del poseedor en un 50% si este sufre un problema de estado.",
	},
	megalauncher: {
		name: "Megadisparador",
		// Official flavor text: "Aumenta la potencia de algunos movimientos de pulsos y auras."
		desc: "Aumenta la potencia de los movimientos de pulsos y auras en un 50%.",
		shortDesc: "Aumenta la potencia de los movimientos de pulsos y auras en un 50%.",
	},
	megasol: {
		name: "Megasolar",
		shortDesc: null, // NEEDS TRANSLATION
	},
	merciless: {
		name: "Ensañamiento",
		shortDesc: "Hace que los movimientos asesten siempre un golpe crítico si el rival está envenenado.",
	},
	mimicry: {
		name: "Mimetismo",
		// Official flavor text: "Cambia su tipo según el campo que haya en el terreno de combate."
		desc: "Cambia el tipo del Pokémon según el campo que haya en el terreno de combate. Si se acaba el campo recupera su anterior tipo.",
		shortDesc: "Cambia el tipo del Pokémon según el campo que haya en el terreno de combate. Si se acaba el campo recupera su anterior tipo.",

		activate: "  ¡{POKEMON} ha recobrado su tipo original!",
	},
	mindseye: {
		name: "Ojo Mental",
		desc: "Alcanza a Pokémon de tipo Fantasma con movimientos de tipo Normal o Lucha. Su Precisión no se puede reducir e ignora los cambios en la Evasión del objetivo.",
		shortDesc: "Alcanza a Pokémon de tipo Fantasma con movimientos de tipo Normal o Lucha. Su Precisión no se puede reducir e ignora los cambios en la Evasión del objetivo.",
	},
	minus: {
		name: "Menos",
		// Official flavor text: "Potencia su Ataque Especial si un Pokémon aliado tiene la habilidad Más o Menos."
		desc: "Potencia el Ataque Especial un 50% si un Pokémon aliado tiene la habilidad Más o Menos.",
		shortDesc: "Potencia el Ataque Especial un 50% si un Pokémon aliado tiene la habilidad Más o Menos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	mirrorarmor: {
		name: "Coraza Reflejo",
		// Official flavor text: "Refleja los efectos que reducen las características."
		desc: "Devuelve los efectos de habilidades o movimientos que reducen las características al Pokémon que los provoque.",
		shortDesc: "Devuelve los efectos de habilidades o movimientos que reducen las características al Pokémon que los provoque.",
	},
	mistysurge: {
		name: "Nebulogénesis",
		shortDesc: "Crea un campo de niebla al entrar en combate.",
	},
	moldbreaker: {
		name: "Rompemoldes",
		// Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
		desc: "Las habilidades del objetivo no afectan al daño o efectos de los movimientos empleados.",
		shortDesc: "Las habilidades del objetivo no afectan al daño o efectos de los movimientos empleados.",
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

		start: "  ¡{POKEMON} rompe el molde!",
	},
	moody: {
		name: "Veleta",
		// Official flavor text: "Una característica le sube mucho en cada turno, pero le baja otra."
		desc: "Cada turno sube dos niveles una característica del Pokémon al azar, pero a costa de bajar un nivel otra también al azar.",
		shortDesc: "Cada turno sube dos niveles una característica del Pokémon al azar, pero a costa de bajar un nivel otra también al azar.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	motordrive: {
		name: "Electromotor",
		// Official flavor text: "Si le alcanza un movimiento de tipo Eléctrico, le sube la Velocidad en vez de sufrir daño."
		desc: "Si le alcanza un movimiento tipo Eléctrico, aumenta un nivel la Velocidad y no sufre daño. No afecta a Poder oculto, Don natural y Sentencia.",
		shortDesc: "Si le alcanza un movimiento tipo Eléctrico, aumenta un nivel la Velocidad y no sufre daño. No afecta a Poder oculto, Don natural y Sentencia.",
	},
	moxie: {
		name: "Autoestima",
		// Official flavor text: "Al debilitar a un objetivo, su confianza se refuerza de tal manera que aumenta su Ataque."
		desc: "Al debilitar a un objetivo, su confianza se refuerza de tal manera que aumenta en un nivel el Ataque.",
		shortDesc: "Al debilitar a un objetivo, su confianza se refuerza de tal manera que aumenta en un nivel el Ataque.",
	},
	multiscale: {
		name: "Multiescamas",
		shortDesc: "Reduce el daño sufrido a la mitad si los PS están al máximo. No afecta a movimientos de daño fijo como por ejemplo Furia Dragón o Contraataque.",
	},
	multitype: {
		name: "Multitipo",
		shortDesc: "Cambia el tipo del Pokémon al de la tabla o cristal Z que lleve equipado.",
		gen7: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mummy: {
		name: "Momia",
		// Official flavor text: "Contagia la habilidad Momia al rival que entre en contacto con él."
		desc: "Contagia la habilidad Momia al rival que entre en contacto con él.",
		shortDesc: "Contagia la habilidad Momia al rival que entre en contacto con él.",
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

		changeAbility: "  ¡La habilidad de {TARGET} es ahora Momia!",
	},
	myceliummight: {
		name: "Poder Fúngico",
		desc: "El Pokémon siempre actúa con lentitud cuando usa movimientos de estado, pero estos no se ven afectados por la habilidad del objetivo.",
		shortDesc: "El Pokémon siempre actúa con lentitud cuando usa movimientos de estado, pero estos no se ven afectados por la habilidad del objetivo.",
	},
	naturalcure: {
		name: "Cura Natural",
		shortDesc: "Cura problemas de estado al cambiar de Pokémon. También ocurre al finalizar el combate.",

		activate: null, // NEEDS TRANSLATION
	},
	neuroforce: {
		name: "Fuerza Cerebral",
		// Official flavor text: "Potencia los ataques supereficaces."
		desc: "Potencia los ataques supereficaces en un 25%.",
		shortDesc: "Potencia los ataques supereficaces en un 25%.",
	},
	neutralizinggas: {
		name: "Gas Reactivo",
		// Official flavor text: "Anula los efectos de las habilidades de los demás Pokémon presentes mientras esté en el terreno de combate."
		desc: "Anula las habilidades de los Pokémon en el campo de batalla. Al cambiar o caer debilitado se activan todas de nuevo.",
		shortDesc: "Anula las habilidades de los Pokémon en el campo de batalla. Al cambiar o caer debilitado se activan todas de nuevo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡Un gas reactivo se propaga por toda la zona!",
		end: "  El gas reactivo se ha disipado.",
	},
	noguard: {
		name: "Indefenso",
		shortDesc: "Todos los movimientos acertarán siempre, tanto del Pokémon como del rival.",
	},
	normalize: {
		name: "Normalidad",
		// Official flavor text: "Hace que todos sus movimientos se vuelvan de tipo Normal y aumenten ligeramente su potencia."
		desc: "Todos sus movs. son tipo Normal y aumentan su potencia en un 20%. No afecta a Pod. oculto, Metereobola, Don natural, Sentencia, Tecno shock y Multiat.",
		shortDesc: "Todos sus movs. son tipo Normal y aumentan su potencia en un 20%. No afecta a Pod. oculto, Metereobola, Don natural, Sentencia, Tecno shock y Multiat.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	oblivious: {
		name: "Despiste",
		// Official flavor text: "Su indiferencia evita que sea provocado o caiga presa del enamoramiento."
		desc: "La indiferencia del Pokémon evita que caiga presa del enamoramiento o sea provocado. También evita que sea afectado por Mofa o Intimidación.",
		shortDesc: "La indiferencia del Pokémon evita que caiga presa del enamoramiento o sea provocado. También evita que sea afectado por Mofa o Intimidación.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	opportunist: {
		name: "Oportunista",
		shortDesc: "Copia las mejoras en las características del rival, aprovechándose de la situación.",
	},
	orichalcumpulse: {
		name: "Latido Oricalco",
		shortDesc: "El tiempo pasa a ser soleado cuando entra en combate. Si hace mucho sol, su Ataque aumenta gracias a su pulso primigenio.",

		start: "  ¡{POKEMON} intensifica el brillo del sol y desata su pulso primigenio!",
		activate: "  ¡{POKEMON} recibe los rayos del sol y desata su pulso primigenio!",
	},
	overcoat: {
		name: "Funda",
		// Official flavor text: "No le afectan las tormentas de arena, el granizo y los movimientos con polvos."
		desc: "Protege al Pokémon de las tormentas de arena, el granizo y los movimientos basados en polvos y esporas.",
		shortDesc: "Protege al Pokémon de las tormentas de arena, el granizo y los movimientos basados en polvos y esporas.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	overgrow: {
		name: "Espesura",
		// Official flavor text: "Potencia sus movimientos de tipo Planta cuando le quedan pocos PS."
		desc: "Potencia los movimientos de tipo Planta del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
		shortDesc: "Potencia los movimientos de tipo Planta del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	owntempo: {
		name: "Ritmo Propio",
		// Official flavor text: "Como le gusta hacer las cosas a su manera, los rivales no logran confundirlo."
		desc: "Evita que el Pokémon sea confundido, incluso cuando es causado por sus propios movimientos. También evita ser afectado por intimidación.",
		shortDesc: "Evita que el Pokémon sea confundido, incluso cuando es causado por sus propios movimientos. También evita ser afectado por intimidación.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	parentalbond: {
		name: "Amor Filial",
		// Official flavor text: "Une fuerzas con su cría y ataca dos veces."
		desc: "El Pokémon ataca dos veces por turno si usa movimientos de daño, siendo la potencia del segundo un 25% de la del primero.",
		shortDesc: "El Pokémon ataca dos veces por turno si usa movimientos de daño, siendo la potencia del segundo un 25% de la del primero.",
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
	},
	pastelveil: {
		name: "Velo Pastel",
		// Official flavor text: "Se protege a sí mismo y a sus aliados del envenenamiento."
		desc: "Se protege a sí mismo y a sus aliados del envenenamiento. Al entrar en combate cura del veneno a los aliados.",
		shortDesc: "Se protege a sí mismo y a sus aliados del envenenamiento. Al entrar en combate cura del veneno a los aliados.",
	},
	perishbody: {
		name: "Cuerpo Mortal",
		// Official flavor text: "Si le alcanza un movimiento de contacto, se debilitará al cabo de 3 turnos, así como su agresor, a menos que abandonen el terreno de combate."
		desc: "Al ser alcanzado por un movimiento de contacto, tanto el atacante como el Pokémon usuario de la habilidad caerán debilitados tras haber pasado 3 turnos.",
		shortDesc: "Al ser alcanzado por un movimiento de contacto, tanto el atacante como el Pokémon usuario de la habilidad caerán debilitados tras haber pasado 3 turnos.",

		start: "  ¡Ambos Pokémon se debilitarán dentro de tres turnos!",
	},
	pickpocket: {
		name: "Hurto",
		// Official flavor text: "Si el rival usa un movimiento de contacto al atacar, le roba el objeto."
		desc: "Si el rival usa un movimiento de contacto al atacar, le roba el objeto si no lleva ya uno equipado. No afecta con ciertos objetos o habilidades.",
		shortDesc: "Si el rival usa un movimiento de contacto al atacar, le roba el objeto si no lleva ya uno equipado. No afecta con ciertos objetos o habilidades.",
	},
	pickup: {
		name: "Recogida",
		// Official flavor text: "Puede recoger objetos que el rival haya usado, o bien otros que encuentre en plena aventura."
		desc: "Tras un combate tiene un 10% de probabilidad de encontrar un objeto. Si un Pokémon aliado o enemigo pierde un objeto en combate, también lo recogerá.",
		shortDesc: "Tras un combate tiene un 10% de probabilidad de encontrar un objeto. Si un Pokémon aliado o enemigo pierde un objeto en combate, también lo recogerá.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		addItem: "#recycle",
	},
	piercingdrill: {
		name: "Turbotaladro",
		shortDesc: null, // NEEDS TRANSLATION
	},
	pixilate: {
		name: "Piel Feérica",
		// Official flavor text: "Convierte los movimientos de tipo Normal en tipo Hada y aumenta ligeramente su potencia."
		desc: "Convierte los movimientos de tipo Normal en tipo Hada y aumenta su potencia en un 20%.",
		shortDesc: "Convierte los movimientos de tipo Normal en tipo Hada y aumenta su potencia en un 20%.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	plus: {
		name: "Más",
		// Official flavor text: "Potencia su Ataque Especial si un Pokémon aliado tiene la habilidad Más o Menos."
		desc: "Potencia el Ataque Especial un 50% si un Pokémon aliado tiene la habilidad Más o Menos.",
		shortDesc: "Potencia el Ataque Especial un 50% si un Pokémon aliado tiene la habilidad Más o Menos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonheal: {
		name: "Antídoto",
		// Official flavor text: "Si resulta envenenado, recupera PS en vez de perderlos."
		desc: "Si el Pokémon resulta envenenado, recupera 1/8 de sus PS máximos cada turno.",
		shortDesc: "Si el Pokémon resulta envenenado, recupera 1/8 de sus PS máximos cada turno.",
	},
	poisonpoint: {
		name: "Punto Tóxico",
		shortDesc: "Si un Pokémon lo ataca con un ataque de contacto, tiene un 30% de probabilidad de resultar envenenado.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonpuppeteer: {
		name: "Títere Tóxico",
		desc: "Los rivales que Pecharunt envenene con sus movimientos también sufrirán confusión.",
		shortDesc: "Los rivales que Pecharunt envenene con sus movimientos también sufrirán confusión.",
	},
	poisontouch: {
		name: "Toque Tóxico",
		// Official flavor text: "Puede envenenar al objetivo con solo tocarlo."
		desc: "Puede envenenar al objetivo con solo tocarlo un 30% de las veces.",
		shortDesc: "Puede envenenar al objetivo con solo tocarlo un 30% de las veces.",
	},
	powerconstruct: {
		name: "Agrupamiento",
		// Official flavor text: "Cuando sus PS se ven reducidos a la mitad, las células se reagrupan y adopta su Forma Completa."
		desc: "Cuando sus PS se ven reducidos a la mitad, las células se reagrupan y adopta su Forma Completa.",
		shortDesc: "Cuando sus PS se ven reducidos a la mitad, las células se reagrupan y adopta su Forma Completa.",

		activate: "  Sientes múltiples presencias...",
		transform: "¡{POKEMON} ha adoptado la Forma Completa!",
	},
	powerofalchemy: {
		name: "Reacción Química",
		// Official flavor text: "Reacciona copiando la habilidad de un aliado debilitado."
		desc: "Reacciona copiando la habilidad de un aliado cuando este aliado cae debilitado.",
		shortDesc: "Reacciona copiando la habilidad de un aliado cuando este aliado cae debilitado.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "#receiver",
	},
	powerspot: {
		name: "Fuente Energía",
		// Official flavor text: "Potencia los movimientos de los Pokémon adyacentes."
		desc: "Potencia los movimientos de los Pokémon adyacentes en combate en un 30%.",
		shortDesc: "Potencia los movimientos de los Pokémon adyacentes en combate en un 30%.",
	},
	prankster: {
		name: "Bromista",
		// Official flavor text: "Sus movimientos de estado tienen prioridad alta."
		desc: "Permite lanzar ataques de estado en primer lugar. Los Pokémon tipo Siniestro son inmunes a movimientos usados con esta habilidad.",
		shortDesc: "Permite lanzar ataques de estado en primer lugar. Los Pokémon tipo Siniestro son inmunes a movimientos usados con esta habilidad.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	pressure: {
		name: "Presión",
		// Official flavor text: "Presiona al rival para que sus PP se acaben antes."
		desc: "Presiona al rival para que sus PP se acaben antes, gastando 2 PP por cada movimiento que use contra este Pokémon.",
		shortDesc: "Presiona al rival para que sus PP se acaben antes, gastando 2 PP por cada movimiento que use contra este Pokémon.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ejerce presión!",
	},
	primordialsea: {
		name: "Mar del Albor",
		// Official flavor text: "Altera el clima para anular los ataques de tipo Fuego."
		desc: "Altera el clima con una poderosa lluvia para anular los ataques de tipo Fuego. Los climas básicos no eliminan este clima.",
		shortDesc: "Altera el clima con una poderosa lluvia para anular los ataques de tipo Fuego. Los climas básicos no eliminan este clima.",
	},
	prismarmor: {
		name: "Armadura Prisma",
		shortDesc: "Mitiga el daño que le infligen los movimientos supereficaces en 1/4.",
	},
	propellertail: {
		name: "Hélice Caudal",
		shortDesc: "Los movimientos del usuario ignoran ser atraídos por los movimientos o habilidades del adversario que los atraen.",
	},
	protean: {
		name: "Mutatipo",
		// Official flavor text: "Cambia su tipo al del movimiento que va a usar."
		desc: "Cambia su tipo al del movimiento que va a usar, antes de usarlo. Aunque el ataque falle cambiará su tipo igualmente.",
		shortDesc: "Cambia su tipo al del movimiento que va a usar, antes de usarlo. Aunque el ataque falle cambiará su tipo igualmente.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	protosynthesis: {
		name: "Paleosíntesis",
		desc: "Si hace sol o lleva un tanque de Energía Potenciadora, aumenta su característica más alta.",
		shortDesc: "Si hace sol o lleva un tanque de Energía Potenciadora, aumenta su característica más alta.",

		activate: "  ¡La habilidad Paleosíntesis de {POKEMON} se ha activado gracial al sol!",
		activateFromItem: "  ¡{POKEMON} ha usado la Energía Potenciadora para activar Paleosíntesis!",
		start: "  ¡{STAT:definite:capitalize} de {POKEMON} se ha reforzado!",
		end: "  ¡El efecto de Paleosíntesis de {POKEMON} ha desaparecido!",
	},
	psychicsurge: {
		name: "Psicogénesis",
		shortDesc: "Crea un campo psíquico al entrar en combate.",
	},
	punkrock: {
		name: "Punk Rock",
		// Official flavor text: "Potencia los movimientos que usan sonido y reduce a la mitad el daño que le infligen dichos movimientos."
		desc: "Potencia los ataques de sonido en un 30% y, si el poseedor es atacado por uno, el daño recibido será la mitad.",
		shortDesc: "Potencia los ataques de sonido en un 30% y, si el poseedor es atacado por uno, el daño recibido será la mitad.",
	},
	purepower: {
		name: "Energía Pura",
		shortDesc: "Duplica el Ataque del poseedor de la habilidad.",
	},
	purifyingsalt: {
		name: "Sal Purificadora",
		desc: "Su sal pura lo protege de los problemas de estado y reduce a la mitad el daño que recibe de ataques de tipo Fantasma.",
		shortDesc: "Su sal pura lo protege de los problemas de estado y reduce a la mitad el daño que recibe de ataques de tipo Fantasma.",
	},
	quarkdrive: {
		name: "Carga Cuark",
		desc: "Si hay un campo eléctrico en el terreno de combate o lleva un tanque de Energía Potenciadora, aumenta su característica más alta.",
		shortDesc: "Si hay un campo eléctrico en el terreno de combate o lleva un tanque de Energía Potenciadora, aumenta su característica más alta.",

		activate: "  ¡La habilidad Carga Cuark de {POKEMON} se ha activado gracias al campo eléctrico!",
		activateFromItem: "  ¡{POKEMON} ha usado la Energía Potenciadora para activar Carga Cuark!",
		start: "  ¡{STAT:definite:capitalize} de {POKEMON} se ha reforzado!",
		end: "  ¡El efecto de Carga Cuark de {POKEMON} ha desaparecido!",
	},
	queenlymajesty: {
		name: "Regia Presencia",
		// Official flavor text: "Intimida al objetivo y le impide usar movimientos con prioridad."
		desc: "Impide al rival usar movimientos con prioridad dirigidos al Pokémon, haciéndoles consumir PP como si el mov. hubiese fallado.",
		shortDesc: "Impide al rival usar movimientos con prioridad dirigidos al Pokémon, haciéndoles consumir PP como si el mov. hubiese fallado.",

		block: "#damp",
	},
	quickdraw: {
		name: "Mano Rápida",
		shortDesc: "Si usa un movimiento especial o físico tiene un 30% de probabilidad de atacar primero si se usan movimientos con la misma prioridad.",

		activate: "  ¡{POKEMON} ataca primero gracias a la habilidad Mano Rápida!",
	},
	quickfeet: {
		name: "Pies Rápidos",
		// Official flavor text: "Aumenta la Velocidad si sufre problemas de estado."
		desc: "Aumenta la Velocidad en un 50% si sufre problemas de estado. En caso de estar paralizado, no se aplica la reducción de velocidad.",
		shortDesc: "Aumenta la Velocidad en un 50% si sufre problemas de estado. En caso de estar paralizado, no se aplica la reducción de velocidad.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	raindish: {
		name: "Cura Lluvia",
		// Official flavor text: "Recupera PS de forma gradual cuando llueve."
		desc: "Recupera 1/16 de sus PS al final de cada turno cuando llueve en el combate.",
		shortDesc: "Recupera 1/16 de sus PS al final de cada turno cuando llueve en el combate.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rattled: {
		name: "Cobardía",
		// Official flavor text: "Si le alcanza un movimiento de tipo Siniestro, Bicho o Fantasma, el miedo hace que le suba la Velocidad."
		desc: "Si le alcanza un movimiento de tipo Siniestro, Bicho o Fantasma, sube un nivel la Velocidad. También lo hace al recibir Intimidación.",
		shortDesc: "Si le alcanza un movimiento de tipo Siniestro, Bicho o Fantasma, sube un nivel la Velocidad. También lo hace al recibir Intimidación.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	receiver: {
		name: "Receptor",
		// Official flavor text: "Adquiere la habilidad de un aliado debilitado."
		desc: "Adquiere la habilidad de un aliado cuando el aliado cae debilitado.",
		shortDesc: "Adquiere la habilidad de un aliado cuando el aliado cae debilitado.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  ¡El Pokémon ha recibido la habilidad {ABILITY} de {SOURCE}!",
	},
	reckless: {
		name: "Audaz",
		// Official flavor text: "Potencia los movimientos que también dañan al usuario."
		desc: "Potencia la potencia de los movimientos que también dañan al usuario en un 20%.",
		shortDesc: "Potencia la potencia de los movimientos que también dañan al usuario en un 20%.",
	},
	refrigerate: {
		name: "Piel Helada",
		// Official flavor text: "Convierte los movimientos de tipo Normal en tipo Hielo y aumenta ligeramente su potencia."
		desc: "Convierte los movimientos de tipo Normal en tipo Hielo y aumenta su potencia en un 20%.",
		shortDesc: "Convierte los movimientos de tipo Normal en tipo Hielo y aumenta su potencia en un 20%.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	regenerator: {
		name: "Regeneración",
		shortDesc: "Recupera 1/3 de sus PS máximos cuando el Pokémon vuelve a su Pokéball en combate, tanto si es un cambio manual como causado por un mov. del rival.",
	},
	ripen: {
		name: "Maduración",
		// Official flavor text: "Hace madurar las bayas, por lo que duplica sus efectos."
		desc: "Hace madurar las bayas, por lo que duplica sus efectos al consumirlas.",
		shortDesc: "Hace madurar las bayas, por lo que duplica sus efectos al consumirlas.",
	},
	rivalry: {
		name: "Rivalidad",
		// Official flavor text: "Si el objetivo es del mismo sexo, su competitividad le lleva a infligir más daño. Si es del sexo contrario, en cambio, el daño será menor."
		desc: "Aumenta la potencia de sus movimientos en un 25% si el objetivo es del mismo sexo. Ya no disminuye un 25% si es del sexo contrario.",
		shortDesc: "Aumenta la potencia de sus movimientos en un 25% si el objetivo es del mismo sexo. Ya no disminuye un 25% si es del sexo contrario.",
	},
	rkssystem: {
		name: "Sistema Alfa",
		shortDesc: "Cambia su tipo según el disco que lleve instalado, cambiando también el tipo del ataque Multiataque.",
	},
	rockhead: {
		name: "Cabeza Roca",
		// Official flavor text: "No puede dañarse con sus propios movimientos."
		desc: "Impide que el Pokémon se dañe con sus propios movimientos, salvo en caso de usar Forcejeo.",
		shortDesc: "Impide que el Pokémon se dañe con sus propios movimientos, salvo en caso de usar Forcejeo.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	rockypayload: {
		name: "Transportarrocas",
		shortDesc: "Potencia los movimientos de tipo Roca del usuario en un 50%.",
	},
	roughskin: {
		name: "Piel Tosca",
		// Official flavor text: "Hiere con su piel áspera al rival que lo ataque con un movimiento de contacto."
		desc: "Hiere con su piel áspera al rival que lo ataque con un movimiento de contacto, restándole 1/16 de sus PS máximos.",
		shortDesc: "Hiere con su piel áspera al rival que lo ataque con un movimiento de contacto, restándole 1/16 de sus PS máximos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "  ¡{POKEMON} ha resultado herido!",
	},
	runaway: {
		name: "Fuga",
		shortDesc: "Permite escapar de combate contra todos los Pokémon salvajes, ignorando la habilidad del rival. No tiene efecto al cambiar de Pokémon.",
	},
	sandforce: {
		name: "Poder Arena",
		// Official flavor text: "Potencia los movimientos de tipo Tierra, Acero y Roca durante las tormentas de arena."
		desc: "Potencia los movimientos de tipo Tierra, Acero y Roca durante las tormentas de arena en un 30%.",
		shortDesc: "Potencia los movimientos de tipo Tierra, Acero y Roca durante las tormentas de arena en un 30%.",
	},
	sandrush: {
		name: "Ímpetu Arena",
		// Official flavor text: "Aumenta su Velocidad durante las tormentas de arena."
		desc: "Aumenta x2 la Velocidad del Pokémon durante las tormentas de arena, y evita que sufra daño de esta.",
		shortDesc: "Aumenta x2 la Velocidad del Pokémon durante las tormentas de arena, y evita que sufra daño de esta.",
	},
	sandspit: {
		name: "Expulsarena",
		shortDesc: "Provoca una Tormenta de Arena al recibir un ataque. Si lleva equipada Roca suave, la tormenta durará 8 turnos.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sandstream: {
		name: "Chorro Arena",
		shortDesc: "Cuando entra en combate invoca una tormenta de arena que dura 5 turnos. Si el Pokémon lleva equipada Roca suave durará 8 turnos.",
	},
	sandveil: {
		name: "Velo Arena",
		// Official flavor text: "Aumenta su Evasión durante las tormentas de arena."
		desc: "Aumenta la Evasión durante las tormentas de arena en un 20%, y evita que el poseedor reciba daño de Tormenta de arena.",
		shortDesc: "Aumenta la Evasión durante las tormentas de arena en un 20%, y evita que el poseedor reciba daño de Tormenta de arena.",
	},
	sapsipper: {
		name: "Herbívoro",
		// Official flavor text: "Neutraliza los movimientos de tipo Planta y sube su Ataque."
		desc: "Neutraliza los movimientos de tipo Planta y sube el Ataque en un nivel, incluídos movimientos de estado.",
		shortDesc: "Neutraliza los movimientos de tipo Planta y sube el Ataque en un nivel, incluídos movimientos de estado.",
	},
	schooling: {
		name: "Banco",
		// Official flavor text: "Forma bancos con sus congéneres cuando tiene muchos PS, lo cual le otorga más fuerza. Cuando le quedan pocos PS, el banco se dispersa."
		desc: "A partir del nivel 20, Wishiwashi se transforma a su forma banco si sus PS están por encima del 25%. Vuelve a su forma individual si bajan del 25%.",
		shortDesc: "A partir del nivel 20, Wishiwashi se transforma a su forma banco si sus PS están por encima del 25%. Vuelve a su forma individual si bajan del 25%.",

		transform: "¡{POKEMON} ha formado un banco!",
		transformEnd: "¡El banco de {POKEMON} se ha dispersado!",
	},
	scrappy: {
		name: "Intrépido",
		// Official flavor text: "Puede alcanzar a Pokémon de tipo Fantasma con movimientos de tipo Normal o Lucha."
		desc: "Los movimientos de tipo Normal o Lucha alcanzan a los Pokémon de tipo Fantasma. Además es inmune a la Intimidación.",
		shortDesc: "Los movimientos de tipo Normal o Lucha alcanzan a los Pokémon de tipo Fantasma. Además es inmune a la Intimidación.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	screencleaner: {
		name: "Antibarrera",
		shortDesc: "Anula los efectos de Pantalla de Luz, Reflejo y Velo Aurora tanto de rivales como de aliados al entrar en combate.",
	},
	seedsower: {
		name: "Disemillar",
		shortDesc: "Crea un campo de hierba al recibir un ataque.",
	},
	serenegrace: {
		name: "Dicha",
		// Official flavor text: "Aumenta la probabilidad de que los movimientos causen efectos secundarios."
		desc: "Duplica la probabilidad de que los movimientos causen efectos secundarios. También se aplica a los objetos Roca del rey y Colmillo agudo.",
		shortDesc: "Duplica la probabilidad de que los movimientos causen efectos secundarios. También se aplica a los objetos Roca del rey y Colmillo agudo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shadowshield: {
		name: "Guardia Espectro",
		shortDesc: "Reduce el daño sufrido a la mitad si los PS están al máximo.",
	},
	shadowtag: {
		name: "Sombra Trampa",
		// Official flavor text: "Impide que el enemigo huya o sea cambiado por otro."
		desc: "Evita que el enemigo huya o sea cambiado por otro, salvo que sea de tipo Fantasma, lleve equipado Muda concha o use un movimiento de cambio.",
		shortDesc: "Evita que el enemigo huya o sea cambiado por otro, salvo que sea de tipo Fantasma, lleve equipado Muda concha o use un movimiento de cambio.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
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
	},
	sharpness: {
		name: "Cortante",
		shortDesc: "Aumenta la potencia de los movimientos cortantes en un 50%.",
	},
	shedskin: {
		name: "Mudar",
		// Official flavor text: "Puede curar sus problemas de estado al mudar la piel."
		desc: "El Pokémon tiene una probabilidad del 30% de curar sus problemas de estado al final de cada turno, al mudar la piel.",
		shortDesc: "El Pokémon tiene una probabilidad del 30% de curar sus problemas de estado al final de cada turno, al mudar la piel.",
	},
	sheerforce: {
		name: "Potencia Bruta",
		// Official flavor text: "Sube la potencia de sus movimientos en detrimento de los efectos secundarios, que se ven anulados."
		desc: "Sube la potencia en un 30% de los movimientos con efectos secundarios, pero anula el efecto.",
		shortDesc: "Sube la potencia en un 30% de los movimientos con efectos secundarios, pero anula el efecto.",
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
	shellarmor: {
		name: "Caparazón",
		shortDesc: "La robusta coraza que lo protege bloquea los golpes críticos.",
	},
	shielddust: {
		name: "Polvo Escudo",
		// Official flavor text: "El polvo de escamas que lo envuelve lo protege de los efectos secundarios de los ataques recibidos."
		desc: "El polvo de escamas que lo envuelve protege al Pokémon de los efectos secundarios de los ataques recibidos.",
		shortDesc: "El polvo de escamas que lo envuelve protege al Pokémon de los efectos secundarios de los ataques recibidos.",
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
	},
	shieldsdown: {
		name: "Escudo Limitado",
		// Official flavor text: "Rompe su coraza cuando sus PS se ven reducidos a la mitad y adopta una forma ofensiva."
		desc: "Rompe su coraza cuando sus PS se ven reducidos a la mitad y adopta una forma ofensiva.",
		shortDesc: "Rompe su coraza cuando sus PS se ven reducidos a la mitad y adopta una forma ofensiva.",

		transform: "¡Escudo Limitado activado!",
		transformEnd: "Escudo Limitado desactivado.",
	},
	simple: {
		name: "Simple",
		shortDesc: "Duplica los cambios en las características, tanto positivos como negativos.",
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
	},
	skilllink: {
		name: "Encadenado",
		// Official flavor text: "Ejecuta siempre los movimientos múltiples con el número máximo de golpes."
		desc: "Los movimientos múltiples se ejecutarán siempre con el número máximo de golpes.",
		shortDesc: "Los movimientos múltiples se ejecutarán siempre con el número máximo de golpes.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	slowstart: {
		name: "Inicio Lento",
		shortDesc: "Baja a la mitad el Ataque y la Velocidad durante cinco turnos. Al cambiar de Pokémon se reinicia la cuenta.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} no rinde todo lo que podría!",
		end: "  ¡{POKEMON} ahora va a a por todas!",
	},
	slushrush: {
		name: "Quitanieves",
		shortDesc: "Duplica la Velocidad del usuario si está granizando, y lo hace inmune al granizo.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sniper: {
		name: "Francotirador",
		shortDesc: "La potencia de los golpes críticos se ve aumenta de x1,5 a x2,25.",
	},
	snowcloak: {
		name: "Manto Níveo",
		// Official flavor text: "Sube la Evasión cuando graniza."
		desc: "Disminuye en un 20% la Precisión de los movimientos usados contra él cuando hay clima de Granizo.",
		shortDesc: "Disminuye en un 20% la Precisión de los movimientos usados contra él cuando hay clima de Granizo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	snowwarning: {
		name: "Nevada",
		shortDesc: "Cuando entra en combate invoca una nevada que dura 5 turnos. Si el Pokémon lleva equipada Roca helada durará 8 turnos.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	solarpower: {
		name: "Poder Solar",
		// Official flavor text: "Si hace sol, aumenta su Ataque Especial, pero pierde PS en cada turno."
		desc: "Si hace sol, aumenta su Ataque Especial en un 50%, pero pierde 1/8 de sus PS máximos al final de cada turno.",
		shortDesc: "Si hace sol, aumenta su Ataque Especial en un 50%, pero pierde 1/8 de sus PS máximos al final de cada turno.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	solidrock: {
		name: "Roca Sólida",
		shortDesc: "Mitiga el daño que le infligen los movimientos supereficaces, reduciéndolos a 3/4 del daño inicial.",
	},
	soulheart: {
		name: "Coránima",
		shortDesc: "Aumenta el Ataque Especial cada vez que un Pokémon cae debilitado, sea aliado o rival.",
	},
	soundproof: {
		name: "Insonorizar",
		shortDesc: "Su aislamiento acústico lo protege de movimientos que usan sonido, salvo los que use el propio Pokémon.",
		gen7: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	speedboost: {
		name: "Impulso",
		// Official flavor text: "Aumenta su Velocidad en cada turno."
		desc: "Aumenta en un nivel la Velocidad del usuario al final de cada turno.",
		shortDesc: "Aumenta en un nivel la Velocidad del usuario al final de cada turno.",
	},
	spicyspray: {
		name: "Salpicante",
		shortDesc: null, // NEEDS TRANSLATION
	},
	stakeout: {
		name: "Vigilante",
		shortDesc: "Duplica el daño infligido a un Pokémon que se haya incorporado al combate en ese turno mediante un cambio.",
	},
	stall: {
		name: "Rezagado",
		shortDesc: "El Pokémon se mueve el último, siempre que los movimientos tengan la misma prioridad, salvo que algún otro tenga equipado Cola plúmbea o Incienso lento.",
	},
	stalwart: {
		name: "Acérrimo",
		shortDesc: "Los movimientos del usuario ignoran ser atraídos por los movimientos o habilidades del adversario que los atraen.",
	},
	stamina: {
		name: "Firmeza",
		shortDesc: "Aumenta la Defensa en un nivel al recibir un ataque de daño directo en combate.",
	},
	stancechange: {
		name: "Cambio Táctico",
		// Official flavor text: "Adopta la Forma Filo al lanzar un ataque, o bien la Forma Escudo si usa el movimiento Escudo Real."
		desc: "Adopta la Forma Filo al lanzar un ataque de daño directo, o bien la Forma Escudo si usa el movimiento Escudo Real.",
		shortDesc: "Adopta la Forma Filo al lanzar un ataque de daño directo, o bien la Forma Escudo si usa el movimiento Escudo Real.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "¡Cambio a Forma Filo!",
		transformEnd: "¡Cambio a Forma Escudo!",
	},
	static: {
		name: "Electricidad Estática",
		shortDesc: "Si un Pokémon lo ataca con un ataque de contacto, tiene un 30% de probabilidad de resultar paralizado. También afecta a Pokémon tipo tierra.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	steadfast: {
		name: "Impasible",
		shortDesc: "Cada vez que se amedrenta sube un nivel su Velocidad, debido a su voluntad inquebrantable.",
	},
	steamengine: {
		name: "Combustible",
		// Official flavor text: "Si le alcanza un movimiento de tipo Fuego o Agua, le sube muchísimo la Velocidad."
		desc: "Si le alcanza un movimiento de tipo Fuego o Agua, le sube la Velocidad en seis niveles.",
		shortDesc: "Si le alcanza un movimiento de tipo Fuego o Agua, le sube la Velocidad en seis niveles.",
	},
	steelworker: {
		name: "Acero Templado",
		shortDesc: "Potencia los movimientos de tipo Acero del usuario en un 50%.",
	},
	steelyspirit: {
		name: "Alma Acerada",
		// Official flavor text: "Potencia los movimientos de tipo Acero de los aliados."
		desc: "Aumenta el poder de los ataques de tipo Acero tanto del usuario como de sus aliados en un 50%.",
		shortDesc: "Aumenta el poder de los ataques de tipo Acero tanto del usuario como de sus aliados en un 50%.",
	},
	stench: {
		name: "Hedor",
		// Official flavor text: "Puede amedrentar al rival al atacarlo debido al mal olor que emana."
		desc: "El Pokémon tiene un 10% de probabilidad de amedrentar al rival al usar un mov. de daño directo. No se acumula con Colmillo agudo o Roca del rey.",
		shortDesc: "El Pokémon tiene un 10% de probabilidad de amedrentar al rival al usar un mov. de daño directo. No se acumula con Colmillo agudo o Roca del rey.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	stickyhold: {
		name: "Viscosidad",
		// Official flavor text: "Los objetos se quedan pegados a su cuerpo, por lo que no pueden robárselos."
		desc: "Protege al Pokémon del robo de objetos ante cualquier ataque del Pokémon rival, al quedarse pegados a su cuerpo.",
		shortDesc: "Protege al Pokémon del robo de objetos ante cualquier ataque del Pokémon rival, al quedarse pegados a su cuerpo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		block: "  ¡Es imposible robarle objetos a {POKEMON}!",
	},
	stormdrain: {
		name: "Colector",
		// Official flavor text: "Atrae y neutraliza los movimientos de tipo Agua, que además le suben el Ataque Especial."
		desc: "Atrae los movimientos de tipo Agua, aumenta un nivel el Ataque Especial y no sufre daño. No afecta a Poder oculto, Don natural y Sentencia.",
		shortDesc: "Atrae los movimientos de tipo Agua, aumenta un nivel el Ataque Especial y no sufre daño. No afecta a Poder oculto, Don natural y Sentencia.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "#lightningrod",
	},
	strongjaw: {
		name: "Mandíbula Fuerte",
		// Official flavor text: "Su robusta mandíbula le confiere una mordedura potente."
		desc: "Aumenta la potencia de los movimientos basados en mordiscos en un 50%.",
		shortDesc: "Aumenta la potencia de los movimientos basados en mordiscos en un 50%.",
	},
	sturdy: {
		name: "Robustez",
		// Official flavor text: "Evita que el rival pueda debilitarlo de un solo golpe cuando tiene los PS al máximo. También evita los movimientos fulminantes."
		desc: "Evita que el rival pueda debilitarlo de un solo golpe cuando tiene los PS al máximo.",
		shortDesc: "Evita que el rival pueda debilitarlo de un solo golpe cuando tiene los PS al máximo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha aguantado el golpe!",
	},
	suctioncups: {
		name: "Ventosas",
		shortDesc: "Sus ventosas se aferran al suelo, con lo cual anula movimientos y objetos que fuerzan el relevo.",

		block: "  ¡{POKEMON} se aferra al suelo gracias a la habilidad Ventosas!",
	},
	superluck: {
		name: "Afortunado",
		shortDesc: "Su buena suerte aumenta la probabilidad de asestar golpes críticos en uno.",
	},
	supersweetsyrup: {
		name: "Néctar Dulce",
		shortDesc: "Al entrar en combate por primera vez, esparce un aroma dulzón a néctar que reduce la Evasión del rival.",

		start: "  ¡El néctar de {POKEMON} desprende un aroma dulzón!",
	},
	supremeoverlord: {
		name: "General Supremo",
		desc: "Al entrar en combate, su Ataque y su Ataque Especial aumentan un poco por cada miembro del equipo que haya sido derrotado hasta el momento.",
		shortDesc: "Al entrar en combate, su Ataque y su Ataque Especial aumentan un poco por cada miembro del equipo que haya sido derrotado hasta el momento.",

		activate: "  ¡{POKEMON} recibe fuerzas de los aliados caídos!",
	},
	surgesurfer: {
		name: "Cola Surf",
		shortDesc: "Duplica la Velocidad si hay un campo eléctrico en el terreno de combate.",
	},
	swarm: {
		name: "Enjambre",
		// Official flavor text: "Potencia sus movimientos de tipo Bicho cuando le quedan pocos PS."
		desc: "Potencia los movimientos de tipo Bicho del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
		shortDesc: "Potencia los movimientos de tipo Bicho del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sweetveil: {
		name: "Velo Dulce",
		// Official flavor text: "No cae dormido y evita también que sus aliados se duerman."
		desc: "Evita que el Pokémon o sus aliados en combate se duerman. También impide el uso de Descanso.",
		shortDesc: "Evita que el Pokémon o sus aliados en combate se duerman. También impide el uso de Descanso.",

		block: "  ¡{POKEMON} no se ha dormido debido al efecto de Velo Dulce!",
	},
	swiftswim: {
		name: "Nado Rápido",
		// Official flavor text: "Sube su Velocidad cuando llueve."
		desc: "Mientras haya lluvia en el combate el Pokémon duplica su estadística de Velocidad.",
		shortDesc: "Mientras haya lluvia en el combate el Pokémon duplica su estadística de Velocidad.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	swordofruin: {
		name: "Espada Debacle",
		shortDesc: "Reduce la Defensa de todos los demás Pokémon con el poder de su espada maldita.",

		start: "  ¡{POKEMON} ha mermado la Defensa de los demás Pokémon con Espada Debacle!",
	},
	symbiosis: {
		name: "Simbiosis",
		// Official flavor text: "Pasa su objeto a un aliado que ya haya utilizado el suyo."
		desc: "El Pokémon pasa su objeto a su aliado cuando el aliado utiliza el suyo.",
		shortDesc: "El Pokémon pasa su objeto a su aliado cuando el aliado utiliza el suyo.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} le ha dado {ITEM:definite:classified} a {TARGET}!",
	},
	synchronize: {
		name: "Sincronía",
		// Official flavor text: "Contagia el envenenamiento, las quemaduras o la parálisis al Pokémon que le cause ese estado."
		desc: "Contagia el envenenamiento, las quemaduras o la parálisis al Pokémon que le cause ese estado, aunque se encuentre tras un sustituto.",
		shortDesc: "Contagia el envenenamiento, las quemaduras o la parálisis al Pokémon que le cause ese estado, aunque se encuentre tras un sustituto.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	tabletsofruin: {
		name: "Tablilla Debacle",
		shortDesc: "Reduce el Ataque de todos los demás Pokémon con el poder de sus tablillas malditas.",

		start: "  ¡{POKEMON} ha mermado el Ataque de los demás Pokémon con Tablilla Debacle!",
	},
	tangledfeet: {
		name: "Tumbos",
		shortDesc: "Disminuye la Precisión de los movimientos del rival usados contra el poseedor de la habilidad a la mitad si este está confuso.",
	},
	tanglinghair: {
		name: "Rizos Rebeldes",
		shortDesc: "Baja un nivel la Velocidad del rival cuando este ataca al Pokémon con un movimiento de contacto.",
	},
	technician: {
		name: "Experto",
		// Official flavor text: "Potencia sus movimientos más débiles."
		desc: "Potencia los movimientos que tengan una Potencia de 60 o menos x1,5.",
		shortDesc: "Potencia los movimientos que tengan una Potencia de 60 o menos x1,5.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	telepathy: {
		name: "Telepatía",
		shortDesc: "Elude los ataques de los aliados durante el combate.",

		block: "  ¡{POKEMON} no ha sufrido el ataque de su aliado!",
	},
	teraformzero: {
		name: "Teraformación 0",
		shortDesc: "Cuando Terapagos adopta la Forma Astral, anula todos los efectos del tiempo atmosférico y de los campos que haya en el terreno gracias a su poder oculto.",
	},
	terashell: {
		name: "Teracaparazón",
		desc: "Su caparazón encierra energía de todos los tipos. Gracias a ello, si sus PS están al máximo, el movimiento que lo alcance no será muy eficaz.",
		shortDesc: "Su caparazón encierra energía de todos los tipos. Gracias a ello, si sus PS están al máximo, el movimiento que lo alcance no será muy eficaz.",

		activate: "  ¡{POKEMON} ha hecho brillar su caparazón y ha alterado su compatibilidad entre tipos!",
	},
	terashift: {
		name: "Teracambio",
		shortDesc: "Al entrar en combate, adopta la Forma Teracristal tras absorber la energía de su alrededor.",

		transform: "¡{POKEMON} se ha transformado!",
	},
	teravolt: {
		name: "Terravoltaje",
		// Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
		desc: "Las habilidades del objetivo no afectan a los movimientos empleados.",
		shortDesc: "Las habilidades del objetivo no afectan a los movimientos empleados.",
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

		start: "  ¡{POKEMON} desprende un aura chisporroteante!",
	},
	thermalexchange: {
		name: "Termoconversión",
		desc: "Evita las quemaduras y, si lo alcanza un movimiento de tipo Fuego, aumenta su Ataque.",
		shortDesc: "Evita las quemaduras y, si lo alcanza un movimiento de tipo Fuego, aumenta su Ataque.",
	},
	thickfat: {
		name: "Sebo",
		// Official flavor text: "Gracias a la gruesa capa de grasa que lo protege, reduce a la mitad el daño que recibe de ataques de tipo Fuego o Hielo."
		desc: "Gracias a la gruesa capa de grasa que lo protege, reduce a la mitad el daño recibido por ataques de tipo Fuego y Hielo.",
		shortDesc: "Gracias a la gruesa capa de grasa que lo protege, reduce a la mitad el daño recibido por ataques de tipo Fuego y Hielo.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tintedlens: {
		name: "Cromolente",
		shortDesc: "Potencia los movimientos poco eficaces, haciendo estos el doble de daño.",
	},
	torrent: {
		name: "Torrente",
		// Official flavor text: "Potencia sus movimientos de tipo Agua cuando le quedan pocos PS."
		desc: "Potencia los movimientos de tipo Agua del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
		shortDesc: "Potencia los movimientos de tipo Agua del Pokémon en un 50% cuando tenga 1/3 o menos de sus PS máximos.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	toughclaws: {
		name: "Garra Dura",
		shortDesc: "Aumenta la potencia de los movimientos de contacto en 1/3.",
	},
	toxicboost: {
		name: "Ímpetu Tóxico",
		// Official flavor text: "Aumenta la potencia de sus ataques físicos cuando está envenenado."
		desc: "Aumenta la potencia de los ataques físicos en un 50% cuando el Pokémon está envenenado.",
		shortDesc: "Aumenta la potencia de los ataques físicos en un 50% cuando el Pokémon está envenenado.",
	},
	toxicchain: {
		name: "Cadena Tóxica",
		desc: "Gracias al poder de su cadena impregnada de toxinas, puede envenenar gravemente al Pokémon al que ataque.",
		shortDesc: "Gracias al poder de su cadena impregnada de toxinas, puede envenenar gravemente al Pokémon al que ataque.",
	},
	toxicdebris: {
		name: "Capa Tóxica",
		shortDesc: "Al recibir daño de un ataque físico, lanza una trampa de púas tóxicas a los pies del rival.",
	},
	trace: {
		name: "Calco",
		// Official flavor text: "Al entrar en combate copia la habilidad del rival."
		desc: "Al entrar en combate copia la habilidad de uno de los rivales adyacentes al azar.",
		shortDesc: "Al entrar en combate copia la habilidad de uno de los rivales adyacentes al azar.",
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

		changeAbility: "  ¡{POKEMON} rastreó {ABILITY} de {SOURCE}!",
	},
	transistor: {
		name: "Transistor",
		shortDesc: "Potencia los movimientos tipo Eléctrico un 30%.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	triage: {
		name: "Primer Auxilio",
		shortDesc: "Aumenta en 3 la prioridad de los movimientos que curan PS directamente al usuario u otros Pokémon.",
	},
	truant: {
		name: "Ausente",
		shortDesc: "Cada dos turnos el Pokémon estará ausente y no realizará ninguna acción.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		cant: "¡{POKEMON} está holgazaneando!",
	},
	turboblaze: {
		name: "Turbollama",
		// Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
		desc: "Las habilidades del objetivo no afectan a los movimientos empleados.",
		shortDesc: "Las habilidades del objetivo no afectan a los movimientos empleados.",
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

		start: "  ¡{POKEMON} desprende un aura llameante!",
	},
	unaware: {
		name: "Ignorante",
		// Official flavor text: "Pasa por alto las mejoras en las características del rival al atacar."
		desc: "Ignora los cambios tanto positivos como negativos en las características del rival al atacar, salvo la Velocidad.",
		shortDesc: "Ignora los cambios tanto positivos como negativos en las características del rival al atacar, salvo la Velocidad.",
	},
	unburden: {
		name: "Liviano",
		// Official flavor text: "Sube su Velocidad si usa o pierde el objeto que lleva."
		desc: "El Pokémon duplica la Velocidad si usa o pierde el objeto que lleva. El efecto desaparece al ser cambiado. No se activa con Truco o Trapicheo.",
		shortDesc: "El Pokémon duplica la Velocidad si usa o pierde el objeto que lleva. El efecto desaparece al ser cambiado. No se activa con Truco o Trapicheo.",
	},
	unnerve: {
		name: "Nerviosismo",
		// Official flavor text: "Pone nervioso al rival y le impide usar bayas."
		desc: "Pone nervioso al rival y le impide usar bayas. No impide su uso si es a través de movimientos como Lanzamiento, Picadura o Picoteo.",
		shortDesc: "Pone nervioso al rival y le impide usar bayas. No impide su uso si es a través de movimientos como Lanzamiento, Picadura o Picoteo.",

		start: "  ¡{TEAM:capitalize} está muy nervioso y no puede comer bayas!",
	},
	unseenfist: {
		name: "Puño Invisible",
		shortDesc: "Si usa un movimiento de contacto, puede infligir daño al objetivo aunque este se proteja.",
		champions: {
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	vesselofruin: {
		name: "Caldero Debacle",
		shortDesc: "Reduce el Ataque Especial de todos los demás Pokémon con el poder de su caldero maldito.",

		start: "  ¡{POKEMON} ha mermado el Ataque Especial de los demás Pokémon con Caldero Debacle!",
	},
	victorystar: {
		name: "Tinovictoria",
		shortDesc: "Sube la Precisión del poseedor y sus aliados en combate en un 10%.",
	},
	vitalspirit: {
		name: "Espíritu Vital",
		shortDesc: "Su determinación le impide quedarse dormido. Si utiliza el movimiento Descanso, este fallará.",
	},
	voltabsorb: {
		name: "Absorbe Electricidad",
		// Official flavor text: "Si le alcanza un movimiento de tipo Eléctrico, recupera PS en vez de sufrir daño."
		desc: "Si le alcanza un movimiento de tipo Eléctrico, éste no le afecta y recupera 1/4 de sus PS máximos. También funciona con movs. de estado.",
		shortDesc: "Si le alcanza un movimiento de tipo Eléctrico, éste no le afecta y recupera 1/4 de sus PS máximos. También funciona con movs. de estado.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wanderingspirit: {
		name: "Alma Errante",
		// Official flavor text: "Si le alcanza un movimiento de contacto, intercambia su habilidad con la del agresor."
		desc: "Si le alcanza un movimiento de contacto, intercambia su habilidad con la del agresor, salvo algunas excepciones.",
		shortDesc: "Si le alcanza un movimiento de contacto, intercambia su habilidad con la del agresor, salvo algunas excepciones.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#skillswap",
	},
	waterabsorb: {
		name: "Absorbe Agua",
		// Official flavor text: "Si le alcanza un movimiento de tipo Agua, recupera PS en vez de sufrir daño."
		desc: "Si le alcanza un movimiento de tipo Agua, éste no le afecta y recupera 1/4 de sus PS máximos. También funciona con movs. de estado.",
		shortDesc: "Si le alcanza un movimiento de tipo Agua, éste no le afecta y recupera 1/4 de sus PS máximos. También funciona con movs. de estado.",
	},
	waterbubble: {
		name: "Pompa",
		// Official flavor text: "Reduce el daño que le provocan los movimientos de tipo Fuego y es inmune a las quemaduras."
		desc: "Hace unas cuantas cosas.",
		shortDesc: "Hace unas cuantas cosas.",
	},
	watercompaction: {
		name: "Hidrorrefuerzo",
		shortDesc: "Aumenta en dos niveles la Defensa si le alcanza un movimiento de tipo Agua, pero no le hace inmune al ataque.",
	},
	waterveil: {
		name: "Velo Agua",
		shortDesc: "Evita las quemaduras gracias a la capa de agua que lo envuelve. Si un Pokémon quemado adquiere esta habilidad se curará de las quemaduras.",
	},
	weakarmor: {
		name: "Armadura Frágil",
		// Official flavor text: "Al recibir daño de un ataque físico, le baja la Defensa, pero le sube mucho la Velocidad."
		desc: "Al recibir daño por un ataque físico, baja un nivel la Defensa, pero sube dos niveles la Velocidad del Pokémon.",
		shortDesc: "Al recibir daño por un ataque físico, baja un nivel la Defensa, pero sube dos niveles la Velocidad del Pokémon.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wellbakedbody: {
		name: "Cuerpo Horneado",
		desc: "Si lo alcanza un movimiento de tipo Fuego, aumenta mucho su Defensa en vez de sufrir daño.",
		shortDesc: "Si lo alcanza un movimiento de tipo Fuego, aumenta mucho su Defensa en vez de sufrir daño.",
	},
	whitesmoke: {
		name: "Humo Blanco",
		shortDesc: "El humo blanco que lo protege evita que otro Pokémon le baje las características, pero no evita que bajen por movimientos propios.",
	},
	wimpout: {
		name: "Huida",
		// Official flavor text: "Se asusta y abandona el terreno de combate cuando sus PS se ven reducidos a la mitad."
		desc: "Se asusta y abandona el terreno de combate cuando sus PS se ven reducidos por debajo del 50%, tanto por daño directo como indirecto.",
		shortDesc: "Se asusta y abandona el terreno de combate cuando sus PS se ven reducidos por debajo del 50%, tanto por daño directo como indirecto.",
	},
	windpower: {
		name: "Energía Eólica",
		desc: "Se carga de electricidad si lo alcanza un movimiento de viento, lo que potencia su siguiente mov. Eléctrico.",
		shortDesc: "Se carga de electricidad si lo alcanza un movimiento de viento, lo que potencia su siguiente mov. Eléctrico.",

		start: "#electromorphosis",
	},
	windrider: {
		name: "Surcavientos",
		desc: "Si sopla un Viento Afín o lo alcanza un movimiento que usa viento, aumenta su Ataque. Tampoco recibe daño de este.",
		shortDesc: "Si sopla un Viento Afín o lo alcanza un movimiento que usa viento, aumenta su Ataque. Tampoco recibe daño de este.",
	},
	wonderguard: {
		name: "Superguarda",
		shortDesc: "Gracias a un poder misterioso, solo le hacen daño los movimientos supereficaces.",
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wonderskin: {
		name: "Piel Milagro",
		// Official flavor text: "Presenta una mayor resistencia ante los movimientos de estado."
		desc: "Reduce la precisión de los movs. de estado dirigidos contra el poseedor de la habilidad al 50%. No baja por debajo del 50%.",
		shortDesc: "Reduce la precisión de los movs. de estado dirigidos contra el poseedor de la habilidad al 50%. No baja por debajo del 50%.",
	},
	zenmode: {
		name: "Modo Daruma",
		// Official flavor text: "Cambia de forma si sus PS se ven reducidos a la mitad."
		desc: "Cambia de forma si sus PS se ven reducidos a la mitad.",
		shortDesc: "Cambia de forma si sus PS se ven reducidos a la mitad.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "¡Modo Daruma activado!",
		transformEnd: "Modo Daruma desactivado.",
	},
	zerotohero: {
		name: "Cambio Heroico",
		shortDesc: "Adopta la Forma Heroica cuando se retira del combate.",

		activate: "  ¡{POKEMON} ha vuelto con una transformación heroica!",
	},

	// CAP
	mountaineer: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		shortDesc: null, // NEEDS TRANSLATION
	},
	rebound: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		move: "#magiccoat",
	},
	persistent: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: null, // NEEDS TRANSLATION
	},
};
