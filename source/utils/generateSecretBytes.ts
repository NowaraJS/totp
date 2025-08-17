import { BaseError } from '@nowarajs/error';
import { getRandomValues } from 'crypto';

import { TOTP_ERROR_KEYS } from '#/enums/totpErrorKeys';

/**
 * Generate cryptographically secure random bytes for TOTP secret
 *
 * @param length - Number of bytes to generate (default: 20)
 *
 * @throws ({@link BaseError}) if length is not positive
 *
 * @returns Uint8Array containing the random bytes
 */
export const generateSecretBytes = (length = 20): Uint8Array => {
	if (length <= 0)
		throw new BaseError({
			message: TOTP_ERROR_KEYS.INVALID_SECRET_LENGTH
		});
	return getRandomValues(new Uint8Array(length));
};