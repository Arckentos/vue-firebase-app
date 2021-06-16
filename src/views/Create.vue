<template>
  <div class="about">
    <h1>This is a create page</h1>
    <employee-create></employee-create>
  </div>
</template>

<script>
import EmployeeCreate from '@/components/Employee/EmployeeCreate';
export default {
  components : {
    'employee-create' : EmployeeCreate
  }, 
  setup() {
    
  },
}
</script>