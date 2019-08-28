<template>
    <div id="chart">
        <apexchart type=bar height=350 :options="chartOptions" :series="series" />
        <VoteOptions :talkId="talkId"/>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import VoteOptions from "./VoteOptions";
    export default {
        name: "Vote",
        props: {
            talkId: String
        },
        components: {
            VoteOptions,
            apexchart: VueApexCharts,
        },
        data () {
            return {
                chartOptions: {
                    chart: {
                        id: 'basic-bar'
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    }
                },
                series: [{
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }]
            }
        }
    }
</script>

<style scoped>

</style>