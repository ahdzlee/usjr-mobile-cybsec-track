# Cybersecurity Specialization Track
## 3-Semester Comprehensive Cybersecurity Program

**Course Level:** 2nd Year BSIT  
**Total Duration:** 3 Semesters  
**Hours per Week:** 3 hours (all lab time; lecture as needed per exercise)  
**Prerequisites:** Networking fundamentals, Linux basics, Programming skills  
**Certification Alignment:** CompTIA Security+, EC-Council CEH, DFIR

---

## Course Overview

This intensive three-semester program develops students into workforce-ready cybersecurity professionals through hands-on, CTF-based learning. Students progress from offensive security fundamentals through defensive operations to advanced security architecture and research, culminating in a capstone project that demonstrates real-world competency.

### Program Philosophy: Learn by Doing

Unlike traditional lecture-heavy programs, this curriculum is **100% lab-focused**. Students learn through:
- **Guided CTF challenges** that simulate real-world scenarios
- **Vulnerable machine exploitation** in controlled environments
- **Incident response simulations** using real-world attack data
- **Peer-based red team/blue team exercises**
- **Industry-standard tools and methodologies**

### Program Learning Outcomes

Upon completion of this three-semester program, students will be able to:

1. Conduct professional penetration tests following industry methodologies (PTES, OWASP)
2. Identify, exploit, and document vulnerabilities in systems and applications
3. Perform digital forensics investigations and evidence preservation
4. Implement and manage Security Information and Event Management (SIEM) systems
5. Execute incident response procedures following established frameworks
6. Design secure system architectures using threat modeling methodologies
7. Conduct security research and produce professional documentation
8. Apply ethical hacking principles within legal and professional boundaries
9. Communicate security findings to technical and non-technical stakeholders
10. Demonstrate readiness for industry certifications (Security+, CEH, DFIR)

---

## Lab Environment Setup

### Required Infrastructure

**Local Virtual Machines:**
- Kali Linux (primary attack platform)
- ParrotOS (alternative attack platform)
- DVWA (Damn Vulnerable Web Application)
- Metasploitable 2 & 3
- VulnHub machines (rotating selection)
- DVCP (Damn Vulnerable Chemical Process) for ICS/SCADA exposure
- Windows Server (Active Directory lab)
- Ubuntu Server (Linux hardening exercises)

**Cloud Platforms (Free Tiers):**
- TryHackMe (free rooms curriculum)
- CyberDefenders (blue team challenges)
- PicoCTF (foundational CTF challenges)
- CryptoHack (cryptography challenges)
- LetsDefend (SOC analyst training - free tier)
- Blue Team Labs Online (free challenges)

**Additional Tools:**
- Wireshark, tcpdump (network analysis)
- Burp Suite Community Edition (web application testing)
- Metasploit Framework (exploitation)
- Nmap, Masscan (reconnaissance)
- Ghidra (reverse engineering)
- Autopsy, Volatility (forensics)
- Splunk Free, Wazuh (SIEM)

---

## SEMESTER 1: Foundations & Offensive Security
### "Think Like an Attacker"

**Focus:** CTF-based learning, penetration testing methodology, vulnerability assessment

**Semester Theme:** Students adopt the attacker mindset to understand how systems are compromised. Every week includes hands-on exploitation exercises with documented findings.

---

### Week 1-2: Security Foundations & Lab Setup

**Topics:**
- Cybersecurity career paths and industry overview
- Ethical hacking legal framework and responsible disclosure
- Lab environment configuration
  - Virtualization setup (VirtualBox/VMware)
  - Kali Linux installation and customization
  - Vulnerable machine deployment
- Linux command-line mastery for security
  - File system navigation and permissions
  - Process management and networking commands
  - Bash scripting fundamentals
- Security documentation practices
  - Note-taking with CherryTree/Obsidian
  - Screenshot and evidence collection
  - Report writing fundamentals

**Lab Exercises:**
- Complete lab environment setup verification
- PicoCTF: General Skills category (10 challenges minimum)
- TryHackMe: "Linux Fundamentals" series (all 3 parts)
- Write first vulnerability report (template provided)

**Certification Alignment:** Security+ Domain 1 (Security Concepts)

**Learning Outcomes:**
- Configure a professional penetration testing environment
- Navigate Linux systems confidently via command line
- Understand legal and ethical boundaries of security testing
- Document findings in professional format

---

### Week 3-4: Reconnaissance & Information Gathering

**Topics:**
- Passive reconnaissance techniques
  - OSINT (Open Source Intelligence)
  - Google dorking and search operators
  - Shodan, Censys, and IoT search engines
  - Social media intelligence (SOCMINT)
  - DNS enumeration and zone transfers
- Active reconnaissance
  - Network scanning with Nmap
  - Service enumeration techniques
  - Banner grabbing and fingerprinting
  - Vulnerability scanning with Nessus/OpenVAS
