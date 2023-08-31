<template>
	<swiper
		:direction="'vertical'"
		:slidesPerView="1"
		:spaceBetween="30"
		:mousewheel="true"
		:pagination="{
			clickable: true,
		}"
		:modules="modules"
		class="mySwiper"
	>
		<swiper-slide v-for="(movie, index) in movies" :key="index">
			<div class="slide-content">
				<div class="slide-image">
					<img :src="movie.image_url" alt="Movie Image" />
				</div>
				<div class="slide-details">
					<h2>{{ movie.title }}</h2>
					<p>{{ movie.genre }}</p>
					<a :href="movie.trailer" target="_blank">Watch Trailer</a>
					<p>Premiere: {{ movie.premiere }}</p>
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/banner.scss";

import { Mousewheel, Pagination } from "swiper/modules";
import { movies } from "../utils/movies";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			modules: [Mousewheel, Pagination],
			movies,
		};
	},
	methods: {
		formatDate(date) {
			return new Date(date).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		},
	},
};
</script>
