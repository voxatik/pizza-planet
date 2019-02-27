import HomePage from '../pages/HomePage.vue'
import MenuPage from '../pages/MenuPage.vue'
import AdminPage from '../pages/AdminPage'
import OrdersPage from '../pages/admin/OrdersPage'
import NewPizzaPage from '../pages/admin/NewPizzaPage'
import EditMenuPage from '../pages/admin/EditMenuPage'


const routes = [
    { path: '/', component: HomePage },
    { path: '/menu', component: MenuPage },
    { path: '/admin', 
      component: AdminPage,
      children: [
          { path: '', component: OrdersPage },
          { path: 'new-pizza', component: NewPizzaPage },
          { path: 'edit-menu', component: EditMenuPage },
      ]
    }
]

export default routes