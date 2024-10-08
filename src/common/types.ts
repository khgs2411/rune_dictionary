import type { UserModel } from "models/users.model";
import type { Actions } from "./enums";

export type NonNullableType<T> = Exclude<T, null | undefined>;

export interface Request extends DoFunctionArgs {
	api_key: string;
	action?: Actions;
	data?: any;
}

export interface ProcessArgs {
	user: UserModel;
	instructions: Instructions;
}

export interface Instructions {
	action: Actions;
	data: any;
	service: "rune" | "aspect";
}