- Reconnaissance frameworks
  - Recon-ng, theHarvester, Maltego CE
- Documenting attack surface

**Lab Exercises:**
- OSINT challenge: Gather intelligence on assigned target domain
- TryHackMe: "Nmap" room
- TryHackMe: "OSINT" category rooms (Sakura, Searchlight)
- PicoCTF: Forensics and OSINT challenges
- Conduct full reconnaissance on Metasploitable VM (documented)

**Certification Alignment:** CEH - Footprinting & Reconnaissance

**Learning Outcomes:**
- Conduct comprehensive passive and active reconnaissance
- Use industry-standard reconnaissance tools effectively
- Map attack surfaces for target systems
- Document findings for penetration test reports

---

### Week 5-6: Network Security & Exploitation

**Topics:**
- Network security fundamentals
  - OSI model from attacker's perspective
  - Common network vulnerabilities
  - Network protocols and their weaknesses
- Network-based attacks
  - ARP poisoning and MITM attacks
  - DNS spoofing
  - VLAN hopping
  - Wireless network attacks (WEP/WPA/WPA2)
- Network exploitation
  - Exploiting vulnerable services (FTP, SSH, SMB, RDP)
  - Password attacks (brute force, dictionary, spraying)
  - Credential harvesting
- Network traffic analysis
  - Wireshark deep dive
  - Packet capture analysis
  - Identifying malicious traffic patterns

**Lab Exercises:**
- TryHackMe: "Network Services" (parts 1 & 2)
- TryHackMe: "Wireshark 101"
- Metasploitable: Exploit 3 network services with documentation
- DVWA: Perform MITM attack in isolated lab
- CyberDefenders: "PacketMaze" challenge

**Certification Alignment:** Security+ Domain 3 (Security Architecture), CEH - Network Attacks

**Learning Outcomes:**
- Identify and exploit common network vulnerabilities
- Perform man-in-the-middle attacks in controlled environments
- Analyze network traffic for security issues
- Exploit vulnerable network services systematically

---

### Week 7-9: Web Application Security

**Topics:**
- Web application architecture
  - Client-server model
  - HTTP/HTTPS protocol deep dive
  - Session management mechanisms
- OWASP Top 10 vulnerabilities
  - A01: Broken Access Control
  - A02: Cryptographic Failures
  - A03: Injection (SQL, Command, LDAP)
  - A04: Insecure Design
  - A05: Security Misconfiguration
  - A06: Vulnerable Components
  - A07: Authentication Failures
  - A08: Software and Data Integrity Failures
  - A09: Security Logging Failures
  - A10: Server-Side Request Forgery (SSRF)
- Web exploitation techniques
  - SQL injection (Union, Blind, Error-based)
  - Cross-Site Scripting (Reflected, Stored, DOM)
  - Cross-Site Request Forgery (CSRF)
  - File inclusion vulnerabilities (LFI/RFI)
  - File upload vulnerabilities
- Burp Suite mastery
  - Proxy, Repeater, Intruder, Decoder
  - Extension ecosystem

**Lab Exercises:**
- DVWA: Complete all vulnerability categories (low → medium → high)
- TryHackMe: "OWASP Top 10" room
- TryHackMe: "Burp Suite" series (Basics, Repeater, Intruder)
- TryHackMe: "SQL Injection" room
- PicoCTF: Web exploitation category (15 challenges minimum)
- PortSwigger Web Security Academy: SQL Injection labs (free)

**Certification Alignment:** CEH - Web Application Hacking, Security+ Domain 2

**Learning Outcomes:**
- Identify and exploit OWASP Top 10 vulnerabilities
- Use Burp Suite for professional web application testing
- Perform SQL injection attacks (multiple techniques)
- Execute XSS attacks and understand remediation
- Document web vulnerabilities professionally

---

### Week 10-12: System Exploitation & Post-Exploitation

**Topics:**
- Exploitation fundamentals
  - Vulnerability research basics
  - Exploit databases (Exploit-DB, CVE)
  - Payload generation and delivery
- Metasploit Framework mastery
  - Architecture and modules
  - Exploitation workflow
  - Meterpreter capabilities
  - Post-exploitation modules
- Windows exploitation
  - Common Windows vulnerabilities
  - Active Directory attack paths
  - Privilege escalation techniques
  - Pass-the-hash, Kerberoasting
- Linux exploitation
  - Linux privilege escalation
  - SUID/SGID exploitation
  - Kernel exploits
  - Cron job manipulation
- Post-exploitation
  - Persistence mechanisms
  - Lateral movement
  - Data exfiltration techniques
  - Covering tracks

**Lab Exercises:**
- TryHackMe: "Metasploit" room
- TryHackMe: "Windows Privilege Escalation" room
- TryHackMe: "Linux Privilege Escalation" room
- VulnHub: Exploit 2 machines (easy-medium difficulty)
- Metasploitable: Full compromise with post-exploitation documentation
- TryHackMe: "Active Directory Basics"

