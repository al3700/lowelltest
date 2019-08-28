import styled from 'styled-components';

// ----------------------------------------
// General Page Styles
// ----------------------------------------
export const CafeWrapper = styled.main`
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}

  font-family: 'Lora Regular';
  font-size: 1.7rem;
	text-align: center;
  background: #ECEBE9;


/* --------------------------------------------------------------------------
Mixins
-----------------------------------------------------------------------------*/

.small-nitti-caps {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 1.1rem;
  font-family: 'Nitti Light';
}



.button,
button {
	cursor: pointer;
	-webkit-font-smoothing: antialiased;
  font-family: 'Gotham Bold';
  font-size: 1.4rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
	border: 0;
	border-radius: 0;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	outline: none;
	display: block;
	width: 100%;
	background-color: #5F6252;
	padding: 16px 24px;
	text-align: center;
	color: white;

	margin-top: 48px;

	&:hover {}
}

.button-light {
  background: white;
  color: #B9AC88;
  margin-top: 0;
  margin-bottom: 14px;
  max-width: 565px;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 758px) {
	button {
		margin-top: 40px;
		font-size: 12px;
		padding: 13px 20px;
	}
}


input,
textarea {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 1.1rem;
  font-family: 'Nitti Light';
	border: none;
	outline: none;
	display: block;
	width: 100%;
	background-color: transparent;
	box-shadow: none;
	padding-bottom: 1px;
	letter-spacing: 1.6px;
	letter-spacing: 0.1rem;
	font-size: 22.4px;
	font-size: 1.6rem;
	border-radius: 0;
	-webkit-appearance: none;
}

.inline-input {
	width: 60px;
	border-right: 1px solid #A8A8A8;
	&:not(:first-of-type) {
		padding-left: 30px;
		width: 80px;
	}
}

@media only screen and (max-width: 758px) {
	input {
		font-size: 14px;
	}
}

/* Instagram Handle Autofill */
.instagram-input-wrapper {
	position: relative;
	padding-left: 11px;
	&.active::before {
		color: #171717;
	}
	&::before {
		content: '@';
		color: #787878;
		font-family: "Nitti",sans-serif;
		position: absolute;
		left: 0;
		top: calc(50% - 1px);
		transform: translateY(-50%);

	}
}

label {
  font-family: 'Gotham Bold';
  font-size: 1.4rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
	margin-right: 12px;
	letter-spacing: 0.08em;
}

@media only screen and (max-width: 758px) {
	label {
		font-size: 12px;
		letter-spacing: 0.05em;
	}
}


input[type="checkbox"] {
	display: none;
}

input[type="checkbox"] + span {
	display: inline-block;
	margin-right: 14px;
	width: 29px;
	height: 29px;
	border: 2px solid #5F6252;
	-webkit-transition: all 0.3s ease-in-out 0.2s;
	transition: all 0.3s ease-in-out 0.2s;
	position: relative;
	border-radius: 50%;

	img {
		opacity: 0;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
}

@media only screen and (max-width: 758px) {
	input[type="checkbox"] + span {
		margin-right: 10px;
		width: 17px;
		height: 17px;
		border: 1px solid #5F6252;
		img {
			width: 10px;
		}
	}
}

/* Checked Checkbox Styles  ================== */
input[type="checkbox"]:checked + span {
	background: #5F6252;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	img {
		opacity: 1;
		-webkit-transition: all 0.3s ease-in-out 0.2s;
		transition: all 0.3s ease-in-out 0.2s;
	}
}

/* Checkbox Label Styles  ================== */
.checkbox-wrapper label {
	cursor: pointer;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	margin-bottom: 24px;
	margin-top: 16px;
}

@media only screen and (max-width: 758px) {
	.checkbox-wrapper {
		margin-top: 36px;
	}
}

/* --------------------------------------------------------------------------
Placeholders
-----------------------------------------------------------------------------*/
::-webkit-input-placeholder {
	color: #787878;
}
::-moz-placeholder {
	color: #787878;
}
:-ms-input-placeholder {
	color: #787878;
}
:-moz-placeholder {
	color: #787878;
}

.validation-wrapper {
	position: relative;
	margin-bottom: 28px;
	border-bottom: 1px solid #A8A8A8;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: end;
	-ms-flex-align: end;
	align-items: flex-end;
	padding-bottom: 38.4px;
	padding-bottom: 2.4rem;

	&.has-error {
		border-bottom: 1px solid red;
	}
}

@media only screen and (max-width: 758px) {
  .validation-wrapper {
    margin-bottom: 24px;
  }
}

.error {
	font-size: 17.6px;
	font-size: 1.1rem;
	margin-top: 0;
	position: absolute;
	bottom: -6px;
	color: red;
	-webkit-transform: translateY(100%);
	transform: translateY(100%);
}

.thanks {
  display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: white;
	z-index: 4;
	opacity: 0;
  visibility: hidden;
  transition: all .3s ease-in-out;
  &.show-thanks {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    opacity: 1;
    visibility: visible;
    h2 {
      font-size: 24px;
    }
  }
	h1 {
		margin-bottom: 0;
		margin-top: 0;
	}
	p {
		margin-bottom: 48px;
		margin-bottom: 3rem;
	}
}

@media only screen and (max-width: 758px) {
	.validation-wrapper {
		padding-bottom: 1.1rem;
	}
}
.cols-2-sm {
	grid-template-columns: repeat(2, 1fr);
}

.events-link-wrapper {
  text-align: center;
  margin-top: 50px;
  a {
    font-size: 1.5rem;
    color: #A38F60;
    border-bottom: 1px solid #A38F60;
  }
}

@media only screen and (max-width: 768px) {
  .events-link-wrapper {
    margin-top: 30px;
  }
}

.split-aligner {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
}

.container,
[class*="container"] {
	width: 82%;
	max-width: 1310px;
	margin-left: auto;
	margin-right: auto;
}

@media only screen and (min-width: 769px) {
  .container,
  [class*="container"] {
  		width: 70%;
  }

}


.container-md {
	max-width: 940px;
}

.container-sm {
	max-width: 900px;
}

.container-xs {
	max-width: 600px;
}

h1,
h2,
h3,
h4 {
  font-weight: normal;
  font-style: normal;
  line-height: 1;
}



img {
  max-width: 100%;
}

.lozad {
  opacity: 0;
  -webkit-transition: all 0.6s ease-in-out 0.3s;
  transition: all 0.6s ease-in-out 0.3s;
  &.loaded {
    opacity: 1;
  }
}

.collage-parent {
  position: relative;
}
.collage-images {
  height: 0;
  img {
    position: absolute;
  }
}

.key-info {
  padding: 60px 0;
  text-align: center;
  div {
    margin-bottom: 20px;
  }
}

/* Intro Info Type ================== */
.key-info {
  h3 {
    border-bottom: 1px solid #69574E;
    font-family: 'Gotham Bold';
    font-size: 1.3rem;
    color: #69574E;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 22.4px;
    font-size: 1.4rem;
    letter-spacing: 0.1em;
    max-width: 256px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 14px;
    margin-bottom: 18px;
    font-weight: normal;
  }
  p:not(:last-of-type) {
    margin-bottom: 20px;
  }
  p {
    line-height: 1.4;
    color: #333639;
    font-size: 1.3rem;
    font-family: 'Nitti Light';
    letter-spacing: .08em;
    color: #171717;
  }
}

/* Key Info Section ================== */
@media only screen and (max-width: 758px) {
  .key-info {
    border-bottom: 0;
    padding: 50px 0;
    hr {
      display: none;
    }
    h3 {
      margin-bottom: 16px;
    }
    .cols-2 > div:first-of-type {
      margin-bottom: 45px;
    }
  }
}

/* --------------------------------------------------------------------------
HEADER
-----------------------------------------------------------------------------*/
header {
  border-top: 6px solid #171717;
  margin-top: 5px;
  padding-top: 106px;
  padding-bottom: 72px;
  .container-sm {
    position: relative;
  }
  .header-hr {
    margin-top: 65px;
    margin-bottom: 50px;
    border: 0;
    border-bottom: 1px solid #D4CFCC;
  }
  h1 {
    img {
      max-width: 273px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  h2 {
    font-family: 'Lora Regular';
    font-size: 7.8rem;
    font-weight: 400;
    margin-bottom: 40px;
    max-width: 815px;
    margin-left: auto;
    margin-right: auto;
  }
  h3 {
    font-family: 'Lora Regular';
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 20px;
    max-width: 565px;
    margin-left: auto;
    margin-right: auto;
    color: #6B6653;
  }
  .intro-text {
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.4;
    color: #333639;
    font-size: 1.6rem;
    font-family: 'Nitti Light';
    margin-top: 20px;
    letter-spacing: .03em;

  }
}


@media only screen and (max-width: 1200px) {
  header {
    h2 {
      font-size: 5rem;
      font-weight: 400;
      margin-bottom: 60px;
      max-width: 500px;
    }
  }
}

/* DESKTOP COLLAGE IMAGES ================== */
header {
  .collage-images {
    img {
      position: absolute;
      z-index: 10;
    }
    .desktop-collage-1 {
      top: 1%;
      left: 0;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      max-width: 409px;
      width: 46%;
    }
    .desktop-collage-2 {
      top: 5%;
      right: 0;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      max-width: 300px;
      width: 32%;

    }
    .desktop-collage-3 {
      bottom: -110px;
      right: 0;
      -webkit-transform: translate(100%, 50%);
      transform: translate(100%, 50%);
      max-width: 475px;
      width: 48%;
    }
  }
}

/* Mobile Styles */
@media only screen and (max-width: 758px) {
  header {
    border-top: 0;
    padding-bottom: 50px;
    padding-top: 100%;
    overflow: hidden;
    position: relative;
    margin-top: 0;
    .mobile-collage {
      position: absolute;
      top: 3px;
      left: -9%;
      width: 126%;
      max-width: 800px;
      &.loaded {
        transition: opacity 0.6s ease-in 0.2s;
        top: -4%;
      }
    }
    h2 {
      font-size: 4rem;
      margin-bottom: 32px;
      line-height: 1.2;
    }
    h3 {
      font-size: 1.8rem;
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .intro-text {
      font-size: 1.4rem;
      margin-bottom: 50px;
      margin-top: 0;

    }
  }
}

.animation-wrapper {
  -webkit-animation: slideUp 1s ease-out 0.2s;
  animation: slideUp 1s ease-out 0.2s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-transform: translateY(20px);
  transform: translateY(20px);
}

@-webkit-keyframes slideUp {
  0% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.prohibition {
  padding-bottom: 80px;

  p {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 97.6px;
    font-size: 6.1rem;
    letter-spacing: 0.04em;
    max-width: 460px;
    margin: 0 auto 40px;
    line-height: 0.95;
  }
  h4 {
    font-family: 'Lora Bold';
    text-transform: uppercase;
    letter-spacing: 0.24em;
    margin-bottom: 32px;
    font-size: 30.4px;
    font-size: 1.9rem;
  }
}

/* DESKTOP COLLAGE IMAGES ================== */
.prohibition {
  .collage-images {
    .desktop-collage-1 {
      top: 75%;
      left: -8%;
      -webkit-transform: translateX(-130%);
      transform: translateX(-130%);
      max-width: 225px;
      width: 38%;
    }
  }
}

/* Media Queries ================== */
@media only screen and (max-width: 758px) {
  .prohibition {
    padding-bottom: 60px;
    hr {
      margin-bottom: 50px;
    }
    h3 {
      font-size: 60.8px;
      font-size: 3.8rem;
      margin: 0 auto 25px;
    }
    h4 {
      font-family: 'Lora Regular';
      font-weight: 400;
      font-size: 19.2px;
      font-size: 1.2rem;
      margin-bottom: 10px;
      letter-spacing: 0.16em;
    }
    p {
      font-size: 12px;
      line-height: 1.7;
    }
  }
}

.press {
  padding-top: 50px;
  padding-bottom: 100px;
  .container {
    max-width: 1150px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 88%;
  }
  h5 {
    font-family: 'Lora Regular';
    font-size: 2.5rem;
    letter-spacing: 0.06em;
    margin-bottom: 35px;
  }
  .press-logo {
    max-width: 160px;
    display: inline-block;
    margin: 15px 50px;
    max-height: 73px;

  }
  a:first-of-type {
    img {
      width: 100%;
    }
  }
  a:nth-of-type(11) img {
    max-width: 88px;
  }
  a:hover {
    opacity: 0.8;
    -webkit-transform: translateY(2px);
    transform: translateY(2px);

  }
}


/* MEDIA QUERIES ================== */
@media only screen and (max-width: 758px) {
  .press {
    padding-top: 36px;
    padding-bottom: 36px;
    h5 {
      font-size: 1.8rem;
      margin-bottom: 16px;
    }
    a {
      max-width: calc(50% - 40px);
      margin: 15px 20px;
    }
    .press-logo {
      margin: 0;
      max-width: 100%;
      max-height: 31px;
    }
  }
}

`;
