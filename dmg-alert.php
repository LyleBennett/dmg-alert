<?php
/**
 * Plugin Name:       Dmg Alert
 * Description:       An alert block as well as a cli command to query posts which contain the alert block.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Lyle Bennett
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dmg-alert
 *
 * @package           create-block
 */

// Register Alert Block
function create_block_dmg_alert_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_dmg_alert_block_init' );

if ( defined( 'WP_CLI' ) && WP_CLI ) {
	include_once __DIR__. '/inc/dmg-cli.php';
}
