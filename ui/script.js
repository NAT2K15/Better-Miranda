/*
-----------------------------------------------------------------------------
-- Better-ID- A Simple FiveM Script, Made By Rocket Development w/ NAT2K15 Development --
-----------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
                  -- !WARNING! !WARNING! !WARNING! !WARNING! !WARNING! --
        -- DO NOT TOUCH THIS FILE OR YOU /WILL/ FUCK SHIT UP! THERE IS NOTHING TO EDIT --
-- DO NOT BE STUPID AND WHINE TO ME ABOUT THIS BEING BROKEN IF YOU TOUCHED THE LINES BELOW. --
----------------------------------------------------------------------------------------------

*/
$(function(){
	window.onload = function(e){
		window.addEventListener('message', function(event){

			var item = event.data;
			if (item !== undefined && item.type === "mcard") {
				if (item.display === true) {
					$('#mcard').delay(100).fadeIn( 0 );
				} else if (item.display === false) {
					$('#mcard').fadeOut( "slow" );
				}
			}

			if (item !== undefined && item.type === "vcard") {

				if (item.display === true) {
					$('#vcard').delay(100).fadeIn( 0 );
				} else if (item.display === false) {
					$('#vcard').fadeOut( "slow" );
				}
			}
			/*
				if (item !== undefined && item.type === "vcard") { -- EDIT TO MATCH YOURS

				if (item.display === true) {
					$('#vcard').delay(100).fadeIn( 0 ); -- EDIT HERE
				} else if (item.display === false) {
					$('#vcard').fadeOut( "slow" ); -- EDIT HERE
				}
			}
			*/
		});
	};
});