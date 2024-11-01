function wpsa_write_css(a, b, c, d, e, f){
var xhtml ='<style type="text/css">\
.revisions-meta, .widget .widget-top, .postbox h3, .stuffbox h3, .widefat thead tr th, .widefat tfoot tr th, h3.dashboard-widget-title, h3.dashboard-widget-title span, h3.dashboard-widget-title small, .sidebar-name, #nav-menu-header, #nav-menu-footer, .menu-item-handle,\
#adminmenu li.menu-top:hover, #adminmenu li.opensub > a.menu-top, #adminmenu li > a.menu-top:focus,\
#adminmenu li.wp-not-current-submenu .wp-menu-arrow div, body.login, #wpadminbar, #wpadminbar .ab-top-secondary,\
#adminmenu li.wp-has-current-submenu a.wp-has-current-submenu, #adminmenu li.current a.menu-top, .folded #adminmenu li.wp-has-current-submenu, .folded #adminmenu li.current.menu-top, #adminmenu .wp-menu-arrow, #adminmenu .wp-has-current-submenu .wp-submenu .wp-submenu-head,\
#adminmenu .wp-menu-arrow div, #adminmenu li.wp-menu-separator, #adminmenu div.separator, #adminmenu .wp-submenu a:hover, #adminmenu .wp-submenu a:focus,\
#wpadminbar .menupop li:hover, #wpadminbar .menupop li.hover, #wpadminbar .quicklinks .menupop .ab-item:focus, #wpadminbar .quicklinks .ab-top-menu .menupop .ab-item:focus{\
background-color: '+a+';\
}\
\
#wpadminbar .quicklinks > ul > li, #wpadminbar .quicklinks .ab-top-secondary > li > a, #wpadminbar .quicklinks .ab-top-secondary > li > .ab-empty-item,\
.postbox h3, .widget, #widget-list .widget-top, .postbox, #titlediv, #poststuff .postarea, .stuffbox, table.widefat,\
.widefat td, .widefat th, #adminmenuback, #adminmenuwrap, #adminmenu a.menu-top, #adminmenu .wp-submenu .wp-submenu-head, #adminmenu li.wp-not-current-submenu .wp-menu-arrow,\
#adminmenu li.menu-top:hover, #adminmenu li.opensub > a.menu-top, #adminmenu li > a.menu-top:focus, #adminmenu li.wp-not-current-submenu .wp-menu-arrow div,\
#screen-options-link-wrap, #contextual-help-link-wrap, #screen-meta, #contextual-help-back, .contextual-help-tabs .active,\
textarea, input[type="text"], input[type="password"], input[type="file"], input[type="email"], input[type="number"], input[type="search"], input[type="tel"], input[type="url"], select,\
#post-status-info, .quicktags-toolbar, .wp_themeSkin tr.mceFirst td.mceToolbar, .tmce-active .switch-tmce, .html-active .switch-html,\
.login form .input, .login input[type="text"], div.updated, .login .message, .wp-editor-container{\
border-color:'+a+';\
}\
\
.wrap .add-new-h2, .wrap .add-new-h2:active, div.updated, .login .message, .widget, #widget-list .widget-top, .postbox, .menu-item-settings,\
table.widefat, .checkbox, .side-info, .plugins tr, #your-profile #rich_editing, #adminmenuback, #adminmenuwrap,\
#screen-options-link-wrap, #contextual-help-link-wrap, #screen-meta, #post-status-info, .quicktags-toolbar, .wp_themeSkin tr.mceFirst td.mceToolbar, .tmce-active .switch-tmce, .html-active .switch-html{\
background-color:'+b+';\
}\
\
a, #adminmenu a, #the-comment-list p.comment-author strong a, #media-upload a.del-link, #media-items a.delete, #media-items a.delete-permanently, .plugins a.delete, .ui-tabs-nav a,\
#wpadminbar .quicklinks .menupop ul li a, #wpadminbar .quicklinks .menupop ul li a strong, #wpadminbar .quicklinks .menupop.hover ul li a, #wpadminbar.nojs .quicklinks .menupop:hover ul li a{\
color:'+c+';\
}\
\
.wp-core-ui .button, .wp-core-ui .button-secondary, .wp-core-ui .button.hover, .wp-core-ui .button:hover, .wp-core-ui .button-secondary:hover, .wp-core-ui .button.focus, .wp-core-ui .button:focus, .wp-core-ui .button-secondary:focus{\
background-color:'+e+';\
border-color:'+e+';\
}\
\
.wp-core-ui .button-primary[disabled], .wp-core-ui .button-primary:disabled, .wp-core-ui .button-primary-disabled,.wp-core-ui .button-primary.active, .wp-core-ui .button-primary.active:hover, .wp-core-ui .button-primary.active:focus, .wp-core-ui .button-primary:active,\
.wp-core-ui .button-primary[disabled], .wp-core-ui .button-primary:disabled, .wp-core-ui .button-primary-disabled{\
background-color:'+d+' !important;\
border-color:'+d+' !important;\
}\
\
.wp-core-ui .button-primary, .wp-core-ui .button-primary.hover, .wp-core-ui .button-primary:hover, .wp-core-ui .button-primary.focus, .wp-core-ui .button-primary:focus{\
background-color:'+d+';\
border-color:'+d+';\
}\
.login h1 a{background-image:url(\''+f+'\');}\
</style>';
document.write(xhtml);
}








jQuery(document).ready(function($){
  var _custom_media = true,
      _orig_send_attachment = wp.media.editor.send.attachment;

  $('#loginlogo_button').click(function(e) {
    var send_attachment_bkp = wp.media.editor.send.attachment;
    var button = $(this);
    var id = button.attr('id').replace('_button', '');
    _custom_media = true;
    wp.media.editor.send.attachment = function(props, attachment){
      if ( _custom_media ) {
        $("#"+id).val(attachment.url);
      } else {
        return _orig_send_attachment.apply( this, [props, attachment] );
      };
    }

    wp.media.editor.open(button);
    return false;
  });

  $('.add_media').on('click', function(){
    _custom_media = false;
  });
});