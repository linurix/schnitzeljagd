<script>
    
      show_section('start');
      
      function show_section(id) {
        $('section').hide();
        $('section#' + id).show();
		console.log(id);
		console.log( $('section#' + id));
		
      }
      
      $('button[data-section]').click(function() {
		show_section($(this).data('section'));
	  });
      
    </script>