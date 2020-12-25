<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ renderSectionName(sectionKeyName) }} - Page {{ pageNumber }}</h5>
            <p class="card-text">
                <pre>{{ renderRecord(record) }}</pre>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Result",
        props: {
            sectionKeyName: String,
            pageNumber: Number,
            record: String
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
