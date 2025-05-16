(function(t) {
  function e(e) {
    for (
      var n, o, c = e[0], r = e[1], l = e[2], d = 0, u = []; d < c.length; d++
    )
      (o = c[d]),
      Object.prototype.hasOwnProperty.call(s, o) && s[o] && u.push(s[o][0]),
      (s[o] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    h && h(e);
    while (u.length) u.shift()();
    return a.push.apply(a, l || []), i();
  }

  function i() {
    for (var t, e = 0; e < a.length; e++) {
      for (var i = a[e], n = !0, o = 1; o < i.length; o++) {
        var c = i[o];
        0 !== s[c] && (n = !1);
      }
      n && (a.splice(e--, 1), (t = r((r.s = i[0]))));
    }
    return t;
  }
  var n = {},
    o = {
      app: 0
    },
    s = {
      app: 0
    },
    a = [];

  function c(t) {
    return (
      r.p +
      "js/" +
      ({
        QA: "QA",
        broswerCompatibility: "broswerCompatibility",
        "complete~confirmExam~detect~deviceDetection~question": "complete~confirmExam~detect~deviceDetection~question",
        "complete~deviceDetection~question": "complete~deviceDetection~question",
        "confirmExam~question": "confirmExam~question",
        question: "question",
        confirmExam: "confirmExam",
        complete: "complete",
        deviceDetection: "deviceDetection",
        detect: "detect",
        confirm: "confirm",
        confirmBasic: "confirmBasic",
        confirmCamera: "confirmCamera",
        confirmNotice: "confirmNotice",
        consider: "consider",
        faceRecognition: "faceRecognition",
        faceReturn: "faceReturn",
        faceReturnErr: "faceReturnErr",
        invite: "invite",
        login: "login",
        phoneMonitor: "phoneMonitor",
        publicLogin: "publicLogin",
        refuse: "refuse",
        success: "success",
        welcome: "welcome",
      } [t] || t) +
      "." + {
        QA: "3f507a7b",
        broswerCompatibility: "27a4b4f5",
        "chunk-1949d1aa": "7c9414fc",
        "chunk-5fcbaa37": "a77bd259",
        "chunk-2816c630": "d631f7f7",
        "complete~confirmExam~detect~deviceDetection~question": "12a7e75d",
        "complete~deviceDetection~question": "68379c32",
        "confirmExam~question": "172ca210",
        question: "fa9d55b7",
        confirmExam: "374c232f",
        complete: "43596698",
        deviceDetection: "db5be44f",
        detect: "cd09be85",
        confirm: "6159111e",
        confirmBasic: "a28cf7ad",
        confirmCamera: "f080155a",
        confirmNotice: "35daf0f9",
        consider: "2e622cdb",
        faceRecognition: "8fd77c69",
        faceReturn: "35f17192",
        faceReturnErr: "0e0b8981",
        invite: "9472e0cc",
        login: "26ffee00",
        phoneMonitor: "1df7397c",
        publicLogin: "abf3ab8d",
        refuse: "1d918278",
        success: "56ab84c4",
        welcome: "c78efdf2",
      } [t] +
      ".js"
    );
  }

  function r(e) {
    if (n[e]) return n[e].exports;
    var i = (n[e] = {
      i: e,
      l: !1,
      exports: {}
    });
    return t[e].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.e = function(t) {
    var e = [],
      i = {
        QA: 1,
        broswerCompatibility: 1,
        "chunk-5fcbaa37": 1,
        "chunk-2816c630": 1,
        "complete~deviceDetection~question": 1,
        "confirmExam~question": 1,
        question: 1,
        confirmExam: 1,
        complete: 1,
        deviceDetection: 1,
        detect: 1,
        confirmBasic: 1,
        confirmCamera: 1,
        confirmNotice: 1,
        consider: 1,
        faceRecognition: 1,
        faceReturn: 1,
        faceReturnErr: 1,
        invite: 1,
        login: 1,
        phoneMonitor: 1,
        publicLogin: 1,
        refuse: 1,
        success: 1,
        welcome: 1,
      };
    o[t] ?
      e.push(o[t]) :
      0 !== o[t] &&
      i[t] &&
      e.push(
        (o[t] = new Promise(function(e, i) {
          for (
            var n =
              "css/" +
              ({
                QA: "QA",
                broswerCompatibility: "broswerCompatibility",
                "complete~confirmExam~detect~deviceDetection~question": "complete~confirmExam~detect~deviceDetection~question",
                "complete~deviceDetection~question": "complete~deviceDetection~question",
                "confirmExam~question": "confirmExam~question",
                question: "question",
                confirmExam: "confirmExam",
                complete: "complete",
                deviceDetection: "deviceDetection",
                detect: "detect",
                confirm: "confirm",
                confirmBasic: "confirmBasic",
                confirmCamera: "confirmCamera",
                confirmNotice: "confirmNotice",
                consider: "consider",
                faceRecognition: "faceRecognition",
                faceReturn: "faceReturn",
                faceReturnErr: "faceReturnErr",
                invite: "invite",
                login: "login",
                phoneMonitor: "phoneMonitor",
                publicLogin: "publicLogin",
                refuse: "refuse",
                success: "success",
                welcome: "welcome",
              } [t] || t) +
              "." + {
                QA: "863f24cf",
                broswerCompatibility: "faaa204a",
                "chunk-1949d1aa": "31d6cfe0",
                "chunk-5fcbaa37": "6f1ce632",
                "chunk-2816c630": "655b74a8",
                "complete~confirmExam~detect~deviceDetection~question": "31d6cfe0",
                "complete~deviceDetection~question": "437bb65e",
                "confirmExam~question": "2c5dc50a",
                question: "2df863ad",
                confirmExam: "6a5cf326",
                complete: "9a999644",
                deviceDetection: "7a19eae9",
                detect: "938f9f84",
                confirm: "31d6cfe0",
                confirmBasic: "178df0ec",
                confirmCamera: "e8bede9c",
                confirmNotice: "6ad0b258",
                consider: "af642a84",
                faceRecognition: "854b4bf9",
                faceReturn: "b2226dfa",
                faceReturnErr: "f2d44e70",
                invite: "64217fc0",
                login: "4a64d6f8",
                phoneMonitor: "7a426206",
                publicLogin: "94b1daa2",
                refuse: "573aced3",
                success: "2432e285",
                welcome: "aa283bae",
              } [t] +
              ".css",
              s = r.p + n,
              a = document.getElementsByTagName("link"),
              c = 0; c < a.length; c++
          ) {
            var l = a[c],
              d = l.getAttribute("data-href") || l.getAttribute("href");
            if ("stylesheet" === l.rel && (d === n || d === s)) return e();
          }
          var u = document.getElementsByTagName("style");
          for (c = 0; c < u.length; c++) {
            (l = u[c]), (d = l.getAttribute("data-href"));
            if (d === n || d === s) return e();
          }
          var h = document.createElement("link");
          (h.rel = "stylesheet"),
          (h.type = "text/css"),
          (h.onload = e),
          (h.onerror = function(e) {
            var n = (e && e.target && e.target.src) || s,
              a = new Error(
                "Loading CSS chunk " + t + " failed.\n(" + n + ")",
              );
            (a.code = "CSS_CHUNK_LOAD_FAILED"),
            (a.request = n),
            delete o[t],
              h.parentNode.removeChild(h),
              i(a);
          }),
          (h.href = s);
          var f = document.getElementsByTagName("head")[0];
          f.appendChild(h);
        }).then(function() {
          o[t] = 0;
        })),
      );
    var n = s[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var a = new Promise(function(e, i) {
          n = s[t] = [e, i];
        });
        e.push((n[2] = a));
        var l,
          d = document.createElement("script");
        (d.charset = "utf-8"),
        (d.timeout = 120),
        r.nc && d.setAttribute("nonce", r.nc),
          (d.src = c(t));
        var u = new Error();
        l = function(e) {
          (d.onerror = d.onload = null), clearTimeout(h);
          var i = s[t];
          if (0 !== i) {
            if (i) {
              var n = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src;
              (u.message =
                "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")"),
              (u.name = "ChunkLoadError"),
              (u.type = n),
              (u.request = o),
              i[1](u);
            }
            s[t] = void 0;
          }
        };
        var h = setTimeout(function() {
          l({
            type: "timeout",
            target: d
          });
        }, 12e4);
        (d.onerror = d.onload = l), document.head.appendChild(d);
      }
    return Promise.all(e);
  }),
  (r.m = t),
  (r.c = n),
  (r.d = function(t, e, i) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    });
  }),
  (r.r = function(t) {
    "undefined" !== typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }),
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
  }),
  (r.t = function(t, e) {
    if ((1 & e && (t = r(t)), 8 & e)) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (
      (r.r(i),
        Object.defineProperty(i, "default", {
          enumerable: !0,
          value: t
        }),
        2 & e && "string" != typeof t)
    )
      for (var n in t)
        r.d(
          i,
          n,
          function(e) {
            return t[e];
          }.bind(null, n),
        );
    return i;
  }),
  (r.n = function(t) {
    var e =
      t && t.__esModule ?
      function() {
        return t["default"];
      } :
      function() {
        return t;
      };
    return r.d(e, "a", e), e;
  }),
  (r.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }),
  (r.p = "app://./"),
  (r.oe = function(t) {
    throw (console.error(t), t);
  });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var u = 0; u < l.length; u++) e(l[u]);
  var h = d;
  a.push([0, "chunk-vendors"]), i();
})({
  0: function(t, e, i) {
    t.exports = i("56d7");
  },
  "02e7": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-撇号",
        use: "icon-撇号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-撇号">\n<path d="M68.3901 71.0284C68.0663 71.0284 67.3376 70.8659 66.2041 70.5408C65.0706 70.2158 64.4768 69.8907 64.4229 69.5657C64.4229 69.1864 65.9072 62.902 68.8759 50.7125C71.8447 38.5229 73.491 32.1572 73.8148 31.6154C74.6245 29.8818 76.0279 29.015 78.025 29.015C79.1045 29.015 80.2381 29.4213 81.4256 30.234C82.613 31.0466 83.2068 32.2385 83.2068 33.8096C83.2068 34.0804 83.1528 34.4868 83.0449 35.0285C82.9909 35.4078 80.6429 41.4484 76.0009 53.1504C71.3589 64.8524 68.9569 70.7575 68.795 70.8659C68.633 70.9743 68.4981 71.0284 68.3901 71.0284Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "032a": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-环运算符",
        use: "icon-环运算符-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-环运算符">\n<path d="M60 75.44C60 71.3333 61.52 67.7333 64.56 64.64C67.6 61.5467 71.2533 60 75.52 60C79.7867 60 83.44 61.4933 86.48 64.48C89.52 67.4667 91.0667 71.1733 91.12 75.6C91.12 79.76 89.6267 83.3867 86.64 86.48C83.6533 89.5733 79.9733 91.12 75.6 91.12C71.3333 91.12 67.68 89.6 64.64 86.56C61.6 83.52 60.0533 79.8133 60 75.44ZM75.2 63.28C72.16 63.28 69.4133 64.4 66.96 66.64C64.5067 68.88 63.28 71.84 63.28 75.52C63.28 79.0933 64.48 82.0267 66.88 84.32C69.28 86.6133 72.1867 87.7867 75.6 87.84C77.4133 87.84 79.0933 87.4933 80.64 86.8C82.1867 86.1067 83.28 85.4133 83.92 84.72C84.56 84.0267 85.12 83.36 85.6 82.72C87.0933 80.7467 87.84 78.3467 87.84 75.52C87.84 72.16 86.6933 69.28 84.4 66.88C82.1067 64.48 79.04 63.28 75.2 63.28Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "073f": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-中间点",
        use: "icon-中间点-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-中间点">\n<path d="M66 75.1248C66 72.4249 66.9562 70.0624 68.8687 68.0374C70.7812 66.0125 73.1999 65 76.1248 65C78.8247 65 81.1872 65.9 83.2122 67.6999C85.2371 69.4999 86.3059 71.9186 86.4184 74.9561C86.4184 77.7685 85.4621 80.1872 83.5497 82.2122C81.6372 84.2371 79.2185 85.2496 76.2935 85.2496C73.3686 85.2496 70.9499 84.2934 69.0374 82.3809C67.125 80.4684 66.1125 78.0497 66 75.1248Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "0c01": function(t, e, i) {
    "use strict";
    i("f795");
  },
  "0c5b": function(t, e, i) {},
  1: function(t, e) {},
  "14b3": function(t, e, i) {
    t.exports = {
      theme: "#f35a5a"
    };
  },
  "192b": function(t, e, i) {
    "use strict";
    e["a"] = [{
        title: "客户端问题",
        question: [{
            Q: "考试客户端软件在哪里下载，可以在手机上用吗？",
            A: "国考云电脑客户端只支持在电脑上下载安装，不支持在手机或平板电脑上下载使用。下载网址：https://www.iguokao.com/client，请选择对应操作系统的软件。",
          },
          {
            Q: "Windows电脑安装客户端软件有什么注意事项？",
            A: "推荐使用Win10操作系统的电脑下载安装使用国考云客户端，下载安装前建议关闭退出当前系统的杀毒软件、安全卫士等电脑管理软件，按照系统提示安装运行客户端即可。",
          },
          {
            Q: "Mac电脑安装完软件后，需要授权使用什么功能？",
            A: "推荐使用mac OS 10.14以上版本的Mac电脑下载安装使用国考云客户端，安装完软件后，需要授权三个功能，请依次点击：系统偏好设置 - 安全性与隐私 - 隐私 - 在左边的摄像头、麦克风、屏幕录制三个选项中，勾选允许国考云app使用此功能，完成功能授权，正常运行软件即可。",
          },
          {
            Q: "客户端运行后，进行安全检测，系统提示未通过，怎么办？",
            A: "系统会告知安全检测未通过的原因，比如外接了第二个显示器或投影设备，使用了qq或微信软件等，请按系统提示，关闭相关软件，断开相关设备，重新检测设备，通过后，即可进入考试系统登录作答页面。",
          },
          {
            Q: "客户端作答，如何切换中英文输入法？",
            A: "中英文切换快捷键请依次尝试，Windows电脑：1. 按shift；2. 按ctrl+空格；3. 按win+空格；Mac电脑：1. 按中英文快捷键；2. control+空格键；3. command+空格。若仍不能切换，则先保存试题答案，点击右上角退出软件，调整到正确输入法后重新登录软件。",
          },
          {
            Q: "客户端运行时，界面比例显示不全，看不到下方按钮，怎么办？",
            A: "请关闭客户端，打开电脑设置—-系统—-缩放与布局，将显示比例调整成100%即可。",
          },
          {
            Q: "客户端运行时，出现了白屏或黑屏，怎么办？",
            A: "由于终端电脑系统环境兼容性的影响，如果客户端运行时出现了白屏或黑屏的情况，请退出软件，重新打开进入软件即可。如果还有故障，可重启电脑尝试。",
          },
        ],
      },
      {
        title: "摄像头问题",
        question: [{
            Q: "考试要求使用摄像头，但我电脑没有摄像头, 摄像头故障怎么办？",
            A: "1. 电脑摄像头正常开启对考试非常重要，为了保证考试的公平性，以及验证考生身份的真实性，系统会全程视频监控考生作答的情况，因此请务必保证摄像头可以正常使用；2. 建议提前打开电脑客户端，检测电脑摄像头是否正常，如有故障，请重启电脑，或更换摄像头、电脑来解决。",
          },
          {
            Q: "摄像头无故障，但就是无法看到图像",
            A: "通常有三种原因：1. 其他浏览器或应用程序占用了摄像头，请重启电脑解决；2. 有些品牌电脑的摄像头会有个物理的开关按钮，例如联想的电脑，请务必把开关键打开；3. 软件冲突，请关闭360魔法摄像头之类的工具软件，重启电脑即可解决。",
          },
          {
            Q: "摄像头显示后置画面，如何切换到前置画面？",
            A: "当您的电脑摄像头显示为后置画面时，如果是Win电脑，按照如下操作，首先打开电脑的设置——设备——蓝牙和其他设备——设备和打印机，弹出窗口，找到前置摄像头，右键选择属性，将该摄像头设置为默认摄像头，如果到设备和打印机这步没自动弹出弹窗，请在空白处右键，选择设备管理器，进入后找到摄像头。如果更换后仍无法开启，请更换新的电脑设备。",
          },
          {
            Q: "摄像头对准哪里算是合规？",
            A: "请调整摄像头角度，将头像放置在画面中间位置，能清晰看清脸部，确保在整个答题过程中脸部正对摄像头。",
          },
        ],
      },
      {
        title: "人脸身份验证问题",
        question: [{
            Q: "如何进行人脸身份验证？",
            A: "如果系统要求考生进行身份验证，请您按照系统指示，在信息采集页填好身份信息后，用手机微信扫码进行身份验证。请按手机页面提示操作，将头部放置在头像采集框中，在光亮的环境下完成身份验证。",
          },
          {
            Q: "人脸身份验证三次都失败，我该怎么办？",
            A: "每位考生有三次人脸身份验证的机会，若您三次机会都失败了，请您选择拍照，面对电脑屏幕手动点击拍照采集人像即可，考试结束后我们会进行人工比对。",
          },
        ],
      },
      {
        title: "系统使用问题",
        question: [{
            Q: "无法共享屏幕？",
            A: "如果您使用的是Mac电脑，请依次点击：系统偏好设置 - 安全性与隐私 - 隐私 - 在左边的屏幕录制选项中，勾选允许国考云app使用此功能，完成功能授权，即可正常录制屏幕。如果您使用的是Windows系统电脑，将鼠标光标移动至屏幕顶端监控图标异常处，根据提示操作即可！",
          },
          {
            Q: "问答题有个扫码传图的功能，我用手机扫描二维码后，无法上传图片",
            A: "手机扫码后如果拍照上传不了图片，则建议先用手机本机的相机拍照好，然后扫码从相册添加图片即可。如果还不行，建议换个手机试试。",
          },
          {
            Q: "选择题全部作答后，还能修改吗？",
            A: "选择题在提交该部分小试卷前，系统会有弹窗提示，告知是否可以修改已作答内容，请参见系统提示操作。",
          },
          {
            Q: "考试结束时，没有及时点击“我要交卷”按钮，作答的试题内容都保存上了吗？",
            A: "所有试题只要点击了“下一题”按钮，都会自动保存当前题目作答信息的；考试到结束时，系统会自动把所有试题最新的作答情况全部保存到系统中，并自动交卷，请放心。",
          },
          {
            Q: "作答录制视频题时，回放录制的视频为什么没声音？",
            A: "首先要确认电脑是否授予了麦克风权限，打开客户端时，软件会检测麦克风是否正常开启。开启后重新录制一段小视频，打开电脑扬声器，确认是否可以听到声音。",
          },
          {
            Q: "考试中途网络中断，或电脑故障，如何处理？",
            A: "答题过程中因网络故障、电脑故障等造成中断，请重新登录系统，并在几分钟之内再次按照相同的步骤进入考试，从中断处继续答题即可，不需要重复作答之前已经答过的试题。如果电脑还有故障，建议用手机4G热点上网，或更换另外一台电脑继续作答。",
          },
        ],
      },
      {
        title: "网速卡顿问题",
        question: [{
            Q: "打开考试系统页面很慢，比较卡顿，无法点击“下一题”",
            A: "可以尝试更换上网方式：建议使用4G手机分享Wifi热点，通过电脑的无线设备连接手机的Wifi热点上网，正常的网速都比较快。或者更换到Wifi信号强的地方再次尝试。",
          },
          {
            Q: "人在国外，网络环境不理想，操作系统卡顿，怎么办？",
            A: "可以尝试下面三种方式解决：1. 更换上网方式：建议用4G手机分享Wifi热点，通过电脑连接手机Wifi上网；或者更换到Wifi信号强的地方再次尝试；2. 关闭国外通道的VPN，可以尝试使用国内通道的VPN；如果在实习公司考试，建议不要使用公司网络；3. 重启电脑，或者更换一台电脑，再尝试一下。",
          },
        ],
      },
      {
        title: "试题相关问题",
        question: [{
            Q: "考试还没开始，为什么我现在可以作答试题？",
            A: "考试正式开始之前，登录到考试系统，开放的试题为考前练习题，不是正式的考题，题型和知识点均与正式考题无关，目的在于让考生们体验答题环境，熟悉系统操作；正式开考时，页面会自动切换到正式考题。",
          },
          {
            Q: "我申请的职位和练习题考点不同，实际考试也这样吗？",
            A: "练习试题主要目的是让考生适应答题环境，熟悉系统操作；正式考试会依据您考试的职位，在题型、考点、难度都会有差异。",
          },
          {
            Q: "没有做考前练习题，对我的考试成绩有影响吗？",
            A: "未作答练习题不会对考试结果产生任何影响，但我们仍建议各位考生进行考前练习。",
          },
          {
            Q: "填空题的填写规范格式有哪些？",
            A: "请仔细阅读试题的要求，填写的内容要规范，很多填空题是系统自动比对答案评分的，因此您填写的内容务必跟答案完全一致，才能得分。",
          },
          {
            Q: "题目中图片加载不出来、只显示文字信息，没有选项怎么办？",
            A: "原因是您当前的网络网速较慢或不稳定，请使用手机热点上网，或更换其他更快的Wifi网络。",
          },
          {
            Q: "某题的题干、选项是不是有问题？",
            A: "如果发现有问题的试题，请在网页对话框中告知我们：试题序号+试题疑问点。如题干、选项确实有误，我们会及时更新试题，并统一发送系统公告告知大家。",
          },
          {
            Q: "作答问答题时，系统提供的画板功能有限，使用不便，怎么办？",
            A: "如果不习惯使用系统提供的画图板功能，建议在白纸上画出相应的图，然后使用手机拍照扫描上传图片的功能，把该图上传到系统即可。",
          },
        ],
      },
      {
        title: "其他问题",
        question: [{
            Q: "关于调整考试时间",
            A: "此次考试为全国所有考生统一考试，在同一个考试时间，不能调整，如有特殊情况，可以直接与考试主办方联系。",
          },
          {
            Q: "什么时候进行后续面试",
            A: "如果后续有面试安排，考试结束后，考试主办方会根据所有考生笔试成绩，尽快安排后期的面试，具体面试时间，随后会另行通知，请随时留意官方渠道发布的消息。",
          },
          {
            Q: "考试过程中是否可以使用手机？",
            A: "考试全程严禁使用手机交流或查询信息，请遵守考场纪律。",
          },
          {
            Q: "收到了通知短信，但没有收到通知邮件，可以参加考试吗？",
            A: "邮件和短信的拦截功能会导致某种方式收不到信息，邮件和短信里考试信息打开的网页内容信息是完全一样的，打开任何一个方式查看考试信息即可；另，请务必点击“确认参加”或“放弃参加”按钮。",
          },
        ],
      },
    ];
  },
  "19d3": function(t, e, i) {
    "use strict";
    i("77ee");
  },
  "1ad0": function(t, e, i) {
    "use strict";
    i("1ef7");
  },
  "1ad06": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-除号",
        use: "icon-除号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-除号">\n<g clip-path="url(#icon-除号_clip0_561:232)">\n<path d="M67.7008 58.299C67.7008 55.9687 68.4204 54.1867 69.8598 52.953C71.2991 51.7193 72.9097 51.0681 74.6917 50.9996C76.885 50.9996 78.667 51.685 80.0378 53.0558C81.4086 54.4265 82.0939 56.1743 82.0939 58.299C82.0939 60.2181 81.4771 61.8973 80.2434 63.3366C79.0097 64.7759 77.2277 65.4956 74.8974 65.4956C72.6356 65.4956 70.8878 64.7759 69.6541 63.3366C68.4204 61.8973 67.7693 60.2181 67.7008 58.299ZM40.765 81.8421C40.765 81.8421 40.765 81.3966 40.765 80.5056C40.765 79.6145 41.2448 78.9292 42.2044 78.4494H107.59C108.618 78.9977 109.132 79.6831 109.132 80.5056C109.132 81.328 108.618 82.0134 107.59 82.5617H42.2044C41.2448 82.0819 40.765 81.3966 40.765 80.5056V81.8421ZM67.7008 102.712C67.7008 100.382 68.4204 98.5998 69.8598 97.3661C71.2991 96.1324 72.9097 95.4813 74.6917 95.4127C76.885 95.4127 78.667 96.0981 80.0378 97.4689C81.4086 98.8397 82.0939 100.587 82.0939 102.712C82.0939 104.631 81.4771 106.31 80.2434 107.75C79.0097 109.189 77.2277 109.909 74.8974 109.909C72.6356 109.909 70.8878 109.189 69.6541 107.75C68.4204 106.31 67.7693 104.631 67.7008 102.712Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-除号_clip0_561:232">\n<rect width="80" height="58.9091" fill="white" transform="translate(35 51)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "1ccc": function(t, e, i) {
    "use strict";
    var n = function() {
        var t = this,
          e = t._self._c;
        return e("div", {
          staticClass: "footer"
        }, [
          t._v(" 主办方：" + t._s(t.shortName) + " "),
          e("span", {
            staticClass: "line"
          }, [t._v("|")]),
          t._v(" 本网站由"),
          e(
            "a", {
              staticStyle: {
                color: "#717171"
              },
              attrs: {
                href: "https://www.iguokao.com",
                target: "view_window"
              },
            },
            [t._v("国考云")],
          ),
          t._v("考试系统提供技术支持 "),
        ]);
      },
      o = [],
      s = i("a649"),
      a = i("d8ad"),
      c = {
        name: "SimpleFooter",
        props: {
          companyInfo: {
            type: Object
          }
        },
        data() {
          return {
            is_electron: !0,
            shortName: "国考云"
          };
        },
        created() {
          const t = this.$route.query.shortId;
          var e, i;
          t ||
            (this.shortName =
              (null === (e = this.companyInfo) || void 0 === e ?
                void 0 :
                e.companyShortName) ||
              (null === (i = this.$store.state.examInfo.coverInfo) ||
                void 0 === i ?
                void 0 :
                i.shortName) ||
              "国考云");
        },
        watch: {
          companyInfo() {
            const t = this.$route.query.shortId;
            var e;
            t ||
              (this.shortName =
                this.companyInfo.companyShortName ||
                (null === (e = this.$store.state.examInfo.coverInfo) ||
                  void 0 === e ?
                  void 0 :
                  e.shortName));
          },
        },
        mounted() {
          this.is_electron || this.getShortName();
        },
        methods: {
          async getShortName() {
            const t = this.$route.query.shortId;
            t &&
              "undefined" !== t &&
              (a["a"].$on(
                  "shortName",
                  function(t) {
                    Object(s["a"])(this, this),
                      (this.shortName = t.data.companyShortName);
                  }.bind(this),
                ),
                this.$once(
                  "hook:beforeDestroy",
                  function() {
                    Object(s["a"])(this, this), a["a"].$off("shortName");
                  }.bind(this),
                ));
          },
        },
      },
      r = c,
      l = (i("c2e2"), i("2877")),
      d = Object(l["a"])(r, n, o, !1, null, "5509ca38", null);
    e["a"] = d.exports;
  },
  "1ef7": function(t, e, i) {},
  "206e": function(t, e, i) {},
  "2f0d": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-子集",
        use: "icon-子集-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-子集">\n<g clip-path="url(#icon-子集_clip0_581:28)">\n<path d="M50.0194 75.2276C50.0194 68.4328 52.3029 62.8633 56.8699 58.5191C61.4369 54.1749 66.8393 51.6965 73.0771 51.0838C73.1328 51.0838 73.4113 51.0838 73.9125 51.0838C74.4138 51.0838 75.11 51.0838 76.0011 51.0838C76.8922 51.0838 77.8668 51.056 78.9251 51.0003C79.9833 50.9446 81.2364 50.9446 82.6845 51.0003C84.1325 51.056 85.497 51.056 86.778 51.0003H99.7271C100.563 51.4458 100.98 52.0028 100.98 52.6711C100.98 53.1724 100.618 53.7015 99.8942 54.2584L86.6109 54.342H82.2667H79.844C75.6669 54.342 72.7986 54.4534 71.2392 54.6761C69.6797 54.8989 67.6747 55.5673 65.2241 56.6812C63.9988 57.2938 62.8292 58.0178 61.7153 58.8533C60.6014 59.6887 59.3483 60.8583 57.9559 62.362C56.5636 63.8658 55.4497 65.7316 54.6142 67.9594C53.7788 70.1872 53.3611 72.6099 53.3611 75.2276V75.6453C53.3611 80.5464 55.0598 84.8906 58.4572 88.6779C61.7432 92.2423 65.7254 94.5258 70.4037 95.5283C71.5176 95.8068 72.5758 95.9461 73.5783 95.9461C74.5809 95.9461 78.9251 96.0018 86.6109 96.1131H99.8942C100.618 96.6701 100.98 97.227 100.98 97.784C100.98 98.4523 100.563 99.0093 99.7271 99.4548H86.9451C86.054 99.4548 84.773 99.4548 83.1022 99.4548C81.4313 99.4548 80.1503 99.4827 79.2592 99.5384C74.5809 99.5384 70.543 99.0928 67.1456 98.2017C63.7482 97.3106 60.49 95.3613 57.3711 92.3537C52.47 87.7868 50.0194 82.078 50.0194 75.2276Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-子集_clip0_581:28">\n<rect width="65" height="48.4545" fill="white" transform="translate(43 51)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "34bb": function(t, e) {
    t.exports = require("electron");
  },
  3605: function(t, e, i) {},
  3646: function(t, e) {
    t.exports = require("buffer");
  },
  "3c93": function(t, e) {
    t.exports = require("crypto");
  },
  "3f65": function(t, e, i) {},
  "41db": function(t, e) {
    t.exports = require("child_process");
  },
  "42cd": function(t, e) {
    t.exports = require("net");
  },
  "42cdc": function(t, e) {
    t.exports = require("assert");
  },
  4360: function(t, e, i) {
    "use strict";
    var n = i("2b0e"),
      o = i("2f62"),
      s = i("5f87"),
      a = i("5d2d");
    n["default"].use(o["a"]);
    const c = new o["a"].Store({
      state: {
        token: null,
        userInfo: JSON.parse(Object(a["b"])("userInfo") || "{}"),
        examInfo: JSON.parse(Object(a["b"])("examInfo") || "{}"),
        jobInfo: JSON.parse(Object(a["b"])("jobInfo") || "{}"),
        showPc: !1,
        showCamera: !1,
        showMobile: !1,
        pcDetect: !1,
        cameraDetect: !1,
        mobileDetect: !1,
        partTime: null,
        showYellowCard: JSON.parse(Object(a["b"])("showYellowCard") || !1),
        showRedCard: JSON.parse(Object(a["b"])("showRedCard") || !1),
        isPractice: null,
        companyUuid: null,
      },
      getters: {
        token(t) {
          if (!t.token) {
            const t = Object(s["a"])();
            if (!t) return null;
            c.commit("setToken", t);
          }
          return "Bearer " + t.token;
        },
      },
      mutations: {
        setToken(t, e) {
          Object(s["c"])(e), (t.token = e);
        },
        resetToken(t) {
          Object(s["b"])(), (t.token = null);
        },
        setUserInfo(t, e) {
          Object(a["c"])("userInfo", JSON.stringify(e)), (t.userInfo = e);
        },
        setExamInfo(t, e) {
          Object(a["c"])("examInfo", JSON.stringify(e)), (t.examInfo = e);
        },
        setJobInfo(t, e) {
          Object(a["c"])("jobInfo", JSON.stringify(e)), (t.jobInfo = e);
        },
        setShowPc(t, e) {
          t.showPc = e;
        },
        setShowCamera(t, e) {
          t.showCamera = e;
        },
        setShowMobile(t, e) {
          t.showMobile = e;
        },
        setCameraDetect(t, e) {
          t.cameraDetect = e;
        },
        setPcDetect(t, e) {
          t.pcDetect = e;
        },
        setMobileDetect(t, e) {
          t.mobileDetect = e;
        },
        setPartTime(t, e) {
          t.partTime = e;
        },
        setShowYellowCard(t, e) {
          Object(a["c"])("showYellowCard", JSON.stringify(!0)),
            (t.showYellowCard = e);
        },
        setShowRedCard(t, e) {
          Object(a["c"])("showRedCard", JSON.stringify(!0)),
            (t.showRedCard = e);
        },
        setPractice(t, e) {
          t.isPractice = e;
        },
        setCompanyUuid(t, e) {
          t.companyUuid = e;
        },
      },
      actions: {
        updateUserInfo(t, e) {
          t.commit("setUserInfo", e);
        },
        updateExamInfo(t, e) {
          t.commit("setExamInfo", e);
        },
        updateJobInfo(t, e) {
          t.commit("setJobInfo", e);
        },
        updateHasRequest(t, e) {
          t.commit("setHasRequest", e);
        },
      },
      modules: {},
    });
    e["a"] = c;
  },
  "4c79": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-小于等于",
        use: "icon-小于等于-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-小于等于">\n<path d="M94.5128 50C94.8694 50 95.1814 50.1337 95.4489 50.4011C95.7163 50.6686 95.85 51.0029 95.85 51.404C95.85 51.8052 95.694 52.1172 95.382 52.34C95.3374 52.3846 89.3202 55.2595 77.3304 60.9646L59.5463 69.3887L76.127 77.2779C88.9637 83.3397 95.4711 86.482 95.6494 86.7048C95.7831 86.9723 95.85 87.2174 95.85 87.4403C95.85 88.2426 95.4489 88.6883 94.6466 88.7774H94.2454L74.9904 79.6848C62.0646 73.5785 55.5571 70.4807 55.468 70.3916C55.156 70.1687 55 69.7899 55 69.255C55.0446 68.7647 55.3343 68.3858 55.8691 68.1184C56.2257 67.9401 62.5995 64.9315 74.9904 59.0926C87.3814 53.2537 93.6883 50.2674 93.9111 50.1337C94.0894 50.0446 94.29 50 94.5128 50ZM55.0669 100.411C55.0669 99.9649 55.4011 99.5192 56.0697 99.0735H94.7803C95.4934 99.3409 95.85 99.7866 95.85 100.411C95.85 100.946 95.5157 101.391 94.8471 101.748H56.0029C55.3789 101.436 55.0669 100.99 55.0669 100.411Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "4e57": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-倒三角算子",
        use: "icon-倒三角算子-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-倒三角算子">\n<path d="M49.0436 52.3791C49.0436 52.1507 49.0893 51.9452 49.1808 51.7625C49.2723 51.5798 49.3867 51.4428 49.5239 51.3515C49.6611 51.2601 49.7984 51.1916 49.9356 51.146L50.1414 51.009H100.849C101.489 51.3286 101.81 51.7854 101.81 52.3791V52.7901L89.1842 76.2191C80.6758 91.8385 76.3529 99.6938 76.2157 99.7851C76.0327 99.9222 75.7811 99.9907 75.4609 99.9907C75.1407 99.9907 74.8891 99.9222 74.7061 99.7851C74.5231 99.6938 72.4418 95.9716 68.462 88.6187C64.4823 81.2657 60.411 73.7072 56.2483 65.9432C52.0856 58.1792 49.7984 53.9775 49.3867 53.3382C49.1579 52.7901 49.0436 52.4704 49.0436 52.3791ZM98.1729 53.7492H52.7489C52.7489 53.7949 56.5228 60.8053 64.0706 74.7805C71.6184 88.7557 75.4152 95.7433 75.4609 95.7433C75.5066 95.7433 79.3034 88.7557 86.8512 74.7805C94.399 60.8053 98.1729 53.7949 98.1729 53.7492Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "4ec3": function(t, e, i) {
    "use strict";
    var n = i("9052"),
      o = i("b775"),
      s = i("da71");

    function a(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/answer",
        method: "post",
        data: t,
      });
    }

    function c(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/answer/remove/${t}`,
        method: "get",
      });
    }

    function r(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/answer/${t}`,
        method: "get",
      });
    }

    function l(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/company",
        method: "post",
        data: t,
      });
    }

    function d() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/finish",
        method: "get",
      });
    }

    function u() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/finish/force",
        method: "get",
      });
    }

    function h() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/info",
        method: "get"
      });
    }

    function f(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/info/simple",
        method: "post",
        data: t,
      });
    }

    function m() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/job/info",
        method: "get",
      });
    }

    function C(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/part/${t}`,
        method: "get",
      });
    }

    function p(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/part/answered/list/${t}`,
        method: "get",
      });
    }

    function g(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/part/finish/${t}`,
        method: "get",
      });
    }

    function b() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/part/list ",
        method: "get",
      });
    }

    function w() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/practice/part/list ",
        method: "get",
      });
    }

    function v(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/part/start/${t}`,
        method: "get",
      });
    }

    function x(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/part/time/${t}`,
        method: "get",
      });
    }

    function y() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/practice/start",
        method: "get",
      });
    }

    function M(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/question/${t}`,
        method: "get",
      });
    }

    function _(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/remove/file",
        method: "post",
        data: t,
      });
    }

    function O() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/start",
        method: "get",
      });
    }

    function k() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/time",
        method: "get"
      });
    }

    function j(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/time/${t}`,
        method: "get",
      });
    }

    function A() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/group/list",
        method: "get",
      });
    }

    function S(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/group/select/${t}`,
        method: "get",
      });
    }

    function $(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/play/times/${t}`,
        method: "get",
      });
    }

    function E(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/play/${t}`,
        method: "get",
      });
    }

    function L() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/objective/score",
        method: "get",
      });
    }

    function D(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/offline/room/confirm/${t}`,
        method: "get",
      });
    }

    function P(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/exam/part/not/finish/${t}`,
        method: "get",
      });
    }

    function I(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/exam/select/exam/list",
        method: "post",
        data: t,
      });
    }
    var T = {
      paperList: b,
      paperPraticeList: w,
      paperQuestionList: M,
      examStart: O,
      answerSave: a,
      examInfo: h,
      jobInfo: m,
      partCommitLog: p,
      partFinish: g,
      getTime: k,
      getTimeByExamId: j,
      getPartInfo: C,
      examFinish: d,
      examFinishForce: u,
      getNameAndLogo: f,
      getCompanyName: l,
      getPartTime: x,
      partEnter: v,
      partPracticeStart: y,
      deleteOssFile: _,
      getABPaper: A,
      selectABPaper: S,
      getPlayCount: $,
      subPlayCount: E,
      deleteAnswer: c,
      getAnswer: r,
      getScore: L,
      offlineLoginCode: D,
      getNotAnsweredList: P,
      getResumePaperList: I,
    };

    function q(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/face-id/tencent/difference",
        method: "post",
        data: t,
      });
    }

    function B() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/face-id/difference/time",
        method: "get",
      });
    }

    function Q() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/face-id/result",
        method: "post",
      });
    }

    function H() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/face-id/token/kyc",
        method: "get",
      });
    }
    var R = {
      getFaceIdToken: H,
      difference: q,
      getFaceIdResult: Q,
      differenceTime: B,
    };

    function V() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/message/broadcast",
        method: "post",
      });
    }

    function N(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/message/send",
        method: "post",
        data: t,
      });
    }

    function X() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/message/read",
        method: "post",
      });
    }

    function F(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/message/list",
        method: "post",
        data: t,
      });
    }
    var Z = {
      sendMessage: N,
      messageRead: X,
      getMessageList: F,
      getBroadcast: V,
    };

    function W(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/action/leave",
        method: "post",
        data: t,
      });
    }

    function U() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/leave/count",
        method: "get",
      });
    }

    function J() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/action/screen",
        method: "get",
      });
    }

    function G() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/mobile/holding",
        method: "get",
      });
    }

    function z() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/mobile/token/gen",
        method: "get",
      });
    }

    function Y() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/oss/monitor/token",
        method: "get",
      });
    }

    function K() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/trtc/mobile/check",
        method: "get",
      });
    }

    function tt() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/oss/exam/token",
        method: "get",
      });
    }

    function et(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/monitor/slice/question/${t}`,
        method: "get",
      });
    }

    function it(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/monitor/slice/last/${t}`,
        method: "get",
      });
    }

    function nt(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/slice/remove",
        method: "post",
        data: t,
      });
    }

    function ot(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/slice/upload",
        method: "post",
        data: t,
      });
    }

    function st(t, e) {
      const i = new FormData();
      return (
        i.append("name", t.filename),
        i.append("key", "" + t.filename),
        i.append("OSSAccessKeyId", t.ossInfo.accessid),
        i.append("policy", t.ossInfo.policy),
        i.append("signature", t.ossInfo.signature),
        i.append("file", t.blob),
        Object(o["a"])({
          url: t.ossInfo.host,
          method: "post",
          data: i,
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: e,
        })
      );
    }

    function at(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/monitor/mobile/token/get/${t}`,
        method: "get",
      });
    }

    function ct() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/agora/c/token",
        method: "get",
      });
    }

    function rt() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/agora/s/token",
        method: "get",
      });
    }

    function lt(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/agora/start",
        method: "post",
        data: t,
      });
    }

    function dt(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/agora/stop",
        method: "post",
        data: t,
      });
    }

    function ut() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/trtc/camera/sig",
        method: "get",
      });
    }

    function ht() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/trtc/screen/sig",
        method: "get",
      });
    }

    function ft(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/trtc/question/sig/${t}`,
        method: "get",
      });
    }

    function mt(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/monitor/ai/warning",
        method: "post",
        data: t,
      });
    }
    var Ct = {
      ossToken: tt,
      ossMonitorToken: Y,
      updateSlice: ot,
      deleteSlice: nt,
      getQuestionSlice: et,
      getLastSliceByType: it,
      leaveCount: U,
      leave: W,
      displayAction: J,
      getMobileToken: z,
      getOccupyStatus: G,
      ossUploadFile: st,
      getTokenByShortToken: at,
      checkMobile: K,
      getCameraToken: ct,
      getScreenToken: rt,
      startRecord: lt,
      stopRecord: dt,
      getCameraSig: ut,
      getScreenSig: ht,
      getQuestionSig: ft,
      addAiAction: mt,
    };

    function pt(t) {
      return Object(o["a"])({
        url: s["a"].OJ + "/code/run",
        method: "post",
        data: t,
      });
    }

    function gt() {
      return Object(o["a"])({
        url: s["a"].OJ + "/code/language",
        method: "get",
      });
    }

    function bt(t) {
      return Object(o["a"])({
        url: `${s["a"].OJ}/code/result/${t}`,
        method: "get",
      });
    }

    function wt(t) {
      return Object(o["a"])({
        url: `${s["a"].OJ}/code/result/list/${t}`,
        method: "get",
      });
    }

    function vt(t) {
      return Object(o["a"])({
        url: s["a"].OJ + "/code/run/user",
        method: "post",
        data: t,
      });
    }

    function xt(t) {
      return Object(o["a"])({
        url: s["a"].OJ + "/remote/testcase/add",
        method: "post",
        data: t,
      });
    }

    function yt(t) {
      return Object(o["a"])({
        url: s["a"].OJ + "/remote/testcase/info",
        method: "post",
        data: t,
      });
    }
    var Mt = {
      runCode: pt,
      getLanguage: gt,
      getRunResult: bt,
      getAllResult: wt,
      runUserCode: vt,
      addTestCase: xt,
      getQuestionTestCase: yt,
    };

    function _t() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/rtc/token",
        method: "get"
      });
    }

    function Ot(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/rtc/start",
        method: "post",
        data: t,
      });
    }

    function kt(t) {
      return Object(o["a"])({
        url: s["a"].EXAM + "/rtc/stop",
        method: "post",
        data: t,
      });
    }

    function jt(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/rtc/remove/${t}`,
        method: "get",
      });
    }

    function At() {
      return Object(o["a"])({
        url: s["a"].EXAM + "/trtc/test/sig",
        method: "get",
      });
    }
    var St = {
      getRtcToken: _t,
      startCloudRecord: Ot,
      stopCloudRecord: kt,
      deleteCloudVideo: jt,
      getTestSig: At,
    };

    function $t(t) {
      return Object(o["a"])({
        url: `${s["a"].EXAM}/candidate/qr/token/${t}`,
        method: "get",
      });
    }
    var Et = {
      getQrToken: $t
    };
    e["a"] = {
      ...n["a"],
      ...T,
      ...R,
      ...Z,
      ...Ct,
      ...Mt,
      ...St,
      ...Et
    };
  },
  "51ff": function(t, e, i) {
    var n = {
      "./π.svg": "b98d",
      "./上标.svg": "ee46",
      "./下标.svg": "7b4d",
      "./中括号.svg": "d550",
      "./中间点.svg": "073f",
      "./乘号.svg": "93eb",
      "./交集.svg": "c0d4",
      "./倒三角算子.svg": "4e57",
      "./偏微分.svg": "7c38",
      "./减号.svg": "7ae9",
      "./分数.svg": "c746",
      "./加减号.svg": "7308",
      "./加号.svg": "b567",
      "./单竖线.svg": "796b",
      "./双撇号.svg": "e432",
      "./反斜杠.svg": "bc3d",
      "./增量.svg": "c4a7",
      "./大于等于.svg": "fcd7",
      "./大括号.svg": "8a96",
      "./子集.svg": "2f0d",
      "./小于等于.svg": "4c79",
      "./小括号.svg": "f7c3",
      "./属于.svg": "bc0d",
      "./平方根.svg": "5694",
      "./并集.svg": "dcfa",
      "./度.svg": "bdfb",
      "./撇号.svg": "02e7",
      "./斜杠.svg": "e6eb",
      "./无穷大.svg": "dfcb",
      "./星号.svg": "84d0",
      "./正负号.svg": "ec7f",
      "./求根.svg": "d80a",
      "./波浪号运算符.svg": "e880",
      "./环运算符.svg": "032a",
      "./空集.svg": "63d1",
      "./等于.svg": "e46e",
      "./约等于.svg": "5e13",
      "./除号.svg": "1ad06",
    };

    function o(t) {
      var e = s(t);
      return i(e);
    }

    function s(t) {
      if (!i.o(n, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return n[t];
    }
    (o.keys = function() {
      return Object.keys(n);
    }),
    (o.resolve = s),
    (t.exports = o),
    (o.id = "51ff");
  },
  5557: function(t, e, i) {},
  5694: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-平方根",
        use: "icon-平方根-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-平方根">\n<g clip-path="url(#icon-平方根_clip0_557:101)">\n<rect x="96.5" y="44.5" width="37" height="63" stroke="#F35A5A" />\n<path d="M19.2726 90.5125C18.8825 90.5125 18.4275 90.2524 17.9074 89.7324C17.3874 89.2123 17.0948 88.7573 17.0298 88.3672C16.9648 87.9772 17.9724 87.0021 20.0527 85.4419C22.1329 83.8817 24.2782 82.2565 26.4884 80.5663C28.6987 78.8761 29.9338 77.9335 30.1938 77.7385C30.3239 77.6084 30.4864 77.5434 30.6814 77.5434H30.7789C31.169 77.5434 31.624 78.096 32.1441 79.2011C32.6641 80.3063 34.4193 84.1092 37.4097 90.61C38.6448 93.4053 39.6525 95.6481 40.4325 97.3383L48.721 115.378C48.786 115.378 52.1664 108.455 58.8622 94.608C65.558 80.7613 72.2538 66.8172 78.9495 52.7755C85.6453 38.7339 89.1232 31.5505 89.3833 31.2255C89.7733 30.3154 90.4234 29.8603 91.3335 29.8603C91.7885 29.8603 92.1786 30.0553 92.5036 30.4454C92.8287 30.8354 93.0562 31.2255 93.1862 31.6155V32.2006L70.4661 79.2986L47.5509 126.689C47.2908 127.144 46.6733 127.372 45.6982 127.372C45.1131 127.372 44.723 127.274 44.528 127.079C44.398 126.949 41.2126 120.058 34.9719 106.407L25.6108 85.9294L24.0506 87.0021C23.0755 87.7821 22.0679 88.5622 21.0278 89.3423C19.9877 90.1224 19.4026 90.5125 19.2726 90.5125Z" fill="black" />\n<path d="M139.993 35.7019H91.2373V29.8512H139.993V35.7019Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-平方根_clip0_557:101">\n<rect width="130" height="103.362" fill="white" transform="translate(10 24)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "56d7": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("a649"),
      o = i("2b0e"),
      s = function() {
        var t = this,
          e = t._self._c;
        return e(
          "div", {
            attrs: {
              id: "app"
            }
          },
          [
            e(
              "GlobalDialog", {
                attrs: {
                  dialogVisible: t.showCloseWindow,
                  title: "提示",
                  isShowFooter: !1,
                  width: "340px",
                  show_close: !1,
                },
              },
              [
                e("div", {
                  staticClass: "camera-snap-container"
                }, [
                  e("div", {
                    staticClass: "content"
                  }, [
                    e("i", {
                      staticClass: "iconfont icontishi"
                    }),
                    e("div", {
                      staticClass: "right"
                    }, [
                      e("span", {
                        staticClass: "title"
                      }, [
                        t._v("正在关闭系统"),
                      ]),
                      e("span", {
                        staticClass: "detail"
                      }, [
                        t._v("请稍后！！！"),
                      ]),
                    ]),
                  ]),
                ]),
              ],
            ),
            t.isMobile ?
            e("div", {
              staticClass: "mobile"
            }, [
              e("i", {
                staticClass: "iconfont icondiannaoban"
              }),
              e("span", {
                staticClass: "title"
              }, [
                t._v("请使用电脑作答！ "),
              ]),
              e("span", {
                staticClass: "content"
              }, [
                t._v(
                  " 考生您好！为了实现更好的系统操作体验，请使用电脑作答此考试！ ",
                ),
              ]),
            ]) :
            e(
              "div",
              [
                t.$store.state.token &&
                t.$route.name &&
                "Login" !== t.$route.name &&
                "Telecom" !== t.$route.name ?
                e(
                  "layout",
                  [
                    e(
                      "transition", {
                        attrs: {
                          name: "fade",
                          mode: "out-in"
                        }
                      },
                      [e("router-view", {
                        key: t.key
                      })],
                      1,
                    ),
                  ],
                  1,
                ) :
                e(
                  "transition", {
                    attrs: {
                      name: "fade",
                      mode: "out-in"
                    }
                  },
                  [e("router-view", {
                    key: t.key
                  })],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      a = [],
      c = i("34bb"),
      r = function() {
        var t = this,
          e = t._self._c;
        return t.init ?
          e(
            "div", {
              staticClass: "main-layout",
              class: "Question" === t.$route.name ? "" : "common-bg",
            },
            [
              e(
                "GlobalDialog", {
                  attrs: {
                    dialogVisible: t.showOneToOneDialog,
                    show_close: !1,
                    title: "重要提示",
                    width: "500px",
                    btn_title: "我知道了",
                  },
                  on: {
                    "dialog-cancel": function(e) {
                      t.showOneToOneDialog = !1;
                    },
                  },
                },
                [
                  e("div", {
                    staticClass: "dialog-container"
                  }, [
                    e("div", {
                      staticClass: "content"
                    }, [
                      e("i", {
                        staticClass: "iconfont iconyanjizhushou-shangchuan_yangshengqi",
                      }),
                      e("div", {
                        staticClass: "right"
                      }, [
                        e("span", {
                          staticClass: "title",
                          domProps: {
                            innerHTML: t._s(t.perMsg)
                          },
                        }),
                      ]),
                    ]),
                  ]),
                ],
              ),
              e(
                "GlobalDialog", {
                  attrs: {
                    dialogVisible: t.showPropaganda,
                    show_close: !1,
                    title: "考官通话",
                    width: "500px",
                    btn_title: "我知道了",
                  },
                  on: {
                    "dialog-cancel": function(e) {
                      t.showPropaganda = !1;
                    },
                  },
                },
                [
                  e("div", {
                    staticClass: "dialog-container"
                  }, [
                    e("div", {
                      staticClass: "content2"
                    }, [
                      e("i", {
                        staticClass: "iconfont icontishi"
                      }),
                      e("div", {
                        staticClass: "right"
                      }, [
                        e(
                          "span", {
                            staticClass: "title",
                            staticStyle: {
                              "font-size": "20px",
                              color: "#cb2a1d",
                            },
                          },
                          [t._v("监考官将与您通话！")],
                        ),
                      ]),
                    ]),
                  ]),
                ],
              ),
              e(
                "GlobalDialog", {
                  attrs: {
                    dialogVisible: t.showYellowCardDialog,
                    show_close: !1,
                    title: "重要提示",
                    width: "500px",
                    btn_title: "我知道了",
                  },
                  on: {
                    "dialog-cancel": function(e) {
                      t.showYellowCardDialog = !1;
                    },
                  },
                },
                [
                  e("div", {
                    staticClass: "dialog-container"
                  }, [
                    e(
                      "div", {
                        staticClass: "content",
                        staticStyle: {
                          padding: "0 20px"
                        },
                      },
                      [
                        e("img", {
                          staticClass: "card",
                          attrs: {
                            src: i("5ffc"),
                            alt: ""
                          },
                        }),
                        e("div", {
                          staticClass: "right"
                        }, [
                          e(
                            "span", {
                              staticStyle: {
                                "font-size": "22px",
                                color: "red",
                                "font-weight": "bold",
                                "margin-bottom": "10px",
                              },
                            },
                            [t._v("黄牌警告")],
                          ),
                          e("span", {
                            staticClass: "title",
                            domProps: {
                              innerHTML: t._s(t.perMsg)
                            },
                          }),
                        ]),
                      ],
                    ),
                  ]),
                ],
              ),
              e(
                "GlobalDialog", {
                  attrs: {
                    dialogVisible: t.showRedCardDialog,
                    show_close: !1,
                    title: "重要提示",
                    width: "500px",
                    btn_title: "我知道了",
                  },
                  on: {
                    "dialog-cancel": function(e) {
                      t.showRedCardDialog = !1;
                    },
                  },
                },
                [
                  e("div", {
                    staticClass: "dialog-container"
                  }, [
                    e(
                      "div", {
                        staticClass: "content",
                        staticStyle: {
                          padding: "0 20px"
                        },
                      },
                      [
                        e("img", {
                          staticClass: "card",
                          attrs: {
                            src: i("80f9"),
                            alt: ""
                          },
                        }),
                        e("div", {
                          staticClass: "right"
                        }, [
                          e(
                            "span", {
                              staticStyle: {
                                "font-size": "22px",
                                color: "red",
                                "font-weight": "bold",
                                "margin-bottom": "10px",
                              },
                            },
                            [t._v("红牌警告")],
                          ),
                          e("span", {
                            staticClass: "title",
                            domProps: {
                              innerHTML: t._s(t.perMsg)
                            },
                          }),
                        ]),
                      ],
                    ),
                  ]),
                ],
              ),
              e(
                "GlobalDialog", {
                  attrs: {
                    dialogVisible: t.showPhonePositionDialog,
                    show_close: !1,
                    title: "手机监控规范摆放示意图",
                    width: "700px",
                    btn_title: "我知道了",
                  },
                  on: {
                    "dialog-cancel": function(e) {
                      t.showPhonePositionDialog = !1;
                    },
                  },
                },
                [
                  e("div", {
                    staticClass: "dialog-container"
                  }, [
                    e("span", {
                      staticClass: "img-title"
                    }, [
                      t._v("你的手机摆放不规范！请参见下图摆放。"),
                    ]),
                    e("img", {
                      attrs: {
                        src: i("ed70"),
                        alt: ""
                      }
                    }),
                  ]),
                ],
              ),
              e(
                "GlobalDialog", {
                  attrs: {
                    dialogVisible: t.showExtendDialog,
                    show_close: !1,
                    title: "考试延长",
                    width: "500px",
                  },
                  on: {
                    "dialog-cancel": function(e) {
                      t.showExtendDialog = !1;
                    },
                  },
                },
                [
                  e("div", {
                    staticClass: "dialog-container"
                  }, [
                    e("div", {
                      staticClass: "content"
                    }, [
                      e("i", {
                        staticClass: "iconfont icontishi"
                      }),
                      e("div", {
                        staticClass: "right"
                      }, [
                        e("span", {
                          staticClass: "title"
                        }, [
                          t._v("考试延长" + t._s(t.extendTime) + " 分钟"),
                        ]),
                        e("span", {
                          staticClass: "detail"
                        }, [
                          t._v("在此时间内可继续做答!!"),
                        ]),
                      ]),
                    ]),
                  ]),
                ],
              ),
              "Question" !== t.$route.name && "Complete" !== t.$route.name ?
              e(
                "el-badge", {
                  staticClass: "badge",
                  attrs: {
                    "is-dot": t.unReadCounts
                  },
                },
                [
                  e(
                    "div", {
                      staticClass: "service",
                      on: {
                        click: t.openCustomer
                      },
                    },
                    [e("i", {
                      staticClass: "iconfont iconkefu"
                    })],
                  ),
                ],
              ) :
              t._e(),
              e(
                "div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showCustomer,
                    expression: "showCustomer",
                  }, ],
                  staticClass: "service-box",
                },
                [
                  e("customer", {
                    ref: "customer",
                    attrs: {
                      isOpen: t.showCustomer
                    },
                    on: {
                      messageList: t.handleMessageList,
                      closeCustomer: function(e) {
                        t.showCustomer = !1;
                      },
                    },
                  }),
                ],
                1,
              ),
              e(
                "div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showCustomer,
                    expression: "showCustomer",
                  }, ],
                  staticClass: "service-box",
                },
                [
                  e("customer", {
                    ref: "customer",
                    attrs: {
                      isOpen: t.showCustomer
                    },
                    on: {
                      messageList: t.handleMessageList,
                      closeCustomer: function(e) {
                        t.showCustomer = !1;
                      },
                    },
                  }),
                ],
                1,
              ),
              e("new-message", {
                ref: "broadcast",
                attrs: {
                  content: t.content
                },
              }),
              e("Message"),
              "Complete" !== t.$route.name &&
              "DeviceDetection" !== t.$route.name ?
              e("simple-header", {
                attrs: {
                  companyInfo: t.companyInfo
                },
              }) :
              t._e(),
              "Question" !== t.$route.name &&
              "Complete" !== t.$route.name &&
              "DeviceDetection" !== t.$route.name ?
              e("div", {
                staticClass: "title"
              }, [
                t._v(
                  " " +
                  t._s(
                    t.companyName +
                    t.$store.state.examInfo.userExamName +
                    t.$store.state.jobInfo.name,
                  ) +
                  " ",
                ),
                e(
                  "span", {
                    staticStyle: {
                      "font-weight": "normal",
                      "font-size": "14px",
                      color: "#888",
                    },
                  },
                  [t._v(t._s(t.$store.state.examInfo.scenario))],
                ),
              ]) :
              t._e(),
              t._t("default"),
              "Question" !== t.$route.name && "Complete" !== t.$route.name ?
              e("simple-footer", {
                attrs: {
                  shortName: t.companyInfo.companyShortName
                },
              }) :
              t._e(),
            ],
            2,
          ) :
          e("div", {
            directives: [{
              name: "loading",
              rawName: "v-loading",
              value: t.init,
              expression: "init",
            }, ],
            staticClass: "loading",
          });
      },
      l = [],
      d = (i("be4f"), i("450d"), i("896a")),
      u = i.n(d),
      h =
      (i("14d9"),
        function() {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              e(
                "GlobalDialog", {
                  attrs: {
                    dialogVisible: t.showMqttDisConnect,
                    title: "提示",
                    btn_title: "重新连接",
                    width: "500px",
                  },
                  on: {
                    "dialog-cancel": t.reConnectMqtt
                  },
                },
                [
                  e("div", {
                    staticClass: "camera-snap-container"
                  }, [
                    e("div", {
                      staticClass: "content"
                    }, [
                      e("i", {
                        staticClass: "iconfont icontishi"
                      }),
                      e("div", {
                        staticClass: "right"
                      }, [
                        e("span", {
                          staticClass: "title"
                        }, [
                          t._v("检测到您断开连接"),
                        ]),
                        e("span", {
                          staticClass: "detail"
                        }, [
                          t._v("请点击下方按钮重新尝试！！"),
                        ]),
                      ]),
                    ]),
                  ]),
                ],
              ),
            ],
            1,
          );
        }),
      f = [],
      m = i("e7fc"),
      C = i.n(m),
      p = i("d8ad"),
      g = i("9773"),
      b = {
        data() {
          return {
            msgContent: null,
            client: {
              connected: !1
            },
            receiveNews: "",
            subscribeSuccess: !1,
            connecting: !1,
            showMqttDisConnect: !1,
            retryTimes: 0,
            subscriptions: [{
                topic: "exam/msg/" + this.$store.state.userInfo.candidateUuid,
                qos: 0,
              },
              {
                topic: "exam/bc/" + this.$store.state.jobInfo.jobUuid,
                qos: 0
              },
            ],
          };
        },
        components: {
          GlobalDialog: g["a"]
        },
        mounted() {
          this.createConnection(),
            this.doSubscribe(),
            p["a"].$on(
              "destoryMsg",
              function() {
                Object(n["a"])(this, this), this.destroyConnection();
              }.bind(this),
            ),
            this.$once(
              "hook:beforeDestroy",
              function() {
                Object(n["a"])(this, this), p["a"].$off("destoryMsg");
              }.bind(this),
            );
        },
        methods: {
          sliceFn(t) {
            let e = Math.random();
            return (e = e.toString()), (e = e.slice(2, 2 + t)), e;
          },
          createConnection() {
            const t = this.sliceFn(6),
              {
                candidateUuid: e
              } = this.$store.state.userInfo,
              i = !0,
              o = {
                host: "broker.iguokao.com",
                port: 8084,
                endpoint: "/mqtt",
                clean: !0,
                connectTimeout: 3e4,
                reconnectPeriod: 4e3,
                clientId: i ? "e_" + e : "t_e_" + e,
                username: i ? e : "t_" + e,
                password: t,
              };
            try {
              this.connecting = !0;
              const {
                host: t,
                port: e,
                endpoint: i,
                ...s
              } = o,
              a = `wss://${t}:${e}${i}`;
              if (((this.client = C.a.connect(a, s)), !this.client)) return;
              this.client.on(
                  "connect",
                  function() {
                    Object(n["a"])(this, this),
                      (this.connecting = !1),
                      console.log("Connection succeeded!");
                  }.bind(this),
                ),
                this.client.on(
                  "error",
                  function(t) {
                    Object(n["a"])(this, this),
                      this.retryTimes > 3 &&
                      (this.client.end(), this.initData()),
                      console.log("Connection failed", t);
                  }.bind(this),
                ),
                this.client.on("reconnect", this.handleOnReConnect),
                this.client.on(
                  "message",
                  async function(t, e) {
                    Object(n["a"])(this, this),
                      (this.receiveNews = this.receiveNews.concat(e)),
                      console.log(`Received message ${e} from topic ${t}`),
                      (e = JSON.parse(e)),
                      p["a"].$emit("message", e);
                  }.bind(this),
                );
            } catch (s) {
              (this.connecting = !1), console.log("mqtt.connect error", s);
            }
          },
          initData() {
            (this.client = {
              connected: !1
            }),
            (this.retryTimes = 0),
            (this.connecting = !1),
            (this.subscribeSuccess = !1);
          },
          handleOnReConnect() {
            if (((this.retryTimes += 1), this.retryTimes > 5))
              try {
                this.client.end(),
                  this.initData(),
                  this.$message.error("MQTT连接失败，请刷新页面重试"),
                  (this.showMqttDisConnect = !0);
              } catch (t) {
                this.$message.error(t.toString());
              }
          },
          reConnectMqtt() {
            (this.showMqttDisConnect = !1),
            this.createConnection(),
              this.doSubscribe();
          },
          doSubscribe() {
            if (this.client)
              for (const t of this.subscriptions)
                this.client.subscribe(
                  t.topic, {
                    qos: t.qos
                  },
                  function(t, e) {
                    Object(n["a"])(this, this),
                      t ?
                      console.log("Subscribe to topics error", t) :
                      console.log("Subscribe to topics res", e);
                  }.bind(this),
                );
          },
          doUnSubscribe() {
            if (this.client)
              for (const t of this.subscriptions)
                this.client.unsubscribe(
                  t.topic,
                  function(t) {
                    Object(n["a"])(this, this),
                      t && console.log("Unsubscribe error", t);
                  }.bind(this),
                );
          },
          doPublish(t) {
            const {
              topic: e,
              qos: i,
              payload: o
            } = t;
            this.client &&
              this.client.publish(
                e,
                o,
                i,
                function(t) {
                  Object(n["a"])(this, this),
                    t && console.log("Publish error", t);
                }.bind(this),
              );
          },
          destroyConnection() {
            if (
              this.client &&
              (console.log(this.client.connected), this.client.connected)
            )
              try {
                this.client.end(),
                  (this.client.connected = !1),
                  console.log("Successfully disconnected!");
              } catch (t) {
                console.log("Disconnect failed", t.toString());
              }
          },
        },
      },
      w = b,
      v = (i("1ad0"), i("2877")),
      x = Object(v["a"])(w, h, f, !1, null, "20ccf060", null),
      y = x.exports,
      M = function() {
        var t = this,
          e = t._self._c;
        return t.show ?
          e("div", {
            staticClass: "msg-container"
          }, [
            e("i", {
              staticClass: "iconfont iconguanbi1",
              on: {
                click: function(e) {
                  return t.close();
                },
              },
            }),
            e("div", {
              staticClass: "msg-con"
            }, [
              e(
                "div", {
                  ref: "msgContainer",
                  staticClass: "msg-content-container"
                },
                [
                  e("i", {
                    staticClass: "iconfont iconiconfontzhizuobiaozhun41",
                  }),
                  e("div", {
                    staticClass: "msg-content"
                  }, [
                    t._v(" " + t._s(t.content) + " "),
                  ]),
                ],
              ),
            ]),
          ]) :
          t._e();
      },
      _ = [],
      O = {
        props: {
          content: String
        },
        data() {
          return {
            show: !1,
            timer: null
          };
        },
        methods: {
          close() {
            (this.show = !1), clearInterval(this.timer);
          },
          open() {
            clearInterval(this.timer),
              (this.show = !0),
              this.$nextTick(
                function() {
                  Object(n["a"])(this, this), this.scroll();
                }.bind(this),
              );
          },
          scroll() {
            const t = this.$refs.msgContainer,
              e = document.documentElement,
              i = t.offsetWidth,
              o = e.offsetWidth;
            t.style.left = o + "px";
            let s = o;
            (this.timer = setInterval(
              function() {
                Object(n["a"])(this, this),
                  (s -= 0.5),
                  (t.style.left = s + "px"),
                  s <= 0 && Math.abs(s) === i && (s = o);
              }.bind(this),
              5,
            )),
            this.$once(
              "hook:beforeDestroy",
              function() {
                Object(n["a"])(this, this), clearInterval(this.timer);
              }.bind(this),
            );
          },
        },
      },
      k = O,
      j = (i("7ca3"), Object(v["a"])(k, M, _, !1, null, "21bec861", null)),
      A = j.exports,
      S = i("5d2d"),
      $ = i("4ec3"),
      E = i("fdfd"),
      L = i("fd0b"),
      D = i.n(L),
      P = i("d2ef"),
      I = i("1ccc"),
      T = i("2f62"),
      q = i("b556"),
      B = {
        data() {
          return {
            content: "",
            perMsg: "",
            showOneToOneDialog: !1,
            showYellowCardDialog: !1,
            showRedCardDialog: !1,
            showPhonePositionDialog: !1,
            showPropaganda: !1,
            showExtendDialog: !1,
            showCustomer: !1,
            unReadCounts: !1,
            init: !1,
            companyName: "",
            companyInfo: {},
            is_electron: !0,
            extendTime: 0,
          };
        },
        components: {
          Message: y,
          NewMessage: A,
          GlobalDialog: g["a"],
          SimpleHeader: P["a"],
          SimpleFooter: I["a"],
          Customer: q["a"],
        },
        async mounted() {
          u.a.service({
              fullscreen: !0
            }),
            setTimeout(
              function() {
                Object(n["a"])(this, this), this.getBroadcast();
              }.bind(this),
              3e3,
            ),
            this.getBroadcastMqtt(),
            await this.initData(),
            this.is_electron ?
            this.getCompanyNameFromElectron() :
            this.getCompanyName();
        },
        methods: {
          ...Object(T["b"])([
            "updateExamInfo",
            "updateUserInfo",
            "updateJobInfo",
          ]),
          ...Object(T["c"])(["setExamInfo", "setUserInfo", "setJobInfo"]),
          async initData() {
            await this.jobInfo(),
              await this.info(),
              u.a.service({
                fullscreen: !0
              }).close(),
              (this.init = !0);
          },
          async examInfo() {
            const t = await $["a"].examInfo();
            if (0 === t.code) {
              const e = t.data;
              this.setExamInfo(e), this.updateExamInfo(e);
            }
          },
          async jobInfo() {
            const t = await $["a"].jobInfo();
            if (0 === t.code) {
              const e = t.data;
              this.setJobInfo(e), this.updateJobInfo(e);
            }
          },
          async info() {
            const t = await $["a"].memberInfo();
            if (0 === t.code) {
              const e = t.data;
              this.setUserInfo(e), this.updateUserInfo(e);
            }
          },
          getBroadcastMqtt() {
            p["a"].$on(
              "message",
              function(t) {
                switch (
                  (Object(n["a"])(this, this),
                    console.log("message", t),
                    Object(S["c"])("msgUuid", t._id),
                    t.type)
                ) {
                  case 3:
                    this.broadcast(t.content);
                    break;
                  case 4:
                    this.oneToOne(t.content);
                    break;
                  case 5:
                    this.propaganda(t.content);
                    break;
                  case 6:
                    this.yellowCard(t.content);
                    break;
                  case 7:
                    this.redCard(t.content);
                    break;
                  case 8:
                    this.phonePosition(t.content);
                    break;
                  case 9:
                    this.finishForce();
                    break;
                  case 50:
                    this.extendExam(t.content);
                    break;
                }
              }.bind(this),
            );
          },
          async getBroadcast() {
            const t = Object(S["b"])("msgUuid") || "";
            if (E["a"].includes(this.$route.name)) return;
            const e = await $["a"].getBroadcast(),
              i = e.data;
            if (0 === e.code) {
              if (!i.length) return;
              const e = i.length - 1;
              if (i[e].messageUuid === t) return;
              const n = i[e];
              switch ((Object(S["c"])("msgUuid", i[e].messageUuid), n.type)) {
                case 3:
                  this.broadcast(i[e].content);
                  break;
                case 4:
                  this.oneToOne(i[e].content);
                  break;
                case 5:
                  this.propaganda(i[e].content);
                  break;
                case 6:
                  this.yellowCard(i[e].content);
                  break;
                case 7:
                  this.redCard(i[e].content);
                  break;
                case 8:
                  this.phonePosition(i[e].content);
                  break;
                case 9:
                  this.finishForce();
                  break;
                case 50:
                  this.extendExam(i[e].content);
                  break;
              }
            }
          },
          broadcast(t) {
            this.$refs.broadcast.open(),
              (this.content = t),
              (this.showOneToOneDialog = !0),
              (this.perMsg = this.changeLine(t));
          },
          oneToOne(t) {
            (this.showOneToOneDialog = !0), (this.perMsg = this.changeLine(t));
          },
          yellowCard(t) {
            const {
              commit: e
            } = this.$store;
            (this.showYellowCardDialog = !0),
            (this.perMsg = this.changeLine(t)),
            e("setShowYellowCard", !0);
          },
          redCard(t) {
            const {
              commit: e
            } = this.$store;
            (this.showRedCardDialog = !0),
            (this.perMsg = this.changeLine(t)),
            e("setShowRedCard", !0);
          },
          phonePosition(t) {
            (this.showPhonePositionDialog = !0),
            (this.perMsg = this.changeLine(t));
          },
          async finishForce() {
            const t = await $["a"].examFinishForce();
            0 === t.code && this.$router.push("/complete?isForce=true");
          },
          extendExam(t) {
            (this.showExtendDialog = !0),
            (this.extendTime = t),
            p["a"].$emit("extendTime", t);
          },
          propaganda(t) {
            this.showPropaganda = !0;
            const e = new Audio(D.a);
            e.play(),
              (this.perMsg = this.changeLine(t)),
              setTimeout(
                function() {
                  Object(n["a"])(this, this), (this.showPropaganda = !1);
                }.bind(this),
                5e3,
              );
          },
          changeLine(t) {
            return t.replace(/\n/g, "<br />");
          },
          async messageRead() {
            await $["a"].messageRead({});
          },
          async handleMessageList() {
            this.showCustomer ?
              ((this.unReadCounts = !1), await this.messageRead()) :
              (this.unReadCounts = !0);
          },
          async openCustomer() {
            (this.showCustomer = !0),
            (this.unReadCounts = !1),
            await this.messageRead(),
              setTimeout(
                function() {
                  return (
                    Object(n["a"])(this, this),
                    this.$refs.customer.scrollToBottom()
                  );
                }.bind(this),
                100,
              );
          },
          async getCompanyName() {
            const t = Object(S["b"])("shortId");
            if (!t || "undefined" === t) return;
            const e = await $["a"].getNameAndLogo({
              examShortId: t
            });
            0 === e.code &&
              ((this.companyInfo = e.data),
                (this.companyName = e.data.companyShortName));
          },
          async getCompanyNameFromElectron() {
            const t = await $["a"].examInfo();
            if (0 === t.code) {
              const e = t.data,
                i = e.coverInfo;
              (this.companyInfo = {
                companyLogo: i.logo,
                shortName: i.shortName,
              }),
              (this.companyName = this.companyInfo.shortName);
            }
          },
        },
      },
      Q = B,
      H = (i("8f0a"), Object(v["a"])(Q, r, l, !1, null, "2f9d2c17", null)),
      R = H.exports,
      V = {
        name: "Layout",
        data() {
          return {
            isMobile: !1,
            showCloseWindow: !1
          };
        },
        components: {
          layout: R,
          GlobalDialog: g["a"]
        },
        mounted() {
          (window.onpopstate = function() {
            return Object(n["a"])(this, this), history.go(1);
          }.bind(this)),
          (document.oncontextmenu = function(t) {
            return Object(n["a"])(this, this), t.preventDefault();
          }.bind(this)),
          this.openWelcomeWin(),
            this.listenAppQuit();
        },
        computed: {
          key: {
            get() {
              return this.$route.path;
            },
          },
        },
        methods: {
          openWelcomeWin() {
            c["ipcRenderer"].send("welcome");
          },
          listenAppQuit() {
            c["ipcRenderer"].on(
              "closeWindow",
              function() {
                Object(n["a"])(this, this), (this.showCloseWindow = !0);
              }.bind(this),
            );
          },
        },
      },
      N = V,
      X =
      (i("8c7f"),
        i("c6f0"),
        Object(v["a"])(N, s, a, !1, null, "39507f5e", null)),
      F = X.exports,
      Z = i("8c4f"),
      W = i("a18c"),
      U = i("4360"),
      J = (i("f5df1"), i("3f65"), i("ea96"), i("0fb7"), i("f529")),
      G = i.n(J),
      z = (i("9e1f"), i("6ed5")),
      Y = i.n(z),
      K = (i("826b"), i("c263")),
      tt = i.n(K),
      et = (i("e2f3"), i("06f9")),
      it = i.n(et),
      nt = (i("0c67"), i("299c")),
      ot = i.n(nt),
      st = (i("5466"), i("ecdf")),
      at = i.n(st),
      ct = (i("38a0"), i("ad41")),
      rt = i.n(ct),
      lt = (i("6b30"), i("c284")),
      dt = i.n(lt),
      ut = (i("f225"), i("89a9")),
      ht = i.n(ut),
      ft = (i("e612"), i("dd87")),
      mt = i.n(ft),
      Ct = (i("075a"), i("72aa")),
      pt = i.n(Ct),
      gt = (i("6611"), i("e772")),
      bt = i.n(gt),
      wt = (i("1f1a"), i("4e4b")),
      vt = i.n(wt),
      xt = (i("b5c2"), i("20cf")),
      yt = i.n(xt),
      Mt = (i("560b"), i("dcdc")),
      _t = i.n(Mt),
      Ot = (i("d4df"), i("7fc1")),
      kt = i.n(Ot),
      jt = (i("a7cc"), i("df33d")),
      At = i.n(jt),
      St = (i("3c52"), i("0d7b")),
      $t = i.n(St),
      Et = (i("b5d8"), i("f494")),
      Lt = i.n(Et),
      Dt = (i("fe07"), i("6ac5")),
      Pt = i.n(Dt),
      It = (i("9c49"), i("6640")),
      Tt = i.n(It),
      qt = (i("d2ac"), i("95b0")),
      Bt = i.n(qt),
      Qt = (i("10cb"), i("f3ad")),
      Ht = i.n(Qt),
      Rt = (i("1951"), i("eedf")),
      Vt = i.n(Rt),
      Nt = (i("eca7"), i("3787")),
      Xt = i.n(Nt),
      Ft = (i("425f"), i("4105")),
      Zt = i.n(Ft),
      Wt = {
        install(t) {
          t.use(Zt.a),
            t.use(Xt.a),
            t.use(Vt.a),
            t.use(Ht.a),
            t.use(Bt.a),
            t.use(Tt.a),
            t.use(Pt.a),
            t.use(Lt.a),
            t.use($t.a),
            t.use(At.a),
            t.use(kt.a),
            t.use(_t.a),
            t.use(yt.a),
            t.use(vt.a),
            t.use(bt.a),
            t.use(pt.a),
            t.use(mt.a),
            t.use(ht.a),
            t.use(dt.a),
            t.use(rt.a),
            t.use(at.a),
            t.use(ot.a),
            t.use(it.a),
            t.use(tt.a),
            t.use(u.a),
            (t.prototype.$msgbox = Y.a),
            (t.prototype.$message = G.a),
            (t.prototype.$loading = u.a.service);
        },
      },
      Ut = i("8f94"),
      Jt = i.n(Ut),
      Gt = (i("14b3"), i("a7be"), i("3d29")),
      zt = i.n(Gt),
      Yt = (i("9992"), i("f0e2")),
      Kt =
      (i("fda2"),
        function() {
          var t = this,
            e = t._self._c;
          return e("a", {
            attrs: {
              title: t.svgTitle
            }
          }, [
            e("svg", {
              class: t.svgClass,
              attrs: {
                "aria-hidden": "true"
              }
            }, [
              e("use", {
                attrs: {
                  "xlink:href": t.iconName
                }
              }),
            ]),
          ]);
        }),
      te = [],
      ee = {
        name: "SvgIcon",
        props: {
          iconClass: {
            type: String,
            required: !0
          },
          className: {
            type: String
          },
          svgTitle: {
            type: String
          },
        },
        computed: {
          iconName() {
            return "#icon-" + this.iconClass;
          },
          svgClass() {
            return this.className ? "svg-icon " + this.className : "svg-icon";
          },
        },
      },
      ie = ee,
      ne = (i("8e95"), Object(v["a"])(ie, Kt, te, !1, null, null, null)),
      oe = ne.exports;
    o["default"].component("svg-icon", oe);
    const se = function(t) {
        return Object(n["a"])(this, this), t.keys().map(t);
      }.bind(void 0),
      ae = i("51ff");
    se(ae);
    o["default"].directive("preventReClick", {
      inserted: function(t, e) {
        t.addEventListener(
          "click",
          function() {
            Object(n["a"])(this, this),
              t.disabled ||
              ((t.disabled = !0),
                setTimeout(
                  function() {
                    Object(n["a"])(this, this), (t.disabled = !1);
                  }.bind(this),
                  e.value || 2e3,
                ));
          }.bind(this),
        );
      },
    });
    (o["default"].prototype.$video = Yt["a"]),
    o["default"].use(zt.a),
      o["default"].use(Jt.a),
      o["default"].use(Wt),
      (o["default"].config.productionTip = !1);
    const ce = Z["a"].prototype.push;
    (Z["a"].prototype.push = function(t) {
      return ce.call(this, t).catch(
        function(t) {
          return Object(n["a"])(this, this), t;
        }.bind(this),
      );
    }),
    new o["default"]({
      router: W["a"],
      store: U["a"],
      render: function(t) {
        return Object(n["a"])(this, this), t(F);
      }.bind(void 0),
    }).$mount("#app");
  },
  "5d2d": function(t, e, i) {
    "use strict";

    function n(t) {
      return sessionStorage[t];
    }

    function o(t, e) {
      sessionStorage[t] = e;
    }

    function s() {
      sessionStorage.clear();
    }
    i.d(e, "b", function() {
        return n;
      }),
      i.d(e, "c", function() {
        return o;
      }),
      i.d(e, "a", function() {
        return s;
      });
  },
  "5e13": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-约等于",
        use: "icon-约等于-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-约等于">\n<g clip-path="url(#icon-约等于_clip0_588:200)">\n<path d="M46.7422 70.1207C46.7422 67.7674 47.2301 65.6436 48.2059 63.7495C49.1816 61.8553 50.387 60.3917 51.822 59.3585C53.2569 58.3253 54.6632 57.5217 56.0408 56.9477C57.4184 56.3737 58.6237 56.0867 59.6569 56.0867C59.7717 56.0867 60.0013 56.0867 60.3457 56.0867C60.6901 56.0867 60.9771 56.0581 61.2067 56.0007C63.4452 56.0007 65.5403 56.4311 67.4918 57.2921C69.4434 58.1531 72.2272 59.7316 75.8434 62.0275L80.1483 64.7827C83.5348 66.7916 86.6917 67.7961 89.6191 67.7961C92.8334 67.7961 95.5885 66.9638 97.8845 65.2992C100.18 63.6347 101.472 61.3674 101.759 58.4975C101.759 57.8661 101.874 57.2921 102.103 56.7755C102.333 56.2589 102.62 56.0007 102.964 56.0007C103.768 56.0007 104.17 56.8903 104.17 58.6697C104.17 62.458 102.821 65.7297 100.123 68.4849C97.4253 71.24 93.9814 72.6463 89.7913 72.7037C87.4379 72.7037 84.9411 72.101 82.3007 70.8956C79.6604 69.6903 77.3644 68.3414 75.4129 66.849C73.4613 65.3566 71.1654 64.0078 68.525 62.8024C65.8847 61.597 63.4739 60.9656 61.2928 60.9082C57.8488 60.9082 55.0076 61.8553 52.7691 63.7495C50.5305 65.6436 49.3251 67.7961 49.1529 70.2068C49.0381 71.8714 48.6363 72.7037 47.9476 72.7037C47.144 72.7037 46.7422 71.8427 46.7422 70.1207ZM46.7422 90.2677C46.7422 87.9144 47.2301 85.7906 48.2059 83.8964C49.1816 82.0023 50.387 80.5386 51.822 79.5054C53.2569 78.4723 54.6632 77.6687 56.0408 77.0947C57.4184 76.5207 58.6237 76.2337 59.6569 76.2337C59.7717 76.2337 60.0013 76.2337 60.3457 76.2337C60.6901 76.2337 60.9771 76.205 61.2067 76.1476C63.4452 76.1476 65.5403 76.5781 67.4918 77.4391C69.4434 78.3001 72.2272 79.8785 75.8434 82.1745L80.1483 84.9296C83.5348 86.9386 86.6917 87.9431 89.6191 87.9431C92.8334 87.9431 95.5885 87.1108 97.8845 85.4462C100.18 83.7816 101.472 81.5144 101.759 78.6445C101.759 76.9799 102.161 76.1476 102.964 76.1476C103.768 76.1476 104.17 77.066 104.17 78.9028C104.17 82.5763 102.821 85.8193 100.123 88.6318C97.4253 91.4444 93.9814 92.8506 89.7913 92.8506C87.4379 92.8506 84.9411 92.248 82.3007 91.0426C79.6604 89.8372 77.3644 88.4883 75.4129 86.996C73.4613 85.5036 71.1654 84.1547 68.525 82.9494C65.8847 81.744 63.4739 81.1126 61.2928 81.0552C57.8488 81.0552 55.0076 82.0023 52.7691 83.8964C50.5305 85.7906 49.3251 87.9431 49.1529 90.3538C48.9807 92.0184 48.5789 92.8506 47.9476 92.8506C47.144 92.8506 46.7422 91.9897 46.7422 90.2677Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-约等于_clip0_588:200">\n<rect width="67" height="36.85" fill="white" transform="translate(42 56)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "5f87": function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
        return a;
      }),
      i.d(e, "c", function() {
        return c;
      }),
      i.d(e, "b", function() {
        return r;
      });
    var n = i("a78e"),
      o = i.n(n);
    const s = "candidate-token";

    function a() {
      return o.a.get(s);
    }

    function c(t) {
      return o.a.set(s, t);
    }

    function r() {
      return o.a.remove(s);
    }
  },
  "5ffc": function(t, e, i) {
    t.exports = i.p + "img/yellow-card.d9e70af5.svg";
  },
  "63d1": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-空集",
        use: "icon-空集-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-空集">\n<circle cx="76" cy="72.8571" r="27" stroke="black" stroke-width="6" />\n<line x1="50.3188" y1="108.262" x2="101.119" y2="36.824" stroke="black" stroke-width="7" stroke-linecap="round" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "6f3a": function(t, e) {
    t.exports = require("url");
  },
  7308: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-加减号",
        use: "icon-加减号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-加减号">\n<g clip-path="url(#icon-加减号_clip0_563:243)">\n<path d="M40.7594 77.5863C40.7594 77.5863 40.7594 77.1407 40.7594 76.2496C40.7594 75.3584 41.2393 74.6729 42.199 74.193H72.9445V58.8717C72.9445 48.6574 73.0131 43.4132 73.1502 43.139C73.4929 42.385 74.0756 42.0079 74.8983 42.0079C75.858 42.0079 76.4407 42.4192 76.6463 43.2419C76.852 44.0645 76.9891 46.0525 77.0576 49.2059V59.0773V74.193H107.7C108.729 74.7414 109.243 75.4269 109.243 76.2496C109.243 77.1407 108.729 77.8263 107.7 78.3061H77.0576V106.378H107.7C108.729 106.927 109.243 107.612 109.243 108.435C109.243 109.257 108.729 109.943 107.7 110.491H42.199C41.2393 110.011 40.7594 109.326 40.7594 108.435C40.7594 107.543 41.2393 106.858 42.199 106.378H72.9445V78.3061H42.199C41.2393 77.8263 40.7594 77.1407 40.7594 76.2496V77.5863Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-加减号_clip0_563:243">\n<rect width="80" height="68.5" fill="white" transform="translate(35 42)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "75d3": function(t, e, i) {},
  "77ee": function(t, e, i) {},
  "796b": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-单竖线",
        use: "icon-单竖线-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-单竖线">\n<g clip-path="url(#icon-单竖线_clip0_560:195)">\n<path d="M37.4266 124.444H37.2334C36.4607 124.444 35.8812 123.994 35.4948 123.092V76.1499L35.5914 29.2077C36.2353 28.3706 36.8471 27.9521 37.4266 27.9521C38.2637 27.9521 38.9076 28.435 39.3584 29.4009V123.092C38.8432 123.994 38.2637 124.444 37.6198 124.444H37.4266Z" fill="black" />\n<rect x="55.5" y="36.5" width="38" height="66" stroke="#F35A5A" />\n<path d="M112.571 124.444H112.378C111.606 124.444 111.026 123.994 110.64 123.092V76.1499L110.736 29.2077C111.38 28.3706 111.992 27.9521 112.571 27.9521C113.409 27.9521 114.052 28.435 114.503 29.4009V123.092C113.988 123.994 113.409 124.444 112.765 124.444H112.571Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-单竖线_clip0_560:195">\n<rect width="102" height="96.4923" fill="white" transform="translate(24 28)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "7ae9": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-减号",
        use: "icon-减号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-减号">\n<path d="M43.6377 77.6192C43.6377 77.6192 43.6377 77.0981 43.6377 76.0559C43.6377 75.0138 44.1176 74.2121 45.0773 73.6509H104.82C105.848 74.2923 106.363 75.0939 106.363 76.0559C106.363 77.0179 105.848 77.8196 104.82 78.4609H45.0773C44.1176 77.8998 43.6377 77.0981 43.6377 76.0559V77.6192Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "7b4d": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-下标",
        use: "icon-下标-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-下标">\n<g clip-path="url(#icon-下标_clip0_557:138)">\n<path d="M30.3374 64.6797C30.8157 61.8101 32.6604 58.4965 35.8716 54.7387C39.0828 50.981 43.0455 49.068 47.7597 48.9996C50.151 48.9996 52.3374 49.6145 54.3187 50.8443C56.3001 52.0742 57.769 53.6114 58.7255 55.4561C61.5951 51.1518 65.0454 48.9996 69.0764 48.9996C71.6044 48.9996 73.7907 49.7512 75.6354 51.2543C77.4801 52.7574 78.4367 54.7729 78.505 57.3008C78.505 59.2822 78.0267 60.8878 77.0702 62.1176C76.1137 63.3474 75.1913 64.099 74.3031 64.3722C73.4149 64.6455 72.6292 64.7822 71.946 64.7822C70.6479 64.7822 69.5889 64.4064 68.769 63.6549C67.9491 62.9033 67.5392 61.9126 67.5392 60.6828C67.5392 57.54 69.2473 55.3878 72.6634 54.2263C71.9118 53.3381 70.5454 52.894 68.564 52.894C67.6758 52.894 67.0268 52.9623 66.6168 53.099C64.0206 54.1922 62.1075 56.4468 60.8777 59.8629C56.7783 74.9623 54.7287 83.7759 54.7287 86.3038C54.7287 88.2169 55.2752 89.5833 56.3684 90.4032C57.4616 91.2231 58.6572 91.633 59.9554 91.633C62.4833 91.633 64.9771 90.5057 67.4367 88.251C69.8963 85.9964 71.5702 83.2293 72.4584 79.9498C72.6634 79.2666 72.8684 78.8908 73.0733 78.8225C73.2783 78.7542 73.8249 78.6859 74.7131 78.6175H75.123C76.1478 78.6175 76.6603 78.8908 76.6603 79.4374C76.6603 79.5057 76.5919 79.8815 76.4553 80.5647C75.3621 84.4591 73.2441 87.9094 70.1013 90.9156C66.9584 93.9218 63.3032 95.4249 59.1355 95.4249C54.3529 95.4249 50.7318 93.2728 48.2722 88.9684C45.4709 93.2044 42.2598 95.3224 38.6387 95.3224H38.0238C34.6759 95.3224 32.2846 94.4342 30.8499 92.6579C29.4151 90.8815 28.6635 89.0026 28.5952 87.0212C28.5952 84.8349 29.2443 83.0585 30.5424 81.6921C31.8405 80.3256 33.3778 79.6424 35.1542 79.6424C38.0921 79.6424 39.561 81.0772 39.561 83.9467C39.561 85.3132 39.1511 86.5088 38.3312 87.5337C37.5113 88.5585 36.7256 89.2417 35.9741 89.5833C35.2225 89.9249 34.7784 90.0958 34.6418 90.0958L34.3343 90.1982C34.3343 90.2666 34.5393 90.4032 34.9492 90.6082C35.3592 90.8131 35.9057 91.0523 36.589 91.3256C37.2722 91.5989 37.9213 91.7013 38.5362 91.633C40.9958 91.633 43.1138 90.0958 44.8902 87.0212C45.5051 85.9281 46.2908 83.6051 47.2473 80.0523C48.2038 76.4995 49.1604 72.8101 50.1169 68.984C51.0734 65.158 51.62 62.9033 51.7566 62.2201C52.0982 60.3754 52.269 59.0431 52.269 58.2232C52.269 56.3102 51.7566 54.9437 50.7318 54.1238C49.7069 53.304 48.5455 52.894 47.2473 52.894C44.5144 52.894 41.9523 53.9872 39.561 56.1735C37.1697 58.3598 35.4958 61.1611 34.5393 64.5772C34.4026 65.1921 34.2318 65.5337 34.0269 65.6021C33.8219 65.6704 33.2753 65.7387 32.3871 65.807H30.9523C30.5424 65.3971 30.3374 65.0213 30.3374 64.6797Z" fill="black" />\n<rect x="88" y="73.5" width="27.75" height="47.75" stroke="#F35A5A" />\n</g>\n<defs>\n<clipPath id="icon-下标_clip0_557:138">\n<rect width="100" height="95" fill="white" transform="translate(25 49)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "7c38": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-偏微分",
        use: "icon-偏微分-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-偏微分">\n<path d="M68.2596 61.5767C66.9854 61.5767 66.0713 61.2037 65.5174 60.4577C64.9634 59.7117 64.6587 58.8725 64.6033 57.94C64.6033 57.3183 64.7695 56.3858 65.1019 55.1425C65.4343 53.8992 66.0159 52.4383 66.8469 50.7598C67.6779 49.0814 68.9244 47.4961 70.5864 46.0042C72.2484 44.5122 74.2151 43.4243 76.4865 42.7405L79.1456 42.2742H80.1428C81.971 42.2742 83.0513 42.3053 83.3837 42.3675C86.8739 43.0513 89.7823 44.6987 92.1091 47.3096C94.4359 49.9206 96.0979 52.8113 97.0951 55.9818C98.0923 59.1522 98.5632 62.6024 98.5078 66.3323C98.5078 72.2381 97.2059 78.9831 94.6021 86.5673C91.9983 94.1515 88.7574 99.964 84.8795 104.005C80.3921 108.667 75.4339 110.998 70.0047 110.998C64.4648 110.998 60.3098 108.574 57.5398 103.725C55.8224 100.865 54.9637 98.0058 54.9637 95.1461V94.1204C54.9637 86.847 57.3736 80.2885 62.1934 74.445C67.0131 68.6014 72.3592 65.6485 78.2315 65.5864C81.6109 65.5864 84.1593 66.5499 85.8767 68.4771C87.5941 70.4042 88.7297 72.4867 89.2837 74.7247L89.533 73.699C90.641 68.5392 91.195 64.2809 91.195 60.9239C91.195 55.4533 90.0593 51.5991 87.788 49.3611C85.5166 47.1231 82.9405 45.9731 80.0597 45.9109C75.7386 45.9109 72.3869 47.9002 70.0047 51.8788C72.2761 52.2518 73.4118 53.4951 73.4118 55.6088C73.4118 57.1629 72.9132 58.5306 71.916 59.7117C70.9188 60.8928 69.7 61.5145 68.2596 61.5767ZM87.2063 80.4129C87.2063 76.3099 86.403 73.3881 84.7964 71.6475C83.1898 69.9069 81.3062 69.0366 79.1456 69.0366C75.6555 69.0366 72.5808 70.4664 69.9216 73.326C68.5366 75.0666 67.4563 76.9005 66.6807 78.8276C65.9051 80.7548 64.9911 83.9252 63.9385 88.339C62.9413 92.8149 62.4427 96.0786 62.4427 98.1301C62.4427 104.036 65.2127 106.989 70.7526 106.989C71.4174 106.989 71.916 106.958 72.2484 106.895C76.5142 106.087 79.9489 103.29 82.5527 98.5031C83.3837 96.9489 84.3532 94.338 85.4612 90.6702C86.5692 87.0024 87.1509 83.5833 87.2063 80.4129Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "7ca3": function(t, e, i) {
    "use strict";
    i("75d3");
  },
  "80f9": function(t, e, i) {
    t.exports = i.p + "img/red-card.bf1452b3.svg";
  },
  "84d0": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-星号",
        use: "icon-星号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-星号">\n<path d="M74.55 72.53C73.9433 66.2767 73.64 62.7767 73.64 62.03C73.64 61.19 74.2 60.5367 75.32 60.07C75.3667 60.07 75.4833 60.07 75.67 60.07C75.8567 60.07 75.9967 60.0467 76.09 60C76.65 60.0467 77.1633 60.2567 77.63 60.63C78.0967 61.0033 78.33 61.47 78.33 62.03C78.33 62.8233 78.19 64.69 77.91 67.63C77.63 70.57 77.4667 72.2033 77.42 72.53L81.48 69.59C84.0933 67.6767 85.5167 66.65 85.75 66.51C85.9833 66.37 86.2167 66.3 86.45 66.3C87.0567 66.3 87.6167 66.5333 88.13 67C88.6433 67.4667 88.9233 68.0967 88.97 68.89C88.97 69.4967 88.7367 70.0333 88.27 70.5C88.0367 70.64 86.45 71.41 83.51 72.81C80.57 74.21 78.9833 74.9567 78.75 75.05L83.37 77.22L88.27 79.67C88.69 80.09 88.9 80.6267 88.9 81.28C88.9 81.98 88.69 82.5633 88.27 83.03C87.85 83.4967 87.29 83.7533 86.59 83.8C86.2167 83.8 85.7967 83.66 85.33 83.38C84.8633 83.1 83.58 82.1667 81.48 80.58L77.42 77.64C78.0267 83.8933 78.33 87.3933 78.33 88.14C78.33 88.6067 78.1667 89.05 77.84 89.47C77.5133 89.89 76.9067 90.1 76.02 90.1C75.1333 90.1 74.5267 89.89 74.2 89.47C73.8733 89.05 73.6867 88.6067 73.64 88.14C73.64 87.3467 73.78 85.48 74.06 82.54C74.34 79.6 74.5033 77.9667 74.55 77.64L70.49 80.58C67.8767 82.4933 66.4533 83.52 66.22 83.66C66.0333 83.8 65.8 83.87 65.52 83.87C64.9133 83.87 64.3533 83.6367 63.84 83.17C63.3267 82.7033 63.0467 82.0733 63 81.28C63 81.0467 63 80.86 63 80.72C63 80.58 63.07 80.44 63.21 80.3C63.35 80.16 63.4667 80.02 63.56 79.88C63.6533 79.74 63.8633 79.5767 64.19 79.39C64.5167 79.2033 64.82 79.04 65.1 78.9C65.38 78.76 65.8233 78.55 66.43 78.27C67.0367 77.99 67.62 77.7333 68.18 77.5C68.74 77.2667 69.4867 76.9167 70.42 76.45C71.3533 75.9833 72.2867 75.5167 73.22 75.05L63.7 70.5C63.28 70.08 63.07 69.5433 63.07 68.89C63.07 68.19 63.28 67.6067 63.7 67.14C64.12 66.6733 64.68 66.4167 65.38 66.37C65.7533 66.37 66.1733 66.51 66.64 66.79C67.1067 67.07 68.39 68.0033 70.49 69.59L74.55 72.53Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  8852: function(t, e, i) {
    t.exports = i.p + "img/screenShare.fb98996c.jpeg";
  },
  "8a96": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-大括号",
        use: "icon-大括号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-大括号">\n<g clip-path="url(#icon-大括号_clip0_558:183)">\n<path d="M49.7271 114.457C49.7271 115.15 49.5672 115.656 49.2473 115.976H47.8077C40.9297 115.976 36.1311 114.217 33.4119 110.698C33.1453 110.324 32.9321 110.005 32.7721 109.738C32.6122 109.471 32.4789 109.178 32.3722 108.858C32.2656 108.538 32.159 108.192 32.0523 107.818C31.9457 107.445 31.8924 107.045 31.8924 106.619C31.8924 106.192 31.8657 105.606 31.8124 104.859C31.7591 104.113 31.7324 103.393 31.7324 102.7C31.7324 102.007 31.7324 101.02 31.7324 99.7409C31.7324 98.4612 31.7324 97.2083 31.7324 95.982C31.7324 94.8623 31.7324 93.4494 31.7324 91.7432C31.6791 86.9979 31.5458 84.3321 31.3325 83.7456C31.2792 83.6923 31.2526 83.6389 31.2526 83.5856C30.5061 81.6662 29.1732 80.1733 27.2537 79.1069C25.3343 78.0406 23.4415 77.5074 21.5754 77.5074C20.9889 77.5074 20.6157 77.4274 20.4557 77.2675C20.2958 77.1075 20.2158 76.681 20.2158 75.9879C20.2158 75.2947 20.2958 74.8682 20.4557 74.7082C20.6157 74.5483 20.9889 74.4683 21.5754 74.4683C23.3882 74.4683 25.2543 73.9351 27.1738 72.8688C29.0932 71.8024 30.4528 70.3095 31.2526 68.3901C31.5192 67.8036 31.6525 66.9505 31.6525 65.8309C31.6525 64.7112 31.6791 60.659 31.7324 53.6744V49.6756C31.7324 46.7431 31.8924 44.6904 32.2123 43.5174C32.5322 42.3444 33.3053 41.2248 34.5316 40.1584C35.9179 38.7722 38.0506 37.6525 40.9297 36.7994C42.9025 36.3729 44.3154 36.1329 45.1685 36.0796C45.2751 36.0796 45.6217 36.0796 46.2082 36.0796C46.7947 36.0796 47.2745 36.053 47.6477 35.9996H49.2473C49.5672 36.3196 49.7271 36.7994 49.7271 37.4392C49.7271 38.1324 49.6472 38.5589 49.4872 38.7188C49.3806 38.8788 48.954 38.9588 48.2076 38.9588C45.3817 39.1187 43.1691 39.7585 41.5695 40.8782C39.97 41.9979 39.0103 43.1176 38.6904 44.2372C38.4238 44.9304 38.2905 48.8759 38.2905 56.0737V62.6318C38.2905 65.1377 38.2105 66.8439 38.0506 67.7503C37.8906 68.6567 37.4374 69.6964 36.691 70.8694C35.0381 73.162 32.7188 74.7349 29.733 75.588L28.6133 75.9879L29.733 76.3877C30.6927 76.7076 31.6525 77.1075 32.6122 77.5874C33.5719 78.0672 34.6916 78.9736 35.9712 80.3066C37.2508 81.6395 37.9972 83.2124 38.2105 85.0252C38.2638 85.3451 38.2905 88.9707 38.2905 95.902C38.2905 103.1 38.4238 107.045 38.6904 107.739C39.2236 109.178 40.3699 110.378 42.1294 111.337C43.8888 112.297 45.9149 112.857 48.2076 113.017C48.954 113.017 49.3806 113.097 49.4872 113.257C49.6472 113.417 49.7271 113.817 49.7271 114.457Z" fill="black" />\n<rect x="58.7" y="43.6998" width="32.6" height="55.4" stroke="#F35A5A" />\n<path d="M100.193 37.5192C100.193 36.7727 100.273 36.3462 100.433 36.2396C100.593 36.1329 101.126 36.053 102.033 35.9996C106.458 35.9996 109.87 36.6661 112.27 37.9991C114.669 39.332 116.348 40.7982 117.308 42.3978C117.788 43.5174 118.055 44.4505 118.108 45.1969C118.161 45.9434 118.214 49.5157 118.268 55.9138C118.321 63.3249 118.374 67.1638 118.428 67.4304C119.121 69.8297 120.507 71.5892 122.587 72.7088C124.666 73.8285 126.585 74.415 128.345 74.4683C128.931 74.4683 129.305 74.5483 129.464 74.7082C129.624 74.8682 129.704 75.2947 129.704 75.9879C129.704 76.681 129.624 77.1075 129.464 77.2675C129.305 77.4274 128.931 77.5074 128.345 77.5074C126.372 77.5074 124.453 78.0672 122.587 79.1869C120.72 80.3066 119.467 81.7195 118.828 83.4257C118.561 84.1721 118.401 85.1318 118.348 86.3048C118.294 87.4778 118.268 91.45 118.268 98.2213V102.3C118.268 105.233 118.108 107.285 117.788 108.458C117.468 109.631 116.695 110.751 115.469 111.817C112.589 114.59 108.137 115.976 102.113 115.976C101.153 115.976 100.593 115.896 100.433 115.736C100.273 115.576 100.193 115.123 100.193 114.377C100.193 114.057 100.193 113.87 100.193 113.817C100.193 113.763 100.22 113.63 100.273 113.417C100.326 113.204 100.406 113.097 100.513 113.097C100.62 113.097 100.833 113.07 101.153 113.017C101.899 113.017 102.726 112.937 103.632 112.777C104.539 112.617 105.552 112.35 106.671 111.977C107.791 111.604 108.777 110.991 109.63 110.138C110.483 109.285 111.123 108.272 111.55 107.099C111.603 106.832 111.656 103.047 111.71 95.742L111.79 84.8652C112.483 81.8261 114.349 79.4002 117.388 77.5874C119.254 76.681 120.587 76.1478 121.387 75.9879C120.054 75.6146 118.721 75.0815 117.388 74.3883C114.456 72.5755 112.643 70.3895 111.95 67.8303L111.79 67.0305L111.71 56.1537C111.656 48.8492 111.603 45.0636 111.55 44.797C110.91 42.6643 109.497 41.1715 107.311 40.3184C105.125 39.4653 103.072 39.0121 101.153 38.9588C100.673 38.9588 100.406 38.8788 100.353 38.7188C100.3 38.5589 100.246 38.159 100.193 37.5192Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-大括号_clip0_558:183">\n<rect width="120" height="79.9764" fill="white" transform="translate(15 36)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  "8c7f": function(t, e, i) {
    "use strict";
    i("3605");
  },
  "8cad": function(t, e) {
    t.exports = require("util");
  },
  "8e57": function(t, e) {
    t.exports = require("os");
  },
  "8e95": function(t, e, i) {
    "use strict";
    i("e26f");
  },
  "8f0a": function(t, e, i) {
    "use strict";
    i("deac");
  },
  9052: function(t, e, i) {
    "use strict";
    var n = i("b775"),
      o = i("da71");

    function s(t) {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/avatar/change",
        method: "post",
        data: t,
      });
    }

    function a(t) {
      return Object(n["a"])({
        url: `${o["a"].EXAM}/candidate/confirm?${t}`,
        method: "get",
      });
    }

    function c() {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/info",
        method: "get",
      });
    }

    function r(t) {
      return Object(n["a"])({
        url: `${o["a"].EXAM}/candidate/invite/${t}`,
        method: "get",
      });
    }

    function l(t) {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/login",
        method: "post",
        data: t,
      });
    }

    function d(t) {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/update",
        method: "post",
        data: t,
      });
    }

    function u() {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/validate_code",
        method: "get",
      });
    }

    function h() {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/next/login",
        method: "POST",
      });
    }

    function f() {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/client/version",
        method: "get",
      });
    }

    function m(t) {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/ct/login",
        method: "post",
        data: t,
      });
    }

    function C(t) {
      return Object(n["a"])({
        url: o["a"].EXAM + "/candidate/direct/login",
        method: "post",
        data: t,
      });
    }
    e["a"] = {
      imageValidationCode: u,
      login: l,
      memberInfo: c,
      memberInfoUpdate: d,
      avatarUpdate: s,
      getCandidateInfo: r,
      candidateConfirm: a,
      nextLogin: h,
      getClientVersion: f,
      getExamToken: m,
      directLogin: C,
    };
  },
  "93eb": function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-乘号",
        use: "icon-乘号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-乘号">\n<g clip-path="url(#icon-乘号_clip0_561:221)">\n<path d="M99.7738 98.4896C99.7738 99.8601 99.0543 100.545 97.6152 100.545C97.2726 100.545 96.5188 99.9972 95.3538 98.9007C94.1888 97.8043 90.968 94.6178 85.6914 89.3411L75.0011 78.6508L64.208 89.4439C56.9441 96.5708 53.2093 100.203 53.0037 100.34C52.7296 100.477 52.4898 100.545 52.2842 100.545C51.736 100.545 51.2563 100.34 50.8451 99.9287C50.434 99.5175 50.1941 99.0378 50.1256 98.4896C50.1256 98.0099 50.6053 97.2561 51.5647 96.2282C52.524 95.2003 55.7448 91.9452 61.2271 86.463L71.9174 75.7727L61.2271 65.0824C55.6763 59.5316 52.4555 56.2766 51.5647 55.3172C50.6738 54.3578 50.1941 53.604 50.1256 53.0558C50.1256 52.439 50.3312 51.9593 50.7423 51.6167C51.1535 51.2741 51.6675 51.1028 52.2842 51.1028C52.6268 51.1028 52.8667 51.137 53.0037 51.2055C53.2093 51.3426 56.9441 54.9746 64.208 62.1014L75.0011 72.8945L85.6914 62.2042C90.968 56.9276 94.1888 53.7411 95.3538 52.6446C96.5188 51.5482 97.2726 51 97.6152 51C99.0543 51 99.7738 51.6852 99.7738 53.0558C99.7738 53.5355 99.4312 54.1522 98.7459 54.906C98.0606 55.6598 94.7028 59.0177 88.6724 64.9796L77.982 75.7727L88.6724 86.5658C94.4287 92.3221 97.718 95.6457 98.5403 96.5365C99.3627 97.4274 99.7738 98.0784 99.7738 98.4896Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-乘号_clip0_561:221">\n<rect width="80" height="49.5455" fill="white" transform="translate(35 51)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  9773: function(t, e, i) {
    "use strict";
    var n = function() {
        var t = this,
          e = t._self._c;
        return e(
          "el-dialog", {
            attrs: {
              "modal-append-to-body": !1,
              title: t.title,
              visible: t.visible,
              width: t.width,
              modal: t.showModal,
              "before-close": t.before_close,
              "close-on-click-modal": !1,
              "close-on-press-escape": !1,
              "custom-class": t.customClass,
              "show-close": t.show_close,
            },
            on: {
              "update:visible": function(e) {
                t.visible = e;
              },
              close: t.close,
            },
          },
          [
            e("div", {
              staticClass: "slot-container"
            }, [t._t("default")], 2),
            t.isShowFooter ?
            e(
              "span", {
                staticClass: "dialog-footer",
                attrs: {
                  slot: "footer"
                },
                slot: "footer",
              },
              [
                e(
                  "el-button", {
                    staticClass: "known-button",
                    attrs: {
                      type: "danger",
                      plain: "",
                      disabled: t.disabled,
                    },
                    on: {
                      click: t.cancel
                    },
                  },
                  [t._v(t._s(t.btn_title || "我知道了"))],
                ),
                t.showSecond ?
                e(
                  "el-button", {
                    staticClass: "known-button",
                    attrs: {
                      type: "danger",
                      plain: "",
                      disabled: t.disabled2,
                    },
                    on: {
                      click: t.ok
                    },
                  },
                  [t._v(t._s(t.btn_title2 || "我知道了"))],
                ) :
                t._e(),
              ],
              1,
            ) :
            t._e(),
          ],
        );
      },
      o = [],
      s = {
        name: "DialogExample",
        props: {
          title: String,
          btn_title: String,
          btn_title2: String,
          disabled: {
            type: Boolean,
            default: !1
          },
          disabled2: {
            type: Boolean,
            default: !1
          },
          dialogVisible: {
            type: Boolean,
            default: !1
          },
          show_close: {
            type: Boolean,
            default: !0
          },
          width: {
            type: String,
            default: "430px"
          },
          isShowFooter: {
            type: Boolean,
            default: !0
          },
          showSecond: {
            type: Boolean,
            default: !1
          },
          before_close: {
            type: Function
          },
          customClass: {
            type: String,
            require: !1
          },
          showModal: {
            type: Boolean,
            default: !1
          },
        },
        data() {
          return {
            visible: !1
          };
        },
        watch: {
          visible() {
            !1 === this.visible && this.$emit("close");
          },
          dialogVisible() {
            this.visible !== this.dialogVisible &&
              (this.visible = this.dialogVisible);
          },
        },
        methods: {
          cancel() {
            this.$emit("dialog-cancel");
          },
          ok() {
            this.$emit("dialog-ok");
          },
          close() {
            this.visible = !1;
          },
        },
      },
      a = s,
      c = (i("db43"), i("2877")),
      r = Object(c["a"])(a, n, o, !1, null, "d4b2afc6", null);
    e["a"] = r.exports;
  },
  9855: function(t, e, i) {
    t.exports = i.p + "img/logo_igp.7346689b.png";
  },
  "9b0f": function(t, e) {
    t.exports = require("fs");
  },
  a18c: function(t, e, i) {
    "use strict";
    var n = i("a649"),
      o = i("2b0e"),
      s = i("8c4f"),
      a = i("4360"),
      c = i("5f87"),
      r = i("ca28"),
      l = i("fdfd"),
      d = function() {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      u = [
        function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "direct-login"
          }, [
            e("div", {
              staticClass: "loading-spinner"
            }),
            e("p", [t._v("正在登录,请稍候...")]),
          ]);
        },
      ],
      h = (i("14d9"), i("9052")),
      f = {
        name: "DirectLogin",
        mounted() {
          this.handleDirectLogin();
        },
        methods: {
          async handleDirectLogin() {
            try {
              const t = this.$route.query;
              console.log("queryParams", t);
              const e = await h["a"].directLogin(t);
              if (0 === e.code) {
                const {
                  token: t,
                  examShortId: i
                } = e.data;
                this.$router.push({
                  path: "/login",
                  query: {
                    token: t,
                    shortId: i
                  },
                });
              } else
                30003 === e.code && this.$message.error("您的考试已经结束！");
            } catch (t) {
              console.error("登录失败:", t);
            }
          },
        },
      },
      m = f,
      C = (i("db54"), i("2877")),
      p = Object(C["a"])(m, d, u, !1, null, "d6a2a8bc", null),
      g = p.exports;
    o["default"].use(s["a"]);
    const b = function(t, e) {
        if (
          (Object(n["a"])(this, this),
            l["a"].includes(t.name) &&
            "Login" !== t.name &&
            "PublicLogin" !== t.name)
        )
          return;
        const i = Object(r["a"])(),
          o = i.shell ? i.shellVs : Number(i.supporterVs),
          s = i.shell ? Number(i.shell) : i.supporter;
        ("chrome" !== s || o <= 80) && e("/broswerCompatibility");
      }.bind(void 0),
      w = [{
          path: "/",
          redirect: "/login"
        },
        {
          path: "/login",
          name: "Login",
          meta: {
            depth: 1
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("login").then(i.bind(null, "57de"))
            );
          }.bind(void 0),
        },
        {
          path: "/deviceDetection",
          name: "DeviceDetection",
          component: function() {
            return (
              Object(n["a"])(this, this),
              Promise.all([
                i.e("complete~confirmExam~detect~deviceDetection~question"),
                i.e("complete~deviceDetection~question"),
                i.e("deviceDetection"),
              ]).then(i.bind(null, "ba0e"))
            );
          }.bind(void 0),
        },
        {
          path: "/basic",
          name: "ConfirmBasic",
          meta: {
            depth: 2
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("confirmBasic").then(i.bind(null, "7e5e"))
            );
          }.bind(void 0),
        },
        {
          path: "/camera",
          name: "ConfirmCamera",
          meta: {
            depth: 3
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("confirmCamera").then(i.bind(null, "cf1b"))
            );
          }.bind(void 0),
        },
        {
          path: "/face",
          name: "FaceRecognition",
          meta: {
            depth: 3
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("faceRecognition").then(i.bind(null, "aa51"))
            );
          }.bind(void 0),
        },
        {
          path: "/notice",
          name: "ConfirmNotice",
          meta: {
            depth: 5
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("confirmNotice").then(i.bind(null, "e13b"))
            );
          }.bind(void 0),
        },
        {
          path: "/exam",
          name: "ConfirmExam",
          meta: {
            depth: 6
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              Promise.all([
                i.e("complete~confirmExam~detect~deviceDetection~question"),
                i.e("chunk-1949d1aa"),
                i.e("confirmExam~question"),
                i.e("confirmExam"),
              ]).then(i.bind(null, "5d31"))
            );
          }.bind(void 0),
        },
        {
          path: "/question",
          name: "Question",
          meta: {
            depth: 7
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              Promise.all([
                i.e("complete~confirmExam~detect~deviceDetection~question"),
                i.e("chunk-1949d1aa"),
                i.e("complete~deviceDetection~question"),
                i.e("confirmExam~question"),
                i.e("question"),
              ]).then(i.bind(null, "070e"))
            );
          }.bind(void 0),
        },
        {
          path: "/mobile",
          name: "PhoneMonitor",
          meta: {
            depth: 4
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("phoneMonitor").then(i.bind(null, "6df8"))
            );
          }.bind(void 0),
        },
        {
          path: "/complete",
          name: "Complete",
          meta: {
            depth: 8
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              Promise.all([
                i.e("complete~confirmExam~detect~deviceDetection~question"),
                i.e("complete~deviceDetection~question"),
                i.e("complete"),
              ]).then(i.bind(null, "1367c"))
            );
          }.bind(void 0),
        },
        {
          path: "/device",
          name: "Device",
          meta: {
            depth: 8
          },
          component: function() {
            return (
              Object(n["a"])(this, this),
              Promise.all([
                i.e("complete~confirmExam~detect~deviceDetection~question"),
                i.e("complete~deviceDetection~question"),
                i.e("complete"),
              ]).then(i.bind(null, "4fc0"))
            );
          }.bind(void 0),
        },
        {
          path: "/broswerCompatibility",
          name: "BroswerCompatibility",
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("broswerCompatibility").then(i.bind(null, "ae75"))
            );
          }.bind(void 0),
        },
        {
          path: "/faceReturn",
          name: "FaceReturn",
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("faceReturn").then(i.bind(null, "e9de"))
            );
          }.bind(void 0),
        },
        {
          path: "/faceReturnErr",
          name: "FaceReturnErr",
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("faceReturnErr").then(i.bind(null, "f158"))
            );
          }.bind(void 0),
        },
        {
          path: "/QA",
          name: "QA",
          component: function() {
            return (
              Object(n["a"])(this, this), i.e("QA").then(i.bind(null, "ccd5"))
            );
          }.bind(void 0),
        },
        {
          path: "/QAClient",
          name: "QAClient",
          component: function() {
            return (
              Object(n["a"])(this, this), i.e("QA").then(i.bind(null, "8f69"))
            );
          }.bind(void 0),
        },
        {
          path: "/QAClient2",
          name: "QAClient2",
          component: function() {
            return (
              Object(n["a"])(this, this), i.e("QA").then(i.bind(null, "5c08"))
            );
          }.bind(void 0),
        },
        {
          path: "/invite",
          name: "ExamInvite",
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("invite").then(i.bind(null, "1c60"))
            );
          }.bind(void 0),
        },
        {
          path: "/confirm",
          name: "confirm",
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("confirm").then(i.bind(null, "3942"))
            );
          }.bind(void 0),
          children: [{
              path: "refuse",
              name: "refuse",
              component: function() {
                return (
                  Object(n["a"])(this, this),
                  i.e("refuse").then(i.bind(null, "a72d"))
                );
              }.bind(void 0),
            },
            {
              path: "consider",
              name: "consider",
              component: function() {
                return (
                  Object(n["a"])(this, this),
                  i.e("consider").then(i.bind(null, "38f2"))
                );
              }.bind(void 0),
            },
            {
              path: "success",
              name: "success",
              component: function() {
                return (
                  Object(n["a"])(this, this),
                  i.e("success").then(i.bind(null, "67a2"))
                );
              }.bind(void 0),
            },
            {
              path: "/publiclogin",
              name: "PublicLogin",
              component: function() {
                return (
                  Object(n["a"])(this, this),
                  i.e("publicLogin").then(i.bind(null, "8536a"))
                );
              }.bind(void 0),
            },
            {
              path: "/detect",
              name: "Detect",
              component: function() {
                return (
                  Object(n["a"])(this, this),
                  Promise.all([
                    i.e("complete~confirmExam~detect~deviceDetection~question"),
                    i.e("detect"),
                  ]).then(i.bind(null, "49c7"))
                );
              }.bind(void 0),
            },
            {
              path: "/welcome",
              name: "Welcome",
              component: function() {
                return (
                  Object(n["a"])(this, this),
                  i.e("welcome").then(i.bind(null, "6928"))
                );
              }.bind(void 0),
            },
          ],
        },
        {
          path: "/mobile",
          name: "Mobile",
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("confirm").then(i.bind(null, "cc49"))
            );
          }.bind(void 0),
          children: [{
            path: "login",
            name: "MobileLogin",
            component: function() {
              return (
                Object(n["a"])(this, this),
                i.e("refuse").then(i.bind(null, "f7d8"))
              );
            }.bind(void 0),
          }, ],
        },
        {
          path: "/telecom",
          name: "Telecom",
          component: function() {
            return (
              Object(n["a"])(this, this),
              i.e("chunk-2816c630").then(i.bind(null, "c9e8"))
            );
          }.bind(void 0),
        },
        {
          path: "/test",
          name: "Test",
          component: function() {
            return (
              Object(n["a"])(this, this),
              Promise.all([i.e("chunk-1949d1aa"), i.e("chunk-5fcbaa37")]).then(
                i.bind(null, "feda"),
              )
            );
          }.bind(void 0),
        },
        {
          path: "/directLogin",
          name: "DirectLogin",
          component: g
        },
      ],
      v = new s["a"]({
        mode: "hash",
        base: "app://./",
        routes: w,
        scrollBehavior(t, e, i) {
          return {
            x: 0,
            y: 0
          };
        },
      });
    v.beforeEach(
      async function(t, e, i) {
        Object(n["a"])(this, this),
          b(t, i),
          a["a"].getters.token ?
          "/login" === t.path || "/publiclogin" === t.path ?
          (Object(c["b"])(), i()) :
          i() :
          -1 !== l["a"].indexOf(t.name) ?
          i() :
          i("/login?redirect=" + t.path);
      }.bind(void 0),
    );
    e["a"] = v;
  },
  b0c2: function(t, e) {
    t.exports = require("clipboard");
  },
  b556: function(t, e, i) {
    "use strict";
    var n = function() {
        var t = this,
          e = t._self._c;
        return e(
          "div", {
            staticClass: "dialogue-main"
          },
          [
            e(
              "el-dialog", {
                attrs: {
                  title: "常见问题回答",
                  visible: t.centerDialogVisible,
                  width: "900px",
                  modal: !1,
                  "custom-class": "custom-dialog",
                  center: "",
                },
                on: {
                  "update:visible": function(e) {
                    t.centerDialogVisible = e;
                  },
                },
              },
              [
                e(
                  "el-tabs", {
                    attrs: {
                      stretch: ""
                    },
                    on: {
                      "tab-click": t.handleClick
                    },
                    model: {
                      value: t.activeName,
                      callback: function(e) {
                        t.activeName = e;
                      },
                      expression: "activeName",
                    },
                  },
                  t._l(t.QA, function(i, n) {
                    return e(
                      "el-tab-pane", {
                        key: n,
                        attrs: {
                          label: i.title,
                          name: i.index
                        }
                      },
                      t._l(i.question, function(i, n) {
                        return e("div", {
                          key: n,
                          staticClass: "questions"
                        }, [
                          e("div", {
                            staticClass: "question"
                          }, [
                            e("i", {
                              staticClass: "ball red"
                            }),
                            t._v("问：" + t._s(i.Q)),
                          ]),
                          e("div", {
                            staticClass: "answer"
                          }, [
                            e("i", {
                              staticClass: "ball blue"
                            }),
                            t._v("答：" + t._s(i.A)),
                          ]),
                        ]);
                      }),
                      0,
                    );
                  }),
                  1,
                ),
              ],
              1,
            ),
            e("div", {
              staticClass: "dialogue-header"
            }, [
              t._m(0),
              e("div", [
                e(
                  "span", {
                    staticClass: "common-question",
                    on: {
                      click: t.getProblem
                    },
                  },
                  [t._v("常见问题")],
                ),
                e("i", {
                  staticClass: "iconfont iconguanbi1",
                  staticStyle: {
                    cursor: "pointer"
                  },
                  on: {
                    click: t.closeCustomer
                  },
                }),
              ]),
            ]),
            e(
              "div", {
                staticClass: "dialogue-contain",
                attrs: {
                  id: "dialogue_contain"
                },
              },
              t._l(t.messageList, function(i, n) {
                return e("div", {
                  key: n,
                  staticClass: "message"
                }, [
                  1 === i.type ?
                  e("p", {
                    staticClass: "dialogue-customer-contain"
                  }, [
                    e("span", {
                      staticClass: "dialogue-text dialogue-customer-text",
                      domProps: {
                        innerHTML: t._s(i.content)
                      },
                    }),
                  ]) :
                  e("p", {
                    staticClass: "dialogue-service-contain"
                  }, [
                    e("span", {
                      staticClass: "dialogue-text dialogue-service-text",
                      domProps: {
                        innerHTML: t._s(i.content)
                      },
                    }),
                  ]),
                ]);
              }),
              0,
            ),
            e("div", {
              staticClass: "dialogue-submit"
            }, [
              e(
                "div", {
                  staticClass: "top"
                },
                [
                  e(
                    "el-select", {
                      attrs: {
                        placeholder: "请选择问题类型"
                      },
                      model: {
                        value: t.category,
                        callback: function(e) {
                          t.category = e;
                        },
                        expression: "category",
                      },
                    },
                    t._l(t.dropMenuList, function(t) {
                      return e("el-option", {
                        key: t.value,
                        attrs: {
                          label: t.label + "问题",
                          value: t.value
                        },
                      });
                    }),
                    1,
                  ),
                ],
                1,
              ),
              e("div", {
                staticClass: "bottom"
              }, [
                e("textarea", {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.input,
                    expression: "input",
                  }, ],
                  staticClass: "dialogue-input-text",
                  attrs: {
                    id: "dialogue_input",
                    placeholder: "请输入您的问题。。。",
                  },
                  domProps: {
                    value: t.input
                  },
                  on: {
                    keyup: [
                      function(e) {
                        return (!e.type.indexOf("key") &&
                            t._k(e.keyCode, "enter", 13, e.key, "Enter")) ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          e.metaKey ?
                          null :
                          t.sendMessage.apply(null, arguments);
                      },
                      function(e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "enter", 13, e.key, "Enter") ?
                          null :
                          e.shiftKey ?
                          t.lineFeed() :
                          null;
                      },
                    ],
                    input: function(e) {
                      e.target.composing || (t.input = e.target.value);
                    },
                  },
                }),
                e(
                  "div", {
                    staticClass: "dialogue-input-tools",
                    on: {
                      click: t.sendMessage
                    },
                  },
                  [t._v(" 发送 ")],
                ),
              ]),
            ]),
          ],
          1,
        );
      },
      o = [
        function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "dialogue-service-info"
          }, [
            e("div", {
              staticClass: "dialogue-service-title"
            }, [
              e(
                "div", {
                  staticStyle: {
                    "font-size": "14px",
                    color: "#1e1e1e"
                  }
                },
                [t._v("在线咨询")],
              ),
            ]),
          ]);
        },
      ],
      s = i("a649"),
      a = (i("14d9"), i("192b")),
      c = i("fc5d"),
      r = i("4ec3"),
      l = i("d8ad"),
      d = {
        props: ["isOpen"],
        data() {
          return {
            centerDialogVisible: !1,
            QA: a["a"],
            input: "",
            messageList: [],
            category: null,
            activeName: "0",
            dropMenuList: [{
                value: 1,
                label: "登录"
              },
              {
                value: 2,
                label: "摄像头"
              },
              {
                value: 3,
                label: "系统使用"
              },
              {
                value: 4,
                label: "网络卡顿"
              },
              {
                value: 5,
                label: "考题"
              },
              {
                value: 7,
                label: "其他"
              },
              {
                value: 8,
                label: "人脸身份验证"
              },
            ],
          };
        },
        created() {
          (window.getProblem = this.getProblem), this.getMessageList();
        },
        mounted() {
          this.getMessageListMqtt();
        },
        methods: {
          handleClick(t, e) {
            console.log(t, e);
          },
          getProblem() {
            (this.activeName = this.category ?
              this.category > 5 ?
              String(this.category - 2) :
              String(this.category - 1) :
              "0"),
            (this.QA = this.$store.state.isPractice ? a["a"] : c["a"]),
            (this.centerDialogVisible = !0);
          },
          closeCustomer() {
            this.$emit("closeCustomer");
          },
          lineFeed() {
            this.input = this.input + "\n";
          },
          async sendMessage() {
            if (!this.input)
              return void this.$message.error("请输入问题内容！");
            this.messageList.push({
                content: this.input,
                type: 1
              }),
              1 === this.messageList.length &&
              this.messageList.push({
                content: '考生您好，您的提问已经收到，正排队处理中，为节省您的宝贵时间，建议您先查看<span style="color: #f35a5a;  font-weight: bold; cursor: pointer;" onclick="getProblem()">常见问题</span>回答！',
                type: 0,
                isRead: !0,
              });
            const t = await r["a"].sendMessage({
              content: this.input,
              category: this.category,
            });
            await this.messageRead(),
              0 === t.code ?
              ((this.input = ""), this.scrollToBottom()) :
              console.log("发送失败！！");
          },
          getMessageListMqtt() {
            l["a"].$on(
              "message",
              function(t) {
                Object(s["a"])(this, this),
                  2 === t.type &&
                  (this.messageList.push({
                      ...t,
                      isRead: null
                    }),
                    this.scrollToBottom(),
                    this.$emit("messageList", this.messageList));
              }.bind(this),
            );
          },
          async getMessageList() {
            const t = await r["a"].getMessageList({});
            this.isOpen && (await this.messageRead()),
              0 === t.code ?
              ((this.messageList = t.data || []),
                this.messageList.length >= 1 &&
                this.messageList.splice(1, 0, {
                  content: '考生您好，您的提问已经收到，正排队处理中，为节省您的宝贵时间，建议您先查看<span style="color: #f35a5a;  font-weight: bold; cursor: pointer;" onclick="getProblem()">常见问题</span>回答！',
                  type: 0,
                  isRead: !0,
                }),
                this.scrollToBottom()) :
              console.log("获取失败！！");
          },
          async messageRead() {
            await r["a"].messageRead({});
          },
          messageSendlisten(t) {
            t.shiftKey ||
              13 !== t.keyCode ||
              ((t.cancelBubble = !0),
                t.stopPropagation(),
                t.preventDefault(),
                this.sendMessage());
          },
          scrollToBottom() {
            const t = document.querySelector(".dialogue-contain");
            (function e() {
              const i = t.scrollTop,
                n = t.offsetHeight,
                o = t.scrollHeight;
              o - 10 > i + n &&
                (window.requestAnimationFrame(e),
                  t.scrollTo(0, i + 10 + (o - i - n) / 2));
            })();
          },
        },
      },
      u = d,
      h = (i("19d3"), i("2877")),
      f = Object(h["a"])(u, n, o, !1, null, "dd7bfcd2", null);
    e["a"] = f.exports;
  },
  b567: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-加号",
        use: "icon-加号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-加号">\n<g clip-path="url(#icon-加号_clip0_560:202)">\n<path d="M40.7593 77.5932C40.7593 77.5932 40.7593 77.1476 40.7593 76.2564C40.7593 75.3653 41.2392 74.6797 42.1989 74.1999H72.9444V58.7757L73.0472 43.3515C73.7328 42.4604 74.384 42.0148 75.001 42.0148C75.8921 42.0148 76.5777 42.5289 77.0575 43.5572V74.1999H107.7C108.728 74.7483 109.243 75.4338 109.243 76.2564C109.243 77.0791 108.728 77.7646 107.7 78.313H77.0575V108.956C76.5091 109.915 75.8921 110.395 75.2066 110.395H75.001H74.7953C73.9727 110.395 73.3557 109.915 72.9444 108.956V78.313H42.1989C41.2392 77.8331 40.7593 77.1476 40.7593 76.2564V77.5932Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-加号_clip0_560:202">\n<rect width="80" height="68.4091" fill="white" transform="translate(35 42)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  b775: function(t, e, i) {
    "use strict";
    i("0fb7"), i("450d");
    var n = i("f529"),
      o = i.n(n),
      s = (i("9e1f"), i("6ed5")),
      a = i.n(s),
      c = i("a649"),
      r = (i("14d9"), i("bc3a")),
      l = i.n(r),
      d = i("4360"),
      u = i("a18c"),
      h = i("5f87");
    const f = l.a.create({
      baseURL: "",
      timeout: 1e4
    });
    f.interceptors.request.use(
        function(t) {
          Object(c["a"])(this, this);
          const e = d["a"].getters.token;
          return e && (t.headers["Authorization"] = e), t;
        }.bind(void 0),
        function(t) {
          return Object(c["a"])(this, this), console.log(t), Promise.reject(t);
        }.bind(void 0),
      ),
      f.interceptors.response.use(
        function(t) {
          if (
            (Object(c["a"])(this, this),
              t.headers["content-type"] &&
              t.headers["content-type"].includes("text/html"))
          )
            return (
              a.a.confirm(
                "您的请求带有不合法参数，已被网站管理员设置拦截!",
                "安全狗提示", {
                  confirmButtonText: "确认",
                  cancelButtonText: "取消",
                  type: "warning",
                },
              ),
              t.data
            );
          const e = t.data;
          if (40002 === e.code) return e;
          if (1001 === e.code) return e;
          if (30010 === e.code) return e;
          if (30026 === e.code) return e;
          if (30023 === e.code) return e;
          if (30003 === e.code) return e;
          if (30055 === e.code) return e;
          const i = t.config.url.endsWith("/exam/finish");
          return 30024 !== e.code || i ?
            (30008 === e.code &&
              a.a.confirm(
                "用户登录异常！请记录当前题作答内容，退出系统并重新登录。",
                "登录异常", {
                  confirmButtonText: "确认",
                  cancelButtonText: "取消",
                  type: "warning",
                },
              ),
              e.code && 0 !== e.code ?
              (o()({
                  message: e.message || "出现了错误",
                  type: "error",
                  duration: 5e3,
                }),
                30024 === e.code && Object(h["b"])(),
                30121 === e.code ||
                30030 === e.code ||
                30001 === e.code ||
                10033 === e.code ||
                30027 === e.code ?
                e :
                1005 === e.code || 1031 === e.code || 1032 === e.code ?
                (a.a
                  .confirm("令牌过期，或者没有登录", "确认登出", {
                    confirmButtonText: "重新登录",
                    cancelButtonText: "取消",
                    type: "warning",
                  })
                  .then(
                    function() {
                      Object(c["a"])(this, this),
                        d["a"].commit("resetToken"),
                        u["a"].push("/login");
                    }.bind(this),
                  ),
                  e) :
                Promise.reject(e.message || "出现了错误")) :
              e) :
            (a.a.confirm(
                '<div>\n        <div style="font-size:18px;font-weight:bold;margin-bottom:10px;">密码错误或考试已结束</div>请务必从邮件或短信中复制粘贴最新的密码，不要使用浏览器自动保存的上一次考试的密码。如果密码无误，则该场考试已结束。\n        </div>',
                "登录异常", {
                  dangerouslyUseHTMLString: !0,
                  confirmButtonText: "确认",
                  callback: function(t) {
                    Object(c["a"])(this, this), u["a"].push("/login");
                  }.bind(this),
                  type: "warning",
                },
              ),
              e);
        }.bind(void 0),
        function(t) {
          return (
            Object(c["a"])(this, this),
            l.a.isCancel(t) ?
            console.log("已取消的重复请求：" + t.message) :
            String(t).includes("Network Error") &&
            o()({
              message: "网络错误!!",
              type: "error",
              duration: 5e3
            }),
            Promise.reject(t)
          );
        }.bind(void 0),
      ),
      (e["a"] = f);
  },
  b98d: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-π",
        use: "icon-π-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-π">\n<g clip-path="url(#icon-π_clip0_583:178)">\n<path d="M59.9007 98.5116C57.5155 98.5116 56.3229 97.3541 56.3229 95.039V93.8815L57.6909 90.9351C62.9524 79.8509 66.7758 70.2749 69.161 62.2073L70.0028 59.6818H66.6355C63.9696 59.6818 62.0755 59.787 60.953 59.9975C59.8306 60.2079 58.4626 60.8744 56.8491 61.9968C56.0774 62.4879 55.3057 63.1193 54.534 63.891C53.7623 64.6627 53.0959 65.3993 52.5347 66.1008C51.9734 66.8023 51.6577 67.2233 51.5876 67.3636C51.4473 67.4337 50.9211 67.4688 50.0091 67.4688C48.6762 67.4688 48.0098 67.118 48.0098 66.4165C48.0098 65.9956 48.6762 64.7679 50.0091 62.7335C51.342 60.699 53.2713 58.5243 55.7968 56.2092C58.3223 53.8941 60.8127 52.5612 63.2681 52.2105C63.7592 52.0702 71.6514 52 86.9448 52C98.1694 52 103.922 52.0351 104.203 52.1052C105.606 52.5963 106.307 53.5784 106.307 55.0517C106.307 57.2264 105.185 58.6996 102.94 59.4713C102.519 59.6116 100.099 59.6818 95.6789 59.6818H88.9442L88.6285 61.4707C87.7867 66.5217 87.3658 70.6958 87.3658 73.9931C87.3658 77.641 87.6815 80.9032 88.3128 83.7794C88.9442 86.6557 89.6107 88.9006 90.3122 90.5142C91.0137 92.1277 91.3645 93.1098 91.3645 93.4606C91.3645 94.6532 90.8734 95.7756 89.8913 96.8279C88.9091 97.8802 87.6464 98.4064 86.103 98.4064C85.3313 98.4064 84.6999 98.3012 84.2089 98.0907C83.7178 97.8802 83.1566 97.0384 82.5252 95.5652C81.8938 94.092 81.3326 91.9874 80.8415 89.2514C80.7714 88.62 80.7363 87.0766 80.7363 84.6213C80.7363 81.1838 81.052 77.5007 81.6833 73.5721C82.3147 69.6436 82.9461 66.4165 83.5775 63.891C84.2089 61.3655 84.5596 59.9624 84.6298 59.6818H74.3172L74.212 60.1027C74.212 60.3132 73.5456 63.0842 72.2127 68.4159C70.8797 73.7475 69.3714 79.3949 67.6878 85.3579C66.0041 91.3209 64.9167 94.7233 64.4256 95.5652C63.6539 97.5295 62.1457 98.5116 59.9007 98.5116Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-π_clip0_583:178">\n<rect width="60" height="46.5116" fill="white" transform="translate(46 52)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  ba09: function(t, e) {
    t.exports = require("tls");
  },
  bc0d: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-属于",
        use: "icon-属于-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-属于">\n<g clip-path="url(#icon-属于_clip0_581:17)">\n<path d="M53.5574 75.0838C53.5574 67.7684 56.0158 61.7722 60.9327 57.0952C65.8496 52.4181 71.6659 49.7498 78.3817 49.0903C78.4416 49.0903 78.9513 49.0903 79.9107 49.0903C80.8701 49.0903 82.1293 49.0603 83.6883 49.0003C85.2473 48.9403 86.7464 48.9403 88.1855 49.0003H97.0898C97.9893 49.48 98.439 50.0796 98.439 50.7992C98.439 51.3388 98.0492 51.9085 97.2697 52.5081L87.9156 52.598C81.2599 52.658 77.1525 52.8379 75.5934 53.1377C72.6553 53.8572 70.0469 54.9366 67.7684 56.3756C65.4898 57.8147 63.7209 59.2838 62.4617 60.7829C61.2025 62.2819 60.1232 63.9309 59.2238 65.7297C58.3244 67.5286 57.7847 68.9677 57.6048 70.047C57.4249 71.1263 57.275 72.1457 57.1551 73.1051V73.2849H97.0898C97.9893 73.7646 98.439 74.3643 98.439 75.0838C98.439 75.8033 97.9893 76.403 97.0898 76.8827H57.1551V77.0625C57.1551 78.3218 57.4549 79.8508 58.0545 81.6496C58.6542 83.4485 59.6435 85.3973 61.0227 87.4959C62.4018 89.5946 64.3206 91.5134 66.779 93.2523C69.2375 94.9912 72.1456 96.2204 75.5035 96.94C77.1225 97.2997 81.2599 97.5096 87.9156 97.5696H97.2697C98.0492 98.1692 98.439 98.7688 98.439 99.3684C98.439 100.088 97.9893 100.688 97.0898 101.167H88.3654C87.9456 101.167 87.1961 101.167 86.1168 101.167C85.0375 101.167 84.168 101.197 83.5084 101.257C74.2143 101.257 66.869 98.6789 61.4724 93.5221C56.1957 88.6052 53.5574 82.4591 53.5574 75.0838Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-属于_clip0_581:17">\n<rect width="60" height="52.167" fill="white" transform="translate(46 49)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  bc3d: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-反斜杠",
        use: "icon-反斜杠-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-反斜杠">\n<path d="M61.096 41.96L86.944 108.2H90.904L65.056 41.96H61.096Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  bdfb: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-度",
        use: "icon-度-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-度">\n<path d="M59.0432 52.9043C59.0432 49.2111 60.4411 45.9736 63.2369 43.1917C66.0326 40.4098 69.3925 39.0188 73.3163 39.0188C77.2402 39.0188 80.6001 40.3618 83.3958 43.0478C86.1916 45.7337 87.614 49.0672 87.663 53.0482C87.663 56.7894 86.2897 60.0509 83.543 62.8328C80.7962 65.6147 77.4119 67.0057 73.3899 67.0057C69.466 67.0057 66.1062 65.6387 63.3104 62.9048C60.5147 60.1708 59.0923 56.8374 59.0432 52.9043ZM73.0221 41.9686C70.2263 41.9686 67.7003 42.9758 65.444 44.9903C63.1878 47.0048 62.0597 49.6668 62.0597 52.9763C62.0597 56.1898 63.1633 58.8278 65.3705 60.8903C67.5777 62.9527 70.2508 64.0079 73.3899 64.0559C75.0576 64.0559 76.6026 63.7441 78.025 63.1206C79.4474 62.4971 80.4529 61.8735 81.0415 61.25C81.6301 60.6265 82.1451 60.0269 82.5865 59.4514C83.9599 57.6767 84.6466 55.5183 84.6466 52.9763C84.6466 49.9545 83.592 47.3645 81.4829 45.2061C79.3738 43.0478 76.5535 41.9686 73.0221 41.9686Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  c0d4: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-交集",
        use: "icon-交集-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-交集">\n<g clip-path="url(#icon-交集_clip0_581:50)">\n<path d="M53.9146 102.689C53.9146 102.689 53.5248 102.689 52.7451 102.689C51.9655 102.689 51.3658 102.269 50.946 101.429V82.8086C50.946 80.9495 50.946 78.5507 50.946 75.6122C51.006 67.5762 51.1559 63.1384 51.3958 62.2989C51.4558 62.1789 51.4858 62.089 51.4858 62.029C52.4453 57.8911 55.1739 54.3528 59.6717 51.4143C64.1694 48.4758 69.5667 47.0065 75.8636 47.0065C82.5203 47.0065 88.2174 48.6257 92.955 51.8641C97.6927 55.1024 100.331 59.2704 100.871 64.3678C100.931 64.7276 100.961 71.0545 100.961 83.3483V101.429C100.541 102.329 99.9415 102.779 99.1619 102.779C98.6222 102.779 98.0525 102.389 97.4528 101.609L97.2729 64.3678C96.8531 62.6887 96.4333 61.3693 96.0135 60.4098C95.5937 59.4503 94.7841 58.3708 93.5847 57.1714C91.7257 55.1324 89.2069 53.5432 86.0285 52.4038C82.8501 51.2644 79.5218 50.6647 76.0435 50.6047C71.066 50.6047 66.4183 51.8041 62.1005 54.2029C57.7826 56.6017 55.2939 60.1099 54.6342 64.7276C54.5742 65.0275 54.5442 71.2644 54.5442 83.4383V101.429C54.1245 102.269 53.5248 102.689 52.7451 102.689H53.9146Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-交集_clip0_581:50">\n<rect width="60" height="55.7853" fill="white" transform="translate(46 47)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  c2e2: function(t, e, i) {
    "use strict";
    i("cd8e");
  },
  c4a7: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-增量",
        use: "icon-增量-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-增量">\n<path d="M50.1414 99.9948L49.9356 99.8579C49.7984 99.8123 49.684 99.7439 49.5925 99.6527C49.501 99.5614 49.3867 99.4246 49.2494 99.2421C49.1122 99.0597 49.0436 98.8544 49.0436 98.6263C49.0436 98.4439 49.1122 98.2158 49.2494 97.9421C49.3867 97.6228 53.5723 89.8684 61.8062 74.6789C70.0402 59.4894 74.2258 51.8034 74.363 51.6209C74.363 51.5753 74.4088 51.5069 74.5003 51.4156C74.5918 51.3244 74.729 51.2332 74.912 51.142C75.0949 51.0507 75.2779 51.0051 75.4609 51.0051C75.7811 51.0051 76.0327 51.0963 76.2157 51.2788C76.3987 51.37 80.7215 59.2157 89.1842 74.8157L101.81 98.1474V98.6263C101.81 99.2193 101.489 99.6755 100.849 99.9948H50.1414ZM86.8512 76.2526L75.4609 55.3157C75.4152 55.3157 71.6184 62.2946 64.0706 76.2526C56.5228 90.2105 52.7489 97.2123 52.7489 97.2579H98.1729C98.1729 97.1667 94.399 90.1649 86.8512 76.2526Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  c6f0: function(t, e, i) {
    "use strict";
    i("206e");
  },
  c746: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-分数",
        use: "icon-分数-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-分数">\n<rect x="57.5" y="0.5" width="37" height="63" stroke="#F35A5A" />\n<rect x="57.5" y="87.5" width="37" height="63" stroke="#F35A5A" />\n<path d="M108.763 78.9308H43.2396V73.3145H108.763V78.9308Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  ca28: function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return o;
    });
    var n = i("a649");

    function o() {
      const t = navigator.userAgent.toLowerCase(),
        e = function(e) {
          return Object(n["a"])(this, this), e.test(t);
        }.bind(this),
        i = function(e) {
          return (
            Object(n["a"])(this, this),
            t
            .match(e)
            .toString()
            .replace(/[^0-9|_.]/g, "")
            .replace(/_/g, ".")
          );
        }.bind(this);
      let o = "unknow";
      e(/windows|win32|win64|wow32|wow64/g) ?
        (o = "windows") :
        e(/macintosh|macintel/g) ?
        (o = "macos") :
        e(/x11/g) ?
        (o = "linux") :
        e(/android|adr/g) ?
        (o = "android") :
        e(/ios|iphone|ipad|ipod|iwatch/g) && (o = "ios");
      let s = "unknow";
      "windows" === o
        ?
        e(/windows nt 5.0|windows 2000/g) ?
        (s = "2000") :
        e(/windows nt 5.1|windows xp/g) ?
        (s = "xp") :
        e(/windows nt 5.2|windows 2003/g) ?
        (s = "2003") :
        e(/windows nt 6.0|windows vista/g) ?
        (s = "vista") :
        e(/windows nt 6.1|windows 7/g) ?
        (s = "7") :
        e(/windows nt 6.2|windows 8/g) ?
        (s = "8") :
        e(/windows nt 6.3|windows 8.1/g) ?
        (s = "8.1") :
        e(/windows nt 10.0|windows 10/g) && (s = "10") :
        "macos" === o ?
        (s = i(/os x [-|\d._]+/g)) :
        "android" === o ?
        (s = i(/android [\d._]+/g)) :
        "ios" === o && (s = i(/os [\d._]+/g));
      let a = "unknow";
      "windows" === o || "macos" === o || "linux" === o ?
        (a = "desktop") :
        ("android" === o || "ios" === o || e(/mobile/g)) && (a = "mobile");
      let c = "unknow",
        r = "unknow";
      e(/applewebkit/g) ?
        ((c = "webkit"),
          e(/edg/g) ?
          (r = "edge") :
          e(/opr/g) ?
          (r = "opera") :
          e(/chrome/g) ?
          (r = "chrome") :
          e(/safari/g) && (r = "safari")) :
        e(/gecko/g) && e(/firefox/g) ?
        ((c = "gecko"), (r = "firefox")) :
        e(/presto/g) ?
        ((c = "presto"), (r = "opera")) :
        e(/trident|compatible|msie/g) &&
        ((c = "trident"), (r = "iexplore"));
      let l = "unknow";
      "webkit" === c
        ?
        (l = i(/applewebkit\/[\d._]+/g)) :
        "gecko" === c ?
        (l = i(/gecko\/[\d._]+/g)) :
        "presto" === c ?
        (l = i(/presto\/[\d._]+/g)) :
        "trident" === c && (l = i(/trident\/[\d._]+/g));
      let d = "unknow";
      "chrome" === r
        ?
        (d = i(/chrome\/[\d._]+/g)) :
        "safari" === r ?
        (d = i(/version\/[\d._]+/g)) :
        "firefox" === r ?
        (d = i(/firefox\/[\d._]+/g)) :
        "opera" === r ?
        (d = i(/opr\/[\d._]+/g)) :
        "iexplore" === r ?
        (d = i(/(msie [\d._]+)|(rv:[\d._]+)/g)) :
        "edge" === r && (d = i(/edg\/[\d._]+/g));
      let u = "none",
        h = "unknow";
      return (
        e(/micromessenger/g) ?
        ((u = "微信浏览器"), (h = i(/micromessenger\/[\d._]+/g))) :
        e(/qqbrowser/g) ?
        ((u = "QQ浏览器"), (h = i(/qqbrowser\/[\d._]+/g))) :
        e(/ucbrowser/g) ?
        ((u = "UC浏览器"), (h = i(/ucbrowser\/[\d._]+/g))) :
        e(/qihu 360se/g) ?
        (u = "360浏览器(无版本)") :
        e(/2345explorer/g) ?
        ((u = "2345浏览器"), (h = i(/2345explorer\/[\d._]+/g))) :
        e(/metasr/g) ?
        (u = "搜狗浏览器(无版本)") :
        e(/lbbrowser/g) ?
        (u = "猎豹浏览器(无版本)") :
        e(/maxthon/g) &&
        ((u = "遨游浏览器"), (h = i(/maxthon\/[\d._]+/g))),
        Object.assign({
            engine: c,
            engineVs: l,
            platform: a,
            supporter: r,
            supporterVs: d.split(".")[0],
            system: o,
            systemVs: s,
          },
          "none" === u ? {} : {
            shell: u,
            shellVs: h.split(".")[0]
          },
        )
      );
    }
  },
  cd8e: function(t, e, i) {},
  cf45: function(t, e, i) {
    "use strict";
    i.d(e, "d", function() {
        return s;
      }),
      i.d(e, "c", function() {
        return a;
      }),
      i.d(e, "b", function() {
        return c;
      }),
      i.d(e, "f", function() {
        return r;
      }),
      i.d(e, "e", function() {
        return l;
      }),
      i.d(e, "a", function() {
        return d;
      });
    i("a649"),
      i("2c66"),
      i("249d"),
      i("40e9"),
      i("907a"),
      i("986a"),
      i("1d02"),
      i("3c5d"),
      i("6ce5"),
      i("2834"),
      i("4ea1"),
      i("b7ef");
    var n = i("8e57"),
      o = i.n(n);

    function s(t, e) {
      if (null === t && null === e) return !0;
      if (!Array.isArray(t) || !Array.isArray(e)) return !1;
      if (t.length !== e.length) return !1;
      for (let i = 0; i < t.length; i++)
        if (t[i] !== e[i]) return !1;
      return !0;
    }

    function a(t, e) {
      var i = t.split(","),
        n = i[0].match(/:(.*?);/);
      if (!n) return;
      const o = n[1];
      var s = atob(i[1]),
        a = s.length,
        c = new Uint8Array(a);
      while (a--) c[a] = s.charCodeAt(a);
      return new File([c], e, {
        type: o
      });
    }

    function c(t, e, i) {
      var n,
        o = new FileReader();
      return (
        o.readAsDataURL(t),
        new Promise(function(t) {
          o.onload = function(o) {
            var s = new Image();
            (s.src = o.target.result),
            (s.onload = function() {
              var o,
                s = this.width,
                c = this.height,
                r = e.getContext("2d");
              e.setAttribute("width", s),
                e.setAttribute("height", c),
                r.drawImage(this, 0, 0, s, c),
                (o = e.toDataURL("image/jpg", 0.2)),
                (n = a(o, i)),
                t(n);
            });
          };
        })
      );
    }

    function r(t, e) {
      return Math.floor(Math.random() * (e - t) + t);
    }

    function l(t) {
      let e = parseInt(t),
        i = 0,
        n = 0;
      e > 60 &&
        ((i = parseInt(e / 60)),
          (e = parseInt(e % 60)),
          i > 60 && ((n = parseInt(i / 60)), (i = parseInt(i % 60))));
      let o = "";
      return (
        n > 0 && (o = (n < 10 ? "0" + n : n) + ":"),
        (o += (i < 10 ? "0" + i : i) + ":"),
        (o += "" + (e < 10 ? "0" + e : e)),
        o
      );
    }

    function d() {
      const t = o.a.release(),
        [e, i, n] = t.split(".").map(Number);
      return console.log(e, i, n), 10 === e && n >= 22e3;
    }
  },
  d2ef: function(t, e, i) {
    "use strict";
    var n = function() {
        var t = this,
          e = t._self._c;
        return e(
          "div", {
            staticClass: "header",
            style: "Question" === t.$route.name ?
              "box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);" :
              "",
          },
          [
            e(
              "GlobalDialog", {
                attrs: {
                  dialogVisible: t.showSubmitingDialog,
                  title: "交卷中",
                  width: "500px",
                  isShowFooter: !1,
                  show_close: !1,
                },
                on: {
                  "dialog-cancel": function(e) {
                    t.showSubmitingDialog = !1;
                  },
                },
              },
              [
                e("div", {
                  staticClass: "camera-snap-container"
                }, [
                  e("div", {
                    staticClass: "content"
                  }, [
                    e("i", {
                      staticClass: "iconfont icontishi"
                    }),
                    e("div", {
                      staticClass: "right"
                    }, [
                      e("span", {
                        staticClass: "title"
                      }, [
                        t._v("正在交卷中...."),
                      ]),
                      e("span", {
                        staticClass: "detail"
                      }, [t._v("请稍后！")]),
                    ]),
                  ]),
                ]),
              ],
            ),
            e(
              "GlobalDialog", {
                attrs: {
                  dialogVisible: t.showRemainMinutes,
                  title: "提示",
                  width: "500px",
                },
                on: {
                  "dialog-cancel": function(e) {
                    t.showRemainMinutes = !1;
                  },
                },
              },
              [
                e("div", {
                  staticClass: "camera-snap-container"
                }, [
                  e("div", {
                    staticClass: "content"
                  }, [
                    e("i", {
                      staticClass: "iconfont icontishi"
                    }),
                    e("div", {
                      staticClass: "right"
                    }, [
                      e("span", {
                        staticClass: "title"
                      }, [
                        t._v("作答时间剩余"),
                        e(
                          "span", {
                            staticStyle: {
                              color: "#f35a5a",
                              "font-size": "30px",
                            },
                          },
                          [t._v(" 5 ")],
                        ),
                        t._v("分钟"),
                      ]),
                      e("span", {
                        staticClass: "detail"
                      }, [
                        t._v("请掌控答题进度，及时交卷！"),
                      ]),
                    ]),
                  ]),
                ]),
              ],
            ),
            e(
              "GlobalDialog", {
                attrs: {
                  dialogVisible: t.showLogoutTips,
                  title: "提示",
                  width: "500px",
                  showSecond: !0,
                  show_close: !1,
                  btn_title: "取消",
                  btn_title2: "确认",
                },
                on: {
                  "dialog-cancel": function(e) {
                    t.showLogoutTips = !1;
                  },
                  "dialog-ok": t.logoutElectron,
                },
              },
              [
                e("div", {
                  staticClass: "camera-snap-container"
                }, [
                  e("div", {
                    staticClass: "content"
                  }, [
                    e("i", {
                      staticClass: "iconfont icontishi"
                    }),
                    e("div", {
                      staticClass: "right"
                    }, [
                      e("span", {
                        staticClass: "title"
                      }, [
                        t._v("确认退出系统？"),
                      ]),
                    ]),
                  ]),
                ]),
              ],
            ),
            e(
              "GlobalDialog", {
                attrs: {
                  dialogVisible: t.showScreenShare,
                  title: "录屏共享桌面提示",
                  width: "600px",
                  show_close: !1,
                  btn_title: "开始共享屏幕",
                },
                on: {
                  "dialog-cancel": t.screenShare
                },
              },
              [
                e("div", {
                  staticClass: "camera-snap-container"
                }, [
                  e("div", {
                    staticClass: "content screen-share"
                  }, [
                    e("span", {
                      staticClass: "title"
                    }, [
                      t._v(
                        "* 本场考试要求录制您的电脑，请根据浏览器提示共享您的电脑, 关闭录屏将会影响您的成绩。",
                      ),
                    ]),
                    e("img", {
                      staticStyle: {
                        width: "500px",
                        height: "auto",
                        top: "0",
                        transform: "translate(0)",
                      },
                      attrs: {
                        src: i("8852"),
                        alt: ""
                      },
                    }),
                  ]),
                ]),
              ],
            ),
            e(
              "GlobalDialog", {
                attrs: {
                  dialogVisible: t.showPhoneDetectError,
                  width: "500px",
                  show_close: !1,
                  title: "提示",
                },
                on: {
                  "dialog-cancel": t.closeQRErr
                },
              },
              [
                e("div", {
                  staticClass: "qr-tip"
                }, [
                  e(
                    "div", {
                      staticClass: "qr-container"
                    },
                    [
                      e("vue-qr", {
                        staticStyle: {
                          width: "150px",
                          height: "150px",
                          transform: "translateY(0)",
                          "max-width": "300px",
                        },
                        attrs: {
                          size: 800,
                          text: t.pagePath
                        },
                      }),
                      t.isFailure ?
                      e(
                        "div", {
                          staticClass: "refresh-qr"
                        },
                        [
                          e("span", {
                            staticClass: "failure"
                          }, [
                            t._v("二维码已失效"),
                          ]),
                          e(
                            "el-button", {
                              attrs: {
                                type: "danger"
                              },
                              on: {
                                click: t.refresh
                              },
                            },
                            [t._v("请点击刷新")],
                          ),
                        ],
                        1,
                      ) :
                      t._e(),
                    ],
                    1,
                  ),
                  e("div", {
                    staticClass: "right"
                  }, [
                    e("span", {
                      staticClass: "title red"
                    }, [
                      e("div", [t._v("手机端视频监控异常断开")]),
                    ]),
                    e("span", {
                      staticClass: "title"
                    }, [
                      t._v("请用微信扫码重连，15秒后状态恢复正常"),
                    ]),
                    e("span", {
                      staticClass: "content"
                    }, [
                      t._v(
                        "未开启视频监控，会影响考试结果。请关闭手机自动息屏，保持手机常亮！ ",
                      ),
                    ]),
                  ]),
                ]),
              ],
            ),
            e(
              "div", {
                staticClass: "header-container",
                style: t.isProgram ?
                  "width: 100%;padding: 0 20px" :
                  "width: 1230px",
              },
              [
                e("div", {
                  staticClass: "img-contaienr"
                }, [
                  t.logo ?
                  e("img", {
                    staticClass: "logo",
                    attrs: {
                      src: t.logo,
                      alt: "企业LOGO"
                    },
                  }) :
                  null === t.logo ?
                  e("img", {
                    staticClass: "logo",
                    attrs: {
                      src: i("9855"),
                      alt: "企业LOGO"
                    },
                  }) :
                  void 0 === t.logo ?
                  e("span") :
                  t._e(),
                ]),
                t.hasRight ?
                e("div", {
                  staticClass: "right"
                }, [
                  t.$store.state.showPc ?
                  e(
                    "div", {
                      staticClass: "detect-container pc-detect",
                      style: {
                        color: t.$store.state.pcDetect ?
                          "#666" :
                          "#cb2a1d",
                      },
                      on: {
                        click: function(e) {
                          t.showScreenShare = !0;
                        },
                      },
                    },
                    [
                      e("i", {
                        staticClass: "iconfont icondiannaoban",
                      }),
                      e("span", {
                        staticClass: "detecting"
                      }, [
                        t._v(
                          t._s(
                            t.$store.state.pcDetect ?
                            "正在监控" :
                            "监控异常",
                          ),
                        ),
                      ]),
                    ],
                  ) :
                  t._e(),
                  t.$store.state.showMobile && !t.showMobileIcon ?
                  e(
                    "div", {
                      staticClass: "detect-container mobile-detect",
                      style: {
                        color: t.$store.state.mobileDetect ?
                          "#666" :
                          "#cb2a1d",
                      },
                      on: {
                        mouseenter: t.displayQr,
                        mouseleave: function(e) {
                          t.showQr = !1;
                        },
                      },
                    },
                    [
                      t.showQr ?
                      e(
                        "div", {
                          staticClass: "qr"
                        },
                        [
                          e("vue-qr", {
                            staticStyle: {
                              width: "200px",
                              height: "160px",
                            },
                            attrs: {
                              size: 800,
                              text: t.pagePath
                            },
                          }),
                        ],
                        1,
                      ) :
                      t._e(),
                      e("i", {
                        staticClass: "iconfont iconshouji01"
                      }),
                      e("span", {
                        staticClass: "detecting"
                      }, [
                        t._v(
                          t._s(
                            t.initMobile ?
                            "未开启" :
                            t.$store.state.mobileDetect ?
                            "正在监控" :
                            "监控异常",
                          ),
                        ),
                      ]),
                    ],
                  ) :
                  t._e(),
                  t.$store.state.showCamera ?
                  e(
                    "div", {
                      staticClass: "detect-container",
                      style: {
                        color: t.$store.state.cameraDetect ?
                          "#666" :
                          "#cb2a1d",
                      },
                    },
                    [
                      t.$store.state.cameraDetect ?
                      e(
                        "svg", {
                          attrs: {
                            width: "127",
                            height: "75",
                            viewBox: "0 0 127 151",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                        [
                          e(
                            "g", {
                              attrs: {
                                id: "shexiangtou 1"
                              }
                            },
                            [
                              e("path", {
                                attrs: {
                                  id: "Vector",
                                  d: "M63.0996 126.199C28.3211 126.199 0 97.8781 0 63.0996C0 28.3211 28.3211 0 63.0996 0C97.8781 0 126.2 28.3209 126.2 63.0994C126.2 97.8779 97.8785 126.199 63.1 126.199L63.0996 126.199ZM63.0996 12.7111C35.3379 12.7111 12.7113 35.2869 12.7113 63.0996C12.7113 90.9123 35.2869 113.488 63.0996 113.488C90.9123 113.488 113.488 90.9123 113.488 63.0996C113.488 35.2869 90.8617 12.7113 63.0996 12.7113V12.7111Z",
                                  fill: "#666",
                                },
                              }),
                              e("path", {
                                attrs: {
                                  id: "Rectangle 2",
                                  d: "M56 113C56 113 58.5 113.5 63 113.5C67.5 113.5 70 113 70 113V141H56V113Z",
                                  fill: "#666",
                                },
                              }),
                              e("path", {
                                attrs: {
                                  id: "Vector_2",
                                  d: "M29.7447 138.097H96.4037V150.809H29.7447V138.097Z",
                                  fill: "#666",
                                },
                              }),
                              e("circle", {
                                attrs: {
                                  id: "cameras",
                                  cx: "64",
                                  cy: "63",
                                  r: "14",
                                  fill: "#666",
                                },
                              }),
                            ],
                          ),
                        ],
                      ) :
                      e("i", {
                        staticClass: "iconfont iconshexiangtou2",
                      }),
                      e("span", {
                        staticClass: "detecting"
                      }, [
                        t._v(
                          t._s(
                            t.$store.state.cameraDetect ?
                            "正在监控" :
                            "监控异常",
                          ),
                        ),
                      ]),
                    ],
                  ) :
                  t._e(),
                  t.isInPart && t.isPartTime ?
                  e(
                    "div", {
                      staticClass: "count-down-part-container"
                    },
                    [
                      e("span", {
                        staticClass: "count-down-title"
                      }, [
                        t._v(t._s("小卷倒计时")),
                      ]),
                      e("span", {
                        staticClass: "count-down"
                      }, [
                        t._v(
                          t._s(String(t.hourPart).padStart(2, "0")) +
                          ":" +
                          t._s(
                            String(t.minutePart).padStart(2, "0"),
                          ) +
                          ":" +
                          t._s(String(t.secondPart).padStart(2, "0")),
                        ),
                      ]),
                    ],
                  ) :
                  t._e(),
                  t.isInPart && t.isPartTime ?
                  t._e() :
                  e("div", {
                    staticClass: "count-down-container"
                  }, [
                    e("span", {
                      staticClass: "count-down-title"
                    }, [
                      t._v(t._s(t.flag ? "距考试结束" : "开考倒计时")),
                    ]),
                    e("div", [
                      t.day <= 0 ?
                      e("span", {
                        staticClass: "count-down"
                      }, [
                        t._v(
                          t._s(String(t.hour).padStart(2, "0")) +
                          ":" +
                          t._s(
                            String(t.minute).padStart(2, "0"),
                          ) +
                          ":" +
                          t._s(String(t.second).padStart(2, "0")),
                        ),
                      ]) :
                      e("span", {
                        staticClass: "count-down"
                      }, [
                        t._v(t._s(t.day) + " "),
                        e(
                          "span", {
                            staticStyle: {
                              "font-size": "14px"
                            }
                          },
                          [t._v("天")],
                        ),
                      ]),
                    ]),
                  ]),
                  e("div", {
                    staticClass: "personal-info-container"
                  }, [
                    e(
                      "div", {
                        ref: "avatar",
                        staticClass: "icon-container",
                        style: t.$store.state.showRedCard ?
                          "border: 2px solid #D95154" :
                          t.$store.state.showYellowCard ?
                          "border: 2px solid #FFDE3C" :
                          "border: 1px solid rgb(155, 155, 155)",
                      },
                      [
                        t.$store.state.userInfo.avatar ?
                        e("img", {
                          staticStyle: {
                            width: "60px",
                            height: "60px",
                          },
                          attrs: {
                            src: `${t.file_host}${t.$store.state.userInfo.avatar}?${t.avatarRandom}`,
                            alt: "",
                          },
                        }) :
                        e("i", {
                          staticClass: "iconfont iconyonghu8"
                        }),
                      ],
                    ),
                    e("div", {
                      staticClass: "info-right"
                    }, [
                      e("span", {
                        staticClass: "name"
                      }, [
                        t._v(t._s(t.$store.state.userInfo.realName)),
                      ]),
                      e(
                        "div", {
                          staticClass: "exit",
                          on: {
                            click: function(e) {
                              return t.logout();
                            },
                          },
                        },
                        [
                          e("i", {
                            staticClass: "iconfont icontuichu"
                          }),
                          e("span", {
                            staticClass: "exit-title"
                          }, [
                            t._v("退出"),
                          ]),
                        ],
                      ),
                    ]),
                  ]),
                ]) :
                t._e(),
              ],
            ),
          ],
          1,
        );
      },
      o = [],
      s = i("a649"),
      a = (i("14d9"), i("5f87")),
      c = i("cf45"),
      r = i("9773"),
      l = i("4ec3"),
      d = i("658f"),
      u = i.n(d),
      h = i("fdfd"),
      f = i("5d2d"),
      m = i("da71"),
      C = i("4360"),
      p = i("34bb"),
      g = i("d8ad");

    function b() {
      return new Worker(i.p + "js/time.worker.3e689523.worker.js");
    }

    function w() {
      return new Worker(i.p + "js/partTime.worker.60212728.worker.js");
    }
    var v = {
        name: "SimpleHeader",
        props: {
          hasRight: {
            type: Boolean,
            default: !0
          },
          isDetect: {
            type: Boolean,
            default: !1
          },
          isProgram: {
            type: Boolean,
            default: !1
          },
          companyInfo: {
            type: Object
          },
          time: {
            type: Object
          },
        },
        data() {
          return {
            isFlash: !0,
            hour: 0,
            minute: 0,
            second: 0,
            hourPart: 0,
            minutePart: 0,
            secondPart: 0,
            resetSec: 0,
            pagePath: "",
            file_host: m["b"],
            isInPart: !1,
            randomSubTime: 0,
            isPartTime: 2 === this.$store.state.jobInfo.timeRule,
            flag: !1,
            day: 0,
            showRemainMinutes: !1,
            showScreenShare: !1,
            showPhoneDetectError: !1,
            showLogoutTips: !1,
            isFailure: !1,
            logo: void 0,
            showQr: !1,
            qrTimer: null,
            isStart: null,
            mobileMonitor: 0 === this.$store.state.examInfo.mobileMonitorType,
            initMobile: !0,
            frontRouteName: [
              "ConfirmBasic",
              "ConfirmCamera",
              "FaceRecognition",
            ],
            showMobileIcon: !1,
            avatarRandom: Math.random(),
            partTime: 0,
            hasNextExam: !!this.$store.state.examInfo.nextExamUuid,
            timer: null,
            is_electron: !0,
            worker: null,
            partWorker: null,
            showSubmitingDialog: !1,
          };
        },
        components: {
          GlobalDialog: r["a"],
          VueQr: u.a
        },
        created() {
          this.getLogo();
        },
        beforeDestroy() {
          this.worker.postMessage("stop"),
            g["a"].$off("extendTime"),
            this.worker.terminate(),
            this.partWorker.terminate();
        },
        watch: {
          companyInfo() {
            const t = this.$route.query.shortId;
            t || this.getLogoWithToken();
          },
          "$store.state.examInfo.coverInfo.logo": {
            handler(t) {
              this.logo = t ? this.file_host + t + "?" + Math.random() : null;
            },
            immediate: !0,
          },
          "$store.state.userInfo.startedAt": {
            handler(t) {
              t && (this.isStart = !0);
            },
            immediate: !0,
            deep: !0,
          },
          $route(t, e) {
            "Question" === t.name ?
              (this.isInPart =
                "Question" === this.$route.name && this.isStart) :
              "PhoneMonitor" === t.name ?
              ((this.isInPart = !1), (this.showMobileIcon = !1)) :
              (this.isInPart = !1),
              "ConfirmExam" === e.name && this.handlePartExamCountDown(),
              "Question" === e.name &&
              "ConfirmExam" === t.name &&
              this.partWorker.postMessage("stop");
          },
        },
        async mounted() {
          g["a"].$on(
              "extendTime",
              function(t) {
                Object(s["a"])(this, this),
                  (this.resetSec = this.resetSec + 60 * Number(t) * 1e3);
              }.bind(this),
            ),
            (this.worker = new b()),
            (this.partWorker = new b(w)),
            (this.isStart = this.$store.state.userInfo.startedAt),
            (this.showMobileIcon = this.frontRouteName.includes(
              this.$route.name,
            ));
          const {
            examType: t,
            mobileMonitorType: e,
            mobileVideoType: i,
          } = this.$store.state.examInfo;
          this.getMobileDetectStatus(e, i);
          const n = 2 === t;
          this.init(n);
        },
        methods: {
          logout() {
            if (this.is_electron) return void(this.showLogoutTips = !0);
            Object(a["b"])();
            const t = 2 === this.$store.state.examInfo.fromType,
              e = Object(f["b"])("shortId"),
              i = Object(f["b"])("exam");
            (location.href = `/#/${t ? "publiclogin" : "login"}?shortId=${e}&${i ? "exam=" + i : ""}`),
            Object(f["a"])();
          },
          logoutElectron() {
            (this.showLogoutTips = !1), p["remote"].app.quit();
          },
          async getMobileDetectStatus(t, e) {
            if (h["a"].includes(this.$route.name)) return;
            this.getMobileDetectStatusMqtt();
            const {
              commit: i,
              state: n
            } = this.$store;
            if (0 === t) {
              if (0 !== e) {
                const t = await l["a"].checkMobile();
                if (0 === t.code) {
                  if (null === t.data)
                    return (
                      i("setShowMobile", !0),
                      i("setMobileDetect", !1),
                      void(this.initMobile = !0)
                    );
                  t.data ?
                    ((this.initMobile = !1),
                      i("setShowMobile", !0),
                      i("setMobileDetect", !0)) :
                    ((this.initMobile = !1),
                      n.mobileDetect && this.showMobileError(),
                      i("setShowMobile", !0),
                      i("setMobileDetect", !1));
                }
              }
            } else {
              const t = await l["a"].getOccupyStatus();
              if (0 === t.code)
                if (null !== t.data.isHolding) {
                  const e = t.data.isHolding,
                    o = t.data.duration;
                  (this.initMobile = !1),
                  i("setShowMobile", !0),
                    o > 30 ?
                    (i("setMobileDetect", !1),
                      n.mobileDetect && this.showMobileError()) :
                    (i("setMobileDetect", e),
                      e || (n.mobileDetect && this.showMobileError()));
                } else
                  i("setShowMobile", !0),
                  i("setMobileDetect", !1),
                  (this.initMobile = !0);
            }
          },
          getMobileDetectStatusMqtt() {
            const {
              commit: t
            } = this.$store;
            g["a"].$on(
              "message",
              function(e) {
                switch ((Object(s["a"])(this, this), e.type)) {
                  case 10:
                    (this.initMobile = !1),
                    t("setShowMobile", !0),
                      t("setMobileDetect", !0);
                    break;
                  case 11:
                    (this.initMobile = !1),
                    this.showMobileError(),
                      t("setShowMobile", !0),
                      t("setMobileDetect", !1);
                    break;
                  case 12:
                    (this.initMobile = !1),
                    "online" === e.content ?
                      (t("setShowMobile", !0), t("setMobileDetect", !0)) :
                      "offline" === e.content &&
                      (t("setShowMobile", !0), t("setMobileDetect", !1));
                    break;
                }
              }.bind(this),
            );
          },
          async init(t) {
            if (h["a"].includes(this.$route.name)) return;
            let e = !1;
            const {
              userInfo: i
            } = this.$store.state;
            e = 2 === i.type;
            const n = await l["a"].getTime(),
              o = n.data;
            (this.isStart = null !== o.candidateStartedAt),
            (this.isInPart = "Question" === this.$route.name && this.isStart),
            (this.randomSubTime = Object(c["f"])(5, 20)),
            (this.resetSec = 1e3 * o.secondToStart),
            "Question" === this.$route.name && this.handlePartExamCountDown(),
              (this.flag = !1);
            const {
              commit: a
            } = this.$store;
            a("setPractice", !0),
              this.worker.postMessage("start"),
              (this.worker.onmessage = function(i) {
                Object(s["a"])(this, this),
                  this.examCountDown(this.resetSec),
                  this.showRemainMinutesDialog(),
                  this.autoFinish(),
                  this.resetSec <= 0 &&
                  !this.flag &&
                  (!this.isStart && t ?
                    (this.resetSec = 0) :
                    ((this.flag = !0),
                      (this.resetSec = 1e3 * o.secondRemain)),
                    a("setPractice", !1)),
                  this.autoToNotice(e);
              }.bind(this));
          },
          async autoToNotice(t) {
            const e = this.$route.name,
              {
                commit: i
              } = this.$store;
            t
              ?
              i("setPractice", !1) :
              1e4 !== this.resetSec ||
              this.flag ||
              (i("setPractice", !1),
                ("Question" !== e && "ConfirmExam" !== e) ||
                this.$router.push({
                  path: "/notice"
                }));
          },
          async handlePartExamCountDown() {
            this.isInPart &&
              this.isPartTime &&
              (await this.getPartTime(),
                this.partWorker.postMessage("start"),
                (this.partWorker.onmessage = function(t) {
                  Object(s["a"])(this, this),
                    this.partExamCountDown(this.partTime);
                }.bind(this)));
          },
          partExamCountDown(t) {
            if (
              ((this.hourPart = parseInt((t / 3600) % 24)),
                (this.minutePart = parseInt((t / 60) % 60)),
                (this.secondPart = parseInt(t % 60)),
                t <= 0)
            )
              return (
                g["a"].$emit("saveCode", !1),
                setTimeout(
                  function() {
                    Object(s["a"])(this, this), g["a"].$emit("submit");
                  }.bind(this),
                  500,
                ),
                void this.partWorker.postMessage("stop")
              );
            this.partTime--;
          },
          async getPartTime() {
            const {
              partUuid: t
            } = this.$route.query;
            if (!this.isStart || !t) return;
            const e = await l["a"].getPartTime(t);
            if (0 === e.code) {
              const t = e.data;
              this.partTime = t;
            }
          },
          async examCountDown() {
            this.resetSec <= 0 ?
              (this.resetSec = 0) :
              ((this.resetSec -= 1e3),
                (this.day = parseInt(this.resetSec / 864e5)),
                (this.hour = parseInt((this.resetSec / 36e5) % 24)),
                (this.minute = parseInt((this.resetSec / 6e4) % 60)),
                (this.second = parseInt((this.resetSec / 1e3) % 60)));
          },
          showRemainMinutesDialog() {
            if (
              (3e5 === this.resetSec &&
                this.flag &&
                ((this.showRemainMinutes = !0),
                  setTimeout(
                    function() {
                      Object(s["a"])(this, this), (this.showRemainMinutes = !1);
                    }.bind(this),
                    5e3,
                  )),
                !this.isPartTime && this.resetSec <= 3e5 && this.flag)
            ) {
              const t = document.querySelector(".count-down-container"),
                e = document.querySelector(".count-down");
              (t.style.backgroundColor = "#f35a5a"),
              (t.style.color = "#fff"),
              (e.style.color = "#fff");
            }
          },
          async autoFinish() {
            if (
              0 === this.resetSec &&
              "Complete" !== this.$route.name &&
              this.flag
            ) {
              if (
                (this.worker.postMessage("stop"),
                  !this.$store.state.userInfo.startedAt)
              )
                return void(this.hasNextExam ?
                  await this.nextExam() :
                  this.$router.push("/complete"));
              "Question" === this.$route.name &&
                (console.log("交卷自动保存答案"),
                  g["a"].$emit("saveCode", !1),
                  await this.partFinish()),
                (this.showSubmitingDialog = !0),
                setTimeout(
                  async function() {
                      Object(s["a"])(this, this),
                        await this.examFinish(),
                        (this.showSubmitingDialog = !1);
                    }.bind(this),
                    1e3 * this.randomSubTime,
                );
            }
          },
          async nextExam() {
            const t = await l["a"].nextLogin();
            0 === t.code &&
              (C["a"].commit("setToken", t.data), this.$router.push("/basic"));
          },
          async examFinish() {
            const t = await l["a"].examFinish();
            0 === t.code ?
              this.hasNextExam ?
              await this.nextExam() :
              (this.$router.push("/complete"),
                console.log("自动交卷成功！！")) :
              (this.$router.push("/complete"),
                console.log("自动交卷失败！！"));
          },
          async partFinish() {
            const t = await l["a"].partFinish(this.$route.query.partUuid);
            0 === t.code && this.$router.push("/exam");
          },
          async showMobileError() {
            this.refreshQR(),
              await this.getMobileToken(),
              (this.showPhoneDetectError = !0);
          },
          closeQRErr() {
            (this.showPhoneDetectError = !1), clearTimeout(this.qrTimer);
          },
          async getLogo() {
            if (this.is_electron) return;
            const t = this.$route.query.shortId || Object(f["b"])("shortId");
            if (t && "undefined" !== t) {
              const e = await l["a"].getNameAndLogo({
                examShortId: t
              });
              if (0 === e.code) {
                const {
                  commit: t
                } = this.$store;
                if (
                  (t("setCompanyUuid", e.data.companyUuid), !e.data.companyLogo)
                )
                  return void(this.logo = null);
                this.logo =
                  this.file_host + e.data.companyLogo + "?" + Math.random();
              }
            } else this.logo = null;
          },
          async getLogoWithToken() {
            const {
              companyLogo: t,
              companyShortName: e
            } = this.companyInfo, {
              scenario: i
            } = this.$store.state.examInfo;
            (this.logo =
              null === t ? null : this.file_host + t + "?" + Math.random()),
            (document.title = e ? e + i + "系统-国考云" : "国考云在线考试");
          },
          async getMobileToken() {
            const t = await l["a"].getMobileToken();
            if (0 === t.code) {
              const e = "production",
                i = "https://exam.stac.fun?token=";
              this.pagePath = this.mobileMonitor ?
                `${i}${t.data}&Mtype=1&env=${e}` :
                `${i}${t.data}&Mtype=0&env=${e}`;
            }
          },
          async displayQr() {
            this.refreshQR(),
              await this.getMobileToken(),
              (this.showQr = !0),
              setTimeout(
                function() {
                  Object(s["a"])(this, this), (this.showQr = !1);
                }.bind(this),
                2e4,
              );
          },
          refreshQR() {
            (this.qrTimer = setTimeout(
              function() {
                Object(s["a"])(this, this),
                  (this.isFailure = !0),
                  clearTimeout(this.qrTimer);
              }.bind(this),
              6e4,
            )),
            this.$once(
              "hook:beforeDestroy",
              function() {
                Object(s["a"])(this, this), clearInterval(this.qrTimer);
              }.bind(this),
            );
          },
          async refresh() {
            await this.getMobileToken(),
              (this.isFailure = !1),
              this.refreshQR();
          },
          async calibrationTime() {
            const t = 18e5,
              e = setInterval(
                async function() {
                    Object(s["a"])(this, this);
                    const t = await l["a"].getTime(),
                      {
                        secondToStart: e,
                        secondRemain: i
                      } = t.data;
                    (this.resetSec = this.flag ? 1e3 * i : 1e3 * e),
                    console.log("两分钟时间同步校对");
                  }.bind(this),
                  t,
              );
            this.$once(
              "hook:beforeDestroy",
              function() {
                Object(s["a"])(this, this), clearInterval(e);
              }.bind(this),
            );
          },
          async partCalibrationTime() {
            if (!this.$route.query.partUuid) return void clearInterval(e);
            const t = 18e5,
              e = setInterval(
                async function() {
                    if ((Object(s["a"])(this, this), !this.$route.query.partUuid))
                      return void clearInterval(e);
                    const t = await l["a"].getPartTime(
                      this.$route.query.partUuid,
                    );
                    0 === t.code && (this.partTime = t.data),
                      console.log("两分钟小卷计时时间同步校对");
                  }.bind(this),
                  t,
              );
            this.$once(
              "hook:beforeDestroy",
              function() {
                Object(s["a"])(this, this), clearInterval(e);
              }.bind(this),
            );
          },
          screenShare() {
            (this.showScreenShare = !1), g["a"].$emit("screenShare");
          },
        },
      },
      x = v,
      y = (i("0c01"), i("2877")),
      M = Object(y["a"])(x, n, o, !1, null, "a67dcd2e", null);
    e["a"] = M.exports;
  },
  d550: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-中括号",
        use: "icon-中括号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-中括号">\n<g clip-path="url(#icon-中括号_clip0_558:171)">\n<path d="M36.1799 123.684V28.9996H49.1516V32.787H39.9673V119.896H49.1516V123.684H36.1799Z" fill="black" />\n<rect x="55.5002" y="38.0005" width="37.7501" height="62.7502" stroke="#F35A5A" />\n<path d="M100.754 32.787V28.9996H113.725V123.684H100.754V119.896H109.938V32.787H100.754Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-中括号_clip0_558:171">\n<rect width="100" height="94.684" fill="white" transform="translate(25 29)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  d80a: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-求根",
        use: "icon-求根-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-求根">\n<g clip-path="url(#icon-求根_clip0_557:115)">\n<rect x="91.5" y="49.5" width="37" height="63" stroke="#F35A5A" />\n<rect x="41.5" y="46.5" width="17" height="29" stroke="#F35A5A" />\n<path d="M25.274 89.3411C24.926 89.3411 24.5199 89.1091 24.0559 88.645C23.5918 88.181 23.3308 87.7749 23.2728 87.4269C23.2148 87.0789 24.1139 86.2088 25.9701 84.8166C27.8263 83.4244 29.7405 81.9743 31.7128 80.4661C33.685 78.9579 34.7871 78.1168 35.0191 77.9428C35.1352 77.8268 35.2802 77.7688 35.4542 77.7688H35.5412C35.8892 77.7688 36.2953 78.2618 36.7593 79.2479C37.2234 80.2341 38.7896 83.6275 41.4579 89.4281C42.56 91.9224 43.4591 93.9237 44.1552 95.4318L51.5511 111.529C51.6091 111.529 54.6254 105.351 60.6001 92.9956C66.5748 80.6401 72.5495 68.1977 78.5242 55.6682C84.4989 43.1387 87.6023 36.729 87.8343 36.439C88.1823 35.6269 88.7624 35.2208 89.5745 35.2208C89.9805 35.2208 90.3286 35.3948 90.6186 35.7429C90.9086 36.0909 91.1117 36.439 91.2277 36.787V37.3091L70.9543 79.335L50.5069 121.622C50.2749 122.028 49.7239 122.231 48.8538 122.231C48.3317 122.231 47.9837 122.144 47.8096 121.97C47.6936 121.854 44.8513 115.705 39.2826 103.524L30.9297 85.2516L29.5375 86.2088C28.6674 86.9048 27.7683 87.6009 26.8402 88.297C25.9121 88.9931 25.39 89.3411 25.274 89.3411Z" fill="black" />\n<path d="M132.994 40.4415H89.4885V35.2209H132.994V40.4415Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-求根_clip0_557:115">\n<rect width="116" height="92.2307" fill="white" transform="translate(17 30)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  d8ad: function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return o;
    });
    var n = i("2b0e");
    const o = new n["default"]();
  },
  da71: function(t, e, i) {
    "use strict";
    i.d(e, "b", function() {
        return f;
      }),
      i.d(e, "c", function() {
        return m;
      });
    const n = "https://api.igky.cc/",
      o = "https://exam-file.igky.cc/",
      s = "http://exam-file.igky.cc/",
      a = {
        EXAM: n + "exam/api",
        OJ: n + "oj/api"
      },
      c = "https://exam-api.iguokao.com/",
      r = "https://oj-api.iguokao.com/",
      l = "https://exam-file.iguokao.com/",
      d = "https://exam-file.iguokao.com/",
      u = {
        EXAM: c + "api",
        OJ: r + "api"
      };
    let h = {},
      f = "",
      m = "";
    switch ("production") {
      case "development":
        (h = u), (f = l), (m = d);
        break;
      case "production":
        (h = u), (f = l), (m = d);
        break;
      case "beta":
        (h = a), (f = o), (m = s);
        break;
      default:
        break;
    }
    e["a"] = h;
  },
  db43: function(t, e, i) {
    "use strict";
    i("5557");
  },
  db54: function(t, e, i) {
    "use strict";
    i("0c5b");
  },
  dcfa: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-并集",
        use: "icon-并集-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-并集">\n<g clip-path="url(#icon-并集_clip0_581:34)">\n<path d="M99.1619 47.0065H99.2519C99.9715 47.0065 100.541 47.4563 100.961 48.3558V66.9765C100.961 68.8356 100.961 71.2344 100.961 74.1729C100.901 82.2089 100.751 86.6467 100.511 87.4863C100.451 87.6062 100.421 87.6962 100.421 87.7561C99.2819 92.3738 96.3433 96.032 91.6057 98.7306C86.8681 101.429 81.6507 102.779 75.9535 102.779C72.0555 102.779 68.3373 102.149 64.7991 100.89C61.2609 99.6302 58.1724 97.6212 55.5338 94.8626C52.8951 92.104 51.3958 88.8956 51.036 85.2374C50.976 84.8176 50.946 78.4908 50.946 66.2569L51.036 48.1759C51.6357 47.3963 52.2054 47.0065 52.7451 47.0065C53.3448 47.0065 53.9445 47.3963 54.5442 48.1759V66.7966L54.6342 85.3273L54.8141 86.2269C55.6537 90.2449 58.1424 93.3933 62.2804 95.6722C66.4183 97.951 70.946 99.1204 75.8636 99.1804C80.8411 99.1804 85.4888 97.981 89.8066 95.5822C94.1245 93.1834 96.6132 89.6752 97.2729 85.0575C97.3329 84.7576 97.3628 78.5207 97.3628 66.3468V48.3558C97.8426 47.4563 98.4423 47.0065 99.1619 47.0065Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-并集_clip0_581:34">\n<rect width="60" height="55.7853" fill="white" transform="translate(46 47)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  deac: function(t, e, i) {},
  dfcb: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-无穷大",
        use: "icon-无穷大-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-无穷大">\n<g clip-path="url(#icon-无穷大_clip0_582:164)">\n<path d="M40.3994 75.0055C40.3994 70.3122 41.8927 66.1522 44.8794 62.5255C47.8661 58.8988 51.6794 57.0588 56.3194 57.0055C61.0128 57.0055 65.4128 58.6322 69.5194 61.8855C71.5461 63.5388 73.5194 65.6188 75.4394 68.1255L76.5594 69.6455L77.1194 68.8455C82.6661 60.9522 88.8794 57.0055 95.7594 57.0055C100.346 57.0055 104.106 58.8188 107.039 62.4455C109.973 66.0722 111.466 70.3388 111.519 75.2455C111.519 79.8322 110.053 83.9655 107.119 87.6455C104.186 91.3255 100.293 93.1922 95.4394 93.2455C90.8528 93.2455 86.5061 91.6188 82.3994 88.3655C80.3728 86.7122 78.3994 84.6322 76.4794 82.1255L75.3594 80.6055L74.7994 81.4055C69.2528 89.2988 63.0394 93.2455 56.1594 93.2455C51.5727 93.2455 47.8127 91.4322 44.8794 87.8055C41.9461 84.1788 40.4527 79.9122 40.3994 75.0055ZM108.559 75.0055C108.559 71.3788 107.546 68.0722 105.519 65.0855C103.493 62.0988 100.613 60.6055 96.8794 60.6055C95.7594 60.6055 94.6661 60.7388 93.5994 61.0055C92.5328 61.2722 91.5194 61.6455 90.5594 62.1255C89.5994 62.6055 88.6928 63.1122 87.8394 63.6455C86.9861 64.1788 86.2128 64.8188 85.5194 65.5655C84.8261 66.3122 84.1594 66.9788 83.5194 67.5655C82.8794 68.1522 82.3461 68.8188 81.9194 69.5655C81.4928 70.3122 81.0928 70.8988 80.7194 71.3255C80.3461 71.7522 80.0528 72.2055 79.8394 72.6855L79.4394 73.3255L81.9194 76.5255C83.5728 78.6588 84.8528 80.2588 85.7594 81.3255C86.6661 82.3922 87.7861 83.5655 89.1194 84.8455C90.4528 86.1255 91.7861 87.0055 93.1194 87.4855C94.4528 87.9655 95.8128 88.2322 97.1994 88.2855C100.506 88.2855 103.226 86.9788 105.359 84.3655C107.493 81.7522 108.559 78.6322 108.559 75.0055ZM43.3594 75.2455C43.3594 78.9255 44.3994 82.2588 46.4794 85.2455C48.5594 88.2322 51.4394 89.7255 55.1194 89.7255C61.4128 89.7255 67.1994 85.4588 72.4794 76.9255L69.9994 73.7255C66.7461 69.5122 64.3194 66.7388 62.7194 65.4055C60.1061 63.1122 57.4128 61.9655 54.6394 61.9655C51.3327 61.9655 48.6394 63.2722 46.5594 65.8855C44.4794 68.4988 43.4127 71.6188 43.3594 75.2455Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-无穷大_clip0_582:164">\n<rect width="80" height="36.2511" fill="white" transform="translate(36 57)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  e26f: function(t, e, i) {},
  e432: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-双撇号",
        use: "icon-双撇号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-双撇号">\n<path d="M60.3387 72.2496C60.0681 72.2496 59.4593 72.1133 58.5123 71.8407C57.5653 71.568 57.0693 71.2953 57.0242 71.0227C57.0242 70.7046 58.2643 65.4331 60.7445 55.2082C63.2248 44.9834 64.6002 39.6437 64.8707 39.1893C65.5472 37.7351 66.7196 37.008 68.3882 37.008C69.2901 37.008 70.2371 37.3488 71.2292 38.0305C72.2213 38.7122 72.7173 39.7119 72.7173 41.0298C72.7173 41.257 72.6722 41.5978 72.582 42.0523C72.5369 42.3704 70.5753 47.4374 66.6971 57.2532C62.8189 67.0691 60.8122 72.0224 60.6769 72.1133C60.5416 72.2042 60.4289 72.2496 60.3387 72.2496Z" fill="black" />\n<path d="M78.9463 72.2496C78.6758 72.2496 78.067 72.1133 77.12 71.8407C76.173 71.568 75.6769 71.2953 75.6318 71.0227C75.6318 70.7046 76.872 65.4331 79.3522 55.2082C81.8324 44.9834 83.2078 39.6438 83.4784 39.1893C84.1548 37.7351 85.3273 37.008 86.9958 37.008C87.8977 37.008 88.8447 37.3488 89.8368 38.0305C90.8289 38.7122 91.325 39.7119 91.325 41.0298C91.325 41.257 91.2799 41.5978 91.1897 42.0523C91.1446 42.3704 89.183 47.4374 85.3048 57.2532C81.4266 67.0691 79.4198 72.0224 79.2846 72.1133C79.1493 72.2042 79.0365 72.2496 78.9463 72.2496Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  e46e: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-等于",
        use: "icon-等于-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-等于">\n<path d="M50.3196 66.2113C50.3196 65.5429 50.6795 65.0288 51.3993 64.6689H100.525C101.296 65.0802 101.682 65.5943 101.682 66.2113C101.682 66.7768 101.322 67.2653 100.602 67.6766L76.0779 67.7537H51.5535C50.7309 67.4966 50.3196 66.9825 50.3196 66.2113ZM50.3196 81.1727C50.3196 80.4015 50.7309 79.8874 51.5535 79.6303H100.602C101.322 80.1444 101.682 80.6586 101.682 81.1727C101.682 81.8411 101.296 82.3552 100.525 82.7151H51.3993C50.6795 82.3552 50.3196 81.8411 50.3196 81.1727Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  e6eb: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-斜杠",
        use: "icon-斜杠-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-斜杠">\n<path d="M86.5739 42.0002C86.9756 42.0002 87.3104 42.1341 87.5782 42.4019C87.8461 42.6698 87.98 42.9822 87.98 43.3394C87.98 43.5625 84.1187 54.3206 76.3961 75.6135C68.6736 96.9064 64.6784 107.798 64.4105 108.289C64.098 108.736 63.7186 108.959 63.2722 108.959C62.9597 108.959 62.6696 108.847 62.4018 108.624C62.1339 108.401 62 108.089 62 107.687C62 107.24 65.8836 96.3484 73.6508 75.0109C81.418 53.6733 85.3686 42.893 85.5025 42.6698C85.6811 42.2234 86.0382 42.0002 86.5739 42.0002Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  e880: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-波浪号运算符",
        use: "icon-波浪号运算符-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-波浪号运算符">\n<path d="M43 84.7561C43 79.8417 44.4983 75.3204 47.495 71.1922C50.4917 67.0641 54.433 65 59.3189 65C61.7944 65 64.2048 65.5897 66.55 66.7692C68.8952 67.9487 71.045 69.423 72.9994 71.1922C74.9537 72.9614 76.8755 74.6651 78.7647 76.3033C80.6539 77.9414 82.706 79.383 84.9209 80.628C87.1359 81.873 89.416 82.4955 91.7612 82.4955C95.8002 82.4955 99.09 80.9556 101.631 77.8759C104.171 74.7962 105.442 71.4543 105.442 67.8504C105.442 67.0641 105.572 66.4088 105.833 65.8846C106.093 65.3604 106.419 65.0655 106.81 65C107.722 65 108.178 66.0812 108.178 68.2435C108.178 73.0925 106.712 77.581 103.78 81.7092C100.849 85.8373 97.1031 87.9014 92.5429 87.9014H91.7612C89.3508 87.9014 86.973 87.3116 84.6278 86.1322C82.2826 84.9527 80.1002 83.5111 78.0807 81.8074C76.0612 80.1038 74.1394 78.4001 72.3153 76.6964C70.4913 74.9927 68.4392 73.5184 66.1591 72.2734C63.879 71.0284 61.6315 70.4387 59.4166 70.5042C56.5502 70.5042 54.0095 71.3233 51.7946 72.9614C49.4494 74.8617 47.8533 77.0896 47.0064 79.6451C46.1595 82.2006 45.6384 84.2319 45.4429 85.739C45.2475 87.2461 44.8892 87.9997 44.368 87.9997C43.456 87.9997 43 86.9185 43 84.7561Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  ea96: function(t, e, i) {},
  ec7f: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-正负号",
        use: "icon-正负号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-正负号">\n<g clip-path="url(#icon-正负号_clip0_592:211)">\n<path d="M41.7595 44.4025C41.7595 44.4025 41.7595 43.9569 41.7595 43.0658C41.7595 42.1746 42.2394 41.4891 43.1991 41.0092H108.7C109.729 41.5576 110.243 42.2431 110.243 43.0658C110.243 43.8884 109.729 44.5739 108.7 45.1223H78.0577V73.1943H108.7C109.729 73.7427 110.243 74.4282 110.243 75.2509C110.243 76.142 109.729 76.8275 108.7 77.3074H78.0577V92.4231V101.986C78.0577 105.482 77.9549 107.607 77.7492 108.361C77.5436 109.115 76.9609 109.493 76.0012 109.493C75.11 109.493 74.5273 109.115 74.2531 108.361C73.9789 107.607 73.8418 105.894 73.8418 103.22C73.8418 102.603 73.8418 101.129 73.8418 98.7984C73.8418 96.4677 73.8761 94.4111 73.9446 92.6287V77.3074H43.1991C42.2394 76.8275 41.7595 76.142 41.7595 75.2509C41.7595 74.3597 42.2394 73.6742 43.1991 73.1943H73.9446V45.1223H43.1991C42.2394 44.6425 41.7595 43.9569 41.7595 43.0658V44.4025Z" fill="black" />\n</g>\n<defs>\n<clipPath id="icon-正负号_clip0_592:211">\n<rect width="80" height="68.5" fill="white" transform="translate(36 41)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  ed70: function(t, e, i) {
    t.exports = i.p + "img/phonePosition.ffd7aafc.png";
  },
  ee46: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-上标",
        use: "icon-上标-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-上标">\n<g clip-path="url(#icon-上标_clip0_557:128)">\n<path d="M30.3294 90.9905C30.8078 88.1205 32.6528 84.8063 35.8645 81.0479C39.0762 77.2895 43.0396 75.3762 47.7546 75.3079C50.1463 75.3079 52.333 75.9229 54.3147 77.1529C56.2963 78.3829 57.7655 79.9204 58.7222 81.7654C61.5922 77.4604 65.0431 75.3079 69.0748 75.3079C71.6032 75.3079 73.7898 76.0595 75.6349 77.5629C77.4799 79.0662 78.4366 81.0821 78.5049 83.6104C78.5049 85.5921 78.0266 87.198 77.0699 88.428C76.1132 89.658 75.1907 90.4096 74.3023 90.683C73.414 90.9563 72.6282 91.093 71.9448 91.093C70.6465 91.093 69.5873 90.7171 68.7673 89.9655C67.9473 89.2138 67.5373 88.223 67.5373 86.993C67.5373 83.8496 69.2456 81.6971 72.6623 80.5354C71.9107 79.6471 70.544 79.2029 68.5623 79.2029C67.674 79.2029 67.0248 79.2712 66.6148 79.4079C64.0181 80.5012 62.1047 82.7563 60.8747 86.1729C56.7747 101.275 54.7247 110.09 54.7247 112.618C54.7247 114.531 55.2713 115.898 56.3647 116.718C57.458 117.538 58.6539 117.948 59.9522 117.948C62.4806 117.948 64.9748 116.821 67.4348 114.566C69.8948 112.311 71.569 109.543 72.4573 106.263C72.6623 105.58 72.8673 105.204 73.0723 105.136C73.2773 105.067 73.824 104.999 74.7124 104.931H75.1224C76.1474 104.931 76.6599 105.204 76.6599 105.751C76.6599 105.819 76.5915 106.195 76.4549 106.878C75.3615 110.773 73.2432 114.224 70.0998 117.231C66.9564 120.237 63.3006 121.741 59.1322 121.741C54.3488 121.741 50.7271 119.588 48.2671 115.283C45.4654 119.52 42.2537 121.638 38.632 121.638H38.017C34.6686 121.638 32.2769 120.75 30.8419 118.973C29.4069 117.197 28.6552 115.317 28.5869 113.336C28.5869 111.149 29.2361 109.372 30.5344 108.006C31.8328 106.639 33.3703 105.956 35.147 105.956C38.0853 105.956 39.5545 107.391 39.5545 110.261C39.5545 111.627 39.1445 112.823 38.3245 113.848C37.5045 114.873 36.7187 115.557 35.967 115.898C35.2153 116.24 34.7711 116.411 34.6345 116.411L34.327 116.513C34.327 116.582 34.532 116.718 34.942 116.923C35.352 117.128 35.8987 117.367 36.582 117.641C37.2653 117.914 37.9145 118.017 38.5295 117.948C40.9895 117.948 43.1079 116.411 44.8846 113.336C45.4996 112.242 46.2854 109.919 47.2421 106.366C48.1988 102.812 49.1554 99.1222 50.1121 95.2955C51.0688 91.4688 51.6155 89.2138 51.7521 88.5305C52.0938 86.6855 52.2646 85.3529 52.2646 84.5329C52.2646 82.6196 51.7521 81.2529 50.7271 80.4329C49.7021 79.6129 48.5404 79.2029 47.2421 79.2029C44.5087 79.2029 41.9462 80.2962 39.5545 82.4829C37.1628 84.6696 35.4886 87.4713 34.532 90.888C34.3953 91.503 34.2245 91.8447 34.0195 91.913C33.8145 91.9813 33.2678 92.0497 32.3795 92.118H30.9444C30.5344 91.708 30.3294 91.3322 30.3294 90.9905Z" fill="black" />\n<rect x="88" y="30.4999" width="27.75" height="47.75" stroke="#F35A5A" />\n</g>\n<defs>\n<clipPath id="icon-上标_clip0_557:128">\n<rect width="100" height="91.7534" fill="white" transform="translate(25 30)" />\n</clipPath>\n</defs>\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  f795: function(t, e, i) {},
  f7c3: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-小括号",
        use: "icon-小括号-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-小括号">\n<path d="M25 75.9134C25 71.6894 25.3061 67.6796 25.9183 63.8841C26.5304 60.0886 27.2344 56.8135 28.0303 54.0587C28.8261 51.3039 29.9586 48.6103 31.4279 45.9779C32.8971 43.3456 34.0602 41.2948 34.9173 39.8256C35.7743 38.3563 37.0599 36.7647 38.774 35.0506C40.4881 33.3365 41.4982 32.2958 41.8042 31.9285C42.1103 31.5612 42.8756 30.9184 44.0999 30.0001H45.2936H45.661C46.518 30.0001 46.9465 30.2756 46.9465 30.8266C46.9465 31.0102 46.4262 31.653 45.3855 32.7549C44.3448 33.8568 43.0898 35.4791 41.6206 37.6217C40.1514 39.7644 38.6515 42.3967 37.1211 45.5188C35.5907 48.6409 34.3051 52.8649 33.2644 58.1909C32.2237 63.5168 31.7033 69.4243 31.7033 75.9134C31.7033 82.4025 32.2237 88.2794 33.2644 93.5441C34.3051 98.8088 35.56 103.063 37.0293 106.308C38.4985 109.553 39.9983 112.185 41.5288 114.205C43.0592 116.225 44.3448 117.848 45.3855 119.072C46.4262 120.296 46.9465 120.939 46.9465 121C46.9465 121.551 46.4874 121.827 45.5691 121.827H45.2936H44.0999L41.5288 119.623C35.7743 114.419 31.5809 107.93 28.9485 100.156C26.3162 92.381 25 84.3002 25 75.9134Z" fill="black" />\n<rect x="55.5002" y="38.0005" width="37.7501" height="62.7502" stroke="#F35A5A" />\n<path d="M103.513 30.092L103.88 30.0001C104.186 30.0001 104.492 30.0001 104.798 30.0001H105.9L108.471 32.204C114.226 37.4075 118.419 43.8965 121.051 51.6712C123.684 59.4458 125 67.5266 125 75.9134C125 80.0762 124.694 84.086 124.082 87.9427C123.47 91.7994 122.766 95.0745 121.97 97.7681C121.174 100.462 120.041 103.155 118.572 105.849C117.103 108.542 115.94 110.593 115.083 112.001C114.226 113.409 112.971 114.97 111.318 116.684C109.665 118.398 108.685 119.409 108.379 119.715C108.073 120.021 107.369 120.602 106.267 121.459C106.084 121.643 105.961 121.765 105.9 121.827H104.798C104.308 121.827 103.972 121.827 103.788 121.827C103.604 121.827 103.451 121.735 103.329 121.551C103.207 121.368 103.115 121.092 103.053 120.725C103.115 120.664 103.451 120.266 104.064 119.531C113.552 109.675 118.297 95.1357 118.297 75.9134C118.297 56.691 113.552 42.1518 104.064 32.2958C103.451 31.5612 103.115 31.1633 103.053 31.1021C103.053 30.6123 103.207 30.2756 103.513 30.092Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  fc5d: function(t, e, i) {
    "use strict";
    e["a"] = [{
        title: "客户端问题",
        question: [{
            Q: "客户端作答，如何切换中英文输入法？",
            A: "中英文切换快捷键请依次尝试，Windows电脑：1. 按shift；2. 按ctrl+空格；3. 按win+空格；Mac电脑：1. 按中英文快捷键；2. control+空格键；3. command+空格。若仍不能切换，则先保存试题答案，点击右上角退出软件，调整到正确输入法后重新登录软件。",
          },
          {
            Q: "客户端运行时，界面比例显示不全，看不到下方按钮，怎么办？",
            A: "请关闭客户端，打开电脑设置—-系统—-缩放与布局，将显示比例调整成100%即可。",
          },
          {
            Q: "客户端运行时，出现了白屏或黑屏，怎么办？",
            A: "由于终端电脑系统环境兼容性的影响，如果客户端运行时出现了白屏或黑屏的情况，请退出软件，重新打开进入软件即可。如果还有故障，可重启电脑尝试。",
          },
        ],
      },
      {
        title: "摄像头问题",
        question: [{
            Q: "考试要求使用摄像头，但我电脑没有摄像头, 摄像头故障怎么办？",
            A: "1. 电脑摄像头正常开启对考试非常重要，为了保证考试的公平性，以及验证考生身份的真实性，系统会全程视频监控考生作答的情况，因此请务必保证摄像头可以正常使用；2. 建议提前打开电脑客户端，检测电脑摄像头是否正常，如有故障，请重启电脑，或更换摄像头、电脑来解决。",
          },
          {
            Q: "摄像头无故障，但就是无法看到图像",
            A: "通常有三种原因：1. 其他浏览器或应用程序占用了摄像头，请重启电脑解决；2. 有些品牌电脑的摄像头会有个物理的开关按钮，例如联想的电脑，请务必把开关键打开；3. 软件冲突，请关闭360魔法摄像头之类的工具软件，重启电脑即可解决。",
          },
          {
            Q: "摄像头显示后置画面，如何切换到前置画面？",
            A: "当您的电脑摄像头显示为后置画面时，如果是Win电脑，按照如下操作，首先打开电脑的设置——设备——蓝牙和其他设备——设备和打印机，弹出窗口，找到前置摄像头，右键选择属性，将该摄像头设置为默认摄像头，如果到设备和打印机这步没自动弹出弹窗，请在空白处右键，选择设备管理器，进入后找到摄像头。如果更换后仍无法开启，请更换新的电脑设备。",
          },
          {
            Q: "摄像头对准哪里算是合规？",
            A: "请调整摄像头角度，将头像放置在画面中间位置，能清晰看清脸部，确保在整个答题过程中脸部正对摄像头。",
          },
        ],
      },
      {
        title: "系统使用问题",
        question: [{
            Q: "无法共享屏幕？",
            A: "如果您使用的是Mac电脑，请依次点击：系统偏好设置 - 安全性与隐私 - 隐私 - 在左边的屏幕录制选项中，勾选允许国考云app使用此功能，完成功能授权，即可正常录制屏幕。如果您使用的是Windows系统电脑，将鼠标光标移动至屏幕顶端监控图标异常处，根据提示操作即可！",
          },
          {
            Q: "问答题有个扫码传图的功能，我用手机扫描二维码后，无法上传图片",
            A: "手机扫码后如果拍照上传不了图片，则建议先用手机本机的相机拍照好，然后扫码从相册添加图片即可。如果还不行，建议换个手机试试。",
          },
          {
            Q: "选择题全部作答后，还能修改吗？",
            A: "选择题在提交该部分小试卷前，系统会有弹窗提示，告知是否可以修改已作答内容，请参见系统提示操作。",
          },
          {
            Q: "考试结束时，没有及时点击“我要交卷”按钮，作答的试题内容都保存上了吗？",
            A: "所有试题只要点击了“下一题”按钮，都会自动保存当前题目作答信息的；考试到结束时，系统会自动把所有试题最新的作答情况全部保存到系统中，并自动交卷，请放心。",
          },
          {
            Q: "作答录制视频题时，回放录制的视频为什么没声音？",
            A: "首先要确认电脑是否授予了麦克风权限，打开客户端时，软件会检测麦克风是否正常开启。开启后重新录制一段小视频，打开电脑扬声器，确认是否可以听到声音。",
          },
          {
            Q: "考试中途网络中断，或电脑故障，如何处理？",
            A: "答题过程中因网络故障、电脑故障等造成中断，请重新登录系统，并在几分钟之内再次按照相同的步骤进入考试，从中断处继续答题即可，不需要重复作答之前已经答过的试题。如果电脑还有故障，建议用手机4G热点上网，或更换另外一台电脑继续作答。",
          },
        ],
      },
      {
        title: "网速卡顿问题",
        question: [{
            Q: "打开考试系统页面很慢，比较卡顿，无法点击“下一题”",
            A: "可以尝试更换上网方式：建议使用4G手机分享Wifi热点，通过电脑的无线设备连接手机的Wifi热点上网，正常的网速都比较快。或者更换到Wifi信号强的地方再次尝试。",
          },
          {
            Q: "人在国外，网络环境不理想，操作系统卡顿，怎么办？",
            A: "可以尝试下面三种方式解决：1. 更换上网方式：建议用4G手机分享Wifi热点，通过电脑连接手机Wifi上网；或者更换到Wifi信号强的地方再次尝试；2. 关闭国外通道的VPN，可以尝试使用国内通道的VPN；如果在实习公司考试，建议不要使用公司网络；3. 重启电脑，或者更换一台电脑，再尝试一下。",
          },
        ],
      },
      {
        title: "试题相关问题",
        question: [{
            Q: "考试还没开始，为什么我现在可以作答试题？",
            A: "考试正式开始之前，登录到考试系统，开放的试题为考前练习题，不是正式的考题，题型和知识点均与正式考题无关，目的在于让考生们体验答题环境，熟悉系统操作；正式开考时，页面会自动切换到正式考题。",
          },
          {
            Q: "我申请的职位和练习题考点不同，实际考试也这样吗？",
            A: "练习试题主要目的是让考生适应答题环境，熟悉系统操作；正式考试会依据您考试的职位，在题型、考点、难度都会有差异。",
          },
          {
            Q: "没有做考前练习题，对我的考试成绩有影响吗？",
            A: "未作答练习题不会对考试结果产生任何影响，但我们仍建议各位考生进行考前练习。",
          },
          {
            Q: "填空题的填写规范格式有哪些？",
            A: "请仔细阅读试题的要求，填写的内容要规范，很多填空题是系统自动比对答案评分的，因此您填写的内容务必跟答案完全一致，才能得分。",
          },
          {
            Q: "题目中图片加载不出来、只显示文字信息，没有选项怎么办？",
            A: "原因是您当前的网络网速较慢或不稳定，请使用手机热点上网，或更换其他更快的Wifi网络。",
          },
          {
            Q: "某题的题干、选项是不是有问题？",
            A: "如果发现有问题的试题，请在网页对话框中告知我们：试题序号+试题疑问点。如题干、选项确实有误，我们会及时更新试题，并统一发送系统公告告知大家。",
          },
          {
            Q: "作答问答题时，系统提供的画板功能有限，使用不便，怎么办？",
            A: "如果不习惯使用系统提供的画图板功能，建议在白纸上画出相应的图，然后使用手机拍照扫描上传图片的功能，把该图上传到系统即可。",
          },
        ],
      },
      {
        title: "其他问题",
        question: [{
            Q: "什么时候进行后续面试",
            A: "如果后续有面试安排，考试结束后，考试主办方会根据所有考生笔试成绩，尽快安排后期的面试，具体面试时间，随后会另行通知，请随时留意官方渠道发布的消息。",
          },
          {
            Q: "考试过程中是否可以使用手机？",
            A: "考试全程严禁使用手机交流或查询信息，请遵守考场纪律。",
          },
        ],
      },
    ];
  },
  fcd7: function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i("e017"),
      o = i.n(n),
      s = i("21a1"),
      a = i.n(s),
      c = new o.a({
        id: "icon-大于等于",
        use: "icon-大于等于-usage",
        viewBox: "0 0 151 151",
        content: '<symbol viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-大于等于">\n<path d="M56.0039 51.3092C56.0039 50.9601 56.1348 50.6546 56.3966 50.3928C56.6585 50.1309 56.8767 50 57.0512 50C57.4003 50 60.7606 51.4838 67.1321 54.4513C73.5035 57.4188 79.8313 60.4082 86.1155 63.4193C92.3997 66.4305 95.5418 67.9579 95.5418 68.0015C95.8473 68.2197 96 68.547 96 68.9834C96 69.4198 95.8473 69.7471 95.5418 69.9653C95.4545 70.0526 89.083 73.0856 76.4274 79.0643L57.5749 87.9669H57.1821C56.3966 87.8796 56.0039 87.4432 56.0039 86.6577C56.0039 86.614 56.0039 86.5486 56.0039 86.4613C55.9602 86.1558 56.2875 85.8067 56.9858 85.4139C57.8149 84.9775 61.0879 83.4065 66.8048 80.7008C70.2087 79.0861 73.0453 77.7551 75.3146 76.7077L91.5487 68.9834L74.1363 60.7355C71.1251 59.2953 67.6339 57.637 63.6627 55.7605C59.8224 53.9712 57.5967 52.9021 56.9858 52.5529C56.3748 52.2038 56.0475 51.7892 56.0039 51.3092ZM56.0693 99.357C56.0693 98.9205 56.3966 98.4841 57.0512 98.0477H94.9526C95.6509 98.3096 96 98.746 96 99.357C96 99.8806 95.6727 100.317 95.0181 100.666H56.9858C56.3748 100.361 56.0693 99.9243 56.0693 99.357Z" fill="black" />\n</symbol>',
      });
    a.a.add(c);
    e["default"] = c;
  },
  fd0b: function(t, e, i) {
    t.exports = i.p + "media/监考官通话提示.a94c678a.mp3";
  },
  fdfd: function(t, e, i) {
    "use strict";
    e["a"] = [
      "Login",
      "MobileLogin",
      "PublicLogin",
      "DeviceDetection",
      "BroswerCompatibility",
      "ExamInvite",
      "Complete",
      "QA",
      "QAClient",
      "QAClient2",
      "FaceReturnErr",
      "FaceReturn",
      "refuse",
      "success",
      "consider",
      "Detect",
      "Welcome",
      "MobileVideo",
      "Telecom",
      "Test",
      "DirectLogin",
    ];
  },
  ff4a: function(t, e) {
    t.exports = require("events");
  },
});