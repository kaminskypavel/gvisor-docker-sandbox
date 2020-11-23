# gvisor-docker
a playfield for sandboxing unsecured code 🙊🙉🙈

### Tested on ubuntu virtual machine 

---

# Instructions 

- Install Docker
- Install [gvisor](https://gvisor.dev/docs/user_guide/install/#install-from-an-apt-repository)

- `run-docker.sh` will start a docker default engine to test a malicious code

- `run-gvisor.sh` will start a runsc container engine to test a malicious code

- once you're in the container use `yarn ts-node [filename]`