**Certification Alignment:** CEH - System Hacking, Security+ Domain 2

**Learning Outcomes:**
- Use Metasploit Framework effectively for exploitation
- Escalate privileges on Windows and Linux systems
- Perform post-exploitation activities
- Document complete attack chains

---

### Week 13-14: Cryptography & Password Attacks

**Topics:**
- Cryptography fundamentals
  - Symmetric vs asymmetric encryption
  - Hashing algorithms and their weaknesses
  - Digital signatures and certificates
  - PKI infrastructure
- Cryptographic attacks
  - Hash cracking techniques
  - Rainbow tables vs brute force
  - Cryptanalysis basics
- Password security
  - Password storage mechanisms
  - Password cracking with Hashcat, John the Ripper
  - Online vs offline attacks
  - Password spraying and credential stuffing
- Practical cryptography tools
  - OpenSSL, GPG
  - Credential dumping tools

**Lab Exercises:**
- CryptoHack: Complete "Introduction" and "General" categories
- TryHackMe: "Cryptography" category rooms
- TryHackMe: "Crack the Hash" rooms (1 & 2)
- PicoCTF: Cryptography category (15 challenges minimum)
- Crack passwords from compromised database dumps (provided)

**Certification Alignment:** Security+ Domain 1, CEH - Cryptography

**Learning Outcomes:**
- Understand cryptographic principles and common weaknesses
- Crack password hashes using industry tools
- Identify weak cryptographic implementations
- Apply cryptographic concepts to security assessments

---

### Week 15-16: Vulnerability Assessment & Reporting

**Topics:**
- Vulnerability assessment methodology
  - PTES (Penetration Testing Execution Standard)
  - NIST vulnerability management
  - Risk rating frameworks (CVSS)
- Vulnerability scanning
  - Nessus, OpenVAS configuration
  - Scan policies and scheduling
  - False positive identification
- Professional reporting
  - Executive summary writing
  - Technical finding documentation
  - Remediation recommendations
  - Risk prioritization
- Penetration testing methodologies
  - Black box, white box, gray box
  - Rules of engagement
  - Scope definition

**Lab Exercises:**
- Conduct full vulnerability assessment of lab network
- Generate professional scan reports
- Write penetration test report for Metasploitable compromise
- Peer review: Exchange and critique reports with classmates
- TryHackMe: "Nessus" room

**Certification Alignment:** Security+ Domain 5, CEH - Vulnerability Analysis

**Learning Outcomes:**
- Conduct professional vulnerability assessments
- Use enterprise vulnerability scanning tools
- Write professional penetration test reports
- Communicate findings to technical and non-technical audiences

---

### Week 17-18: Semester 1 CTF Competition & Assessment

**Practical Examination:**
Students participate in an internal CTF competition that tests all semester skills.

**CTF Categories:**
- Reconnaissance (OSINT, network enumeration)
- Web exploitation (OWASP vulnerabilities)
- System exploitation (privilege escalation)
- Cryptography (hash cracking, crypto challenges)
- Network analysis (packet capture analysis)

**Individual Assessment Requirements:**
- Complete CTF challenges (scored competition)
- Submit comprehensive penetration test report on assigned target
- Minimum 5 vulnerabilities documented with:
  - Description and impact
  - Proof of exploitation
  - Remediation recommendations
  - CVSS scoring
- Oral defense of findings

**Assessment Criteria:**
- CTF performance and flags captured (30%)
- Penetration test report quality (35%)
- Technical accuracy and methodology (20%)
- Oral defense and communication (15%)

**Learning Outcomes:**
- Demonstrate offensive security competency under time pressure
- Produce professional-quality security documentation
- Defend technical findings to evaluators
- Apply cumulative semester knowledge to novel challenges

---

## SEMESTER 2: Defensive Security & Incident Response
### "Defend Like a Guardian"

**Focus:** SIEM, digital forensics, incident response, threat detection

**Semester Theme:** Students transition to the defender's perspective, learning to detect, analyze, and respond to the attacks they learned to execute in Semester 1.

---

### Week 1-2: Security Operations Fundamentals

**Topics:**
- Security Operations Center (SOC) overview
  - SOC roles and responsibilities
  - SOC maturity models
  - Tier 1/2/3 analyst responsibilities
- Defense-in-depth strategy
  - Network security layers
  - Endpoint protection
  - Application security
- Log management fundamentals
  - Log sources and types
  - Log collection architecture
  - Log retention and compliance
- Security monitoring basics
  - Baseline establishment
  - Anomaly detection concepts
  - Alert fatigue and tuning

**Lab Exercises:**
- TryHackMe: "Security Operations" room
- TryHackMe: "Core Windows Processes"
- LetsDefend: "SOC Fundamentals" module (free)
- Set up centralized logging in lab environment
- CyberDefenders: "CyberCorp Case 1" (easy)

