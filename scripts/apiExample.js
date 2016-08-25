console.log( 'api example script sourced' );

$( document ).on( 'click', '#searchNow', function(){
  // get title
  var searchTitle = $( '#searchIn' ).val();
  console.log( 'searching for:', searchTitle );
  // assemble search URL
  var searchURL = 'http://www.omdbapi.com/?s=' + searchTitle;
  // make ajax call to OMDB to retrieve JSON
  $.ajax({
    url: searchURL,
    dataType: 'JSON',
    success: function( data ){
      // successfully hit API
      console.log( 'successful API hit:', data );
    },
    statusCode: {
      404: function(){
        // uh oh, alert there was an error
        alert( 'error connecting to server' );
      } // end error
    }
  });
  // show results
}); // end click on search button
