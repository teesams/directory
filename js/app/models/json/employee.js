//var surl = 'http://localhost/directory/new/';
var surl = 'http://teesams.com/directory_new/';
define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),
        Employee = Backbone.Model.extend({

            urlRoot: surl+"directory_api/webservice.php/employees",

            initialize: function () {
                
                this.reports = new ReportsCollection();
                this.reports.parent = this;
                
                //this.reports = new EmployeeCollection();
                this.reports.url = this.urlRoot + "/" + this.id + "/reports";
                
                //this.reports.parent = this;
            }

        }),

        EmployeeCollection = Backbone.Collection.extend({

            model: Employee,

            url: surl+"directory_api/webservice.php/employees"

        }),
        ReportsCollection = Backbone.Collection.extend({

            model: Employee

        });
        

    return {
        Employee: Employee,
        EmployeeCollection: EmployeeCollection,
        ReportsCollection: ReportsCollection
    };

});