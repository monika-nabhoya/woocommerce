<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'woocommerce' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Mfjv%:ML>l_X,_;uwZUg5kq-gVvC}G@Ut^l:>uU*?jh6Q)Zu|T|s{F]mu7LO-/zv' );
define( 'SECURE_AUTH_KEY',  'ysEjtSP87fK]4JBN=YW>3()K?6M~~QIq!yl@`(+QTez9Z4csoGv.Cx;5$2_4pR!)' );
define( 'LOGGED_IN_KEY',    'kF3E8io}j.:E|-hZo.,s/sOmi!YTP!dmLC@VX-k&cUfCNGpp*_n)S9&Q;TX~Ty 5' );
define( 'NONCE_KEY',        'yc.!.wOnctAoF0;S:umUe6N-9V^Z_D{3z5e<#UJO@,Qsu<Mh(G}9>[0DO28;iV2M' );
define( 'AUTH_SALT',        '&njy+0@UODz[T$|(c9wF>2cdknEB}vy_JT/_X~T-NVj#u(WSP&)v3pCdm}+#pE*s' );
define( 'SECURE_AUTH_SALT', 'q~/^-Sj)_.+iA06EPmm0%Kg|+6J^:9Y1H#pZPfj9KF]BFWE#e)Xs85Ez4jk#eGf(' );
define( 'LOGGED_IN_SALT',   'F5lDxd}S_rM.q#>[(vk;th-#?$0xiDPgo4~p#7]O+V^irXaZIF7EQTbR1/9A|Ex#' );
define( 'NONCE_SALT',       ';]jA{3#cjT8OqM7)M~u0g}-)4c:9: ]b4 6RiC]0*Xm3W>~tcB<32jm}|FU:%#AF' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
