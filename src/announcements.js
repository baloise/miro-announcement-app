		    const checkbox = document.getElementById('showAgain')
		
		    checkbox.addEventListener('change', (event) => {
		      if (event.currentTarget.checked) {
		    	  localStorage.setItem("dontShow"+document.location.pathname, null)
		      } else {
		    	  localStorage.setItem("dontShow"+document.location.pathname, "true")
		      }
		    })
