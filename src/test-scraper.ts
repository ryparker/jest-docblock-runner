import type {Test as JestTest} from 'jest-runner';
import * as fs from 'fs';
import {parse as parseDocBlockPragmas} from 'jest-docblock';

export type TestBlock = {
	testName: string;
	pragmas: string;
};

const TEST_BLOCK_REGEX = /(fit|it|xit|test|xtest)\(("|')(?<testName>[\S ]*)("|'),\s*\(\)\s*=>\s*{\s*(?<docBlock>\/\*\*?(.|\r?\n)*?\*\/)/gm;

export const scrapeJestTests = (testFiles: JestTest[], pragmasToMatch: Record<string, string[]>) => {
	if (testFiles.length === 0) {
		return [];
	}

	return parseTestFiles(testFiles, pragmasToMatch);
};

function parseTestFiles(testFiles: JestTest[], pragmasToMatch: Record<string, string[]>) {
	const matchingTestFiles: JestTest[] = [];

	for (const testFile of testFiles) {
		const source = fs.readFileSync(testFile.path).toString();

		const testBlocks = findTestBlocksWithPragmas(source);

		if (!testBlocks || testBlocks.length === 0) {
			continue;
		}

		const matchingTestBlocks = testBlocks.filter(testBlock => matchPragmas(testBlock.pragmas, pragmasToMatch));

		if (matchingTestBlocks) {
			const testNamePattern = matchingTestBlocks.map(testBlock => testBlock.name).join('|');

			const testFileClone = Object.assign(testFile);
			testFileClone.context.config.testNamePattern = testNamePattern;

			matchingTestFiles.push(testFileClone);

			// MatchingTestFiles.push({...testFile, context: {
			// 	...testFile.context,
			// 	config: {
			// 		...testFile.context.config,
			// 		testNamePattern
			// 	}
			// }
			// });
		}

		console.log({matchingTestBlocks});
	}

	return matchingTestFiles;
}

function matchPragmas(pragmas: Record<string, string | string[]>, pragmasToMatch: Record<string, string[]>) {
	const pragmaKeysToMatch = Object.keys(pragmasToMatch);

	for (const pragmaKeyToMatch of pragmaKeysToMatch) {
		const pragma = pragmas[pragmaKeyToMatch];
		const pragmaToMatch = pragmasToMatch[pragmaKeyToMatch];

		if (pragma && pragmaToMatch.some(valuesToMatch => pragma.includes(valuesToMatch))) {
			return true;
		}
	}

	return false;
}

function findTestBlocksWithPragmas(source: string) {
	let match;
	const groups = [];

	do {
		match = TEST_BLOCK_REGEX.exec(source);
		if (match) {
			const group = {...match.groups};
			const name = group?.testName;
			const docBlock = group?.docBlock.replace('\t', '');
			const pragmas = parseDocBlockPragmas(docBlock);

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
