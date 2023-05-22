var announcements = [
	//'2023-06.html',
	'2023-12.html',
]

async function announce() {
	console.log("announcement")
	announcements.forEach(a => {
		if(localStorage.getItem("dontShow/"+a)!="true"){
			miro.board.ui.openPanel({url: a})
			return 
 		}
	})
}

async function init() {
	await announce()
	miro.board.ui.on('icon:click', async () => {
		announcements.forEach(a => {
			localStorage.setItem("dontShow/"+a, null)
			 announce()
		})
		await announce()
  	})
}

init()