**Certification Alignment:** Security+ Domain 4, CySA+

**Learning Outcomes:**
- Understand SOC operations and analyst workflows
- Implement defense-in-depth strategies
- Configure centralized logging
- Establish security baselines

---

### Week 3-5: SIEM Implementation & Threat Detection

**Topics:**
- SIEM architecture and concepts
  - Data ingestion and normalization
  - Correlation rules and logic
  - Dashboard and visualization
- Splunk fundamentals (Free version)
  - SPL (Search Processing Language)
  - Data sources and indexing
  - Creating alerts and reports
  - Dashboard creation
- Wazuh open-source SIEM
  - Agent deployment
  - Rule configuration
  - Active response
  - File integrity monitoring
- Detection engineering
  - Writing detection rules
  - SIGMA rules introduction
  - Indicator of Compromise (IoC) hunting
  - MITRE ATT&CK framework mapping

**Lab Exercises:**
- Deploy Wazuh SIEM in lab environment
- TryHackMe: "Splunk 101" and "Splunk 2"
- TryHackMe: "MITRE" room
- Create 10 custom detection rules for common attacks
- CyberDefenders: "Splunk Boss of the SOC v1" dataset
- Map detection rules to MITRE ATT&CK techniques

**Certification Alignment:** CySA+, Security+ Domain 4

**Learning Outcomes:**
- Deploy and configure SIEM solutions
- Write effective detection rules
- Use MITRE ATT&CK for threat mapping
- Create security dashboards and reports

---

### Week 6-8: Network Forensics & Traffic Analysis

**Topics:**
- Network forensics fundamentals
  - Evidence collection and preservation
  - Chain of custody
  - Legal considerations
- Deep packet inspection
  - Protocol analysis
  - Payload extraction
  - Encrypted traffic analysis
- Malicious traffic identification
  - C2 communication patterns
  - Data exfiltration detection
  - Lateral movement indicators
  - Beaconing behavior
- Network forensics tools
  - Wireshark advanced features
  - Zeek (formerly Bro) IDS
  - NetworkMiner
  - tcpdump scripting

**Lab Exercises:**
- CyberDefenders: "Malware Traffic Analysis" series
- TryHackMe: "Wireshark Traffic Analysis"
- TryHackMe: "Zeek" room
- Analyze provided PCAP files for malicious activity
- CyberDefenders: "HawkEye" challenge
- Write network forensics report on captured attack

**Certification Alignment:** DFIR, CySA+

**Learning Outcomes:**
- Conduct network forensics investigations
- Identify malicious network traffic patterns
- Use network analysis tools effectively
- Document network-based evidence

---

### Week 9-11: Digital Forensics & Evidence Analysis

**Topics:**
- Digital forensics methodology
  - Identification, preservation, analysis, documentation
  - Forensic imaging and hashing
  - Anti-forensics awareness
- Disk forensics
  - File system analysis (NTFS, ext4)
  - Deleted file recovery
  - Timeline analysis
  - Artifact extraction
- Memory forensics
  - Memory acquisition techniques
  - Volatility framework
  - Process analysis
  - Malware detection in memory
- Windows forensics artifacts
  - Registry analysis
  - Event logs
  - Prefetch and Shimcache
  - Browser artifacts
  - Email forensics
- Linux forensics
  - Log file analysis
  - User activity artifacts
  - System timeline creation

**Lab Exercises:**
- TryHackMe: "Autopsy" room
- TryHackMe: "Volatility" room
- TryHackMe: "Windows Forensics 1 & 2"
- TryHackMe: "Linux Forensics"
- CyberDefenders: "GetPDF" challenge
- CyberDefenders: "Seized" challenge
- Conduct full forensic analysis of compromised VM (provided)

**Certification Alignment:** DFIR, CHFI

**Learning Outcomes:**
- Perform disk and memory forensics
- Extract and analyze forensic artifacts
- Use Autopsy and Volatility effectively
- Create forensic timelines and reports

---

### Week 12-14: Malware Analysis & Reverse Engineering

**Topics:**
- Malware classification
  - Viruses, worms, trojans, ransomware
  - APT malware characteristics
  - Fileless malware
- Static analysis
  - PE file structure
  - String analysis
  - Hashing and signature detection
  - VirusTotal and sandboxing
- Dynamic analysis
  - Sandbox environments
  - Behavioral analysis
  - API monitoring
  - Network traffic analysis
- Reverse engineering introduction
  - x86 assembly basics
  - Ghidra fundamentals
  - Debugging with x64dbg
  - Deobfuscation techniques

**Lab Exercises:**
- TryHackMe: "Malware Analysis" category rooms
- TryHackMe: "Basic Malware RE" room
- CyberDefenders: "MalDoc101" challenge
- Analyze 5 malware samples in isolated environment
- Create malware analysis reports with IoCs
- PicoCTF: Reverse engineering category

**Certification Alignment:** DFIR, GREM concepts

