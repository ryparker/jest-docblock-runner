import type {Test as JestTest} from 'jest-runner';
import * as fs from 'fs';
import {parse as parseDocBlockPragmas} from 'jest-docblock';

export type TestBlock = {
	testName: string;
	pragmas: string;
};

const TEST_BLOCK_REGEX = /(fit|it|xit|test|xtest)(.each\(\S*\))?\(\s*(["'`])(?<testName>[\S ]*)(["'`]),\s*(async\s*)?\((\S*)?\)\s*=>\s*{\s*(?<docBlock>\/\*\*?(.|\r?\n)*?\*\/)/gm;

export const filterByPragma = (testFiles: JestTest[], pragmasToMatch: Record<string, string[]>) => {
	if (testFiles.length === 0) {
		return [];
	}

	return _filterFileTestCasesByPragma(testFiles, pragmasToMatch);
};

function _filterFileTestCasesByPragma(testFiles: JestTest[], pragmasToMatch: Record<string, string[]>) {
	const matchingTestFiles: JestTest[] = [];

	for (const testFile of testFiles) {
		const source = fs.readFileSync(testFile.path).toString();

		const testBlocks = _findTestBlocksWithPragmas(source);

		if (!testBlocks || testBlocks.length === 0) {
			continue;
		}

		const matchingTestBlocks = testBlocks.filter(testBlock => _doPragmasHaveMatchingValues(testBlock.pragmas, pragmasToMatch));

		if (matchingTestBlocks.length > 0) {
			const testNamePattern = matchingTestBlocks.map(testBlock => testBlock.name).join('|');

			/** @privateRemarks
			 *  Typescript expects JestTest to be readonly.
       *  The workaround for now is to make a clone.
			 */

			// TODO: Modify Jest Types to enable modifying this within the Jest-Runner or find a cleaner way to clone this.

			matchingTestFiles.push({...testFile, context: {
				...testFile.context,
				config: {
					...testFile.context.config,
					testNamePattern
				}
			}
			});
		}
	}

	return matchingTestFiles;
}

function _findTestBlocksWithPragmas(source: string) {
	let match;
	const groups = [];

	do {
		match = TEST_BLOCK_REGEX.exec(source);
		if (match) {
			const group = {...match.groups};
			const name = group?.testName;
			const docBlock = group?.docBlock.replace(/\t/g, '');
			const pragmas = {...parseDocBlockPragmas(docBlock)};

			if (pragmas !== {}) {
				groups.push({
					name,
					docBlock,
					pragmas
				});
			}
		}
	} while (match);

	return groups;
}

function _doPragmasHaveMatchingValues(pragmas: Record<string, string | string[]>, pragmasToMatch: Record<string, string[]>) {
	const pragmaKeysToMatch = Object.keys(pragmasToMatch);

	for (const pragmaKeyToMatch of pragmaKeysToMatch) {
		const pragma = pragmas[pragmaKeyToMatch];
		const pragmaToMatch = pragmasToMatch[pragmaKeyToMatch];

		if (!pragma) {
			return false;
		}

		const hasMatchingPragmaValue = pragmaToMatch.some(valuesToMatch => pragma.includes(valuesToMatch));

		if (hasMatchingPragmaValue) {
			return true;
		}
	}

	return false;
}
