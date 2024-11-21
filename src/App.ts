import { Actions } from "common/enums";
import Guards from "common/guards";
import Lib from "common/lib";
import type { Strategy, ProcessArgs, Request, StrategyType } from "common/types";
import UsersRepository from "repositories/users.repo";
import AspectService from "services/aspects.service";
import RuneService from "services/runes.service";

class App {

	public static async Request(args: DoFunctionArgs): Promise<ProcessArgs> {
		const user = await UsersRepository.Validate(args.api_key);
		const strategy = this.setActionStrategy(args as Request);
		return { user, strategy };
	}

	public static async Process(args: ProcessArgs) {
		return await this.StrategyCall(args.strategy.type)(args);
	}

	public static Response(body?: any) {
		return {
			body: body,
			code: 200,
		};
	}

	public static Error(code: number = 401, e: unknown) {
		Lib.Warn(code, e);
		return {
			body: e,
			code: code,
		};
	}

	private static setActionStrategy(args: Request): Strategy {
		if (Guards.IsNil(args.action) || Lib.IsEmpty(args.action)) throw "No action provided!";
		if (!Object.values(Actions).includes(args.action)) throw "Invalid action provided!";
		// if (Guards.IsNil(args.data) || Lib.IsEmpty(args.data)) throw "No data provided!";
		if (Guards.IsNil(args.data)) throw "No data provided!";
		const type = args.action.includes("rune") ? "rune" : args.action.includes("aspect") ? "aspect" : "unknown";
		if (type === "unknown") throw "Invalid action provided!";
		return {
			action: args.action,
			data: args.data,
			type: type,
		};
	}

	private static StrategyCall(strategyType:StrategyType) {
		const types = {
			"rune": RuneService.Call,
			"aspect": AspectService.Call,
		}
		return types[strategyType];
	}
}

export default App;
