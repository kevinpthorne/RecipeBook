<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Pages Found</h5>
            <p class="card-text" v-for="r in results" :key="r.pageNumber">
                {{ renderSectionName(r.sectionKeyName) }} - Page {{ r.pageNumber }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResultsSummary",
        props: {
            results: Array,
        },
        data() {
            return {
                sectionMap: {
                    "appetizersbeverages": "Appetizers & Beverages",
                    "soupssalads": "Soups & Salads",
                    "veggiessides": "Vegetables & Side Dishes",
                    "maindishes": "Main Dishes",
                    "breadsrolls": "Breads & Rolls",
                    "desserts": "Desserts",
                    "cookiescandy": "Cookies & Candies",
                    "thisthat": "This & That"
                }
            }
        },
        methods: {
            renderRecord(record) {
                console.log(record);
                // record = record.replace("\n", "<br />");
                return record;
            },
            renderSectionName(sectionKeyName) {
                return this.sectionMap[sectionKeyName];
            }
        }
    }
</script>

<style scoped>

</style>
