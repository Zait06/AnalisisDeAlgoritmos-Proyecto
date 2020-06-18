run: delJson delNodeMod limpiarCache instalarNPM
instalarNPM:
	npm install
limpiarCache:
	npm cache clean --force
delNodeMod:
	rm -R node_modules
delJson:
	rm package-lock.jason