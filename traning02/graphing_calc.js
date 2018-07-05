var aa = this;

function ba(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ca(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function n(a, b, c) {
    n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
    return n.apply(null, arguments)
}

function p(a, b) {
    var c = a.split("."),
        d = aa;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var f; c.length && (f = c.shift());) c.length || void 0 === b ? d[f] ? d = d[f] : d = d[f] = {} : d[f] = b
};

function r(a) {
    var b = document.createElement("script");
    b.src = a;
    b.type = "text/javascript";
    b.async = !0;
    document.getElementsByTagName("head")[0].appendChild(b)
}
p("load_javascript", r);

function t(a, b, c) {
    var d = new Date;
    d.setTime((new Date).getTime() + 36E5 * c);
    document.cookie = a + "=" + encodeURIComponent(b) + ";expires=" + d.toGMTString()
}
p("setcookie", t);

function u(a) {
    if (0 < document.cookie.length) {
        var b = document.cookie.indexOf(a + "=");
        if (-1 != b) return b = b + a.length + 1, a = document.cookie.indexOf(";", b), -1 == a && (a = document.cookie.length), decodeURIComponent(document.cookie.substring(b, a))
    }
    return ""
}
p("getcookie", u);

function y(a, b, c) {
    var d = new XMLHttpRequest;
    try {
        d.open("POST", a, !0), d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), d.onreadystatechange = function() {
            4 == d.readyState && 200 == d.status && d.responseText && c && c(d.responseText)
        }, d.send(b)
    } catch (f) {}
}
p("ajax", y);

function z(a) {
    A(window, "load", a)
}
p("addOnLoad", z);

function B() {
    var a = document.location.hostname;
    return a = a.replace(/^.*?[.]/, "")
}
Array.prototype.contains = function(a) {
    for (var b = 0; b < this.length; b++)
        if (this[b] === a) return !0;
    return !1
};
p("openPopUp", function(a) {
    1200 < screen.width ? (width = 1200, height = 800) : 1E3 < screen.width ? (width = 800, height = 600) : (width = 600, height = 450);
    screenX = .5 * (screen.width - width);
    screenY = .5 * (screen.height - height);
    winargs = "width=" + width + ",height=" + height + ",screenX=" + screenX + ",screenY=" + screenY + ",location=no,scrollbars=yes,toolbar=no,menubar=no,status=no,titlebar=no";
    (win1 = window.open(a, "_blank", winargs)) && win1.focus()
});
p("generateId", function() {
    for (var a = "", b = 0; 8 > b; b++) a += Math.round(65536 * (1 + Math.random())).toString(16).substring(1);
    return a
});

function A(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, function() {
        return c.call(a, window.event)
    })
};
var C = 0;

function D(a) {
    for (i = 1; i <= a; i++) document.getElementById("star" + i).setAttribute("src", "/images/orangestar.png");
    for (i = a + 1; 5 >= i; i++) document.getElementById("star" + i).setAttribute("src", "/images/graystar.png")
}

function da() {
    D(C)
}

function ea(a) {
    C = a;
    D(a);
    y("page_ratings.php", "rating=" + a + "&url=" + escape(document.location.href) + "&screenWidth=" + screen.width + "&screenHeight=" + screen.height + "&colorDepth=" + screen.colorDepth + "&cookiesEnabled=" + navigator.cookieEnabled);
    confirm(tr_comment) && (document.location.href = "contact.php?tag=ranking")
};

