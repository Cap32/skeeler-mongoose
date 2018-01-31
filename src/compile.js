import { Schema } from 'mongoose';

export default function compile(config, options = {}) {
	return new Schema(config, options);
}
