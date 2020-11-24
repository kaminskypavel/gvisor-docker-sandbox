# gvisor-docker-sandbox
a playfield for sandboxing unsecured code 🙊🙉🙈

Reproducing ["container escape vulnerability"](https://nvd.nist.gov/vuln/detail/CVE-2019-5736)
and comparing security with `runc`

### Tested on ubuntu virtual machine 

---

# Instructions 

- Install Docker
- Install [gvisor](https://gvisor.dev/docs/user_guide/install/#install-from-an-apt-repository)

- `run-docker.sh` will start a docker default engine to test a malicious code

- `run-gvisor.sh` will start a runsc container engine to test a malicious code

- once you're in the container use `yarn ts-node [filename]`


# Appendix

- [Docker vs. containerd vs. Nabla vs. Kata](https://www.inovex.de/blog/containers-docker-containerd-nabla-kata-firecracker/)

- [runsc without docker](https://medium.com/@remco_verhoef/sandboxing-with-gvisor-b9979bd424b9)

- [how to escape a container (writter in C)](https://capsule8.com/blog/practical-container-escape-exercise/)
