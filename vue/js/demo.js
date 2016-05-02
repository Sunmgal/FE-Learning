new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})	


new Vue({
  el: '#app2',
  data: {
    message: 'Hello Vue.js!'
  }
})	


new Vue({
  el: '#app3',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue.js' },
      { text: 'Build Something Awesome' }
    ]
  }
})

// 处理用户输出
new Vue({
  el: '#app4',
  data: { //数据
    message: 'Hello Vue.js!'
  },
  methods: { //方法
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// 综合操作
new Vue({
	el: '#app5',
	data: {
		newItem: '',
		todos: [
			{text : 'apple'}
		]
	},
	methods: {
		addMessage: function(){
			var iTem = this.newItem.trim();
			if(iTem){
				this.todos.push({text : iTem});
				this.newItem = ''
			}
		},
		deleteMessage: function(index){
			this.todos.splice(index,1)
		}
	}
})