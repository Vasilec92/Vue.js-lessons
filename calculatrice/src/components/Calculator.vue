<template>
  <div>
    <div class="display">
      <input name="operand1" v-model.number="operand1" type="number" />
      <input name="operand2" v-model.number="operand2" type="number" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button name="+" @click="sum(operand1, operand2)">+</button>
      <button name="-" @click="minus(operand1, operand2)">-</button>
      <button name="/" @click="divide(operand1, operand2)">/</button>
      <button name="*" @click="multiply(operand1, operand2)">*</button>
      <button name="^" @click="power(operand1, operand2)">^</button>
      <button name="%" @click="divideModal(operand1, operand2)">%</button>
    </div>
    <div>
      <input type="checkbox" id="open" name="open" v-model="open" />
      <label for="open">Экранная клавиатура</label>
      <div v-show="open" class="keyboard">
        <button
          v-for="l in labels"
          v-bind:name="l"
          v-bind:key="l"
          v-bind:title="l"
          @click="inputNumber(l, picked)"
        >
          {{ l }}
        </button>
        <div>
          <input
            type="radio"
            id="operand1"
            name="op1"
            value="operand1"
            v-model="picked"
          />
          <label for="operand1">operand 1</label>
          <br />
          <input
            type="radio"
            id="operand2"
            name="op2"
            value="operand2"
            v-model="picked"
          />
          <label for="operand2">operand 2</label>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: "",
      operand2: "",
      result: 0,
      error: "The division by zero is forbidden",
      open: false,
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "<-"],
      picked: "operand1",
    };
  },
  methods: {
    sum(op1, op2) {
      this.result = op1 + op2;
    },
    divide(op1, op2) {
      if (op2 == 0) {
        this.result = this.error;
      } else {
        this.result = op1 / op2;
      }
    },
    minus(op1, op2) {
      this.result = op1 - op2;
    },
    multiply(op1, op2) {
      this.result = op1 * op2;
    },
    divideModal(op1, op2) {
      this.result = op1 % op2;
    },
    power(op1, op2) {
      this.result = Math.pow(op1, op2);
    },
    inputNumber(number, picked) {
      if (picked === "operand1") {
        if (number === "<-") {
          this.operand1 = this.operand1.slice(0, -1);
        } else {
          this.operand1 += number;
        }
      } else {
        if (number === "<-") {
          this.operand2 = this.operand2.slice(0, -1);
        } else {
          this.operand2 += number;
        }
      }
    },
  },
};
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
