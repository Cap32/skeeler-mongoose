import Skeeler from 'skeeler';
import SkeelerMongoose from './src';
import { Schema } from 'mongoose';

describe('skeeler mongoose', function () {
	const name = 'json';
	const types = Skeeler.use(name, new SkeelerMongoose()).getTypes();

	test('should export a mongoose schema instance', function () {
		const schema = new Skeeler().export(name);
		expect(schema).toBeInstanceOf(Schema);
	});

	test('should string work', function () {
		const schema = new Skeeler({ foo: types.string }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.String);
	});

	test('should number work', function () {
		const schema = new Skeeler({ foo: types.number }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Number);
	});

	test('should boolean work', function () {
		const schema = new Skeeler({ foo: types.boolean }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Boolean);
	});

	test('should date work', function () {
		const schema = new Skeeler({ foo: types.date }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Date);
	});

	test('should buffer work', function () {
		const schema = new Skeeler({ foo: types.buffer }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Buffer);
	});

	test('should mixed work', function () {
		const schema = new Skeeler({ foo: types.mixed }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Mixed);
	});

	test('should any work', function () {
		const schema = new Skeeler({ foo: types.any }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Mixed);
	});

	test('should objectId work', function () {
		const schema = new Skeeler({ foo: types.objectId }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.ObjectId);
	});

	test('should id work', function () {
		const schema = new Skeeler({ foo: types.id }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.ObjectId);
	});

	test('should array work', function () {
		const schema = new Skeeler({ foo: types.array }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Array);
	});

	test('should array() work', function () {
		const schema = new Skeeler({ foo: types.array(types.string) }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Array);
		expect(schema.paths.foo.caster).toBeInstanceOf(Schema.Types.String);
	});

	test('should object work', function () {
		const schema = new Skeeler({ foo: types.object }).export(name);
		expect(schema.paths.foo).toBeInstanceOf(Schema.Types.Mixed);
	});

	test('should object() work', function () {
		const schema = new Skeeler({
			foo: types.object({ bar: types.string }),
		}).export(name);
		expect(schema.singleNestedPaths['foo.bar']).toBeInstanceOf(
			Schema.Types.String,
		);
	});

	test('should required work', function () {
		const schema = new Skeeler({ foo: types.string.required }).export(name);
		expect(schema.paths.foo.isRequired).toBe(true);
	});

	test('should default work', function () {
		const schema = new Skeeler({ foo: types.string.default('bar') }).export(
			name,
		);
		expect(schema.paths.foo.defaultValue).toBe('bar');
	});
});
