DOCS_SRC_FILEPATH := ./docs/src

.PHONY: install
install: ## install requirements locally
		pip install -r requirements.txt --no-cache

.PHONY: backend_docs
backend_docs: # create backend documentation
		ls ./docs/src/*.py|xargs -n 1 -P 3 python
		# git add docs/*.png

.PHONY: api_docs
api_docs: # Generates & shows openai endpoint documentation
		python magic_docs/services/main.py & open -a Google\ Chrome http://0.0.0.0:8000/docs

.PHONY: frontend_docs
frontend_docs: # create frontend documentation
		cd magic_docs/self-driving-experience
		npm run build-storybook --prefix magic_docs/self-driving-experience
		# git add docs/frontend/*

.PHONY: update_docs
update_docs: ## Re-renders the documentation files -= taken from https://stackoverflow.com/questions/5015316/run-all-python-files-in-a-directory
		echo "Updating documents"
		make install
		make backend_docs
		make frontend_docs