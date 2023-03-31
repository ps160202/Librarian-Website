<template>
    <div>
        <AppHeader title="Authors"></AppHeader>

        <v-list subheader>
            <v-subheader>Authors</v-subheader>

            <v-list-item v-for="author in authors" :key="author.id">
                <v-list-item-content>
                    <v-list-item-title v-text="author.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Edit</v-list-item-title>
                                <v-icon>mdi-pencil</v-icon>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Delete</v-list-item-title>
                                <v-icon>mdi-delete</v-icon>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import authorList from '@/data/authors.json'
export default {
    data() {
        return {
            authors: authorList
        }
    },
    components: {
        AppHeader,
    },
}
</script>

<style lang="scss" scoped></style>