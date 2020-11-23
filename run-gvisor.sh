docker build -t "gvisor-docker" .
docker run --rm -it -v ${PWD}:/app --runtime=runsc gvisor-docker