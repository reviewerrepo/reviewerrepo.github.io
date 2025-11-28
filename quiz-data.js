// AOS Finals Quiz Data
const quizData = {
    1: [ // Module 1 - Introduction to Operating System
    {
      question: "What is a function of OSPF hello packets?",
      type: "multiple-choice",
      answer: "to discover neighbors and build adjacencies between them",
      options: [
        "to send specifically requested link-state records",
        "to discover neighbors and build adjacencies between them",
        "to ensure database synchronization between routers",
        "to request specific link-state records from neighbor routers"
      ],
      note: ""
    },
    {
      question: "Which OSPF packet contains the different types of Link-State Advertisements?",
      type: "multiple-choice",
      answer: "LSU",
      options: ["hello", "DBD", "LSR", "LSU", "LSAck"],
      note: ""
    },
    {
      question: "What does an OSPF area contain?",
      type: "multiple-choice",
      answer: "routers that have the same link-state information in their LSDBs",
      options: [
        "routers that share the same router ID",
        "routers whose SPF trees are identical",
        "routers that have the same link-state information in their LSDBs",
        "routers that share the same process ID"
      ],
      note: ""
    },
    {
      question: "What is used to facilitate hierarchical routing in OSPF?",
      type: "multiple-choice",
      answer: "the use of multiple areas",
      options: [
        "the use of multiple areas",
        "frequent SPF calculations",
        "autosummarization",
        "the election of designated routers"
      ],
      note: ""
    },
    {
      question: "Which OSPF data structure is identical on all routers in the same area?",
      type: "multiple-choice",
      answer: "link-state database",
      options: ["forwarding database", "link-state database", "adjacency database", "routing table"],
      note: ""
    },
    {
      question: "What step happens immediately after forming adjacency with another OSPF router?",
      type: "multiple-choice",
      answer: "exchanges link-state advertisements",
      options: [
        "builds the topology table",
        "exchanges link-state advertisements",
        "chooses the best path",
        "executes the SPF algorithm"
      ],
      note: ""
    },
    {
      question: "If hello interval is set to 15 seconds, what becomes the dead interval?",
      type: "multiple-choice",
      answer: "60 seconds",
      options: [
        "The dead interval will not change from the default value.",
        "30 seconds",
        "60 seconds",
        "15 seconds"
      ],
      note: "Default dead interval = 4 × hello"
    },
    {
      question: "What happens when OSPF timers do not match between neighbors?",
      type: "multiple-choice",
      answer: "The R1 dead timer expires between hello packets from R2.",
      options: [
        "R1 automatically adjusts its timers",
        "The R1 dead timer expires between hello packets",
        "R2 hello timer expires every 10 seconds",
        "The neighbor adjacency has formed"
      ],
      note: ""
    },
    {
      question: "Which two values must match in OSPF hello packets to form adjacency?",
      type: "multiple-choice",
      answer: ["dead interval", "hello interval"],
      options: ["dead interval", "router priority", "list of neighbors", "router ID", "hello interval"],
      note: "Multi-answer question"
    },
    {
      question: "What is the default router priority for DR/BDR election in OSPF?",
      type: "multiple-choice",
      answer: "1",
      options: ["0", "1", "10", "255"],
      note: ""
    },
    {
      question: "Which OSPF packet contains an abbreviated LSDB?",
      type: "multiple-choice",
      answer: "database description",
      options: ["database description", "link-state update", "link-state request", "link-state acknowledgment"],
      note: ""
    },
    {
      question: "When are DR/BDR elections required?",
      type: "multiple-choice",
      answer: "when routers are interconnected over a common Ethernet network",
      options: [
        "point-to-point links",
        "when routers cannot form adjacencies",
        "when routers are interconnected over a common Ethernet network",
        "when neighbors are in different networks"
      ],
      note: ""
    },
    {
      question: "How often are LSU packets sent when OSPF is converged?",
      type: "multiple-choice",
      answer: "every 30 minutes",
      options: ["every 5 minutes", "every 10 minutes", "every 30 minutes", "every 60 minutes"],
      note: ""
    },
    {
      question: "What does OSPF prefer to use as router ID?",
      type: "multiple-choice",
      answer: "any IP address configured using the router-id command",
      options: [
        "loopback with highest IP",
        "any IP configured using router-id command",
        "highest active interface IP",
        "highest participating interface"
      ],
      note: ""
    },
    {
      question: "Purpose of an OSPF router ID? (Choose 2)",
      type: "multiple-choice",
      answer: ["to uniquely identify the router", "to facilitate DR election"],
      options: [
        "to uniquely identify the router",
        "to participate in DR election",
        "to determine lowest cost path",
        "to facilitate convergence",
        "to transition neighbor state to Full"
      ],
      note: ""
    },
    {
      question: "If no router ID is set manually, which address will OSPF choose?",
      type: "multiple-choice",
      answer: "192.168.1.100",
      options: ["10.0.0.1", "10.1.0.1", "192.168.1.100", "209.165.201.1"],
      note: ""
    },
    {
      question: "In 'router ospf 11', what does 11 represent?",
      type: "multiple-choice",
      answer: "OSPF process ID",
      options: [
        "OSPF process ID",
        "cost",
        "autonomous system number",
        "administrative distance",
        "area number"
      ],
      note: ""
    },
    {
      question: "Which OSPF network command advertises only 172.16.1.0?",
      type: "multiple-choice",
      answer: "network 172.16.1.0 0.0.0.0 area 0",
      options: [
        "network 172.16.1.0 0.0.255.255 area 0",
        "network 172.16.0.0 0.0.15.255 area 0",
        "network 172.16.1.0 255.255.255.0 area 0",
        "network 172.16.1.0 0.0.0.0 area 0"
      ],
      note: ""
    },
    {
      question: "Which routers become DR and BDR after reboot?",
      type: "multiple-choice",
      answer: "Router R4 will become the DR and router R3 will become the BDR.",
      options: [
        "R4 DR, R1 BDR",
        "R2 DR, R3 BDR",
        "R1 DR, R2 BDR",
        "R4 DR, R3 BDR"
      ],
      note: ""
    },
    {
      question: "Default OSPF cost for 100 Mb/s or greater?",
      type: "multiple-choice",
      answer: "1",
      options: ["100000000", "10000", "1", "100"],
      note: ""
    },
    {
      question: "Where is a default route typically configured in a single-area OSPF network?",
      type: "multiple-choice",
      answer: "ISP",
      options: ["R0-A", "ISP, R0-A, R0-B, R0-C", "ISP", "R0-B and R0-C"],
      note: ""
    },
    {
      question: "Which command checks if OSPF adjacency is formed?",
      type: "multiple-choice",
      answer: "show ip ospf neighbor",
      options: ["ping", "show ip ospf neighbor", "show ip interface brief", "show ip protocols"],
      note: ""
    },
  
    {
      question: "Which command generated the shown OSPF interface output?",
      type: "multiple-choice",
      answer: "show ip ospf interface serial0/0/1",
      options: [
        "show ip ospf interface serial0/0/1",
        "show ip route ospf",
        "show ip ospf",
        "show ip ospf neighbor"
      ],
      note: ""
    },
    {
      question: "Which command verifies OSPF is enabled and lists advertised networks?",
      type: "multiple-choice",
      answer: "show ip protocols",
      options: ["show ip interface brief", "show ip ospf interface", "show ip protocols", "show ip route ospf"],
      note: ""
    },
    {
      question: "PC1 cannot connect to PC2. What is the most likely OSPF issue?",
      type: "multiple-choice",
      answer: "Interface Fa0/0 has not been activated for OSPFv2 on R2.",
      options: [
        "Fa0/0 inactive on R2",
        "Fa0/0 is passive",
        "S0/0 is passive",
        "S0/0 inactive"
      ],
      note: ""
    },
    {
      question: "Recommended Cisco best practice for identifying OSPF routers?",
      type: "multiple-choice",
      answer: "Configure a router-id value.",
      options: [
        "Configure router-id",
        "Use highest active interface IP",
        "Use loopback highest IP",
        "Use highest participating interface IP"
      ],
      note: ""
    },
    {
      question: "Which step describes a router running SPF algorithm?",
      type: "multiple-choice",
      answer: "executing the SPF algorithm",
      options: [
        "load balancing",
        "declaring neighbor unreachable",
        "choosing best route",
        "executing the SPF algorithm"
      ],
      note: ""
    },
    {
      question: "Wildcard mask for 192.168.223.0 /23?",
      type: "multiple-choice",
      answer: "0.0.1.255",
      options: ["0.0.1.255", "0.0.7.255", "0.0.15.255", "0.0.31.255"],
      note: ""
    },
    {
      question: "What is the format of OSPF router ID?",
      type: "multiple-choice",
      answer: "a 32-bit number formatted like an IPv4 address",
      options: [
        "unique host name",
        "phrase up to 16 chars",
        "a 32-bit number formatted like IPv4",
        "8-bit number"
      ],
      note: ""
    },
    {
      question: "How to apply new OSPF router ID?",
      type: "multiple-choice",
      answer: "clear ip ospf process",
      options: [
        "copy running startup",
        "resume",
        "clear ip route *",
        "clear ip ospf process"
      ],
      note: ""
    },
    {
      question: "Effect of 'network 192.168.1.1 0.0.0.0 area 0'?",
      type: "multiple-choice",
      answer: "It tells the router which interface to turn on for OSPF.",
      options: [
        "Advertises all 192.168.1.0 networks",
        "Turns on OSPF for matching interface",
        "Changes router ID",
        "Enables OSPF on all interfaces"
      ],
      note: ""
    },
    {
      question: "Why adjust OSPF reference bandwidth?",
      type: "multiple-choice",
      answer: "to more accurately reflect cost of links greater than 100 Mb/s",
      options: [
        "force link into route",
        "reflect cost for >100 Mb links",
        "enable OSPF",
        "increase speed"
      ],
      note: ""
    },
  
    {
      question: "Match OSPF components (SPF, adjacency database, single area, LSDB)",
      type: "multiple-choice",
      answer: [
        "SPF = algorithm",
        "Adjacency DB = neighbor info",
        "Single-area OSPF = backbone only",
        "LSDB = topology table"
      ],
      options: [
        "SPF algorithm",
        "Adjacency database",
        "Single-area OSPF",
        "Link-state database"
      ],
      note: "Matching converted to grouped answer"
    },
  
    {
      question: "Benefit of multiarea OSPF?",
      type: "multiple-choice",
      answer: "Topology changes in one area do not cause SPF recalculations in other areas.",
      options: [
        "Topology changes do not trigger SPF in other areas",
        "Routers share full LSDB",
        "Backbone not required",
        "Automatic summarization"
      ],
      note: ""
    },
    {
      question: "What indicates OSPF neighbor is unreachable?",
      type: "multiple-choice",
      answer: "if the router no longer receives hello packets",
      options: [
        "no hello packets",
        "update hop count 16",
        "LSP repeats",
        "no routing updates"
      ],
      note: ""
    },
    {
      question: "Order of OSPF neighbor states?",
      type: "multiple-choice",
      answer: "Down → Init → Two-way → Exstart → Exchange → Loading → Full",
      options: [
        "Down → Init → Two-way → Exstart → Exchange → Loading → Full"
      ],
      note: ""
    },
    {
      question: "DR/BDR election conclusion?",
      type: "multiple-choice",
      answer: "If a new router with a higher priority is added, it will become the DR.",
      options: [
        "C priority 255 → DR",
        "A becomes DR",
        "If DR fails B becomes new DR",
        "New higher priority router becomes DR"
      ],
      note: ""
    },
    {
      question: "Wildcard mask for 64.102.0.0 /25?",
      type: "multiple-choice",
      answer: "0.0.0.127",
      options: ["0.0.31.255", "0.0.0.63", "0.0.63.255", "0.0.0.127"],
      note: ""
    },
    {
      question: "Command to verify hello/dead timers?",
      type: "multiple-choice",
      answer: "show ip ospf interface serial 0/0/0",
      options: [
        "show ipv6 ospf interface s0/0/0",
        "show ip ospf neighbor",
        "show ip ospf interface fa0/1",
        "show ip ospf interface serial 0/0/0"
      ],
      note: ""
    },
    {
      question: "Wildcard mask for 128.107.0.0 /26?",
      type: "multiple-choice",
      answer: "0.0.0.63",
      options: ["0.0.63.255", "0.0.0.63", "0.0.0.3", "0.0.0.7"],
      note: ""
    },
    {
      question: "Match OSPF packet usage",
      type: "multiple-choice",
      answer: [
        "LSR: request more info",
        "Hello: establish adjacency",
        "DBD: compare topology",
        "LSU: advertise new info"
      ],
      options: [
        "link-state request",
        "hello packet",
        "database description",
        "link-state update"
      ],
      note: ""
    },
    {
      question: "Wildcard mask for 192.168.181.0 /23?",
      type: "multiple-choice",
      answer: "0.0.1.255",
      options: ["0.0.63.255", "0.0.15.255", "0.0.1.255", "0.0.31.255"],
      note: ""
    },
    {
      question: "Wildcard mask for 198.19.0.0 /22?",
      type: "multiple-choice",
      answer: "0.0.3.255",
      options: ["0.0.63.255", "0.0.3.255", "0.0.31.255", "0.0.0.255"],
      note: ""
    },
    {
      question: "Wildcard mask for 128.107.0.0 /22?",
      type: "multiple-choice",
      answer: "0.0.3.255",
      options: ["0.0.3.255", "0.0.0.7", "0.0.0.3", "0.0.63.255"],
      note: ""
    },
    {
      question: "Which step describes flooding LSAs?",
      type: "multiple-choice",
      answer: "exchanging link-state advertisements",
      options: [
        "building topology table",
        "selecting router ID",
        "exchanging LSAs",
        "injecting default route"
      ],
      note: ""
    },
    {
      question: "Which step describes sending Hello packets?",
      type: "multiple-choice",
      answer: "establishing neighbor adjacencies",
      options: [
        "electing DR",
        "establishing neighbor adjacencies",
        "injecting default route",
        "exchanging LSAs"
      ],
      note: ""
    },
    {
      question: "Wildcard mask for 64.100.0.0 /24?",
      type: "multiple-choice",
      answer: "0.0.0.255",
      options: ["0.0.0.31", "0.0.0.255", "0.0.0.63", "0.0.0.127"],
      note: ""
    },
    {
      question: "Which step describes inserting best paths into routing table?",
      type: "multiple-choice",
      answer: "choosing the best route",
      options: [
        "declaring neighbor unreachable",
        "executing SPF algorithm",
        "load balancing equal-cost paths",
        "choosing the best route"
      ],
      note: ""
    },
    {
      question: "What type of address is 64.101.198.197?",
      type: "multiple-choice",
      answer: "public",
      options: ["public", "private"],
      note: ""
    },
    {
      question: "Which network command advertises only 172.16.1.0/24?",
      type: "multiple-choice",
      answer: "network 172.16.1.0 0.0.0.255 area 0",
      options: [
        "network 172.16.1.0 0.0.255.255 area 0",
        "network 172.16.0.0 0.0.15.255 area 0",
        "network 172.16.1.0 0.0.0.255 area 0",
        "network 172.16.1.0 0.0.0.0 area 0"
      ],
      note: ""
    },
    {
      question: "Which step describes building the topology table?",
      type: "multiple-choice",
      answer: "building the topology table",
      options: [
        "selecting router ID",
        "declaring neighbor unreachable",
        "executing SPF algorithm",
        "building the topology table"
      ],
      note: ""
    },
    {
      question: "The IT department reports a company web server is receiving an abnormally high number of page requests from different locations at the same time. What type of attack is occurring?",
      type: "multiple-choice",
      answer: "DDoS",
      options: ["adware", "DDoS", "phishing", "social engineering", "spyware"],
      note: "Distributed Denial of Service"
    },
    {
      question: "What causes a buffer overflow?",
      type: "multiple-choice",
      answer: "attempting to write more data to a memory location than it can hold",
      options: [
        "launching a countermeasure",
        "installing too many updates",
        "attempting to write more data to a memory location than it can hold",
        "sending too much info to multiple interfaces",
        "sending repeated Telnet connections"
      ],
      note: ""
    },
    {
      question: "Which objective of secure communication is achieved by encrypting data?",
      type: "multiple-choice",
      answer: "confidentiality",
      options: ["authentication", "availability", "confidentiality", "integrity"],
      note: ""
    },
    {
      question: "What type of malware spreads automatically across the network?",
      type: "multiple-choice",
      answer: "worm",
      options: ["worm", "virus", "Trojan horse", "botnet"],
      note: ""
    },
    {
      question: "What commonly motivates cybercriminals as compared to hacktivists?",
      type: "multiple-choice",
      answer: "financial gain",
      options: ["financial gain", "fame seeking", "status", "political reasons"],
      note: ""
    },
    {
      question: "What is a ping sweep?",
      type: "multiple-choice",
      answer: "a network scanning technique that identifies live hosts in a range of IP addresses",
      options: [
        "query/response domain protocol",
        "scanning TCP/UDP ports",
        "packet capture tool",
        "identifies live hosts in IP range"
      ],
      note: ""
    },
    {
      question: "Which type of attack prevents legitimate users from accessing services?",
      type: "multiple-choice",
      answer: "DoS",
      options: ["address spoofing", "MITM", "session hijacking", "DoS"],
      note: ""
    },
    {
      question: "Which requirement is ensured by MD5 or SHA hashing?",
      type: "multiple-choice",
      answer: "integrity",
      options: ["nonrepudiation", "authentication", "integrity", "confidentiality"],
      note: ""
    },
    {
      question: "If asymmetric encryption uses a public key to encrypt data, what decrypts it?",
      type: "multiple-choice",
      answer: "a private key",
      options: ["digital certificate", "different public key", "a private key", "DH"],
      note: ""
    },
    {
      question: "Which two packet filters can an IPv4 extended ACL use?",
      type: "multiple-choice",
      answer: ["destination UDP port number", "ICMP message type"],
      options: [
        "destination UDP port number",
        "computer type",
        "destination MAC address",
        "ICMP message type",
        "source TCP hello address"
      ],
      note: "Multiple answer"
    },
    {
      question: "What type of ACL offers greater flexibility?",
      type: "multiple-choice",
      answer: "extended",
      options: ["numbered standard", "named standard", "extended", "flexible"],
      note: ""
    },
    {
      question: "Quickest way to remove a single ACE from a named ACL?",
      type: "multiple-choice",
      answer: "Use the no keyword with the sequence number.",
      options: [
        "Use 'no' with the sequence number",
        "Copy to editor, remove ACE, paste back",
        "Create a new ACL",
        "Remove entire ACL then recreate"
      ],
      note: ""
    },
    {
      question: "Effect of entering 'no access-list 10'?",
      type: "multiple-choice",
      answer: "ACL 10 is removed from the running configuration.",
      options: [
        "Removed from running config + interface",
        "Removed from running config",
        "Disabled only on interface",
        "Removed after restart"
      ],
      note: ""
    },
    {
      question: "Users on 172.31.1.0/24 cannot forward through CiscoVille. What is the cause?",
      type: "multiple-choice",
      answer: "The permit statement has an incorrect wildcard mask.",
      options: [
        "established keyword missing",
        "incorrect ACE order",
        "missing port number",
        "incorrect wildcard mask"
      ],
      note: ""
    },
    {
      question: "Which two commands allow only host 192.168.15.23 to access vty?",
      type: "multiple-choice",
      answer: [
        "access-list 10 permit 192.168.15.23 0.0.0.0",
        "access-list 10 permit host 192.168.15.23"
      ],
      options: [
        "permit 192.168.15.23 0.0.0.0",
        "permit 192.168.15.23 0.0.0.255",
        "permit 192.168.15.23 255.255.255.255",
        "permit host 192.168.15.23",
        "permit 192.168.15.23 255.255.255.0"
      ],
      note: "Multiple answer"
    },
    {
      question: "Which ACL allows only devices on R2's G0/0 to access networks on R1?",
      type: "multiple-choice",
      answer: "access-list 1 permit 192.168.10.0 0.0.0.255",
      options: [
        "permit 192.168.10.128 0.0.0.63",
        "permit 192.168.10.0 0.0.0.255",
        "permit 192.168.10.96 0.0.0.31",
        "permit 192.168.10.0 0.0.0.63"
      ],
      note: ""
    },
    {
      question: "Standard ACL to deny 172.16.0.0/16 but permit all else?",
      type: "multiple-choice",
      answer: [
        "deny 172.16.0.0 0.0.255.255",
        "permit any"
      ],
      options: [
        "deny 172.16.0.0 255.255.0.0",
        "permit any",
        "host 172.16.0.0",
        "deny 172.16.0.0 0.0.255.255",
        "deny any"
      ],
      note: ""
    },
    {
      question: "Standard ACL outbound on Fa0/0 intended to block 172.16.4.0 → 172.16.3.0. What is wrong?",
      type: "multiple-choice",
      answer: "ACL should be applied inbound on Fa0/0.",
      options: [
        "Apply on all interfaces",
        "Apply inbound on Fa0/0",
        "All traffic is blocked",
        "Traffic from 172.16.4.0 is blocked only",
        "Use extended ACL"
      ],
      note: ""
    },
    {
      question: "ACE to deny subnet 172.23.16.0/20 in TRAFFIC-CONTROL ACL?",
      type: "multiple-choice",
      answer: "30 deny 172.23.16.0 0.0.15.255",
      options: [
        "30 deny 172.23.16.0 0.0.15.255",
        "15 deny 172.23.16.0 0.0.15.255",
        "5 deny 172.23.16.0 0.0.15.255",
        "5 deny 172.23.16.0 0.0.255.255"
      ],
      note: ""
    },
    {
      question: "Which statement describes this ACL configuration?",
      type: "multiple-choice",
      answer: "An SSH connection is allowed from 172.16.45.16 to 192.168.25.18.",
      options: [
        "SSH allowed from 172.16.45.16 → 192.168.25.18",
        "SSH allowed from 192.168.25.18 → 172.16.45.16",
        "Telnet allowed from 192.168.25.18 → 172.16.45.16",
        "Telnet allowed from 172.16.45.16 → 192.168.25.18"
      ],
      note: ""
    },
    {
      question: "What can be determined about this ACL output?",
      type: "multiple-choice",
      answer: "The router has not received any Telnet packets from 10.35.80.22 going to 10.23.77.101.",
      options: [
        "ACL missing deny ip any any",
        "ACL monitors traffic destined for 10.23.77.101",
        "ACL is not working",
        "No Telnet packets from 10.35.80.22"
      ],
      note: ""
    },
    {
      question: "Which TCP attack overwhelms a host with half-open connections?",
      type: "multiple-choice",
      answer: "SYN flood attack",
      options: [
        "port scan attack",
        "SYN flood attack",
        "session hijacking attack",
        "reset attack"
      ],
      note: ""
    },
    {
      question: "What happens with this ACL inbound on interface 192.168.10.254?",
      type: "multiple-choice",
      answer: [
        "Devices on 192.168.10.0/24 cannot reply to ping requests.",
        "Devices on 192.168.10.0/24 can ping devices on 192.168.11.0."
      ],
      options: [
        "Only L3 connections allowed",
        "Cannot reply to ping",
        "Can ping 192.168.11.0",
        "Telnet/SSH allowed into router",
        "Ping replies allowed",
        "Only 192.168.10.1 can access router"
      ],
      note: ""
    },
    {
      question: "What happens when adding ACEs to named ACL 'Managers'?",
      type: "multiple-choice",
      answer: "The commands are added at the end of the existing ACL.",
      options: [
        "Added at end",
        "Overwrite ACL",
        "Added at beginning",
        "Error: ACL exists"
      ],
      note: ""
    },
    {
      question: "Which protocol is attacked when a cybercriminal gives an invalid gateway?",
      type: "multiple-choice",
      answer: "DHCP",
      options: ["DHCP", "DNS", "ICMP", "HTTP/HTTPS"],
      note: "Used in DHCP spoofing (MITM)"
    },
    {
      question: "If traffic leaving S0/0/0 does not match a standard ACL, what happens?",
      type: "multiple-choice",
      answer: "The traffic is dropped.",
      options: [
        "Traffic dropped",
        "Source checked then rerouted",
        "Determined by destination IP",
        "Determined by destination + port"
      ],
      note: ""
    },
    {
      question: "Where to place standard ACL so VLAN10 can print to VLAN12 but VLAN20 cannot?",
      type: "multiple-choice",
      answer: "Apply inbound on R1 Gi0/1.12",
      options: [
        "inbound",
        "R2 S0/0/1",
        "R1 Gi0/1.12",
        "outbound",
        "R1 S0/0/0",
        "R2 Gi0/1.20"
      ],
      note: ""
    },
    {
      question: "What is a characteristic of standard IPv4 ACLs?",
      type: "multiple-choice",
      answer: "They filter traffic based on source IP addresses only.",
      options: [
        "Configured in interface mode",
        "Filter source IP + ports",
        "Cannot be named",
        "Filter source IP only"
      ],
      note: ""
    },
    {
      question: "Best practice when configuring ACLs on vty lines?",
      type: "multiple-choice",
      answer: "Place identical restrictions on all vty lines.",
      options: [
        "Same restrictions on all vty lines",
        "Remove vty password",
        "Apply inbound ACL",
        "Use extended ACL"
      ],
      note: ""
    },
    {
      question: "After editing ACL 101, which statements are true?",
      type: "multiple-choice",
      answer: [
        "Ping packets will be permitted.",
        "SSH packets will be permitted."
      ],
      options: [
        "TFTP permitted",
        "Ping permitted",
        "Telnet permitted",
        "SSH permitted",
        "All TCP + UDP denied"
      ],
      note: ""
    },
    {
      question: "ACL allowing 192.168.10.0/24 to access web server 172.17.80.1 but block Telnet?",
      type: "multiple-choice",
      answer: "permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80; deny tcp 192.168.10.0 0.0.0.255 any eq 23",
      options: [
        "deny tcp host 192.168.10.0 any eq 23; permit tcp host 192.168.10.1 eq 80",
        "permit tcp 192.168.10.0/24 any eq 80; deny tcp port 23",
        "permit any to host 172.17.80.1; deny Telnet",
        "permit tcp 192.168.10.0/24 host 172.17.80.1 eq 80; deny tcp port 23"
      ],
      note: ""
    },
    {
      question: "What is the term for a mechanism that takes advantage of a vulnerability?",
      type: "multiple-choice",
      answer: "exploit",
      options: ["mitigation", "exploit", "vulnerability", "threat"],
      note: ""
    },
    {
      question: "Best ACL type and placement to allow admin 192.168.11.10 to manage R1?",
      type: "multiple-choice",
      answer: "standard ACL inbound on R1 vty lines",
      options: [
        "extended ACL outbound on R2",
        "standard ACL inbound on R1 vty lines",
        "extended ACL inbound on R1",
        "extended ACL outbound on R2 S0/0/1"
      ],
      note: ""
    },
    {
      question: "When is the 'any' keyword used?",
      type: "multiple-choice",
      answer: "to identify any IP address",
      options: [
        "for documentation",
        "to generate messages",
        "to identify any IP address",
        "to identify specific IP"
      ],
      note: ""
    },
    {
      question: "Which statement accurately describes the evolution of security threats?",
      type: "multiple-choice",
      answer: "Internal threats can cause even greater damage than external threats.",
      options: [
        "Internet was secure from the start",
        "Early users often harmed others",
        "Internal threats can be more damaging",
        "Threats less sophisticated now"
      ],
      note: ""
    },
    {
      question: "A phone call requesting username/password represents what threat?",
      type: "multiple-choice",
      answer: "social engineering",
      options: ["spam", "social engineering", "DDoS", "keylogging"],
      note: ""
    },
    {
      question: "How are zombies used in security attacks?",
      type: "multiple-choice",
      answer: "They are infected machines that carry out DDoS attacks.",
      options: [
        "target individuals",
        "scan for open ports",
        "replace legitimate software",
        "carry out DDoS attacks"
      ],
      note: ""
    },
    {
      question: "Which attack involves intercepting communication between two parties?",
      type: "multiple-choice",
      answer: "man-in-the-middle attack",
      options: ["MITM", "SYN flood", "DoS", "ICMP attack"],
      note: ""
    },
    {
      question: "Which keywords replace wildcard mask pairs? (Choose 2)",
      type: "multiple-choice",
      answer: ["host", "any"],
      options: ["host", "most", "gt", "some", "any", "all"],
      note: ""
    },
    {
      question: "Difference between inbound and outbound ACLs?",
      type: "multiple-choice",
      answer: "Inbound ACLs are processed before routing; outbound after routing.",
      options: [
        "Inbound before routing, outbound after",
        "Inbound filters multiple criteria",
        "Multiple inbound ACLs allowed",
        "Outbound only on routers"
      ],
      note: ""
    },
    {
      question: "Effect of 'permit tcp 172.16.4.0 0.0.0.255 any eq www' inbound on f0/0?",
      type: "multiple-choice",
      answer: "Traffic from 172.16.4.0/24 is permitted to all TCP port 80 destinations.",
      options: [
        "All TCP permitted",
        "Traffic from 172.16.4.0 → port 80 permitted",
        "All 172.16.4.0 traffic permitted",
        "Command rejected"
      ],
      note: ""
    },
    {
      question: "Which ACE permits traffic destined to web server 192.168.1.1?",
      type: "multiple-choice",
      answer: "access-list 101 permit tcp any host 192.168.1.1 eq 80",
      options: [
        "permit tcp any host 192.168.1.1 eq 80",
        "permit tcp host 192.168.1.1 eq 80 any",
        "permit tcp host 192.168.1.1 any eq 80",
        "permit tcp any eq 80 host 192.168.1.1"
      ],
      note: ""
    },
    {
      question: "Which term refers to software that installs itself without user consent?",
      type: "multiple-choice",
      answer: "malware",
      options: ["malware", "worm", "fix", "signature"],
      note: ""
    },
    {
      question: "What is a characteristic of a Trojan horse?",
      type: "multiple-choice",
      answer: "malicious code hidden in legitimate software",
      options: [
        "self-replicating",
        "uses public and private keys",
        "hidden in legitimate software",
        "attacks network infrastructure"
      ],
      note: ""
    },
    {
      question: "Which attack attempts to guess passwords repeatedly?",
      type: "multiple-choice",
      answer: "brute-force attack",
      options: [
        "replay attack",
        "man-in-the-middle attack",
        "brute-force attack",
        "ICMP redirect attack"
      ],
      note: ""
    },
    {
      question: "A host cannot send traffic through a router. What is the likely problem?",
      type: "multiple-choice",
      answer: "Incorrect or misconfigured access control list",
      options: [
        "DNS misconfiguration",
        "switchport shutdown",
        "misconfigured ACL",
        "duplicate IP address"
      ],
      note: ""
    },
    {
      question: "What does NAT provide?",
      type: "multiple-choice",
      answer: "translates private IP addresses into public IP addresses",
      options: [
        "assigns DNS names",
        "allows IPv6 multicast",
        "translates private IPs to public IPs",
        "provides DHCP reservations"
      ],
      note: ""
    },
    {
      question: "Which NAT type maps multiple private addresses to a single public address?",
      type: "multiple-choice",
      answer: "PAT",
      options: ["static NAT", "dynamic NAT", "PAT", "bi-NAT"],
      note: ""
    },
    {
      question: "What is a characteristic of static NAT?",
      type: "multiple-choice",
      answer: "one-to-one mapping between private and public IP addresses",
      options: [
        "one-to-one mapping",
        "many-to-one mapping",
        "one-to-many mapping",
        "no mapping required"
      ],
      note: ""
    },
    {
      question: "Which NAT term refers to the public IP address assigned to a device?",
      type: "multiple-choice",
      answer: "inside global address",
      options: [
        "inside local address",
        "inside global address",
        "outside local address",
        "outside global address"
      ],
      note: ""
    },
    {
      question: "Which NAT configuration command identifies inside local and global interfaces?",
      type: "multiple-choice",
      answer: "ip nat inside / ip nat outside",
      options: [
        "ip nat table",
        "ip nat route",
        "ip nat inside / ip nat outside",
        "ip nat mapping interface"
      ],
      note: ""
    },
    {
      question: "What is the effect of PAT?",
      type: "multiple-choice",
      answer: "multiple private hosts share a single public IP address using port numbers",
      options: [
        "public IP is assigned dynamically",
        "multiple hosts share one IP using ports",
        "private IP replaces MAC address",
        "router blocks all outbound traffic"
      ],
      note: ""
    },
    {
      question: "Which command shows active NAT translations?",
      type: "multiple-choice",
      answer: "show ip nat translations",
      options: [
        "show ip nat statistics",
        "show ip route",
        "show ip nat translations",
        "show running-config nat"
      ],
      note: ""
    },
    {
      question: "Which two statements describe inside global and inside local addresses?",
      type: "multiple-choice",
      answer: [
        "Inside local is the private address before translation.",
        "Inside global is the public address after translation."
      ],
      options: [
        "Inside global = private before translation",
        "Inside local = public after translation",
        "Inside local = private before translation",
        "Inside global = public after translation",
        "Inside global = MAC address of host"
      ],
      note: "Multiple answer"
    },
    {
      question: "Which NAT type requires a pool of public IPv4 addresses?",
      type: "multiple-choice",
      answer: "dynamic NAT",
      options: ["dynamic NAT", "PAT", "static NAT", "overloaded NAT"],
      note: ""
    },
    {
      question: "What is port forwarding used for?",
      type: "multiple-choice",
      answer: "to allow external users access to internal servers",
      options: [
        "block external access",
        "allow external access to internal servers",
        "hide source MAC addresses",
        "reserve a DHCP address"
      ],
      note: ""
    },
    {
      question: "What condition must be met for NAT to work?",
      type: "multiple-choice",
      answer: "one interface must be designated inside and another outside",
      options: [
        "router must run OSPF",
        "DHCP must be enabled",
        "one interface must be designated inside and another outside",
        "router must support IPv6"
      ],
      note: ""
    },
    {
      question: "Which NAT information is stored in the NAT table?",
      type: "multiple-choice",
      answer: "inside local to inside global mappings",
      options: [
        "MAC addresses",
        "port-security violations",
        "inside to global mappings",
        "routing table entries"
      ],
      note: ""
    },
    {
      question: "Which NAT type is shown in the config?",
      type: "multiple-choice",
      answer: "PAT",
      options: ["Static NAT", "Dynamic NAT", "PAT", "Port forwarding"],
      note: ""
    },
    {
      question: "Which IPv6 protocol replaces ARP?",
      type: "multiple-choice",
      answer: "ICMPv6 Neighbor Solicitation and Advertisement messages",
      options: [
        "DHCPv6",
        "EUI-64",
        "NS/NA ICMPv6 messages",
        "ARPv6"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address type is equivalent to IPv4 public addresses?",
      type: "multiple-choice",
      answer: "global unicast",
      options: ["link-local", "unique-local", "multicast", "global unicast"],
      note: ""
    },
    {
      question: "Which IPv6 address type begins with FE80?",
      type: "multiple-choice",
      answer: "link-local",
      options: ["link-local", "global unicast", "multicast", "anycast"],
      note: ""
    },
    {
      question: "What is stateless autoconfiguration?",
      type: "multiple-choice",
      answer: "hosts automatically generate their IPv6 address using prefix information from routers",
      options: [
        "manual IPv6 assignment",
        "hosts request DHCP every 30 sec",
        "routers advertise prefixes",
        "hosts generate IPv6 based on router prefix"
      ],
      note: ""
    },
    {
      question: "Which IPv6 message verifies reachability between neighbors?",
      type: "multiple-choice",
      answer: "neighbor solicitation",
      options: ["router solicitation", "neighbor solicitation", "ICMP echo", "gratuitous NA"],
      note: ""
    },
    {
      question: "Which IPv6 prefix length is most commonly used for LANs?",
      type: "multiple-choice",
      answer: "/64",
      options: ["/48", "/56", "/64", "/128"],
      note: ""
    },
    {
      question: "What is the purpose of IPv6 EUI-64?",
      type: "multiple-choice",
      answer: "automatically generates the interface ID using MAC address",
      options: [
        "generates IPv6 subnet",
        "assigns DNS name",
        "creates interface ID from MAC",
        "configures routing"
      ],
      note: ""
    },
    {
      question: "Which statement describes IPv6 link-local addresses?",
      type: "multiple-choice",
      answer: "They are required for communication between devices on the same link.",
      options: [
        "Unique across global Internet",
        "Used only for DHCPv6",
        "Generated only by routers",
        "Required for communication on same link"
      ],
      note: ""
    },
    {
      question: "What is the prefix of IPv6 multicast addresses?",
      type: "multiple-choice",
      answer: "FF00::/8",
      options: ["FE80::/10", "2000::/3", "FF00::/8", "FD00::/8"],
      note: ""
    },
    {
      question: "Which IPv6 messages are used by routers to announce themselves?",
      type: "multiple-choice",
      answer: "router advertisement (RA)",
      options: [
        "router solicitation",
        "neighbor advertisement",
        "router advertisement",
        "ICMPv6 host discover"
      ],
      note: ""
    },
    {
      question: "Which two statements describe IPv6 unique local addresses?",
      type: "multiple-choice",
      answer: [
        "They are not routable on the global Internet.",
        "They begin with FC00::/7."
      ],
      options: [
        "Routable globally",
        "Not routable globally",
        "Begin with FC00::/7",
        "Begin with FE80::/10",
        "Used only by ISPs"
      ],
      note: ""
    },
    {
      question: "What is the IPv6 loopback address?",
      type: "multiple-choice",
      answer: "::1",
      options: ["::0", "::1", "::FFFF", "FF00::1"],
      note: ""
    },
    {
      question: "What type of IPv6 address is FEC0::?",
      type: "multiple-choice",
      answer: "site-local (deprecated)",
      options: ["global", "site-local", "multicast", "unspecified"],
      note: "Site-local is deprecated."
    },
    {
      question: "Which transition mechanism tunnels IPv6 packets across IPv4 networks?",
      type: "multiple-choice",
      answer: "6to4 tunneling",
      options: ["DHCPv6", "EUI-64", "6to4 tunneling", "dual-stack"],
      note: ""
    },
    {
      question: "What does dual stack allow?",
      type: "multiple-choice",
      answer: "devices run IPv4 and IPv6 simultaneously",
      options: [
        "translates IPv4 to IPv6",
        "runs IPv4 and IPv6 together",
        "removes IPv4 completely",
        "assigns IPv6 through DHCP"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address is used as a default gateway?",
      type: "multiple-choice",
      answer: "the link-local address of the router",
      options: [
        "router global unicast",
        "link-local address of router",
        "anycast address",
        "multicast address"
      ],
      note: ""
    },
    {
      question: "Which IPv6 message replaces ARP requests?",
      type: "multiple-choice",
      answer: "neighbor solicitation",
      options: [
        "router solicitation",
        "neighbor solicitation",
        "ICMP echo request",
        "DHCPv6 request"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address is equivalent to IPv4 APIPA addresses?",
      type: "multiple-choice",
      answer: "FE80::/10",
      options: ["FE80::/10", "FF00::/8", "FC00::/7", "2000::/3"],
      note: ""
    },
    {
      question: "What must be configured for DHCPv6 stateless addressing?",
      type: "multiple-choice",
      answer: "ipv6 nd other-config-flag",
      options: [
        "ipv6 dhcp pool",
        "ipv6 nd other-config-flag",
        "ipv6 address dhcp",
        "ipv6 unicast-routing"
      ],
      note: ""
    },
    {
      question: "IPv6 address FF02::1 refers to?",
      type: "multiple-choice",
      answer: "all IPv6 nodes",
      options: ["all routers", "all hosts", "all servers", "all switches"],
      note: ""
    },
    {
      question: "What is the purpose of DHCPv6 relay?",
      type: "multiple-choice",
      answer: "forwards DHCPv6 messages between clients and servers",
      options: [
        "provides DNS",
        "assigns link-local addresses",
        "forwards DHCPv6 messages",
        "translates IPv4 to IPv6"
      ],
      note: ""
    },
    {
      question: "What is the IPv6 unspecified address?",
      type: "multiple-choice",
      answer: "::",
      options: ["0.0.0.0", "::", "::1", "FE80::"],
      note: ""
    },
    {
      question: "`show ipv6 interface` verifies what?",
      type: "multiple-choice",
      answer: "IPv6 address and link-local address configuration",
      options: [
        "MAC address filtering",
        "link speed",
        "IPv6 + link-local addresses",
        "ACL assignments"
      ],
      note: ""
    },
    {
      question: "What does SLAAC provide?",
      type: "multiple-choice",
      answer: "IPv6 addressing without requiring DHCP",
      options: [
        "temporary addresses only",
        "DHCP every renewal",
        "IPv6 without DHCP",
        "EUI-64 configuration only"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address is assigned automatically to every interface?",
      type: "multiple-choice",
      answer: "link-local address",
      options: [
        "global unicast",
        "unique local",
        "multicast",
        "link-local"
      ],
      note: ""
    },
    {
      question: "In IPv6, which address never changes when moved to another network?",
      type: "multiple-choice",
      answer: "interface ID generated using EUI-64",
      options: ["global unicast", "anycast", "EUI-64 interface ID", "link-local"],
      note: ""
    },
    {
      question: "Which IPv6 address type identifies a group of interfaces?",
      type: "multiple-choice",
      answer: "multicast",
      options: ["unicast", "anycast", "multicast", "loopback"],
      note: ""
    },
    {
      question: "What does a router send when it receives a Router Solicitation?",
      type: "multiple-choice",
      answer: "Router Advertisement",
      options: ["RS", "RA", "NS", "DHCPv6 reply"],
      note: ""
    },
    {
      question: "Which IPv6 address begins with 2001:DB8::?",
      type: "multiple-choice",
      answer: "documentation address",
      options: ["documentation", "unique local", "multicast", "test network"],
      note: ""
    },
    {
      question: "Which IPv6 DHCP method provides both an IPv6 address and all configuration parameters?",
      type: "multiple-choice",
      answer: "stateful DHCPv6",
      options: [
        "stateless DHCPv6",
        "stateful DHCPv6",
        "SLAAC",
        "manual configuration"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address is assigned by a DHCPv6 server?",
      type: "multiple-choice",
      answer: "global unicast address",
      options: [
        "link-local",
        "multicast",
        "unique local",
        "global unicast"
      ],
      note: ""
    },
    {
      question: "Which ICMPv6 message type is used for SLAAC?",
      type: "multiple-choice",
      answer: "router advertisement",
      options: [
        "router advertisement",
        "neighbor advertisement",
        "multicast solicitation",
        "router discovery"
      ],
      note: ""
    },
    {
      question: "Which type of IPv6 message informs hosts of prefix and default gateway?",
      type: "multiple-choice",
      answer: "RA",
      options: ["RS", "RA", "NS", "NA"],
      note: ""
    },
    {
      question: "Unique local IPv6 addresses are most similar to which IPv4 type?",
      type: "multiple-choice",
      answer: "private IPv4 addresses",
      options: [
        "public IPv4",
        "private IPv4",
        "APIPA",
        "multicast"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address is automatically assigned to an interface when IPv6 is enabled?",
      type: "multiple-choice",
      answer: "link-local",
      options: ["global unicast", "anycast", "link-local", "unique local"],
      note: ""
    },
    {
      question: "What is the primary benefit of dual stack?",
      type: "multiple-choice",
      answer: "supports both IPv4 and IPv6 simultaneously",
      options: [
        "tunnels IPv4 through IPv6",
        "converts IPv4 to IPv6 addresses",
        "supports IPv4 + IPv6 simultaneously",
        "removes need for NAT"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address is used to test internal stack functionality?",
      type: "multiple-choice",
      answer: "::1",
      options: ["::", "::1", "::2", "FE80::1"],
      note: ""
    },
    {
      question: "What does an IPv6 NS message verify?",
      type: "multiple-choice",
      answer: "neighbor reachability",
      options: [
        "DNS resolution",
        "router availability",
        "neighbor reachability",
        "prefix advertisement"
      ],
      note: ""
    },
    {
      question: "What is the IPv6 equivalent of IPv4 broadcast?",
      type: "multiple-choice",
      answer: "There is no broadcast in IPv6; multicast is used instead.",
      options: [
        "broadcast",
        "multicast",
        "unicast",
        "anycast"
      ],
      note: ""
    },
    {
      question: "Which IPv6 assignment method uses a DHCPv6 server?",
      type: "multiple-choice",
      answer: "stateful DHCPv6",
      options: ["stateless", "RA only", "stateful DHCPv6", "EUI-64 only"],
      note: ""
    },
    {
      question: "Which IPv6 mechanism enables automatic address creation using the MAC address?",
      type: "multiple-choice",
      answer: "EUI-64",
      options: ["SLAAC", "EUI-64", "DHCPv6", "manual"],
      note: ""
    },
    {
      question: "Which IPv6 message does a host send to request addressing information from routers?",
      type: "multiple-choice",
      answer: "router solicitation",
      options: ["router advertisement", "router solicitation", "neighbor solicitation", "DHCP request"],
      note: ""
    },
    {
      question: "What does FF02::2 represent?",
      type: "multiple-choice",
      answer: "all routers multicast group",
      options: ["all nodes", "all routers", "all DHCP servers", "all switches"],
      note: ""
    },
    {
      question: "Which IPv6 address type identifies multiple interfaces but delivers packets to the closest one?",
      type: "multiple-choice",
      answer: "anycast",
      options: ["unicast", "multicast", "anycast", "broadcast"],
      note: ""
    },
    {
      question: "What is the IPv6 prefix for link-local addresses?",
      type: "multiple-choice",
      answer: "FE80::/10",
      options: ["FC00::/7", "FE80::/10", "FF00::/8", "2000::/3"],
      note: ""
    },
    {
      question: "Which command enables IPv6 routing on a Cisco router?",
      type: "multiple-choice",
      answer: "ipv6 unicast-routing",
      options: [
        "ipv6 enable",
        "ipv6 routing",
        "ipv6 unicast-routing",
        "ipv6 on"
      ],
      note: ""
    },
    {
      question: "How many bits are in an IPv6 address?",
      type: "multiple-choice",
      answer: "128 bits",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      note: ""
    },
    {
      question: "Which IPv6 mechanism allows coexistence of IPv4 and IPv6?",
      type: "multiple-choice",
      answer: "dual stack",
      options: ["NAT64", "6to4", "tunneling", "dual stack"],
      note: ""
    },
    {
      question: "Which IPv6 address type starts with FD00::/8?",
      type: "multiple-choice",
      answer: "unique local",
      options: ["global", "link-local", "unique local", "multicast"],
      note: ""
    },
    {
      question: "What is the purpose of NAT64?",
      type: "multiple-choice",
      answer: "allows IPv6-only hosts to communicate with IPv4 hosts",
      options: [
        "translates IPv4 to IPv6 only",
        "enables multicast routing",
        "allows IPv6-only hosts to reach IPv4",
        "assigns global IPv6 addresses"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address type begins with 2000::/3?",
      type: "multiple-choice",
      answer: "global unicast",
      options: ["unique local", "global unicast", "link-local", "multicast"],
      note: ""
    },
    {
      question: "What does the IPv6 address FF02::5 represent?",
      type: "multiple-choice",
      answer: "OSPFv3 routers",
      options: ["RIPng routers", "EIGRP routers", "OSPFv3 routers", "DHCPv6 servers"],
      note: ""
    },
    {
      question: "Which IPv6 address type replaces IPv4 broadcast?",
      type: "multiple-choice",
      answer: "multicast",
      options: ["broadcast", "multicast", "unicast", "anycast"],
      note: ""
    },
    {
      question: "Which transition technology encapsulates IPv6 traffic inside IPv4 packets?",
      type: "multiple-choice",
      answer: "tunneling",
      options: ["SLAAC", "EUI-64", "tunneling", "dual stack"],
      note: ""
    },
    {
      question: "Which IPv6 address identifies a single unique interface?",
      type: "multiple-choice",
      answer: "unicast",
      options: ["unicast", "multicast", "anycast", "broadcast"],
      note: ""
    },
    {
      question: "Which IPv6 address is used by hosts when no address is assigned yet?",
      type: "multiple-choice",
      answer: "::",
      options: ["::", "::1", "FE80::", "2001::"],
      note: ""
    },
    {
      question: "Which IPv6 address type is always reachable on the same local link?",
      type: "multiple-choice",
      answer: "link-local",
      options: ["link-local", "global unicast", "anycast", "multicast"],
      note: ""
    },
    {
      question: "Which IPv6 multicast address represents all DHCPv6 servers?",
      type: "multiple-choice",
      answer: "FF05::1:3",
      options: ["FF02::1:2", "FF05::1:3", "FF02::1", "FF00::2"],
      note: ""
    },
    {
      question: "Which IPv6 address is automatically configured on every router interface?",
      type: "multiple-choice",
      answer: "link-local",
      options: ["EUI-64", "global unicast", "link-local", "site-local"],
      note: ""
    },
    {
      question: "Which IPv6 address type is used for one-to-many communication?",
      type: "multiple-choice",
      answer: "multicast",
      options: ["unicast", "multicast", "anycast", "loopback"],
      note: ""
    },
    {
      question: "Which IPv6 multicast address is used by OSPFv3?",
      type: "multiple-choice",
      answer: "FF02::5",
      options: ["FF02::9", "FF02::1", "FF02::5", "FF02::2"],
      note: ""
    },
    {
      question: "What is 2001:DB8:: used for?",
      type: "multiple-choice",
      answer: "documentation",
      options: ["global routing", "private networks", "documentation", "DHCPv6"],
      note: ""
    },
    {
      question: "What must be true for SLAAC to operate?",
      type: "multiple-choice",
      answer: "routers must send RAs with prefix information",
      options: [
        "DHCPv6 must run",
        "hosts must send NS messages",
        "routers must send RAs",
        "EUI-64 must be disabled"
      ],
      note: ""
    },
    {
      question: "Which IPv6 message verifies two-way communication between neighbors?",
      type: "multiple-choice",
      answer: "NA",
      options: ["RS", "RA", "NS", "NA"],
      note: ""
    },
    {
      question: "What is the prefix of IPv6 loopback address?",
      type: "multiple-choice",
      answer: "::1/128",
      options: ["0::/0", "::/0", "::1/128", "FE80::/10"],
      note: ""
    },
    {
      question: "Which IPv6 address type is intended for internal networks but not routed globally?",
      type: "multiple-choice",
      answer: "unique local",
      options: ["unique local", "global unicast", "multicast", "EUI-64"],
      note: ""
    },
    {
      question: "Which mechanism allows IPv6 hosts to generate their own addresses without DHCPv6?",
      type: "multiple-choice",
      answer: "SLAAC",
      options: ["SLAAC", "NAT64", "EUI-64", "manual config"],
      note: ""
    },
    {
      question: "Which IPv6 address begins with FF::/8?",
      type: "multiple-choice",
      answer: "multicast",
      options: ["multicast", "unique local", "anycast", "global unicast"],
      note: ""
    },
    {
      question: "Which IPv6 message allows a host to request a Router Advertisement immediately?",
      type: "multiple-choice",
      answer: "RS",
      options: ["NS", "NA", "RS", "DHCPv6 request"],
      note: ""
    },
    {
      question: "Which IPv6 address is used for loopback testing?",
      type: "multiple-choice",
      answer: "::1",
      options: ["0:0:0:0:1", "::1", "::0", "::2"],
      note: ""
    },
    {
      question: "Which IPv6 address scope does FE80:: belong to?",
      type: "multiple-choice",
      answer: "link-local",
      options: ["global", "unique local", "link-local", "test-net"],
      note: ""
    },
    {
      question: "What does IPv6 ND replace from IPv4?",
      type: "multiple-choice",
      answer: "ARP",
      options: ["ARP", "DNS", "DHCP", "OSPF"],
      note: ""
    },
    {
      question: "Which IPv6 address is assigned to all hosts on the local link?",
      type: "multiple-choice",
      answer: "FF02::1",
      options: ["FF02::2", "FF02::1", "FF00::1", "FE80::1"],
      note: ""
    },
    {
      question: "What is the purpose of IPv6 RS messages?",
      type: "multiple-choice",
      answer: "to request Router Advertisements",
      options: [
        "to request RAs",
        "to verify neighbor reachability",
        "to generate MAC address",
        "to create EUI-64"
      ],
      note: ""
    },
    {
      question: "Which IPv6 address is used to send traffic to the entire local network?",
      type: "multiple-choice",
      answer: "FF02::1",
      options: ["FF02::1", "FF00::1", "FE80::1", "2000::1"],
      note: ""
    },

    ]
  };
  