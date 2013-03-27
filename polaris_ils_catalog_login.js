
var polaris_ils_submitted = "false";

function polaris_ils_submitforms() {
	jQuery("#polaris_iframe").contents().find("#userid").val(jQuery("#edit-name").val());
	jQuery("#polaris_iframe").contents().find("#password").val(jQuery("#edit-pass").val());
	jQuery("#polaris_iframe").contents().find("#polaris_login_form").submit();
	setTimeout(
		function() {
			window.polaris_ils_submitted = "true";
			jQuery("#user-login-form").submit();
			
		}, 
		500
	)
}


jQuery(function() {
	jQuery("#user-login-form").submit( function(e) {
		if (window.polaris_ils_submitted == "false") {
			e.preventDefault();
			polaris_ils_submitforms();
		}
		else {
			return true;
		}
	})
})