**Learning Outcomes:**
- Classify and analyze malware safely
- Perform static and dynamic analysis
- Extract indicators of compromise
- Use reverse engineering tools for analysis

---

### Week 15-16: Incident Response & Handling

**Topics:**
- Incident response frameworks
  - NIST SP 800-61 (Incident Handling Guide)
  - SANS incident response process
  - PICERL methodology
- Incident classification and triage
  - Severity levels
  - Escalation procedures
  - Communication protocols
- Containment, eradication, recovery
  - Isolation techniques
  - Malware removal
  - System restoration
  - Evidence preservation during response
- Post-incident activities
  - Lessons learned documentation
  - Playbook updates
  - Metrics and reporting
- Tabletop exercises
  - Scenario development
  - Response simulation
  - Team coordination

**Lab Exercises:**
- TryHackMe: "Incident Handling" rooms
- LetsDefend: Complete incident response scenarios (free tier)
- Conduct tabletop exercise with peer teams
- Develop incident response playbook for ransomware attack
- CyberDefenders: "Hammered" challenge

**Certification Alignment:** Security+ Domain 4, DFIR, GCIH concepts

**Learning Outcomes:**
- Apply incident response frameworks
- Contain and eradicate security incidents
- Document incidents and lessons learned
- Coordinate incident response activities

---

### Week 17-18: Blue Team CTF & Practical Assessment

**Practical Examination:**
Students participate in a defensive-focused CTF and complete incident response simulation.

**Blue Team CTF Categories:**
- Log analysis and threat hunting
- Network forensics (PCAP analysis)
- Memory forensics (Volatility challenges)
- Malware analysis
- Incident reconstruction

**Group Incident Response Simulation:**
- Teams receive simulated breach scenario
- Must investigate, contain, and document
- Present findings and remediation plan
- Develop post-incident report

**Assessment Criteria:**
- Blue Team CTF performance (25%)
- Incident response execution (25%)
- Forensics report quality (25%)
- Team coordination and communication (15%)
- Post-incident documentation (10%)

**Learning Outcomes:**
- Demonstrate defensive security competency
- Coordinate team-based incident response
- Produce professional forensics documentation
- Apply cumulative defensive skills

---

## SEMESTER 3: Security Architecture & Advanced Research
### "Build and Innovate"

**Focus:** Threat modeling, secure architecture, security automation, advanced research, capstone project

**Semester Theme:** Students synthesize offensive and defensive knowledge to design secure systems, conduct original research, and demonstrate mastery through a comprehensive capstone project.

---

### Week 1-3: Threat Modeling & Risk Assessment

**Topics:**
- Threat modeling methodologies
  - STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation)
  - PASTA (Process for Attack Simulation and Threat Analysis)
  - Attack trees
  - DREAD scoring
- Risk assessment frameworks
  - NIST RMF
  - FAIR (Factor Analysis of Information Risk)
  - Qualitative vs quantitative risk
- Threat intelligence
  - CTI lifecycle
  - STIX/TAXII frameworks
  - Threat actor profiling
  - TTP analysis
- Application of threat modeling
  - Data flow diagrams
  - Trust boundaries
  - Asset identification
  - Threat enumeration

**Lab Exercises:**
- Model threats for provided system architecture
- TryHackMe: "Threat Intelligence" category
- Create threat model for web application (STRIDE)
- Conduct risk assessment with FAIR methodology
- Develop threat actor profile for assigned APT group
- Present threat model to peer review panel

**Certification Alignment:** Security+ Domain 5, CISSP concepts

**Learning Outcomes:**
- Apply formal threat modeling methodologies
- Conduct professional risk assessments
- Analyze threat intelligence
- Communicate risk to stakeholders

---

### Week 4-6: Secure Architecture & Design

**Topics:**
- Secure design principles
  - Defense in depth
  - Least privilege
  - Zero trust architecture
  - Secure by design
- Network security architecture
  - Network segmentation
  - Micro-segmentation
  - Firewall architecture
  - DMZ design
- Cloud security architecture
  - Shared responsibility model
  - Cloud security controls
  - Container security
  - Serverless security
- Identity and access management
  - Authentication architectures
  - Authorization models (RBAC, ABAC)
  - SSO and federation
  - Privileged access management
- Security architecture documentation
  - Architecture diagrams
  - Security control mapping
  - Compliance requirements

**Lab Exercises:**
- Design secure architecture for enterprise network
- TryHackMe: "Network Security Architecture" content
- Create security architecture for cloud-native application
- Implement zero trust principles in lab environment
- Document security controls with control matrices
- Peer review architecture designs

**Certification Alignment:** Security+ Domain 3, CISSP concepts

**Learning Outcomes:**
- Design secure system architectures
- Apply zero trust principles
- Document security architectures professionally
- Evaluate architecture security posture

---

### Week 7-9: Security Automation & DevSecOps