function E(a) {
    a = a.replace(/^https?:\/\//, "");
    a = a.replace(/\/.*$/, "");
    a = a.replace(/local$/, "com");
    a = a.replace(/^.*?[.]/, "");
    for (var b = 1656, c = 0; c < a.length; c++) b -= a.charCodeAt(c);
    return b
}

function F() {
    F = function() {};
    var a = document.getElementById("perm-ad"),
        b = 0;
    a && 90 > a.offsetHeight && (b = 1);
    if (document.styleSheets)
        for (a = 0; a < document.styleSheets.length; a++)
            if (document.styleSheets[a]) {
                var c = document.styleSheets[a];
                if ("unknown" != typeof c.rules && (c = c.rules))
                    for (var d = 0; d < c.length; d++) c[d].selectorText && -1 != c[d].selectorText.indexOf("widget-ad") && (b = 1)
            }
    t("w3ad", b, 24);
    var f = u("w3ad1length") ? parseInt(u("w3ad1length")) : 0,
        f = b ? f + 1 : 0;
    t("w3ad1length", f, 24);
    0 < f && setTimeout(function() {
        H(f)
    }, 200)
}

function H(a) {
    H = function() {};
    var b = ad_msgs[a % ad_msgs.length],
        c = document.getElementById("toplink");
    7 < a && (document.body.style.backgroundColor = "#AAA");
    c && (c.innerHTML += "<div class='warn'><h2 " + (3 < a ? "class='blink'" : "") + " style='color: #FF0000'>" + b + " " + tr_disable_adblock + "</h2></div>")
}
t("screen_height", screen.height, 24);
t("timezone_offset", (new Date).getTimezoneOffset(), 24);
p("switchHelp", function() {
    var a = document.getElementById("ops_and_funs");
    y("/get_content.php", "", function(b) {
        a.innerHTML = b
    })
});
var I, J;
p("checkInput", function(a) {
    J && clearTimeout(J);
    J = setTimeout(function() {
        var b = a.value.trim(),
            c;
        b.split("(").length - 1 != b.split(")").length - 1 && (c = parentheses_do_not_match);
        !c && b && (c = ga(b));
        !c && b && b.maxLength && b.length >= a.maxLength && (c = tr_max_field_length_reached);
        c ? (b = c, I || "undefined" == typeof Opentip || (I = new Opentip(a, {
            target: a,
            tipJoint: "bottom",
            background: "pink",
            borderColor: "red",
            showOn: null
        })), a.style.borderColor = "red", I && (I.setContent(b), I.activate(), I.show())) : (I && (I.hide(), I.deactivate()), a.style.borderColor =
            b ? "green" : "")
    }, 200)
});
var ha = "%e %pi %i inf minf infinity".split(" "),
    ia = ["+", "-", "/", "*", "^"],
    K = {},
    ja = "sqrt exp log erf abs sin cos sec csc tan cot asin acos asec acsc atan acot sinh cosh sech csch tanh coth asinh acosh asech acsch atanh acoth sign sum rad deg".split(" ");
String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
});

function L(a, b, c) {
    return c ? a.substring(b, b + c) : a.substring(b)
}

function M(a) {
    if (0 === a.length) return tr_empty_string;
    a = a.replace(/\s+/g, "");
    var b = location.href.replace(/\?.*$/, "");
    if (-1 != a.indexOf(",")) {
        a = a.split(",");
        for (b = 0; b < a.length; b++)
            if (error = M(a[b])) return error;
        return !1
    }
    if (-1 != a.indexOf("=")) {
        a = a.split("=");
        for (b = 0; b < a.length; b++)
            if (error = M(a[b])) return error;
        return !1
    }
    if (!isNaN(parseFloat(a)) && isFinite(a) || ha.contains(a) || a.match(/^[a-zA-Z][0-9]*$/i)) return !1;
    E(b) && (a += "*");
    if ("-" == a.charAt(0)) return M(a.substring(1));
    if ("!" == a.charAt(a.length - 1)) return M(a.substring(0,
        a.length - 1));
    for (var c = 0, b = 0; b < a.length; b++)
        if (")" == a.charAt(b)) c++;
        else if ("(" == a.charAt(b)) c--;
    else if (0 === c && ia.contains(a.charAt(b))) {
        var c = a.substring(0, b),
            d = a.substring(b + 1);
        a = a.charAt(b);
        return K[a] ? K[a](c, d) : M(c) || M(d)
    }
    if ("(" == a.charAt(0) && ")" == a.charAt(a.length - 1)) return M(L(a, 1, a.length - 2));
    for (b = 0; b < a.length && a.charAt(b).match(/^[a-zA-Z]$/g); b++);
    if (b < a.length && "(" == a.charAt(b) && ")" == a.charAt(a.length - 1)) {
        c = 0;
        valid = !0;
        for (start = b + 1; b < a.length - 1; b++)
            if (")" == a.charAt(b) ? c++ : "(" == a.charAt(b) &&
                c--, 0 < c) {
                valid = !1;
                break
            }
        if (valid) return b = L(a, 0, start - 1), ja.contains(b) ? M(L(a, start, a.length - start - 1)) : tr_function + " " + b + " " + tr_not_recognized
    }
    return tr_invalid_exp + ": " + a
}

