<template>
    <div class="container">
        <h1>Search Results</h1>
        <div class="alert alert-danger" v-if="error">
            <b>Error!</b> Check the console for an error
        </div>
        <div v-if="ready">
            <result v-for="r in results"
                    :key="r.pageNumber"
                    :section-key-name="r.sectionKeyName"
                    :page-number="r.pageNumber"
                    :record="r.record"></result>
        </div>
        <div class="alert" v-else>
            Loading...
        </div>
    </div>
</template>

<script>
    import Result from "@/components/Result";
    export default {
        name: "ResultsPage",
        components: {Result},
        data() {
            return {
                results: [],
                ready: false,
                error: false,
            };
        },
        methods: {
            submitQuery(searchTerms) {
                let context = this;
                this.$api.post("/recipe/_search", {
                    query: {
                        match_phrase: {
                            record: searchTerms
                        }
                    },
                    sort: [
                        {"page": "asc"}
                    ]
                }).then(function (response) {
                    context.results = context.formResults(response);
                    context.ready = true;
                }).catch(function (error) {
                    console.log(error);
                    context.error = true;
                });
            },
            formResults(response) {
                if (response.data) {
                    let results = [];
                    for (let hit of response.data.hits.hits) {
                        results.push({
                            sectionKeyName: hit._source.section_name,
                            pageNumber: hit._source.page,
                            record: hit._source.record
                        });
                    }
                    return results;
                }
                return [];
            }
        },
        mounted() {
            if (this.results.length === 0) {
                this.submitQuery(this.$route.query.q);
            }
        }
    }
</script>

<style scoped>

</style>
