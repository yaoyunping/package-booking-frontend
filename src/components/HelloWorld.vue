<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="运单号"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'id',
          {rules: [{ required: true, message: '请输入运单号!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="收件人"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'person',
          {rules: [{ required: true, message: '请输入收件人!' }]}
        ]"

      >
      </a-input>
    </a-form-item>
     <a-form-item
      label="电话"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'phone',
          {rules: [{ required: true, message: '请输入电话!' }]}
        ]"
  
      />
    </a-form-item>
     <a-form-item
      label="重量"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入重量!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    };
  },
  props: {
    msg: String
  },
  computed:{
    e:function (){
      return this.$store.state.e;
    }
  },
   methods: {
    handleSubmit (e) {
      
      this.$store.dispatch("addForm",e)
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(e)
        if (!err) {
          this.$store.dispatch("addForm",values)

          console.log('Received values of form: ', values)
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0
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
  width: 250px;
}
</style>
