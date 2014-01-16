define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        EmployeeListView    = require('app/views/EmployeeList'),
        tpl                 = require('text!tpl/Reports.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            
            this.$el.html(template(this.model.attributes));
            this.model.reports.fetch({
                success: function (data) {
                    data.listView = new EmployeeListView({collection: data, el: $(".scroller", data.el)});
                }
            });
            
            return this;
        }

    });

});