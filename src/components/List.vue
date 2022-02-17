<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.key">
                        <td>{{ task.name }}</td>
                        <td>{{ task.description }}</td>
                        <td>{{ task.amount }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: task.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletetask(task.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  data () {
    return {
      tasks: []
    }
  },
  created () {
    db.collection('tasks').onSnapshot((snapshotChange) => {
      this.tasks = []
      snapshotChange.forEach((doc) => {
        this.tasks.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          amount: doc.data().amount
        })
      })
    })
  },
  methods: {
    deletetask (id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('tasks').doc(id).delete().then(() => {
          console.log('Document deleted!')
        })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
}
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>
