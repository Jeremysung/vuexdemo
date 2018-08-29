<template>
    <div class="prodcut">
        <h4 style="text-align: center">商品信息</h4>
        <el-table style="width: 900px;margin: 0 auto"
                :data="shoplist"
                >
            <el-table-column
                    prop="id"
                    label="id"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格">
            </el-table-column>
            <el-table-column
                    prop=""
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click='addToCart(scope.row)'>添加购物车</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    export default {
        name: 'product',
        data() {
            return {}
        },
        // computed: {
        //     ...mapGetters(['shoplist'])
        // },
        computed:mapGetters({
            shoplist:'shoplist'
        }),
        methods: {
            ...mapActions(['addToCart'])
        }
    }
</script>

<style>
    .prodcut{
        /*text-align: center;*/
    }
</style>