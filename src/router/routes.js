import HomePage from '@/pages/HomePage.vue'
import MenuPage from '@/pages/MenuPage.vue'
import AdminPage from '@/pages/AdminPage'
import LoginPage from '@/pages/auth/LoginPage'
import SignupPage from '@/pages/auth/SignupPage'
import OrdersPage from '@/pages/admin/OrdersPage'
import NewPizzaPage from '@/pages/admin/NewPizzaPage'
import EditMenuPage from '@/pages/admin/EditMenuPage'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/menu', name: 'menu', component: MenuPage },
    { path: '/login', name: 'login', props: true, component: LoginPage },
    { path: '/signup', name: 'signup', component: SignupPage },
    { path: '/admin', 
      component: AdminPage,
      children: [
          { path: '', name: 'admin', component: OrdersPage },
          { path: 'new-pizza', name: 'admin.new-pizza', component: NewPizzaPage },
          { path: 'edit-menu', name: 'admin.edit-menu', component: EditMenuPage },
      ]
    }
]

export default routes