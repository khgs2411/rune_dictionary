export enum BOOLEANISH {
	FALSE,
	TRUE,
}

export enum E_IS {
	ARRAY = "array",
	OBJECT = "object",
	FUNCTION = "function",
	STRING = "string",
	NUMBER = "number",
	BOOLEAN = "boolean",
	REGEX = "regex",
}

export enum StrategyType {
	Rune = "rune",
	Aspect = "aspect",
	Auth = "auth",
}
export enum Actions {
	RUNE_GET_RUNE = "get_rune",
	RUNE_GET_RUNES = "get_runes",
	RUNE_INSERT_RUNE = "insert_rune",
	RUNE_INSERT_RUNES = "insert_runes",
	RUNE_UPDATE_RUNE = "update_rune",
	RUNE_UPDATE_RUNES = "update_runes",
	RUNE_DELETE_RUNE = "delete_rune",
	RUNE_DELETE_RUNES = "delete_runes",

	ASPECT_GET_ASPECT = "get_aspect",
	ASPECT_GET_ASPECTS = "get_aspects",
	ASPECT_INSERT_ASPECT = "insert_aspect",
	ASPECT_INSERT_ASPECTS = "insert_aspects",
	ASPECT_UPDATE_ASPECT = "update_aspect",
	ASPECT_UPDATE_ASPECTS = "update_aspects",
	ASPECT_DELETE_ASPECT = "delete_aspect",
	ASPECT_DELETE_ASPECTS = "delete_aspects",

	AUTH_LOGIN = "auth_login",
}
