// AOS Finals Quiz Data
const quizData = {
    1: [ // Module 1 - Introduction to Operating System
      {
        question: "Users are the one who utilize a computer or network service trying to solve different problems.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Android is an example of Handheld OS.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Kernel acts like bridge between application and computer hardware.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In computer system operation, each device controller has a local buffer.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A computer system is made up of various components such as hardware and software.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Buffer is a region of memory used to temporarily hold data while it is being moved from one place to another.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Asymmetric clustering has one machine in hot-standby mode.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Real-time systems are used when there are time requirements or constraints like missile systems.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Software Interrupt arises due to illegal and erroneous use of an instruction or data.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Infrastructure as a service is a type of cloud computing service in which servers or storage are available over the Internet.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Computer user is one of the components of computer system.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The main memory is central to the operation of a modern computer system.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "OS must have the capability to load a program into memory and execute that program.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Private cloud runs by a company for that company's own use.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Kernel is the first program that loads after the bootloader.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Using the computer hardware in an efficient manner is one of the goals of OS.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Execute user programs and make solving user problems easier is one of the goals of OS.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Software as a service (SaaS) provides one or more applications available via the Internet.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Cloud refers to servers that are accessed over the Internet.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Distributed system is also known as loosely coupled system.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Time-sharing OS creates an interactive environment.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Dual-mode operation allows OS to protect itself and other system components.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Google Apps and Dropbox are examples of SaaS.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Cloud computing is an example of distributed system.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "OS is an interrupt driven environment.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Time-sharing is also known as multitasking.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "UNIX is an example of Network OS.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The I/O devices and the CPU both execute concurrently.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The OS is not responsible for reading and/or writing data from I/O devices such as disks, tapes, printers, keyboards, etc.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In Asymmetric multiprocessing, all processors are considered peers.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Symmetric multiprocessing applies a boss-worker relationship among processors.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Execute user programs and make solving user problems difficult is one of the goals of OS.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Each device controller does not have local buffer.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Increased throughput means increasing the number of processor, expect to get more work done in more time.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Distributed system is also known as tightly coupled system.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The user of a Batch Operating System has direct interaction with the computer.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Windows 10 is an example of hand-held operating system.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Cold boot is also known as reboot or reset.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "__________ is a program that acts as an interface or intermediary between the computer user and computer hardware.",
        type: "fill-blank",
        answer: "Operating System",
        options: ["Operating System", "Application Software", "Hardware", "Kernel"]
      },
      {
        question: "These are used to solve user computing problems such as word processors and business programs.",
        type: "multiple-choice",
        answer: "Application Programs",
        options: ["Operating System", "Application Programs", "System Software", "Utilities"]
      },
      {
        question: "Operating systems made available in source-code format which has copyleft is called __________________.",
        type: "fill-blank",
        answer: "Open-source OS",
        options: ["Open-source OS", "Proprietary OS", "Commercial OS", "Freeware"]
      },
      {
        question: "It is a signal emitted by hardware or software when a process or an event needs immediate attention.",
        type: "multiple-choice",
        answer: "Interrupt",
        options: ["Interrupt", "Signal", "Event", "Trigger"]
      },
      {
        question: "Distributed systems use ______ central processors to serve multiple real-time applications and multiple users.",
        type: "fill-blank",
        answer: "Multiple",
        options: ["Multiple", "Single", "Dual", "One"]
      },
      {
        question: "A __________ is a way for programs to interact with the OS.",
        type: "fill-blank",
        answer: "System Call",
        options: ["System Call", "API Call", "Function Call", "Method Call"]
      },
      {
        question: "The operating system should be able to detect _____ within the computer system and take the appropriate action.",
        type: "fill-blank",
        answer: "Errors",
        options: ["Errors", "Bugs", "Issues", "Problems"]
      },
      {
        question: "In program execution, the OS must have the capability to load a program into ________ and execute that program.",
        type: "fill-blank",
        answer: "Memory",
        options: ["Memory", "RAM", "Storage", "Cache"]
      },
      {
        question: "This refers to the part of an OS, or device that allows a user to enter and receive information.",
        type: "multiple-choice",
        answer: "User Interface",
        options: ["User Interface", "GUI", "Command Line", "Shell"]
      },
      {
        question: "A type of OS where the user has no direct interaction with the computer.",
        type: "multiple-choice",
        answer: "Batch OS",
        options: ["Batch OS", "Real-time OS", "Interactive OS", "Network OS"]
      },
      {
        question: "A type of computing environment where all nodes are considered peers.",
        type: "multiple-choice",
        answer: "Peer-to-peer",
        options: ["Peer-to-peer", "Client-Server", "Distributed", "Centralized"]
      },
      {
        question: "The device controllers use a/n ________ to inform the CPU that I/O operation is completed.",
        type: "fill-blank",
        answer: "Interrupt",
        options: ["Interrupt", "Signal", "Message", "Flag"]
      },
      {
        question: "It is the central part of an OS which manages system resources and is always resident in memory.",
        type: "multiple-choice",
        answer: "Kernel",
        options: ["Kernel", "Shell", "Driver", "Service"]
      },
      {
        question: "_____is a program that loads and starts the boot time tasks and processes of an OS.",
        type: "fill-blank",
        answer: "Bootloader",
        options: ["Bootloader", "BIOS", "Boot Manager", "Startup"]
      },
      {
        question: "A type of interrupt handling in which the requesting device sends interrupt to the operating system.",
        type: "multiple-choice",
        answer: "Vectored Interrupt System",
        options: ["Vectored Interrupt System", "Polling", "Direct Interrupt", "Maskable Interrupt"]
      },
      {
        question: "Refers to computing on handheld smartphones and tablet computers.",
        type: "multiple-choice",
        answer: "Mobile Computing",
        options: ["Mobile Computing", "Cloud Computing", "Edge Computing", "Distributed Computing"]
      },
      {
        question: "A software-generated interrupt caused either by an error or a user request is called _______________________.",
        type: "fill-blank",
        answer: "Trap",
        options: ["Trap", "Exception", "Fault", "Software Interrupt"]
      },
      {
        question: "_________Operating System is built exclusively for a mobile device.",
        type: "fill-blank",
        answer: "Handheld",
        options: ["Handheld", "Mobile", "Embedded", "Portable"]
      },
      {
        question: "Which is not an example of application software?",
        type: "multiple-choice",
        answer: "Windows 10",
        options: ["Microsoft Word", "Windows 10", "Google Chrome", "Adobe Photoshop"]
      },
      {
        question: "_________ is a defense of the system against internal and external attacks.",
        type: "fill-blank",
        answer: "Security",
        options: ["Security", "Protection", "Firewall", "Antivirus"]
      },
      {
        question: "It is a type of computing that delivers computing, storage and even applications as a service across a network.",
        type: "multiple-choice",
        answer: "Cloud Computing",
        options: ["Cloud Computing", "Grid Computing", "Utility Computing", "Distributed Computing"]
      },
      {
        question: "An operating system that provides services across the network:",
        type: "multiple-choice",
        answer: "Windows Server",
        options: ["Windows 10", "Windows Server", "Linux", "macOS"]
      },
      {
        question: "Which is not an example of storage device:",
        type: "multiple-choice",
        answer: "Keyboard",
        options: ["Hard Drive", "SSD", "USB Drive", "Keyboard"]
      },
      {
        question: "This refers to a text-based type of user interface:",
        type: "multiple-choice",
        answer: "Command Line Interface",
        options: ["GUI", "Command Line Interface", "Web Interface", "Touch Interface"]
      },
      {
        question: "________Operating System is an OS intended to serve real-time systems/applications that process data as it comes in, mostly without buffer delay:",
        type: "fill-blank",
        answer: "Real Time",
        options: ["Real Time", "Batch", "Interactive", "Network"]
      },
      {
        question: "A type of multiprocessing in which a boss processor controls the system and the other processors either look to the boss for instructions or have predefined tasks:",
        type: "multiple-choice",
        answer: "Asymmetric",
        options: ["Symmetric", "Asymmetric", "Parallel", "Distributed"]
      },
      {
        question: "Operating system is what type of software:",
        type: "multiple-choice",
        answer: "System",
        options: ["Application", "System", "Utility", "Middleware"]
      },
      {
        question: "_________ is any mechanism for controlling access of processes or users to resources defined by the OS:",
        type: "fill-blank",
        answer: "Protection",
        options: ["Protection", "Security", "Access Control", "Authorization"]
      },
      {
        question: "Cloud services offered are available via the Internet:",
        type: "multiple-choice",
        answer: "Public Cloud",
        options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Community Cloud"]
      },
      {
        question: "_____interrupt is a signal created and sent to the CPU that is caused by some action taken by a hardware device:",
        type: "fill-blank",
        answer: "HardWare",
        options: ["Hardware", "Software", "External", "Internal"]
      },
      {
        question: "______ operation allows OS to protect itself and other system components:",
        type: "fill-blank",
        answer: "Dual mode",
        options: ["Dual mode", "Single mode", "Multi mode", "Protected mode"]
      },
      {
        question: "A type of multiprocessing in which each processor performs all tasks within the operating system. All processors are peers and no boss-worker relationship:",
        type: "multiple-choice",
        answer: "Symmetric",
        options: ["Asymmetric", "Symmetric", "Distributed", "Parallel"]
      },
      {
        question: "It is a technology that allows OS to run as applications within other operating systems:",
        type: "multiple-choice",
        answer: "Virtualization",
        options: ["Virtualization", "Emulation", "Containerization", "Sandboxing"]
      },
      {
        question: "A type of interrupt handling in which the OS sends signal to each device asking if they have a request:",
        type: "multiple-choice",
        answer: "Polling",
        options: ["Vectored", "Polling", "Direct", "Indirect"]
      },
      {
        question: "Also known as parallel-system or multicore:",
        type: "multiple-choice",
        answer: "Multiprocessor System",
        options: ["Uniprocessor System", "Multiprocessor System", "Distributed System", "Network System"]
      },
      {
        question: "Parallel systems are also known as __________-coupled systems:",
        type: "fill-blank",
        answer: "Tightly",
        options: ["Tightly", "Loosely", "Weakly", "Strongly"]
      },
      {
        question: "It is a collection of physically separate, possibly heterogeneous computer systems that are networked to provide users with access to the various resources that the system maintains:",
        type: "multiple-choice",
        answer: "Distributed Systems",
        options: ["Centralized Systems", "Distributed Systems", "Network Systems", "Cloud Systems"]
      },
      {
        question: "_______ is a region of memory used to temporarily hold data while it is being moved from one place to another:",
        type: "fill-blank",
        answer: "Buffer",
        options: ["Buffer", "Cache", "Register", "Stack"]
      },
      {
        question: "Operating system ______ and coordinates the use of the hardware among the various application programs for the various users:",
        type: "fill-blank",
        answer: "controls",
        options: ["controls", "manages", "monitors", "supervises"]
      }
    ],
    
    2: [ // Module 2 - Process Management
      {
        question: "Operating System runs on a server and provides the server the capability to manage data, users, groups, security, applications, and other networking functions.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Refers to computing on handheld smartphones and tablet computers:",
        type: "fill-blank",
        answer: "Mobile",
        options: ["Mobile", "Cloud", "Edge", "Distributed"]
      },
      {
        question: "It alerts the processor temporarily to a high priority process requiring interruption of the current working process and then return to its previous task:",
        type: "multiple-choice",
        answer: "Interrupt",
        options: ["Interrupt", "Signal", "Event", "Exception"]
      },
      {
        question: "Bootloader is a program that loads and ends the boot time tasks and processes of an OS:",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A visual way of interacting with a computer using items such as windows, icons, and menus, used by most modern operating systems:",
        type: "multiple-choice",
        answer: "Graphical User Interface",
        options: ["Command Line", "Graphical User Interface", "Text Interface", "Terminal"]
      },
      {
        question: "This refers to CPU, memory, and I/O devices:",
        type: "multiple-choice",
        answer: "Hardware",
        options: ["Software", "Hardware", "Firmware", "Middleware"]
      },
      {
        question: "In computer system organization, the I/O devices and the CPU both execute one at a time:",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In computer system organization, one or more CPUs, device controllers connect through common bus providing access to shared memory:",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Operating system controls and coordinates the use of the hardware among the various application programs for the various users:",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "File-server is an example of client-server computing:",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Some instructions designated as privileged, only executable in kernel mode:",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Platform as a service (PaaS) provides software stack ready for application use via the Internet:",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The OS manages the different computer resources such as CPU time, memory space, file storage space, I/O devices, etc. and allocates them to different application programs and users:",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "User can use computer even without an operating system:",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Interrupt arises due to illegal and erroneous use of an instruction or data:",
        type: "fill-blank",
        answer: "Software",
        options: ["Software", "Hardware", "System", "User"]
      },
      {
        question: "The goal of CPU scheduling is to optimize system performance is to maximize the throughput:",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Program stored in your disk is considered as passive entity:",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A process is actually a cycle of CPU execution (CPU burst) and I/O wait (I/O burst).",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process, DATA section contains the global and static variables.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The process STACK contains the temporary data such as method/function parameters, return address and local variables.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Process execution begins with a CPU burst that is followed by an I/O burst.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, ready state is when the CPU is executing its instructions.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, waiting state is when the process is waiting for the OS to assign a processor to it.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A process may create several new processes, via a create-process system call, during the course of execution. The creating process is called child process.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, new state is when the process is being created.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, waiting state is when the process is waiting for some event to occur (such as an I/O completion).",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The program counter indicates the address of the next instruction to be executed for this process.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The goal of CPU scheduling is to optimize system performance is to minimize the throughput.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A computer system consists of a collection of processes.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The time from submission to completion of a process is called response time.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A process is an active entity.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "When a program is loaded into the memory and it becomes a process.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process, HEAP section contains the global and static variables.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The goal of CPU scheduling is to optimize system performance is to minimize the waiting time.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Each process is represented in the operating system by a process control block.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A process terminates when it finishes its first statement and asks the operating system to delete it using the exit system call.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The long term scheduler selects process from among the processes that are ready to execute, and allocates the CPU to one of them.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Created processes by the parent process are called children of that process.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Process is a program in execution.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A process is a passive entity.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Process control block is also known as task control block.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, running state is when the CPU is executing its instructions.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, terminated state is when the process has finished execution.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Process execution begins with a I/O burst that is followed by an CPU burst.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "User processes execute system code.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Program stored in your disk is considered as active entity.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A parent may terminate the execution of one of its children when the task assigned to the child is no longer required.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The medium term scheduler selects process from among the processes that are ready to execute, and allocates the CPU to one of them.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, ready state is when the process is waiting for some event to occur (such as an I/O completion).",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process, TEXT section includes the current activity represented by the value of program counter and the contents of the processor's registers.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The processes in the system can execute concurrently; that is, many processes may be multitasked on a CPU.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The time from submission to completion of a process is called turnaround time.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The short term scheduler selects process from among the processes that are ready to execute, and allocates the CPU to one of them.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "User processes execute user code.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A parent may terminate the execution of one of its children when the parent is exiting.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Restricting a child process to a subset of the parent's resources prevents any process from overloading the system by creating too many processes.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In concurrent process, the creating process is the parent process.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "CPU being switched from one process to another is called Context Switch.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, ready state is when the process is waiting for the OS to assign a processor to it.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A process terminates when it finishes its last statement and asks the operating system to delete it using the exit system call.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process, DATA section contains the global and dynamic variables.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In process state, running state is when the process is being created.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "What is the Turn Around Time of Process B? (NON-PREEMPTIVE PRIORITY SCHEDULING)",
        type: "multiple-choice",
        answer: "5.75",
        options: ["5.75", "6.25", "7.00", "4.50"],
        note: "For Process A: AT=0, BT=5, P=1; Process B: AT=1, BT=3, P=2; Process C: AT=2, BT=8, P=1; Process D: AT=3, BT=6, P=3"
      },
      {
        question: "What is the average waiting time? (SHORTEST JOB FIRST)",
        type: "multiple-choice",
        answer: "5.75",
        options: ["5.75", "6.25", "7.00", "4.50"],
        note: "For Process A: AT=0, BT=5; Process B: AT=1, BT=3; Process C: AT=2, BT=8; Process D: AT=3, BT=6"
      },
      {
        question: "What is the correct sequence of the process when served by the CPU? (FIRST-COME, FIRST SERVED)",
        type: "multiple-choice",
        answer: "ABCD",
        options: ["ABCD", "ABDC", "ACBD", "BACD"],
        note: "For Process A,B,C,D all arriving at time 0"
      },
      {
        question: "What is the Waiting Time of Process A? (FIRST-COME, FIRST SERVED)",
        type: "multiple-choice",
        answer: "0",
        options: ["0", "5", "8", "3"],
        note: "Process A arrives first at time 0 with burst time 5"
      },
      {
        question: "In Non-preemptive Shortest Job First, which process with no waiting time?",
        type: "multiple-choice",
        answer: "A",
        options: ["A", "B", "C", "D"],
        note: "Process A: BT=5, P=3; Process B: BT=1, P=4; Process C: BT=8, P=2; Process D: BT=3, P=1. All arrive at 0ms"
      }
    ],
    
    3: [ // Module 3 - Memory Management
      {
        question: "In address binding, programs on disk are usually stored as binary executable files.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Logical addresses are generated by the CPU.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Physical addresses are generated by the Memory Management Unit.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The user program never sees the physical addresses.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In paging, physical memory is broken into fixed-sized blocks called frames.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "In paging, logical memory is broken into blocks of the same size called pages.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "External fragmentation can be reduced by compaction.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Internal fragmentation occurs when allocated memory may be slightly larger than requested memory.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "What is size of the memory? (Given: Page or frame size = 2 bytes, No. of process page = 8 pages, No. of memory frames = 16 frames)",
        type: "multiple-choice",
        answer: "32 bytes",
        options: ["16 bytes", "24 bytes", "32 bytes", "64 bytes"],
        note: "Rename image: 'M3_Page_Table_Question_1.png'"
      },
      {
        question: "What is the physical address of letter 'M'?",
        type: "multiple-choice",
        answer: "26",
        options: ["24", "26", "27", "28"],
        note: "Rename image: 'M3_Page_Table_Question_2.png'. Letter M is in page 6, frame 13"
      },
      {
        question: "What is the physical address of letter 'H'?",
        type: "multiple-choice",
        answer: "7",
        options: ["6", "7", "8", "9"],
        note: "Rename image: 'M3_Page_Table_Question_3.png'. Letter H is in page 3, frame 5"
      },
      {
        question: "What is the physical address of letter 'K'?",
        type: "multiple-choice",
        answer: "30",
        options: ["28", "30", "31", "32"],
        note: "Rename image: 'M3_Page_Table_Question_4.png'. Letter K is in page 5, frame 15"
      },
      {
        question: "According to the page table, page 3 is mapped to what frame?",
        type: "multiple-choice",
        answer: "5",
        options: ["3", "5", "7", "9"],
        note: "Rename image: 'M3_Page_Table_Question_5.png'"
      },
      {
        question: "At what time did J5 terminate? (Variable Partitioning with compaction)",
        type: "multiple-choice",
        answer: "9:18",
        options: ["9:15", "9:18", "9:20", "9:22"],
        note: "Rename image: 'M3_Variable_Partition_Table_1.png'. OS size 300K, Memory Size 1024K"
      },
      {
        question: "What was the memory available when J3 was allocated? (Variable Partitioning)",
        type: "multiple-choice",
        answer: "604K",
        options: ["524K", "604K", "724K", "804K"],
        note: "Rename image: 'M3_Variable_Partition_Table_2.png'"
      },
      {
        question: "What is J2 arrival time? (Multiple Relocatable Variable Partitioning)",
        type: "multiple-choice",
        answer: "12:05",
        options: ["12:00", "12:05", "12:10", "12:15"],
        note: "Rename image: 'M3_Multiple_Relocatable_Table_1.png'. OS size 56K, Memory Size 256K"
      },
      {
        question: "How much is the memory available after J5 was allocated in the memory? (Multiple Relocatable Variable Partitioning)",
        type: "multiple-choice",
        answer: "30K",
        options: ["20K", "30K", "40K", "50K"],
        note: "Rename image: 'M3_Multiple_Relocatable_Table_2.png'"
      },
      {
        question: "Compute the external fragmentation using best-fit algorithm. (Multiple Fixed Partition)",
        type: "multiple-choice",
        answer: "1K",
        options: ["0K", "1K", "2K", "3K"],
        note: "Rename image: 'M3_Fixed_Partition_Table.png'. Job Queue: 4(5K), 3(4K), 2(3K), 1(4K)"
      },
      {
        question: "How much is the memory available after J5 was allocated in the memory? (Variable Partitioning)",
        type: "multiple-choice",
        answer: "324K",
        options: ["224K", "324K", "424K", "524K"],
        note: "Rename image: 'M3_Variable_Partition_J5.png'"
      },
      {
        question: "At what time was J4 allocated in the memory? (Variable Partitioning)",
        type: "multiple-choice",
        answer: "9:08",
        options: ["9:04", "9:07", "9:08", "9:10"],
        note: "Rename image: 'M3_Variable_Partition_J4_Time.png'"
      },
      {
        question: "At what time was J5 allocated in the memory? (Variable Partitioning)",
        type: "multiple-choice",
        answer: "9:09",
        options: ["9:08", "9:09", "9:10", "9:11"],
        note: "Rename image: 'M3_Variable_Partition_J5_Time.png'"
      },
      {
        question: "At what time did J7 terminate? (Variable Partitioning)",
        type: "multiple-choice",
        answer: "9:15",
        options: ["9:13", "9:14", "9:15", "9:16"],
        note: "Rename image: 'M3_Variable_Partition_J7.png'"
      },
      {
        question: "In fixed-partition allocation, which algorithm allocates the smallest hole that is big enough?",
        type: "multiple-choice",
        answer: "Best-fit",
        options: ["First-fit", "Best-fit", "Worst-fit", "Next-fit"]
      },
      {
        question: "In fixed-partition allocation, which algorithm allocates the largest hole?",
        type: "multiple-choice",
        answer: "Worst-fit",
        options: ["First-fit", "Best-fit", "Worst-fit", "Next-fit"]
      },
      {
        question: "In fixed-partition allocation, which algorithm allocates the first hole that is big enough?",
        type: "multiple-choice",
        answer: "First-fit",
        options: ["First-fit", "Best-fit", "Worst-fit", "Next-fit"]
      }
    ],
  
    4: [ // Module 4 - Virtual Memory
      {
        question: "Virtual memory allows the execution of processes that may not be completely in memory.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "One major advantage of virtual memory is that programs can be larger than physical memory.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Demand paging is a technique where pages are loaded only when they are demanded during program execution.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "A page fault occurs when a program tries to access a page that is not currently in memory.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "FIFO page replacement algorithm may suffer from Belady's anomaly.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Optimal page replacement algorithm has the lowest page-fault rate.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "LRU (Least Recently Used) replaces the page that has not been used for the longest period of time.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Using First-In-First-Out (FIFO) algorithm with 4 frames, the number of page faults is ________. (Reference String: 1 3 0 3 5 6 3)",
        type: "multiple-choice",
        answer: "6",
        options: ["5", "6", "7", "4"],
        note: "Rename image: 'M4_FIFO_4frames_1.png'"
      },
      {
        question: "Using Least Recently Used (LRU) algorithm with 3 frames, the number of page faults is ________. (Reference String: 1 3 0 3 5 6 3)",
        type: "multiple-choice",
        answer: "5",
        options: ["4", "5", "6", "7"],
        note: "Rename image: 'M4_LRU_3frames_1.png'"
      },
      {
        question: "Using OPTIMAL algorithm with 4 frames, the number of page faults is ________. (Reference String: 9 5 7 9 1 1 4 8 0 1 0 2 7)",
        type: "multiple-choice",
        answer: "7",
        options: ["6", "7", "8", "9"],
        note: "Rename image: 'M4_OPTIMAL_4frames_1.png'"
      },
      {
        question: "Using Least Recently Used (LRU) algorithm with 5 frames, the number of hits is ________. (Reference String: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1)",
        type: "multiple-choice",
        answer: "12",
        options: ["10", "11", "12", "13"],
        note: "Rename image: 'M4_LRU_5frames_hits.png'"
      },
      {
        question: "Using First-In-First-Out (FIFO) algorithm with 5 frames, the number of page faults is ________. (Reference String: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1)",
        type: "multiple-choice",
        answer: "8",
        options: ["7", "8", "9", "10"],
        note: "Rename image: 'M4_FIFO_5frames_faults.png'"
      },
      {
        question: "Using OPTIMAL algorithm with 4 frames, the number of page hits is ________. (Reference String: 1 3 0 3 5 6 3)",
        type: "multiple-choice",
        answer: "2",
        options: ["1", "2", "3", "4"],
        note: "Rename image: 'M4_OPTIMAL_4frames_hits.png'"
      },
      {
        question: "Using First-In-First-Out (FIFO) algorithm with 3 frames, the number of page faults is ________. (Reference String: 1 3 0 3 5 6 3)",
        type: "multiple-choice",
        answer: "6",
        options: ["5", "6", "7", "4"],
        note: "Rename image: 'M4_FIFO_3frames_faults.png'"
      },
      {
        question: "Using First-In-First-Out (FIFO) algorithm with 4 frames, the number of page hits is ________. (Reference String: 1 3 0 3 5 6 3)",
        type: "multiple-choice",
        answer: "1",
        options: ["0", "1", "2", "3"],
        note: "Rename image: 'M4_FIFO_4frames_hits.png'"
      },
      {
        question: "Using First-In-First-Out (FIFO) algorithm with 5 frames, the number of page hits is ________. (Reference String: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1)",
        type: "multiple-choice",
        answer: "12",
        options: ["10", "11", "12", "13"],
        note: "Rename image: 'M4_FIFO_5frames_hits_2.png'"
      },
      {
        question: "Using OPTIMAL algorithm with 4 frames, the number of page faults is ________. (Reference String: 1 3 0 3 5 6 3)",
        type: "multiple-choice",
        answer: "5",
        options: ["4", "5", "6", "7"],
        note: "Rename image: 'M4_OPTIMAL_4frames_faults_2.png'"
      },
      {
        question: "Using OPTIMAL algorithm with 4 frames, the number of page faults is ________. (Reference String: 9 5 7 9 1 1 4 8 0 1 0 2 7)",
        type: "multiple-choice",
        answer: "7",
        options: ["6", "7", "8", "9"],
        note: "Rename image: 'M4_OPTIMAL_4frames_faults_3.png'"
      },
      {
        question: "Using Least Recently Used (LRU) algorithm with 4 frames, the number of hits is ________. (Reference String: 9 5 7 9 1 1 4 8 0 1 0 2 7)",
        type: "multiple-choice",
        answer: "4",
        options: ["2", "3", "4", "5"],
        note: "Rename image: 'M4_LRU_4frames_hits_2.png'"
      },
      {
        question: "Using Least Recently Used (LRU) algorithm with 4 frames, the number of page faults is ________. (Reference String: 9 5 7 9 1 1 4 8 0 1 0 2 7)",
        type: "multiple-choice",
        answer: "9",
        options: ["7", "8", "9", "10"],
        note: "Rename image: 'M4_LRU_4frames_faults_2.png'"
      }
    ],
  
    5: [ // Module 5 - Mass Storage Management
      {
        question: "It is the time it takes to actually transfer data between disk and main memory.",
        type: "fill-blank",
        answer: "Transfer time",
        options: ["Transfer time", "Seek time", "Rotational latency", "Access time"]
      },
      {
        question: "Modern disks are addressed as large one-dimensional arrays of logical blocks, where the ______ is the smallest unit of transfer.",
        type: "fill-blank",
        answer: "logical block",
        options: ["logical block", "sector", "track", "cylinder"]
      },
      {
        question: "One of the earliest secondary-storage media is the ______.",
        type: "fill-blank",
        answer: "Magnetic Tape",
        options: ["Magnetic Tape", "Hard Disk", "Floppy Disk", "CD-ROM"]
      },
      {
        question: "It is a way to read and write data on disks, where the density of bits (bits/unit length) per track is uniform.",
        type: "multiple-choice",
        answer: "Constant Linear Velocity",
        options: ["Constant Angular Velocity", "Constant Linear Velocity", "Variable Velocity", "Fixed Velocity"]
      },
      {
        question: "A disk normally has a device ______ indicating which files are on the disk.",
        type: "fill-blank",
        answer: "directory",
        options: ["directory", "catalog", "index", "table"]
      },
      {
        question: "The disk surface is logically divided into _____, which are subdivided into sectors.",
        type: "fill-blank",
        answer: "tracks",
        options: ["tracks", "cylinders", "platters", "blocks"]
      },
      {
        question: "It is the time it takes to move the read-write head to the correct track.",
        type: "multiple-choice",
        answer: "Seek time",
        options: ["Seek time", "Transfer time", "Rotational latency", "Access time"]
      },
      {
        question: "It is a way to read and write data on disks, where the number of bits per track is uniform (constant number of sectors).",
        type: "multiple-choice",
        answer: "Constant Angular Velocity",
        options: ["Constant Linear Velocity", "Constant Angular Velocity", "Variable Velocity", "Fixed Velocity"]
      },
      {
        question: "One or more blocks that are unreadable or not writable.",
        type: "multiple-choice",
        answer: "Bad block",
        options: ["Bad block", "Corrupt block", "Defective block", "Failed block"]
      },
      {
        question: "_______ was used as an early secondary-storage medium, but the access time is much slower than for disks.",
        type: "fill-blank",
        answer: "Magnetic Tape",
        options: ["Magnetic Tape", "Punch Cards", "Paper Tape", "Drum Memory"]
      },
      {
        question: "LOOK disk scheduling algorithm is sometimes called the elevator algorithm.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The Look disk scheduling selects the request with the minimum seek time from the current head position.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The Shortest Seek Time First disk scheduling selects the request with the maximum seek time from the current head position.",
        type: "true-false",
        answer: "FALSE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "The OS can improve on the average disk service time by scheduling the requests for disk access.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "SCAN disk scheduling algorithm is sometimes called the elevator algorithm.",
        type: "true-false",
        answer: "TRUE",
        options: ["TRUE", "FALSE"]
      },
      {
        question: "Using C-LOOK (going higher tracks direction), how many THM? (Track requests: 39, 14, 38, 17. Initial head position: 10)",
        type: "multiple-choice",
        answer: "68",
        options: ["58", "68", "78", "88"],
        note: "Rename image: 'M5_CLOOK_Problem_1.png'. 100-track disk (0-99)"
      },
      {
        question: "Using SCAN (heading towards 0 point), what is the first served track from the initial head position? (Track requests: 39, 14, 38, 17. Initial head: 10)",
        type: "multiple-choice",
        answer: "0",
        options: ["0", "14", "17", "10"],
        note: "Rename image: 'M5_SCAN_Problem_1.png'"
      },
      {
        question: "Using C-SCAN (going lower tracks direction), what is the farthest distance between 2 tracks? (Track requests: 98, 53, 22, 16, 24. Initial head: 32)",
        type: "multiple-choice",
        answer: "82",
        options: ["76", "82", "66", "98"],
        note: "Rename image: 'M5_CSCAN_Problem_1.png'. From track 0 to 98 after wrapping"
      },
      {
        question: "Using C-SCAN (going lower tracks direction), what is the shortest distance between 2 tracks? (Track requests: 39, 14, 38, 17. Initial head: 10)",
        type: "multiple-choice",
        answer: "1",
        options: ["1", "3", "4", "10"],
        note: "Rename image: 'M5_CSCAN_Problem_2.png'. Between 38 and 39"
      },
      {
        question: "Using SSTF, how many THM? (Track requests: 39, 14, 38, 17. Initial head: 10)",
        type: "multiple-choice",
        answer: "47",
        options: ["37", "47", "57", "67"],
        note: "Rename image: 'M5_SSTF_Problem_1.png'. Order: 10->14->17->38->39"
      },
      {
        question: "Which of the given is considered aspects of disk management for which an operating system is responsible?",
        type: "multiple-choice",
        answer: "All of these",
        options: ["Disk scheduling", "Disk formatting", "Bad block management", "All of these"]
      },
      {
        question: "A _______ has a separate read-write head for each track.",
        type: "fill-blank",
        answer: "Fixed-head system",
        options: ["Fixed-head system", "Moving-head system", "Multi-head system", "Dual-head system"]
      },
      {
        question: "In a disk the information is recorded on the __.",
        type: "multiple-choice",
        answer: "Surface",
        options: ["Surface", "Track", "Sector", "Cylinder"]
      }
    ],

    // Add or merge this into your quizData object/file
    6: [
        // SUMMATIVE 2 (from PDF) - True/False and short items
        { question: "Function parameters and return values are extremely flexible in Swift.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "Functions can have multiple input parameters, which are written within the function’s parentheses, separated by commas.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "In function you cannot return an optional tuple.", type: "true-false", answer: "FALSE", options: ["TRUE","FALSE"] },
        { question: "You can return a tuple value using a function.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "Every function has a specific function type, made up of the parameter types and the return type of the function.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "The parameter name is used in the implementation of the function.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "Arrays, sets, and dictionaries in Swift are always clear about the types of values and keys that they can store.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "You can also define functions inside the bodies of other functions.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "If you create an array, a set, or a dictionary, and assign it to a variable (var), the collection that is created will be mutable.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "The argument label is used when calling the function.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "Function parameters are constants by default.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "You can iterate over the entire set of values in an array with the for-in loop.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "You access and modify an array through its methods and properties, or by using subscript syntax.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
    
        { question: "It accepts zero or more values of a specified type (term).", type: "fill-blank", answer: "Variadic", options: [] },
        { question: "A set operation used to create a new set with only the values common to both sets.", type: "multiple-choice", answer: "Intersection", options: ["Intersection","Union","Subtracting","Symmetric Difference"] },
        { question: "This character will be able to remove an argument label for a parameter.", type: "fill-blank", answer: "_", options: [] },
        { question: "It is used to modify a parameter’s value, and you want those changes to persist after the function call has ended.", type: "fill-blank", answer: "inout", options: [] },
        { question: "This is used when returning the return type of a function.", type: "fill-blank", answer: "->", options: [] },
        { question: "It performs a single pass through the loop block first, before considering the loop’s condition.", type: "fill-blank", answer: "Repeat-While", options: [] },
        { question: "Used to mark a loop statement or conditional statement.", type: "fill-blank", answer: "label", options: [] },
        { question: "You “call” a function with its name and pass it input values known as __________.", type: "fill-blank", answer: "argument", options: [] },
    
        // MIDTERM EXAM items (multiple choice, T/F, and short answers)
        { question: "Every function has a specific function type, made up of the parameter types and the return type of the function.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "You access and modify an array through its methods and properties, or by using subscript syntax.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "The parameter name is used in the implementation of the function.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "You can also define functions inside the bodies of other functions.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "You give a function a name that identifies what it does, and this name is used to “call” the function to perform its task when needed.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "Closures in Swift are similar to blocks in C/Objective-C and to lambdas.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "You can return a tuple value using a function.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "You can iterate over the entire set of values in an array with the for-in loop.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
        { question: "The argument label is used when calling the function.", type: "true-false", answer: "TRUE", options: ["TRUE","FALSE"] },
    
        { question: "Used as simplified ternary operator for nil values.", type: "multiple-choice", answer: "??", options: ["??","!=nil","?:","?!"] },
        { question: "A set method used to create a new set with only the values common to both sets.", type: "multiple-choice", answer: "intersection", options: ["union","symmetricDifference","subtracting","intersection"] },
        { question: "What will be the exact output given the code print(Int(\"32\")!)", type: "multiple-choice", answer: "32", options: ["32","Optional(32)","Int(\"32\")!","Program error"] },
        { question: "Which of the following produced some error: let a: Double = Double(\"10.25\") ?", type: "multiple-choice", answer: "let a: Double = Double(\"10.25\")", options: ["let a = Double(\"10.25\")","var a = Double(\"10.25\")","let a: Double = Double(\"10.25\")","let a: Double? = Double(\"10.25\")"] },
        { question: "Which of the following has incorrect syntax: var x:Int = Int(\"123\") ?", type: "multiple-choice", answer: "var x:Int = Int(\"123\")", options: ["var x:Int = 10","var x:Int? = nil","var x = Int(\"10\")","var x:Int = Int(\"123\")"] },
        { question: "Which programming languages can be used to develop iOS applications?", type: "multiple-choice", answer: "Objective-C and Swift", options: ["Java and Swift","C++ and Swift","Objective-C and Swift","Kotlin and Swift"] },
    
        { question: "A set operation to create a new set with values in either set, but not both.", type: "multiple-choice", answer: "symmetricDifference", options: ["intersection","symmetricDifference","subtracting","union"] },
        { question: "Used to display the hierarchy of your folders where each column represents a folder.", type: "multiple-choice", answer: "Column view", options: ["List view","Column view","Icon view","Cover Flow view"] },
        { question: "It is a self-contained chunk of code that performs a specific task.", type: "multiple-choice", answer: "Function", options: ["Collection","Control Flow","Function","Control Structure"] },
        { question: "It accepts zero or more values of a specified type (term).", type: "multiple-choice", answer: "variadic", options: ["tuples","functions","variadic","collections"] },
        { question: "Statement tells a loop to stop what it’s doing and start again at the beginning of the next iteration.", type: "multiple-choice", answer: "continue", options: ["return","break","fallthrough","continue"] },
        { question: "It is used as the return type for a function to return multiple values as part of one compound return value.", type: "multiple-choice", answer: "Tuple", options: ["Collection","Void","Tuple","inout"] },
        { question: "Which of the following does not belong to the group (+, -, *, %)?", type: "multiple-choice", answer: "%", options: ["+","-","*","%"] },
        { question: "It performs a single pass through the loop block first, before considering the loop’s condition.", type: "multiple-choice", answer: "Repeat-While", options: ["Do-While","Repeat-While","For-In","While"] },
    
        { question: "Which statement is correct? let a = 1_0_1_0", type: "multiple-choice", answer: "let a = 1_0_1_0", options: ["let a = 1-0-1-0","let a:UInt8 = 1010","let a:Int8 = 1010","let a = 1_0_1_0"] },
        { question: "On Mac it represents the files on your computer.", type: "multiple-choice", answer: "folders", options: ["menus","folders","icons","images"] },
        { question: "Who first introduced the iPhone on the market?", type: "multiple-choice", answer: "Steve Jobs", options: ["Steve Jobs","Steve Wozniak","Mark Zuckerberg","Tim Cook"] },
        { question: "Which of the following does not belong to the group: Sets, Arrays (Lists), Dictionaries, Tuples?", type: "multiple-choice", answer: "Tuples", options: ["Sets","Arrays (Lists)","Dictionaries","Tuples"] },
        { question: "This property is used to check if a given string or collection is empty or not.", type: "multiple-choice", answer: "isEmpty", options: ["isEmpty","isempty","countIsZero","nil"] },
    
        { question: "Which of the following is part of iOS Application development: Tools/Design/Process/Language/All?", type: "multiple-choice", answer: "All of the above", options: ["Tools","Design","Process","Language","All of the above"] },
        { question: "Swift provides simplified memory management with ___.", type: "multiple-choice", answer: "ARC", options: ["ART","Garbage Collector","ARC","GIGO"] },
        { question: "A visual editor for designing user interfaces for your iPhone and iPad apps.", type: "multiple-choice", answer: "Interface Builder", options: ["Views","Storyboard","Instruments","Interface Builder"] },
        { question: "The latest Xcode version (from PDF).", type: "multiple-choice", answer: "None of the above — the latest version is Xcode 26", options: ["13","16","15","17","None of the above — the latest version is Xcode 26"] },
        { question: "It defines an alternative name for an existing type.", type: "multiple-choice", answer: "type aliases", options: ["type declaration","type definition","type cast","type aliases"] },
        { question: "These icons generally display a document with an app logo; they indicate what application created it or opens it.", type: "multiple-choice", answer: "files", options: ["images","applications","tools","files"] },
        { question: "These are unordered collections of key-value associations.", type: "multiple-choice", answer: "Dictionary", options: ["Set","Range","Dictionary","Array (List)"] },
        { question: "An ordered type of collection whose values can be duplicated.", type: "multiple-choice", answer: "Array (List)", options: ["Dictionary","Range","Array (List)","Set"] },
        { question: "This is used when returning the return type of a function (symbol).", type: "multiple-choice", answer: "->", options: [", (Comma)","Void","-> (a hyphen followed by a right angle bracket)",": (Colon)"] },
    
        { question: "An analysis tool to assist you to optimize apps and monitor for memory leaks in real time.", type: "multiple-choice", answer: "Instruments", options: ["Simulator","Interface Builder","Instruments","Xcode"] },
        { question: "Used to display the contents of your folder as a series of icons.", type: "multiple-choice", answer: "Icon View", options: ["Cover Flow View","List View","Icon View","Column View"] },
        { question: "A statement that compares a value against several possible matching patterns.", type: "multiple-choice", answer: "switch", options: ["for-in","if","while","switch"] },
        { question: "These are closures that have a name and don’t capture any values.", type: "multiple-choice", answer: "Global Functions", options: ["Local Functions","Global Functions","Recursive Functions","Nested Functions"] },
        { question: "It makes programming easier, flexible, and more fun for iOS development.", type: "multiple-choice", answer: "Swift", options: ["Swift","Objective-C","Python","Java"] },
        { question: "It provides access to your files and folders.", type: "multiple-choice", answer: "Finder", options: ["Desktop","Explorer","Folders","Finder"] },
        { question: "A double represents a _____ bit floating-point number.", type: "multiple-choice", answer: "64", options: ["32","64","128","16"] },
        { question: "It makes it easy to jump to tests and run them: Test Navigator.", type: "multiple-choice", answer: "Test Navigator", options: ["Instruments","Debugging","Test Navigator","Monitor"] },
    
        { question: "It is the minimum value of UInt8.", type: "multiple-choice", answer: "0", options: ["-128","-255","-127","0"] },
        { question: "The iOS version where 3rd party applications became available.", type: "multiple-choice", answer: "2.0", options: ["1.0","4.0","2.0","3.0"] },
        { question: "Version of iPhone where ‘S’ iPhone was introduced.", type: "multiple-choice", answer: "4.0", options: ["4.0","5.0","7.0","6.0"] },
        { question: "First OS name for iPhone.", type: "multiple-choice", answer: "iPhone OS", options: ["iPhone OS","iPOS","iOperating System","OSi"] },
        { question: "Which of the following will produce an error: let a = 0o88 ?", type: "multiple-choice", answer: "let a = 0o88", options: ["let a = 1234","let a = 0xff","let a = 0b1010","let a = 0o88"] },
        { question: "You call a function with its name and pass input values known as:", type: "multiple-choice", answer: "argument", options: ["signature","parameter","variadic","argument"] },
        { question: "Has quick access to Finder functions for highlighted items, such as Get Info, Move to Trash, and Services.", type: "multiple-choice", answer: "Action Menu", options: ["Search Field","Finder","Search Field","Action Menu"] },
    
        { question: "Are unnamed closures written in a lightweight syntax that can capture values from surrounding context?", type: "multiple-choice", answer: "Closure expressions", options: ["Closure expressions","Global functions","Nested functions","Anonymous Functions"] },
        { question: "When did Apple introduce the App Store to iOS?", type: "multiple-choice", answer: "July 2008", options: ["June 2008","July 2008","October 2008","November 2008"] },
        { question: "The iOS version when iPad was unveiled.", type: "multiple-choice", answer: "iOS 3.2", options: ["iOS 3.2","iOS 10","iOS 4","iOS 14"] },
        { question: "Date when iPhone SDK was released.", type: "multiple-choice", answer: "March 6, 2008", options: ["March 6, 2009","April 6, 2009","March 6, 2008","April 6, 2008"] },
        { question: "It simulates an iPhone or an iPad on your Mac.", type: "multiple-choice", answer: "iOS simulator", options: ["iOS simulator","iOS emulator","iOS virtual machine","iOS devices"] },
        { question: "Used to display your folder in a spreadsheet-style manner.", type: "multiple-choice", answer: "List view", options: ["List view","Icon view","Column view","Cover flow view"] },
    
        { question: "Used to find out whether an optional contains a value and make it available: optional binding", type: "multiple-choice", answer: "optional binding", options: ["unwrapped optionals","optional binding","forced unwrapped","optional conditions"] },
        { question: "Which of the following will produce some error: let b = UInt.max + 1 ?", type: "multiple-choice", answer: "let b = UInt.max + 1", options: ["let b:UInt = Int.max + 1","let b = UInt.max - 1","let b = Int.max + 1","let b = UInt.max + 1"] },
    
        { question: "A statement ends execution of an entire control flow statement immediately.", type: "multiple-choice", answer: "break", options: ["stop","break","continue","fallthrough"] },
        { question: "Used to mark a loop statement or conditional statement.", type: "multiple-choice", answer: "label", options: ["goto","label","pin","comment"] },
        { question: "It splits the Xcode editor in two.", type: "multiple-choice", answer: "Assistant Editor", options: ["Interface Builder","Assistant Editor","Code Editor","Instruments"] },
        { question: "The Apple made this as the primary interaction model: touch.", type: "multiple-choice", answer: "touch", options: ["audio","camera","screen","touch"] },
        { question: "The Xcode version where Swift programming was introduced.", type: "multiple-choice", answer: "6.0", options: ["5.0","4.0","6.0","7.0"] },
        { question: "When you define a function, you can optionally define named typed input values known as _______.", type: "multiple-choice", answer: "parameter", options: ["signature","argument","return","parameter"] },
        { question: "Used to compare two versions of a file and see commit logs: Version Editor and Source Control.", type: "multiple-choice", answer: "Version Editor and Source Control", options: ["Git Repository and Source Control","Version Editor and Git Control","Version Editor and Source Control","Git Editor and Source Control"] },
        { question: "It is used to modify a parameter’s value, and you want those changes to persist after the function call has ended.", type: "multiple-choice", answer: "inout", options: ["var","tuple","& (ampersand)","inout"] },
    
        // Short code-output / code-writing items (converted to fill-blank where appropriate)
        { question: "Write the exact output: let abc = (UInt8.max, UInt8.min, Int8.max, Int8.min); print(\"\\(abc.3) \\(abc.1) \\(abc.0) \\(abc.2) \")", type: "fill-blank", answer: "-128 0 255 127", options: [] },
        { question: "Write the exact output: var x = 1; for y in 5...5 { x *= y % 2 } print(\"x = \\(x)\")", type: "fill-blank", answer: "x = 1", options: [] },
        { question: "Write the exact output: let str = \"123\"; for ch in str { print(ch,\"*\",separator:\"-\", terminator:\":\") }", type: "fill-blank", answer: "1-*:2-*:3-*:", options: [] },
        { question: "Write exact output: let x: Int! = 10; let y: Int = x; print(x!, y)", type: "fill-blank", answer: "10 10", options: [] },
        { question: "Given A:Set = [1,2,3,4,5] and B:Set = [0,1,2,3,4,5], print(A.isSubset(of: B), A.isStrictSuperset(of: B), A.isStrictSubset(of: B), A.isDisjoint(with: B)) — what is the output?", type: "fill-blank", answer: "true, false, true, false", options: [] },
        { question: "Given dictionary var items = [1:\"apple\", 2:\"orange\", 3:\"mango\"] — statement to empty collection?", type: "fill-blank", answer: "items.removeAll()", options: [] },
        { question: "Empty initializer of a mutable set C with String using explicit type.", type: "fill-blank", answer: "var C: Set<String> = []", options: [] },
        { question: "Given a tuple (123, 3.14, \"Triangle\"), declare a tuple variable shape with explicit type assigning the given values.", type: "fill-blank", answer: "var shape: (Int, Double, String) = (123, 3.14, \"Triangle\")", options: [] },
        { question: "Apply closure optimizations and convert print(nums.sorted(by: { ... })) to its equivalent operator form for sorting descending.", type: "fill-blank", answer: "print(nums.sorted(by: >))", options: [] },
    
        // SUMMATIVE 3 — UI / MVC / Xcode questions
        { question: "Which of the following is not part of a Table View Datasource structures? (short answer)", type: "fill-blank", answer: "Status Bar Controller", options: [] },
        { question: "The top layer (front layer) of the Tab Bar Controller?", type: "multiple-choice", answer: "Tab bar", options: ["Tab bar","Nav bar","Toolbar","Status bar"] },
        { question: "This is called before the receiver’s view is about to be displayed onscreen and before any animation.", type: "multiple-choice", answer: "viewWillAppear", options: ["viewDidLoad","viewWillAppear","viewDidAppear","awakeFromNib"] },
        { question: "It is called after the receiver’s view was added to a window.", type: "multiple-choice", answer: "viewDidLoad", options: ["viewDidLoad","viewWillAppear","awakeFromNib","viewDidAppear"] },
        { question: "The delegate is usually expected to conform to a specific ___.", type: "fill-blank", answer: "protocol", options: [] },
        { question: "This appears at the bottom of the iPhone app and holds icons tied to functions such as Share, Download, Delete.", type: "multiple-choice", answer: "Toolbar", options: ["Toolbar","Tab Bar","Status Bar","Navigation Bar"] },
        { question: "It gets and processes interactions from the view.", type: "multiple-choice", answer: "Controller", options: ["Model","View","Controller","Delegate"] },
        { question: "Compare controller and model responsibilities in MVC (short answer).", type: "fill-blank", answer: "Model manages data and business logic; Controller manages user input and updates Model and View.", options: [] },
        { question: "Its normally used to perform additional initialization steps on views that are loaded from nib files.", type: "multiple-choice", answer: "awakeFromNib", options: ["viewDidLoad","awakeFromNib","viewWillAppear","viewDidAppear"] },
        { question: "This table view content can only be built in the storyboard.", type: "multiple-choice", answer: "Static", options: ["Static","Dynamic","Multiple","Single"] },
        { question: "It gives the users the option to navigate between page hierarchies.", type: "multiple-choice", answer: "Navigation Bar", options: ["Navigation Bar","Tab Bar","Toolbar","Status Bar"] },
        { question: "Which of the following is not true when testing iOS apps on device: Using CSR and Provisioning is optional.", type: "multiple-choice", answer: "Using CSR and Provisioning is optional (Not true)", options: ["True","False","Using CSR and Provisioning is optional (Not true)","Not applicable"] },
        { question: "Which is not true about a Tab Bar Controller? VCs are loaded one by one.", type: "multiple-choice", answer: "VCs are loaded one by one (Not true)", options: ["True","False","VCs are loaded one by one (Not true)","Not applicable"] },
        { question: "It simplifies the setup between view controllers with a graphical flow between screens.", type: "multiple-choice", answer: "Storyboard", options: ["Storyboard","XIB","Nib","Interface Builder"] },
        { question: "It is used to specify code in response to changes to properties.", type: "multiple-choice", answer: "Property Observers", options: ["Property Observers","Delegates","Notifications","KVO"] },
        { question: "It presents data in a single-column list of scrollable rows that may be divided into sections.", type: "multiple-choice", answer: "Table View", options: ["Table View","Collection View","Scroll View","Stack View"] },
        { question: "It displays device’s current battery level, 3G connection, bars of reception, phone carrier, etc.", type: "multiple-choice", answer: "Status Bar", options: ["Status Bar","Navigation Bar","Toolbar","Tab Bar"] },
        { question: "It is used to allow multiple objects to communicate.", type: "multiple-choice", answer: "Delegates", options: ["Delegates","Notifications","Closures","Protocols"] },
    
        { question: "It provides quick access to the various parts of your project: navigator area.", type: "fill-blank", answer: "navigator area", options: [] },
        { question: "It allows you to edit source code, UIs, and other resources: editor area.", type: "fill-blank", answer: "editor area", options: [] },
        { question: "Allows you to view and edit information about items selected in Editor area: inspector area.", type: "fill-blank", answer: "inspector area", options: [] },
        { question: "It provides console and shows errors and background operations: debug area.", type: "fill-blank", answer: "debug area", options: [] },
        { question: "Summarize the main areas in Xcode and their functions (short answer).", type: "fill-blank", answer: "Navigator: quick access; Editor: edit code/UI; Inspector: item info; Debug: console/errors.", options: [] },
    
        // IMAGE questions (these include the extracted image paths)
        { question: "Refer to the image (page with diagram). Provide the requested set outputs or answers as shown in the PDF (image below).", type: "fill-blank", answer: "See image and answer per the PDF (example outputs included in other questions)", options: [], image: "assets/img_page3_xref14.png" },
        { question: "Refer to the image (page with diagram). Answer/describe the interface or layout shown (short answer).", type: "fill-blank", answer: "Describe the UI shown in the image per PDF context", options: [], image: "assets/img_page12_xref36.png" }
    
    ] // end module 6  
  };
  