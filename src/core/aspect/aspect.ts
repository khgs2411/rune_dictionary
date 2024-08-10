import type { Dto, Serializable } from "common/dto";
import type { BOOLEANISH } from "common/enums";
import type { AspectCreationData } from "./aspect.types";
import crypto from "crypto";

class Aspect implements Serializable<Aspect> {
	aspect_id?: number;
	hash?: string;
	tier: number;
	weight: number;
	potency: number;
	rune_ids: number[];
	required_rune_ids: number[];
	blocked_aspect_ids: number[];
	is_damage: number;
	is_typed: number;
	is_dot: number;
	is_range: number;
	hit_count: number;
	wait_turns: number;
	percent: number;
	convert: BOOLEANISH;

	constructor(data: AspectCreationData) {
		this.tier = data.tier;
		this.weight = data.weight;
		this.potency = data.potency;
		this.rune_ids = data.rune_ids;
		this.required_rune_ids = data.required_rune_ids;
		this.blocked_aspect_ids = data.blocked_aspect_ids;
		this.is_damage = data.is_damage ?? 1;
		this.is_typed = data.is_typed ?? 0;
		this.is_dot = data.is_dot ?? 0;
		this.is_range = data.is_range ?? 0;
		this.hit_count = data.hit_count ?? 0;
		this.wait_turns = data.wait_turns ?? 0;
		this.percent = data.percent ?? 0;
		this.convert = data.convert ?? 0;
		this.getHashCode();
	}

	public getHashCode() {
		if (!this.hash) {
			const hash = crypto.createHash("sha256");

			// Concatenate all properties into a single string
			const dataString = [
				this.tier,
				this.weight,
				this.potency,
				this.rune_ids.join(","), // Join array elements with a comma
				this.required_rune_ids.join(","),
				this.blocked_aspect_ids.join(","),
				this.is_damage,
				this.is_typed,
				this.is_dot,
				this.is_range,
				this.hit_count,
				this.wait_turns,
				this.percent,
				this.convert,
			].join("|"); // Use a delimiter that won't appear in the data

			// Generate the hash from the concatenated string
			hash.update(dataString);
			this.hash = hash.digest("hex");
		}
		return this.hash;
	}

	serialize(): Dto<Aspect> {
		return this;
	}
}
export default Aspect;