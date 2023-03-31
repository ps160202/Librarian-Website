<template>
    <div>
        <AppHeader title="Members"></AppHeader>

        <v-list dense>
            <v-subheader>Members</v-subheader>
            <v-list-item v-for="member in members" :key="member.id">
                <v-list-item-avatar tile>
                    <v-img :src="member.img"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ member.firstName }} {{ member.middleName }} {{ member.lastName }}</v-list-item-title>
                    <v-list-item-subtitle>Mobile: {{ member.mobileNo }}</v-list-item-subtitle>
                </v-list-item-content>

                
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import memberList from '@/data/members.json'
    export default {
        data() {
            return {
                members: memberList
            }
        },
        components: {
            AppHeader,
        },
    }
</script>

<style lang="scss" scoped>

</style>