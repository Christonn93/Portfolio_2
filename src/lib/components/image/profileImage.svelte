<div class="h-fit">
	<div class="profile-image-wrapper">
		<img src="/images/ct-image-noBg.png" alt="profile pictures" loading="lazy" />
	</div>
</div>

<style>
	/* Profile image */
	.wrapper {
		height: 100%;
		width: 100%;
		max-height: 550px;
		max-width: 475px;
	}

	.profile-image-wrapper {
		position: relative;
		height: 100%;
		width: 100%;
		border-radius: 100% 0% 100% 0% / 25% 75% 25% 75%;
		background-image: linear-gradient(
			rgba(68, 85, 90, 0.1),
			rgba(69, 86, 91, 0.5),
			rgba(68, 85, 90, 0.9)
		);
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.2);
		overflow: hidden;
	}

	.profile-image-wrapper img {
		position: absolute;
		bottom: 0;
	}
</style>
