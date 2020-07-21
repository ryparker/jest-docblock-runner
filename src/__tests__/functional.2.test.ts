import * as Runner from '..';

test('(file2) all exports are importable, using "import * as Runner"', () => {
	expect(typeof Runner).toBe('function');
});

test('(file2) pragma is detected, when provided an @tag(1)', () => {
	/**
	 * @tag minor
	 */

	expect(1 + 2).toBe(3);
});

test('(file2) pragma is detected, when provided an @tag(2)', () => {
	/**
   * @tag core
   */

	expect(1 + 2).toBe(3);
});

