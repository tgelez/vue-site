<template>
  <div class="bottles">
    <h1>Bottles</h1>
      <table>
        <tr>
          <td>Producer</td>
          <td>Appellation</td>
          <td>Designation</td>
          <td>ID</td>
        </tr>
        <tr v-for="bottle in bottles" :key="bottle._id">
          <td>{{ bottle.wine.producer.name }}</td>
          <td>{{ bottle.wine.appellation.name }}</td>
          <td>{{ bottle.wine.designation }}</td>
          <td>{{ bottle._id }}</td>
        </tr>
      </table>
    </div>
</template>

<script>
import CellarService from '@/services/CellarService'
export default {
  name: 'bottles',
  data () {
    return {
      bottles: []
    }
  },
  mounted () {
    this.getBottles()
  },
  methods: {
    async getBottles () {
      const response = await CellarService.fetchBottles()
      this.bottles = response.data.bottles
    }
    /*,
    async deletePost (id) {
      await CellarService.deletePost(id)
      this.$router.push({ name: 'Posts' })
    }
    */
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
