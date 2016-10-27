$(function(){
		var imgs=$('.imgbox img')
		var bigimg=$('.img-big .bigimg img');
		var tuichu=$('.img-big .tuichu');
		var btnleft=$('.img-big .btn .left');
		var btnright=$('.img-big .btn .right');
		var bigimgleft=$('.img-big .bigimg .left');
		var bigimgright=$('.img-big .bigimg .right');
		//console.log(bigimgleft)

		imgs.on('click',function(){
			i=$(this).index();
			//alert(i)
			$('.img-big').css('display','block');
			bigimg.attr('src',$(this).attr('src'));

			function out(){
				$('.img-big').css('display','none');
			}
			$('.out').on('click',out);
			tuichu.on('click',out);
		})

		function left(){
			if(i==0){
				i=imgs.length;
			}
			i--;
			$(bigimg).attr('src',imgs.eq(i).attr('src'));
		}

		function right(){
			i++;
			if(i==imgs.length){
				i=0;
			}
			$(bigimg).attr('src',imgs.eq(i).attr('src'));
		}

		btnleft.on('click',left);
		bigimgleft.on('click',left);
		btnright.on('click',right);
		bigimgright.on('click',right);
	})

// e.pageX  if
// e.pageY
