$(document).ready(function() {
	// init
	$('#line0').hide();
	$('#line1').hide();
	$('#line2').hide();
	// functions
	$('#helpButton').click(function(){
		$('#helpBox').toggle();
	});
	$('#clearOutput').click(function(){
		$('#output').text('');
		$('#line0').hide();
		$('#line1').hide();
		$('#line2').hide();
		$('#gfx_insert1').empty();
		$('#gfx_insert2').empty();
	});
	$("#cv1").click(function(){$("#growth").val("0.99");});
	$("#cv2").click(function(){$("#growth").val("0.98");});
	$("#cv3").click(function(){$("#growth").val("0.97");});
	$("#cv4").click(function(){$("#growth").val("0.96");});
	$("#cv5").click(function(){$("#growth").val("0.95");});
	$("#c").click(function(){ $("#growth").val("1.0000001"); });
	$("#cc1").click(function(){ $("#growth").val("1.01"); });
	$("#cc2").click(function(){ $("#growth").val("1.02"); });
	$("#cc3").click(function(){ $("#growth").val("1.03"); });
	$("#cc4").click(function(){ $("#growth").val("1.04"); });
	$("#cc5").click(function(){ $("#growth").val("1.05"); });
	$("#inv").click(function(){
		var a=$("#min_amp").val(); //console.log(a);
		var b=$("#max_amp").val(); //console.log(b);
		if(a=="1"){
			$("#min_amp").val(a); $("#max_amp").val(b); //console.log("a==1");
		} else {
			$("#min_amp").val(b); $("#max_amp").val(a); //console.log("a==0.0001");
		}
	});
	function roundNumber(num, dec) {
		return Math.ceil(num * Math.pow(10, dec)) / Math.pow(10, dec);
	};
	$('#velcurveForm').submit(function(e) {
		e.preventDefault(); // prevent form from being submitted
		$('#output').text('');
		$('#line0').hide();
		$('#line1').hide();
		$('#line2').hide();
		$('#gfx_insert1').empty();
		$('#gfx_insert2').empty();
		var min_amp=Number($("#min_amp").val());
		var max_amp=Number($("#max_amp").val());
		var growth=Number($("#growth").val());
		var periods=127;
		var result;
		var amp_velcurve="";
		var min_bar=0;
		//	Minimum+(((Minimum*Growth^(Position-1))-Minimum)*(Maximum-Minimum)/((Minimum*Growth^(Periods-1))-Minimum))
		for(i=1;i<periods+1;i++){
			min_bar=0;
			result = min_amp+(((min_amp*growth**i)-min_amp)*(max_amp-min_amp)/((min_amp*growth**periods)-min_amp));
			result_sliced = result.toString().slice(0,6);
			result_print = result_sliced.replace("0.", ".");
			amp_velcurve = amp_velcurve + "\n" + "amp_velcurve_" + i + "=" + result_print;
			gfx_bar      = Math.floor(Math.abs(Number(result))*200);//console.log("gfx_bar=" + gfx_bar);
			if(result<0){
				min_bar=200; //console.log("min_bar<0 : " + min_bar);
				if(i==127){ gfx_bar=gfx_bar-1; console.log("i=" + i); }
			} else {
				//console.log("min_bar 1:" + min_bar + " | result: " + result);
				min_bar=Math.floor(200-Math.abs(result*200));
				if(i==127){ gfx_bar=gfx_bar-1; console.log("i=" + i); }
				//if(i==127){ min_bar=-1; console.log("i=" + i); }
				//console.log("min_bar 2:" + min_bar +  "| result: " + result);
			}
			$('#gfx_insert1').append("<div class='bar' style='height:" + gfx_bar + "px; margin-top:" + min_bar + "px;'></div>");
		}
		$("#stringLength").html("character count: " + amp_velcurve.length);
		$('#output').append('<h3 id="stringLength">output</h3>');
		$('#output').text(amp_velcurve);
		$('#line0').show();
		$('#line1').show();
		$('#line2').show();
	});
});
