<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control"
               v-model="searchTerm"
               v-on:keyup.enter="submit"
               placeholder="e.g. 5 eggs">
        <div class="input-group-append">
            <button class="btn btn-outline-primary" @click="submit"
                    type="button">Search</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        props: {
            onsubmit: Function,
            searchTerm: {
                default: '',
                type: String
            }
        },
        methods: {
            submit: function () {
                this.onsubmit(this.searchTerm);
            }
        }
    }
</script>

<style scoped>

</style>
