<template>
    <div>
        <AppHeader title="Issues"></AppHeader>

        <v-list dense>
            <v-subheader>Issues</v-subheader>
            <v-list-item v-for="issue in issues" :key="issue.id">
                <v-list-item-content>
                    <v-list-item-title>Return Date</v-list-item-title>
                    <v-list-item-title>{{ getDate(issue.returnDate) }}</v-list-item-title>
                    <v-list-item-title>{{ getMonth(issue.returnDate) }}, {{ getYear(issue.returnDate) }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <v-list-item-title>Book Name: {{ issue.book.title }}</v-list-item-title>
                    <v-list-item-subtitle>Member Name: {{ issue.member.name }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Issue Date: {{ issue.issueDate }}</v-list-item-subtitle>
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
                                <v-list-item-title>Return</v-list-item-title>
                                <v-icon>mdi-pencil</v-icon>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Notify</v-list-item-title>
                                <v-icon>mdi-delete</v-icon>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Approve</v-list-item-title>
                                <v-icon>mdi-book</v-icon>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import issueList from '@/data/issues.json'
import AppHeader from '@/components/AppHeader.vue'
    export default {
        data() {
            return {
                issues: issueList
            }
        },
        components: {
            AppHeader,
        },
        methods: {
            getDate(dateString) {
                const dateArray = dateString.split('-');
                return dateArray[2];
            },
            getMonth(dateString) {
                const dateArray = dateString.split('-');
                if(dateArray[1] == "01")
                    return "January";
                else if(dateArray[1] == "02")
                    return "February";
                else if (dateArray[1] == "03")
                    return "March";
                else if (dateArray[1] == "04")
                    return "April";
                else if (dateArray[1] == "05")
                    return "May";
                else if (dateArray[1] == "06")
                    return "June";
                else if (dateArray[1] == "07")
                    return "July";
                else if (dateArray[1] == "08")
                    return "August";
                else if (dateArray[1] == "09")
                    return "September";
                else if (dateArray[1] == "10")
                    return "October";
                else if (dateArray[1] == "11")
                    return "November";
                else if (dateArray[1] == "12")
                    return "December";
            },
            getYear(dateString) {
                const dateArray = dateString.split('-');
                return dateArray[0];
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>