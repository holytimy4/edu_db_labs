<template>
  <div>
    <vue-good-table :columns="columns" :rows="rows" />
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'

export default {
  name: 'my-component',

  // add to component
  components: {
    VueGoodTable
  },
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number'
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-mm-dd',
          dateOutputFormat: 'MMM Do yy'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage'
        }
      ],
      rows: [
        {
          id: 1,
          name: 'John',
          age: 20,
          createdAt: '2011-10-31',
          score: 0.03343
        },
        {
          id: 2,
          name: 'Jane',
          age: 24,
          createdAt: '2019-10-31',
          score: 0.03343
        },
        {
          id: 3,
          name: 'Susan',
          age: 16,
          createdAt: '2011-10-30',
          score: 0.03343
        },
        {
          id: 4,
          name: 'Chris',
          age: 55,
          createdAt: '2011-10-11',
          score: 0.03343
        },
        {
          id: 5,
          name: 'Dan',
          age: 40,
          createdAt: '2011-10-21',
          score: 0.03343
        },
        {
          id: 6,
          name: 'John',
          age: 20,
          createdAt: '2011-10-31',
          score: 0.03343
        }
      ]
    }
  }
}
</script>
