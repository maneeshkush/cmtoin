function changeLanguage(lang) {
            var currentUrl = window.location.href;

            // Remove any existing language codes from the URL
            var newUrl = currentUrl.replace(/\/[a-z]{2}-[a-zA-Z]{2}\//i, '/').replace(/\/[a-z]{2}\//i, '/');

            // If the selected language is not English, add the language code to the URL
            if (lang !== 'en') {
                newUrl = newUrl.replace(/(https?:\/\/[^\/]+)(\/.*)/, '$1/' + lang + '$2');
            }

            // Redirect to the new URL
            window.location.href = newUrl;
        }
    
        var languageMenu = document.getElementById('language-menu');
        var selectElement = document.createElement('select');
        selectElement.id = 'language-select';
        selectElement.onchange = function () {
            changeLanguage(this.value);
        };

        var languages = [
           { value: 'pl', text: 'Select Language:' },
   		   { value: 'ar', text: 'Arabic - العربية' },
           { value: 'bg', text: 'Bulgarian - български' },
           { value: 'bn', text: 'Bengali - বাংলা' },
           { value: 'ca', text: 'Catalan - Català' },
           { value: 'cs', text: 'Czech - Čeština' },
           { value: 'da', text: 'Danish - Dansk' },
           { value: 'de', text: 'German - Deutsch' },
           { value: 'el', text: 'Greek - Ελληνικά' },
           { value: 'es', text: 'Spanish - Español' },
	       { value: 'en', text: 'English - English' },
           { value: 'et', text: 'Estonian - Eesti' },
           { value: 'fi', text: 'Finnish - Suomi' },
           { value: 'tl', text: 'Filipino - Filipino' },
           { value: 'fr', text: 'French - Français' },
           { value: 'gu', text: 'Gujarati - ગુજરાતી' },
           { value: 'he', text: 'Hebrew - עברית' },
           { value: 'hi', text: 'Hindi - हिन्दी' },
           { value: 'hr', text: 'Croatian - Hrvatski' },
           { value: 'hu', text: 'Hungarian - Magyar' },
           { value: 'id', text: 'Indonesian - Bahasa Indonesia' },
           { value: 'is', text: 'Icelandic - Íslenska' },
           { value: 'it', text: 'Italian - Italiano' },
           { value: 'ja', text: 'Japanese - 日本語' },
           { value: 'kn', text: 'Kannada - ಕನ್ನಡ' },
           { value: 'ko', text: 'Korean - 한국어' },
           { value: 'lt', text: 'Lithuanian - Lietuvių' },
           { value: 'lv', text: 'Latvian - Latviešu' },
           { value: 'ml', text: 'Malayalam - മലയാളം' },
           { value: 'mr', text: 'Marathi - मराठी' },
           { value: 'ms', text: 'Malay - Bahasa Melayu' },
           { value: 'nl', text: 'Dutch - Nederlands' },
           { value: 'no', text: 'Norwegian - Norsk' },
           { value: 'pl', text: 'Polish - Polski' },
           { value: 'pa', text: 'Punjabi - ਪੰਜਾਬੀ' },
           { value: 'pt', text: 'Portuguese - Português' },
           { value: 'ru', text: 'Russian - Русский' },
           { value: 'ro', text: 'Romanian - Română' },
           { value: 'sk', text: 'Slovak - Slovenčina' },
           { value: 'sl', text: 'Slovenian - Slovenščina' },
           { value: 'sr', text: 'Serbian - Српски' },
           { value: 'sv', text: 'Swedish - Svenska' },
           { value: 'ta', text: 'Tamil - தமிழ்' },
           { value: 'te', text: 'Telugu - తెలుగు' },
           { value: 'th', text: 'Thai - ไทย' },
           { value: 'tr', text: 'Turkish - Türkçe' },
           { value: 'uk', text: 'Ukrainian - Українська' },
           { value: 'ur', text: 'Urdu - اردو' },
           { value: 'vi', text: 'Vietnamese - Tiếng Việt' },
           { value: 'zh-CN', text: 'Chinese (Simplified) - 简体中文' },
           { value: 'zh-TW', text: 'Chinese (Traditional) - 繁體中文' }
			
        ];

        languages.forEach(function (language) {
            var optionElement = document.createElement('option');
            optionElement.value = language.value;
            optionElement.text = language.text;
            selectElement.appendChild(optionElement);
        });

        languageMenu.appendChild(selectElement);
		
		
		var languageMenu = document.getElementById('language-menu1');
        var selectElement = document.createElement('select');
        selectElement.id = 'language-select';
        selectElement.onchange = function () {
            changeLanguage(this.value);
        };

        var languages = [
           { value: 'pl', text: 'Select Language:' },
   		   { value: 'ar', text: 'Arabic - العربية' },
           { value: 'bg', text: 'Bulgarian - български' },
           { value: 'bn', text: 'Bengali - বাংলা' },
           { value: 'ca', text: 'Catalan - Català' },
           { value: 'cs', text: 'Czech - Čeština' },
           { value: 'da', text: 'Danish - Dansk' },
           { value: 'de', text: 'German - Deutsch' },
           { value: 'el', text: 'Greek - Ελληνικά' },
           { value: 'es', text: 'Spanish - Español' },
	       { value: 'en', text: 'English - English' },
           { value: 'et', text: 'Estonian - Eesti' },
           { value: 'fi', text: 'Finnish - Suomi' },
           { value: 'tl', text: 'Filipino - Filipino' },
           { value: 'fr', text: 'French - Français' },
           { value: 'gu', text: 'Gujarati - ગુજરાતી' },
           { value: 'he', text: 'Hebrew - עברית' },
           { value: 'hi', text: 'Hindi - हिन्दी' },
           { value: 'hr', text: 'Croatian - Hrvatski' },
           { value: 'hu', text: 'Hungarian - Magyar' },
           { value: 'id', text: 'Indonesian - Bahasa Indonesia' },
           { value: 'is', text: 'Icelandic - Íslenska' },
           { value: 'it', text: 'Italian - Italiano' },
           { value: 'ja', text: 'Japanese - 日本語' },
           { value: 'kn', text: 'Kannada - ಕನ್ನಡ' },
           { value: 'ko', text: 'Korean - 한국어' },
           { value: 'lt', text: 'Lithuanian - Lietuvių' },
           { value: 'lv', text: 'Latvian - Latviešu' },
           { value: 'ml', text: 'Malayalam - മലയാളം' },
           { value: 'mr', text: 'Marathi - मराठी' },
           { value: 'ms', text: 'Malay - Bahasa Melayu' },
           { value: 'nl', text: 'Dutch - Nederlands' },
           { value: 'no', text: 'Norwegian - Norsk' },
           { value: 'pl', text: 'Polish - Polski' },
           { value: 'pa', text: 'Punjabi - ਪੰਜਾਬੀ' },
           { value: 'pt', text: 'Portuguese - Português' },
           { value: 'ru', text: 'Russian - Русский' },
           { value: 'ro', text: 'Romanian - Română' },
           { value: 'sk', text: 'Slovak - Slovenčina' },
           { value: 'sl', text: 'Slovenian - Slovenščina' },
           { value: 'sr', text: 'Serbian - Српски' },
           { value: 'sv', text: 'Swedish - Svenska' },
           { value: 'ta', text: 'Tamil - தமிழ்' },
           { value: 'te', text: 'Telugu - తెలుగు' },
           { value: 'th', text: 'Thai - ไทย' },
           { value: 'tr', text: 'Turkish - Türkçe' },
           { value: 'uk', text: 'Ukrainian - Українська' },
           { value: 'ur', text: 'Urdu - اردو' },
           { value: 'vi', text: 'Vietnamese - Tiếng Việt' },
           { value: 'zh-CN', text: 'Chinese (Simplified) - 简体中文' },
           { value: 'zh-TW', text: 'Chinese (Traditional) - 繁體中文' }
			
        ];

        languages.forEach(function (language) {
            var optionElement = document.createElement('option');
            optionElement.value = language.value;
            optionElement.text = language.text;
            selectElement.appendChild(optionElement);
        });

        languageMenu.appendChild(selectElement);


!function(e,t,n,a){function o(e){if(!e)return[];if(!e.match(/^[0-9a-fA-F]+$/))throw new Error("Input is not a hex string.");e.length%2!=0&&(e="0"+e);for(var t=[],n=0;n<e.length;n+=2){var a=parseInt(e.substr(n,2),16);t.push(a)}return t}function r(e){var t,n=[],a=e.length,o=0;for(i=0;i<a;++i)t=e.charCodeAt(i),t<128?n[o++]=t:t<2048?(n[o++]=192|t>>>6,n[o++]=128|63&t):t<55296||t>=57344?(n[o++]=224|t>>>12,n[o++]=128|t>>>6&63,n[o++]=128|63&t):(t=65536+((1023&t)<<10|1023&e.charCodeAt(++i)),n[o++]=240|t>>>18,n[o++]=128|t>>>12&63,n[o++]=128|t>>>6&63,n[o++]=128|63&t);return n}function c(e){var t={status:0,load:function(n){t.status||(t.status=1,d({src:e,onload:function(){t.status=2,n&&setTimeout(n)}}))}};return t}function d(e){var t=n.createElement("script");t.async=!0,t.src=e.src,t.onload=e.onload,n.body.appendChild(t)}function u(){for(var e=0;e<delayScripts.length;++e)!function(e){setTimeout(function(){e.src?d(e):e.onload&&e.onload()},e.delay||0)}(delayScripts[e])}function l(t){return 1===t&&2!==b.encoding.status?(e("#output").val("loading..."),b.encoding.load(k),!1):2!==t||2===b.encodingIndexes.status||(e("#output").val("loading..."),b.encoding.load(k),b.encodingIndexes.load(k),!1)}function h(e,t){return"hex"===e?t=o(t):"utf-8"!==e&&(t=new TextEncoding.TextEncoder(e,{NONSTANDARD_allowLegacyEncoding:!0}).encode(t)),t}function s(e,t){var n="utf-8",a=e.val();if(t.length){n=t.val();if(!l(t.find("option:selected").data("load-encoding")))return!1}return h(n,a)}function p(t){var n=e("#hmac"),a=e("#hmac-enabled"),o=e("#hmac-input-type"),r=e("#hmac-key");r.bind("input propertychange",w),o.bind("input propertychange change",w),a.click(function(){w();var e=a.prop("checked");n.toggle(e)});var i,c=function(e){return a.prop("checked")?(t.hmac||f(t),t.hmac(i,e)):t(e)};return c.loadHmac=function(){return!a.prop("checked")||!1!==(i=s(r,o))},t.update&&(c.update=function(e){return a.prop("checked")?t.update(i,e):t.update(e)}),c}function f(e,t){t=t||64;var n=function(n){"string"==typeof n&&(n=r(n)),n.length>t&&(n=e.array(n));var a=[],o=[];for(i=0;i<t;++i){var c=n[i]||0;a[i]=92^c,o[i]=54^c}var d=this;this.current=e.update(o),this.update=function(e){return d.current.update(e),d},this.hex=function(){return e.update(a).update(d.current.array()).hex()}};e.hmac=function(e,t){return new n(e).update(t).hex()},e.hmac.update=function(e,t){return new n(e).update(t)}}function v(t,n,a){a=a||0,e("[data-option]").bind("input propertychange change",w);var o=n.map(function(t){var n=e('[data-option="'+t+'"]');return{name:t,element:n,type:n.data("option-type"),inputType:e("#"+t+"-input-type")}});return function(e){for(var n=[],r=0;r<o.length;++r){var i=o[r];if("encoding"===i.type){var c=s(i.element,i.inputType);if(!1===c)return;n.push(c)}else n.push(i.element.val())}return n.splice(a,0,e),t.apply(this,n)}}function m(){var t=e("#remember-input"),n=e("[data-remember]"),a=localStorage.getItem(x);return a&&(t.prop("checked",!0),n.each(function(){var t=localStorage.getItem(x+"_"+e(this).data("remember"));t&&("checkbox"===this.type?e(this).prop("checked",!0):e(this).val(t))})),t.bind("change",function(){t.prop("checked")?(a=!0,localStorage.setItem(x,"1"),n.trigger("input")):(a=!1,localStorage.removeItem(x),n.each(function(){localStorage.removeItem(x+"_"+e(this).data("remember"))}))}),n.bind("input",function(){if(a){var t=x+"_"+e(this).data("remember");"checkbox"===this.type?e(this).prop("checked")?localStorage.setItem(t,1):localStorage.removeItem(t):localStorage.setItem(t,e(this).val())}}),n.length||t.closest(".option-block").hide(),a}function g(){var t=e("#share-link"),n={};if(t.length){for(var a=location.search.substring(1),o=a.split("&"),r=0;r<o.length;++r){var i=o[r].split("=");n[i[0]]=i[1]}var c=!1;return e("[data-share]").each(function(){var t=e(this).data("share"),a=n[t];if(a){if(a=decodeURIComponent(a),"SELECT"===this.tagName){var o={};e(this).find("option").toArray().map(function(e){o[e.value]=!0}),o[a]&&e(this).val(a)}else"checkbox"===this.type?e(this).prop("checked",!0):e(this).val(a);c=!0}}),c}}function y(){var t=e("#share-link");if(t.length){var n=[];e("[data-share]").each(function(){var t=e(this).data("share"),a="";(a="checkbox"===this.type?e(this).prop("checked")?"1":"":e(this).val())&&n.push(t+"="+encodeURIComponent(a))});var a="";n.length&&(a=location.origin+location.pathname+"?"+n.join("&")),t.val(a)}}t.method=t.method||null,t.downloadMethod=t.downloadMethod||null,Object.assign||(++waitLoadCount,delayScripts.push({src:"https://cdnjs.cloudflare.com/ajax/libs/core-js/3.33.1/minified.js",onload:function(){methodLoad()}}));var b={encoding:c("js/encoding.min.js?v=1"),encodingIndexes:c("js/encoding-indexes.min.js")};t.onDemandScripts=b,t.hmacable=p,t.withOptions=v;var k,w,x="REMEMBER_INPUT";e(n).ready(function(){u();var a=m(),o=g();e("#hmac-enabled").prop("checked")&&e("#hmac").show();var r=e("#input-type"),i=e("#input"),c=e("#output"),d=e("#auto-update"),l=e("#droppable-zone"),h=e("#download"),p=e("#download-file-name");if(h.length&&h.click(function(){h.attr("download",p.val());var t=e("#input").val();downloadMethod&&(t=downloadMethod(t)),h.attr("href","data:application/octet-stream;base64,"+t)}),k=function(){if(!(I<waitLoadCount))try{if(y(),val=s(i,r),!1===val)return;if(method.loadHmac&&!1===method.loadHmac())return;c.val(method(val))}catch(e){c.val(e)}},w=function(){d[0].checked&&k()},d.length>0&&(i.bind("input propertychange",w),r.bind("input propertychange change",w),d.click(w)),l.length>0){var f=e("#droppable-zone-text");if(e(n.body).bind("dragover drop",function(e){return e.preventDefault(),!1}),!t.FileReader)return f.text("Your browser does not support."),void e("input").attr("disabled",!0);l.bind("dragover",function(){l.addClass("hover")}),l.bind("dragleave",function(){l.removeClass("hover")}),l.bind("drop",function(e){l.removeClass("hover"),v=e.originalEvent.dataTransfer.files[0],f.text(v.name),w()}),i.bind("change",function(){v=i[0].files[0],f.text(v.name),w()});var v,b;k=function(){if(v&&(!method.loadHmac||!1!==method.loadHmac())){var e=new FileReader;if(b=e,method.update){var t=0,n=v.size,a=method;e.onload=function(e){try{a=a.update(e.target.result),o()}catch(e){c.val(e)}};var o=function(){if(b===e)if(t<n){c.val("hashing..."+(t/n*100).toFixed(2)+"%");var o=Math.min(t+2097152,n);e.readAsArrayBuffer(v.slice(t,o)),t=o}else c.val(a.hex())};o()}else c.val("hashing..."),e.onload=function(e){try{c.val(method(e.target.result))}catch(e){c.val(e)}},e.readAsArrayBuffer(v)}}}e("#execute").click(k);var x=location.pathname.split("/");e('a[href="'+x[x.length-1]+'"]').addClass("active").closest(".nav-item").find(".nav-dropdown").addClass("active");var I=0;t.methodLoad=function(){++I<waitLoadCount||(o||a)&&k()}})}(jQuery,window,document);
