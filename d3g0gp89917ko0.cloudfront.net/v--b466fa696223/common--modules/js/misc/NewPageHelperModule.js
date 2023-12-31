WIKIDOT.modules.NewPageHelperModule = {};
WIKIDOT.modules.NewPageHelperModule.listeners = {
  create: function (d) {
    YAHOO.util.Event.stopEvent(d);
    var b = YAHOO.util.Event.getTarget(d);
    while (b && !b.tagName.match(/^form$/i)) {
      b = b.parentNode;
    }
    if (!b) {
      return;
    }
    var a = b.getElementsByTagName("select")[0];
    if (a && a.value == "") {
      alert("Please select a template.");
      return;
    }
    var c = OZONE.utils.formToArray(b);
    c.action = "misc/NewPageHelperAction";
    c.event = "createNewPage";
    OZONE.ajax.requestModule(
      null,
      c,
      WIKIDOT.modules.NewPageHelperModule.callbacks.create
    );
    return false;
  },
};
WIKIDOT.modules.NewPageHelperModule.callbacks = {
  create: function (b) {
    if (!WIKIDOT.utils.handleError(b)) {
      return;
    }
    if (b.goToUrl) {
      if (b.goToUrl == ".") {
        window.location.reload();
        return;
      }
      window.location.href = "/" + b.goToUrl;
      return;
    } else {
      var a = "/" + b.unixName + "/edit/true";
      if (b.templateId) {
        a += "/t/" + b.templateId;
      }
      if (b.pageTitle) {
        a += "/title/" + encodeURIComponent(b.pageTitle);
      }
      if (b.tags) {
        a += "/tags/" + encodeURIComponent(b.tags);
      }
      if (b.parentPage) {
        a += "/parentPage/" + encodeURIComponent(b.parentPage);
      }
      window.location.href = a;
    }
  },
};
