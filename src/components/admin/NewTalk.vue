<template>
    <section class="section">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Talk name</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control is-expanded">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox">
                            Is visible
                        </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-link">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "NewRow"
    }
</script>

<style scoped>

</style>