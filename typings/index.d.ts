/**
 * Absolute path to the jar file with the standalone selenium server.
 * You can use this path directly to start the server in other packages, e.g.
 * ```
 * import * as jar from 'selenium-server-standalone-jar';
 * import * as remote from "selenium-webdriver/remote";
 * declare global { var server: any; }
 * globalThis.server = new remote.SeleniumServer(jar.path, {port: 8080});
 * await globalThis.server.start();
 * ```
 */
export const path: string
/**
 * Version of the standalone selenium server.
 */
export const version: string
