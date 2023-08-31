<template>
	<footer class="footer">
		<div class="footer-content">
			<div class="footer-logo">
				<img src="../assets/images/logo.png" alt="Logo" />
			</div>
			<div class="social-icons">
				<a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
				<a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
				<a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
			</div>
			<div class="copy">&copy; GAPV-Coder</div>
		</div>
	</footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "../styles/footer.scss";

config.autoAddCss = false;

export default {
	components: {
		FontAwesomeIcon,
	},
	created() {
		library.add(faFacebook, faInstagram, faTwitter);
	},
};
</script>
