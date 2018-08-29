//初始化数据
const state = {
    //商品列表
    shop_list: [{
        id: 11,
        name: '大鼓米线',
        price: 27,
    }, {
        id: 22,
        name: '卤道卤香',
        price: 16
    }, {
        id: 33,
        name: '谷田稻香',
        price: 24
    }, {
        id: 44,
        name: '米饭',
        price: 2
    }],

    //添加到购物车的商品
    added:[]
}
const getters = {
    //商品列表
    shoplist:state => state.shop_list,
    cartProducts:state=>{
        return state.added.map(({id,num})=>{ //在actions中只有的id和num的字段
            //在原始数据数据上面进行刷选，这里通过id来匹配
            let product = state.shop_list.find(n=>n.id == id)
            console.info('product',product)
            return {
                ...product,
                num
            }
        })
    },
    //计算总价格
    totalPrice:(state,getters)=>{
        console.log(getters)
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.price * n.num
        })
        return total;
    },
    //计算总数量
    totalNum:(state,getters)=>{
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.num
        })
        return total;
    },
}
const actions = {
    //添加购物车
    addToCart({commit},product){
        commit('add',{
            id:product.id
        })
    },
    //删除购物车的指定的商品
    delProduct({commit},product){
        commit('del',product)
    },
    //清除购物车
    clearAllCart({commit}){
        commit('clearAll')
    },
}

const mutations = {
      add(state,{id}){
          let record = state.added.find(n=>n.id == id);
          if(!record){
              state.added.push({
                  id,
                  num:1
              })
          }else {
              record.num++
          }
          console.info(record,state.added)
      },
      del(state,product){
          state.added.forEach((n,i)=>{
              if(n.id == product.id){
                  //console.info(11,n)
                  //找到index的下标值
                  state.added.splice(i,1)
              }
          })
      },
      clearAll(state){
          state.added = []
      }
}

export default {
    state,
    getters,
    actions,
    mutations
};