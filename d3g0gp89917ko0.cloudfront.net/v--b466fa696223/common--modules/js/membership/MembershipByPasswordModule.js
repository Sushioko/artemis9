WIKIDOT.modules.MembershipByPasswordModule = {};
WIKIDOT.modules.MembershipByPasswordModule.listeners = {
  apply: function (b) {
    var a = OZONE.utils.formToArray("membership-by-password-form");
    a.action = "MembershipApplyAction";
    a.event = "applyByPassword";
    OZONE.ajax.requestModule(
      "membership/MembershipByPasswordResultModule",
      a,
      WIKIDOT.modules.MembershipByPasswordModule.callbacks.apply
    );
  },
};
WIKIDOT.modules.MembershipByPasswordModule.callbacks = {
  apply: function (b) {
    if (b.status == "ok") {
      var a = new OZONE.dialogs.SuccessDialog();
      a.content = "You are now a member of this site";
      a.addButtonListener("close message", function () {
        window.location.reload();
      });
      a.show();
    } else {
      if (!WIKIDOT.utils.handleError(b)) {
        return;
      }
    }
    return;
  },
};
WIKIDOT.modules.MembershipByPasswordModule.init = function () {};
WIKIDOT.modules.MembershipByPasswordModule.init();
