// components/s-select/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      options: Array,
      showFieldName2: "majname",
      keyFieldName2: "majcode"
    },
    /**
     * 声明调用的form表单可以感知到input内容
     */
    behaviors: ['wx://form-field-group'],
    /**
     * 组件的初始数据
     */
    data: {
      result: Array,
      keyFieldVal2: "",
      showFieldVal2: "",
      isShow: false
    },
   
    /**
     * 组件的方法列表
     */
    methods: {
   
      clickSelect: function(e){
        console.log(e);
        this.setData({
          keyFieldVal2: e.currentTarget.dataset.id,
          showFieldVal2: e.currentTarget.dataset.value,
          isShow: false
        });
      },
   
      openClose: function(){
        this.setData({
          isShow: !this.data.isShow
        })
      },
   
   
      close() {
        this.setData({
          isShow: false
        })
      }
    },
    lifetimes: {
      attached() {
        var pp = new Array();
        for(let item of this.data.options){
          var ob = {};
          for(var colum in item){
            if(colum === this.data.keyFieldName2){
              ob.id=item[colum];
            }else if(colum === this.data.showFieldName2){
              ob.name=item[colum];
            }
          }
          pp.push(ob);
        };
        this.setData({
          result: pp
        })
      }
    }
    
  })
