<template>
    <div>
        <AppHeader title="Staff"></AppHeader>

        <v-list dense>
            <v-subheader>Staff</v-subheader>
            <v-list-item v-for="employee in employees" :key="employee.id">
                <v-list-item-avatar tile>
                    <v-img :src="employee.img"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ employee.firstName }} {{ employee.middleName }} {{ employee.lastName
                    }}</v-list-item-title>
                    <v-list-item-subtitle>EID: {{ employee.eid }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Mobile: {{ employee.mobileNo }}</v-list-item-subtitle>
                </v-list-item-content>


            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import employeeList from '@/data/employees.json'
export default {
    data() {
        return {
            employees: employeeList
        }
    },
    components: {
        AppHeader,
    },
}
</script>

<style lang="scss" scoped></style>