**Topics:**
- Security automation fundamentals
  - SOAR concepts
  - Playbook automation
  - API integration
- Python for security automation
  - Security scripting patterns
  - API interaction
  - Log parsing automation
  - Automated scanning
- DevSecOps principles
  - Shift-left security
  - CI/CD security integration
  - SAST and DAST tools
  - Container security scanning
- Infrastructure as Code security
  - Terraform security
  - Configuration management security
  - Policy as code
- Custom tool development
  - Building security utilities
  - Integrating with existing tools
  - Automation workflows

**Lab Exercises:**
- Develop Python script for automated vulnerability scanning
- Create security automation playbook
- TryHackMe: "Python for Pentesters" content
- Implement CI/CD pipeline with security gates
- Build custom security tool (log analyzer or scanner)
- Automate IOC extraction and SIEM integration

**Certification Alignment:** Security+ Domain 4, DevSecOps practices

**Learning Outcomes:**
- Automate security operations tasks
- Develop security tools with Python
- Implement DevSecOps practices
- Create security automation workflows

---

### Week 10-12: Advanced Topics & Security Research

**Topics:**
- Vulnerability research
  - Fuzzing techniques
  - Code auditing
  - CVE discovery process
  - Responsible disclosure
- Exploit development introduction
  - Buffer overflow concepts
  - Shellcode basics
  - Modern protections (ASLR, DEP, Canaries)
  - Bypass techniques overview
- Emerging threats
  - AI/ML in security (offensive and defensive)
  - Supply chain attacks
  - IoT security
  - Cloud-native threats
- Research methodology
  - Literature review
  - Hypothesis development
  - Experimental design
  - Technical writing

**Lab Exercises:**
- TryHackMe: "Buffer Overflow" rooms
- Conduct fuzzing exercise on vulnerable application
- Research emerging threat and produce threat brief
- PicoCTF: Binary exploitation category
- Analyze recent CVE and create detection rule
- Write research paper on assigned security topic

**Certification Alignment:** OSCP concepts, Security research skills

**Learning Outcomes:**
- Understand vulnerability research processes
- Conduct basic exploit development
- Research and analyze emerging threats
- Produce technical security research

---

### Week 13-18: Capstone Project

**Project Overview:**
Students work individually or in small teams (2-3) to complete a comprehensive capstone project demonstrating mastery across all three semesters.

---

## Capstone Project Options

Students select ONE of the following capstone tracks:

### Option A: Security Tool Development

**Description:** Design, develop, and document an original security tool that addresses a real-world security need.

**Requirements:**
- Original tool concept with clear use case
- Functional prototype (Python, Go, or appropriate language)
- Integration with existing security workflows
- Documentation (user guide, technical documentation)
- Public repository with clean code
- Demonstration of tool in realistic scenario

**Example Projects:**
- Custom SIEM dashboard with threat intelligence integration
- Automated vulnerability scanner for specific technology stack
- Phishing detection and analysis platform
- Threat hunting automation framework
- Security configuration auditing tool
- Custom CTF platform for training

**Deliverables:**
1. Project proposal and requirements document
2. Architecture and design documentation
3. Working tool with source code
4. User and technical documentation
5. Video demonstration (10-15 minutes)
6. Live presentation and defense

**Assessment Criteria:**
- Tool functionality and innovation (30%)
- Code quality and security (20%)
- Documentation quality (15%)
- Practical applicability (20%)
- Presentation and defense (15%)

---

### Option B: Enterprise Security Assessment

**Description:** Conduct a comprehensive security assessment of a partner organization or complex lab environment, producing professional deliverables.

**Requirements:**
- Full penetration test following PTES methodology
- Vulnerability assessment with risk ratings
- Security architecture review
- Incident response readiness evaluation
- Executive and technical reports
- Remediation roadmap

**Scope Includes:**
- External and internal network assessment
- Web application security testing
- Social engineering assessment (if permitted)
- Physical security review (if applicable)
- Policy and procedure review
- Security awareness evaluation

**Deliverables:**
1. Scope and rules of engagement document
2. Executive summary report
3. Technical findings report with evidence
4. Risk-rated vulnerability matrix
5. Remediation roadmap with priorities
6. Presentation to "client" stakeholders

**Assessment Criteria:**
- Assessment methodology and coverage (25%)
- Finding quality and accuracy (25%)
- Report professionalism (20%)
- Remediation recommendations (15%)
- Client presentation (15%)

**Note:** Requires partnership with organization or use of comprehensive lab environment simulating enterprise network.

---

### Option C: CTF Challenge Development

**Description:** Design and develop a complete Capture The Flag event with challenges across multiple security domains.

**Requirements:**
- Minimum 15 challenges across 5 categories
- Difficulty progression (easy → medium → hard)
- Original challenge concepts
- Robust infrastructure (containers, VMs)
- Complete documentation and solutions
- Hosting and execution of CTF event

