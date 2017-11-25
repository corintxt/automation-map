var para1 = "The automation quotient is a figure from 0 - 2 representing the proportion of the working population currently employed in an easily automatable job, compared to the average probability across all jobs and industries in the US."

var para2= "A probability of 1 represents alignment with the average; a probability close to 2 means high numbers of people in jobs at risk of automation; and a probability close to 0 means significantly lower numbers."

/* Vue JS */
var industryVue = new Vue({
  el: '#vue',
  data: {
    message: 'VueJS: on.',
    industry: 'default',
    par1: para1,
    par2: para2,
    options: [
      { text: 'Accommodation and Food Services', value: ''},
      { text: 'Agriculture, Forestry, Fishing and Hunting', value: ''},
      { text: 'Arts, Entertainment, and Recreation', value: ''},
      { text: 'Construction', value: ''},
      { text: 'Educational Services', value: ''},
      { text: 'Finance and Insurance', value: ''},
      { text: 'Health Care and Social Assistance', value: ''},
      { text: 'Manufacturing', value: ''},
      { text: 'Mining, Quarrying, and Oil and Gas Extraction', value: ''},
      { text: 'Retail Trade', value: ''},
      { text: 'Transportation and Warehousing', value: ''},
      { text: 'Wholesale Trade', value: ''},        
    ]
  },
  methods: {
    setIndustry: function (title) {
      this.industry = title;
    }
  }
})

