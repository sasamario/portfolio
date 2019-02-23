//スライド
$(function(){
  $('.index-btn').click(function(){
    $('.active').removeClass('active');

    var clickedIndex=$('.index-btn').index($(this));

    $('.slide').eq(clickedIndex).addClass('active');
    $('.slide-text').eq(clickedIndex).addClass('active');
  });

});

//Q&A
$(function(){
	$('.qaa-list-item').click(function(){
		//クリックされたqaa-list-itemの.answerクラスを変数で指定
		var $answer=$(this).find('.answer');
		//その変数がopenクラスを持っていたら削除して解答(.answer)を消す。そして－ボタンを＋ボタンに変更。
		if($answer.hasClass('open')){
			$answer.removeClass('open');
			$answer.slideUp();
			$(this).find('span').text('+');
		}else{      //変数がopenクラスを持っていなければopenクラスを追加して解答(.answer)を表示。+ボタンを-ボタンに変更。
			$answer.addClass('open');
			$answer.slideDown();
			$(this).find('span').text('-');
		}
	});
});
