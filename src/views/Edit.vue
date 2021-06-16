<template>
  <div class="about">
    <h1>This is an edit page</h1>
    <employee-edit></employee-edit>
  </div>
</template>

<script>
import EmployeeEdit from '@/components/Employee/EmployeeEdit';
export default {
  components : {
    'employee-edit' : EmployeeEdit
  }, 
  setup() {
    
  },
}
</script>