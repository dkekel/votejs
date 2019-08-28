<template>
    <table class="table is-fullwidth">
        <thead>
        <tr>
            <th>{{$t('grid.header.name')}}</th>
            <th>{{$t('grid.header.visible')}}</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="row in gridRows" v-bind:key="row.id">
                <td>{{row.title}}</td>
                <td>{{row.visible}}</td>
                <td>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">{{$t('button.submit')}}</button>
                        </div>
                        <div class="control">
                            <button class="button is-danger">{{$t('button.delete')}}</button>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "GridList",
        props: {
            gridRows: Array
        }
    }
</script>

<style scoped>

</style>