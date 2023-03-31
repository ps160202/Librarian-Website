<template>
    <div class="app-header">
        <v-row>
            <v-col cols="10">
                <b>{{ title }}</b>
            </v-col>
            <v-col cols="2">
                <div class="text-right">
                    <v-btn icon @click="$emit('add')">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-text-field label="Search" append-icon="mdi-magnify" style="margin-left: 1%; margin-right: 1%;"
                @input="$emit('search', $event)">
            </v-text-field>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
    },
}
</script>

<style lang="scss" scoped>
.app-header {
    padding: 1%;
}
</style>