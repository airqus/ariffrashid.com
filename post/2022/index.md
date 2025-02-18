<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Hello, I’m Ariff Rashid 👋</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
}

.simple-table-header {
	background: rgb(247, 246, 243);
	color: black;
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="2b6e49d6-8b3f-4718-85ff-7449a2f08af0" class="page sans"><header><div class="page-header-icon undefined"><img class="icon" src="Hello,%20I%E2%80%99m%202b6e4/peep_(3).png"/></div><h1 class="page-title">Hello, I’m Ariff Rashid 👋</h1></header><div class="page-body"><div id="350bb27d-abb5-4186-895a-2b7e61ceabe7" class="column-list"><div id="d6201bfb-d1bc-40e0-9988-ee755d2dbc64" style="width:68.75%" class="column"><blockquote id="7ff67b38-4992-44c5-80ef-fe0289793e9e" class="block-color-gray"><mark class="highlight-gray_background">I’m an </mark><strong><mark class="highlight-gray_background">IT Engineer</mark></strong><mark class="highlight-gray_background"> passionate about IT as a career and hobby!</mark></blockquote><p id="9b692a96-a605-4af0-9b4f-813fdb40e447" class="">
</p></div><div id="11540891-e517-4be2-acd9-e677c3fe510f" style="width:31.250000000000007%" class="column"><p id="403d170c-d672-4204-9e41-a7ba22496661" class="block-color-gray">📱 <a href="tel:+60103953601">+6010 395 3601</a></p><p id="b8bedbf0-cb70-41d4-b77d-bd100a197080" class="block-color-gray">📧 <a href="mailto:hello@ariffrashid.me">hello@ariffrashid.me</a></p><p id="db063770-5ffd-4cc3-9fc5-398afd349747" class="block-color-gray">🌏 <a href="https://g.page/petronastwintowersofficial?share">Kuala Lumpur, Malaysia </a></p><p id="df995b21-fdac-4603-bd53-e1674558bb84" class="">💼 <a href="http://linkedin.com/in/ariffrashid">linkedin.com/in/ariffrashid</a></p></div></div><hr id="649a8f96-a4f6-49c7-9be1-53d2c2e76db9"/><blockquote id="e3bf89a6-b057-4ee9-9cd1-5cd258bd681e" class="">Profile</blockquote><p id="4bd9959e-d102-4fd3-ac54-834ebc82b5b1" class="block-color-gray"><mark class="highlight-gray">Enthusiastic IT engineer with over 5+ years of experience in IT Ops. A certified Cloud Architect by Oracle. </mark></p><p id="eeb2824a-45c8-4be4-a7e4-26700bca1e7c" class=""><mark class="highlight-gray">My interest areas at this moment are </mark><mark class="highlight-yellow">cloud and security</mark><mark class="highlight-gray">, but I&#x27;m also experienced with :</mark></p><ul id="128b42dd-d9e5-43fd-ac34-704209c1c0cf" class="bulleted-list"><li style="list-style-type:disc"><mark class="highlight-gray">Windows Server </mark></li></ul><ul id="c7a10fca-e5f1-4b7f-888a-5e045d17a3b2" class="bulleted-list"><li style="list-style-type:disc"><mark class="highlight-gray">Red Hat Linux</mark></li></ul><ul id="8384fe86-ae79-4f9c-b319-3ba17ff24ae2" class="bulleted-list"><li style="list-style-type:disc"><mark class="highlight-gray">VMware vSphere</mark></li></ul><ul id="2c4c5ac6-859e-4894-915f-d887d7135297" class="bulleted-list"><li style="list-style-type:disc"><mark class="highlight-gray">Active Directory</mark></li></ul><ul id="ed970fa2-22b3-4fd1-ac13-857dcaeaae23" class="bulleted-list"><li style="list-style-type:disc"><mark class="highlight-gray">Microsoft 365</mark></li></ul><ul id="748969f3-ffba-4a27-aadd-4ac70f7e5138" class="bulleted-list"><li style="list-style-type:disc"><mark class="highlight-gray">Microsoft SCCM</mark></li></ul><ul id="42deb0f7-2f56-4f2a-9b97-8bcb9037d04c" class="bulleted-list"><li style="list-style-type:disc"><mark class="highlight-gray">PowerShell</mark></li></ul><p id="ff09418d-8398-4178-a21d-02a342bebfb9" class="">
</p><hr id="78d5d8ce-b507-409c-8c6b-52a1b952fc83"/><blockquote id="1299e820-dc16-4ea1-ae50-6cfe32d702bc" class="">Experience</blockquote><p id="139630f2-2652-4fb0-90d9-46286b17c54a" class=""><strong>VMware Project Engineer</strong></p><p id="62f9881e-d510-4d08-9778-99877113d203" class=""><strong><a href="https://www.averis.biz/what-we-do/"><mark class="highlight-gray">Averis Sdn. Bhd.</mark></a></strong><mark class="highlight-gray"><em> </em></mark><mark class="highlight-gray">- (2020 - 2021)</mark></p><p id="443ce083-c513-4b78-9e92-fb382fd6880c" class="">✅ Collaborated with project manager in which the project goal was to <mark class="highlight-yellow_background">upgrade VMware vSphere version 6.5 to the latest VMware vSphere production release version 7.0</mark></p><p id="f9be7dbf-b335-45d7-8b8e-225dca319c13" class="">✅ Dealt with 27 sites spread across the APAC region with over 100+ HPE ProLiant Gen9-10 ESXi server host s and over 30+ vCenter Server Appliances</p><p id="0022af8c-9448-4e3e-a2a0-d2660427e921" class="">✅ Performed the HPE ProLiant Gen9 and Gen 10 server firmware and driver upgrade using the HPE Service Pack for ProLiant (SPP) as part of the pre-requisite for vSphere 7.0 compatibility</p><p id="31d8bf00-2a27-4650-88a3-25dd9e00606d" class="">✅ Performed the ESXi upgrade using the new <a href="https://core.vmware.com/resource/introducing-vsphere-lifecycle-management-vlcm#section1">vSphere Lifecycle Manager (vLCM)</a> feature</p><p id="9760d546-dbd8-4897-a61a-a62eba0ed396" class="">✅ Prepared a failproof upgrade strategy plan which was tailored for each site’s vSphere architecture</p><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="e6947097-b5a1-4154-a073-eabd1bad3508"><div style="font-size:1.5em"><span class="icon">🔓</span></div><div style="width:100%">Skills unlocked: VMware vSphere 7.0, HPE ProLiant server, HPE iLO, vLCM, ESXCLI, vSphere licensing, HPE 3PAR, Project Management</div></figure><p id="a6e9efd3-2cdc-4354-849c-f647c74ea488" class="">
</p><p id="7e2a694e-4f96-41d3-ba87-7006251c5909" class=""><strong>Infrastructure and End User Computing Engineer</strong></p><p id="84e844ff-5d1c-496f-a552-fe0756380cac" class=""><mark class="highlight-gray"><a href="https://www.pli-petronas.com/en/about/about-petronas-lubricant-international">PETRONAS Lubricants International</a></mark><mark class="highlight-gray"><em> </em></mark><mark class="highlight-gray">- (2020 - 2021)</mark></p><p id="4ee4b2ba-e5f2-4ed7-ab5d-ef10a6b7be41" class="">
</p><p id="97a80aec-6d1b-483a-8944-fb8a131dfdce" class="">Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod quis viverra nibh cras pulvinar mattis nunc. Nibh praesent tristique magna sit amet purus gravida quis. Sit amet dictum sit amet justo donec. Malesuada fames ac turpis egestas maecenas. Id porta nibh venenatis cras sed felis.</p><p id="cf2bb964-4f76-4cc9-b199-e4f05162e521" class="">
</p><p id="c08ba65c-62b1-4141-a225-c4e11ddea30a" class=""><strong>Cloud Infrastructure Engineer</strong></p><p id="3ab328dd-b185-4fee-a64d-b8b538892ec3" class=""><mark class="highlight-gray"><a href="https://www.pli-petronas.com/en/about/about-petronas-lubricant-international">PETRONAS Lubricants International</a></mark><mark class="highlight-gray"> - (2019 - 2020)</mark></p><p id="2d61fda3-596f-47ea-b557-eada646045f7" class="">Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod quis viverra nibh cras pulvinar mattis nunc. Nibh praesent tristique magna sit amet purus gravida quis. Sit amet dictum sit amet justo donec. Malesuada fames ac turpis egestas maecenas. Id porta nibh venenatis cras sed felis.</p><p id="79e41057-74a5-4ea0-acc4-36dc10c2f46e" class="">
</p><p id="8b63f7e3-a927-43e4-8f8b-ca8af4a90db8" class=""><strong>Infrastructure Engineer</strong></p><p id="312ab649-775f-4cc6-962c-d86115507780" class=""><a href="https://macrokiosk.com/our-company#who-we-are"><mark class="highlight-gray">MACROKIOSK</mark></a><a href="https://macrokiosk.com/our-company#who-we-are"><mark class="highlight-gray"><em> </em></mark></a><mark class="highlight-gray">- (2018 - 2019)</mark></p><p id="cff24e5f-44c4-4141-8ddb-227ff52ee9b3" class="">Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod quis viverra nibh cras pulvinar mattis nunc. Nibh praesent tristique magna sit amet purus gravida quis. Sit amet dictum sit amet justo donec. Malesuada fames ac turpis egestas maecenas. Id porta nibh venenatis cras sed felis.</p><p id="2c69e219-c471-4656-bbd3-259073c97db3" class="">
</p><p id="808d02c8-00c4-4193-a148-b50c95dec700" class=""><strong>Service Account Engineer</strong></p><p id="b585ab59-f497-4fbb-9c88-ab2f1f291704" class=""><a href="https://opencode.com/about/company">Opencode</a><mark class="highlight-gray"> - (2017 - 2018)</mark></p><p id="44f30407-09b3-4f6f-af96-a3094874ee0b" class="">Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod quis viverra nibh cras pulvinar mattis nunc. Nibh praesent tristique magna sit amet purus gravida quis. Sit amet dictum sit amet justo donec. Malesuada fames ac turpis egestas maecenas. Id porta nibh venenatis cras sed felis.</p><p id="548fdfcc-e46a-454e-aaed-5789c0f18dce" class="">
</p><hr id="72f2e84d-6bf0-4378-8aba-2db13970e257"/><blockquote id="322a4689-8527-4dae-afad-75c1b652b664" class="">Education</blockquote><p id="b460ca8a-f0e3-4151-a1e9-3e9d04e12bdf" class="block-color-gray">Bachelor of Computer Science &amp; Information Technology - Network Computing</p><p id="98c07829-712b-4825-a669-ac5f91ebf6cd" class=""><a href="https://www.unimas.my/home/corporate-info">Universiti Malaysia Sarawak </a><mark class="highlight-gray">- (2012 -2016)</mark></p><p id="d9186d3f-1ccd-40d0-b66d-02ebd53a028a" class="">
</p><hr id="dadc4852-c7a8-459e-a23a-4554579af4c1"/><blockquote id="482a211c-4546-417e-8158-609560ecadf8" class="">Certification</blockquote><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="d6b17b5e-5d4c-470a-a6ed-4f5b95d6e0e2"><div style="font-size:1.5em"><span class="icon">🛠️</span></div><div style="width:100%"><a href="https://drive.google.com/file/d/1wovs_2MZY5SErcANfnbhjpyCsD9v9WvY/view">Oracle Cloud Infrastructure 2021 - Certified Architect Associate</a></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="0387ee4a-9ea1-404e-a168-2b27487a2f2e"><div style="font-size:1.5em"><span class="icon">🛠️</span></div><div style="width:100%">Fortinet - Network Security Expert 1 &amp; 2</div></figure><hr id="b8a85b23-299e-490d-a467-3e7be06d0fcc"/><figure id="8459fdaa-b172-4ed0-8510-f3c027bcf295"><div class="source"><a href="https://html.cafe/x55b41f96">https://html.cafe/x55b41f96</a></div></figure><p id="9626c49b-8407-4337-820e-3761b07622c4" class="">
</p></div></article></body></html>
