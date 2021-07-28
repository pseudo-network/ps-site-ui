service := ps-site-ui
version := 0.0.15
gcloud_proj_id := sylvan-bonbon-317613
cluster := ps-dev
gcr-image := gcr.io/${gcloud_proj_id}/${service}:${version}
root := $(abspath $(shell pwd))
port := 80

list:
	@grep '^[^#[:space:]].*:' Makefile | grep -v ':=' | grep -v '^\.' | sed 's/:.*//g' | sed 's/://g' | sort

install-dependencies:
	pip install bumpversion
	npm install

format:
	npm run format

dev:
	npm run dev

docker-build:
	docker build -t $(gcr-image) .

docker-dev:
	make docker-build
	make docker-run

docker-push:
	docker push $(gcr-image)

docker-run:
	@docker run -itp $(port):$(port)  $(gcr-image)

bumpversion-patch:
	bumpversion patch --allow-dirty

bumpversion-minor:
	bumpversion minor --allow-dirty

bumpversion-major:
	bumpversion major --allow-dirty
