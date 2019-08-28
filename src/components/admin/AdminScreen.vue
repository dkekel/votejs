<template>
    <section class="section">
        <NewRow/>
        <GridList v-bind:grid-rows="talks"/>
    </section>
</template>

<script>
    import NewRow from "./NewTalk";
    import GridList from "./GridList";
    export default {
        name: "AdminScreen",
        components: {GridList, NewRow},
        props: {
            selectedTalks: Array
        },
        data() {
            return {
                talks: [
                    { id: 1, title: 'My journey with Vue', visible: true },
                    { id: 2, title: 'Blogging with Vue', visible: false },
                    { id: 3, title: 'Why Vue is so fun', visible: true }
                ]
            }
        }
    }
</script>

<style scoped>

</style>