<template>
    <div>
        <AppHeader title="Books"
            @add="$router.push('/Books/0')"
            @search="searchInBooks($event)">
        </AppHeader>

        <v-list dense>
            <v-subheader>Books</v-subheader>
            <v-list-item v-for="item in books" :key="item.id">
                <v-list-item-avatar tile>
                    <v-img :src="item.img"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.author.name }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Pages: {{ item.pages }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item @click="$router.push('/books/' + item._id)">
                                <v-list-item-title>Edit</v-list-item-title>
                                <v-icon>mdi-pencil</v-icon>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Delete</v-list-item-title>
                                <v-icon>mdi-delete</v-icon>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Issue</v-list-item-title>
                                <v-icon>mdi-book</v-icon>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Return</v-list-item-title>
                                <v-icon>mdi-arrow-down</v-icon>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-list-item-subtitle>Status</v-list-item-subtitle>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import booksList from '@/data/books.json'
import AppHeader from '@/components/AppHeader.vue'

export default {

    data() {
        return {
            books: booksList
        }
    },
    components: {
        AppHeader,
    },
    methods: {
        searchInBooks(searchText) {
            if(searchText) {
                this.books = booksList.filter(rec => rec.title.toLowerCase().includes(searchText));
            }
            else {
                this.books = booksList;
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>