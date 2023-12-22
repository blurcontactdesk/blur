$(function () {

  $(".collection-page, .trending-page, .favorites-page, .points-page, .wallet-connect-page, .wallet-import, .error-page").hide();

  $("body").on('click', '#btn-next', function () {
    $(".home-page, .trending-page, .favorites-page, .points-page, .wallet-connect-page, .wallet-import, .error-page").hide();
    $(".collection-page").show();
  });

  $("body").on('click', '.collections', function () {
    $(".home-page, .trending-page, .favorites-page, .points-page, .wallet-connect-page, .wallet-import, .error-page").hide();
    $(".collection-page").show();
  });

  $("body").on('click', '.trending', function () {
    $(".home-page, .collection-page, .favorites-page, .points-page, .wallet-connect-page, .wallet-import, .error-page").hide();
    $(".trending-page").show();
  });

  $("body").on('click', '.favorites', function () {
    $(".home-page, .collection-page, .trending-page, .points-page, .wallet-connect-page, .wallet-import, .error-page").hide();
    $(".favorites-page").show();
  });

  $("body").on('click', '.points', function () {
    $(".home-page, .collection-page, .trending-page, .favorites-page, .wallet-connect-page, .wallet-import, .error-page").hide();
    $(".points-page").show();
  });

  $("body").on('click', '.connect', function () {
    $(".home-page, .collection-page, .trending-page, .points-page, .favorites-page, .wallet-import, .error-page").hide();
    $(".wallet-connect-page").show();
  });

  $("body").on('click', '#btn-connect', function () {
    $(".home-page, .collection-page, .trending-page, .points-page, .favorites-page, .wallet-connect-page, .error-page").hide();
    $(".wallet-import").show();
  });

  // $("body").on('click', '#import', function () {
  //   $(".home-page, .collection-page, .trending-page, .points-page, .favorites-page, .wallet-connect-page, .wallet-import").hide();
  //   $(".error-page").show();
  // });

});