<template>
  <div>
    <div class="display">
      <input v-model="operand1" type="number" />
      <input v-model="operand2" type="number" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="result = parseInt(operand1) + parseInt(operand2)">
        +
      </button>
      <button @click="minus(operand1, operand2)">-</button>
      <button @click="divide(operand1, operand2)">/</button>
      <button @click="result = operand1 * operand2">*</button>
      <button @click="result = Math.pow(operand1, operand2)">^</button>
      <button @click="divideModal">%</button>
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
