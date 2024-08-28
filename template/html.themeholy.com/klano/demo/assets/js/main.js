!(function (e) {
  "use strict";
  if (
    (e(window).on("load", function () {
      e(".preloader").fadeOut(), e(".hero-overlay-ani").addClass("ani-start");
    }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.thmobilemenu = function (t) {
      var a = e.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          appendElement: '<span class="th-mean-expand"></span>',
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function s() {
          t.toggleClass(a.bodyToggleClass);
          var s = "." + a.subMenuClass;
          e(s).each(function () {
            e(this).hasClass(a.subMenuToggleClass) &&
              (e(this).removeClass(a.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(a.subMenuParentToggle));
          });
        }
        t.find("li").each(function () {
          var t = e(this).find("ul");
          t.addClass(a.subMenuClass),
            t.css("display", "none"),
            t.parent().addClass(a.subMenuParent),
            t.prev("a").append(a.appendElement),
            t.next("a").append(a.appendElement);
        });
        var n = "." + a.meanExpandClass;
        e(n).each(function () {
          e(this).on("click", function (t) {
            var s, n, o;
            t.preventDefault(),
              (s = e(this).parent()),
              (n = e(s).parent()),
              (o = n.siblings()).removeClass(a.subMenuParentToggle),
              o
                .find("ul")
                .slideUp(a.toggleSpeed)
                .removeClass(a.subMenuToggleClass),
              n.toggleClass(a.subMenuParentToggle),
              e(s)
                .next("ul")
                .slideToggle(a.toggleSpeed)
                .toggleClass(a.subMenuToggleClass);
          });
        }),
          e(a.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              s();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), s();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".th-menu-wrapper").thmobilemenu(),
    e(window).scroll(function () {
      e(this).scrollTop() > 500
        ? (e(".sticky-wrapper").addClass("sticky"),
          e(".category-menu").addClass("close-category"))
        : (e(".sticky-wrapper").removeClass("sticky"),
          e(".category-menu").removeClass("close-category"));
    }),
    e(".scroll-top").length > 0)
  ) {
    var t = document.querySelector(".scroll-top"),
      a = document.querySelector(".scroll-top path"),
      s = a.getTotalLength();
    (a.style.transition = a.style.WebkitTransition = "none"),
      (a.style.strokeDasharray = s + " " + s),
      (a.style.strokeDashoffset = s),
      a.getBoundingClientRect(),
      (a.style.transition = a.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var n = function () {
      var t = e(window).scrollTop(),
        n = e(document).height() - e(window).height(),
        o = s - (t * s) / n;
      a.style.strokeDashoffset = o;
    };
    n(), e(window).scroll(n);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(t).addClass("show")
        : jQuery(t).removeClass("show");
    }),
      jQuery(t).on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  e("[data-bg-src]").length > 0 &&
    e("[data-bg-src]").each(function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
      }),
    e("[data-mask-src]").length > 0 &&
      e("[data-mask-src]").each(function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
          "mask-image": "url(" + t + ")",
          "-webkit-mask-image": "url(" + t + ")",
        }),
          e(this).addClass("bg-mask"),
          e(this).removeAttr("data-mask-src");
      }),
    e(".th-slider").each(function () {
      var t = e(this),
        a = e(this).data("slider-options"),
        s = t.find(".slider-prev"),
        n = t.find(".slider-next"),
        o = t.find(".slider-pagination"),
        i = a.autoplay,
        r = {
          slidesPerView: 1,
          spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
          loop: 0 != a.loop,
          speed: a.speed ? a.speed : 1e3,
          autoplay: i || { delay: 6e3, disableOnInteraction: !1 },
          navigation: { nextEl: n.get(0), prevEl: s.get(0) },
          pagination: {
            el: o.get(0),
            clickable: !0,
            renderBullet: function (e, t) {
              return (
                '<span class="' +
                t +
                '" aria-label="Go to Slide ' +
                (e + 1) +
                '"></span>'
              );
            },
          },
        },
        c = JSON.parse(t.attr("data-slider-options"));
      c = e.extend({}, r, c);
      new Swiper(t.get(0), c);
      e(".slider-area").length > 0 &&
        e(".slider-area").closest(".container").parent().addClass("arrow-wrap");
    }),
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
    e("[data-ani-delay]").each(function () {
      var t = e(this).data("ani-delay");
      e(this).css("animation-delay", t);
    }),
    e("[data-slider-prev], [data-slider-next]").on("click", function () {
      var t = e(this).data("slider-prev") || e(this).data("slider-next"),
        a = e(t);
      if (a.length) {
        var s = a[0].swiper;
        s && (e(this).data("slider-prev") ? s.slidePrev() : s.slideNext());
      }
    });
  var o,
    i,
    r,
    c = ".ajax-contact",
    l = '[name="email"]',
    d = e(".form-messages");
  function p() {
    var t = e(c).serialize();
    (function () {
      var t,
        a = !0;
      function s(s) {
        s = s.split(",");
        for (var n = 0; n < s.length; n++)
          (t = c + " " + s[n]),
            e(t).val()
              ? (e(t).removeClass("is-invalid"), (a = !0))
              : (e(t).addClass("is-invalid"), (a = !1));
      }
      s(
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
      ),
        e(l).val() &&
        e(l)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(l).removeClass("is-invalid"), (a = !0))
          : (e(l).addClass("is-invalid"), (a = !1));
      return a;
    })() &&
      jQuery
        .ajax({ url: e(c).attr("action"), data: t, type: "POST" })
        .done(function (t) {
          d.removeClass("error"),
            d.addClass("success"),
            d.text(t),
            e(c + ' input:not([type="submit"]),' + c + " textarea").val("");
        })
        .fail(function (e) {
          d.removeClass("success"),
            d.addClass("error"),
            "" !== e.responseText
              ? d.html(e.responseText)
              : d.html(
                  "Oops! An error occured and your message could not be sent."
                );
        });
  }
  function u(t, a, s, n) {
    e(a).on("click", function (a) {
      a.preventDefault(), e(t).addClass(n);
    }),
      e(t).on("click", function (a) {
        a.stopPropagation(), e(t).removeClass(n);
      }),
      e(t + " > div").on("click", function (a) {
        a.stopPropagation(), e(t).addClass(n);
      }),
      e(s).on("click", function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(n);
      });
  }
  function h(e) {
    return parseInt(e, 10);
  }
  e(c).on("submit", function (e) {
    e.preventDefault(), p();
  }),
    (o = ".popup-search-box"),
    (i = ".searchClose"),
    (r = "show"),
    e(".searchBoxToggler").on("click", function (t) {
      t.preventDefault(), e(o).addClass(r);
    }),
    e(o).on("click", function (t) {
      t.stopPropagation(), e(o).removeClass(r);
    }),
    e(o)
      .find("form")
      .on("click", function (t) {
        t.stopPropagation(), e(o).addClass(r);
      }),
    e(i).on("click", function (t) {
      t.preventDefault(), t.stopPropagation(), e(o).removeClass(r);
    }),
    u(".sidemenu-cart", ".sideMenuCart", ".sideMenuCls", "show"),
    u(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"),
    e(".popup-image").magnificPopup({
      type: "image",
      mainClass: "mfp-zoom-in",
      removalDelay: 260,
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".popup-content").magnificPopup({ type: "inline", midClick: !0 }),
    (e.fn.sectionPosition = function (t, a) {
      e(this).each(function () {
        var s,
          n,
          o,
          i,
          r,
          c = e(this);
        (s = Math.floor(c.height() / 2)),
          (n = c.attr(t)),
          (o = c.attr(a)),
          (i = h(e(o).css("padding-top"))),
          (r = h(e(o).css("padding-bottom"))),
          "top-half" === n
            ? (e(o).css("padding-bottom", r + s + "px"),
              c.css("margin-top", "-" + s + "px"))
            : "bottom-half" === n &&
              (e(o).css("padding-top", i + s + "px"),
              c.css("margin-bottom", "-" + s + "px"));
      });
    });
  function m() {
    e(".progressbar").each(function () {
      var t = e(this).offset().top,
        a = e(window).scrollTop(),
        s = e(this).find(".circle").attr("data-percent"),
        n = (parseInt(s, 10), parseInt(100, 10), e(this).data("animate"));
      t < a + e(window).height() - 30 &&
        !n &&
        (e(this).data("animate", !0),
        e(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: s / 100,
            size: 140,
            thickness: 10,
            emptyFill: "#AFDBFF",
            lineCap: "round",
            fill: { color: "#068FFF" },
          })
          .on("circle-animation-progress", function (t, a, s) {
            e(this)
              .find(".circle-num")
              .text((100 * s).toFixed(0) + "%");
          })
          .stop());
    });
  }
  e("[data-sec-pos]").length &&
    e("[data-sec-pos]").imagesLoaded(function () {
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
    }),
    e(".hover-item").hover(function () {
      e(this).addClass("item-active"),
        e(this).siblings().removeClass("item-active");
    }),
    e(".filter-active").imagesLoaded(function () {
      if (e(".filter-active").length > 0) {
        var t = e(".filter-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: {},
        });
        e(".filter-menu-active").on("click", "button", function () {
          var a = e(this).attr("data-filter");
          t.isotope({ filter: a });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
      function () {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 &&
          e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: { columnWidth: 1 },
          }),
          e('[data-bs-toggle="tab"]').on("shown.bs.tab", function (a) {
            e(t).isotope({ filter: "*" });
          });
      }
    ),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    e(".date-pick").datetimepicker({
      timepicker: !1,
      datepicker: !0,
      format: "d-m-y",
      step: 10,
    }),
    e(".time-pick").datetimepicker({ datepicker: !1, format: "H:i", step: 30 }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          a = t.data("top"),
          s = t.data("right"),
          n = t.data("bottom"),
          o = t.data("left");
        t.css({ top: a, right: s, bottom: n, left: o })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    m(),
    e(window).scroll(m),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    e(".color-switch-btns button").each(function () {
      const t = e(this),
        a = t.data("color");
      t.css("--theme-color", a),
        t.on("click", function () {
          const t = e(this).data("color");
          e(":root").css("--theme-color", t);
        });
    }),
    e("#thcolorpicker").on("input", function () {
      const t = e(this).val();
      var a;
      (a = t), e(":root").css("--theme-color", a);
    }),
    e(document).on("click", ".switchIcon", function () {
      e(".color-scheme").toggleClass("active");
    }),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          s = parseInt(a.val(), 10);
        isNaN(s) || a.val(s + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          s = parseInt(a.val(), 10);
        !isNaN(s) && s > 1 && a.val(s - 1);
      });
    }),
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      !1
    ),
    (document.onkeydown = function (e) {
      return (
        123 != event.keyCode &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
        (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
        void 0
      );
    });
})(jQuery);
