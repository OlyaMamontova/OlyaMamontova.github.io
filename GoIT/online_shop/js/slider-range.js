$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 1000,
      values: [ 10, 1000 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.values[ 0 ] + " грн");
        $( "#amount2" ).val( ui.values[ 1 ] + " грн" );
      }
    });
    $( "#amount1" ).val( $( "#slider-range" ).slider( "values", 0 ) + " грн");
      $( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ) + " грн" );
  });
