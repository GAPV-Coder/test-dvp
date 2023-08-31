<template>
	<div class="movie-card" @click="openModal">
		<img :src="movie.poster_path" :alt="movie.title" class="movie-image" />
		<div class="movie-details">
			<h3 class="movie-title">{{ movie.title }}</h3>
			<p class="movie-genre">{{ getGenreNames(movie.genre_ids) }}</p>
			<p class="movie-votes">Votes: {{ movie.vote_average }}</p>
		</div>
	</div>
</template>

<script>
import { useMovieStore } from "../store/store";

export default {
	props: {
		movie: Object,
		genres: Array,
	},
	methods: {
		getGenreNames(genreIds) {
			if (this.genres) {
				const genreNames = genreIds.map(
					(id) => this.genres.find((genre) => genre.id === id)?.name
				);
				return genreNames.join(", ");
			}
			return "";
		},
		openModal() {
			useMovieStore.getState().fetchMovieById(this.movie.id);
			this.$emit("open-modal", this.movie.id);
		},
	},
};
</script>
