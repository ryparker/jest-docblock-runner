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

test('pragma @is detected, when provided a description located above the pragma', () => {
	/**
   * @tag minor
   */

	expect(1 + 2).toBe(3);
});

test('pragma is detected, when provided a description located above the pragma', () => {
	/** This is a description located above the pragma
   * @tag minor
   */

	expect(1 + 2).toBe(3);
});

test('(file2) pragma is detected, when provided an @tag minor(2)', () => {
	/**
	 * @tag minor
	 */

	expect(1 + 2).toBe(3);
});
