import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Admin from '@/views/Admin.vue';
import AdminUserList from '@/components/Admin/User/UserList.vue';
import AdminUserEdit from '@/components/Admin/User/UserEdit.vue';


/**
 * Employee components
 */
// import Driver from '@/views/Driver.vue';
// import DriverList from '@/components/Driver/DriverList.vue';
// import DriverCreate from '@/components/Driver/DriverCreate.vue';
// import DriverEdit from '@/components/Driver/DriverEdit.vue';



// /**
// * Customer components
// */
// import Customer from '@/views/Customer.vue';
// import CustomerList from '@/components/Customer/CustomerList.vue';
// // import CustomerList from '@/components/Customer/test.vue';
// import CustomerCreate from '@/components/Customer/CustomerCreate.vue';
// import CustomerEdit from '@/components/Customer/CustomerEdit.vue';


// /**
//  * Employee components
//  */
// import Employee from '@/views/Employee.vue';
// import EmployeeList from '@/components/Employee/EmployeeList.vue';
// import EmployeeCreate from '@/components/Employee/EmployeeCreate.vue';
// import EmployeeEdit from '@/components/Employee/EmployeeEdit.vue';



const routes = [
  /**
 * Main routes
 */
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      auth: true
    },
    children: [
      {
        path: '',
        name: 'AdminUserList',
        component: AdminUserList
      },
      {
        path: 'user/:id',
        name: 'AdminUserEdit',
        component: AdminUserEdit
      },
    ]
  },


  /**
   * Driver routes
   */
  // {
  //   path: '/driver',
  //   name: 'Driver',
  //   component: Driver,
  //   meta: {
  //     auth: true
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'DriverList',
  //       component: DriverList
  //     },
  //     {
  //       path: 'create',
  //       name: 'DriverCreate',
  //       component: DriverCreate
  //     },
  //     {
  //       path: 'edit/:id',
  //       name: 'DriverEdit',
  //       component: DriverEdit
  //     }
  //   ]
  // },


  /**
   * Customer routes
   */
  // {
  //   path: '/customer',
  //   name: 'Customer',
  //   component: Customer,
  //   meta: {
  //     auth: true
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'CustomerList',
  //       component: CustomerList
  //     },
  //     {
  //       path: 'create',
  //       name: 'CustomerCreate',
  //       component: CustomerCreate
  //     },
  //     {
  //       path: 'edit/:id',
  //       name: 'CustomerEdit',
  //       component: CustomerEdit
  //     }
  //   ]
  // },


  /**
   * Employee routes
   */
  // {
  //   path: '/employee',
  //   name: 'Employee',
  //   component: Employee,
  //   meta: {
  //     guest: true
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'EmployeeList',
  //       component: EmployeeList
  //     },
  //     {
  //       path: 'create',
  //       name: 'EmployeeCreate',
  //       component: EmployeeCreate
  //     },
  //     {
  //       path: 'edit/:id',
  //       name: 'EmployeeEdit',
  //       component: EmployeeEdit
  //     }
  //   ]
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router