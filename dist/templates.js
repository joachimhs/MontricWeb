Ember.TEMPLATES["admin"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                Alerts\n                <button class=\"list-group-item-button pull-right btn btn-sm btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNewAlert", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</button>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"list-group\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.showNewAlertPanel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers.each.call(depth0, "alert", "in", "controllers.adminAlerts.alerts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div class=\"list-group-item subcategoryItem newAlertPanel\">\n                            <h1>New Alert</h1>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("controller.newAlertName"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                            <button class=\"btn btn-primary form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveNewAlert", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n                            <button class=\"btn btn-default form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelNewAlert", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n                        </div>\n                    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item subcategoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "alert.id", "admin.alerts.alert", "alert.id", options) : helperMissing.call(depth0, "link-to", "alert.id", "admin.alerts.alert", "alert.id", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                Chart Groups\n                <button class=\"list-group-item-button pull-right btn btn-sm btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNewChartGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</button>\n            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"list-group\">\n\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.showNewChartGroupPanel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  stack1 = helpers.each.call(depth0, "chartGroup", "in", "controllers.adminChartGroups.model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div class=\"list-group-item subcategoryItem newAlertPanel\">\n                            <h1>New Chart Group</h1>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("controller.newChartGroupName"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                            <button class=\"btn btn-primary form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveNewChartGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n                            <button class=\"btn btn-default form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelNewChartGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n                        </div>\n                    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item subcategoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "chartGroup.id", "admin.chartGroups.chartGroup", "chartGroup", options) : helperMissing.call(depth0, "link-to", "chartGroup.id", "admin.chartGroups.chartGroup", "chartGroup", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                Alert Recipients\n                <button class=\"list-group-item-button pull-right btn btn-sm btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNewAlertRecipient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</button>\n            ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"list-group\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.showNewAlertRecipientPanel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers.each.call(depth0, "alertRecipient", "in", "controllers.adminAlertRecipients.alertRecipients", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div class=\"list-group-item subcategoryItem newAlertPanel\">\n                            <h1>New Alert Recipient</h1>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("controller.newAlertRecipientName"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                            <button class=\"btn btn-primary form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveNewAlertRecipient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n                            <button class=\"btn btn-default form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelNewAlertRecipient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n                        </div>\n                    ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item subcategoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "alertRecipient.id", "admin.alertRecipients.alertRecipient", "alertRecipient.id", options) : helperMissing.call(depth0, "link-to", "alertRecipient.id", "admin.alertRecipients.alertRecipient", "alertRecipient.id", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                Access Tokens\n                <button class=\"list-group-item-button pull-right btn btn-sm btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNewAccessToken", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</button>\n            ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"list-group\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.showNewAccessTokenPanel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers.each.call(depth0, "accessToken", "in", "controllers.adminAccessTokens.model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }
function program25(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div class=\"list-group-item subcategoryItem newAlertPanel\">\n                            <h1>New Access Token</h1>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("controller.newAccessTokenName"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                            <button class=\"btn btn-primary form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveNewAccessToken", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n                            <button class=\"btn btn-default form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelNewAccessToken", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n                        </div>\n                    ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item subcategoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "accessToken.id", "admin.accessTokens.accessToken", "accessToken", options) : helperMissing.call(depth0, "link-to", "accessToken.id", "admin.accessTokens.accessToken", "accessToken", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                Users\n                <button class=\"list-group-item-button pull-right btn btn-sm btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNewUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</button>\n            ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"list-group\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.showNewUserPanel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  stack1 = helpers.each.call(depth0, "usr", "in", "controllers.user.model.account.users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(34, program34, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            ");
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div class=\"list-group-item subcategoryItem newAlertPanel\">\n                            <h1>Add User With Email</h1>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("controller.newUserEmail"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                            <button class=\"btn btn-primary form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveNewUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n                            <button class=\"btn btn-default form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelNewUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n                        </div>\n                    ");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item subcategoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "usr", "admin.users.user", "usr", options) : helperMissing.call(depth0, "link-to", "usr", "admin.users.user", "usr", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

  data.buffer.push("<div id=\"exploreArea\">\n    <div id=\"metricsMenu\">\n        <div class=\"list-group\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': (" list-group-item categoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.alerts", options) : helperMissing.call(depth0, "link-to", "admin.alerts", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isAdminAlertsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item categoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.chartGroups", options) : helperMissing.call(depth0, "link-to", "admin.chartGroups", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isAdminChartGroupsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': (" list-group-item categoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.alertRecipients", options) : helperMissing.call(depth0, "link-to", "admin.alertRecipients", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isAdminAlertRecipientsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': (" list-group-item categoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.accessTokens", options) : helperMissing.call(depth0, "link-to", "admin.accessTokens", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isAdminAccessTokensActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': (" list-group-item categoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.users", options) : helperMissing.call(depth0, "link-to", "admin.users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isAdminUsersActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': (" list-group-item categoryItem")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Account", "admin.accounts", options) : helperMissing.call(depth0, "link-to", "Account", "admin.accounts", options))));
  data.buffer.push("\n        </div>\n\n    </div>\n\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["admin/accessTokens/accessToken"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"chartsArea\">\n    <div class=\"chart\">\n        <h1>Access Token: ");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        <form role=\"form\">\n            <table class=\"table\">\n                <tr>\n                    <td>Activated:</td>\n                    <td colspan=\"1\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['check-box'] || (depth0 && depth0['check-box']),options={hash:{
    'isSelected': ("accessTokenActivated"),
    'selectedText': ("activated"),
    'deselectedText': ("deactivated")
  },hashTypes:{'isSelected': "ID",'selectedText': "STRING",'deselectedText': "STRING"},hashContexts:{'isSelected': depth0,'selectedText': depth0,'deselectedText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "check-box", options))));
  data.buffer.push("\n                    </td>\n                </tr>\n                <tr>\n                    <td>Access Token Name:</td>\n                    <td>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("accessTokenName"),
    'classNames': ("input-mini form-control")
  },hashTypes:{'valueBinding': "STRING",'classNames': "STRING"},hashContexts:{'valueBinding': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</td>\n                </tr>\n                <tr class=\"footer\">\n                    <td colspan=\"4\"><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doCommitAccessToken", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\" style=\"width: 100%;\">Save Access Token</button></td>\n                </tr>\n            </table>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["admin/alertRecipients/alertRecipient"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"chartsArea\">\n    <div class=\"chart\">\n        <h1>Alert Recipients: ");
  stack1 = helpers._triageMustache.call(depth0, "alertRecipient.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        <form role=\"form\">\n            <table class=\"table\">\n                <tr>\n                    <td>Send Alert Via:</td>\n                    <td colspan=\"1\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['single-selectable-list'] || (depth0 && depth0['single-selectable-list']),options={hash:{
    'nodes': ("controllers.adminAlertRecipients.alertPlugins"),
    'selectedNode': ("alertRecipient.pluginName")
  },hashTypes:{'nodes': "ID",'selectedNode': "ID"},hashContexts:{'nodes': depth0,'selectedNode': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "single-selectable-list", options))));
  data.buffer.push("\n                    </td>\n                </tr>\n                <tr>\n                    <td>Add Recipient</td>\n                    <td>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("controller.newRecipient"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        <button class=\"btn btn-primary form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNewRecipient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</button>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['multi-selectable-list'] || (depth0 && depth0['multi-selectable-list']),options={hash:{
    'nodes': ("alertRecipient.recipients"),
    'selectedNodes': ("selectedAlertRecipients")
  },hashTypes:{'nodes': "ID",'selectedNodes': "ID"},hashContexts:{'nodes': depth0,'selectedNodes': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "multi-selectable-list", options))));
  data.buffer.push("\n                        <button class=\"btn btn-primary form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteSelectedNodes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete Selected Recipients</button>\n                    </td>\n                </tr>\n                <tr class=\"footer\">\n                    <td colspan=\"4\"><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doCommitAlertRecipient", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\" style=\"width: 100%;\">Save Alert Recipient</button></td>\n                </tr>\n            </table>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["admin/alerts/alert"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "model.alertSource", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program3(depth0,data) {
  
  
  data.buffer.push("None Selected");
  }

  data.buffer.push("<div id=\"chartsArea\">\n    <div class=\"chart\">\n        <h1>Alert: ");
  stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        <form role=\"form\">\n            <table class=\"table\">\n                <tr>\n                    <td>Activated:</td>\n                    <td colspan=\"3\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['check-box'] || (depth0 && depth0['check-box']),options={hash:{
    'isSelected': ("model.alertActivated"),
    'selectedText': ("activated"),
    'deselectedText': ("deactivated")
  },hashTypes:{'isSelected': "ID",'selectedText': "STRING",'deselectedText': "STRING"},hashContexts:{'isSelected': depth0,'selectedText': depth0,'deselectedText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "check-box", options))));
  data.buffer.push("\n                    </td>\n                </tr>\n                <tr>\n                    <td>Error Value:</td>\n                    <td>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.alertErrorValue"),
    'classNames': ("input-mini form-control")
  },hashTypes:{'valueBinding': "STRING",'classNames': "STRING"},hashContexts:{'valueBinding': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</td>\n                    <td>Warning Value:</td>\n                    <td>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.alertWarningValue"),
    'classNames': ("input-mini form-control")
  },hashTypes:{'valueBinding': "STRING",'classNames': "STRING"},hashContexts:{'valueBinding': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <td>Alert Type:</td>\n                    <td>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("input-medium form-control"),
    'valueBinding': ("model.alertType"),
    'contentBinding': ("controller.alertTypes"),
    'optionLabelPath': ("content.value"),
    'optionValuePath': ("content.key")
  },hashTypes:{'classNames': "STRING",'valueBinding': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING"},hashContexts:{'classNames': depth0,'valueBinding': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</td>\n                    <td>Alert Delay:</td>\n                    <td>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("model.alertDelay"),
    'classNames': ("input-mini form-control")
  },hashTypes:{'valueBinding': "STRING",'classNames': "STRING"},hashContexts:{'valueBinding': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <td>Alert Source:</td>\n                    <td colspan=\"3\">\n\n                        <div>");
  stack1 = helpers['if'].call(depth0, "model.alertSource", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        <div style=\"max-height: 250px; overflow: scroll; margin-bottom: 15px;\" class=\"azureBlueBackground azureBlueBorderThin\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers['tree-menu'] || (depth0 && depth0['tree-menu']),options={hash:{
    'rootNodes': ("controllers.admin.rootNodes"),
    'allowMultipleSelections': (false),
    'selectedNode': ("model.alertSource"),
    'excludeGeneratedNodes': (true)
  },hashTypes:{'rootNodes': "ID",'allowMultipleSelections': "BOOLEAN",'selectedNode': "ID",'excludeGeneratedNodes': "BOOLEAN"},hashContexts:{'rootNodes': depth0,'allowMultipleSelections': depth0,'selectedNode': depth0,'excludeGeneratedNodes': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "tree-menu", options))));
  data.buffer.push("\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Alert Recipient:</td>\n                    <td colspan=\"3\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['multi-selectable-list'] || (depth0 && depth0['multi-selectable-list']),options={hash:{
    'nodes': ("controllers.adminAlerts.alertRecipients"),
    'selectedNodes': ("controller.alertNotifications")
  },hashTypes:{'nodes': "ID",'selectedNodes': "ID"},hashContexts:{'nodes': depth0,'selectedNodes': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "multi-selectable-list", options))));
  data.buffer.push("\n                    </td>\n                </tr>\n                <tr class=\"footer\">\n                    <td colspan=\"4\"><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doCommitAlert", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\" style=\"width: 100%;\">Save Alert</button></td>\n                </tr>\n            </table>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["admin/chartGroups/chartGroup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"chartsArea\">\n    <div class=\"chart\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        <form role=\"form\">\n            <table class=\"table\">\n                <tr>\n                    <td style=\"width: 150px;\">Select nodes:</td>\n                    <td>\n                        <div style=\"max-height: 250px; min-height: 250px; overflow: scroll;\" class=\"azureBlueBackground azureBlueBorderThin\">\n                        \n                        ");
  data.buffer.push(escapeExpression((helper = helpers['tree-menu'] || (depth0 && depth0['tree-menu']),options={hash:{
    'rootNodes': ("controllers.admin.rootNodes"),
    'allowMultipleSelections': (true),
    'excludeGeneratedNodes': (true),
    'selectedNode': ("selectedChartGroups")
  },hashTypes:{'rootNodes': "ID",'allowMultipleSelections': "BOOLEAN",'excludeGeneratedNodes': "BOOLEAN",'selectedNode': "ID"},hashContexts:{'rootNodes': depth0,'allowMultipleSelections': depth0,'excludeGeneratedNodes': depth0,'selectedNode': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "tree-menu", options))));
  data.buffer.push("\n                    </div>\n                        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doAddCheckedNodes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success\" style=\"\">Add selected Charts to Chart Group</button>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"width: 150px;\">Selected Nodes:</td>\n                    <td>\n                        <div style=\"max-height: 250px; max-height: 250px; overflow: scroll;\" class=\"azureBlueBackground azureBlueBorderThin\">\n                            \n                            ");
  data.buffer.push(escapeExpression((helper = helpers['multi-selectable-list'] || (depth0 && depth0['multi-selectable-list']),options={hash:{
    'nodes': ("chartGroups"),
    'selectedNodes': ("selectedChartGroups")
  },hashTypes:{'nodes': "ID",'selectedNodes': "ID"},hashContexts:{'nodes': depth0,'selectedNodes': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "multi-selectable-list", options))));
  data.buffer.push("\n                        </div>\n                        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doDeleteSelectedNodes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success\" style=\"\">Delete selected Charts from Chart Group</button>\n                    </td>\n                </tr>\n                <tr class=\"footer\">\n                    <td colspan=\"2\"><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doCommitChartGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\" style=\"\">Save Chart Group</button></td>\n                </tr>\n            </table>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["admin/users/user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"chartsArea\">\n    <div class=\"chart\">\n        <h1>User: ");
  stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        <form role=\"form\">\n            <table class=\"table\">\n                <tr>\n                    <td style=\"width: 150px;\">User type:</td>\n                    <td>\n                        <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.isAdminLevel:btn-primary:btn-default :btn :btn-sm")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUserAdminLevel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Admin</button>\n                        <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.isUserLevel:btn-primary:btn-default :btn :btn-sm")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUserUserLevel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">User</button>\n                    </td>\n                </tr>\n                <tr class=\"footer\">\n                    <td colspan=\"2\"><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doCommitUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary form-control\" style=\"\">Save User</button></td>\n                </tr>\n            </table>\n        </form>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/check-box"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <i class=\"fa fa-check-square-o\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "selectedText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <i class=\"fa fa-square-o\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "deselectedText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isSelected:selected:not-selected")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doSelect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "isSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</span>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/date-picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<div class=\"input-group\">\n    <input data-format=\"dd/MM/yyyy hh:mm:ss\" type=\"text\" class=\"form-control\" />\n    <span class=\"input-group-addon\" id=\"basic-addon2\">\n        <span class=\"add-on\">\n          <i data-time-icon=\"fa fa-clock-o\" data-date-icon=\"fa fa-calendar\"></i>\n        </span>\n    </span>\n</div>\n\n\n");
  
});

