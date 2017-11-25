var para1 = "The automation quotient is a figure from 0 - 2 representing the proportion of the working population currently employed in an easily automatable job, compared to the average probability across all jobs and industries in the US."

var para2= "A probability of 1 represents alignment with the average; a probability close to 2 means high numbers of people in jobs at risk of automation; and a probability close to 0 means significantly lower numbers."

/* Vue JS */
var industryVue = new Vue({
  el: '#vue',
  data: {
    message: 'VueJS: on.',
    selected: 'Manufacturing',
    par1: para1,
    par2: para2,
    options: [
      { text: 'Accommodation and Food Services'},
      { text: 'Agriculture, Forestry, Fishing and Hunting'},
      { text: 'Arts, Entertainment, and Recreation'},
      { text: 'Construction'},
      { text: 'Educational Services'},
      { text: 'Finance and Insurance'},
      { text: 'Health Care and Social Assistance'},
      { text: 'Manufacturing'},
      { text: 'Mining, Quarrying, and Oil and Gas Extraction'},
      { text: 'Retail Trade'},
      { text: 'Transportation and Warehousing'},
      { text: 'Wholesale Trade'},
    ]
  },
  methods: {
    changeIndustry: function (){
      console.log("Industry: " + this.selected);
      styleMapforIndustry(this.selected);
    }
  }
})

