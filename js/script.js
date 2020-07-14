$(document).ready(function () {
	$('#send-data').on('click', function (e) {

		if($('#input-1').val() == ''){
			e.preventDefault();
			$('#input-1').css('border', '1px solid red');
		} else{
			$('#input-1').css('border', '1px solid #ddd');
		}

		if($('#input-2').val() == ''){
			e.preventDefault();
			$('#input-2').css('border', '1px solid red');
		}else{
			$('#input-2').css('border', '1px solid #ddd');
		}

		if($('#input-3').val() == ''){
			e.preventDefault();
			$('#input-3').css('border', '1px solid red');
		}else{
			$('#input-3').css('border', '1px solid #ddd');
		}
	});
});
