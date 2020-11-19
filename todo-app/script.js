Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredValue: '',
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    }
  }
}).mount('#app');