<template>
	<div v-if="isOpen" class="modal-overlay">
		<div class="modal">
			<button class="close-btn" @click="closeModal">Close</button>
			<div class="modal-content">
				<div class="image-section">
					<img :src="movie.poster_path" :alt="movie.title" />
				</div>
				<div class="details-section">
					<div class="movie-title">{{ movie.title }}</div>
					<div class="movie-details">
						<p>Genres: {{ getGenreNames(movie.genre_ids) }}</p>
						<p>Language: {{ movie.original_language }}</p>
						<p>Votes: {{ movie.vote_average }}</p>
						<p>Popularity: {{ movie.popularity }}</p>
					</div>
					<div class="overview">{{ movie.overview }}</div>
					<div class="buttons">
						<div class="button" @click="playTrailer">
							<font-awesome-icon :icon="['fas', 'play']" />
							Watch Trailer
						</div>
						<div class="button">To Watchlist</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "../styles/modal.scss";

export default {
	name: "Modal",
	components: {
		FontAwesomeIcon,
	},
	props: {
		isOpen: Boolean,
		movie: Object,
		genres: Array,
	},
	methods: {
		closeModal() {
			this.$emit("close");
		},
		getGenreNames(genreIds) {
			if (this.genres) {
				const genreNames = genreIds.map(
					(id) => this.genres.find((genre) => genre.id === id)?.name
				);
				return genreNames.join(", ");
			}
			return "";
		},
		playTrailer() {
			// Implement the logic to play the trailer here
		},
	},
};
</script>
