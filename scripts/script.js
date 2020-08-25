
	
	$(".btn2").click(function(){
		var1 = $(".var1").val();
			 var2 = $(".var2").val();
			 var3 = $(".var3").val();
			 var4 = $(".var4").val();
			 var5 = $(".var5").val();
			 var6 = $(".var6").val();
			 speach = $(".speach").val();
		return var1 , var2 , var3 , var4 , var5 , var6 , speach ;
	});
	$(".btn1").click(function() {

		
		let text='Жили-были '	+ var1 +' да ' + var2 +',Была у них ' + var3+',Снесла ' + var3+'  ' + var4 +', не простое - золотое,- ' + var1+' бил, бил - не разбил,- ' + var2+' била, била - не разбила,' + var5+' бежала, ' + var6+ ' задела, ' + var4+' упало и разбилось.' + var1 +' плачет, ' + var2 +' плачет, а ' + var3+' кудахчет:' + speach;
	$(".result").html(text);
});
