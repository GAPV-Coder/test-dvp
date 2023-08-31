import { createStore } from "zustand";
import axios from "axios";

import { ACCESS_TOKEN_AUTH, API_KEY } from "../utils/credentials";

const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
	MOST_POPULAR: `/movie/popular`,
	TOP_RATED: "/movie/top_rated",
	UPCOMING: "/movie/upcoming",
};

const useMovieStore = createStore((set) => ({
	movies: [],

	fetchMovies: async (endpointKey) => {
		try {
			const response = await axios.get(`${baseUrl}${endpoints[endpointKey]}`, {
				params: {
					api_key: API_KEY,
					language: "en-US",
					page: 1,
                    page_size: 6,
				},
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
				},
			});

			set({ movies: response.data.results });
		} catch (error) {
			console.error("Error fetching movies:", error);
		}
	},

    fetchMovieById: async (movieId) => {
		try {
			const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
				params: {
					api_key: API_KEY,
					language: "en-US",
				},
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
				},
			});

			set({ movie: response.data });
		} catch (error) {
			console.error("Error fetching movie:", error);
		}
	},
    
}));

export { useMovieStore, endpoints };
