<template>
    <ul>
        <router-link tag="li" :to="menu.route" v-for="(menu, index) in mainmenu" :key="index"><a>{{ menu.name }}</a></router-link>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            mainmenu: [
                { name: "Home", route: "/"},
                { name: "Portfolio", route: "/portfolio"},
                { name: "Contact", route: "/contact"},
                { name: "About", route: "/about"}
            ]
        }
    }
}
</script>