<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Результат: {{result}}</h2>
    <div>
      <input type="Number" placeholder="Первое число" v-model.number="operand1">
      <input type="Number" placeholder="Второе число" v-model.number="operand2">
    </div>
    <div>
      <button @click="getSum">&plus;</button>
      <button @click="getDiff">&minus;</button>
      <button @click="getDiv" :disabled="(operand2 == 0)">÷</button>
      <button @click="getMult">×</button>
      <button @click="getExp(operand1 , operand2)">^</button>
      <button @click="getSqrt">√</button>
      <button @click="getInt" :disabled="(operand2 == 0)">∻</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      result: '',
      operand1: 0,
      operand2: 0,
    }
  },
  methods:{
    getSum(){
      this.result = this.operand1 + this.operand2;
    },
    getDiff(){
      this.result = this.operand1 - this.operand2;

    },
    getMult(){
      this.result = this.operand1 * this.operand2;

    },
    getDiv(){
        this.result = this.operand1 / this.operand2;
    },
    getExp(a , b){
      if(b == 1){
        return this.result = a;
      } else if(b != 1){
        return this.result = a * this.getExp(a, b-1);
      }
    },
    getSqrt(){
      this.result = Math.pow(this.operand1, 1/this.operand2);
    },
    getInt(){
        this.result = parseInt(this.operand1 / this.operand2);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
