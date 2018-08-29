<template>
    <div class="cart">
        <h4 style="text-align: center">已选商品</h4>
        <el-table style="width: 900px;margin: 0 auto"
                  :data="cartProducts"
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
                    prop="num"
                    label="数量">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="delProduct(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    export default {
        name: 'cart',
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['cartProducts'])
        },
        methods:{
            ...mapActions(['delProduct'])
        }
    }
</script>