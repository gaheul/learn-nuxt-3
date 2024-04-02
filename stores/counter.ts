export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('Eedurdo');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return {
    count,
    name,
    doubleCount,
    increment,
  };
});
