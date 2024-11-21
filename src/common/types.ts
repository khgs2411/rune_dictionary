import type { UserModel } from "models/users.model";
import type { Actions } from "./enums";

export type NonNullableType<T> = Exclude<T, null | undefined>;

export interface Request<T = any> extends DoFunctionArgs {
	api_key: string;
	action?: Actions;
	data?: T;
}

export interface ProcessArgs {
	user: UserModel;
	strategy: Strategy;
}

export type StrategyType = "rune" | "aspect";

export interface Strategy {
	action: Actions;
	data: any;
	type: StrategyType;
}
