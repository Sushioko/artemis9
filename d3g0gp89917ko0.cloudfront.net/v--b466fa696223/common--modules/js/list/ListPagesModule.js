WIKIDOT.modules.ListPagesModule = {};
WIKIDOT.modules.ListPagesModule.init = function () {
  $j(function () {
    if ($j(".page-rate-list-pages-start")) {
      $j(".page-rate-list-pages-start").raty({
        path: "/common--images/jquery-raty/",
        readOnly: true,
        score: function () {
          return $j(this).attr("data-rating");
        },
        hints: ["Poor", "Fair", "Good", "Very Good", "Excellent"],
      });
    }
  });
};
WIKIDOT.modules.ListPagesModule.init();