Ember.TEMPLATES["components/line-chart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["components/multi-selectable-list-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <i class=\"fa fa-check-square-o\"></i>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <i class=\"fa fa-square-o\"></i>\n    ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "node.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "node", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isSelected:selected:not-selected")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'width': ("textWidth")
  },hashTypes:{'width': "ID"},hashContexts:{'width': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'maxWidht': ("textWidth")
  },hashTypes:{'maxWidht': "ID"},hashContexts:{'maxWidht': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "isSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "node.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/multi-selectable-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['multi-selectable-list-item'] || (depth0 && depth0['multi-selectable-list-item']),options={hash:{
    'node': ("node"),
    'tagName': ("div"),
    'classNames': ("list-group-item"),
    'action': ("showDeleteModal"),
    'textWidth': ("textWidth"),
    'selectedNodes': ("selectedNodes")
  },hashTypes:{'node': "ID",'tagName': "ID",'classNames': "STRING",'action': "STRING",'textWidth': "ID",'selectedNodes': "ID"},hashContexts:{'node': depth0,'tagName': depth0,'classNames': depth0,'action': depth0,'textWidth': depth0,'selectedNodes': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "multi-selectable-list-item", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"list-group mediumTopPadding\" style=\"width: 95%;\">\n    ");
  stack1 = helpers.each.call(depth0, "node", "in", "nodes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/single-selectable-list-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <i class=\"fa fa-check-square-o\"></i>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <i class=\"fa fa-square-o\"></i>\n    ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "node.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "node", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isSelected:selected:not-selected")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'width': ("textWidth")
  },hashTypes:{'width': "ID"},hashContexts:{'width': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'maxWidht': ("textWidth")
  },hashTypes:{'maxWidht': "ID"},hashContexts:{'maxWidht': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "isSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "node.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/single-selectable-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['single-selectable-list-item'] || (depth0 && depth0['single-selectable-list-item']),options={hash:{
    'node': ("node"),
    'tagName': ("div"),
    'classNames': ("list-group-item"),
    'action': ("showDeleteModal"),
    'textWidth': ("textWidth"),
    'selectedNode': ("selectedNode")
  },hashTypes:{'node': "ID",'tagName': "ID",'classNames': "STRING",'action': "STRING",'textWidth': "ID",'selectedNode': "ID"},hashContexts:{'node': depth0,'tagName': depth0,'classNames': depth0,'action': depth0,'textWidth': depth0,'selectedNode': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "single-selectable-list-item", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"list-group mediumTopPadding\" style=\"width: 95%;\">\n    ");
  stack1 = helpers.each.call(depth0, "node", "in", "nodes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/tree-menu-node"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "node.hasChildren", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "node.isExpanded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "node.isExpanded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleExpanded", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "node.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <span class=\"downarrow\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleExpanded", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></span>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <span class=\"rightarrow\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleExpanded", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></span>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "controller.allowMultipleSelections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checked': ("node.isSelected")
  },hashTypes:{'checked': "ID"},hashContexts:{'checked': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSelected", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "node.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectNode", "node", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isSelected")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "node.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers.each.call(depth0, "child", "in", "node.children", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div style=\"margin-left: 22px;\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers['tree-menu-node'] || (depth0 && depth0['tree-menu-node']),options={hash:{
    'node': ("child"),
    'action': ("selectNode"),
    'selectedNode': ("selectedNode"),
    'allowMultipleSelections': ("allowMultipleSelections")
  },hashTypes:{'node': "ID",'action': "STRING",'selectedNode': "ID",'allowMultipleSelections': "ID"},hashContexts:{'node': depth0,'action': depth0,'selectedNode': depth0,'allowMultipleSelections': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "tree-menu-node", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "showNode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/tree-menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['tree-menu-node'] || (depth0 && depth0['tree-menu-node']),options={hash:{
    'node': ("node"),
    'allowMultipleSelections': ("allowMultipleSelections"),
    'action': ("selectNode"),
    'selectedNode': ("selectedNode"),
    'excludeGeneratedNodes': ("excludeGeneratedNodes")
  },hashTypes:{'node': "ID",'allowMultipleSelections': "ID",'action': "STRING",'selectedNode': "ID",'excludeGeneratedNodes': "ID"},hashContexts:{'node': depth0,'allowMultipleSelections': depth0,'action': depth0,'selectedNode': depth0,'excludeGeneratedNodes': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "tree-menu-node", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "node", "in", "rootNodes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["dashboards"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"dashboardArea\" class=\"wrap\">\n    <div class=\"header\">Dashboards\n        <div class=\"small-header pull-right\">| New Dashboard |</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"dashButton text-center\">\n                <img src=\"/images/icon_dash_large.png\" /> <br />\n                Frontend\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"dashButton text-center\">\n                <img src=\"/images/icon_dash_large.png\" /> <br />\n                Backend\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"dashButton text-center\">\n                <img src=\"/images/icon_dash_large.png\" /> <br />\n                Services\n            </div>\n        </div>\n    </div>\n    <div class=\"humongousMarginTop\"></div>\n    DASHBOARDS\n    <div class=\"humongousMarginTop\"></div>\n</div>\n");
  
});

Ember.TEMPLATES["explore"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "selectedNode.chart.series", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['line-chart'] || (depth0 && depth0['line-chart']),options={hash:{
    'chart': ("selectedNode.chart"),
    'numCharts': ("selectedNodes.length")
  },hashTypes:{'chart': "ID",'numCharts': "ID"},hashContexts:{'chart': depth0,'numCharts': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "line-chart", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div class=\"chart chart-loading\"><h1>Loading chart ");
  stack1 = helpers._triageMustache.call(depth0, "selectedNode.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1></div>\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleTimeSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <i class=\"fa fa-2x fa-clock-o\"></i>\n            </span>\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"time-selection-area\">\n                <div class=\"time-selection-icon\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleTimeSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    <i class=\"fa fa-2x fa-clock-o\"></i>\n                </div>\n                <ul class=\"nav nav-tabs time-selection-tabs\">\n                    <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isLiveCharts:active:deactive")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectLiveCharts", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><a href=\"#\">Live Charts</a></li>\n                    <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isLiveCharts:deactiva:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectHistoricCharts", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><a href=\"#\">Historic Charts</a></li>\n                </ul>\n\n                ");
  stack1 = helpers['if'].call(depth0, "isLiveCharts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                <div>\n                    <h1>Resolution</h1>\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'elementId': ("liveResolutionInput"),
    'class': ("form-control"),
    'contentBinding': ("chartResolutions"),
    'optionLabelPath': ("content.chartResolutionName"),
    'optionValuePath': ("content.chartResolutionValue"),
    'selectionBinding': ("selectedChartResolution"),
    'prompt': ("Select Resolution")
  },hashTypes:{'elementId': "STRING",'class': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionBinding': "STRING",'prompt': "STRING"},hashContexts:{'elementId': depth0,'class': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionBinding': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n                <div>\n                    <h1>Timezone</h1>\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'elementId': ("liveTimezoneInput"),
    'class': ("form-control"),
    'contentBinding': ("timezones"),
    'optionLabelPath': ("content.timezoneName"),
    'optionValuePath': ("content.timezoneId"),
    'selectionBinding': ("selectedTimezone"),
    'prompt': ("Select Timezone")
  },hashTypes:{'elementId': "STRING",'class': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionBinding': "STRING",'prompt': "STRING"},hashContexts:{'elementId': depth0,'class': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionBinding': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n\n                <div class=\"smallMarginTop\">\n                    ");
  stack1 = helpers.unless.call(depth0, "isLiveCharts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n            </div>\n        ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div>\n                        <h1>Chart timeperiod</h1>\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'lementId': ("liveTimespanInput"),
    'class': ("form-control"),
    'contentBinding': ("chartTimespans"),
    'optionLabelPath': ("content.timespanName"),
    'optionValuePath': ("content.timespanValue"),
    'selectionBinding': ("selectedChartTimespan"),
    'prompt': ("Select Timespan")
  },hashTypes:{'lementId': "STRING",'class': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionBinding': "STRING",'prompt': "STRING"},hashContexts:{'lementId': depth0,'class': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionBinding': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    <div>\n                        <h1>Chart From</h1>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['date-picker'] || (depth0 && depth0['date-picker']),options={hash:{
    'date': ("selectedChartFrom")
  },hashTypes:{'date': "ID"},hashContexts:{'date': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n                    </div>\n\n                    <div>\n                        <h1>Chart To</h1>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['date-picker'] || (depth0 && depth0['date-picker']),options={hash:{
    'date': ("selectedChartTo")
  },hashTypes:{'date': "ID"},hashContexts:{'date': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n                    </div>\n                ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <button class=\"btn btn-primary form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateCharts", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Update Charts</button>\n                    ");
  return buffer;
  }

  data.buffer.push("<div id=\"exploreArea\">\n    <div id=\"metricsMenu\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['tree-menu'] || (depth0 && depth0['tree-menu']),options={hash:{
    'rootNodes': ("controller.rootNodes"),
    'allowMultipleSelections': (true)
  },hashTypes:{'rootNodes': "ID",'allowMultipleSelections': "BOOLEAN"},hashContexts:{'rootNodes': depth0,'allowMultipleSelections': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "tree-menu", options))));
  data.buffer.push("\n    </div>\n\n    <div id=\"chartsArea\">\n        ");
  stack1 = helpers.each.call(depth0, "selectedNode", "in", "selectedNodes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div id=\"chartTimeSelection\">\n        ");
  stack1 = helpers.unless.call(depth0, "timeSelectionIsExpanded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["explore/loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Loading...");
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"/images/icon_explore_thumb.png\" /> Explore");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<img src=\"/images/icon_dash_thumb.png\" /> Dashboards");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin", options) : helperMissing.call(depth0, "link-to", "admin", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" |\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("<img src=\"/images/icon_admin_thumb.png\" /> Admin");
  }

  data.buffer.push("<header>\n    <img src=\"/images/montric_logo_small_dark.png\" class=\"header-logo\" />\n    <div class=\"pull-right\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "explore", options) : helperMissing.call(depth0, "link-to", "explore", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" |\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "dashboards", options) : helperMissing.call(depth0, "link-to", "dashboards", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" |\n        ");
  stack1 = helpers['if'].call(depth0, "controllers.user.content.isAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doLogOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"clickable\">Log Out</span>\n    </div>\n</header>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Loading...");
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <p class=\"multiple-accounts-warning\">\n                        There are multiple accounts connected with the user. Please select the account you wish to use.\n                        <div class=\"list-group\">\n                            ");
  stack1 = helpers.each.call(depth0, "account", "in", "controllers.user.accounts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </p>\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <div class=\"list-group-item pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectAccountForUser", "account", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "account", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                            ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n                        <button class=\"persona-button\"><span>Signing In... Please Wait!</span></button>\n                    ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isLoggedIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <button class=\"persona-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doLogout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><span>User Logged In! Log Out</span></button>\n                        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <button class=\"persona-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doLogin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><span>Sign in with your email</span></button>\n                        ");
  return buffer;
  }

  data.buffer.push("<div id=\"loginArea\">\n    <div class=\"clearfix\">\n        <div id=\"loginDateArea\" class=\"pull-right\">\n            <h1>");
  stack1 = helpers._triageMustache.call(depth0, "controller.currentTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n            <hr />\n            <h2>");
  stack1 = helpers._triageMustache.call(depth0, "controller.currentDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n        </div>\n    </div>\n\n    <div class=\"largeMarginTop\"></div>\n\n    <div id=\"loginForm\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <img src=\"/images/montric_logo_small_dark.png\" class=\"login-image\" />\n                <p>Montric is currently in Beta. You are free to register an account, but your data will only be retained for one week. Throughout the beta-period we will expand the retention. Towards the end of the beta-period we will add subscription plans with different retention lengths.</p>\n                ");
  stack1 = helpers['if'].call(depth0, "controllers.user.multipleAccounts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"text-center small-bottom-margin\">\n\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.isLoggingIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"humongousMarginTop\"></div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["main"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"mainArea\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "render", "header", options))));
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"bg-danger bg-danger-large\"><i class=\"fa fa-2x fa-exclamation-triangle pull-left\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        ");
  return buffer;
  }

  data.buffer.push("<div id=\"registerArea\">\n    <div id=\"loginForm\">\n        <h1>Register new Account!</h1>\n        <p>You have successfully logged in via Mozilla persona, but you email address is currently not associated with a Montric account.<br />\n        <br />\n        In order to set up an account for you, we need some additional information!</p>\n\n        ");
  stack1 = helpers['if'].call(depth0, "isErrorMessageShown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <form role=\"form\">\n            <div class=\"form-group\">\n                <label for=\"emailInput\">Email Address</label>\n                <input type=\"text\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("controllers.user.content.userName")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" disabled  class=\"form-control\" id=\"accountNameInput\" placeholder=\"Email Address\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"accountNameInput\">Account Name</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newAccountName"),
    'class': ("form-control"),
    'id': ("accountNameInput"),
    'placeholder': ("New Account name"),
    'focus-out': ("accountFocusOut")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING",'focus-out': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0,'focus-out': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            <div class=\"form-group\">\n                <label for=\"firstNameInput\">First Name</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newFirstName"),
    'class': ("form-control"),
    'id': ("firstNameInput"),
    'placeholder': ("Your First name(s)")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            <div class=\"form-group\">\n                <label for=\"surnameInput\">Surname</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newSurname"),
    'class': ("form-control"),
    'id': ("surnameInput"),
    'placeholder': ("Your surname")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            <div class=\"form-group\">\n                <label for=\"companyInput\">Company Name</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newCompanyName"),
    'class': ("form-control"),
    'id': ("companyInput"),
    'placeholder': ("Your Company Name (if any)")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            <div class=\"form-group\">\n                <label for=\"countryInput\">Country</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newCountry"),
    'class': ("form-control"),
    'id': ("countryInput"),
    'placeholder': ("Your Country of Residence")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            <div class=\"form-group\">\n                <label for=\"descriptionInput\">What Will You Use Montric For?</label>\n                <textarea type=\"text\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("newUsage")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"form-control\" id=\"descriptionInput\" placeholder=\"\"></textarea>\n            </div>\n            <hr />\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "registerAccount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Register New Account</button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"humongousMarginTop\"></div>\n</div>");
  return buffer;
  
});