<template>
    <div class="container all-center">
        <h1>RecipeBook</h1>
        <search :onsubmit="onSubmit"></search>
    </div>
</template>

<script>
    import Search from "@/components/Search";

    export default {
        name: "MainPage",
        components: {
            Search
        },
        methods: {
            onSubmit(searchTerm) {
                this.$router.push({
                    path: 'results',
                    query: {
                        q: searchTerm
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .all-center {
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>