**Categories Required:**
- Web exploitation (3+ challenges)
- Binary/Reverse engineering (3+ challenges)
- Cryptography (3+ challenges)
- Forensics (3+ challenges)
- OSINT/Miscellaneous (3+ challenges)

**Deliverables:**
1. CTF design document and challenge descriptions
2. Challenge source code and solutions
3. Infrastructure deployment scripts
4. Writeups for all challenges
5. Execute CTF event for peers/community
6. Post-event analysis and lessons learned

**Assessment Criteria:**
- Challenge quality and originality (30%)
- Technical implementation (25%)
- CTF execution success (20%)
- Documentation and writeups (15%)
- Infrastructure robustness (10%)

---

### Option D: Security Research Project

**Description:** Conduct original security research resulting in a publishable paper and practical demonstration.

**Research Areas:**
- Vulnerability discovery and disclosure
- Malware analysis and threat intelligence
- Security tool comparison and evaluation
- Attack technique analysis and detection
- Emerging threat landscape analysis
- Security awareness and human factors

**Requirements:**
- Original research question/hypothesis
- Comprehensive methodology
- Empirical data collection and analysis
- Novel findings or contributions
- Publication-ready paper (IEEE/ACM format)
- Proof of concept or demonstration

**Deliverables:**
1. Research proposal with literature review
2. Methodology documentation
3. Research paper (5000-8000 words)
4. Proof of concept/demonstration
5. Conference-style presentation
6. Peer review participation

**Assessment Criteria:**
- Research quality and rigor (30%)
- Originality and contribution (25%)
- Paper quality and structure (20%)
- Practical demonstration (15%)
- Presentation and defense (10%)

---

### Option E: Red Team vs Blue Team Exercise

**Description:** Design and execute a comprehensive adversary simulation exercise, playing both attacker and defender roles.

**Requirements:**
- Design attack campaign based on real APT TTPs
- Execute attack campaign against target environment
- Simultaneously build detection and response capabilities
- Document complete attack and defense lifecycle
- Create training materials for future cohorts

**Components:**
- **Red Team:** Develop attack playbook, execute campaign, document TTPs
- **Blue Team:** Build detections, respond to attacks, improve defenses
- **Purple Team:** Analyze gaps, improve both sides, document lessons

**Deliverables:**
1. Attack campaign design (MITRE ATT&CK mapped)
2. Red team operation report
3. Blue team detection and response report
4. Gap analysis and improvements
5. Training materials and playbooks
6. Live demonstration of attack/defense

**Assessment Criteria:**
- Attack sophistication and realism (20%)
- Detection coverage and quality (20%)
- Response effectiveness (20%)
- Documentation and analysis (20%)
- Training material quality (10%)
- Demonstration (10%)

---

## Capstone Project Timeline

### Phase 1: Proposal (Week 13)
- Select capstone track
- Submit detailed proposal
- Define scope and deliverables
- Identify required resources
- Instructor approval

### Phase 2: Design & Planning (Week 14)
- Complete design documentation
- Set up infrastructure/environment
- Create project timeline
- Checkpoint presentation

### Phase 3: Implementation (Weeks 15-16)
- Core development/execution
- Regular progress check-ins
- Peer feedback sessions
- Mid-project review

### Phase 4: Testing & Refinement (Week 17)
- Quality assurance
- Documentation completion
- Dry-run presentations
- Final polish

### Phase 5: Presentation & Defense (Week 18)
- Final presentation (20-30 minutes)
- Live demonstration
- Q&A with panel (instructors + industry guests)
- Peer evaluation

---

## Assessment Overview

### Semester 1: Offensive Security

| Component | Weight | Description |
|-----------|--------|-------------|
| Weekly Lab Challenges | 25% | CTF completions, hands-on exercises |
| Practical Assessments | 20% | Mid-term practical exams |
| Penetration Test Reports | 20% | Quality of documentation |
| Semester CTF Competition | 20% | Final CTF performance |
| Oral Defense | 15% | Defend findings and methodology |

### Semester 2: Defensive Security

| Component | Weight | Description |
|-----------|--------|-------------|
| Weekly Lab Challenges | 20% | Blue team exercises, forensics |
| SIEM & Detection Rules | 20% | Quality of detection engineering |
| Forensics Reports | 20% | Investigation documentation |
| Incident Response Simulation | 25% | Team-based IR exercise |
| Blue Team CTF | 15% | Defensive challenge performance |

### Semester 3: Architecture & Research

| Component | Weight | Description |
|-----------|--------|-------------|
| Threat Modeling Exercises | 15% | Threat model quality |
| Security Architecture Design | 15% | Architecture documentation |
| Automation Projects | 15% | Tool development quality |
| Research Paper | 10% | Technical writing quality |
| Capstone Project | 45% | Comprehensive final project |

---

## Certification Preparation Mapping

### CompTIA Security+ (SY0-701)

