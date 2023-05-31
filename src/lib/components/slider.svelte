<div class="page-container">
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <i class="fa-brands fa-html5 stack-icons" />
      </div>
      <div class="slide">
        <i class="fa-brands fa-css3-alt stack-icons" />
      </div>
      <div class="slide">
        <i class="fa-brands fa-js stack-icons" />
      </div>
      <div class="slide">
        <i class="fa-brands fa-react stack-icons" />
      </div>
      <div class="slide">
        <i class="fa-brands fa-php stack-icons" />
      </div>
      <div class="slide">
       <i class="fa-brands fa-wordpress-simple stack-icons" />
      </div>
      <div class="slide">
        <i class="fa-brands fa-square-github stack-icons" />
      </div>
      <div class="slide">
        <i class="fa-brands fa-square-git stack-icons" />
      </div>
    </div>
  </div>
</div>

<style>
  @-webkit-keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}

@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}

.slider {
	box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.125);
	margin: auto;
	overflow: hidden;
	position: relative;
	max-width: 750px;
	padding: 20px;
}

.slider::before,
.slider::after {
	content: '';
	position: absolute;
	width: 200px;
	z-index: 2;
}

.slider::after {
	right: 0;
	top: 0;
	transform: rotateZ(180deg);
}

.slider::before {
	left: 0;
	top: 0;
}

.slider .slide-track {
	-webkit-animation: scroll 40s linear infinite;
	animation: scroll 40s linear infinite;
	display: flex;
	width: calc(250px * 14);
}

.slide {
	width: 250px;
}

/* Icon */
.stack-icons {
	font-size: 45px;
	color: #000;
}
</style>