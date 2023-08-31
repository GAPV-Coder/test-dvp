<template>
    <div>
        <Navbar />
        <Banner />
        <MovieFilter />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';
import MovieFilter from '../components/MovieFilter.vue';

export default {
    name: "Movies",
    MovieFilter,
    components: { Navbar, Banner, MovieFilter }
}
</script>