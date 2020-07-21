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

import {scrapeJestTests} from './test-scraper';
import TestRunner = require('jest-runner');

export type TestBlock = {
	testName: string;
	docBlock?: string;
};

// Export type UserArgs: Record<string, string[]>;

export default class AllureTestRunner extends TestRunner {
	private readonly userArgs?: Record<string, string[]> = {};

	constructor(globalConfig: Config.GlobalConfig, context?: JestTestRunnerContext) {
		super(globalConfig, context);
		// Super.testNamePattern = '(pragma is detected, when provided an @tag|pragma is detected, when provided a description located above the pragma)';
		const cliArgs = process.argv.slice(2);
		this.userArgs = this.extractArgs(cliArgs);

		console.log('this.userArgs:', this.userArgs);
	}

	async runTests(
		tests: JestTest[],
		watcher: JestTestWatcher,
		onStart: JestOnTestStart,
		onResult: JestOnTestSuccess,
		onFailure: JestOnTestFailure,
		options: JestTestRunnerOptions): Promise<void> {
		const testsToRun = this.userArgs ? scrapeJestTests(tests, this.userArgs) : tests;

		testsToRun.map(t => console.log('testNamePattern:', t.context.config.testNamePattern));

		return super.runTests(testsToRun, watcher, onStart, onResult, onFailure, options);
	}

	private extractArgs(cliArgs: string[]) {
		if (cliArgs.length === 0) {
			return;
		}

		const collectedArgs: Record<string, string[]> = {};

		for (const arg of cliArgs) {
			const [key, value] = arg.split('=', 2);

			// Removing "--" prefix from key
			// Removing possible spaces from comma separated values
			collectedArgs[key.slice(2)] = value.split(',').map(s => s.trim());
		}

		return collectedArgs;
	}
}
