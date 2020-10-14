/*!
 * Filterable jQuery plugin v1.1.0
 * https://github.com/rogierborst/jQuery-Filterable
 *
 * Copyright 2015 Rogier Borst
 * Released under the MIT license
 */

/* global define, require, jQuery */
;(function($, window, document, undefined){
    'use strict';

    var pluginName = 'filterable';

    var defaults = {
        tickCheckboxesAtStart: false,
        clearSearchBoxAtStart: false,
        caseSensitiveFilter: false,
        caseSensitiveSearch: false,
        oddRowClass: '',
        evenRowClass: '',
        emptyTableMessage: '',
        emptyTableMessageClass: 'empty-table-message',
        arrayData: {}
    };

    function Filterable($table, options){
        var self = this;
        self.config = $.extend({}, defaults, options);
        self.$table = $table;
        self.activeFilters = [];
        self.activeSearchTerm = '';
        self.numberOfColumns = 0;

        self.init();
    }

    Filterable.prototype = {

        init: function(){
            var self = this;
            self.$controls = $(self.$table.data('filter-controls'));
            self.$searchBox = $(self.$table.data('search-controls'));
            self.numberOfColumns = $('thead th', self.$table).length;

            if ( self.config.tickCheckboxesAtStart ){
                // check all control checkboxes if instructed to do so in the options
                $('input:checkbox', self.$controls).prop('checked', true);
            } else {
                // add all unchecked boxes to the active filter and... filter!
                $('input:checkbox:not(:checked)', self.$controls).each(function(){
                    self._onCheckboxChange(this);
                });
            }

            if ( self.config.clearSearchBoxAtStart ){
                self.$searchBox.val('');
            } else if ( self.$searchBox.val() ){
                self.updateSearchTerm(self.$searchBox.val());
            }

            if ( self.config.emptyTableMessage ){
                self._setupEmptyTableMessage();
            }

            // Listen for checkbox changes
            self.$controls.on('change', 'input[type=checkbox]', function(){
                self._onCheckboxChange(this);
            });

            // Listen for changes in the search box
            self.$searchBox.on('keyup', function(){
                self.updateSearchTerm($(this).val());
            });

        },

        setRowClasses: function () {
            $('tbody tr', this.$table).removeClass(this.config.oddRowClass + ' ' + this.config.evenRowClass);

            if ( this.config.oddRowClass ) {
                // confusing jQuery: the :even and :odd selector is zero-based!
                $('tbody tr:visible:even', this.$table).addClass(this.config.oddRowClass);
            }

            if ( this.config.evenRowClass ) {
                $('tbody tr:visible:odd', this.$table).addClass(this.config.evenRowClass);
            }
        },

        // Loop through rows and hide or show them
        checkRows: function(){
            var self = this,
                emptyMessageClass = self.config.emptyTableMessageClass;

            $('tbody tr', self.$table).each(function(){
                if ( $(this).hasClass(emptyMessageClass) ){
                    return;
                }

                if ( self._rowIsFiltered(this) || !self._rowContainsSearchItem(this) ){
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });

            if ( self.config.emptyTableMessage ){
                self.checkIfTableIsEmpty();
            }

            if ( self.config.oddRowClass || self.config.evenRowClass ) {
                self.setRowClasses();
            }
        },

        // Check if row should be hidden
        _rowIsFiltered: function(row){
            for ( var filter in this.activeFilters ) {
                if ( this._checkFilter(this.activeFilters[filter], row) === true ) {
                    return true;
                }
            }

            return false;
        },

        _checkFilter: function(filter, row) {
            var value = ( filter.scope === 'cell' ) ? $(row).find('td').eq(filter.name).text() : $(row).attr('data-' + filter.name);
            value = this.config.caseSensitiveFilter ? $.trim(value) : $.trim(value).toUpperCase();

            if ( filter.type === 'simple' ) return this._checkSimpleFilter(filter, value);
            if ( filter.type === 'array' ) return this._checkArrayFilter(filter, value);
        },

        _checkSimpleFilter: function(filter, value) {
            return $.inArray(value, filter.terms) > -1;
        },

        _checkArrayFilter: function(filter, value) {
            var textItems = value.split(filter.separator);

            // For speed, we first check if the textItems array contains more items than the filter terms.
            if ( ! filter.exclusive && textItems.length > filter.terms.length ) {
                return false;
            }

            for ( var i in textItems ) {
                if ( $.inArray(textItems[i], filter.terms) > -1 ) {
                    // a text item was found that matches a filter term
                    if ( filter.exclusive ) {
                        // if the filter is exclusive, we must HIDE this row immediately
                        return true;
                    }
                } else {
                    // a text item was found that does not match a filter term
                    if ( ! filter.exclusive ) {
                        // if the filter is inclusive, we must SHOW this row immediately
                        return false;
                    }
                }
            }
            // The row was not shown or hidden immediately.
            // For exclusive filtering, this means the row should be visible.
            // For inclusive filtering, this means we didn't find a reason to
            // show this row, so it should be hidden (return TRUE)
            return filter.exclusive ? false : true;
        },

        // Check if any cell in a row contains the current search term
        _rowContainsSearchItem: function(row){
            if ( this.activeSearchTerm === '' ) {
                return true;
            }

            if ( this.config.caseSensitiveSearch ) {
                return $('td:contains(' + this.activeSearchTerm + ')', row).length > 0;
            }

            return $('td:containsNC(' + this.activeSearchTerm + ')', row).length > 0;
        },

        _onCheckboxChange: function(checkbox){
            var $checkbox = $(checkbox),
                value,
                filterName,
                status = $(checkbox).is(':checked') ? 'off' : 'on';

            value = typeof $checkbox.data('filter-content') !== 'undefined' ? $checkbox.data('filter-content') : $checkbox.val();
            value = this.config.caseSensitiveFilter ? value : value.toUpperCase();

            filterName = $checkbox.data('filterColumn') || $checkbox.data('filterRowData');

            this.updateFilters(filterName, value, status);

            this.checkRows();
        },

        updateFilters: function (filterName, value, status) {
            // if filter exists, update it
            var filter = {},
                filterIndex = -1;

            for ( var i=0; i < this.activeFilters.length; i++ ) {
                if ( this.activeFilters[i].name === filterName ) {
                    filter = this.activeFilters[i];
                    filterIndex = i;
                    break;
                }
            }

            if ( filterIndex  < 0 ) {
                // set up a new filter
                filter.type = typeof this.config.arrayData[filterName] !== 'undefined' ? 'array' : 'simple';
                filter.scope = typeof filterName === 'number' ? 'cell' : 'row';
                filter.name = filterName;
                filter.terms = [];

                if ( filter.type === 'array' ) {
                    filter.exclusive = this.config.arrayData[filterName].exclusive || false;
                    filter.separator = this.config.arrayData[filterName].separator || ', ';
                }
            }

            filter = this._updateFilterTerms(filter, value, status);

            if ( filter.terms.length < 1 ) {
                this.activeFilters.splice(filterIndex, 1);  // no term, so delete the filter
            } else if ( filterIndex > -1 ) {
                this.activeFilters[filterIndex] = filter;   // filter exists, update it
            } else {
                this.activeFilters.push(filter);            // new filter, add it
            }
        },

        _updateFilterTerms: function(filter, term, status){
            if ( status === 'on' ) {
                filter.terms.push(term);
            } else {
                for ( var i = filter.terms.length-1; i >= 0; i--) {
                    if ( filter.terms[i] === term ) {
                        filter.terms.splice(i, 1);
                    }
                }
            }

            return filter;
        },

        updateSearchTerm: function(searchTerm){
            this.activeSearchTerm = this.config.caseSensitiveSearch ? searchTerm : searchTerm.toUpperCase();
            this.checkRows();
        },

        _setupEmptyTableMessage: function(){
            var $row = $('<tr></tr>').addClass(this.config.emptyTableMessageClass);

            $('<td></td>')
                .attr('colspan', this.numberOfColumns)
                .html(this.config.emptyTableMessage)
                .appendTo($row);
            $row.hide().prependTo('tbody', this.$table);
        },

        checkIfTableIsEmpty: function(){
            var emptyMessageClass = this.config.emptyTableMessageClass,
                $visibleRows = $('tbody tr:visible', self.$table);

            // if no rows are visible, show the empty table message
            if ( ! $visibleRows.length ){
                $('.' + emptyMessageClass).show();
                return true;
            }

            // if the only visible row IS the message row, do nothing
            if ( $visibleRows.length === $('.' + emptyMessageClass).length ){
                return true;
            }

            // there are rows visible, so hide the message row
            $('.' + emptyMessageClass).hide();
        }
    };


    $.fn.filterable = function(options){

        if ( typeof options === 'undefined' || typeof options === 'object' ){
            return this.each(function(){
                if ( !$.data(this, 'plugin_' + pluginName )) {
                    $.data(this, 'plugin_' + pluginName, new Filterable($(this), options));
                }
            });
        }

    };

    // Extend the standard jQuery :contains selector with a case insensitive version
    // i.e. $('td:containsNC(sEaRcHtErM))
    // See: http://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
    $.extend($.expr[":"], {
        "containsNC": function(elem, i, match, array) {
            return (elem.textContent || elem.innerText || "")
                .toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });

})(jQuery, window, document);
