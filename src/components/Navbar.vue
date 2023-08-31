<template>
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <img src="../assets/images/logo.png" alt="logo" />
            </div>
            <div class="nav-toggle" @click="toggleNavigation">
                <font-awesome-icon class="menu-icon" v-if="!showNavigation" :icon="['fas', 'bars']" />
                <font-awesome-icon class="menu-icon" v-else :icon="['fas', 'circle-xmark']" />
            </div>
            <div class="nav-options" :class="{ 'show-nav': showNavigation }">
                <router-link class="nav-option" to="/movies">Movies</router-link>
                <router-link class="nav-option" to="/tv-series">TV Series</router-link>
                <router-link class="nav-option" to="/trending">Trending Shows</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import "../styles/navbar.scss"

export default {
    name: "Navbar",
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            showNavigation: false,
            faBars,
            faCircleXmark
        }
    },
    methods: {
        toggleNavigation() {
            this.showNavigation = !this.showNavigation
        }
    }
};
</script>