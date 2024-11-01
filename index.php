<?php 
/* Plugin Name: Strong Admin Template
Plugin URI: http://plugins.phploaded.com/wpsa/
Description: This plugin replaces your default admin template to a new colourful and strong template. You can change the colours to any possible color you want.
Author: Satish Kumar Sharma
Version: 1.0
Author URI: http://profiles.wordpress.org/sakush100
*/

function register_wpsa_options(){
register_setting( 'wpsa-options', 'dark-color' );
register_setting( 'wpsa-options', 'light-color' );
register_setting( 'wpsa-options', 'link-color' );
register_setting( 'wpsa-options', 'button-primary-color' );
register_setting( 'wpsa-options', 'button-common-color' );
register_setting( 'wpsa-options', 'loginlogo' );
}

add_action( 'admin_init', 'register_wpsa_options' );

define('wpsaPATH', dirname(__FILE__).'/');
define('wpsaURL', plugins_url( '/', __FILE__ ));


function include_wpsa_setting_page(){
include('wpsa-settings.php');
}

function wpsa_docs_page(){
include('wpsa-docs.php');
}


function wpsa_admin_actions() {  
add_menu_page('WP Strong', 'WP Strong','activate_plugins','wpsa-settings.php', 'include_wpsa_setting_page',plugins_url( 'images/icon.png', __FILE__ ),690); 
}  

add_action('admin_menu', 'wpsa_admin_actions');


function init_wpsa_admin() {
wp_enqueue_script( 'jquery' );
wp_enqueue_style( 'wp-color-picker' );
wp_enqueue_script( 'wp-color-picker-script', plugins_url('script.js', __FILE__ ), array( 'wp-color-picker' ), false, true );
wp_register_script( 'wpsaajs', plugins_url( 'js/admin.js', __FILE__ ));
wp_enqueue_script( 'wpsaajs' );
wp_register_style( 'wpsaacss', plugins_url( 'css/admin.css', __FILE__ ));
wp_enqueue_style( 'wpsaacss' );
wp_register_style( 'wpsafont2', 'http://fonts.googleapis.com/css?family=Amaranth:400italic,700italic');
wp_enqueue_style( 'wpsafont2' );
wp_enqueue_media();
}

function wpsa_clean($data){
$data = htmlentities($data, ENT_COMPAT, "UTF-8");
return $data;
}

function wpsa_footer(){
echo"<script type=\"text/javascript\">wpsa_write_css('".get_option('dark-color')."', '".get_option('light-color')."', '".get_option('link-color')."', '".get_option('button-primary-color')."', '".get_option('button-common-color')."', '".get_option('loginlogo')."');</script>";
}

add_action('admin_print_scripts', 'init_wpsa_admin');
add_action( 'login_enqueue_scripts', 'init_wpsa_admin');
add_action('admin_footer', 'wpsa_footer',1);
add_action('login_footer', 'wpsa_footer',1);
?>