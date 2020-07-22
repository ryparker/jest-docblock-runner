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
	private readonly _userArgs?: Record<string, string[]>;

	constructor(globalConfig: Config.GlobalConfig, context?: JestTestRunnerContext) {
		super(globalConfig, context);

		const cliArgs = process.argv.slice(2);

		if (Array.isArray(cliArgs) && cliArgs.length > 0) {
			this._userArgs = this._extractArgs(cliArgs);
		}
	}

	async runTests(
		tests: JestTest[],
		watcher: JestTestWatcher,
		onStart: JestOnTestStart,
		onResult: JestOnTestSuccess,
		onFailure: JestOnTestFailure,
		options: JestTestRunnerOptions): Promise<void> {
		let testsToRun: JestTest[] = tests;

		if (this._userArgs && Object.keys(this._userArgs).length > 0) {
			console.debug('Jest DocBlock runner detected user arguments:', this._userArgs);

			const filteredTests = filterByPragma(tests, this._userArgs);

			if (filteredTests.length > 0) {
				testsToRun = filteredTests;
			}
		}

		return super.runTests(testsToRun, watcher, onStart, onResult, onFailure, options);
	}

	private _extractArgs(cliArgs: string[]) {
		const collectedArgs: Record<string, string[]> = {};

		for (const arg of cliArgs) {
			const [key, value] = arg.split('=', 2);

			if (!value) {
				continue;
			}

			/** @privateRemarks
			 *  Removing "--" prefix from key.
			 *  Removing possible spaces from comma separated values.
			 */
			collectedArgs[key.slice(2)] = value.split(',').map(s => s.trim());
		}

		return collectedArgs;
	}
}
