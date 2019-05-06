const svg = r => require.ensure([], () => r(require('../page/svg.vue')), 'svg');
const scroll = r => require.ensure([], () => r(require('../page/scroll.vue')), 'scroll');
const scrollMoreAttr = r => require.ensure([], () => r(require('../page/scrollMoreAttr.vue')), 'scrollMoreAttr');
const scrollBehavior = r => require.ensure([], () => r(require('../page/scrollBehavior.vue')), 'scrollBehavior');
const letterSpacing = r => require.ensure([], () => r(require('../page/letterSpacing.vue')), 'letterSpacing');
const direction = r => require.ensure([], () => r(require('../page/direction.vue')), 'direction');
const writingMode = r => require.ensure([], () => r(require('../page/writingMode.vue')), 'writingMode');
const selection = r => require.ensure([], () => r(require('../page/selection.vue')), 'selection');


const routes = [

	{
		name:'svg',
		path:'/ui/svg',
		component: svg
	},
  {
    name:'scroll',
    path:'/ui/scroll',
    component: scroll
  },
  {
    name:'selection',
    path:'/ui/selection',
    component: selection
  },
  {
    name:'scrollMoreAttr',
    path:'/ui/scrollMoreAttr',
    component: scrollMoreAttr
  },
  {
    name:'scrollBehavior',
    path:'/ui/scrollBehavior',
    component: scrollBehavior
  },
  {
    name:'letterSpacing',
    path:'/ui/letterSpacing',
    component: letterSpacing
  },
  {
    name:'direction',
    path:'/ui/direction',
    component: direction
  },
  {
    name:'writingMode',
    path:'/ui/writingMode',
    component: writingMode
  },
  {
		path: '/',
		redirect: '/ui/svg'
	},
	{
		path: '*',
		redirect: '/ui/svg'
	},
]

export default routes;
