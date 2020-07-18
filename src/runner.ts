import TestRunner = require('jest-runner');
import type {OnTestFailure as JestOnTestFailure, OnTestStart as JestOnTestStart, OnTestSuccess as JestOnTestSuccess, Test as JestTest, TestRunnerOptions as JestTestRunnerOptions, TestWatcher as JestTestWatcher} from 'jest-runner';

export default class AllureTestRunner extends TestRunner {
	async runTests(tests: JestTest[], watcher: JestTestWatcher, onStart: JestOnTestStart, onResult: JestOnTestSuccess, onFailure: JestOnTestFailure, options: JestTestRunnerOptions): Promise<void> {
		console.log({tests});

		return super.runTests(tests, watcher, onStart, onResult, onFailure, options);
	}
}
