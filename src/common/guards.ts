import Lib from "common/lib";
import type { NonNullableType } from "common/types";

class Guards {
	public static IsString(value: any): value is string;
	public static IsString(value: any, excludeNull: true): value is NonNullableType<string>;
	public static IsString(value: any, excludeNull: boolean = false): value is string | NonNullableType<string> {
		const output = Lib.IsString(value);
		return excludeNull ? !Guards.IsNil(value) && output : output;
	}

	public static IsNumber(value: any): value is number;
	public static IsNumber(value: any, excludeNull: true): value is NonNullableType<number>;
	public static IsNumber(value: any, excludeNull: boolean = false): value is number | NonNullableType<number> {
		const output = Lib.IsNumber(value);
		return excludeNull ? !Guards.IsNil(value) && output : output;
	}

	public static IsBoolean(value: any): value is boolean;
	public static IsBoolean(value: any, excludeNull: true): value is NonNullableType<boolean>;
	public static IsBoolean(value: any, excludeNull: boolean = false): value is boolean | NonNullableType<boolean> {
		const output = Lib.GetType(value, true) === "boolean";
		return excludeNull ? !Guards.IsNil(value) && output : output;
	}

	public static IsArray<T>(value: any): value is T[];
	public static IsArray<T>(value: any, excludeNull: true): value is NonNullableType<T[]>;
	public static IsArray<T>(value: any, excludeNull: boolean = false): value is T[] | NonNullableType<T[]> {
		const output = Lib.IsArray(value);
		return excludeNull ? !Guards.IsNil(value) && output : output;
	}

	public static IsObject(value: any): value is object;
	public static IsObject(value: any, excludeNull: true): value is NonNullableType<object>;
	public static IsObject(value: any, excludeNull: boolean = false): value is object | NonNullableType<object> {
		const output = Lib.IsObject(value);
		return excludeNull ? !Guards.IsNil(value) && output : output;
	}

	public static IsFunction(value: any): value is Function;
	public static IsFunction(value: any, excludeNull: true): value is NonNullableType<Function>;
	public static IsFunction(value: any, excludeNull: boolean = false): value is Function | NonNullableType<Function> {
		const output = Lib.IsFunction(value);
		return excludeNull ? !Guards.IsNil(value) && output : output;
	}

	public static IsNil(value: any): value is null | undefined {
		return Lib.IsNil(value);
	}

	public static IsType<T>(obj: any, keys: (keyof T)[]): obj is T {
		return keys.every((key) => key in obj);
	}
}

export default Guards;
