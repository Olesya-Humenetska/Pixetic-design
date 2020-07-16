const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar-nav");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item");
    // toggle nav
    burger.addEventListener("click", () => {
        console.log("done burger");
        nav.classList.toggle("nav-active");

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
                .1}s`;
            }
        });
        //   burger animation
        burger.classList.toggle("toggle");
        console.log("done burger menu");
    });
};
navSlide();
//=============================================================== ACTIVE
// const links = document.querySelectorAll('.nav-item > a');
//
// const changeActive = (e) => {
//     [...links].forEach(link => link.classList.remove('active'));
//     e.target.classList.add('active');
// }
//
// [...links].forEach(e => e.addEventListener('click', changeActive));
// navSlide();
//=============================================================== END ACTIVE

//================================================================== SCROLL
let mainNavLinks = document.querySelectorAll(".navbar-nav .nav-link");
let mainSections = document.querySelectorAll(".section-scroll");

let lastId;
let cur = [];


window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop});
    console.log("done");
};

document.getElementById("link-home").addEventListener('click', () => {
    event.preventDefault()
    scrollTo(document.getElementById("home"));
    console.log("home");
});

document.getElementById("link-services").addEventListener('click', () => {
    event.preventDefault()
    scrollTo(document.getElementById("services"));
    console.log("services");
});

document.getElementById("link-team").addEventListener('click', () => {
    event.preventDefault()
    scrollTo(document.getElementById("team"));
    console.log("team");
});
//================================================================== END SCROLL
window.onload = function() {
    !(function (e) {
        function t(e, t) {
            if (!e) return [];
            for (
                var a = [],
                    n = new RegExp("(^| )" + t + "( |\\d|$)"),
                    s = e.getElementsByTagName("*"),
                    r = 0,
                    o = s.length;
                o > r;
                r++
            )
                n.test(s[r].className) && a.push(s[r]);
            return a;
        }

        function a(e, t) {
            var a = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
            return (
                a.test(e.className) ||
                (e.className = (e.className + " " + t)
                    .replace(/\s+/g, " ")
                    .replace(/(^ | $)/g, "")),
                    e
            );
        }

        function n(e, t) {
            var a = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
            return (
                (e.className = e.className
                    .replace(a, "$1")
                    .replace(/\s+/g, " ")
                    .replace(/(^ | $)/g, "")),
                    e
            );
        }

        function s(e, t) {
            for (var a in t) e.style[a] = t[a];
        }

        function r(e, t, a) {
            if (e) {
                t = t.split(" ");
                for (var n in t) e.addEventListener(t[n], a, !1);
            }
        }

        function o(o) {
            a(o, "cs_handle");
            var i = t(o.getElementsByTagName("ul")[0], "img"),
                c = e.createElement("div"),
                l = e.createElement("div");
            a(l, "cs_gestures"),
                l.appendChild(c),
                o.appendChild(l),
                c.appendChild(
                    a(
                        i[i.length - 1].getElementsByTagName("img")[0].cloneNode(),
                        "cs_first_img"
                    )
                );
            for (var p in i)
                c.appendChild(i[p].getElementsByTagName("img")[0].cloneNode());
            c.appendChild(
                a(i[0].getElementsByTagName("img")[0].cloneNode(), "cs_last_img")
            );
            var d = t(o, "cs_anchor slide"),
                m = 0,
                g = 0,
                f = 300,
                u = 15,
                h = 0,
                v = o.clientWidth;
            r(o, "mousedown touchstart", function (e) {
                if (
                    !/cs_play_pause|cs_arrowprev|cs_arrownext|cs_bullets|cs_thumb/g.test(
                        e.target.parentNode.className
                    ) &&
                    !/cs_bullets/g.test(e.target.parentNode.parentNode.className)
                ) {
                    (m = (e.touches ? e.touches[0] : e).pageX),
                        (g = 0),
                        e.stopPropagation(),
                        (v = o.clientWidth);
                    for (var t in d)
                        if (d[t].checked) {
                            h = t;
                            break;
                        }
                    a(o, "cs_grab"),
                        (d[h].checked = !0),
                        s(c, {
                            WebkitTransition: "",
                            transition: "",
                            WebkitTransform: "translate3d(" + -v * h + "px,0px,0px)",
                            transform: "translate3d(" + -v * h + "px,0px,0px)"
                        });
                }
            }),
                r(e, "mousemove touchmove", function (e) {
                    if (m) {
                        var t = (e.touches ? e.touches[0] : e).pageX;
                        e.preventDefault(),
                            e.stopPropagation(),
                            (g = t - m >= v ? v + m : -v >= t - m ? -v + m : t),
                            a(l, "cs_show"),
                            s(c, {
                                WebkitTransform:
                                "translate3d(" + (-v * h + g - m) + "px,0px,0px)",
                                transform: "translate3d(" + (-v * h + g - m) + "px,0px,0px)"
                            });
                    }
                }),
                r(e, "mouseup touchend", function (e) {
                    if (m) {
                        g && (e.preventDefault(), e.stopPropagation()), n(o, "cs_grab");
                        var t = m - g,
                            a = 0;
                        if (g && Math.max(t, -1 * t) > u) {
                            for (var r in d)
                                if (d[r].checked) {
                                    t > 0 && r < d.length - 1
                                        ? (h = 1 * r + 1)
                                        : 0 > t && r > 0
                                        ? (h = 1 * r - 1)
                                        : 0 > t
                                            ? ((a = -1), (h = d.length - 1))
                                            : ((a = d.length), (h = 0));
                                    break;
                                }
                            d[h].checked = !0;
                        }
                        var i = Math.max((v + (t > 0 ? -1 : 1) * t) / v, 0.3);
                        s(c, {
                            WebkitTransition: "-webkit-transform " + f * i + "ms linear",
                            transition: "transform " + f * i + "ms linear",
                            WebkitTransform: "translate3d(" + -v * (a || h) + "px,0px,0px)",
                            transform: "translate3d(" + -v * (a || h) + "px,0px,0px)"
                        }),
                            (g = 0),
                            (m = 0);
                    }
                });
            var x = t(o, "cs_anchor");
            for (var p in x)
                (function (e) {
                    r(x[e], "change", function () {
                        e != h && n(l, "cs_show");
                    });
                })(p);
        }

        window.cssSliderGestures ||
        ((window.cssSliderGestures = 1),
        (!e.all || window.atob) &&
        r(window, "load", function () {
            for (var a = t(e.body, "csslider"), n = 0, s = a.length; s > n; n++)
                new o(a[n]);
        }));
    })(document);
}



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

var triggerOffset = document.documentElement.clientHeight / 4;
var sceneStart = -1100;
var duration = 2100;

var requestId = null;

gsap.set(".box", {
    left: 0,
    top: 10
});

gsap.set(".timeline-trigger", {
    top: triggerOffset
});

gsap.set(".start-trigger", {
    top: sceneStart
});

gsap.set(".end-trigger", {
    top: sceneStart + duration
});

// "SCROLL MAGIC"!!!
var tl = gsap.timeline({ paused: true })
    // .set(".box", { backgroundColor: "#64dd17" }, sceneStart)
    .set(".box", {  }, sceneStart)
    .to(".box", { duration: duration, rotation: 720, x: 900 ,
    motionPath:{
    path: ".app-path",
        align: ".app-path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
    }
})
    // .set(".box", { backgroundColor: "red" })
    .set(".box", {  })

// Only update on animation frames
window.addEventListener("scroll", function() {
    if (!requestId) {
        requestId = requestAnimationFrame(update);
    }
});

update();

// Set timeline time to scrollTop
function update() {
    tl.time(window.pageYOffset + triggerOffset);
    requestId = null;
}

