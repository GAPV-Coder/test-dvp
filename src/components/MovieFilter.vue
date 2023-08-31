<template>
	<div class="movie-filter">
		<div class="nav">
			<div
				v-for="(option, key) in filterOptions"
				:key="key"
				@click="fetchMovies(key)"
				:class="{ active: activeOption === key }"
				class="nav-option"
			>
				{{ option }}
			</div>
		</div>
		<div class="movie-list">
			<MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
		</div>
		<Pagination
			:currentPage="currentPage"
			:totalPages="totalPages"
			@update-page="updatePage"
		/>
	</div>
</template>

<script>
import { useMovieStore, endpoints } from "../store/store";
import MovieCard from "./MovieCard.vue";
import Pagination from "./Pagination.vue";
import "../styles/movieFilter.scss";

export default {
	name: "MovieFilter",
	components: {
		MovieCard,
		Pagination,
	},
	data() {
		return {
			filterOptions: {
				MOST_POPULAR: "Most Popular",
				TOP_RATED: "Top Rated",
				UPCOMING: "Upcoming",
			},
			activeOption: "MOST_POPULAR",
			movies: [],
		};
	},
	methods: {
		async fetchMovies(endpointKey) {
			this.activeOption = endpointKey;
			await useMovieStore.setState({ movies: [] });
			await useMovieStore.getState().fetchMovies(endpointKey);
			this.movies = useMovieStore.getState().movies;
			console.log("Data", this.movies);
		},
	},
	mounted() {
		this.fetchMovies(this.activeOption);
	},
};
</script>
