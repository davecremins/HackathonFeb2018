TAG=omnibus/react-boilerplate

build:
	docker build -t ${TAG} .

run:
	docker run -p 3000:3000 -d ${TAG} 