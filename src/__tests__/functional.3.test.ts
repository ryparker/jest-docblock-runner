import * as Runner from '..';

test('(file3) all exports are importable, using "import * as Runner"', () => {
	/**
	 * @tag trivial
	 */

	expect(typeof Runner).toBe('function');
});

test('runs, without pragma', () => {
	expect(1 + 2).toBe(3);
});
