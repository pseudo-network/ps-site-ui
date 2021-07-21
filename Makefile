service := pw-next-base
version := 0.0.0
docker_org := pineappleworkshop
cluster := pw-dev
docker-image := gcr.io/${docker_org}/${service}:${version}
root := $(abspath $(shell pwd))
port := 80
list:
	@grep '^[^#[:space:]].*:' Makefile | grep -v ':=' | grep -v '^\.' | sed 's/:.*//g' | sed 's/://g' | sort
bootstrap:
	pip install bumpversion
	yarn install
init:
	yarn install
dev:
	yarn dev
docker-build:
	docker build -t $(docker-image) .
docker-dev:
	make docker-build
	make docker-run
docker-push:
	docker push $(docker-image)
docker-run:
	@docker run -itp $(port):$(port)  $(docker-image)
bumpversion-patch:
	bumpversion patch --allow-dirty
bumpversion-minor:
	bumpversion minor --allow-dirty
bumpversion-major:
	bumpversion major --allow-dirty
test-integration:
	yarn run e2e