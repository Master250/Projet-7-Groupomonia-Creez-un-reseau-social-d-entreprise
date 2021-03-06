import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../components/Auth.vue'
import Accueil from '../components/Accueil.vue'
import Profil from '../components/Accueil/Profil.vue'
import Mur from '../components/Accueil/Mur.vue'
import Post from '../components/Accueil/FormPost.vue'
import Moderator from '../components/Accueil/Moderator.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Accueil/Profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/Accueil/Mur',
    name: 'Mur',
    component: Mur
  },
  {
    path: '/Accueil/Mur/Post',
    name: 'Post',
    component: Post
  },
  {
    path: '/Accueil/Moderator',
    name: 'Moderator',
    component: Moderator
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
