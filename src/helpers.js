import { Schema } from 'mongoose';

const { Types } = Schema;

export const getType = function getType(val) {
	return function type(ctx) {
		ctx.state.type = val;
	};
};

export const array = function array(ctx, arrayOf) {
	ctx.state.type = arrayOf ? [arrayOf] : Array;
};

export const object = function object(ctx, subSchema, options) {
	ctx.state.type = subSchema ? new Schema(subSchema, options) : Types.Mixed;
};

export const setDefaultTrue = function setDefaultTrue(ctx, val = true) {
	ctx.state[ctx.key] = val;
};

export const setter = function setter(ctx, val) {
	ctx.state[ctx.key] = val;
};
