var threeEyeAcco = function(element, options) {

    var _ = this;

    var $element = element;

    _.main = $element;

    _.accordion_header = $(_.main).find('.thirdeye-Accordion-header');
    _.accordion_arrow = $(_.main).find('.accordion-arrow');

    _.defaults = {
        speed: 400,
        oneOpen: false,
        normalIconPath: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill - rule = "evenodd" d = "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" / ></svg>',
        activeIconPath: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill - rule = "evenodd" d = "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" / ></svg>',
        activeIcon: false,
        arrowClick: false,
    };

    _.options = $.extend({}, _.defaults, options);


    _.init();
}

threeEyeAcco.prototype.init = function() {
    var _ = this;
    _.accoIcon();
    _.build();
}

threeEyeAcco.prototype.build = function() {
    var _ = this;

    if (_.options.arrowClick === true) {
        _.accordion_header.find('.accordion-arrow').on('click', function() {
            _.toggler($(this));
        });
    } else {
        _.accordion_header.on('click', function() {
            _.toggle($(this));
        });
    }

    if (_.options.oneOpen && $('.thirdeye-Accordion-item.active').length > 1) {
        $('.thirdeye-Accordion-item.active:not(:first)').removeClass('active');
    }

    $('.thirdeye-Accordion-item.active').find('> .thirdeye-Accordion-body').show();


}

threeEyeAcco.prototype.toggle = function($this) {
    var _ = this;
    console.log($this)
    if (_.options.oneOpen && $this[0] != $this.closest('.thirdeye-Accordion').find('> .thirdeye-Accordion-item.active > .thirdeye-Accordion-header')[0]) {
        $this.closest('.thirdeye-Accordion')
            .find('> .thirdeye-Accordion-item')
            .removeClass('active')
            .find('.thirdeye-Accordion-body')
            .slideUp()
    }

    $this.closest('.thirdeye-Accordion-item').toggleClass('active').siblings('.thirdeye-Accordion-item').find('.thirdeye-Accordion .thirdeye-Accordion-item').removeClass('active');
    $this.next().stop().slideToggle(_.options.speed);

}

threeEyeAcco.prototype.toggler = function($this) {
    var _ = this;
    console.log($this)
    if (_.options.oneOpen && $this.parent('.thirdeye-Accordion-header')[0] != $this.parent('.thirdeye-Accordion-header').closest('.thirdeye-Accordion').find('> .thirdeye-Accordion-item.active > .thirdeye-Accordion-header')[0]) {
        $this.parent('.thirdeye-Accordion-header').closest('.thirdeye-Accordion')
            .find('> .thirdeye-Accordion-item')
            .removeClass('active')
            .find('.thirdeye-Accordion-body')
            .slideUp()
    }

    $this.parent('.thirdeye-Accordion-header').closest('.thirdeye-Accordion-item').toggleClass('active').siblings('.thirdeye-Accordion-item').find('.thirdeye-Accordion .thirdeye-Accordion-item').removeClass('active');
    $this.parent('.thirdeye-Accordion-header').next().stop().slideToggle(_.options.speed);

}


threeEyeAcco.prototype.accoIcon = function() {
    var _ = this;

    $('.thirdeye-Accordion-item .thirdeye-Accordion-header').append('<div class="accordion-arrow"></div>');
    $('<span class="icon accordion-active">' + _.options.normalIconPath + '</span>').appendTo('.accordion-arrow');

    if (_.options.activeIcon === true) {
        $('.accordion-arrow').addClass('add');
        $('<span class="icon accordion-deactive">' + _.options.activeIconPath + '</span>').appendTo('.accordion-arrow');
    } else {
        $('.accordion-arrow').removeClass('add');
    }

}