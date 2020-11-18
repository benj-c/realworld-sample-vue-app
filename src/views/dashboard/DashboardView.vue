<template>
    <div class="p-grid overview-panel">
        <div class="p-sm-12 p-md-12 p-lg-5 p-xl-5">
            <div class="p-grid">
                <div
                    class="p-col-12 stat-panel"
                    style="padding-top: 0"
                >
                    <QuickStats />
                </div>
                <div class="p-col-12 stat-panel">
                    <!-- <p class="stat-title">Ticket sales statistics</p> -->
                    <!-- <Pie /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.overview-panel {
    z-index: 99999;
    padding: 10px;
    margin-left: 0;
    margin-right: 0;
    .p-tag {
        margin-right: 5px;
        font-weight: 400;
        cursor: pointer;
    }

    .stat-title {
        color: #888;
        margin: 5px 0 8px 0;
    }

    .stat-panel {
    }
}
</style>

<script>
import QuickStats from "./QuickStats";
// import Pie from "./Pie";

export default {
    components: { QuickStats },
    mounted() {}
};
</script>