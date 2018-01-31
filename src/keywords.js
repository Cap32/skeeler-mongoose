import { Schema } from 'mongoose';
import { getType, array, object, setDefaultTrue, setter } from './helpers';

const { Types } = Schema;

export default {
	string: getType(Types.String),
	number: getType(Types.Number),
	boolean: getType(Types.Boolean),
	date: getType(Types.Date),
	buffer: getType(Types.Buffer),
	any: getType(Types.Mixed),
	mixed: getType(Types.Mixed),
	array,
	object,
	objectId: getType(Types.ObjectId),
	id: getType(Types.ObjectId),

	required: setDefaultTrue,
	index: setDefaultTrue,
	unique: setDefaultTrue,
	text: setDefaultTrue,
	sparse: setDefaultTrue,
	select: setDefaultTrue,
	alias: setDefaultTrue,

	default: setter,
	set: setter,
	get: setter,
	validate: setter,
	ref: setter,
	refPath: setter,

	lowercase: setDefaultTrue,
	uppercase: setDefaultTrue,
	maxLength: setter,
	minLength: setter,
	trim: setDefaultTrue,
	match: setter,
	enum: setter,
	min: setter,
	max: setter,
};