function ga(a) {
    return M(a)
}
p("computeAt", function(a) {
    document.location.href = "/expressioncalculator.php?function=" + encodeURIComponent(document.getElementById("equation" + a).value + document.getElementById("value" + a).value)
});

function ka() {
    ka = function() {};
    r("https://s7.addthis.com/js/300/addthis_widget.js#pubid=linkedweb&domready=1");
    "undefined" != typeof NodeList && r("/js/opentip-native.js");
    setTimeout(F, 1E3);
    "numberempire.com" != B() && "numberempire.local" != B() && (document.getElementById("top_sandbar").innerHTML = "<b style='color:red'>A stale page is detected!</b><br>Please click on the following link to access the correct page:<br><a href='" + url + "'>" + url + "</a>");
    r("https://www.google-analytics.com/ga.js")
}
p("copyToClipboard", function(a, b) {
    var c = document.getElementById(a).innerHTML.replace(/\s+/g, ""),
        d = b.parentNode;
    b.style.visibility = "hidden";
    var f = "I" + a,
        h = Math.min(c.length + 2, 80);
    d.innerHTML += '<br><input class="center" id="' + f + '" size="' + h + '" + onclick="this.focus();this.select();" value="' + c + '">';
    c = document.getElementById(f);
    c.focus();
    c.select()
});
p("showSteps", function(a, b, c, d) {
    b = "function=" + encodeURIComponent(b) + "&var=" + encodeURIComponent(c) + "&order=" + d;
    var f = document.getElementById("step-by-step");
    f.innerHTML = tr_loading_js;
    var h = document.getElementById("result_1");
    h.style.display = "none";
    y("/" + a + "_solver.php", b, function(a) {
        if (a) {
            f.innerHTML = "";
            a = JSON.parse(a);
            for (var b = 0; b < a.length; b++) {
                var c = a[b][0],
                    d = "";
                if (a[b][1]) {
                    var k = a[b][1];
                    "apply_diff_rule" == k.name ? d = "<div>" + tr_apply_diff_rule + '<script type="math/tex">' + k.rule + "\x3c/script>" : "simplify" ==
                        k.name ? d = "<div>" + tr_simplify_exp : "differentiate" == k.name && (d = "<div>" + k.text);
                    k.comment && (d += " (" + k.comment + ")");
                    d += "</div>"
                } else d = "";
                c && (d = '<div><script type="math/tex">' + c + "\x3c/script></div>" + d);
                f.innerHTML += d
            }
            f.innerHTML += "<div>" + tr_final_simpl_canon + "<div>";
            f.innerHTML += h.innerHTML;
            f.className += " shadow";
            MathJax.Hub.Queue(["Typeset", MathJax.Hub])
        } else f.innerHTML = "An error has occured. Please <a href='/contact.php'>report</a> this issue."
    })
});
z(ka);
var la = ["bingsandbox.com"];
top == self || la.contains(B()) || top.location.replace(location);
for (var N = 1; 5 >= N; N++) {
    var O = document.getElementById("star" + N);
    O && (A(O, "mouseover", n(D, null, N)), A(O, "click", n(ea, null, N)), A(O, "mouseout", da))
};
e = Math.E;
pi = Math.PI;
sqrt = Math.sqrt;
exp = Math.exp;
log = Math.log;
pow = Math.pow;
abs = Math.abs;
sign = function(a) {
    return 0 === a ? 0 : a / abs(a)
};
erf = function(a) {
    var b = (4 / Math.PI + .140012 * a * a) / (1 + .140012 * a * a);
    return sign(a) * sqrt(1 - exp(-a * a * b))
};
sin = Math.sin;
cos = Math.cos;
tan = Math.tan;
sec = function(a) {
    return 1 / cos(a)
};
csc = function(a) {
    return 1 / sin(a)
};
cot = function(a) {
    return 1 / tan(a)
};
asin = Math.asin;
acos = Math.acos;
atan = Math.atan;
asec = function(a) {
    return acos(1 / a)
};
acsc = function(a) {
    return asin(1 / a)
};
acot = function(a) {
    return atan(1 / a)
};
sinh = function(a) {
    return .5 * (exp(a) - exp(-a))
};
cosh = function(a) {
    return .5 * (exp(a) + exp(-a))
};
tanh = function(a) {
    a = exp(2 * a);
    return (a - 1) / (a + 1)
};
sech = function(a) {
    return 1 / cosh(a)
};
csch = function(a) {
    return 1 / sinh(a)
};
coth = function(a) {
    return 1 / tanh(a)
};
asinh = function(a) {
    return log(a + sqrt(a * a + 1))
};
acosh = function(a) {
    return log(a + sqrt(a * a - 1))
};
atanh = function(a) {
    return .5 * log((1 + a) / (1 - a))
};
asech = function(a) {
    return acosh(1 / a)
};
acsch = function(a) {
    return asinh(1 / a)
};
acoth = function(a) {
    return atanh(1 / a)
};
rad = function(a) {
    return pi * a / 180
};
deg = function(a) {
    return 180 * a / pi
};
def = function(a, b, c) {
    return a >= b && a <= c ? 1 : NaN
};

