<template>
    <div class="container">
        <h1>RecipeBook</h1>
        <div class="alert alert-danger" v-if="error">
            <b>Error!</b> Check the console for an error
        </div>
        <div v-if="ready">
            <div class="row">
                <search :onsubmit="onSubmit" :search-term="$route.query.q"></search>
            </div>
            <div class="row">
                <results-summary :results="results" class="col-md-3"></results-summary>
                <div class="col-md-9">
                    <result v-for="r in results"
                            :key="r.pageNumber"
                            :to-highlight="$route.query.q"
                            :section-key-name="r.sectionKeyName"
                            :page-number="r.pageNumber"
                            :record="r.record"></result>
                </div>
            </div>
        </div>
        <div class="alert" v-else>
            Loading...
        </div>
    </div>
</template>

<script>
    import Result from "@/components/Result";
    import ResultsSummary from "@/components/ResultsSummary";
    import Search from "@/components/Search";

    export default {
        name: "ResultsPage",
        components: {ResultsSummary, Result, Search},
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
            },
            onSubmit(searchTerm) {
                this.submitQuery(searchTerm);
                this.$route.query.q = searchTerm;
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
