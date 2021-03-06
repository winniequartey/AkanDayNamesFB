'use strict';


function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

	window.fbAsyncInit = function() {
        FB.init({
          appId      : '1484922191758460',
          xfbml      : true,
          version    : 'v2.1'
        });
		
		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});	
		
	};

    (function(d, s, id){
			 var js, fjs = d.getElementsByTagName(s)[0];
			 if (d.getElementById(id)) {return;}
			 js = d.createElement(s); js.id = id;
			 js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1484922191758460&version=v2.1";
			 fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
	   
	function testAPI() {
		console.log('Welcome!  Fetching your information.... ');
		FB.api('me?fields=id,name,gender,birthday,email', function(response) {
		  console.log('Successful login for: ' + response.name);
		   document.getElementById('status').innerHTML =
			'Thanks for logging in, ' + response.name;
			
			document.getElementById('birthday').innerHTML = response.birthday;

			document.getElementById('gender').innerHTML = response.gender;
		});
	}

	/* make the API call */
/*FB.api(
    "/me/birthday",
    function (response) {
      if (response && !response.error) {
		console.log('birthday: ' + response.birthday);
        /* handle the result */
  /*    }
    }
);*/
