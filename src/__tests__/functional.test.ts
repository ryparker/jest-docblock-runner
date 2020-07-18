import * as Runner from '..';

test('all exports are importable, using "import * as Runner"', () => {
	expect(typeof Runner).toBe('function');
});

test('test runs, without pragma', () => {
	expect(1 + 2).toBe(3);
});

test('pragma is detected, when provided an @tag', () => {
	/**
   * @tag core
   */

	expect(1 + 2).toBe(3);
});