function P(a) {
    a = a.replace(/%pi/g, "Math.PI");
    a = a.replace(/%e/g, "Math.E");
    for (var b = location.href.replace(/\?.*$/, "");;) {
        var c = a.lastIndexOf("^");
        if (-1 == c) break;
        for (var d = c - 1, f = 0;;) {
            ")" == a.charAt(d) && f++;
            "(" == a.charAt(d) && f--;
            if (0 === d || -1 != "+-*/^(".indexOf(a.charAt(d - 1)) && 0 === f) break;
            d--
        }
        for (var h = c + 1, f = 0;;) {
            ")" == a.charAt(h) && f++;
            "(" == a.charAt(h) && f--;
            if (0 === h || -1 != "+-*/^)".indexOf(a.charAt(h + 1)) && 0 === f) break;
            h++
        }
        a = a.substring(0, d) + "pow(" + a.substring(d, c) + "," + a.substring(c + 1, h + 1) + ")" + a.substring(h +
            1)
    }
    E(b) && (a = "x*" + a);
    return a
}

function Q(a) {
    a = a.replace(/ /g, "") + ",";
    for (var b = [], c = 0, d = 0, f = 0; f < a.length; f++)
        if ("(" == a.charAt(f) ? d++ : ")" == a.charAt(f) ? d-- : "," == a.charAt(f) && 0 === d && ((c = a.substring(c, f).trim()) && b.push(c), c = f + 1), 0 > d) return !1;
    return b
}

function ma(a, b, c, d, f, h) {
    var m = f / 32,
        l = m;
    c = c - f;
    a = P(a);
    b = new Function("var " + b + "  = arguments[0]; return " + a);
    a = [];
    for (var q = NaN; c < d;) {
        c += l;
        var g;
        g = b(c);
        Infinity == g && (g = 1E100); - Infinity == g && (g = -1E100);
        isNaN(g) || a.push([c, g]);
        q = abs(g - q);
        isNaN(q) || (q > h / 2 && l > m && (l /= 2), q < h / 8 && l < f && (l *= 2));
        q = g
    }
    return a
}

