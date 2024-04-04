# infrastructure-as-code-experiments

I have decided to open-source experimentation with my "IAC" projects. Feel free to adapt them to your needs or contribute.

I will ideally grow this with a bit of time, or I might retire it and just do multiple repositories. Though the future of the repository is uncertain one thing is for sure: the information contained within is still good.

> Infrastructure as Code (IaC) is a key practice in the modern development operations landscape that involves managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. This approach enables developers and operations teams to automate the setup, deployment, and management of infrastructure, ensuring consistency, efficiency, and reliability in the environment. By treating infrastructure as code, teams can apply the same version control, collaboration, and testing practices that are used in application development to infrastructure management. This not only dramatically speeds up the deployment process but also reduces the risk of human error, enhances reproducibility, and scales alongside the application with minimal overhead. Leveraging IaC, organizations can achieve more agile, flexible, and manageable IT operations, paving the way for faster innovation and a stronger alignment between IT services and business needs.

## Useful Documentation/Resources 

### Ansible

> Ansible is an automation platform that streamlines configuration management and application deployment. Its use of straightforward YAML playbooks allows for simple, repeatable setup processes, while SSH connectivity eliminates the need for additional remote agents. It's a hassle-free solution for managing complex IT tasks with minimal overhead.

- [https://docs.ansible.com/](https://docs.ansible.com/)

### Kubernetes (Container Orchestration)

In my case, I am going to use Kubernetes as container orchestration running docker containers

> Kubernetes manages containers through an abstraction layer provided by the Container Runtime Interface (CRI), allowing it to work with various container runtimes.

Load balancing (which has been an incredible search):
- [https://metallb.universe.tf/](https://metallb.universe.tf/)

Other Resources:

- [https://kubernetes.io/docs/home/](https://kubernetes.io/docs/home/)
- [KubeSpray.io (For an easy k8s deployment)](https://kubespray.io/#/)

### Docker (Containerization)

> Docker is a platform that allows developers to package applications into containers, which are standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment. This simplifies development, supports consistent deployment processes, and enables seamless scaling.

- [https://docs.docker.com/](https://docs.docker.com/)

### Pulumi

> Pulumi is an open-source infrastructure as code tool that lets developers manage cloud infrastructure using programming languages like JavaScript, TypeScript, Python, Go, and C#. It differs from traditional IaC tools by allowing the use of general-purpose languages, offering more flexibility in defining resources for various cloud providers including AWS, Azure, Google Cloud, and Kubernetes. This approach enables more reusable and scalable infrastructure code through familiar constructs like loops, functions, and classes. Pulumi simplifies cloud infrastructure management by integrating with existing development tools and practices.

- [Pulumi Concepts (Official Docs)](https://www.pulumi.com/docs/concepts/)
- [Pulumi Installation (Official Docs)](https://www.pulumi.com/registry/packages/openstack/installation-configuration/)

### devstack
> useful for developing in openstack, takes 10-15min to install

- [DevStack local environment for OpenStack (Official Docs)](https://docs.openstack.org/devstack/latest/)

### Openstack (Ansible Install)

- [https://docs.openstack.org/openstack-ansible/2023.2/user/aio/quickstart.html](https://docs.openstack.org/openstack-ansible/2023.2/user/aio/quickstart.html)

#### Troubleshooting

Image not uploading in horizon (undefined errors when upload): [https://bugs.launchpad.net/horizon/+bug/1630833](https://bugs.launchpad.net/horizon/+bug/1630833)

## Cloud Images

- [https://cloud-images.ubuntu.com/jammy/20240328/](https://cloud-images.ubuntu.com/jammy/20240328/)
- [https://cloud.centos.org/](https://cloud.centos.org/)
