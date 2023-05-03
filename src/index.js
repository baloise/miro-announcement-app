async function announce() {
	console.log("open announcement")
	await miro.board.ui.openPanel({url: 'app.html'})
}

async function init() {
	await announce()
	miro.board.ui.on('icon:click', async () => {
		await announce()
  	})
}

init()
