import { describe, expect, test } from 'bun:test';

import { timeRemaining } from '#/utils/time-remaining';

describe.concurrent('timeRemaining', () => {
	test('should calculate the remaining time until the next TOTP code', () => {
		const period = 30;
		const now = Date.now();
		const remaining = timeRemaining(period, now);
		expect(remaining).toBeLessThan(period);
	});
});