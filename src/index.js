var announcements = [
	//'2023-06.html',
	'2023-12.html',
]


async function announce() {
	var user = await miro.board.getUserInfo()
	if(![
  "3074457347386012337", // Matthias
  "3074457347728925407",  // Laurent 
  "3074457361962338134",  // David
].includes(user.id)
	){ return;}
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
