<template>
    <div class="field is-grouped is-grouped-centered">
        <p v-for="option in options" v-bind:key="option" class="control">
            <a class="button is-primary">
                {{option}}
            </a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "VoteOptions",
        props: {
            talkId: String
        },
        data() {
            return {
                options: ['Option 1', 'Option 2']
            }
        }
    }
</script>

<style scoped>

</style>