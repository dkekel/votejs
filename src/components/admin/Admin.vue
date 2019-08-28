<template>
    <section class="section">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-success" v-on:click="isTaskList = true">{{$t('admin.talks')}}</button>
            </div>
            <div class="control">
                <button class="button is-primary" v-on:click="isTaskList = false">{{$t('admin.options')}}</button>
            </div>
        </div>
        <AdminScreen v-if="isTaskList === true"/>
        <AdminScreen v-if="isTaskList === false"/>
    </section>
</template>

<script>
    import AdminScreen from "./AdminScreen";

    export default {
        name: "Admin",
        components: {AdminScreen},
        data() {
            return {
                isTaskList: true
            }
        }
    }
</script>

<style scoped>

</style>