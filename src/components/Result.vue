<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ renderSectionName(sectionKeyName) }} - Page {{ pageNumber }}</h5>
            <div class="card-text record">
                <div v-html="renderRecord(record)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Result",
        props: {
            sectionKeyName: String,
            pageNumber: Number,
            record: String,
            toHighlight: {
                default: '',
                type: String
            }
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
                record = record.replace("\n", "<br />");
                if (this.toHighlight) {
                    record = record.replace(this.toHighlight,
                        `<span class='highlight' style="background-color: #FFF000">${this.toHighlight}</span>`);
                    record = record.replace(this.toHighlight.toUpperCase(),
                        `<span class='highlight' style="background-color: #FFF000">${this.toHighlight.toUpperCase()}</span>`);
                    record = record.replace(this.toHighlight.toLowerCase(),
                        `<span class='highlight' style="background-color: #FFF000">${this.toHighlight.toLowerCase()}</span>`);
                }
                return record;
            },
            renderSectionName(sectionKeyName) {
                return this.sectionMap[sectionKeyName];
            }
        }
    }
</script>

<style scoped>
    .record {
        font-family: monospace;
        font-size: 9pt;
    }

    .highlight {
        background-color: #FFF000;
    }
</style>
