DOCS_SRC_FILEPATH := ./docs/src/

.PHONY: install
install: ## install requirements locally
		pip install -r requirements.txt --no-cache

.PHONY: update_docs
update_docs: ## Re-renders the documentation files -= taken from https://stackoverflow.com/questions/5015316/run-all-python-files-in-a-directory
		make install
		ls $(DOCS_SRC_FILEPATH)/*.py|xargs -n 1 -P 3 python
		
