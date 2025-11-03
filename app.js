<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>End-to-End DevOps Automation with Jenkins + Ansible</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background-color: #007bff;
            color: white;
            text-align: center;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1, h2 {
            color: #007bff;
        }
        footer {
            text-align: center;
            padding: 10px;
            background-color: #007bff;
            color: white;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>End-to-End DevOps Automation with Jenkins + Ansible</h1>
    </header>
    <div class="container">
        <section id="about">
            <h2>About the Project</h2>
            <p>This project demonstrates an end-to-end DevOps automation pipeline using Jenkins for CI/CD and Ansible for configuration management. It aims to streamline software deployment, testing, and infrastructure provisioning.</p>
        </section>
        <section id="creators">
            <h2>Created By</h2>
            <p>This project has been created by:</p>
            <ul>
                <li>Irshad</li>
                <li>Wasim</li>
                <li>Aliya</li>
                <li>Ruqiya</li>
            </ul>
        </section>
        <section id="features">
            <h2>Key Features</h2>
            <ul>
                <li>Automated build and deployment with Jenkins</li>
                <li>Infrastructure as Code using Ansible</li>
                <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
                <li>Scalable and maintainable DevOps practices</li>
            </ul>
        </section>
    </div>
    <footer>
        <p>&copy; 2023 End-to-End DevOps Automation Project</p>
    </footer>
</body>
</html>


---
- hosts: dev
  become: true
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes

    - name: Install dependencies for Docker
      apt:
        name:
          - apt-transport-https
          - ca-certificates
          - curl
          - software-properties-common
        state: present

    - name: Add Docker GPG key
      apt_key:
        url: https://download.docker.com/linux/ubuntu/gpg
        state: present

    - name: Add Docker repository
      apt_repository:
        repo: deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable
        state: present
        filename: docker

    - name: Update apt cache after adding Docker repo
      apt:
        update_cache: yes

    - name: Install Docker
      apt:
        name: docker-ce
        state: present

    - name: Ensure Docker service is started and enabled
      service:
        name: docker
        state: started
        enabled: yes

    - name: Install pip for Python 3
      apt:
        name: python3-pip
        state: present

    - name: Install docker Python module
      pip:
        name: docker
        executable: pip3
        extra_args: --break-system-packages

    - name: Start the container
      docker_container:
        name: ansibleappc2
        image: "shiakahmed53/app12:latest"
        state: started
        published_ports:
          - "0.0.0.0:8080:8080"

=========================
for centos 7 

---
- hosts: dev
  become: True
  tasks:
    - name: Install python pip
      yum:
        name: python-pip
        state: present
    - name: Install docker
      yum:
        name: docker
        state: present
    - name: start docker
      service:
        name: docker
        state: started
        enabled: yes
    - name: Install docker-py python module
      pip:
        name: docker-py
        state: present
    - name: Start the container
      docker_container:
        name: ansibleappc2
        image: "shiakahmed53/appdemo:latest"
        state: started
        published_ports:
          - 0.0.0.0:8080:8080





=============================================================
I took a career break to invest in my professional development. During that time, I completed a DevOps course where I gained hands-on experience with tools like Docker, Kubernetes, and Jenkins, and learned how to build and automate CI/CD pipelines. I wanted to make sure I was up to date with the latest technologies and could bring more value to my next role.”

“I wanted to enhance my technical skills and transition into a DevOps-focused career, so I dedicated time to completing a structured course and working on real-world projects. It’s been an important step that has made me much stronger technically and ready to take on new challenges.”

“I took a short career break to focus on personal commitments and also used that time to complete a DevOps course to stay current with industry trends. Now that I’ve gained those new skills, I’m fully focused on returning to the workforce and applying what I’ve learned.”

“Now I’m excited to apply my DevOps knowledge in a real-world environment and contribute to a team where I can keep growing.”
“That time really helped me grow technically, and now I’m eager to use those skills to deliver impact in this role.”

“I took a career break because I wanted to transition from network engineering to DevOps. During that time, I completed a structured DevOps course where I gained hands-on experience with tools like Git, GitHub, Jenkins, Docker, Kubernetes, Ansible, and Terraform. I used this period to build a solid foundation in automation and CI/CD practices so I could move into a DevOps-focused role.”

“After working as a network engineer, I realized I was very interested in automation and wanted to move toward DevOps. So I decided to take a break from full-time work to focus completely on upskilling. I completed a DevOps course and learned tools like Git, Jenkins, Docker, Kubernetes, Ansible, and Terraform. It was a great learning phase, and now I’m eager to apply those skills in a practical environment.”

Career Transition: Took a planned career break to complete a DevOps certification program. Gained hands-on experience with tools such as Git, GitHub, Jenkins, Docker, Kubernetes, Ansible, and Terraform, and developed strong skills in automation, CI/CD, and infrastructure as code.

LinkedIn / Resume “About” Section (Career Transition to DevOps)

I’m an IT professional with a background in network engineering and a growing passion for DevOps and cloud automation. After several years in network engineering, I decided to take a planned career break to transition into DevOps, focusing on automation, CI/CD, and cloud infrastructure management.

During this period, I completed a comprehensive DevOps course, gaining hands-on experience with tools such as Git, GitHub, Jenkins, Docker, Kubernetes, Ansible, and Terraform. Through practical projects, I developed strong skills in infrastructure as code, containerization, and continuous integration/deployment pipelines.

My networking background gives me a solid foundation in infrastructure and system operations, which complements my DevOps skill set perfectly. I’m now eager to apply my technical knowledge to help build scalable, automated, and reliable systems in a collaborative DevOps environment.

🧠 Optional Shorter Resume Summary (2–3 lines)

If you want a concise version for your resume, use this at the top:

Network Engineer turned DevOps Engineer, with hands-on experience in Git, GitHub, Jenkins, Docker, Kubernetes, Ansible, and Terraform. Strong foundation in networking and system operations, combined with a passion for automation and CI/CD pipeline development.


# Automatically Generated by Vagrant Config Generator, see https://github.com/jianan1104/vagrantfile-generator
Vagrant.configure('2') do |config|
  # Node 1
  config.vm.define "node1" do |machine|
    machine.vm.box = 'bento/ubuntu-24.04'
    machine.vm.network "private_network", ip: '192.168.33.10'
    machine.vm.hostname = "node1"
    machine.vm.provider "virtualbox" do |vb|
      vb.name = "webserver1"
      vb.cpus = 2
      vb.memory = 4096
    end
  end

  # Node 2
  config.vm.define "node2" do |machine|
    machine.vm.box = 'bento/ubuntu-24.04'
    machine.vm.network "private_network", ip: '192.168.33.11'
    machine.vm.hostname = "node2"
    machine.vm.provider "virtualbox" do |vb|
      vb.name = "webserver2"
      vb.cpus = 2
      vb.memory = 4096
    end
  end
end


"Sure. I have around 4 years of experience working as a Linux System Administrator. My main responsibilities include managing server infrastructure, performing system upgrades, automating routine tasks using shell scripting, and ensuring high availability and security across production environments.
Over the years, I’ve gained strong hands-on experience with RHEL, CentOS, and Ubuntu systems — handling user management, performance tuning, and troubleshooting. I’ve also worked with web servers like Apache and Nginx, and have some exposure to virtualization and basic cloud concepts.
I hold a bachelor’s degree in Computer Science, and I’m now looking to expand my skill set into DevOps automation — particularly with tools like Jenkins, Docker, and Ansible — to bridge my Linux administration background with modern CI/CD practices."


