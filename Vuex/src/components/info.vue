<template>
    <div class="info">
        <el-row style="width: 900px;margin: 15px auto 0;text-align: center;line-height: 40px;">
            <el-col :span="8" style="background-color: #ccc">总数：{{totalPrice}}</el-col>
            <el-col :span="8" style="background-color: #ccc">总价：{{totalNum}}</el-col>
            <el-col :span="8"><el-button type="danger" plain style="width: 100%" @click="clearAllCart">清空购物车</el-button></el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from "vuex"
    export default {
        name:'info',
        data(){
            return {}
        },
        methods: {
            ...mapActions(['clearAllCart'])
        },
        computed:{
            ...mapGetters(['totalPrice','totalNum'])
        }
    }
</script>