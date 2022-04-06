import Calculator from "../components/Calculator.vue";
import { mount } from "@vue/test-utils";

describe("Calculator input tests", () => {
  it("Test operand1 input value", async () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("1");
    expect(wrapper.vm.operand1).toBe(1);
  });
  it("Test operand2 input value", async () => {
    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("1");
    expect(wrapper.vm.operand2).toBe(1);
  });
  it("Sum", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("1");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("5");
    const btn = wrapper.find("button[name='+']");
    btn.trigger("click");
    expect(wrapper.vm.result).toBe(6);
  });
  it("Divade", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("7");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");
    const btn = wrapper.find("button[name='-']");
    btn.trigger("click");
    expect(wrapper.vm.result).toBe(5);
  });
  it("Multiple", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("7");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");
    const btn = wrapper.find("button[name='*']");
    btn.trigger("click");
    expect(wrapper.vm.result).toBe(14);
  });
  it("Module", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("5");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("5");
    const btn = wrapper.find("button[name='%']");
    btn.trigger("click");
    expect(wrapper.vm.result).toBe(0);
  });
  it("Power", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("2");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");
    const btn = wrapper.find("button[name='^']");
    btn.trigger("click");
    expect(wrapper.vm.result).toBe(4);
  });
  it("Divade", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("6");
    const operand2Input = wrapper.find("input[name=operand2]");
    operand2Input.setValue("2");
    const btn = wrapper.find("button[name='/']");
    btn.trigger("click");
    expect(wrapper.vm.result).toBe(3);
  });
  it("Divade error", () => {
    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find("input[name=operand1]");
    operand1Input.setValue("0");
    const btn = wrapper.find("button[name='/']");
    btn.trigger("click");
    expect(wrapper.vm.result).toBe("The division by zero is forbidden");
  });
  it("setChecked ", async () => {
    const wrapper = mount(Calculator);
    const checkInput = wrapper.find('input[type="checkbox"]');
    await checkInput.setChecked();
    expect(checkInput.element.checked).toBeTruthy();
  });
  test("setChecked first input", async () => {
    const wrapper = mount(Calculator);
    //chexk if keyboard is visible
    const checkInput = wrapper.find('input[type="checkbox"]');
    await checkInput.setChecked();
    expect(checkInput.element.checked).toBeTruthy();

    const btn1 = wrapper.find("button[name='1']");
    btn1.trigger("click");
    const btn2 = wrapper.find("button[name='2']");
    btn2.trigger("click");

    expect(wrapper.vm.operand1).toBe("12");
  });
  test("setChecked seconde input ", async () => {
    const wrapper = mount(Calculator);
    //chexk if keyboard is visible
    wrapper.vm.picked = "operand2";
    const checkInput = wrapper.find('input[type="checkbox"]');
    await checkInput.setChecked();
    expect(checkInput.element.checked).toBeTruthy();

    const btn2 = wrapper.find("button[name='2']");
    btn2.trigger("click");
    btn2.trigger("click");
    btn2.trigger("click");
    const btn1 = wrapper.find("button[name='1']");
    btn1.trigger("click");

    expect(wrapper.vm.operand2).toBe("2221");
  });
  test("setChecked seconde input and delate", async () => {
    const wrapper = mount(Calculator);
    //chexk if keyboard is visible
    wrapper.vm.picked = "operand2";
    const checkInput = wrapper.find('input[type="checkbox"]');
    await checkInput.setChecked();
    expect(checkInput.element.checked).toBeTruthy();

    const btn2 = wrapper.find("button[name='6']");
    btn2.trigger("click");
    btn2.trigger("click");
    btn2.trigger("click");
    const btn1 = wrapper.find("button[name='<-']");
    btn1.trigger("click");

    expect(wrapper.vm.operand2).toBe("66");
  });
  test("setChecked first input and delate", async () => {
    const wrapper = mount(Calculator);
    //chexk if keyboard is visible
    wrapper.vm.picked = "operand1";
    const checkInput = wrapper.find('input[type="checkbox"]');
    await checkInput.setChecked();
    expect(checkInput.element.checked).toBeTruthy();

    const btn2 = wrapper.find("button[name='8']");
    btn2.trigger("click");
    btn2.trigger("click");
    btn2.trigger("click");
    const btn1 = wrapper.find("button[name='<-']");
    btn1.trigger("click");

    expect(wrapper.vm.operand1).toBe("88");
  });
});