function na(a) {
    return "(" != a.charAt(0) || ")" != a.charAt(a.length - 1) ? !1 : (a = Q(a.substring(1, a.length - 1))) && 1 < a.length ? a : !1
}

function oa(a) {
    for (var b = [], c = eval(P(document.getElementById("xmin").value.trim())), d = eval(P(document.getElementById("xmax").value.trim())), f = eval(P(document.getElementById("ymin").value.trim())), h = eval(P(document.getElementById("ymax").value.trim())), m = Q(document.getElementById("functions").value), l = (d - c) / T, q = (h - f) / U, g = c - l, k = []; g < d;) g += l, k.push([g, 0]);
    b.push({
        data: k,
        color: "gray",
        shadowSize: 0
    });
    if (0 < d && 0 > c) {
        g = f - q;
        for (k = []; g < h;) g += q, k.push([0, g]);
        b.push({
            data: k,
            color: "gray",
            shadowSize: 0
        })
    }
    document.getElementById("direct_link").setAttribute("href",
        "/graphingcalculator.php?functions=" + encodeURIComponent(document.getElementById("functions").value) + "&xmin=" + encodeURIComponent(document.getElementById("xmin").value) + "&xmax=" + encodeURIComponent(document.getElementById("xmax").value) + "&ymin=" + encodeURIComponent(document.getElementById("ymin").value) + "&ymax=" + encodeURIComponent(document.getElementById("ymax").value) + "&var=" + encodeURIComponent(document.getElementById("var").value));
    for (k = 0; k < m.length; k++)
        if (g = na(m[k])) {
            var v = g.shift(),
                R;
            pa(g[0]) && (R =
                g.shift());
            for (var fa = !0, G = [], S = 0; S < g.length; S++) {
                var w = g[S].split(":");
                if (2 == w.length) {
                    var x = parseFloat(w[0]),
                        w = parseFloat(w[1]);
                    x >= c && x <= d && G.push([x, w])
                } else fa = !1, x = ma(w[0], a, c, d, l, q), x.push([NaN, NaN]), G = G.concat(x)
            }
            g = {
                label: v,
                data: G,
                points: {
                    show: fa
                }
            };
            R && (g.color = R);
            b.push(g)
        } else v = m[k].split(":"), 2 == v.length ? (g = parseFloat(v[0]), v = parseFloat(v[1]), g >= c && g <= d && b.push({
            label: m[k],
            data: [
                [g, v]
            ],
            points: {
                show: !0
            }
        })) : b.push({
            label: v[0],
            data: ma(v[0], a, c, d, l, q)
        });
    a = {
        yaxis: {
            show: !0,
            min: f,
            max: h
        },
        xaxis: {
            show: !0
        }
    };
    $.plot($("#placeholder"), b, a)
}

function V() {
    for (var a = document.getElementById("var").value, b = !0; b;) {
        b = !1;
        try {
            oa(a)
        } catch (c) {
            if (c instanceof ReferenceError) {
                var d = c.message.substring(0, c.message.indexOf(" ")),
                    f = prompt(c.message + " and is not a horizontal axis variable. Please enter value of " + d + ":");
                f && (eval(d + " = " + f), b = !0)
            }
        }
    }
}
p("plotFunctions", V);
var W = !1,
    X = 0,
    Y = 0,
    T = $("#placeholder").width(),
    U = $("#placeholder").height(),
    qa = $("#placeholder").offset().left,
    ra = $("#placeholder").offset().top;
