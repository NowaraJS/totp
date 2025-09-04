import type { TotpOptions } from './totp-options';

/**
 * Options for TOTP verification
 */
export interface VerifyOptions extends TotpOptions {
	/**
	 * Time window for verification (±window periods)
	 *
	 * @defaultValue 1
	 */
	window?: number;
	/**
	 * Current timestamp in milliseconds
	 *
	 * @defaultValue Date.now()
	 */
	now?: number;
}
