<template>
    <div>
        <router-link v-if="$route.path !== '/timelist/log-time'" to="/timelist/log-time" class="btn btn-primary">
            创建
        </router-link>
        <div v-if="$route.path === '/timelist/log-time'">
            <h3>创建</h3>
        </div>
        <hr>
        <router-view></router-view>
        <div class="TimeList">
            <!--  -->
            <!-- 去找之前创建的store里面的list数据 -->
            <!-- v-if 如果没有数据显示 -->
            <!-- 需要通过导出的接口去获取一些数据 -->
            <p v-if="!plans.length">
                <strong>还没有任何计划</strong>
            </p>
            <!-- 有数据  要列出来 -->
           
            <div class="list-group">
                <!-- 包裹数据 -->
                <!-- v-for -->
    
                <a class="list-group-item" v-for="(plan,index) in plans">
                    <div class="row">
                        <div class="col-sm-2 user-details">
                            <img :src="plan.avatar" class="avatar img-circle img-responsive" />
                            <p class="text-center">
                                <strong>
                                    {{ plan.name }}
                                </strong>
                            </p>
                        </div>
                        <div class="col-sm-2 text-center time-block">
                            <h3 class="list-group-item-text total-time">
                                <i class="glyphicon glyphicon-time"></i>
                                {{ plan.totalTime }}
                            </h3>
                            <p class="label label-primary text-center">
                                <i class="glyphicon glyphicon-calendar"></i>
                                {{ plan.date }}
                            </p>
                        </div>
    
                        <div class="col-sm-7 comment-section">
                            <p>{{ plan.comment }}</p>
                        </div>
    
                        <div class="col-sm-1">
                            <button class="btn btn-xs btn-danger delete-button" @click="deletePlan(index)">
                                X
                            </button>
                        </div>
                    </div>
    
                </a>
                <!-- for end -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimeList',
    computed: {
        plans() {
            return this.$store.state.list
        }
    },
    methods: {
        deletePlan(idx) {
            // 稍后再来说这里的方法
            // 减去总时间
            this.$store.dispatch('decTotalTime', this.plans[idx].totalTime)
            // 删除该计划
            this.$store.dispatch('deletePlan', idx)
        }
    }
}
</script>
<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
}

.user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
}

.time-block {
    padding: 10px;
}

.comment-section {
    padding: 20px;
}
</style>