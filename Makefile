TAG=omnibus/react-boilerplate
DC=docker-compose

build:
	docker build -t ${TAG} .

run:
	docker run -p 3000:3000 -d ${TAG}

compose-build:
	${DC} build web

compose-env:
	${DC} up -d

compose-destroy:
	${DC} down

compose-logs:
	${DC} logs -f