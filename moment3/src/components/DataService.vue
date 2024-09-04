<script>
import Axios from 'axios';

export default {
  methods: {
    fetchData() {
      return Axios.get('http://localhost:8000/api/games');
    },
    addData(data) {
      return Axios.post('http://localhost:8000/api/games', data);
    },
    // updateData(id, data) {
    //   return Axios.put(`http://localhost:8000/api/games/${id}`, data);
    // },
    deleteData(id) {
      return Axios.delete(`http://localhost:8000/api/games/${id}`);
    },
  },
};
</script>
