import type {
	OnTestFailure as JestOnTestFailure,
	OnTestStart as JestOnTestStart,
	OnTestSuccess as JestOnTestSuccess,
	Test as JestTest,
	TestRunnerOptions as JestTestRunnerOptions,
	TestWatcher as JestTestWatcher,
	TestRunnerContext as JestTestRunnerContext
} from 'jest-runner';
import type {Config} from '@jest/types';

import {filterByPragma} from './filter-by-pragma';
import TestRunner = require('jest-runner');

export type TestBlock = {
	testName: string;
	docBlock?: string;
};

export default class AllureTestRunner extends TestRunner {
	private readonly _userArgs?: Record<string, string[]> = {};

	constructor(globalConfig: Config.GlobalConfig, context?: JestTestRunnerContext) {
		super(globalConfig, context);

		const cliArgs = process.argv.slice(2);
		this._userArgs = this._extractArgs(cliArgs);

		console.debug('User arguments:', this._userArgs);
	}

	async runTests(
		tests: JestTest[],
		watcher: JestTestWatcher,
		onStart: JestOnTestStart,
		onResult: JestOnTestSuccess,
		onFailure: JestOnTestFailure,
		options: JestTestRunnerOptions): Promise<void> {
		const testsToRun = this._userArgs ? filterByPragma(tests, this._userArgs) : tests;

		return super.runTests(testsToRun, watcher, onStart, onResult, onFailure, options);
	}

	private _extractArgs(cliArgs: string[]) {
		if (cliArgs.length === 0) {
			return;
		}

		const collectedArgs: Record<string, string[]> = {};

		for (const arg of cliArgs) {
			const [key, value] = arg.split('=', 2);

			/** @privateRemarks
			 *  Removing "--" prefix from key.
			 *  Removing possible spaces from comma separated values.
			 */
			collectedArgs[key.slice(2)] = value.split(',').map(s => s.trim());
		}

		return collectedArgs;
	}
}
