<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-show="result">Результат: {{result}}</h2>
    <div>
      <input type="Number" placeholder="Первое число" v-model.number="operand1">
      <input type="Number" placeholder="Второе число" v-model.number="operand2">
    </div>
    <div>
      <button
      v-for="(btn, idx) in btns"
      :key="idx" @click="calculate (btn)"
      :title="`Операция ${btn}`"
      :disabled=" operand1 === '' || operand2 === '' ">
      {{btn}}
      </button>
      <div>
        <input type="checkbox" id="checkbox" v-model="visionKeybord">
        <label for="checkbox">Экранная клавиатура</label>
        <br>
        <button 
        v-show="visionKeybord"
        v-for="(keyBtn, idx) in keyBtns"
        :key="idx"
        :title="`Кнопка ${keyBtn}`"
        @click="addKey(keyBtn)"
        :v-model="focusInput"
        >
          {{keyBtn}}
        </button>
        <button
        v-show="visionKeybord"
        @click="backspace" >🠐</button>
      </div>
      <div>
        <input type="radio" id="one" v-model="focusInput" value="operand1">
        <label for="one">Операнд 1</label>
        <input type="radio" id="two" v-model="focusInput" value="operand2">
        <label for="two">Операнд 2</label>
      </div>
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
      btns: ['+', '-', '×', '÷', '^', '√', '∻'],
      visionKeybord: false,
      keyBtns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      focusInput: '',
    }
  },
  methods:{
     calculate (operation = '+') {
     switch (operation) {
       case '+':
         this.getSum()
         break;
       case '-':
         this.getDiff()
         break;
       case '×':
         this.getMult()
         break;
       case '÷':
         this.getDiv()
         break;
        case '^':
         this.getExp(this.operand1 , this.operand2)
         break;
        case '√':
         this.getSqrt()
         break;
        case '∻':
         this.getInt()
         break;
     }
   },

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
    },
    addKey(char){
      if(this.focusInput == 'operand1'){
        if(this.operand1 === 0){
        this.operand1 = char;
        } else{
        this.operand1 = this.operand1*10 + char;
        }
      }else if(this.focusInput == 'operand2'){
        if(this.operand2 === 0){
        this.operand2 = char;
        } else{
        this.operand2 = this.operand2*10 + char;
        }
      }    
    },
    backspace(){
      if(this.focusInput == 'operand1'){
        const rem = this.operand1 % 10;
        this.operand1 = (this.operand1 - rem) / 10;
      }else if(this.focusInput == 'operand2'){
        const rem = this.operand2 % 10;
        this.operand2 = (this.operand2 - rem) / 10;
        }
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
