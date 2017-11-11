import page from 'page'
import layout from './layout'
import homepage from './homepage/index.js'


const main = document.querySelector('main')

page('/', () => {
	main.innerHTML = layout(homepage)
})



