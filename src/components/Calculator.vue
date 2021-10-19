<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="result = operand1 + operand2">+</button>
      <button @click="minus(operand1, operand2)">-</button>
      <button @click="divide(operand1, operand2)">/</button>
      <button @click="result = operand1 * operand2">*</button>
      <button @click="result = Math.pow(operand1, operand2)">^</button>
      <button @click="divideModal">%</button>
    </div>
    <div>
      <input type="checkbox" id="open" name="open" v-model="open" />
      <label for="open">Экранная клавиатура</label>
      <div v-if="open">
        <button
          v-for="l in labels"
          v-bind:key="l"
          v-bind:title="l"
          @click="inputNumber(l, picked)"
        >
          {{ l }}
        </button>
        <div>
          <input type="radio" id="operand1" value="operand1" v-model="picked" />
          <label for="operand1">operand 1</label>
          <br />
          <input type="radio" id="operand2" value="operand2" v-model="picked" />
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
    divideModal() {
      this.result = this.operand1 % this.operand2;
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
