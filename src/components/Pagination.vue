<template>
	<div class="pagination">
		<button class="pagination-button" v-if="currentPage > 1" @click="prevPage">
			Prev.
		</button>
		<div class="pagination-number">{{ currentPage }}</div>
		<button
			class="pagination-button"
			v-if="currentPage < totalPages"
			@click="nextPage"
		>
			Next
		</button>
	</div>
</template>

<script>
export default {
	name: "Pagination",
	props: {
		currentPage: Number,
		totalPages: Number,
	},
	methods: {
		prevPage() {
			this.$emit("update-page", this.currentPage - 1);
		},
		nextPage() {
			this.$emit("update-page", this.currentPage + 1);
		},
	},
};
</script>
