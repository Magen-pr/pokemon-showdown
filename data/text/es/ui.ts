import type { TranslationCatalog } from '../../../sim/dex-text';

// Translations useful for clients, servers, and third parties
// Battle UI, tooltips, dexes, etc
export const translations: TranslationCatalog = {
	// #region Generic
	// ==================================================================

	// TRANSLATORS: a label, like "Ability: Intimidate"
	"{LABEL}: ": "{LABEL}: ",
	"{PERCENT}%": "{PERCENT}%",
	// TRANSLATORS: as a value, like "Ability: None"
	"None": "Ninguno",
	"(no item)": "(sin objeto)",
	"(no ability)": "(sin habilidad)",
	"(no weather)": "(sin clima)",
	// TRANSLATORS: a side condition on the opponent's side, like "Foe's Stealth Rock"
	"Foe's {CONDITION}": "{CONDITION} del rival",

	// TRANSLATORS: for constructing lists
	"{FIRST} or {SECOND}": "{FIRST} o {SECOND}",
	"{FIRST} and {SECOND}": "{FIRST} y {SECOND}",
	", {NEXT}": ", {NEXT}",
	", or {LAST}": " o {LAST}",
	", and {LAST}": " y {LAST}",
	// TRANSLATORS: this is for lists of users specifically
	// TRANSLATORS: (languages with counters should use the "person" counter)
	", and {NUMBER} others": " y {NUMBER} más",

	// #endregion Generic

	// #region Dex
	// ==================================================================

	"Pokémon": "Pokémon",
	"Move": "Movimiento", // NOT USED
	"Moves": "Movimientos",
	"Item": "Objeto",
	"Items": "Objetos",
	"Ability": "Habilidad",
	"Abilities": "Habilidades",
	"Hidden Ability": "Habilidad oculta",
	// TRANSLATORS: "" as in a Pokémon's type; "kind" as in kind of tournament or help ticket
	"Type": {
		"": "Tipo",
		"kind": "Tipo",
	},
	"Types": "Tipos",
	"Nature": "Naturaleza",
	"Category": "Clase",
	"Categories": "Clases",
	"Gender": "Sexo",
	"Egg Group": "Grupo Huevo", // NOT USED
	"Egg Groups": "Grupos Huevo",
	"Tag": "Etiqueta", // NOT USED
	"Article": "Artículo",
	"Articles": "Artículos", // NOT USED
	"Tier": "Tier", // NOT USED
	"Tiers": "Tiers",
	"Format": "Formato",
	"Formats": "Formatos", // NOT USED
	"Color": "Color",
	// TRANSLATORS: "" as in a form you fill in; "like forme" as in a Pokémon's form/forme
	"Form": {
		"": "Formulario",
		"like forme": "Forma", // NOT USED
	},
	"Forme": "Forma", // NOT USED
	"Dex#": "N.º Pokédex",
	"Generation": "Generación",
	// TRANSLATORS: intentionally chosen to be very short. do not go longer than three letters for this one
	"Gen {NUMBER}": "{NUMBER}.ª Gen",
	"Evolution": "Evolución",
	"Pre-Evolution": "Preevolución",
	"Does Not Evolve": "No evoluciona",

	// TRANSLATORS: /dt details
	"Height": "Altura",
	"{NUMBER} m": "{NUMBER} m",
	"Weight": "Peso",
	"{NUMBER} kg": "{NUMBER} kg",
	"Crit rate": "Índice de crítico",
	// TRANSLATORS: "" as in user account; "pokemon" as in someone who uses an item/move
	"User": {
		"": null,
		"pokemon": "Utilizable por",
	},
	"Required move": "Movimiento requerido",
	"Target": "Objetivo",
	"Z-Crystal": "Cristal Z",
	"Dynamax power": "Potencia Dinamax",
	"Past gens only": "Solo generaciones anteriores",
	"Fling base power": "Potencia de Lanzamiento",
	"Fling effect": "Efecto de Lanzamiento",
	"Natural Gift type": "Tipo de Don Natural",
	"Natural Gift base power": "Potencia de Don Natural",

	// #endregion Dex

	// #region Teambuilder
	// ==================================================================

	"Shiny": "Variocolor",
	"Happiness": "Amistad",
	"Level": "Nivel",
	"Nickname": "Mote",
	// TRANSLATORS: only the EV vs IV distinction is important
	// TRANSLATORS: the English speaking community likes to distinguish all of these,
	// TRANSLATORS: but other languages don't need to
	"EV": "EV", // NOT USED
	"EVs": "EVs",
	"IV": "IV", // NOT USED
	"IVs": "IVs",
	"DVs": "DVs",
	"AV": "AV", // NOT USED
	"AVs": "AVs",
	"Point": "Punto", // NOT USED
	"Points": "Puntos",
	// TRANSLATORS: used in Teambuilder, so it should be capitalized (unlike "stats" in names.ts)
	"Stats": "Características",
	"Team": "Equipo",
	// TRANSLATORS: "Teams" as in "plural of Team"
	"Teams": "Equipos", // NOT USED
	"Teams List": "Lista de equipos", // NOT USED
	"Tera {TYPE}": "Teratipo: {TYPE}",
	// TRANSLATORS: the Tera type label in the team editor (the battle button uses "Tera {TYPE}" with the type's icon)
	"Tera": "Tera",

	// TRANSLATORS: search result headings
	// TRANSLATORS: "Usually useless" is intentionally evasive
	// TRANSLATORS: only for moves that are outclassed or widely considered obviously bad
	// TRANSLATORS: (to avoid arguments about what we're recommending)
	"Usually useless moves": "Movimientos generalmente inútiles",
	"Sketched moves": "Movimientos por Esquema",
	"Useless sketched moves": "Movimientos inútiles por Esquema",
	"Special Event Ability": "Habilidad de evento",
	"Situational Abilities": "Habilidades situacionales",
	"Unviable Abilities": "Habilidades inviables",
	"Illegal Pokémon": "Pokémon ilegales",
	"Illegal results": "Resultados ilegales",
	"CAP moves": "Movimientos CAP",
	"Glitch": "Glitch",
	"{TYPE}-type Pokémon": "Pokémon de tipo {TYPE}",
	"{TYPE}-type moves": "Movimientos de tipo {TYPE}",
	"{CATEGORY} moves": "Movimientos de categoría {CATEGORY}",
	"{ABILITY} Pokémon": "Pokémon con {ABILITY}",
	"Specific to {VALUE}": "Exclusivo de {VALUE}",
	"Generation {NUMBER}": "Generación {NUMBER}",

	// #endregion Teambuilder

	// #region Battle
	// ==================================================================

	"Mega Evolution": "Megaevolución",
	"Z-Power": "Poder Z",
	"Z-Effect": "Efecto Z",
	"Dynamax": "Dinamax",
	"Dynamax Level": "Nivel Dinamax",
	"Ultra Burst": "Ultraexplosión",

	// TRANSLATORS: type effectiveness
	"Super effective": "Supereficaz",
	"Extremely effective": "Hipereficaz",
	"Effective": "Eficaz", // NOT USED
	"Not very effective": "Poco eficaz",
	"Mostly ineffective": "Muy poco eficaz",
	"No effect": "Sin efecto",
	"Weak": "Debilidad",
	"Resist": "Resistencia",
	"Immune": "Inmunidad", // NOT USED

	// TRANSLATORS: battle tooltips
	"Usually moves first (priority +{PRIORITY}).": "Suele actuar primero (prioridad +{PRIORITY}).",
	"Nearly always moves first (priority +{PRIORITY}).": "Casi siempre actúa primero (prioridad +{PRIORITY}).",
	"Nearly always moves last (priority \u2212{PRIORITY}).": "Casi siempre actúa al final (prioridad −{PRIORITY}).",
	"Fails if current HP is {HP}.": "Falla si los PS actuales son {HP}.",
	"KOs yourself if current HP is exactly {HP}.": "Debilita al usuario si los PS actuales son exactamente {HP}.",
	"(Transformed into {SPECIES})": "(Transformado en {SPECIES})",
	"(Changed forme: {SPECIES})": "(Cambio de forma: {SPECIES})",
	"Possible Illusion #{NUMBER}": "Posible Ilusión n.º {NUMBER}",
	"({HP}/{MAXHP} pixels)": "({HP}/{MAXHP} píxeles)",
	"Would take if ability removed: {PERCENT}%": "Daño sin la habilidad: {PERCENT}%",
	"Next damage: {PERCENT}%": "Próximo daño: {PERCENT}%",
	"Turns asleep: {NUMBER}": "Turnos dormido: {NUMBER}",
	"(More than 4 moves is usually a sign of Illusion Zoroark/Zorua.)": "(Más de 4 movimientos suele indicar la Ilusión de Zoroark o Zorua.)",
	"(Pressure is not visible in Gen 3, so in certain situations, the exact amount of PP used may be unknown.)": "(Presión no es visible en la 3.ª generación, por lo que los PP usados pueden no conocerse con exactitud.)",
	"(Your opponent has two indistinguishable Pokémon, making it impossible for you to tell which one has which moves/ability/item.)": "(El rival tiene dos Pokémon indistinguibles, por lo que es imposible saber cuál tiene qué movimientos, habilidad y objeto.)",
	"(no conditions)": "(sin condiciones)",
	"({NUMBER} turn)": "({NUMBER} turno)",
	"({NUMBER} turns)": "({NUMBER} turnos)",
	"(After stat modifiers:)": "(Tras modificadores de características:)",
	"Calls {MOVE}": "Invoca {MOVE}",
	"(base: {VALUE})": "(base: {VALUE})",
	"({LOW} to {HIGH})": "({LOW} a {HIGH})",
	"(revealed)": "(revelado)",
	"{LOW} to {HIGH}": "{LOW} a {HIGH}",
	"(before stat stage changes)": "(antes de cambios de características)",
	"(before external modifiers)": "(antes de modificadores externos)",
	"<strong>{EFFECT}</strong> vs. {POKEMON}": "<strong>{EFFECT}</strong> contra {POKEMON}",
	"Base power vs. {POKEMON}": "Potencia contra {POKEMON}",
	" or ": " o ",

	// #endregion Battle
};
