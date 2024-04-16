$(document).ready( function () {
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });

  // メニューの差し込み
  append_string = '<li><a href="../index.html">TOP</a></li>'
  append_string += '<li><a href="pages/tenki.html">天気予報</a></li>'
  append_string += '<li><a href="pages/jma.html">気象庁</a></li>'
  $("#nav-list ul").append(append_string)
} );