| Domain | Coverage |
|--------|----------|
| 1.0 General Security Concepts (12%) | Semester 1: Weeks 1-2, 13-14 |
| 2.0 Threats, Vulnerabilities, and Mitigations (22%) | Semester 1: Weeks 3-12 |
| 3.0 Security Architecture (18%) | Semester 3: Weeks 1-6 |
| 4.0 Security Operations (28%) | Semester 2: Weeks 1-16 |
| 5.0 Security Program Management (20%) | Semester 3: Weeks 1-3 |

### EC-Council CEH

| Domain | Coverage |
|--------|----------|
| Footprinting and Reconnaissance | Semester 1: Weeks 3-4 |
| Scanning Networks | Semester 1: Weeks 3-4 |
| Enumeration | Semester 1: Weeks 3-6 |
| Vulnerability Analysis | Semester 1: Weeks 15-16 |
| System Hacking | Semester 1: Weeks 10-12 |
| Malware Threats | Semester 2: Weeks 12-14 |
| Sniffing | Semester 1: Weeks 5-6 |
| Social Engineering | Semester 1: Weeks 3-4 |
| Denial-of-Service | Semester 1: Weeks 5-6 |
| Session Hijacking | Semester 1: Weeks 5-9 |
| Hacking Web Servers/Applications | Semester 1: Weeks 7-9 |
| SQL Injection | Semester 1: Weeks 7-9 |
| Cryptography | Semester 1: Weeks 13-14 |

### DFIR Skills

| Skill Area | Coverage |
|------------|----------|
| Digital Forensics Fundamentals | Semester 2: Weeks 6-11 |
| Incident Response | Semester 2: Weeks 15-16 |
| Network Forensics | Semester 2: Weeks 6-8 |
| Memory Forensics | Semester 2: Weeks 9-11 |
| Malware Analysis | Semester 2: Weeks 12-14 |
| Log Analysis | Semester 2: Weeks 3-5 |
| Threat Intelligence | Semester 3: Weeks 1-3 |

---

## Required Tools & Resources

### Attack Tools
- Kali Linux / ParrotOS
- Metasploit Framework
- Burp Suite Community
- Nmap, Masscan
- Hashcat, John the Ripper
- SQLmap, Nikto
- Gobuster, ffuf
- Hydra, Medusa

### Defense & Forensics Tools
- Wireshark, tcpdump
- Splunk Free / Wazuh
- Autopsy, FTK Imager
- Volatility Framework
- YARA, ClamAV
- Zeek (Bro) IDS
- Snort / Suricata

### Development Tools
- Python 3.x
- Git version control
- Docker
- Virtual machine software
- Code editors (VS Code)

### Online Platforms (Free Tiers)
- TryHackMe
- CyberDefenders
- PicoCTF
- CryptoHack
- LetsDefend
- PortSwigger Web Security Academy
- Blue Team Labs Online

---

## Academic Integrity

**Ethical Conduct Requirements:**
- All security testing conducted only in authorized environments
- No unauthorized access to systems or networks
- Responsible disclosure for any discovered vulnerabilities
- Proper attribution for code, tools, and writeups
- Collaboration within defined boundaries
- No sharing of CTF solutions during active competitions

**Violations Result In:**
- Immediate failure of affected assessment
- Potential removal from program
- Report to academic integrity board
- Possible legal consequences for unauthorized access

---

## Career Pathways

Upon completion, graduates are prepared for:

**Entry-Level Positions:**
- SOC Analyst (Tier 1/2)
- Junior Penetration Tester
- Security Operations Specialist
- Incident Response Analyst
- Vulnerability Analyst
- Security Consultant

**Certification Readiness:**
- CompTIA Security+ (strong preparation)
- CompTIA CySA+ (foundations)
- EC-Council CEH (foundations)
- eJPT (Junior Penetration Tester)
- BTL1 (Blue Team Level 1)

**Advanced Study Pathways:**
- OSCP preparation
- GCIH, GCFA certifications
- Master's in Cybersecurity
- Security research roles

---

## Course Policies

### Lab Environment
- All attacks conducted only in designated lab environments
- No testing against production or external systems
- Immediate reporting of accidental unauthorized access
- Clean up of test artifacts after exercises

### Assessment Submissions
- All reports submitted in PDF format
- Code submitted via Git repositories
- Late submissions: 10% penalty per day
- Maximum 3 days late for any submission

### Collaboration Policy
- Individual assessments: independent work required
- Group projects: equal contribution expected
- CTF competitions: team collaboration within team only
- Code sharing: proper attribution required

### Attendance
- Lab attendance mandatory
- Hands-on exercises cannot be made up
- Two unexcused absences may affect grade
- Remote participation available for emergencies

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [Nov 28, 2025] | Initial curriculum release |

---

*This curriculum prepares students for the dynamic cybersecurity workforce through intensive hands-on training. The CTF-based approach ensures practical skill development that employers value over theoretical knowledge alone.*