$("#placeholder").mousedown(function(a) {
    1 == a.which && (W = !0, $("#placeholder").css("cursor", "move"), X = a.pageX, Y = a.pageY);
    return !1
});
$("#placeholder").mouseout(function() {
    W = !1;
    $("#placeholder").css("cursor", "auto");
    return !1
}).mouseover(function() {
    $("#placeholder").css("cursor", "pointer");
    return !1
}).mouseup(function(a) {
    1 == a.which && (W = !1, $("#placeholder").css("cursor", "pointer"));
    return !1
}).mousemove(function(a) {
    if (W) {
        var b = a.pageX - X,
            c = a.pageY - Y;
        100 < b * b + c * c && (X = a.pageX, Y = a.pageY, sa(b / T, c / U))
    }
    return !1
}).mousewheel(function(a, b) {
    ta(-b, -b, (a.pageX - qa - 30) / T - .5, .5 - (a.pageY - ra) / U);
    return !1
});

function ta(a, b, c, d) {
    a = Math.pow(1.25, a);
    b = Math.pow(1.25, b);
    var f = eval(P(document.getElementById("xmin").value)),
        h = eval(P(document.getElementById("xmax").value)),
        m = eval(P(document.getElementById("ymin").value)),
        l = eval(P(document.getElementById("ymax").value)),
        q = h - f,
        g = l - m;
    "undefined" == typeof c && (c = 0);
    "undefined" == typeof d && (d = 0);
    c = (f + h) / 2 - c * q * (a - 1);
    d = (m + l) / 2 - d * g * (b - 1);
    document.getElementById("xmin").value = Z(c - a * q / 2);
    document.getElementById("xmax").value = Z(c + a * q / 2);
    document.getElementById("ymin").value =
        Z(d - b * g / 2);
    document.getElementById("ymax").value = Z(d + b * g / 2);
    V()
}
p("resizeGraph", ta);

function sa(a, b) {
    var c = eval(P(document.getElementById("xmin").value)),
        d = eval(P(document.getElementById("xmax").value)),
        f = eval(P(document.getElementById("ymin").value)),
        h = eval(P(document.getElementById("ymax").value)),
        m = (d - c) * a,
        l = (h - f) * b;
    document.getElementById("xmin").value = Z(c - m);
    document.getElementById("xmax").value = Z(d - m);
    document.getElementById("ymin").value = Z(f + l);
    document.getElementById("ymax").value = Z(h + l);
    V()
}
p("shiftGraph", sa);
p("centerGraph", function(a, b) {
    if (a) {
        var c = eval(P(document.getElementById("xmin").value)),
            c = (eval(P(document.getElementById("xmax").value)) - c) / 2;
        document.getElementById("xmin").value = Z(-c);
        document.getElementById("xmax").value = Z(c)
    }
    b && (c = eval(P(document.getElementById("ymin").value)), c = (eval(P(document.getElementById("ymax").value)) - c) / 2, document.getElementById("ymin").value = Z(-c), document.getElementById("ymax").value = Z(c));
    V()
});

function Z(a) {
    mult = Math.pow(10, 6);
    return Math.round(a * mult) / mult
}
ia.push(":");
K[":"] = function(a, b) {
    return !isNaN(parseFloat(a)) && isFinite(a) ? !isNaN(parseFloat(b)) && isFinite(b) ? !1 : b + " is not a number" : a + " is not a number"
};
HTML_COLORS = "aqua black blue fuchsia gray green lime maroon navy olive orange purple red silver teal white yellow".split(" ");

function pa(a) {
    a = a.trim();
    return HTML_COLORS.contains(a)
}
ga = function(a) {
    var b;
    a = a.replace(/def\([^,]+,[^,)]+,[^,)]+\)/g, "1");
    a = Q(a);
    for (var c = 0; c < a.length; c++)
        if (-1 != a[c].indexOf(",")) {
            var d = a[c].substring(1, a[c].length - 1).split(",");
            0 < d.length && d.shift();
            0 < d.length && pa(d[0]) && d.shift();
            for (var f = !1, h = !1, m = 0; m < d.length; m++)
                if (b = d[m].trim()) {
                    -1 == b.indexOf(":") ? h = !0 : f = !0;
                    if (h && f) return "Points functions cannot be mixed in a group.";
                    if (b = M(b)) return b
                }
        } else if (b = M(a[c])) return b;
    return !1
};
V();