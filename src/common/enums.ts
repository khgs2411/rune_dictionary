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
export enum Actions {
	RUNE_GET_RUNE = "get_rune",
	RUNE_GET_RUNES = "get_runes",
	AFFIX_GET_AFFIX = "get_affix",
	AFFIX_GET_AFFIXES = "get_affixes",
	RUNE_INSERT_RUNE = "insert_rune",
	RUNE_INSERT_RUNES = "insert_runes",
	AFFIX_INSERT_AFFIX = "insert_affix",
	AFFIX_INSERT_AFFIXES = "insert_affixes",
	RUNE_UPDATE_RUNE = "update_rune",
	RUNE_UPDATE_RUNES = "update_runes",
	AFFIX_UPDATE_AFFIX = "update_affix",
	AFFIX_UPDATE_AFFIXES = "update_affixes",
	RUNE_DELETE_RUNE = "delete_rune",
	RUNE_DELETE_RUNES = "delete_runes",
	AFFIX_DELETE_AFFIX = "delete_affix",
	AFFIX_DELETE_AFFIXES = "delete_affixes",
}
