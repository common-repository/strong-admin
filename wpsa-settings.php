<div class="wrap">

<div class="icon32" id="icon-options-strong"><br></div><h2>WP Strong Settings</h2>

<form method="post" action="options.php">
<?php settings_fields( 'wpsa-options' ); ?>
<table class="form-table">
<tr valign="top">
<th scope="row">Choose a dark color</th>
<td><input type="text" class="wpsa-color" name="dark-color" value="<?php echo get_option('dark-color'); ?>" /></td>
</tr>
 
<tr valign="top">
<th scope="row">Choose a light color</th>
<td><input type="text" class="wpsa-color" name="light-color" value="<?php echo get_option('light-color'); ?>" /></td>
</tr>
<tr valign="top">
<th scope="row">Choose color for links</th>
<td><input type="text" class="wpsa-color" name="link-color" value="<?php echo get_option('link-color'); ?>" /></td>
</tr>
<tr valign="top">
<th scope="row">Primary button color</th>
<td><input type="text" class="wpsa-color" name="button-primary-color" value="<?php echo get_option('button-primary-color'); ?>" /></td>
</tr>
<tr valign="top">
<th scope="row">Common button color</th>
<td><input type="text" class="wpsa-color" name="button-common-color" value="<?php echo get_option('button-common-color'); ?>" /></td>
</tr>
<tr valign="top">
<th scope="row">Choose logo (274 X 63)</th>
<td>
<div class="uploader">
  <input type="text" name="loginlogo" value="<?php echo get_option('loginlogo'); ?>" id="loginlogo" />
  <input type="button" class="button button-upload" name="loginlogo_button" id="loginlogo_button" value="Choose" />
</div>

</td>
</tr>
</table>

<?php submit_button(); ?>

</form>

</div>
<script>
jQuery(document).ready(function($){
jQuery('.wpsa-color').wpColorPicker();
});
</script>